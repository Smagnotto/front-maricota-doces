import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableResponsiveComponent } from './table-responsive.component';
import { PrimeNGModule } from 'src/app/primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableResponsiveComponent],
  imports: [CommonModule, RouterModule, PrimeNGModule, FormsModule],
  exports: [TableResponsiveComponent],
})
export class TableResponsiveModule {}
