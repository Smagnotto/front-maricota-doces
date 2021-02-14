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
import { TableResponsiveModule } from 'src/app/components/table-responsive/table-responsive.module';
import { RevisaoCadastroProdutosComponent } from './revisao-cadastro-produtos/revisao-cadastro-produtos.component';
import { CadastroProdutoService } from './services/cadastro-produtos.service';

@NgModule({
  declarations: [ListaProdutosComponent, ProdutosInfoComponent, ProdutosStepsComponent, CadastroInsumosProdutosComponent, RevisaoCadastroProdutosComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule,
    TableResponsiveModule
  ],
  providers: [ProdutoService, CadastroProdutoService],
})
export class ProdutoModule {}
