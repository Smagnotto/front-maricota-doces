import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from 'src/app/primeng.module';
import { CardDashboardComponent } from './card-dashboard.component';

@NgModule({
  declarations: [CardDashboardComponent],
  imports: [CommonModule, PrimeNGModule],
  exports: [CardDashboardComponent],
})
export class CardDashboardModule {}
