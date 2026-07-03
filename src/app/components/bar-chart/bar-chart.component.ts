import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BarChartComponent {
  @Input() data: any;

  constructor() {
    
  }
}
