import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cliente } from '../domain/cliente';
import { ClienteService } from './cliente.service';

@Injectable()
export class ClienteJavaService extends ClienteService {
  private http = inject(HttpClient);
  private url = environment.baseUrl;
  private path = 'v1/clientes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllClientes(ativo?: boolean): Observable<Cliente[]> {
    const query = ativo === undefined ? '' : `?ativo=${ativo}`;
    return this.http
      .get<Cliente[]>(`${this.url}/${this.path}/${query}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http
      .get<Cliente>(`${this.url}/${this.path}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getClienteByNome(nome: string): Observable<Cliente[]> {
    return this.http
      .get<Cliente[]>(`${this.url}/${this.path}?nome=${nome}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  saveCliente(cliente: Cliente): Observable<Cliente> {
    return this.http
      .post<Cliente>(`${this.url}/${this.path}`, JSON.stringify(cliente), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http
      .put<Cliente>(`${this.url}/${this.path}/${cliente.id}`, JSON.stringify(cliente), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteCliente(id: number): Observable<Cliente> {
    return this.http
      .delete<Cliente>(`${this.url}/${this.path}/${id}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = error.error instanceof ErrorEvent
      ? error.error.message
      : `Codigo do erro: ${error.status}, mensagem: ${error.message}`;
    return throwError(() => errorMessage);
  }
}
