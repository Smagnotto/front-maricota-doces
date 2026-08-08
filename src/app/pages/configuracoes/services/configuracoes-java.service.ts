import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Configuracoes } from '../domain/configuracoes';
import { ConfiguracoesService } from './configuracoes.service';

@Injectable()
export class ConfiguracoesJavaService extends ConfiguracoesService {
  private http = inject(HttpClient);
  private url = environment.baseUrl;
  private path = 'v1/configuracoes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getConfiguracoes(): Observable<Configuracoes> {
    return this.http
      .get<Configuracoes>(`${this.url}/${this.path}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateConfiguracoes(configuracoes: Configuracoes): Observable<Configuracoes> {
    return this.http
      .put<Configuracoes>(`${this.url}/${this.path}`, JSON.stringify(configuracoes), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = error.error instanceof ErrorEvent
      ? error.error.message
      : `Codigo do erro: ${error.status}, mensagem: ${error.message}`;
    return throwError(() => errorMessage);
  }
}
