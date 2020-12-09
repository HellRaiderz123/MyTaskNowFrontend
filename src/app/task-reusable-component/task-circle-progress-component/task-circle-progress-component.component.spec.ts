import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCircleProgressComponentComponent } from './task-circle-progress-component.component';

describe('TaskCircleProgressComponentComponent', () => {
  let component: TaskCircleProgressComponentComponent;
  let fixture: ComponentFixture<TaskCircleProgressComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCircleProgressComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCircleProgressComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
