import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './services/cliente.service';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { PrimeNGModule } from 'src/app/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableResponsiveModule } from 'src/app/components/table-responsive/table-responsive.module';



@NgModule({
  declarations: [ListaClientesComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule,
    TableResponsiveModule
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
