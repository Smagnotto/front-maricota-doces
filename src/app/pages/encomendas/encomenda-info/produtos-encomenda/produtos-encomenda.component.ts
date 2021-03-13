import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { TableHeader } from 'src/app/components/table-responsive/model/table-header-responsive';
import { TypeColumns } from 'src/app/components/table-responsive/model/type-columns';
import { Produto } from 'src/app/pages/produto/domain/produto';
import { ProdutoService } from 'src/app/pages/produto/services/produto.service';
import { ProdutoEncomenda } from './model/ProdutoEncomenda';

@Component({
  selector: 'app-produtos-encomenda',
  templateUrl: './produtos-encomenda.component.html',
  styleUrls: ['./produtos-encomenda.component.css'],
})
export class ProdutosEncomendaComponent implements OnInit {
  constructor(
    private produtoService: ProdutoService,
    private confirmationService: ConfirmationService
  ) {}

  headerProdutos: TableHeader[] = [
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
      typeColumn: TypeColumns.Currency,
    },
    {
      fieldName: 'preco',
      labelColumn: 'Preço',
      sortableColumn: true,
      typeColumn: TypeColumns.Currency,
    },
    {
      fieldName: 'total',
      labelColumn: 'Preço Total',
      sortableColumn: true,
      typeColumn: TypeColumns.Currency,
    },
  ];

  filteredProdutos: Produto[] = [];
  submitted: boolean = false;
  produtosVinculados: ProdutoEncomenda[] = [];

  formProdutos: FormGroup = new FormGroup({
    quantidadeProduto: new FormControl(0, [
      Validators.min(1),
      Validators.required,
    ]),
    nomeProduto: new FormControl('', [Validators.required]),
    autoCompleteNomeProduto: new FormControl(''),
    precoProduto: new FormControl({ value: 0, disabled: true }),
    idProduto: new FormControl(''),
  });

  @Output() onSelectProduto: EventEmitter<ProdutoEncomenda> = new EventEmitter();

  ngOnInit(): void {}

  onDelete(produto: Produto) {}

  onEdit(produto: Produto) {}

  filterProduto(event: any) {
    const { query } = event;

    this.produtoService.getProdutoByNome(query).subscribe((response) => {
      this.filteredProdutos = response;
    });
  }

  selecionaProduto(produto: Produto) {
    this.nomeProduto?.setValue(produto.nome);
    this.idProduto?.setValue(produto.id);
    this.precoProduto?.setValue(produto.preco);
  }

  VincularProdutos(formProdutos: FormGroup) {
    if (formProdutos.valid) {
      const produto: ProdutoEncomenda = {
        id: this.idProduto?.value,
        nome: this.nomeProduto?.value,
        preco: this.precoProduto?.value,
        quantidade: this.quantidadeProduto?.value,
        total: this.quantidadeProduto?.value * this.precoProduto?.value,
      };

      if (
        this.produtosVinculados.filter((x) => x.id === produto.id).length > 0
      ) {
        this.confirmationService.confirm({
          header: 'Produto repetido.',
          message: 'Não é possível adicionar o mesmo produto',
          acceptLabel: 'OK',
          rejectVisible: false,
        });

        this.submitted = true;
      } else {
        this.produtosVinculados.push(produto);
        this.onSelectProduto.emit(produto);

        this.formProdutos.reset({ quantidadeProduto: 0, precoProduto: 0 });
        this.filteredProdutos = [];
        this.submitted = false;
      }
    } else {
      this.submitted = true;
    }
  }

  get quantidadeProduto() {
    return this.formProdutos.get('quantidadeProduto');
  }

  get nomeProduto() {
    return this.formProdutos.get('nomeProduto');
  }

  get idProduto() {
    return this.formProdutos.get('idProduto');
  }

  get precoProduto() {
    return this.formProdutos.get('precoProduto');
  }
}
