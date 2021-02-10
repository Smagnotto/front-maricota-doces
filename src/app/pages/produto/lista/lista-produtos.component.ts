import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/pages/produto/services/produtos.service';
import { Produto } from '../domain/produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
})
export class ListaProdutosComponent implements OnInit {

  //Precisa preencher o array pro skeleton funcionar
  produtos: Produto[] = [
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

  constructor(private service: ProdutosService) {}

  ngOnInit() {
    this.getAllProdutos();
  }

  private getAllProdutos(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.service.getAllProdutos().subscribe((produtos: Produto[]) => {
        this.produtos = produtos;
        this.isLoading = false;
      });
    }, 5000);
  }
}
