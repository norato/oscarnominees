/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoviesDataService } from './movies-data.service';

describe('MoviesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesDataService]
    });
  });

  it('should ...', inject([MoviesDataService], (service: MoviesDataService) => {
    expect(service).toBeTruthy();
  }));
});
