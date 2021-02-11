import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosStepsComponent } from './produtos-steps.component';

describe('ProdutosStepsComponent', () => {
  let component: ProdutosStepsComponent;
  let fixture: ComponentFixture<ProdutosStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
