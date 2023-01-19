import { TestBed } from '@angular/core/testing';

import { SuperintendenciafinanzasService } from './superintendenciafinanzas.service';

describe('SuperintendenciafinanzasService', () => {
  let service: SuperintendenciafinanzasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperintendenciafinanzasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
