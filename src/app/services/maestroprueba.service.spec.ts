import { TestBed } from '@angular/core/testing';

import { MaestropruebaService } from './maestroprueba.service';

describe('MaestropruebaService', () => {
  let service: MaestropruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaestropruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
