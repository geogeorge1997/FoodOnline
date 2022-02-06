import { TestBed } from '@angular/core/testing';

import { FoodlistService } from './foodlist.service';

describe('FoodlistService', () => {
  let service: FoodlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
