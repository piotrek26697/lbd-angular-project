import { TestBed } from '@angular/core/testing';

import { CareTakerService } from './care-taker.service';

describe('CareTakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CareTakerService = TestBed.get(CareTakerService);
    expect(service).toBeTruthy();
  });
});
