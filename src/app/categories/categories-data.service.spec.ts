/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoriesDataService } from './categories-data.service';

describe('CategoriesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesDataService]
    });
  });

  it('should ...', inject([CategoriesDataService], (service: CategoriesDataService) => {
    expect(service).toBeTruthy();
  }));
});
