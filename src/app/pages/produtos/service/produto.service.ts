import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Produto } from '../model/ProdutoInterface';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string =
    'https://my-json-server.typicode.com/smagnotto/maricota-doces-fake/produtos';

  getAllProdutos(): Observable<Produto[]> {
    return this.http
      .get<Produto[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  saveProduto(produto: Produto) {
    return this.http
      .post<Produto>(this.url, JSON.stringify(produto), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateProduto(produto: Produto) {
    return this.http
      .put<Produto>(
        `${this.url}/${produto.id}`,
        JSON.stringify(produto),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteProduto(produto: Produto) {
    return this.http
      .delete<Produto>(`${this.url}/${produto.id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
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
