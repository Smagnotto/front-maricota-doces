import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { TableHeader } from 'src/app/components/table-responsive/model/table-header-responsive';
import { TypeColumns } from 'src/app/components/table-responsive/model/type-columns';

@Component({
  selector: 'app-lista-encomendas',
  templateUrl: './lista-encomendas.component.html',
  styleUrls: ['./lista-encomendas.component.css']
})
export class ListaEncomendasComponent implements OnInit {

  encomendas: any[] = [{
    'nome_cliente': 'Cliente Teste',
    'entregue': false,
    'preco': 198.08,
    'data_encomenda': new Date(2021, 2, 27, 17, 30),
    'pago': true
  }];

  headers: TableHeader[] = [
    {
      fieldName: 'entregue',
      labelColumn: 'Entregue',
      sortableColumn: false,
      typeColumn: TypeColumns.Boolean,
      callback: (row) => this.AlteraEntregaEncomenda(row)
    },
    {
      fieldName: 'nome_cliente',
      labelColumn: 'Nome Cliente',
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
      fieldName: 'data_encomenda',
      labelColumn: 'Data Encomenda',
      sortableColumn: true,
      typeColumn: TypeColumns.Date,
    },
    {
      fieldName: 'pago',
      labelColumn: 'Pago',
      sortableColumn: true,
      typeColumn: TypeColumns.Boolean,
      isDisabled: true
    },
    {
      fieldName: '',
      labelColumn: 'Ações',
      sortableColumn: false,
      typeColumn: TypeColumns.ActionsButtons,
    },
  ];

  isLoading: boolean = false;

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  private AlteraEntregaEncomenda(row: any): void {
    console.log(`Alterando entrega da encomenda -> ${JSON.stringify(row)}`);
  }

  //TODO: Trocar Any
  onEdit(encomenda: any) {
  }

  onDelete(encomenda: any) {
    this.confirmationService.confirm({
      message: 'Deseja excluir a encomenda? Essa operação não pode ser desfeita',
      accept: () => {
      },
    });
  }

}
