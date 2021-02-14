import { Component, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
  }
}
