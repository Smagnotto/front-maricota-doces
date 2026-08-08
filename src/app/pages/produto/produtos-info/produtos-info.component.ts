import { Component, OnInit, ChangeDetectionStrategy, ApplicationRef, inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Produto } from '../domain/produto';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';
import { ProdutoService } from '../services/produto.service';
@Component({
    selector: 'app-produtos-info',
    templateUrl: './produtos-info.component.html',
    styleUrls: ['./produtos-info.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProdutosInfoComponent implements OnInit {
  private appRef = inject(ApplicationRef);

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    public cadastroProdutoService: CadastroProdutoService,
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  formProduto: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl({ value: 0, disabled: true }),
    nome: new UntypedFormControl('', [Validators.required]),
    custo: new UntypedFormControl({ value: 0, disabled: true }),
    preco: new UntypedFormControl({ value: 0, disabled: true }),
    ativo: new UntypedFormControl(true),
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let idInsumo = params['id'];

      if (idInsumo) this.getProduto(idInsumo);
      else this.fillForm(this.cadastroProdutoService.cadastroProduto);
    });
  }

  private getProduto(id: number): void {
    this.produtoService.getProdutoById(id).subscribe({
      next: (response) => {
        this.fillForm(response);
        this.appRef.tick();
      },
      error: (err) => console.error('Erro ao carregar produto:', err)
    });
  }

  private fillForm(produto: Produto) {
    this.id?.setValue(produto.id);
    this.nome?.setValue(produto.nome);
    this.custo?.setValue(produto.custo);
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
        custo: this.custo?.value,
        preco: this.preco?.value,
        insumos: this.cadastroProdutoService.cadastroProduto.insumos,
        componentes: this.cadastroProdutoService.cadastroProduto.componentes
      };

      this.cadastroProdutoService.cadastroProduto = produto;
      this.router.navigate(['insumos'], { relativeTo: this.route });

      return;
    }

    this.formProduto.markAllAsTouched();
  }

  get id() {
    return this.formProduto.get('id');
  }

  get nome() {
    return this.formProduto.get('nome');
  }

  get custo() {
    return this.formProduto.get('custo');
  }

  get preco() {
    return this.formProduto.get('preco');
  }

  get ativo() {
    return this.formProduto.get('ativo');
  }
}
