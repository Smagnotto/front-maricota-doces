import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Produto } from '../domain/produto';
import { ListaProduto } from '../domain/produto-lista';
import { Precificacao } from '../domain/precificacao';
import { ProdutoService } from './produto.service';

@Injectable()
export class ProdutoJavaService extends ProdutoService {
  private http = inject(HttpClient);
  private url = environment.baseUrl;
  private path = 'v1/produtos';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllProdutos(ativo?: boolean): Observable<ListaProduto[]> {
    const query = ativo === undefined ? '' : `?ativo=${ativo}`;
    return this.http
      .get<ListaProduto[]>(`${this.url}/${this.path}/${query}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.http
      .get<Produto>(`${this.url}/${this.path}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getProdutoByNome(nome: string): Observable<Produto[]> {
    return this.http
      .get<Produto[]>(`${this.url}/${this.path}?nome=${nome}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  saveProduto(produto: Produto): Observable<Produto> {
    return this.http
      .post<Produto>(`${this.url}/${this.path}`, JSON.stringify(produto), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateProduto(produto: Produto): Observable<Produto> {
    return this.http
      .put<Produto>(`${this.url}/${this.path}/${produto.id}`, JSON.stringify(produto), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteProduto(id: number): Observable<Produto> {
    return this.http
      .delete<Produto>(`${this.url}/${this.path}/${id}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  simularProduto(produto: Produto): Observable<Precificacao> {
    const simulacao = {
      nome: produto.nome,
      ativo: produto.ativo,
      insumos: produto.insumos,
      componentes: produto.componentes,
    };
    return this.http
      .post<Precificacao>(`${this.url}/${this.path}/simular`, JSON.stringify(simulacao), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = error.error instanceof ErrorEvent
      ? error.error.message
      : `Codigo do erro: ${error.status}, mensagem: ${error.message}`;
    return throwError(() => errorMessage);
  }
}
