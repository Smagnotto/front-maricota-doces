import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from 'src/app/primeng.module';
import { TopbarComponent } from './topbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [TopbarComponent],
})
export class TopbarModule {}
