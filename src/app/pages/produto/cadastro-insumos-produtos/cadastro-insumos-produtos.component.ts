import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { TableHeader } from 'src/app/components/table-responsive/model/table-header-responsive';
import { TypeColumns } from 'src/app/components/table-responsive/model/type-columns';
import { Insumo } from '../../insumos/domain/insumo';
import { InsumoService } from '../../insumos/services/insumo.service';
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
    public cadastroProdutoService: CadastroProdutoService
  ) {}

  formCadastroInsumo: FormGroup = new FormGroup({
    nomeInsumo: new FormControl({ value: '' }, [Validators.required]),
    precoInsumo: new FormControl({ value: 0, disabled: true }, []),
    insumoAtivo: new FormControl({ value: false, disabled: true }, []),
    idInsumo: new FormControl({ value: 0, disabled: true }),
    autoCompleteNomeInsumo: new FormControl(''),
  });

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
      fieldName: 'preco',
      labelColumn: 'Preço',
      sortableColumn: true,
      typeColumn: TypeColumns.Currency,
    },
    {
      fieldName: 'ativo',
      labelColumn: 'Ativo',
      sortableColumn: false,
      typeColumn: TypeColumns.Boolean,
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
      this.insumos = insumos;
    });

    this.formCadastroInsumo.reset();
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
    this.precoInsumo?.setValue(insumo.preco);
    this.insumoAtivo?.setValue(insumo.ativo);
    this.idInsumo?.setValue(insumo.id);
    this.nomeInsumo?.setValue(insumo.nome);
  }

  prevPage(): void {
    this.router.navigate(['produtos/cadastro']);
  }

  nextPage(): void {
    this.router.navigate(['produtos/cadastro/revisao']);
  }

  vincularInsumo() {
    if (this.formCadastroInsumo.valid) {
      let insumo: Insumo = {
        id: this.idInsumo?.value,
        ativo: this.insumoAtivo?.value,
        nome: this.nomeInsumo?.value,
        preco: this.precoInsumo?.value,
      };

      if (this.cadastroProdutoService.insumosVinculados.filter((x) => x.id === insumo.id).length > 0) {
        this.confirmationService.confirm({
          header: 'Insumo repetido.',
          message: 'Não é possível adicionar o mesmo insumo',
          acceptLabel: 'OK',
          rejectVisible: false,
        });

        this.submitted = true;
      } else {

        this.cadastroProdutoService.insumosVinculados.push(insumo);

        this.formCadastroInsumo.reset();
        this.suggestions = [];
        this.submitted = false;
      }
    } else {
      this.submitted = true;
    }
  }

  onEdit(insumo: Insumo) {
    console.log(`Edit -> ${insumo.id}`);
  }

  onDelete(insumo: Insumo) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        console.log(`Delete -> ${insumo.id}`);
      },
    });
  }

  get nomeInsumo() {
    return this.formCadastroInsumo.get('nomeInsumo');
  }

  get precoInsumo() {
    return this.formCadastroInsumo.get('precoInsumo');
  }

  get insumoAtivo() {
    return this.formCadastroInsumo.get('insumoAtivo');
  }

  get idInsumo() {
    return this.formCadastroInsumo.get('idInsumo');
  }
}
