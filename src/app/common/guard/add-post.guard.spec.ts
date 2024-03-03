import { TestBed } from '@angular/core/testing';

import { AddPostGuard } from './add-post.guard';

describe('AddPostGuard', () => {
  let guard: AddPostGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddPostGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
