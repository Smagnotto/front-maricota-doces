import { Directive, ElementRef, Input, OnDestroy, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

export type FormatoValorExibido = 'moeda' | 'decimal' | 'percentual';

/**
 * O p-inputnumber (primeng) não recalcula o texto exibido quando seu valor é atualizado
 * via FormControl.setValue() de forma assíncrona (resposta HTTP, seleção em autocomplete
 * etc.) — o campo fica preso mostrando o valor antigo/"NaN" até o usuário focar e desfocar
 * manualmente. Esta diretiva escreve o texto formatado direto no input nativo toda vez que
 * o FormControl associado muda de valor, contornando o bug sem precisar duplicar setTimeout
 * + querySelector em cada componente.
 *
 * Uso: <p-inputnumber appValorExibido="moeda" formControlName="preco"></p-inputnumber>
 */
@Directive({
  selector: '[appValorExibido]',
  standalone: false,
})
export class ValorExibidoDirective implements OnInit, OnDestroy {
  @Input('appValorExibido') formato: FormatoValorExibido = 'moeda';

  private subscription?: Subscription;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    @Optional() @Self() private ngControl: NgControl | null
  ) {}

  ngOnInit(): void {
    const control = this.ngControl?.control;
    if (!control) {
      return;
    }

    this.escrever(control.value);
    this.subscription = control.valueChanges.subscribe((valor) => this.escrever(valor));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private escrever(valor: number): void {
    setTimeout(() => {
      const input = this.elementRef.nativeElement.querySelector<HTMLInputElement>('input')
        ?? (this.elementRef.nativeElement as HTMLInputElement);

      if (input) {
        input.value = this.formatar(valor ?? 0);
      }
    });
  }

  private formatar(valor: number): string {
    switch (this.formato) {
      case 'decimal':
        return new Intl.NumberFormat('pt-BR', { useGrouping: false }).format(valor);
      case 'percentual':
        return new Intl.NumberFormat('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(valor) + '%';
      case 'moeda':
      default:
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
    }
  }
}
