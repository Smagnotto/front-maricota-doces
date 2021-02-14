import { Component, OnInit } from '@angular/core';
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
    }
  ];

  isLoading: boolean = false;

  constructor(private service: InsumoService) {}

  ngOnInit() {
    this.getAllInsumos();
  }

  private getAllInsumos(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.service.getAllInsumos().subscribe((produtos: Insumo[]) => {
        this.produtos = produtos;
        this.isLoading = false;
      });
    }, 5000);
  }

  onEdit(insumo: Insumo) {
    console.log(`Edit -> ${insumo.id}`)
  }

  onDelete(insumo: Insumo) {
    console.log(`Delete -> ${insumo.id}`)
  }
}
