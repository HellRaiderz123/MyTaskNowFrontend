import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFooterComponent } from './task-footer.component';

describe('TaskFooterComponent', () => {
  let component: TaskFooterComponent;
  let fixture: ComponentFixture<TaskFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
