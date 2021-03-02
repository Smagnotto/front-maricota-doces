import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  private KEY_USER: string = 'user';

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem(this.KEY_USER)!)
    );

    this.user = this.userSubject.asObservable();

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userSubject.next(user as User);
      } else {
        localStorage.setItem(this.KEY_USER, null!);
        this.userSubject.next(null!);
      }
    });
  }

  login(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        const userData: User = {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
        };


        localStorage.setItem(this.KEY_USER, JSON.stringify(userData));
        this.userSubject.next(userData)
      })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem(this.KEY_USER)!);
    return user !== null && user.email !== null;
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem(this.KEY_USER);
      this.userSubject.next(null!);
      this.router.navigate(['/login']);
    });
  }
}
