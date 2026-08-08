import { Observable } from 'rxjs';
import { Produto } from '../domain/produto';
import { ListaProduto } from '../domain/produto-lista';
import { Precificacao } from '../domain/precificacao';

export abstract class ProdutoService {
  abstract getAllProdutos(ativo?: boolean): Observable<ListaProduto[]>;
  abstract getProdutoById(id: number): Observable<Produto>;
  abstract getProdutoByNome(nome: string): Observable<Produto[]>;
  abstract saveProduto(produto: Produto): Observable<Produto>;
  abstract updateProduto(produto: Produto): Observable<Produto>;
  abstract deleteProduto(id: number): Observable<Produto>;
  abstract simularProduto(produto: Produto): Observable<Precificacao>;
}
