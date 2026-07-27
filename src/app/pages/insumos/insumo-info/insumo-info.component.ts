import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { Insumo } from '../domain/insumo';
import { InsumoService } from '../services/insumo.service';
import { tiposInsumosOptions, TiposInsumos } from '../domain/tipos-insumos';

@Component({
    selector: 'app-insumo-info',
    templateUrl: './insumo-info.component.html',
    styleUrls: ['./insumo-info.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class InsumoInfoComponent implements OnInit {
  constructor(
    private confirmationService: ConfirmationService,
    private router: Router,
    private route: ActivatedRoute,
    private service: InsumoService
  ) {}

  private readonly tipoInsumoConst: string = 'KG';
  tiposInsumosOptions: TiposInsumos[] = tiposInsumosOptions
  

  formInsumo: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(0),
    nome: new UntypedFormControl('', [Validators.required]),
    ativo: new UntypedFormControl(true),
    preco: new UntypedFormControl(0),
    tipo: new UntypedFormControl(this.tipoInsumoConst)
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let idInsumo = params['id'];

      if (idInsumo) this.getInsumo(idInsumo);
      else
        this.fillForm({
          ativo: true,
          id: 0,
          nome: '',
          preco: 0,
          tipo: this.tipoInsumoConst
        });
    });
  }

  private getInsumo(id: number): void {
    this.service.getInsumoById(id).subscribe((response) => {
      this.fillForm(response);
    });
  }

  private fillForm(insumo: Insumo) {
    this.id?.setValue(insumo.id);
    this.nome?.setValue(insumo.nome);
    this.ativo?.setValue(insumo.ativo);
    this.preco?.setValue(insumo.preco);
    this.tipoInsumo?.setValue(insumo.tipo)
  }

  cancel(): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja sair? Os dados serão perdidos!',
      accept: () => {
        this.goBack();
      },
    });
  }

  get nome() {
    return this.formInsumo.get('nome');
  }

  get preco() {
    return this.formInsumo.get('preco');
  }
  get ativo() {
    return this.formInsumo.get('ativo');
  }

  get tipoInsumo() {
    return this.formInsumo.get('tipo');
  }

  get id() {
    return this.formInsumo.get('id');
  }

  onSubmit(form: UntypedFormGroup) {
    if (form.valid) {
      let insumo: Insumo = form.value;

      let subscribeApi: Observable<Insumo>;

      if (!insumo.id) subscribeApi = this.service.saveInsumo(insumo);
      else subscribeApi = this.service.updateInsumo(insumo);

      subscribeApi.subscribe((response) => {
        this.goBack();
      });
    }
    form.markAllAsTouched();
  }

  private goBack(): void {
    this.router.navigate(['/insumos']);
  }
}
