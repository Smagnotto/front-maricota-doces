import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Cliente } from '../domain/cliente';
import { TableHeader } from 'src/app/components/table-responsive/model/table-header-responsive';
import { TypeColumns } from 'src/app/components/table-responsive/model/type-columns';
import { ClienteService } from '../services/cliente.service';
import { ConfirmationService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  headers: TableHeader[] = [
    {
      fieldName: 'nome',
      labelColumn: 'Nome',
      sortableColumn: true,
      typeColumn: TypeColumns.String,
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
    private service: ClienteService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllClientes()
  }

  private getAllClientes(): void {
      this.isLoading = true;
      this.service.getAllClientes().subscribe((produtos: Cliente[]) => {
        this.clientes = produtos;
        this.isLoading = false;
      });
    }

  onEdit(cliente: Cliente) {
    this.router.navigate(['cadastro', cliente.id], { relativeTo: this.route });
  }
  
  onDelete(cliente: Cliente) {
    this.confirmationService.confirm({
      message: 'Deseja excluir o cliente? Essa operação não pode ser desfeita',
      accept: () => {
        this.service.deleteCliente(cliente.id).subscribe((response) => {
          this.getAllClientes();
        });
      },
    });
  }
}
