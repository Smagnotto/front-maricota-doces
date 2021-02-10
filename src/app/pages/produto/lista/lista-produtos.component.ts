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
  produtos: Produto[] = [ undefined, undefined, undefined, undefined, undefined,undefined, undefined, undefined, undefined, undefined] ;

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
