import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { MaterialUIModule } from 'src/app/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroProdutoComponent } from './cadastro/cadastro-produtos.component';
import { ProdutosComponent } from './lista/produtos.component';


@NgModule({
  declarations: [ProdutosComponent, CadastroProdutoComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MaterialUIModule,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
