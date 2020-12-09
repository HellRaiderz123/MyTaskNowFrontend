import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFavComponent } from './task-fav.component';

describe('TaskFavComponent', () => {
  let component: TaskFavComponent;
  let fixture: ComponentFixture<TaskFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
