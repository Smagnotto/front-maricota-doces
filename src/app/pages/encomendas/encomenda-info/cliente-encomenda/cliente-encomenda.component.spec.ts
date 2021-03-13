import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEncomendaComponent } from './cliente-encomenda.component';

describe('ClienteEncomendaComponent', () => {
  let component: ClienteEncomendaComponent;
  let fixture: ComponentFixture<ClienteEncomendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEncomendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEncomendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
