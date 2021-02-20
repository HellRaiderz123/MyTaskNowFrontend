import { Component, OnInit } from '@angular/core';
import { UserDet } from '../services/loginService/user.model';
import { TaskBasicAuthService } from '../services/loginService/task-basic-auth.service';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {


  user: UserDet;
  userName: string;
  sideBarList: Array<String> = ['List View', 'Kanban View'];

  constructor(private taskBasicAuthService : TaskBasicAuthService) { 
  }

  ngOnInit(): void {
    this.user = this.taskBasicAuthService.getUserDetails();
    this.userName = this.user.userName;
  }
  
}
