import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { TableHeader } from 'src/app/components/table-responsive/model/table-header-responsive';
import { TypeColumns } from 'src/app/components/table-responsive/model/type-columns';
import { ComponenteProduto } from '../domain/componente-produto';
import { Produto } from '../domain/produto';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';
import { ProdutoService } from '../services/produto.service';

@Component({
    selector: 'app-cadastro-componentes-produtos',
    templateUrl: './cadastro-componentes-produtos.component.html',
    styleUrls: ['./cadastro-componentes-produtos.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CadastroComponentesProdutosComponent implements OnInit {
  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private confirmationService: ConfirmationService,
    public cadastroProdutoService: CadastroProdutoService,
    private route: ActivatedRoute
  ) {}

  formCadastroComponente: UntypedFormGroup = new UntypedFormGroup({
    nomeComponente: new UntypedFormControl({ value: '' }, [Validators.required]),
    quantidadeComponente: new UntypedFormControl(0, [
      Validators.required,
      Validators.min(1),
    ]),
    custoComponente: new UntypedFormControl({ value: 0, disabled: true }),
    idProduto: new UntypedFormControl({ value: 0, disabled: true }),
    autoCompleteNomeComponente: new UntypedFormControl(''),
  });

  suggestions: Produto[] = [];

  headersComponentes: TableHeader[] = [
    {
      fieldName: 'nome',
      labelColumn: 'Nome',
      sortableColumn: true,
      typeColumn: TypeColumns.String,
    },
    {
      fieldName: 'quantidade',
      labelColumn: 'Quantidade',
      sortableColumn: true,
      typeColumn: TypeColumns.String,
    },
    {
      fieldName: 'valor',
      labelColumn: 'Valor Total',
      sortableColumn: true,
      typeColumn: TypeColumns.Currency,
    },
    {
      fieldName: '',
      labelColumn: 'Ações',
      sortableColumn: false,
      typeColumn: TypeColumns.ActionsButtons,
    },
  ];

  ngOnInit(): void {
    this.resetForm();
  }

  search(event: any) {
    const query = event.query;
    const idProdutoAtual = this.cadastroProdutoService.cadastroProduto.id;

    this.produtoService.getProdutoByNome(query).subscribe((produtos: Produto[]) => {
      this.suggestions = produtos.filter((p) => p.id !== idProdutoAtual);
    });
  }

  selecionaComponente(event: AutoCompleteSelectEvent): void {
    const produto = event.value as Produto;

    this.idProduto?.setValue(produto.id);
    this.nomeComponente?.setValue(produto.nome);
    this.custoComponente?.setValue(produto.custo ?? produto.preco ?? 0);
  }

  prevPage(): void {
    this.router.navigate(['../insumos'], { relativeTo: this.route });
  }

  nextPage(): void {
    this.router.navigate(['../revisao'], { relativeTo: this.route });
  }

  vincularComponente() {
    if (this.formCadastroComponente.valid) {
      let componente: ComponenteProduto = {
        id_produto: this.idProduto?.value,
        nome: this.nomeComponente?.value,
        quantidade: this.quantidadeComponente?.value,
        valor: this.quantidadeComponente?.value * this.custoComponente?.value,
      };

      if (
        this.cadastroProdutoService.cadastroProduto.componentes.filter(
          (x) => x.id_produto === componente.id_produto
        ).length > 0
      ) {
        this.confirmationService.confirm({
          header: 'Produto repetido.',
          message: 'Não é possível adicionar o mesmo produto como componente',
          acceptLabel: 'OK',
          rejectVisible: false,
        });

        this.formCadastroComponente.markAllAsTouched();
      } else {
        this.cadastroProdutoService.cadastroProduto.componentes.push(componente);

        this.resetForm();
        this.suggestions = [];
      }
    } else {
      this.formCadastroComponente.markAllAsTouched();
    }
  }

  private resetForm(): void {
    this.formCadastroComponente.reset({
      idProduto: 0,
      quantidadeComponente: 0,
      custoComponente: 0,
    });
  }

  private deleteComponente(componentes: ComponenteProduto[], componente: ComponenteProduto) {
    return componentes.filter((item) => {
      return item != componente;
    });
  }

  onEdit(componente: ComponenteProduto) {
    this.idProduto?.setValue(componente.id_produto);
    this.nomeComponente?.setValue(componente.nome);
    this.autoCompleteNomeComponente?.setValue({ nome: componente.nome });
    this.quantidadeComponente?.setValue(componente.quantidade);
    this.custoComponente?.setValue(
      componente.quantidade ? componente.valor / componente.quantidade : 0
    );

    this.cadastroProdutoService.cadastroProduto.componentes = this.deleteComponente(
      this.cadastroProdutoService.cadastroProduto.componentes,
      componente
    );
  }

  onDelete(componente: ComponenteProduto) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        let componentes = [...this.cadastroProdutoService.cadastroProduto.componentes];

        this.cadastroProdutoService.cadastroProduto.componentes = [
          ...this.deleteComponente(componentes, componente),
        ];
      },
    });
  }

  get nomeComponente() {
    return this.formCadastroComponente.get('nomeComponente');
  }

  get quantidadeComponente() {
    return this.formCadastroComponente.get('quantidadeComponente');
  }

  get idProduto() {
    return this.formCadastroComponente.get('idProduto');
  }

  get autoCompleteNomeComponente() {
    return this.formCadastroComponente.get('autoCompleteNomeComponente');
  }

  get custoComponente() {
    return this.formCadastroComponente.get('custoComponente');
  }
}
