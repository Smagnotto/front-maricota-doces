import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private http = inject(HttpClient);
  private url = environment.urlViaCep;

  getEnderecoByCep(cep: string): Observable<any> {
    return this.http
      .get<any>(this.url.replace('#cep#', cep.replace('-', '')))
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = error.error instanceof ErrorEvent
      ? error.error.message
      : `Codigo do erro: ${error.status}, mensagem: ${error.message}`;
    return throwError(() => errorMessage);
  }
}
