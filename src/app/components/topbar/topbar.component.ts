import { Component, EventEmitter, Input, Output, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/pages/login/service/login.service';
import { PushNotificationService } from 'src/app/core/services/push-notification.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  standalone: false,
})
export class TopbarComponent implements OnInit, OnDestroy {
  private loginService = inject(LoginService);
  private pushService = inject(PushNotificationService);
  private pushSub: Subscription;

  @Input() updateAvailable = false;
  @Output() menuButtonClick = new EventEmitter<void>();
  @Output() updateApp = new EventEmitter<void>();

  pushSupported = false;
  pushSubscribed = false;
  pushLoading = false;

  ngOnInit() {
    this.pushSupported = this.pushService.isSupported;
    this.pushSub = this.pushService.subscribed$.subscribe(
      subscribed => this.pushSubscribed = subscribed
    );
  }

  ngOnDestroy() {
    this.pushSub?.unsubscribe();
  }

  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
  }

  togglePush() {
    this.pushLoading = true;
    const action$ = this.pushSubscribed
      ? this.pushService.unsubscribe()
      : this.pushService.subscribe();

    action$.subscribe({
      next: () => this.pushLoading = false,
      error: () => this.pushLoading = false,
    });
  }

  logout() {
    this.loginService.logout();
  }
}
