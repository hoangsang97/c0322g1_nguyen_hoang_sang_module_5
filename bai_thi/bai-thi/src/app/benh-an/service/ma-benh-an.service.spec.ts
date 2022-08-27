import { TestBed } from '@angular/core/testing';

import { MaBenhAnService } from './ma-benh-an.service';

describe('MaBenhAnService', () => {
  let service: MaBenhAnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaBenhAnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
