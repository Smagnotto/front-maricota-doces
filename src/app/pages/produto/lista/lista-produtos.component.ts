import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { TableHeader } from 'src/app/components/table-responsive/model/table-header-responsive';
import { TypeColumns } from 'src/app/components/table-responsive/model/type-columns';
import { ProdutoService } from 'src/app/pages/produto/services/produto.service';
import { ListaProduto } from '../domain/produto-lista';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
})
export class ListaProdutosComponent implements OnInit {
  produtos: ListaProduto[] = [];

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

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
    private cadastroProdutoService: CadastroProdutoService
  ) {}

  ngOnInit() {
    this.getAllProdutos();
  }

  private getAllProdutos(): void {
    this.isLoading = true;
    this.service.getAllProdutos().subscribe((produtos: ListaProduto[]) => {
      this.produtos = produtos;
      this.isLoading = false;
    });
  }

  onEdit(produto: ListaProduto) {
    this.router.navigate(['/produtos/cadastro', produto.id], { relativeTo: this.route });
  }

  onDelete(produto: ListaProduto) {
    this.confirmationService.confirm({
      message: 'Deseja excluir o insumo? Essa operação não pode ser desfeita',
      accept: () => {
        this.service.deleteProduto(produto.id).subscribe((response) => {
          this.getAllProdutos();
        });
      },
    });
  }
}
