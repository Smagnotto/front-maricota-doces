import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Configuracoes } from '../domain/configuracoes';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracoesService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string = environment.baseUrl;
  private path: string = 'v1/configuracoes'

  getConfiguracoes(): Observable<Configuracoes> {
    return this.http
      .get<Configuracoes>(`${this.url}/${this.path}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateConfiguracoes(configuracoes: Configuracoes): Observable<Configuracoes> {
    return this.http
      .put<Configuracoes>(
        `${this.url}/${this.path}`,
        JSON.stringify(configuracoes),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
