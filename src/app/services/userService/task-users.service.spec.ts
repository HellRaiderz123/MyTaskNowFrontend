import { TestBed } from '@angular/core/testing';

import { TaskUsersService } from './task-users.service';

describe('TaskUsersService', () => {
  let service: TaskUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
