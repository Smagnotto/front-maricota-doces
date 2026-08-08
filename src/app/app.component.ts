import { Component, ChangeDetectionStrategy, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from './pages/login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AppComponent implements OnInit, OnDestroy {
  private loginService = inject(LoginService);
  private userSub: Subscription;

  isAuthenticated = false;
  menuActive = false;
  title = 'Maricota Doces';

  ngOnInit() {
    this.userSub = this.loginService.user.subscribe((user) => {
      this.isAuthenticated = user !== null;
    });
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }

  onMenuButtonClick() {
    this.menuActive = true;
    document.body.classList.add('blocked-scroll');
  }

  hideMenu() {
    this.menuActive = false;
    document.body.classList.remove('blocked-scroll');
  }

  onMaskClick() {
    this.hideMenu();
  }
}
