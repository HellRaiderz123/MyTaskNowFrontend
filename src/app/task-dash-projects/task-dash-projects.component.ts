import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  { Project} from '../services/projectService/project.model';
import { TaskProjectService } from '../services/projectService/task-project.service';

@Component({
  selector: 'app-task-dash-projects',
  templateUrl: './task-dash-projects.component.html',
  styleUrls: ['./task-dash-projects.component.css']
})
export class TaskDashProjectsComponent implements OnInit {

  Projects: Array<Project> = [];

  constructor(
    private taskService: TaskProjectService,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    this.taskService.getAllProjects().subscribe(
      data => {
        this.Projects = data;
        console.log(this.Projects);
      },
      error => {
        this.router.navigate(['error']);
      }
    );
  }

}