import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInsumosProdutosComponent } from './cadastro-insumos-produtos.component';

describe('CadastroInsumosProdutosComponent', () => {
  let component: CadastroInsumosProdutosComponent;
  let fixture: ComponentFixture<CadastroInsumosProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroInsumosProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroInsumosProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
