import { TestBed } from '@angular/core/testing';

import { InsumoService } from './insumo.service';

describe('ProdutosService', () => {
  let service: InsumoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsumoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
