import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesInfoComponent } from './clientes-info.component';

describe('ClientesInfoComponent', () => {
  let component: ClientesInfoComponent;
  let fixture: ComponentFixture<ClientesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesInfoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
