import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LoginService } from './pages/login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public primengConfig: PrimeNGConfig,
    private loginService: LoginService
  ) {
    this.primengConfig.ripple = true;

    this.loginService.user.subscribe((user) => {
      this.isAuthenticated = user !== null;
    });
  }

  isAuthenticated: boolean;
  menuActive: boolean = false;

  title = 'Maricota Doces';

  onMenuButtonClick() {
    this.menuActive = true;
    this.addClass(document.body, 'blocked-scroll');
  }

  hideMenu() {
    this.menuActive = false;
    this.removeClass(document.body, 'blocked-scroll');
  }

  addClass(element: any, className: string) {
    if (element.classList) element.classList.add(className);
    else element.className += ' ' + className;
  }

  onMaskClick() {
    this.hideMenu();
  }

  removeClass(element: any, className: string) {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp(
          '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
          'gi'
        ),
        ' '
      );
  }
}
