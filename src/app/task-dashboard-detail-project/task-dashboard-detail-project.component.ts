import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-dashboard-detail-project',
  templateUrl: './task-dashboard-detail-project.component.html',
  styleUrls: ['./task-dashboard-detail-project.component.css']
})
export class TaskDashboardDetailProjectComponent implements OnInit {

  activeProjectPhase: string = 'A&D';
  activeClass: string="btn btn-outline-primary rounded-circle";
  notActiveClass: string="btn btn-outline-secondary rounded-circle";

  constructor() { }

  ngOnInit(): void {
  }

}
