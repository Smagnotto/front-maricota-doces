import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Cliente } from '../../clientes/domain/cliente';
import { ClienteService } from '../../clientes/services/cliente.service';

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
    private clienteService: ClienteService
  ) {}

  formEncomenda: FormGroup = new FormGroup({
    idEncomenda: new FormControl(''),
    idCliente: new FormControl(''),
    autoCompleteNomeCliente: new FormControl(''),
    nomeCliente: new FormControl('', [Validators.required]),
    dataEntrega: new FormControl('', [Validators.required]),
    pago: new FormControl(false),

    //TODO: Refatorar a parte do componente


    enderecoCliente: new FormGroup({
      logradouro: new FormControl('', [Validators.required]),
      numero: new FormControl(0, [Validators.required, Validators.min(1)]),
      complemento: new FormControl(''),
      cep: new FormControl('', [Validators.required]),
    }),
  });

  filteredClients: Cliente[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let idEncomenda = params['id'];
    });
  }

  filterClient(event: any) {
    const { query } = event;

    this.clienteService.getClienteByNome(query).subscribe((response) => {
      this.filteredClients = response;
    });
  }

  selecionaCliente(cliente: Cliente) {
    this.idCliente?.setValue(cliente.id);
    this.nomeCliente?.setValue(cliente.nome);
    this.logradouro?.setValue(cliente.endereco.logradouro);
    this.cep?.setValue(cliente.endereco.cep);
    this.numero?.setValue(cliente.endereco.numero);
    this.complemento?.setValue(cliente.endereco.complemento);
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
    console.log(form.value);

    if (form.valid) {
      this.goBack();
    }
  }

  private goBack(): void {
    this.router.navigate(['/encomendas']);
  }

  get idCliente() {
    return this.formEncomenda.get('idCliente')
  }

  get nomeCliente() {
    return this.formEncomenda.get('nomeCliente');
  }

  get dataEntrega() {
    return this.formEncomenda.get('dataEntrega');
  }

  get pago() {
    return this.formEncomenda.get('pago');
  }

  get logradouro() {
    return this.formEncomenda.get('enderecoCliente')?.get('logradouro');
  }

  get numero() {
    return this.formEncomenda.get('enderecoCliente')?.get('numero');
  }

  get complemento() {
    return this.formEncomenda.get('enderecoCliente')?.get('complemento');
  }

  get cep() {
    return this.formEncomenda.get('enderecoCliente')?.get('cep');
  }
}
