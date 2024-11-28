import { TestBed } from '@angular/core/testing';

import { SpaceRequestService } from './space-request.service';

describe('SpaceRequestService', () => {
  let service: SpaceRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
