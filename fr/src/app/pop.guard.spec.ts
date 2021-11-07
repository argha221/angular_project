import { TestBed } from '@angular/core/testing';

import { PopGuard } from './pop.guard';

describe('PopGuard', () => {
  let guard: PopGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PopGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
