import { TestBed } from '@angular/core/testing';

import { EncodeUriService } from './encode-uri.service';

describe('EncodeUriService', () => {
  let service: EncodeUriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncodeUriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
