import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ClienteService } from '../services/cliente.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Cliente } from '../domain/cliente';
import { Observable } from 'rxjs';
import { TableHeader } from 'src/app/components/table-responsive/model/table-header-responsive';
import { TypeColumns } from 'src/app/components/table-responsive/model/type-columns';
import { Endereco } from '../domain/endereco';

@Component({
  selector: 'app-clientes-info',
  templateUrl: './clientes-info.component.html',
  styleUrl: './clientes-info.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})

export class ClientesInfoComponent implements OnInit {
  constructor(
    private confirmationService: ConfirmationService,
    private router: Router,
    private route: ActivatedRoute,
    private service: ClienteService
  ) {}

  enderecosLinked: Endereco[] = []

  headersEndereco: TableHeader[] = [
      {
        fieldName: 'cep',
        labelColumn: 'Cep',
        sortableColumn: true,
        typeColumn: TypeColumns.String,
      },
      {
        fieldName: 'logradouro',
        labelColumn: 'Logradouro',
        sortableColumn: true,
        typeColumn: TypeColumns.String,
      },
      {
        fieldName: 'numero',
        labelColumn: 'Número',
        sortableColumn: true,
        typeColumn: TypeColumns.String,
      },
      {
        fieldName: 'complemento',
        labelColumn: 'Complemento',
        sortableColumn: true,
        typeColumn: TypeColumns.String,
      },
      {
        fieldName: '',
        labelColumn: 'Ações',
        sortableColumn: false,
        typeColumn: TypeColumns.ActionsButtons,
      },
    ];

  formCliente: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(0),
    nome: new UntypedFormControl('', [Validators.required]),
    enderecoCliente: new UntypedFormGroup({
      logradouro: new UntypedFormControl('', [Validators.required]),
      numero: new UntypedFormControl(0, [Validators.required, Validators.min(1)]),
      complemento: new UntypedFormControl(''),
      cep: new UntypedFormControl('', [Validators.required]),
    })
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let idCliente = params['id'];

      if (idCliente) this.getCliente(idCliente);
      else
        this.fillForm({
          id: 0,
          nome: '',
        });
    });
  }

  private getCliente(id: number): void {
    this.service.getClienteById(id).subscribe((response) => {
      this.fillForm(response);
    });
  }

  private fillForm(Cliente: Cliente) {
    this.id?.setValue(Cliente.id);
    this.nome?.setValue(Cliente.nome);
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
    return this.formCliente.get('nome');
  }

  get preco() {
    return this.formCliente.get('preco');
  }
  get ativo() {
    return this.formCliente.get('ativo');
  }

  get id() {
    return this.formCliente.get('id');
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

  onSubmit(form: UntypedFormGroup) {
    if (form.valid) {
      let Cliente: Cliente = form.value;

      let subscribeApi: Observable<Cliente>;

      if (!Cliente.id) subscribeApi = this.service.saveCliente(Cliente);
      else subscribeApi = this.service.updateCliente(Cliente);

      subscribeApi.subscribe((response) => {
        this.goBack();
      });
    }
    form.markAllAsTouched();
  }

  private goBack(): void {
    this.router.navigate(['/clientes']);
  }

  prevPage(): void {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  nextPage(): void {
    this.router.navigate(['../revisao'], { relativeTo: this.route });
  }

  onEdit(endereco: Endereco) {}
  
  onDelete(endereco: Endereco) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        // let enderecos = [...this.cadastroProdutoService.cadastroProduto.insumos];

        // this.cadastroProdutoService.cadastroProduto.insumos = [
        //   ...this.deleteInsumo(insumos, insumo),
        // ];
      },
    });
  }

  vincular() {
    if (this.formCliente.get('enderecoCliente')?.valid) {
      let endereco: Endereco = {
        cep: this.cep?.value,
        logradouro: this.logradouro?.value,
        numero: this.numero?.value,
        complemento: this.complemento?.value,
      };

      if (this.enderecosLinked.filter((x) => x.cep === endereco.cep && x.numero === endereco.numero).length > 0) {
        this.confirmationService.confirm({
          header: 'Insumo repetido.',
          message: 'Não é possível adicionar o mesmo endereço',
          acceptLabel: 'OK',
          rejectVisible: false,
        });

        this.formCliente.get('enderecoCliente')?.markAllAsTouched();
      } else {
        this.enderecosLinked.push(endereco)
        this.resetFormEndereco();
      }
    } else {
       this.formCliente.get('enderecoCliente')?.markAllAsTouched();
    }
  }

  private resetFormEndereco() {
    this.formCliente.get('enderecoCliente')?.reset();
  }
      
}
