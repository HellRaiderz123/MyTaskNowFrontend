import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDet } from '../services/loginService/user.model';
import { TaskUsersService } from '../services/userService/task-users.service';

@Component({
  selector: 'app-task-user-profile',
  templateUrl: './task-user-profile.component.html',
  styleUrls: ['./task-user-profile.component.css']
})
export class TaskUserProfileComponent implements OnInit {

  user: UserDet;
  userName: string;
  sideBarType = 'profile';
  userId: string;

  constructor(
    private taskUsersService : TaskUsersService,
    private router: Router
  ) {

    //updating userId from localstorage
    this.user = JSON.parse(localStorage.getItem("userDet"));
    this.userId = this.user.userId;
    this.taskUsersService.getUserDataByIDDet(this.userId).subscribe(
      data => {
        this.user = data;
        this.userName = this.user.userName;
        console.log(this.user.userName);
      },
      error => {
        this.router.navigate(['error']);
      }
     );
   }

  ngOnInit(): void {
   
  }

  sideBarList: Array<String> = ['Personal Details', 'Account Details', 'Billing Address', 'Payment methods'];

}
