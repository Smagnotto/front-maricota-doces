import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';
import { ProdutoService } from '../services/produto.service';

@Component({
    selector: 'app-revisao-cadastro-produtos',
    templateUrl: './revisao-cadastro-produtos.component.html',
    styleUrls: ['./revisao-cadastro-produtos.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class RevisaoCadastroProdutosComponent implements OnInit {
  constructor(
    public cadastroProdutoService: CadastroProdutoService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) {}

  custoProduto: number = 0;
  precoProduto: number = 0;
  isLoadingSimulacao: boolean = false;

  ngOnInit() {
    this.simularPrecificacao();
  }

  simularPrecificacao() {
    this.isLoadingSimulacao = true;

    this.produtoService.simularProduto(this.cadastroProdutoService.cadastroProduto).subscribe({
      next: (precificacao) => {
        this.custoProduto = precificacao.custo;
        this.precoProduto = precificacao.preco;
        this.isLoadingSimulacao = false;
      },
      error: () => {
        this.isLoadingSimulacao = false;
      },
    });
  }

  prevPage(): void {
    this.router.navigate(['../componentes'], { relativeTo: this.route });
  }

  finalizar(): void {
    this.cadastroProdutoService.complete();
  }
}
