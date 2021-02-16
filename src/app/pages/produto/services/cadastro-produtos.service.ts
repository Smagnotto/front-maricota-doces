import { Injectable } from '@angular/core';
import { InitEditableRow } from 'primeng/table';
import { Subject } from 'rxjs';
import { Insumo } from '../../insumos/domain/insumo';
import { Produto } from '../domain/produto';

@Injectable()
export class CadastroProdutoService {
  cadastroProduto: Produto;

  private cadastroComplete = new Subject<any>();

  cadastroComplete$ = this.cadastroComplete.asObservable();

  constructor() {
    this.init();
  }

  init(): void {
    this.cadastroProduto = {
      id: 0,
      ativo: true,
      nome: '',
      preco: 0,
      insumos: []
    };

  }

  complete() {
    this.cadastroComplete.next(this.cadastroProduto);

    this.init();
  }
}
