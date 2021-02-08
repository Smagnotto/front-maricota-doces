import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CadastroProdutoComponent } from './cadastro/cadastro-produtos.component'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  novoProduto(): void {
    const dialogRef = this.dialog.open(CadastroProdutoComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
