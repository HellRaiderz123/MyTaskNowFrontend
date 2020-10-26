import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDashboardDetailProjectComponent } from './task-dashboard-detail-project.component';

describe('TaskDashboardDetailProjectComponent', () => {
  let component: TaskDashboardDetailProjectComponent;
  let fixture: ComponentFixture<TaskDashboardDetailProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDashboardDetailProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDashboardDetailProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
