import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Insumo } from '../domain/insumo';
import { InsumoService } from './insumo.service';

@Injectable()
export class InsumoJavaService extends InsumoService {
  private http = inject(HttpClient);
  private url = environment.baseUrl;
  private path = 'v1/insumos';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllInsumos(ativo?: boolean): Observable<Insumo[]> {
    const query = ativo === undefined ? '' : `?ativo=${ativo}`;
    return this.http
      .get<Insumo[]>(`${this.url}/${this.path}/${query}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getInsumoByNome(nome: string): Observable<Insumo[]> {
    return this.http
      .get<Insumo[]>(`${this.url}/${this.path}?nome=${nome}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getInsumoById(id: number): Observable<Insumo> {
    return this.http
      .get<Insumo>(`${this.url}/${this.path}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  saveInsumo(insumo: Insumo): Observable<Insumo> {
    return this.http
      .post<Insumo>(`${this.url}/${this.path}`, JSON.stringify(insumo), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateInsumo(insumo: Insumo): Observable<Insumo> {
    return this.http
      .put<Insumo>(`${this.url}/${this.path}/${insumo.id}`, JSON.stringify(insumo), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteInsumo(id: number): Observable<Insumo> {
    return this.http
      .delete<Insumo>(`${this.url}/${this.path}/${id}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = error.error instanceof ErrorEvent
      ? error.error.message
      : `Codigo do erro: ${error.status}, mensagem: ${error.message}`;
    return throwError(() => errorMessage);
  }
}
