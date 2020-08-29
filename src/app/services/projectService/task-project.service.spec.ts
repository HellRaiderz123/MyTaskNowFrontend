import { TestBed } from '@angular/core/testing';

import { TaskProjectService } from './task-project.service';

describe('TaskProjectService', () => {
  let service: TaskProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
