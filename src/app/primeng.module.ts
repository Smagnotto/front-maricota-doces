import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';

import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
@NgModule({
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    SidebarModule,
    MenuModule,
    TooltipModule,
    TableModule,
    CheckboxModule,
    ToolbarModule,
    ButtonModule,
    PanelModule,
    TabViewModule,
    InputTextModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    InputMaskModule,
    InputNumberModule,
    DropdownModule,
    MultiSelectModule,
    InputTextareaModule,
    CardModule,
    // SkeletonModule,
  ],
})
export class PrimeNGModule {}
