import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../pages/login/service/login.service';

export const authGuard: CanActivateFn = (_route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.userValue) {
    return true;
  }

  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};
