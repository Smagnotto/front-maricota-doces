import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Insumo } from '../domain/insumo';
import { TiposInsumos } from '../domain/tipos-insumos';
import { InsumoService } from '../services/insumo.service';

@Component({
  selector: 'app-insumo-info',
  templateUrl: './insumo-info.component.html',
  styleUrls: ['./insumo-info.component.css'],
})
export class InsumoInfoComponent implements OnInit {
  constructor(
    private confirmationService: ConfirmationService,
    private router: Router,
    private route: ActivatedRoute,
    private service: InsumoService
  ) {}

  tiposInsumos: TiposInsumos[] = [
    {
      nome: 'kg',
      codigo: 'kg',
    },
    {
      nome: 'g',
      codigo: 'g',
    },
    {
      nome: 'l',
      codigo: 'l',
    },
    {
      nome: 'ml',
      codigo: 'ml',
    },
  ];

  formInsumo: FormGroup = new FormGroup({
    id: new FormControl(0),
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl(0, [Validators.required, Validators.min(1)]),
    ativo: new FormControl(true),
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let idInsumo = params['id'];

      if (idInsumo) this.getInsumo(idInsumo);
      else this.fillForm({ ativo: true, id: 0, nome: '', preco: 0 });
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
    this.preco?.setValue(insumo.preco);
    this.ativo?.setValue(insumo.ativo);
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

  get id() {
    return this.formInsumo.get('id');
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      let insumo: Insumo = form.value;

      let subscribeApi;

      if (!insumo.id) subscribeApi = this.service.saveInsumo(insumo);
      else subscribeApi = this.service.updateInsumo(insumo);

      subscribeApi.subscribe((response) => {
        console.log(response);

        this.goBack();
      });
    }
  }

  private goBack(): void {
    this.router.navigate(['/insumos']);
  }
}
