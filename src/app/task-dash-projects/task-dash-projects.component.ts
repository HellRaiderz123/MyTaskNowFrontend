import { Component, OnInit } from '@angular/core';

import  { Project} from '../services/projectService/project.model';

@Component({
  selector: 'app-task-dash-projects',
  templateUrl: './task-dash-projects.component.html',
  styleUrls: ['./task-dash-projects.component.css']
})
export class TaskDashProjectsComponent implements OnInit {

  Projects: Array<Project> = [
    new Project('1','FIRST-PROJECT',new Date(), new Date(),['Tarun','Ram'],false),
    new Project('2','SECOND-PROJECT',new Date(), new Date(),['Tarun','Ram'],true),
    new Project('3','THIRD-PROJECT',new Date(), new Date(),['Tarun','Ram'],true),
    new Project('4','FOURTH-PROJECT',new Date(), new Date(),['Tarun','Ram'],false),
    new Project('5','FIFTH-PROJECT',new Date(), new Date(),['Tarun','Ram'],false),
    new Project('6','SIXTH-PROJECT',new Date(), new Date(),['Tarun','Ram'],false)];

  constructor() { }

  ngOnInit(): void {
  }

}
