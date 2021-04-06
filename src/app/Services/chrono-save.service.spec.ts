import { TestBed } from '@angular/core/testing';

import { ChronoSaveService } from './chrono-save.service';

describe('ChronoSaveService', () => {
  let service: ChronoSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChronoSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
