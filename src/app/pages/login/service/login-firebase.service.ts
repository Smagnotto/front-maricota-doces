import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/User';
import { LoginService } from './login.service';

@Injectable()
export class LoginFirebaseService extends LoginService {
  private router = inject(Router);
  private auth = getAuth();
  private userSubject: BehaviorSubject<User>;
  user: Observable<User>;

  private KEY_USER = 'user';

  constructor() {
    super();
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem(this.KEY_USER)!)
    );
    this.user = this.userSubject.asObservable();

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        localStorage.setItem(this.KEY_USER, JSON.stringify(user as User));
        this.userSubject.next(user as User);
      } else {
        localStorage.setItem(this.KEY_USER, null!);
        this.userSubject.next(null!);
      }
    });
  }

  get userValue(): User {
    return this.userSubject.value;
  }

  async login(email: string, password: string): Promise<void> {
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
    await signOut(this.auth);
    localStorage.removeItem(this.KEY_USER);
    this.userSubject.next(null!);
    this.router.navigate(['/login']);
  }
}
