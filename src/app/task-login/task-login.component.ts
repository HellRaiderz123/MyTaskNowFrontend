import { Component, OnInit } from '@angular/core';
import { TaskBasicAuthService } from '../services/loginService/task-basic-auth.service';

@Component({
  selector: 'app-task-login',
  templateUrl: './task-login.component.html',
  styleUrls: ['./task-login.component.css']
})
export class TaskLoginComponent implements OnInit {

  invalidUser: boolean;
  username: string = 'admin@xyz.com';
  password: string;

  constructor(private taskBasicAuthService: TaskBasicAuthService) { }

  ngOnInit(): void {
  }

  basicAuthLoginHandler() {
    if(this.taskBasicAuthService.basicAuthService(this.username, this.password)){

    } else {

    }
  }

}
