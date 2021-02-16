import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroInsumosProdutosComponent } from './cadastro-insumos-produtos/cadastro-insumos-produtos.component';
import { ListaProdutosComponent } from './lista/lista-produtos.component';
import { ProdutosInfoComponent } from './produtos-info/produtos-info.component';
import { ProdutosStepsComponent } from './produtos-steps/produtos-steps.component';
import { RevisaoCadastroProdutosComponent } from './revisao-cadastro-produtos/revisao-cadastro-produtos.component';

const routes: Routes = [
  { path: '', component: ListaProdutosComponent },
  {
    path: 'cadastro',
    component: ProdutosStepsComponent,
    children: [
      {
        path: '',
        component: ProdutosInfoComponent,
      },
      {
        path: 'insumos',
        component: CadastroInsumosProdutosComponent,
      },
      {
        path: 'revisao',
        component: RevisaoCadastroProdutosComponent,
      },
    ],
  },
  {
    path: 'cadastro/:id',
    component: ProdutosStepsComponent,
    children: [
      {
        path: '',
        component: ProdutosInfoComponent,
      },
      {
        path: 'insumos',
        component: CadastroInsumosProdutosComponent,
      },
      {
        path: 'revisao',
        component: RevisaoCadastroProdutosComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
