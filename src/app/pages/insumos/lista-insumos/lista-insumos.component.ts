import { Component, OnInit, ChangeDetectionStrategy, ApplicationRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { TableHeader } from 'src/app/components/table-responsive/model/table-header-responsive';
import { TypeColumns } from 'src/app/components/table-responsive/model/type-columns';
import { Insumo } from '../domain/insumo';
import { InsumoService } from '../services/insumo.service';

@Component({
    selector: 'app-lista-insumos',
    templateUrl: './lista-insumos.component.html',
    styleUrls: ['./lista-insumos.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ListaInsumosComponent implements OnInit {
  produtos: Insumo[] = [];

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
      fieldName: 'tipo',
      labelColumn: 'Tipo',
      sortableColumn: true,
      typeColumn: TypeColumns.String
    },
    {
      fieldName: 'ativo',
      labelColumn: 'Ativo',
      sortableColumn: false,
      typeColumn: TypeColumns.Boolean,
      isDisabled: true,
    },
    {
      fieldName: '',
      labelColumn: 'Ações',
      sortableColumn: false,
      typeColumn: TypeColumns.ActionsButtons,
    },
  ];

  isLoading: boolean = false;

  filtroAtivoOptions = [
    { label: 'Todos', value: 'todos' },
    { label: 'Ativos', value: 'ativos' },
    { label: 'Inativos', value: 'inativos' },
  ];
  filtroAtivo: string = 'todos';

  private appRef = inject(ApplicationRef);

  constructor(
    private service: InsumoService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllInsumos();
  }

  onFiltroAtivoChange(): void {
    this.getAllInsumos();
  }

  private getAllInsumos(): void {
    this.isLoading = true;
    const ativo = this.filtroAtivo === 'todos' ? undefined : this.filtroAtivo === 'ativos';

    this.service.getAllInsumos(ativo).subscribe({
      next: (produtos: Insumo[]) => {
        this.produtos = produtos;
        this.isLoading = false;
        this.appRef.tick();
      },
      error: (err) => {
        console.error('Erro ao carregar insumos:', err);
        this.isLoading = false;
        this.appRef.tick();
      }
    });
  }

  onEdit(insumo: Insumo) {
    this.router.navigate(['cadastro', insumo.id], { relativeTo: this.route });
  }

  onDelete(insumo: Insumo) {
    this.confirmationService.confirm({
      message: 'Deseja excluir o insumo? Essa operação não pode ser desfeita',
      accept: () => {
        this.service.deleteInsumo(insumo.id).subscribe((response) => {
          this.getAllInsumos();
        });
      },
    });
  }
}
