import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Insumo } from '../domain/insumo';

@Injectable({
  providedIn: 'root',
})
export class InsumoService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string = environment.baseUrl;

  getAllInsumos(): Observable<Insumo[]> {
    return this.http
      .get<Insumo[]>(`${this.url}/insumos`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getInsumoById(id: number): Observable<Insumo> {
    return this.http
      .get<Insumo>(`${this.url}/insumos/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  saveInsumo(insumo: Insumo): Observable<Insumo> {
    return this.http
      .post<Insumo>(
        `${this.url}/insumos`,
        JSON.stringify(insumo),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  updateInsumo(insumo: Insumo): Observable<Insumo> {
    return this.http
      .put<Insumo>(
        `${this.url}/insumos/${insumo.id}`,
        JSON.stringify(insumo),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteInsumo(id: number) {
    return this.http
      .delete<Insumo>(this.url + '/' + id, this.httpOptions)
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
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
