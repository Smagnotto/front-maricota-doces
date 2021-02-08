import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from '../model/ProdutoInterface';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css'],
})
export class CadastroProdutoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CadastroProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produto
  ) {}

  produtosFormGroup = new FormGroup({
    idProduto: new FormControl(''),
    nomeProduto: new FormControl('', [Validators.required]),
    precoProduto: new FormControl('', [Validators.required]),
    produtoParaVenda: new FormControl(false),
    materiaPrima: new FormControl(),
  });

  listaProdutos: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  ngOnInit(): void {
    this.produtosFormGroup.reset();
    this.idProduto?.setValue(this.data.id);
    this.nomeProduto?.setValue(this.data.nome);
    this.precoProduto?.setValue(this.data.preco);
    this.materiaPrima?.setValue(this.data.materia_prima);
  }

  get idProduto() {
    return this.produtosFormGroup.get('idProduto');
  }

  get nomeProduto() {
    return this.produtosFormGroup.get('nomeProduto');
  }

  get precoProduto() {
    return this.produtosFormGroup.get('precoProduto');
  }

  get materiaPrima() {
    return this.produtosFormGroup.get('materiaPrima');
  }

  saveProduto() {
    let produto: Produto = {
      id: this.idProduto?.value,
      nome: this.nomeProduto?.value,
      ativo: true,
      materia_prima: true,
      preco: this.precoProduto?.value,
    };

    this.dialogRef.close(produto);
  }
}
