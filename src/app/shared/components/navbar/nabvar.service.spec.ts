import { TestBed } from '@angular/core/testing';

import { NabvarService } from './nabvar.service';

describe('NabvarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NabvarService = TestBed.get(NabvarService);
    expect(service).toBeTruthy();
  });
});
