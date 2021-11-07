import { TestBed } from '@angular/core/testing';

import { LazyGuard } from './lazy.guard';

describe('LazyGuard', () => {
  let guard: LazyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LazyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
