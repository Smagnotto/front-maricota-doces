import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from 'src/app/primeng.module';
import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { ConfiguracoesComponent } from './configuracoes.component';
import { ConfiguracoesService } from './services/configuracoes.service';
import { ValorExibidoModule } from 'src/app/components/valor-exibido/valor-exibido.module';

@NgModule({
  declarations: [ConfiguracoesComponent],
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule,
    ValorExibidoModule,
  ],
  providers: [ConfiguracoesService],
})
export class ConfiguracoesModule {}
