import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { TableHeader } from './model/table-header-responsive';
import { TypeColumns } from './model/type-columns';

@Component({
    selector: 'app-table-responsive',
    templateUrl: './table-responsive.component.html',
    styleUrls: ['./table-responsive.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TableResponsiveComponent implements OnInit {
  @Input() headers: TableHeader[] = [];
  @Input() data: any = [];
  @Input() isLoading: boolean = false;
  @Input() pageSize: number = 10;

  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();

  typeColumns = TypeColumns;

  skeletonRows: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.skeletonRows = Array.from({ length: this.pageSize }, () => ({}));
  }

  get tableValue(): any[] {
    return this.isLoading ? this.skeletonRows : this.data;
  }

  onEditRow(row: any, event: Event) {
    this.onEdit.emit(row);
    event.preventDefault();
  }

  onDeleteRow(row: any, event: Event) {
    this.onDelete.emit(row);
    event.preventDefault();
  }
}
