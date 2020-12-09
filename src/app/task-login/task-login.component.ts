import { Component, OnInit } from '@angular/core';
import { TaskBasicAuthService } from '../services/loginService/task-basic-auth.service';
import { Router } from '@angular/router';
import { TaskRouteGuardService } from '../services/guard/task-route-guard.service';

@Component({
  selector: 'app-task-login',
  templateUrl: './task-login.component.html',
  styleUrls: ['./task-login.component.css']
})
export class TaskLoginComponent implements OnInit {

  fullName: string = null;
  username: string;
  password: string;
  errorMessage: string;
  invalidCred: boolean;
  isLoginAttempted: boolean = false;
  firstTimeSungUpAttempt: boolean = false;
  spiner:boolean;

  constructor(public taskBasicAuthService: TaskBasicAuthService,private router: Router) { }

  ngOnInit(): void {
  }

  async firebaseLoginHandler() {
  //  Promise.all([this.taskBasicAuthService.login(this.username, this.password)]).then(
  //   (values) => {
  //      this.invalidCred = false;
  //     this.router.navigate(['dashboard']);
  //   }
  //  ).catch((error) => {
  //   // alert(error.message);
  //   this.invalidCred = true;
  //  })

  this.spiner = true;
  await this.taskBasicAuthService.login(this.username, this.password).catch(
    (error) => {
      this.invalidCred = true;
      this.errorMessage = error;
      this.isLoginAttempted = true;
      this.spiner = false;
  });
  
  }

  async firebaseRegHandler() {
    if(this.fullName==='' || this.fullName===null) {
      this.invalidCred = true;
      this.errorMessage = 'Please Enter the Full Name to SignUp!';
      return false;
    }
    await this.taskBasicAuthService.register(this.username, this.password, this.fullName).catch(
      (error) => {
        this.invalidCred = true;
        this.errorMessage = error;
    });
  }

  onFocusOfInput() {
    this.invalidCred = false;
  }

  firstTimeSugnUp() {
    this.firstTimeSungUpAttempt = true;
  }

}
