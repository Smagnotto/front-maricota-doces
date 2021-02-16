import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Produto } from '../domain/produto';
import { ListaProduto } from '../domain/produto-lista';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string = environment.baseUrl;
  private path: string = 'v1/produtos'

  getAllProdutos(): Observable<ListaProduto[]> {
    return this.http
      .get<ListaProduto[]>(`${this.url}/${this.path}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.http
      .get<Produto>(`${this.url}/${this.path}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  saveProduto(produto: Produto): Observable<Produto> {
    return this.http
      .post<Produto>(
        `${this.url}/${this.path}`,
        JSON.stringify(produto),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  updateProduto(produto: Produto): Observable<Produto> {
    return this.http
      .put<Produto>(
        `${this.url}/${this.path}/${produto.id}`,
        JSON.stringify(produto),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteProduto(id: number) {
    return this.http
      .delete<Produto>(`${this.url}/${this.path}/${id}`, this.httpOptions)
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
