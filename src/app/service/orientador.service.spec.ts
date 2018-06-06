import { TestBed, inject } from '@angular/core/testing';

import { OrientadorService } from './orientador.service';

describe('OrientadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrientadorService]
    });
  });

  it('should be created', inject([OrientadorService], (service: OrientadorService) => {
    expect(service).toBeTruthy();
  }));
});
