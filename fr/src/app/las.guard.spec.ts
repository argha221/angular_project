import { TestBed } from '@angular/core/testing';

import { LasGuard } from './las.guard';

describe('LasGuard', () => {
  let guard: LasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
