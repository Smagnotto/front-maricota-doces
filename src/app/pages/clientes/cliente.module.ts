import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { PrimeNGModule } from 'src/app/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableResponsiveModule } from 'src/app/components/table-responsive/table-responsive.module';
import { ClientesInfoComponent } from './clientes-info/clientes-info.component';

@NgModule({
  declarations: [ListaClientesComponent, ClientesInfoComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule,
    TableResponsiveModule
  ],
  providers: []
})
export class ClienteModule { }
