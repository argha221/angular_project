import { TestBed } from '@angular/core/testing';

import { LolGuard } from './lol.guard';

describe('LolGuard', () => {
  let guard: LolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
