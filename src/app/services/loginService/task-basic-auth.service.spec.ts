import { TestBed } from '@angular/core/testing';

import { TaskBasicAuthService } from './task-basic-auth.service';

describe('TaskBasicAuthService', () => {
  let service: TaskBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
