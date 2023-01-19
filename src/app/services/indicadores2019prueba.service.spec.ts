import { TestBed } from '@angular/core/testing';

import { Indicadores2019pruebaService } from './indicadores2019prueba.service';

describe('Indicadores2019pruebaService', () => {
  let service: Indicadores2019pruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Indicadores2019pruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
