import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-produtos-info',
  templateUrl: './produtos-info.component.html',
  styleUrls: ['./produtos-info.component.css'],
})
export class ProdutosInfoComponent implements OnInit {
  constructor(private router: Router, private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}

  cancel(): void {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja sair? Os dados serão perdidos!",
      accept: () => {
        this.router.navigate(['/produtos'])
      }
    })
  }

  nextPage(): void {
    this.router.navigate(['produtos/cadastro/insumos']);
  }
}
