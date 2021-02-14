import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-produtos-steps',
  templateUrl: './produtos-steps.component.html',
  styleUrls: ['./produtos-steps.component.css'],
})
export class ProdutosStepsComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

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
  }
}
