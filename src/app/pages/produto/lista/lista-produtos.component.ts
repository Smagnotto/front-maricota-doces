import { Component, OnInit } from '@angular/core';
import { TableHeader } from 'src/app/components/table-responsive/model/table-header-responsive';
import { TypeColumns } from 'src/app/components/table-responsive/model/type-columns';
import { ProdutoService } from 'src/app/pages/produto/services/produto.service';
import { Produto } from '../domain/produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
})
export class ListaProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  headers: TableHeader[] = [
    {
      fieldName: 'nome',
      labelColumn: 'Nome',
      sortableColumn: true,
      typeColumn: TypeColumns.String,
    },
    {
      fieldName: 'preco',
      labelColumn: 'Preço',
      sortableColumn: true,
      typeColumn: TypeColumns.Currency,
    },
    {
      fieldName: 'ativo',
      labelColumn: 'Ativo',
      sortableColumn: false,
      typeColumn: TypeColumns.Boolean,
    },
    {
      fieldName: '',
      labelColumn: 'Ações',
      sortableColumn: false,
      typeColumn: TypeColumns.ActionsButtons,
    },
  ];

  isLoading: boolean = false;

  constructor(private service: ProdutoService) {}

  ngOnInit() {
    this.getAllProdutos();
  }

  private getAllProdutos(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.service.getAllProdutos().subscribe((produtos: Produto[]) => {
        this.produtos = produtos;
        this.isLoading = false;
      });
    }, 5000);
  }

  onEdit(insumo: Produto) {
    console.log(`Edit -> ${insumo.id}`)
  }

  onDelete(insumo: Produto) {
    console.log(`Delete -> ${insumo.id}`)
  }
}
