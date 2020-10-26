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

  constructor(private taskBasicAuthService : TaskBasicAuthService) { 
  }

  ngOnInit(): void {
    this.user = this.taskBasicAuthService.getUserDetails();
    console.log('in TaskDashProfileCompNgOnInit ' + this.user.userName);
    this.userName = this.user.userName;
  }

  sideBarList: Array<String> = ['List View', 'Detail View'];
  

}
