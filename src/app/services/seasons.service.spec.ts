import { TestBed } from '@angular/core/testing';

import { StandingsService } from './standings.service';

describe('SeasonsService', () => {
  let service: StandingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});