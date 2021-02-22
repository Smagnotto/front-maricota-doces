import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'insumos', pathMatch: 'full' },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
  // },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./pages/produto/produto.module').then((m) => m.ProdutoModule),
  },
  {
    path: 'insumos',
    loadChildren: () =>
      import('./pages/insumos/insumos.module').then((m)=> m.InsumoModule),
  },
  {
    path: 'encomendas',
    loadChildren: () =>
      import('./pages/encomendas/encomendas.module').then((m)=> m.EncomendasModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
