import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUserProfileComponent } from './task-user-profile.component';

describe('TaskUserProfileComponent', () => {
  let component: TaskUserProfileComponent;
  let fixture: ComponentFixture<TaskUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
