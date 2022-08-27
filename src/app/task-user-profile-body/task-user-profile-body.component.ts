import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDet } from '../services/loginService/user.model';
import { TaskUsersService } from '../services/userService/task-users.service';

@Component({
  selector: 'app-task-user-profile-body',
  templateUrl: './task-user-profile-body.component.html',
  styleUrls: ['./task-user-profile-body.component.css']
})
export class TaskUserProfileBodyComponent implements OnInit {

  user: UserDet;
  userDet: string;
  userFullName: string;
  isError: boolean;
  isSaved: boolean;

  constructor( private taskUsersService: TaskUsersService, private router: Router) { 
    this.user = JSON.parse(localStorage.getItem("userDet"));
   
  }

  ngOnInit(): void {
    this.taskUsersService.getUserDataByIDDet(this.user.userId).subscribe(
      data => {
        this.user = data;
        this.userFullName = this.user.userName;
        this.userDet = this.user.userDetails;
        console.log(this.user.userName);
      },
      error => {
        this.router.navigate(['error']);
      }
     );


  }

  //calling user service
  async saveUserDet() {
    this.user.userDetails = this.userDet;
    this.user.userName = this.userFullName;
    // console.log(this.user);
     (await this.taskUsersService.postUserDataOnPersonDataProfileEdit(this.user)).subscribe(
      error => {

      },

      data => {
        this.isSaved = true;
      }

     );
  }

}
