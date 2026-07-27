import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ClienteService } from '../services/cliente.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Cliente } from '../domain/cliente';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { TableHeader } from 'src/app/components/table-responsive/model/table-header-responsive';
import { TypeColumns } from 'src/app/components/table-responsive/model/type-columns';
import { Endereco } from '../domain/endereco';
import { UtilService } from 'src/app/_helpers/utilService';

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
    private service: ClienteService,
    private utilService: UtilService,
    private destroyRef: DestroyRef
  ) { }

  isLoadingCep: boolean = false
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
  });

  // Formulário de apoio para montar um endereço por vez antes de "vincular".
  // Fica fora de `formCliente` de propósito: se estivesse aninhado, o reset
  // feito após vincular (que limpa os campos obrigatórios) invalidaria
  // `formCliente` para sempre, mesmo com o endereço já salvo em `enderecosLinked`.
  formEndereco: UntypedFormGroup = new UntypedFormGroup({
    logradouro: new UntypedFormControl('', [Validators.required]),
    numero: new UntypedFormControl(0, [Validators.required, Validators.min(1)]),
    complemento: new UntypedFormControl(''),
    cep: new UntypedFormControl('', [Validators.required]),
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

    this.cep?.valueChanges
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        filter((value: string) => { 
          console.log(value)


          const valueValidation  = !!value && value.replace(/\D/g, '').length === 8

          console.log(valueValidation)
          return valueValidation
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((value: string) => this.buscarEnderecoPorCep(value));
  }

  private buscarEnderecoPorCep(cep: string): void {
    this.isLoadingCep = true
    this.utilService.getEnderecoByCep(cep).subscribe((endereco) => {
      this.isLoadingCep = false
      if (endereco?.erro) return;

      this.logradouro?.setValue(endereco.logradouro);
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
    if (Cliente.enderecos) this.enderecosLinked = [...this.enderecosLinked, ...Cliente.enderecos]
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
    return this.formEndereco.get('logradouro');
  }

  get numero() {
    return this.formEndereco.get('numero');
  }

  get complemento() {
    return this.formEndereco.get('complemento');
  }

  get cep() {
    return this.formEndereco.get('cep');
  }

  onSubmit(form: UntypedFormGroup) {
    if (form.valid) {

      let Cliente: Cliente = {
        ...form.value,
        enderecos: this.enderecosLinked ?? []
      };

      let subscribeApi: Observable<Cliente>;

      if (!Cliente.id) subscribeApi = this.service.saveCliente(Cliente);
      else subscribeApi = this.service.updateCliente(Cliente);

      subscribeApi.subscribe(() => {
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

  onEdit(endereco: Endereco) {
    this.cep?.setValue(this.formatCep(String(endereco.cep)));
    this.logradouro?.setValue(endereco.logradouro);
    this.numero?.setValue(endereco.numero);
    this.complemento?.setValue(endereco.complemento);

    this.enderecosLinked = this.enderecosLinked.filter((item) => item !== endereco);
  }

  private formatCep(cep: string): string {
    const digits = cep.replace(/\D/g, '');
    return digits.length === 8 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : cep;
  }

  onDelete(endereco: Endereco) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.enderecosLinked = this.enderecosLinked.filter((item) => item !== endereco);
      },
    });
  }

  vincular() {
    if (this.formEndereco.valid) {
      let endereco: Endereco = {
        cep: this.cep?.value.replace("-", ""),
        logradouro: this.logradouro?.value,
        numero: this.numero?.value,
        complemento: this.complemento?.value,
      };

      if (this.enderecosLinked.filter((x) => x.cep === endereco.cep && x.numero === endereco.numero).length > 0) {
        this.confirmationService.confirm({
          header: 'Endereço repetido',
          message: 'Não é possível adicionar o mesmo endereço',
          acceptLabel: 'OK',
          rejectVisible: false,
        });

        this.formEndereco.markAllAsTouched();
      } else {
        this.enderecosLinked.push(endereco)
        this.resetFormEndereco();
      }
    } else {
      this.formEndereco.markAllAsTouched();
    }
  }

  private resetFormEndereco() {
    this.formEndereco.reset();
  }

}
