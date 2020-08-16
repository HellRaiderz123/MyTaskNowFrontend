import { TestBed } from '@angular/core/testing';

import { TaskRouteGuardService } from './task-route-guard.service';

describe('TaskRouteGuardService', () => {
  let service: TaskRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
