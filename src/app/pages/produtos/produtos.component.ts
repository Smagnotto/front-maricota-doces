import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastroProdutoComponent } from './cadastro/cadastro-produtos.component'
import { Produto } from './ProdutoInterface';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit, AfterViewInit {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['nome', 'preco', 'ativo', 'materia_prima'];

  dataSource = new MatTableDataSource<Produto>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

  novoProduto(): void {
    const dialogRef = this.dialog.open(CadastroProdutoComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


const ELEMENT_DATA: Produto[] = [
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
  { nome: 'Bolo de Banana', ativo: true, preco: 30.40, materia_prima: false },
];