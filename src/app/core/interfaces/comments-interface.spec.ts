import { TestBed } from '@angular/core/testing';

import { CommentsInterface } from './comments-interface';

describe('CommentsInterface', () => {
  let service: CommentsInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsInterface);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
