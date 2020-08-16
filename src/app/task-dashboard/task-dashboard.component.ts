import { Component, OnInit } from '@angular/core';
import { UserDet } from '../services/loginService/user.model';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {


  user = new UserDet;

  userName: string;

  userDetails: string;

  authUser;

  constructor() { 
    this.authUser  =  JSON.parse(localStorage.getItem('user'));
    console.log(this.authUser);
    //this.user.email = localStorage.getItem('user');
  }

  ngOnInit(): void {
  }

  addMyDetails() {

    //
    console.log(this.authUser.uid);
    this.user.setUserId(this.authUser.uid);
    this.user.setUserEmail(this.authUser.email);
    this.user.setUserDetails('');
    this.user.setUserName(this.userName);

    

  }
  

}
