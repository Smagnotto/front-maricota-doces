import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUIModule } from 'src/app/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, RouterModule, LayoutModule, MaterialUIModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
