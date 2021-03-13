import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/pages/clientes/domain/cliente';
import { ClienteService } from 'src/app/pages/clientes/services/cliente.service';

@Component({
  selector: 'app-cliente-encomenda',
  templateUrl: './cliente-encomenda.component.html',
  styleUrls: ['./cliente-encomenda.component.css'],
})
export class ClienteEncomendaComponent implements OnInit {
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {}

  formCliente: FormGroup = new FormGroup({
    idCliente: new FormControl(''),
    autoCompleteNomeCliente: new FormControl(''),
    nomeCliente: new FormControl('', [Validators.required]),
    dataEntrega: new FormControl('', [Validators.required]),
    enderecoCliente: new FormGroup({
      logradouro: new FormControl('', [Validators.required]),
      numero: new FormControl(0, [Validators.required, Validators.min(1)]),
      complemento: new FormControl(''),
      cep: new FormControl('', [Validators.required]),
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

  selecionaCliente(cliente: Cliente) {
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
