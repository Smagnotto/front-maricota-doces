import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaProdutosComponent } from './lista/lista-produtos.component';
import { ProdutosRoutingModule } from './produto-routing.module';
import { PrimeNGModule } from 'src/app/primeng.module';
import { ProdutosService } from 'src/app/pages/produto/services/produtos.service';
import { ProdutosInfoComponent } from './produtos-info/produtos-info.component';

@NgModule({
  declarations: [ListaProdutosComponent, ProdutosInfoComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProdutosService],
})
export class ProdutosModule {}
