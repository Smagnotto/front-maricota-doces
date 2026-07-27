import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { TableHeader } from 'src/app/components/table-responsive/model/table-header-responsive';
import { TypeColumns } from 'src/app/components/table-responsive/model/type-columns';
import { Insumo } from '../../insumos/domain/insumo';
import { converterQuantidade, tiposInsumosOptions, TiposInsumos } from '../../insumos/domain/tipos-insumos';
import { InsumoService } from '../../insumos/services/insumo.service';
import { InsumoProduto } from '../domain/insumo-produto';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';

@Component({
    selector: 'app-cadastro-insumos-produtos',
    templateUrl: './cadastro-insumos-produtos.component.html',
    styleUrls: ['./cadastro-insumos-produtos.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CadastroInsumosProdutosComponent implements OnInit {
  constructor(
    private service: InsumoService,
    private router: Router,
    private confirmationService: ConfirmationService,
    public cadastroProdutoService: CadastroProdutoService,
    private route: ActivatedRoute,
    private elementRef: ElementRef<HTMLElement>
  ) {}

  private readonly tipoInsumoConst: string = 'KG';

  formCadastroInsumo: UntypedFormGroup = new UntypedFormGroup({
    nomeInsumo: new UntypedFormControl({ value: '' }, [Validators.required]),
    quantidadeInsumo: new UntypedFormControl(0, [
      Validators.required,
      Validators.min(1),
    ]),
    precoInsumo: new UntypedFormControl({ value: 0, disabled: true}),
    insumoAtivo: new UntypedFormControl({ value: false, disabled: true }, []),
    idInsumo: new UntypedFormControl({ value: 0, disabled: true }),
    autoCompleteNomeInsumo: new UntypedFormControl(''),
    tipoInsumo: new UntypedFormControl({value: this.tipoInsumoConst }),
  });

  tiposInsumosOptions: TiposInsumos[] = tiposInsumosOptions

  insumos: Insumo[];
  suggestions: any[];

  headersInsumos: TableHeader[] = [
    {
      fieldName: 'nome',
      labelColumn: 'Nome',
      sortableColumn: true,
      typeColumn: TypeColumns.String,
    },
    {
      fieldName: 'quantidade',
      labelColumn: 'Quantidade',
      sortableColumn: true,
      typeColumn: TypeColumns.String,
    },
    {
      fieldName: 'tipo',
      labelColumn: 'Tipo',
      sortableColumn: true,
      typeColumn: TypeColumns.String,
    },
    {
      fieldName: 'valor',
      labelColumn: 'Valor Total',
      sortableColumn: true,
      typeColumn: TypeColumns.Currency,
    },
    {
      fieldName: '',
      labelColumn: 'Ações',
      sortableColumn: false,
      typeColumn: TypeColumns.ActionsButtons,
    },
  ];

  ngOnInit(): void {
    this.service.getAllInsumos().subscribe((insumos: Insumo[]) => {
      this.insumos = insumos.filter((x) => x.ativo);
    });

    this.resetForm();
  }

  search(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.insumos.length; i++) {
      let insumo = this.insumos[i];
      if (insumo.nome.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(insumo);
      }
    }

    this.suggestions = filtered;
  }

  selecionaInsumo(event: AutoCompleteSelectEvent): void {
    const insumo = event.value as Insumo;
    this.insumoAtivo?.setValue(insumo.ativo);
    this.idInsumo?.setValue(insumo.id);
    this.nomeInsumo?.setValue(insumo.nome);
    this.precoInsumo?.setValue(insumo.preco)
    this.tipoInsumo?.setValue(insumo.tipo)

    this.atualizarPrecoExibido(insumo.preco);
  }

  private atualizarPrecoExibido(valor: number): void {
    setTimeout(() => {
      const input = this.elementRef.nativeElement.querySelector<HTMLInputElement>('#preco_insumo input');
      if (input) {
        input.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor ?? 0);
      }
    });
  }

  private atualizarQuantidadeExibida(valor: number): void {
    setTimeout(() => {
      const input = this.elementRef.nativeElement.querySelector<HTMLInputElement>('#quantidade_insumo input');
      if (input) {
        input.value = new Intl.NumberFormat('pt-BR', { useGrouping: false }).format(valor ?? 0);
      }
    });
  }

  prevPage(): void {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  nextPage(): void {
    this.router.navigate(['../revisao'], { relativeTo: this.route });
  }

  vincularInsumo() {
    if (this.formCadastroInsumo.valid) {
      const insumoCatalogo = this.insumos?.find((x) => x.id === this.idInsumo?.value);

      const quantidadeNaUnidadeDoInsumo = converterQuantidade(
        this.quantidadeInsumo?.value,
        this.tipoInsumo?.value,
        insumoCatalogo?.tipo ?? this.tipoInsumo?.value
      );

      let insumo: InsumoProduto = {
        id_insumo: this.idInsumo?.value,
        nome: this.nomeInsumo?.value,
        quantidade: this.quantidadeInsumo?.value,
        tipo: this.tipoInsumo?.value,
        valor: quantidadeNaUnidadeDoInsumo * this.precoInsumo?.value
      };

      if (
        this.cadastroProdutoService.cadastroProduto.insumos.filter(
          (x) => x.id_insumo === insumo.id_insumo
        ).length > 0
      ) {
        this.confirmationService.confirm({
          header: 'Insumo repetido.',
          message: 'Não é possível adicionar o mesmo insumo',
          acceptLabel: 'OK',
          rejectVisible: false,
        });

        this.formCadastroInsumo.markAllAsTouched();
      } else {
        this.cadastroProdutoService.cadastroProduto.insumos.push(insumo);

        this.resetForm();
        this.suggestions = [];
      }
    } else {
      this.formCadastroInsumo.markAllAsTouched();
    }
  }

  private resetForm(): void {
    this.formCadastroInsumo.reset({
      tipoInsumo: this.tipoInsumoConst,
      idInsumo: 0,
      quantidadeInsumo: 0,
      precoInsumo: 0
    });

    this.atualizarPrecoExibido(0);
    this.atualizarQuantidadeExibida(0);
  }

  private deleteInsumo(insumos: InsumoProduto[], insumo: InsumoProduto) {
    return insumos.filter((item) => {
      return item != insumo;
    });
  }

  onEdit(insumo: InsumoProduto) {
    const insumoCatalogo = this.insumos?.find((x) => x.id === insumo.id_insumo);

    this.idInsumo?.setValue(insumo.id_insumo);
    this.nomeInsumo?.setValue(insumo.nome);
    this.autoCompleteNomeInsumo?.setValue({ nome: insumo.nome });
    this.quantidadeInsumo?.setValue(insumo.quantidade);
    this.tipoInsumo?.setValue(insumo.tipo);
    this.insumoAtivo?.setValue(insumoCatalogo?.ativo ?? false);

    this.cadastroProdutoService.cadastroProduto.insumos = this.deleteInsumo(
      this.cadastroProdutoService.cadastroProduto.insumos,
      insumo
    );
  }

  onDelete(insumo: InsumoProduto) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        let insumos = [...this.cadastroProdutoService.cadastroProduto.insumos];

        this.cadastroProdutoService.cadastroProduto.insumos = [
          ...this.deleteInsumo(insumos, insumo),
        ];
      },
    });
  }

  get nomeInsumo() {
    return this.formCadastroInsumo.get('nomeInsumo');
  }

  get quantidadeInsumo() {
    return this.formCadastroInsumo.get('quantidadeInsumo');
  }

  get insumoAtivo() {
    return this.formCadastroInsumo.get('insumoAtivo');
  }

  get idInsumo() {
    return this.formCadastroInsumo.get('idInsumo');
  }

  get tipoInsumo() {
    return this.formCadastroInsumo.get('tipoInsumo');
  }

  get autoCompleteNomeInsumo() {
    return this.formCadastroInsumo.get('autoCompleteNomeInsumo');
  }

  get precoInsumo() {
    return this.formCadastroInsumo.get('precoInsumo')
  }
}
