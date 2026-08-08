import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clientes',
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
    canActivate: [authGuard],
  },
  {
    path: 'insumos',
    loadChildren: () =>
      import('./pages/insumos/insumos.module').then((m) => m.InsumoModule),
    canActivate: [authGuard],
  },
  {
    path: 'encomendas',
    loadChildren: () =>
      import('./pages/encomendas/encomendas.module').then(
        (m) => m.EncomendasModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./pages/clientes/cliente.module').then(
        (m) => m.ClienteModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'configuracoes',
    loadChildren: () =>
      import('./pages/configuracoes/configuracoes.module').then(
        (m) => m.ConfiguracoesModule
      ),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
