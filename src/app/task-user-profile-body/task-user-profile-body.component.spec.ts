import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUserProfileBodyComponent } from './task-user-profile-body.component';

describe('TaskUserProfileBodyComponent', () => {
  let component: TaskUserProfileBodyComponent;
  let fixture: ComponentFixture<TaskUserProfileBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskUserProfileBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUserProfileBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
