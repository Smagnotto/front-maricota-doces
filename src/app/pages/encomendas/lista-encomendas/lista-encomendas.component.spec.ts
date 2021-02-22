import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEncomendasComponent } from './lista-encomendas.component';

describe('ListaEncomendasComponent', () => {
  let component: ListaEncomendasComponent;
  let fixture: ComponentFixture<ListaEncomendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEncomendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEncomendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
