import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncomendasRoutingModule } from './encomendas-routing.module';
import { PrimeNGModule } from 'src/app/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableResponsiveModule } from 'src/app/components/table-responsive/table-responsive.module';
import { ListaEncomendasComponent } from './lista-encomendas/lista-encomendas.component';
import { EncomendaInfoComponent } from './encomenda-info/encomenda-info.component';
import { ClienteService } from '../clientes/services/cliente.service';
import { ProdutosEncomendaComponent } from './encomenda-info/produtos-encomenda/produtos-encomenda.component';
import { ClienteEncomendaComponent } from './encomenda-info/cliente-encomenda/cliente-encomenda.component';

@NgModule({
  declarations: [ListaEncomendasComponent, EncomendaInfoComponent, ProdutosEncomendaComponent, ClienteEncomendaComponent],
  imports: [
    CommonModule,
    EncomendasRoutingModule,
    CommonModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule,
    TableResponsiveModule,
  ],
  providers: [ClienteService],
})
export class EncomendasModule {}
