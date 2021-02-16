import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { Produto } from '../domain/produto';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos-steps',
  templateUrl: './produtos-steps.component.html',
  styleUrls: ['./produtos-steps.component.css'],
})
export class ProdutosStepsComponent implements OnInit, OnDestroy {
  items: MenuItem[];
  subscription: Subscription;

  constructor(
    private cadastroProdutoService: CadastroProdutoService,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Produto',
        routerLink: '/cadastro',
      },
      {
        label: 'Insumos',
        routerLink: '/insumos',
      },
      {
        label: 'Revisão',
        routerLink: '/revisao',
      },
    ];

    this.subscription = this.cadastroProdutoService.cadastroComplete$.subscribe(
      (cadastro) => {
        let produto: Produto = {
          nome: cadastro.nome,
          ativo: cadastro.ativo,
          preco: cadastro.preco,
          id: cadastro.id | 0,
          insumos: cadastro.insumos
        };

        let subscribeApi: Observable<Produto>;

        if (!produto.id)
          subscribeApi = this.produtoService.saveProduto(produto);
        else subscribeApi = this.produtoService.updateProduto(produto);

        subscribeApi.subscribe((response) => {
          this.router.navigate(['/produtos']);
        });
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
