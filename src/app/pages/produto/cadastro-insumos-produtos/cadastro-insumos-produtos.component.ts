import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { TableHeader } from 'src/app/components/table-responsive/model/table-header-responsive';
import { TypeColumns } from 'src/app/components/table-responsive/model/type-columns';
import { Insumo } from '../../insumos/domain/insumo';
import { TiposInsumos } from '../../insumos/domain/tipos-insumos';
import { InsumoService } from '../../insumos/services/insumo.service';
import { InsumoProduto } from '../domain/insumo-produto';
import { CadastroProdutoService } from '../services/cadastro-produtos.service';

@Component({
  selector: 'app-cadastro-insumos-produtos',
  templateUrl: './cadastro-insumos-produtos.component.html',
  styleUrls: ['./cadastro-insumos-produtos.component.css'],
})
export class CadastroInsumosProdutosComponent implements OnInit {
  constructor(
    private service: InsumoService,
    private router: Router,
    private confirmationService: ConfirmationService,
    public cadastroProdutoService: CadastroProdutoService,
    private route: ActivatedRoute
  ) {}

  private readonly tipoInsumoConst: String = 'KG';

  formCadastroInsumo: FormGroup = new FormGroup({
    nomeInsumo: new FormControl({ value: '' }, [Validators.required]),
    quantidadeInsumo: new FormControl(0, [
      Validators.required,
      Validators.min(1),
    ]),
    insumoAtivo: new FormControl({ value: false, disabled: true }, []),
    idInsumo: new FormControl({ value: 0, disabled: true }),
    autoCompleteNomeInsumo: new FormControl(''),
    tipoInsumo: new FormControl(this.tipoInsumoConst),
  });

  tiposInsumos: TiposInsumos[] = [
    {
      nome: 'Kg',
      codigo: 'KG',
    },
    {
      nome: 'g',
      codigo: 'G',
    },
    {
      nome: 'l',
      codigo: 'L',
    },
    {
      nome: 'ml',
      codigo: 'ML',
    },
  ];

  submitted: boolean = false;
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

  selecionaInsumo(insumo: Insumo): void {
    this.insumoAtivo?.setValue(insumo.ativo);
    this.idInsumo?.setValue(insumo.id);
    this.nomeInsumo?.setValue(insumo.nome);
  }

  prevPage(): void {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  nextPage(): void {
    this.router.navigate(['../revisao'], { relativeTo: this.route });
  }

  vincularInsumo() {
    if (this.formCadastroInsumo.valid) {
      let insumo: InsumoProduto = {
        id_insumo: this.idInsumo?.value,
        nome: this.nomeInsumo?.value,
        quantidade: this.quantidadeInsumo?.value,
        tipo: this.tipoInsumo?.value,
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

        this.submitted = true;
      } else {
        this.cadastroProdutoService.cadastroProduto.insumos.push(insumo);

        this.resetForm();
        this.suggestions = [];
        this.submitted = false;
      }
    } else {
      this.submitted = true;
    }
  }

  private resetForm(): void {
    this.formCadastroInsumo.reset({
      tipoInsumo: this.tipoInsumoConst,
      idInsumo: 0,
      quantidadeInsumo: 0,
    });
  }

  onEdit(insumo: Insumo) {
    console.log(`Edit -> ${insumo.id}`);
  }

  onDelete(insumo: Insumo) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {},
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
}
