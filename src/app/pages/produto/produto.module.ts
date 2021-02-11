import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaProdutosComponent } from './lista/lista-produtos.component';
import { ProdutosRoutingModule } from './produto-routing.module';
import { PrimeNGModule } from 'src/app/primeng.module';
import { ProdutoService } from 'src/app/pages/produto/services/produto.service';
import { ProdutosInfoComponent } from './produtos-info/produtos-info.component';
import { ProdutosStepsComponent } from './produtos-steps/produtos-steps.component';
import { CadastroInsumosProdutosComponent } from './cadastro-insumos-produtos/cadastro-insumos-produtos.component';

@NgModule({
  declarations: [ListaProdutosComponent, ProdutosInfoComponent, ProdutosStepsComponent, CadastroInsumosProdutosComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProdutoService],
})
export class ProdutoModule {}
