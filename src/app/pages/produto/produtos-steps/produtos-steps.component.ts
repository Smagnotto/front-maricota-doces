import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { Produto } from '../domain/produto';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';
import { ProdutoService } from '../services/produto.service';

@Component({
    selector: 'app-produtos-steps',
    templateUrl: './produtos-steps.component.html',
    styleUrls: ['./produtos-steps.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProdutosStepsComponent implements OnInit, OnDestroy {
  items: MenuItem[];
  subscription: Subscription;

  constructor(
    private cadastroProdutoService: CadastroProdutoService,
    private router: Router,
    private produtoService: ProdutoService,
    private messageService: MessageService
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
        label: 'Componentes',
        routerLink: '/componentes',
      },
      {
        label: 'Revisão',
        routerLink: '/revisao',
      },
    ];

    this.subscription = this.cadastroProdutoService.cadastroComplete$.subscribe(
      (cadastro) => {
        // preco/custo não são enviados: o backend os calcula a partir dos
        // insumos, componentes e da margem de lucro configurada em /v1/configuracoes.
        let produto: Produto = {
          nome: cadastro.nome,
          ativo: cadastro.ativo,
          id: cadastro.id | 0,
          insumos: cadastro.insumos,
          componentes: cadastro.componentes
        };

        let subscribeApi: Observable<Produto>;

        if (!produto.id)
          subscribeApi = this.produtoService.saveProduto(produto);
        else subscribeApi = this.produtoService.updateProduto(produto);

        subscribeApi.subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Produto Cadastrado',
              detail: 'O produto foi cadastrado com sucesso.',
            });
            this.router.navigate(['/produtos']);
          },
          error: (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Não foi possível salvar o produto',
              detail: typeof error === 'string' ? error : 'Verifique os dados informados e tente novamente.',
            });
          },
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
