import { TestBed } from '@angular/core/testing';

import { ProcessHttpmsgService } from './process-httpmsg.service';

describe('ProcessHttpmsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessHttpmsgService = TestBed.get(ProcessHttpmsgService);
    expect(service).toBeTruthy();
  });
});
