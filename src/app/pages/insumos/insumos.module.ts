import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from 'src/app/primeng.module';
import { InsumosRoutingModule } from './insumos-routing.module';
import { ListaInsumosComponent } from './lista-insumos/lista-insumos.component';
import { InsumoService } from './services/insumo.service';
import { InsumoInfoComponent } from './insumo-info/insumo-info.component';
import { TableResponsiveModule } from 'src/app/components/table-responsive/table-responsive.module';
import { ValorExibidoModule } from 'src/app/components/valor-exibido/valor-exibido.module';

@NgModule({
  declarations: [ListaInsumosComponent, InsumoInfoComponent],
  imports: [
    CommonModule,
    InsumosRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule,
    TableResponsiveModule,
    ValorExibidoModule
  ],
  providers: [InsumoService],
})
export class InsumoModule {}
