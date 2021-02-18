import { Component, OnInit } from '@angular/core';

import  { Project} from '../services/projectService/project.model';
import { TaskProjectService } from '../services/projectService/task-project.service';

@Component({
  selector: 'app-task-dash-projects',
  templateUrl: './task-dash-projects.component.html',
  styleUrls: ['./task-dash-projects.component.css']
})
export class TaskDashProjectsComponent implements OnInit {

  Projects: Array<Project> = [];

  constructor(private taskService: TaskProjectService) { 
  }

  ngOnInit(): void {
    this.taskService.getAllProjects().subscribe(
      data => {
        this.Projects = data;
        console.log(this.Projects);
      }
    );
  }

}