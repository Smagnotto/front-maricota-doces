import { Component, EventEmitter, Output, inject } from '@angular/core';
import { LoginService } from 'src/app/pages/login/service/login.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  standalone: false,
})
export class TopbarComponent {
  private loginService = inject(LoginService);

  @Output() menuButtonClick = new EventEmitter<void>();

  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
  }

  logout() {
    this.loginService.logout();
  }
}
