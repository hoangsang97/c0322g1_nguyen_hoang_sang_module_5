import { TestBed } from '@angular/core/testing';

import { MaBenhNhanService } from './ma-benh-nhan.service';

describe('MaBenhNhanService', () => {
  let service: MaBenhNhanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaBenhNhanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
