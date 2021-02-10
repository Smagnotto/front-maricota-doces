import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  menuActive: boolean = true;

  title = 'front-maricota-doces';
}
