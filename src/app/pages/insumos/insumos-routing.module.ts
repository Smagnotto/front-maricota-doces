import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsumoInfoComponent } from './insumo-info/insumo-info.component';
import { ListaInsumosComponent } from './lista-insumos/lista-insumos.component';

const routes: Routes = [
  { path: '', component: ListaInsumosComponent },
  {
    path: 'cadastro',
    component: InsumoInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsumosRoutingModule {}
