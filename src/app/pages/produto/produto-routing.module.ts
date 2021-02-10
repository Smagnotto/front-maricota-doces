import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutosComponent } from './lista/lista-produtos.component';
import { ProdutosInfoComponent } from './produtos-info/produtos-info.component';

const routes: Routes = [
  { path: '', component: ListaProdutosComponent },
  {
    path: 'cadastro', component: ProdutosInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
