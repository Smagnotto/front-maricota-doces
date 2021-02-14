import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';
@Component({
  selector: 'app-produtos-info',
  templateUrl: './produtos-info.component.html',
  styleUrls: ['./produtos-info.component.css'],
})
export class ProdutosInfoComponent implements OnInit {
  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    public cadastroProdutoService: CadastroProdutoService
  ) {}

  submitted: boolean = false;

  formProduto: FormGroup = new FormGroup({
    id: new FormControl({ value: 0, disabled: true }),
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl({ value: 0, disabled: true }),
    ativo: new FormControl(true),
  });

  ngOnInit(): void {
    this.id?.setValue(this.cadastroProdutoService.cadastroProduto.id);
    this.nome?.setValue(this.cadastroProdutoService.cadastroProduto.nome);
    this.preco?.setValue(this.cadastroProdutoService.cadastroProduto.preco);
    this.ativo?.setValue(this.cadastroProdutoService.cadastroProduto.ativo);
  }

  cancel(): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja sair? Os dados serão perdidos!',
      accept: () => {
        this.router.navigate(['/produtos']);
      },
    });
  }

  nextPage(): void {
    if (this.formProduto.valid) {
      
      this.cadastroProdutoService.cadastroProduto = this.formProduto.value;
      this.router.navigate(['produtos/cadastro/insumos']);

      return;
    }

    this.submitted = true;
  }

  get id() {
    return this.formProduto.get('id');
  }

  get nome() {
    return this.formProduto.get('nome');
  }

  get preco() {
    return this.formProduto.get('preco');
  }

  get ativo() {
    return this.formProduto.get('ativo');
  }
}
