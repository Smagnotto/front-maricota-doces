import { Injectable } from '@angular/core';
import { InitEditableRow } from 'primeng/table';
import { Subject } from 'rxjs';
import { Insumo } from '../../insumos/domain/insumo';
import { Produto } from '../domain/produto';

@Injectable()
export class CadastroProdutoService {
  cadastroProduto: Produto;
  insumosVinculados: Insumo[];

  private cadastroComplete = new Subject<any>();

  cadastroComplete$ = this.cadastroComplete.asObservable();

  constructor() {
    this.init();
  }

  private init(): void {
    this.cadastroProduto = {
      id: 0,
      ativo: true,
      nome: '',
      preco: 0,
    };

    this.insumosVinculados = [];
  }

  complete() {
    let cadastroCompleto = {
      produto: this.cadastroProduto,
      insumosVinculados: this.insumosVinculados,
    };

    this.cadastroComplete.next(cadastroCompleto);

    this.init();
  }
}
