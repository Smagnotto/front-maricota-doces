import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Cliente } from '../../clientes/domain/cliente';
import { ClienteService } from '../../clientes/services/cliente.service';
import { Encomenda } from '../model/Encomenda';
import { ClienteEncomendaComponent } from './cliente-encomenda/cliente-encomenda.component';
import { ProdutoEncomenda } from './produtos-encomenda/model/ProdutoEncomenda';

@Component({
  selector: 'app-encomenda-info',
  templateUrl: './encomenda-info.component.html',
  styleUrls: ['./encomenda-info.component.css'],
})
export class EncomendaInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
  ) {}

  @ViewChild(ClienteEncomendaComponent) cliente: ClienteEncomendaComponent;

  encomenda: Encomenda = new Encomenda();

  formEncomenda: FormGroup = new FormGroup({
    idEncomenda: new FormControl(''),
    dataEntrega: new FormControl('', [Validators.required]),
    pago: new FormControl(false),
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let idEncomenda = params['id'];
    });
  }

  cancel(): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja sair? Os dados serão perdidos!',
      accept: () => {
        this.goBack();
      },
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.goBack();
    }
  }

  SelecionaCliente(cliente: Cliente) {
    this.encomenda.cliente = cliente;
  }

  SelecionaProduto(produto: ProdutoEncomenda) {
    this.encomenda.addProduto(produto);
  }

  private goBack(): void {
    this.router.navigate(['/encomendas']);
  }

  get dataEntrega() {
    return this.formEncomenda.get('dataEntrega');
  }

  get pago() {
    return this.formEncomenda.get('pago');
  }

  isValid() {
    console.log(this.encomenda.isValid());
    return this.encomenda.isValid();
  }
}
