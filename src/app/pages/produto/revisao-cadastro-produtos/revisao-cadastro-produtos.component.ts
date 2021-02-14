import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../domain/produto';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';

@Component({
  selector: 'app-revisao-cadastro-produtos',
  templateUrl: './revisao-cadastro-produtos.component.html',
  styleUrls: ['./revisao-cadastro-produtos.component.css'],
})
export class RevisaoCadastroProdutosComponent implements OnInit {
  constructor(public cadastroProdutoService: CadastroProdutoService, private router: Router) {}

  margemLucro = 100;
  precoProduto: number;

  precoTotalProduto: number;

  ngOnInit() {
    this.calculatePrecoProduto();
    this.calculatePrecoTotalProduto();
  }

  calculatePrecoProduto() {
    let total = 0;
    for (let insumo of this.cadastroProdutoService.insumosVinculados) {
      total += insumo.preco;
    }

    this.precoProduto = total;
  }

  calculatePrecoTotalProduto() {

    this.precoTotalProduto = this.precoProduto + this.precoProduto * (this.margemLucro / 100);
  }

  prevPage(): void {
    this.router.navigate(['produtos/cadastro/insumos']);
  }

  finalizar(): void {
    this.cadastroProdutoService.complete();
  }
}
