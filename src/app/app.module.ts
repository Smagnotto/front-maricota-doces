import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './primeng.module';
import { FooterModule } from './components/footer/footer.module';
import { MenuModule } from './components/menu/menu.module';
import { TopbarModule } from './components/topbar/topbar.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { BarChartModule } from './components/bar-chart/bar-chart.module';
import { TableResponsiveModule } from './components/table-responsive/table-responsive.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    //Application Modules
    PrimeNGModule,
    FooterModule,
    MenuModule,
    TopbarModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
