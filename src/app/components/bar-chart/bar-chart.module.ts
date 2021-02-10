import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart.component';
import { PrimeNGModule } from 'src/app/primeng.module';

@NgModule({
  declarations: [BarChartComponent],
  imports: [CommonModule, PrimeNGModule],
  exports: [BarChartComponent],
})
export class BarChartModule {}
