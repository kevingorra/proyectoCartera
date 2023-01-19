import { TestBed } from '@angular/core/testing';

import { Indicadores2020pruebaService } from './indicadores2020prueba.service';

describe('Indicadores2020pruebaService', () => {
  let service: Indicadores2020pruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Indicadores2020pruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
