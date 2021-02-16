import { Component, OnInit } from '@angular/core';
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
    private service: InsumoService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllInsumos();
  }

  private getAllInsumos(): void {
    this.isLoading = true;
    this.service.getAllInsumos().subscribe((produtos: Insumo[]) => {
      this.produtos = produtos;
      this.isLoading = false;
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
