import { inject, Injectable, NgZone } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private ngZone = inject(NgZone);
  private _client: SupabaseClient;

  get client(): SupabaseClient {
    if (!this._client) {
      this._client = createClient(
        environment.supabase.url,
        environment.supabase.anonKey
      );
    }
    return this._client;
  }

  fromQuery<T>(query: PromiseLike<T>): Observable<T> {
    return new Observable<T>(subscriber => {
      query.then(
        value => this.ngZone.run(() => {
          subscriber.next(value);
          subscriber.complete();
        }),
        err => this.ngZone.run(() => subscriber.error(err))
      );
    });
  }
}
