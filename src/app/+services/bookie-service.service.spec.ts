import { TestBed } from '@angular/core/testing';

import { BookieServiceService } from './bookie-service.service';

describe('BookieServiceService', () => {
  let service: BookieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
