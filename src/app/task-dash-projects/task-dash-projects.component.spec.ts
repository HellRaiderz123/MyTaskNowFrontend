import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDashProjectsComponent } from './task-dash-projects.component';

describe('TaskDashProjectsComponent', () => {
  let component: TaskDashProjectsComponent;
  let fixture: ComponentFixture<TaskDashProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDashProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDashProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
