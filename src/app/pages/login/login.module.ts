import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from './service/login.service';
import { PrimeNGModule } from 'src/app/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PrimeNGModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule {}
