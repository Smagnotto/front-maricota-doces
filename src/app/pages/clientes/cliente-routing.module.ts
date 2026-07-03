import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ClientesInfoComponent } from './clientes-info/clientes-info.component';

const routes: Routes = [
  { path: '', component: ListaClientesComponent },
  {
    path: 'cadastro',
    component: ClientesInfoComponent,
  },
  {
    path: 'cadastro/:id',
    component: ClientesInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
