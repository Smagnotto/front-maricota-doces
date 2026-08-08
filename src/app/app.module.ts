import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './primeng.module';
import { FooterModule } from './components/footer/footer.module';
import { MenuModule } from './components/menu/menu.module';
import { TopbarModule } from './components/topbar/topbar.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import ptBr from '@angular/common/locales/pt';
import { LoginModule } from './pages/login/login.module';
import { authInterceptor } from './_helpers/auth.interceptor';
import { errorInterceptor } from './_helpers/error.interceptor';
import { initializeApp } from 'firebase/app';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { environment } from 'src/environments/environment';
import { backendProviders } from './core/providers/backend.providers';

registerLocaleData(ptBr);

if (environment.backendType === 'java') {
  initializeApp(environment.firebase);
}

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    FooterModule,
    MenuModule,
    TopbarModule,
    LoginModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    ...backendProviders,
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
        },
      },
      license: environment.primeNgLicense,
    }),
  ],
})
export class AppModule {}
