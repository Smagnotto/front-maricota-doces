import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-card-dashboard',
    templateUrl: './card-dashboard.component.html',
    styleUrls: ['./card-dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CardDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
