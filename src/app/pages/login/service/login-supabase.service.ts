import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupabaseService } from 'src/app/core/supabase/supabase.service';
import { User } from '../model/User';
import { LoginService } from './login.service';

@Injectable()
export class LoginSupabaseService extends LoginService {
  private router = inject(Router);
  private supabase = inject(SupabaseService);
  private userSubject: BehaviorSubject<User>;
  user: Observable<User>;

  private KEY_USER = 'user';

  constructor() {
    super();
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem(this.KEY_USER)!)
    );
    this.user = this.userSubject.asObservable();

    this.supabase.client.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const userData: User = {
          uid: session.user.id,
          email: session.user.email!,
          displayName: session.user.user_metadata?.['display_name'] || session.user.email!,
        };
        localStorage.setItem(this.KEY_USER, JSON.stringify(userData));
        this.userSubject.next(userData);
      } else {
        localStorage.removeItem(this.KEY_USER);
        this.userSubject.next(null!);
      }
    });
  }

  get userValue(): User {
    return this.userSubject.value;
  }

  async login(email: string, password: string): Promise<void> {
    const { data, error } = await this.supabase.client.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;

    const userData: User = {
      uid: data.user.id,
      email: data.user.email!,
      displayName: data.user.user_metadata?.['display_name'] || data.user.email!,
    };
    localStorage.setItem(this.KEY_USER, JSON.stringify(userData));
    this.userSubject.next(userData);
  }

  async logout(): Promise<void> {
    await this.supabase.client.auth.signOut();
    localStorage.removeItem(this.KEY_USER);
    this.userSubject.next(null!);
    this.router.navigate(['/login']);
  }
}
