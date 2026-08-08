import { Component, ChangeDetectionStrategy, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';
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
  private swUpdate = inject(SwUpdate);
  private userSub: Subscription;
  private swSub: Subscription;

  isAuthenticated = false;
  menuActive = false;
  updateAvailable = false;
  title = 'Maricota Doces';

  ngOnInit() {
    this.userSub = this.loginService.user.subscribe((user) => {
      this.isAuthenticated = user !== null;
    });

    if (this.swUpdate.isEnabled) {
      this.swSub = this.swUpdate.versionUpdates
        .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
        .subscribe(() => {
          this.updateAvailable = true;
        });
    }
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
    this.swSub?.unsubscribe();
  }

  applyUpdate() {
    document.location.reload();
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
