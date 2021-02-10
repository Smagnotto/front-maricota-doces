import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosInfoComponent } from './produtos-info.component';

describe('ProdutosInfoComponent', () => {
  let component: ProdutosInfoComponent;
  let fixture: ComponentFixture<ProdutosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
