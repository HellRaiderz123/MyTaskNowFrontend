import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-dashboard-detail-project',
  templateUrl: './task-dashboard-detail-project.component.html',
  styleUrls: ['./task-dashboard-detail-project.component.css']
})
export class TaskDashboardDetailProjectComponent implements OnInit {

  phase: string;
  projectName: string;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.projectName = params['projectName'];
      this.phase = params['currPhase'];
    });
  }

  ngOnInit(): void {
  }

  changProjectPhase(value: string) {
    //need to change the project phase details component
    this.phase = value;
  }

}
