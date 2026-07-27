import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ConfiguracoesService } from './services/configuracoes.service';

@Component({
    selector: 'app-configuracoes',
    templateUrl: './configuracoes.component.html',
    styleUrls: ['./configuracoes.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ConfiguracoesComponent implements OnInit {
  constructor(
    private service: ConfiguracoesService,
    private messageService: MessageService
  ) {}

  formConfiguracoes: UntypedFormGroup = new UntypedFormGroup({
    margemPercentual: new UntypedFormControl(0, [Validators.required, Validators.min(0)]),
  });

  ngOnInit(): void {
    this.service.getConfiguracoes().subscribe((response) => {
      this.margemPercentual?.setValue(response.margemPercentual);
    });
  }

  get margemPercentual() {
    return this.formConfiguracoes.get('margemPercentual');
  }

  onSubmit(form: UntypedFormGroup) {
    if (form.valid) {
      this.service.updateConfiguracoes(form.value).subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Configurações salvas',
          detail: 'A margem de lucro foi atualizada.',
        });
      });

      return;
    }

    form.markAllAsTouched();
  }
}
