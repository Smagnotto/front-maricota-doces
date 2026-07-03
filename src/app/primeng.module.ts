import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';

import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { ChartModule } from 'primeng/chart';
import { MessageModule } from 'primeng/message';
import { StepsModule } from 'primeng/steps';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider'
import { TagModule } from 'primeng/tag';
import {ToastModule} from 'primeng/toast';
import { FloatLabelModule } from 'primeng/floatlabel';

@NgModule({
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    TooltipModule,
    TableModule,
    CheckboxModule,
    ToolbarModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    AutoCompleteModule,
    DatePickerModule,
    InputMaskModule,
    InputNumberModule,
    SelectModule,
    MultiSelectModule,
    TextareaModule,
    CardModule,
    SkeletonModule,
    ChartModule,
    MessageModule,
    StepsModule,
    ConfirmDialogModule,
    DividerModule,
    TagModule,
    ToastModule,
    FloatLabelModule
  ],
  providers: [ConfirmationService, MessageService],
})
export class PrimeNGModule {}
