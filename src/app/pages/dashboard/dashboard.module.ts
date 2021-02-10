import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrimeNGModule } from 'src/app/primeng.module';
import { DashboardComponent } from './dashboard.component';
import { BarChartModule } from 'src/app/components/bar-chart/bar-chart.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule,
    BarChartModule
  ],
  providers: [],
})
export class DashboardModule {}
