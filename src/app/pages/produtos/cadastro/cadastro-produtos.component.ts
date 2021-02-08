import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css'],
})
export class CadastroProdutoComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CadastroProdutoComponent>) {}

  produtosFormGroup = new FormGroup({
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

  closeModal(): void {
    this.dialogRef.close();
  }
}
