import { TestBed } from '@angular/core/testing';

import { MonogoService } from './monogo.service';

describe('MonogoService', () => {
  let service: MonogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
