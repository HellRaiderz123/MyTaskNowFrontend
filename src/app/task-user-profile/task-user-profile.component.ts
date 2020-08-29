import { Component, OnInit } from '@angular/core';
import { TaskBasicAuthService } from '../services/loginService/task-basic-auth.service';
import { UserDet } from '../services/loginService/user.model';

@Component({
  selector: 'app-task-user-profile',
  templateUrl: './task-user-profile.component.html',
  styleUrls: ['./task-user-profile.component.css']
})
export class TaskUserProfileComponent implements OnInit {

  user: UserDet;
  userName: string;

  constructor(
    private taskBasicAuthService : TaskBasicAuthService
  ) { }

  ngOnInit(): void {
    this.user = this.taskBasicAuthService.getUserDetails();
    console.log('in TaskUserProfileComponent ' + this.user.userName);
    this.userName = this.user.userName;
  }

  sideBarList: Array<String> = ['Personal Details', 'Account Details', 'Billing Address', 'Payment methods'];

}
