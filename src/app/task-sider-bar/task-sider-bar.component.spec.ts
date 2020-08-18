import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSiderBarComponent } from './task-sider-bar.component';

describe('TaskSiderBarComponent', () => {
  let component: TaskSiderBarComponent;
  let fixture: ComponentFixture<TaskSiderBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSiderBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSiderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
