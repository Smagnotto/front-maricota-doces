import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../pages/login/service/login.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.userValue) {
      return true;
    }

    this.router.navigate(['/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
