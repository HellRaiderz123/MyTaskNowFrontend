import { Component, OnInit } from '@angular/core';
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

  constructor( private taskUsersService: TaskUsersService) { 
    this.user = new UserDet;
    this.user.setUserId(JSON.parse(localStorage.getItem('user')).uid);
    this.user.setUserEmail(JSON.parse(localStorage.getItem('user')).email);
  }

  ngOnInit(): void {
  }

  //calling user service
  async saveUserDet() {
    this.user.setUserDetails(this.userDet);
    this.user.setUserName(this.userFullName);
    // console.log(this.user);
    (await this.taskUsersService.postUserDataOnPersonDataProfileEdit(this.user)).subscribe();
  }

}
