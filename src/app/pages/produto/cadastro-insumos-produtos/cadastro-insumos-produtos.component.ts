import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insumo } from '../../insumos/domain/insumo';
import { InsumoService } from '../../insumos/services/insumo.service';

@Component({
  selector: 'app-cadastro-insumos-produtos',
  templateUrl: './cadastro-insumos-produtos.component.html',
  styleUrls: ['./cadastro-insumos-produtos.component.css'],
})
export class CadastroInsumosProdutosComponent implements OnInit {
  constructor(private service: InsumoService, private router: Router) {}

  insumos: Insumo[];
  insumosVinculados: Insumo[] = [];
  suggestions: any[];
  insumoSelecionado: Insumo;

  ngOnInit(): void {
    this.service.getAllInsumos().subscribe((insumos: Insumo[]) => {
      this.insumos = insumos;
    });
  }

  search(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.insumos.length; i++) {
      let country = this.insumos[i];
      if (country.nome.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.suggestions = filtered;
  }

  selecionaInsumo(event: Insumo): void {
    this.insumoSelecionado = event;
  }

  prevPage(): void {
    this.router.navigate(['produtos/cadastro']);
  }

  nextPage(): void {
    this.router.navigate(['produtos/cadastro/revisao']);
  }

  vincularInsumo() {
    this.insumosVinculados.push(this.insumoSelecionado);
  }
}
