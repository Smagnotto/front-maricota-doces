import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { PushNotificationService } from 'src/app/core/services/push-notification.service';
import { ConfiguracoesService } from './services/configuracoes.service';

@Component({
    selector: 'app-configuracoes',
    templateUrl: './configuracoes.component.html',
    styleUrls: ['./configuracoes.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ConfiguracoesComponent implements OnInit, OnDestroy {
  private pushSub: Subscription;

  pushSupported = false;
  pushSubscribed = false;
  pushLoading = false;

  constructor(
    private service: ConfiguracoesService,
    private messageService: MessageService,
    private pushService: PushNotificationService
  ) {}

  formConfiguracoes: UntypedFormGroup = new UntypedFormGroup({
    margemPercentual: new UntypedFormControl(0, [Validators.required, Validators.min(0)]),
  });

  ngOnInit(): void {
    this.service.getConfiguracoes().subscribe((response) => {
      this.margemPercentual?.setValue(response.margemPercentual);
    });

    this.pushSupported = this.pushService.isSupported;
    this.pushSub = this.pushService.subscribed$.subscribe(
      subscribed => this.pushSubscribed = subscribed
    );
  }

  ngOnDestroy(): void {
    this.pushSub?.unsubscribe();
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

  togglePush() {
    this.pushLoading = true;
    const action$ = this.pushSubscribed
      ? this.pushService.unsubscribe()
      : this.pushService.subscribe();

    action$.subscribe({
      next: () => {
        this.pushLoading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Notificações',
          detail: this.pushSubscribed ? 'Notificações ativadas.' : 'Notificações desativadas.',
        });
      },
      error: () => this.pushLoading = false,
    });
  }
}
