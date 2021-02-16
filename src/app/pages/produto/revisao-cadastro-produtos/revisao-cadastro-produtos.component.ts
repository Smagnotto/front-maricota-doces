import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';

@Component({
  selector: 'app-revisao-cadastro-produtos',
  templateUrl: './revisao-cadastro-produtos.component.html',
  styleUrls: ['./revisao-cadastro-produtos.component.css'],
})
export class RevisaoCadastroProdutosComponent implements OnInit {
  constructor(public cadastroProdutoService: CadastroProdutoService, 
    private router: Router,
    private route: ActivatedRoute) {}

  margemLucro = 100;
  precoProduto: number;

  precoTotalProduto: number;

  ngOnInit() {
    // this.calculatePrecoProduto();
    // this.calculatePrecoTotalProduto();
  }

  // calculatePrecoProduto() {
  //   let total = 0;
  //   for (let insumo of this.cadastroProdutoService.insumosVinculados) {
  //     total += insumo.preco;
  //   }

  //   this.precoProduto = total;
  // }

  // calculatePrecoTotalProduto() {

  //   this.precoTotalProduto = this.precoProduto + this.precoProduto * (this.margemLucro / 100);
  // }

  prevPage(): void {
    this.router.navigate(['../insumos'], { relativeTo: this.route });
  }

  finalizar(): void {
    this.cadastroProdutoService.complete();
  }
}
