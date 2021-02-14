import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-produtos-info',
  templateUrl: './produtos-info.component.html',
  styleUrls: ['./produtos-info.component.css'],
})
export class ProdutosInfoComponent implements OnInit {
  constructor(
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  formProduto: FormGroup = new FormGroup({
    nomeProduto: new FormControl('', [Validators.required]),
    precoProduto: new FormControl({ value: 0, disabled: true }),
    produtoAtivo: new FormControl(true),
  });

  ngOnInit(): void {}

  cancel(): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja sair? Os dados serão perdidos!',
      accept: () => {
        this.router.navigate(['/produtos']);
      },
    });
  }

  nextPage(): void {
    this.router.navigate(['produtos/cadastro/insumos']);
  }

  get nomeProduto() {
    return this.formProduto.get('nomeProduto');
  }
}
