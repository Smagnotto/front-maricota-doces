import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/User';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginFirebaseService extends LoginService {
  private router = inject(Router);
  private auth: any;
  private userSubject: BehaviorSubject<User>;
  user: Observable<User>;

  private KEY_USER = 'user';

  constructor() {
    super();
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem(this.KEY_USER)!)
    );
    this.user = this.userSubject.asObservable();
    this.initFirebase();
  }

  private async initFirebase() {
    const { initializeApp, getApps } = await import('firebase/app');
    if (!getApps().length) {
      initializeApp(environment.firebase);
    }
    const { getAuth, onAuthStateChanged } = await import('firebase/auth');
    this.auth = getAuth();

    onAuthStateChanged(this.auth, (user: any) => {
      if (user) {
        const userData: User = { uid: user.uid, email: user.email, displayName: user.displayName };
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
    const { getAuth, signInWithEmailAndPassword } = await import('firebase/auth');
    if (!this.auth) this.auth = getAuth();

    const result = await signInWithEmailAndPassword(this.auth, email, password);
    const userData: User = {
      uid: result.user.uid,
      email: result.user.email!,
      displayName: result.user.displayName!,
    };
    localStorage.setItem(this.KEY_USER, JSON.stringify(userData));
    this.userSubject.next(userData);
  }

  async logout(): Promise<void> {
    const { signOut } = await import('firebase/auth');
    await signOut(this.auth);
    localStorage.removeItem(this.KEY_USER);
    this.userSubject.next(null!);
    this.router.navigate(['/login']);
  }
}
