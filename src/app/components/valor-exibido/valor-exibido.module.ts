import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValorExibidoDirective } from './valor-exibido.directive';

@NgModule({
  declarations: [ValorExibidoDirective],
  imports: [CommonModule],
  exports: [ValorExibidoDirective],
})
export class ValorExibidoModule {}
