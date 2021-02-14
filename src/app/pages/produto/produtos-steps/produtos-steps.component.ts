import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';

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
    private router: Router
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
        console.log(cadastro);
        this.router.navigate(['/produtos']);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
