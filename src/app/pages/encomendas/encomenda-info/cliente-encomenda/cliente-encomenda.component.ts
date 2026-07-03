import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { Cliente } from 'src/app/pages/clientes/domain/cliente';
import { ClienteService } from 'src/app/pages/clientes/services/cliente.service';

@Component({
    selector: 'app-cliente-encomenda',
    templateUrl: './cliente-encomenda.component.html',
    styleUrls: ['./cliente-encomenda.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ClienteEncomendaComponent implements OnInit {
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {}

  formCliente: UntypedFormGroup = new UntypedFormGroup({
    idCliente: new UntypedFormControl(''),
    autoCompleteNomeCliente: new UntypedFormControl(''),
    nomeCliente: new UntypedFormControl('', [Validators.required]),
    dataEntrega: new UntypedFormControl('', [Validators.required]),
    enderecoCliente: new UntypedFormGroup({
      logradouro: new UntypedFormControl('', [Validators.required]),
      numero: new UntypedFormControl(0, [Validators.required, Validators.min(1)]),
      complemento: new UntypedFormControl(''),
      cep: new UntypedFormControl('', [Validators.required]),
    }),
  });

  @Output() onSelectCliente: EventEmitter<Cliente> = new EventEmitter();
  filteredClients: Cliente[] = [];


  filterClient(event: any) {
    const { query } = event;

    this.clienteService.getClienteByNome(query).subscribe((response) => {
      this.filteredClients = response;
    });
  }

  selecionaCliente(event: AutoCompleteSelectEvent) {
    const cliente = event.value as Cliente;
    this.idCliente?.setValue(cliente.id);
    this.nomeCliente?.setValue(cliente.nome);
    this.logradouro?.setValue(cliente.endereco.logradouro);
    this.cep?.setValue(cliente.endereco.cep);
    this.numero?.setValue(cliente.endereco.numero);
    this.complemento?.setValue(cliente.endereco.complemento);

    this.onSelectCliente.emit(cliente);
  }

  get idCliente() {
    return this.formCliente.get('idCliente');
  }

  get nomeCliente() {
    return this.formCliente.get('nomeCliente');
  }

  get logradouro() {
    return this.formCliente.get('enderecoCliente')?.get('logradouro');
  }

  get numero() {
    return this.formCliente.get('enderecoCliente')?.get('numero');
  }

  get complemento() {
    return this.formCliente.get('enderecoCliente')?.get('complemento');
  }

  get cep() {
    return this.formCliente.get('enderecoCliente')?.get('cep');
  }
}
