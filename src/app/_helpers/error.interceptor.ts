import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { LoginService } from '../pages/login/service/login.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);

  return next(req).pipe(
    catchError(err => {
      if (err.status === 401) {
        loginService.logout();
        location.reload();
      }
      const error = err.error?.message || err.statusText;
      return throwError(() => error);
    })
  );
};
