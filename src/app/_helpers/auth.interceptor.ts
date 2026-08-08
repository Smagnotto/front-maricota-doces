import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { from, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SupabaseService } from '../core/supabase/supabase.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (environment.backendType !== 'supabase') {
    return next(req);
  }

  const supabase = inject(SupabaseService);

  return from(supabase.client.auth.getSession()).pipe(
    switchMap(({ data }) => {
      const token = data.session?.access_token;
      if (token) {
        const authReq = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        });
        return next(authReq);
      }
      return next(req);
    })
  );
};
