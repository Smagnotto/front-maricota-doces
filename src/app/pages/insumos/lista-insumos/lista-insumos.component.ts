import { Component, OnInit } from '@angular/core';
import { Insumo } from '../domain/insumo';
import { InsumoService } from '../services/insumo.service';

@Component({
  selector: 'app-lista-insumos',
  templateUrl: './lista-insumos.component.html',
  styleUrls: ['./lista-insumos.component.css']
})
export class ListaInsumosComponent implements OnInit {

  produtos: Insumo[] = [
    {
      "id": 1,
      "nome": "Bolo de Chocolate",
      "preco": 30.39,
      "ativo": true,
    },
    {
      "id": 2,
      "nome": "Red Velvet",
      "preco": 50.91,
      "ativo": true,
    },
    {
      "id": 3,
      "nome": "Brownie de Avelã",
      "preco": 64.98,
      "ativo": false,
    },
    {
      "id": 4,
      "nome": "Chocolate",
      "preco": 16,
      "ativo": false,
    }
  ] ;

  isLoading: boolean = false;

  cols: any[] = [];

  constructor(private service: InsumoService) {}

  ngOnInit() {
    this.getAllInsumos();
  }

  private getAllInsumos(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.service.getAllInsumos().subscribe((produtos: Insumo[]) => {
        this.produtos = produtos;
        this.isLoading = false;
      });
    }, 5000);
  }
}
