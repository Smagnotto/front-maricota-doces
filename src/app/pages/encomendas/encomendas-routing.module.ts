import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncomendaInfoComponent } from './encomenda-info/encomenda-info.component';
import { ListaEncomendasComponent } from './lista-encomendas/lista-encomendas.component';

const routes: Routes = [
  {
    path: '', component: ListaEncomendasComponent
  },
  {
    path: 'cadastro',
    component: EncomendaInfoComponent,
  },
  {
    path: 'cadastro/:id',
    component: EncomendaInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncomendasRoutingModule { }
