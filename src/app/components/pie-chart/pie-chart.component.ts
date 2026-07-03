import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
