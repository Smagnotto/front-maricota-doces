import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from 'src/app/pages/login/service/login.service';
@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TopbarComponent {
  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

  constructor(private loginService: LoginService) {}

  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
  }

  public logout() {
    this.loginService.logout();
  }

}
