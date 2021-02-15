import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDashboardDetailsProjectTaskComponent } from './task-dashboard-details-project-task.component';

describe('TaskDashboardDetailsProjectTaskComponent', () => {
  let component: TaskDashboardDetailsProjectTaskComponent;
  let fixture: ComponentFixture<TaskDashboardDetailsProjectTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDashboardDetailsProjectTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDashboardDetailsProjectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
