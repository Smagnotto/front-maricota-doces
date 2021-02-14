import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-insumo-info',
  templateUrl: './insumo-info.component.html',
  styleUrls: ['./insumo-info.component.css'],
})
export class InsumoInfoComponent implements OnInit {
  constructor(private confirmationService: ConfirmationService, private router: Router) {}

  formInsumo: FormGroup = new FormGroup({
    nomeInsumo: new FormControl('', [Validators.required]),
    precoInsumo: new FormControl(0, [Validators.required, Validators.min(1)]),
    insumoAtivo: new FormControl(true),
  });

  ngOnInit(): void {}

  cancel(): void {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja sair? Os dados serão perdidos!",
      accept: () => {
        this.router.navigate(['/insumos'])
      }
    })
  }

  get nomeInsumo() {
    return this.formInsumo.get('nomeInsumo');
  }

  get precoInsumo() {
    return this.formInsumo.get('precoInsumo');
  }
  get insumoAtivo() {
    return this.formInsumo.get('insumoAtivo');
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
