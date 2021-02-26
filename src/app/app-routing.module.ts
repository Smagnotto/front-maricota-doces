import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./pages/produto/produto.module').then((m) => m.ProdutoModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'insumos',
    loadChildren: () =>
      import('./pages/insumos/insumos.module').then((m) => m.InsumoModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'encomendas',
    loadChildren: () =>
      import('./pages/encomendas/encomendas.module').then(
        (m) => m.EncomendasModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
