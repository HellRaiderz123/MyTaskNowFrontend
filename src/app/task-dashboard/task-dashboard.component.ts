import { Component, OnInit } from '@angular/core';
import { UserDet } from '../services/loginService/user.model';
import { TaskBasicAuthService } from '../services/loginService/task-basic-auth.service';
import { Router } from '@angular/router';
import { TaskUsersService } from '../services/userService/task-users.service';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {


  user: UserDet;
  userName: string;
  userDet: string;
  sideBarList: Array<String> = ['List View', 'Kanban View'];

  constructor( private taskUsersService: TaskUsersService, private router: Router) { 
    this.user = JSON.parse(localStorage.getItem("userDet"));
   
  }

  ngOnInit(): void {
    this.taskUsersService.getUserDataByIDDet(this.user.userId).subscribe(
      data => {
        this.user = data;
        this.userName = this.user.userName;
        this.userDet = this.user.userDetails;
      },
      error => {
        this.router.navigate(['error']);
      }
     );


  }
  
}
