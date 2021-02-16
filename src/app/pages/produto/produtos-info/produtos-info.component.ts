import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Produto } from '../domain/produto';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';
import { ProdutoService } from '../services/produto.service';
@Component({
  selector: 'app-produtos-info',
  templateUrl: './produtos-info.component.html',
  styleUrls: ['./produtos-info.component.css'],
})
export class ProdutosInfoComponent implements OnInit {
  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    public cadastroProdutoService: CadastroProdutoService,
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  submitted: boolean = false;

  formProduto: FormGroup = new FormGroup({
    id: new FormControl({ value: 0, disabled: true }),
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl({ value: 0 }),
    ativo: new FormControl(true),
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let idInsumo = params['id'];

      if (idInsumo) this.getProduto(idInsumo);
      else this.fillForm(this.cadastroProdutoService.cadastroProduto);
    });
  }

  private getProduto(id: number): void {
    this.produtoService.getProdutoById(id).subscribe((response) => {
      this.fillForm(response);
    });
  }

  private fillForm(produto: Produto) {
    this.id?.setValue(produto.id);
    this.nome?.setValue(produto.nome);
    this.preco?.setValue(produto.preco);
    this.ativo?.setValue(produto.ativo);

    this.cadastroProdutoService.cadastroProduto = produto;

  }

  cancel(): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja sair? Os dados serão perdidos!',
      accept: () => {
        this.cadastroProdutoService.init();
        this.router.navigate(['/produtos']);
      },
    });
  }

  nextPage(): void {
    if (this.formProduto.valid) {
      let produto: Produto = {
        ativo: this.ativo?.value,
        nome: this.nome?.value,
        id: this.id?.value,
        preco: this.preco?.value,
        insumos: this.cadastroProdutoService.cadastroProduto.insumos
      };

      this.cadastroProdutoService.cadastroProduto = produto;
      this.router.navigate(['insumos'], { relativeTo: this.route });

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
