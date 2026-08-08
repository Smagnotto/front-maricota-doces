import { Injectable, inject } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SupabaseService } from '../supabase/supabase.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PushNotificationService {
  private swPush = inject(SwPush);
  private supabase = inject(SupabaseService);
  private http = inject(HttpClient);

  private subscribedSubject = new BehaviorSubject<boolean>(false);
  subscribed$ = this.subscribedSubject.asObservable();

  private readonly STORAGE_KEY = 'push_subscription';

  constructor() {
    this.subscribedSubject.next(!!localStorage.getItem(this.STORAGE_KEY));
  }

  get isSupported(): boolean {
    return this.swPush.isEnabled;
  }

  get isSubscribed(): boolean {
    return this.subscribedSubject.value;
  }

  subscribe(): Observable<boolean> {
    if (!this.isSupported) {
      return of(false);
    }

    return from(
      this.swPush.requestSubscription({ serverPublicKey: environment.vapidPublicKey })
    ).pipe(
      switchMap(subscription => this.saveSubscription(subscription)),
      tap(success => {
        if (success) {
          localStorage.setItem(this.STORAGE_KEY, 'true');
          this.subscribedSubject.next(true);
        }
      }),
      catchError(() => {
        this.subscribedSubject.next(false);
        return of(false);
      })
    );
  }

  unsubscribe(): Observable<boolean> {
    if (!this.isSupported) {
      return of(true);
    }

    return from(this.swPush.unsubscribe()).pipe(
      tap(() => {
        localStorage.removeItem(this.STORAGE_KEY);
        this.subscribedSubject.next(false);
      }),
      map(() => true),
      catchError(() => {
        localStorage.removeItem(this.STORAGE_KEY);
        this.subscribedSubject.next(false);
        return of(true);
      })
    );
  }

  listenToMessages(): Observable<any> {
    return this.swPush.messages;
  }

  listenToNotificationClicks(): Observable<any> {
    return this.swPush.notificationClicks;
  }

  private saveSubscription(subscription: PushSubscription): Observable<boolean> {
    const payload = subscription.toJSON();

    if (environment.backendType === 'supabase') {
      return from(
        this.supabase.client.from('push_subscriptions').upsert(
          {
            endpoint: payload.endpoint,
            p256dh: payload.keys?.['p256dh'],
            auth: payload.keys?.['auth'],
            user_agent: navigator.userAgent,
          },
          { onConflict: 'endpoint' }
        )
      ).pipe(
        map(({ error }) => !error),
        catchError(() => of(false))
      );
    }

    return this.http.post(`${environment.baseUrl}/v1/push-subscriptions`, payload).pipe(
      map(() => true),
      catchError(() => of(true))
    );
  }
}
