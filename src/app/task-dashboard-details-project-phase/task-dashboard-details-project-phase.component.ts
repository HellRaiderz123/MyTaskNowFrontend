import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-dashboard-details-project-phase',
  templateUrl: './task-dashboard-details-project-phase.component.html',
  styleUrls: ['./task-dashboard-details-project-phase.component.css']
})
export class TaskDashboardDetailsProjectPhaseComponent implements OnInit {

  @Input() project: string;
  @Output() change = new EventEmitter();

  @Input() activeProjectPhase: string;
  activeClass: string="btn btn-outline-primary rounded-circle";
  notActiveClass: string="btn btn-outline-secondary rounded-circle";

  constructor() { }

  ngOnInit(): void {
  }

  fnChangePhase(value: string) {
    this.change.emit(value);
  }

}
