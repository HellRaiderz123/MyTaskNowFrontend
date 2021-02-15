import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDashboardDetailsProjectPhaseComponent } from './task-dashboard-details-project-phase.component';

describe('TaskDashboardDetailsProjectPhaseComponent', () => {
  let component: TaskDashboardDetailsProjectPhaseComponent;
  let fixture: ComponentFixture<TaskDashboardDetailsProjectPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDashboardDetailsProjectPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDashboardDetailsProjectPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
