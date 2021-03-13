import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosEncomendaComponent } from './produtos-encomenda.component';

describe('ProdutosEncomendaComponent', () => {
  let component: ProdutosEncomendaComponent;
  let fixture: ComponentFixture<ProdutosEncomendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosEncomendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosEncomendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
