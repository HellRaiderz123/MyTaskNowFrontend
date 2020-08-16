import { Component, OnInit } from '@angular/core';
import { UserDet } from '../services/loginService/user.model';

@Component({
  selector: 'app-task-user-profile-body',
  templateUrl: './task-user-profile-body.component.html',
  styleUrls: ['./task-user-profile-body.component.css']
})
export class TaskUserProfileBodyComponent implements OnInit {

  user: UserDet;
  userDet: string;
  userFullName: string;

  constructor() { 
    this.user = new UserDet;
    this.user.setUserId(JSON.parse(localStorage.getItem('user')).uid);
    this.user.setUserId(JSON.parse(localStorage.getItem('user')).email);
  }

  ngOnInit(): void {
  }

  //calling user service
  saveUserDet() {
    this.user.setUserDetails(this.userDet);
    this.user.setUserName(this.userFullName);
    console.log(this.user);
  }

}
