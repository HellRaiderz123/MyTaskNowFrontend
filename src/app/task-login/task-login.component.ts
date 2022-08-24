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
  loadingSpan: any;
  disabled: boolean;

  constructor(public taskBasicAuthService: TaskBasicAuthService,private router: Router) { 
    this.loadingSpan = document.createElement('span');
    this.loadingSpan.className = 'spinner-border spinner-border-sm';
    this.loadingSpan.setAttribute('role','status');
    this.loadingSpan.setAttribute('id','spinner');
    this.loadingSpan.setAttribute('aria-hidden','true');
  }

  ngOnInit(): void {
  }

  async firebaseLoginHandler() {

  document.getElementById('login-btn').appendChild(this.loadingSpan);
  this.disabled = true
  await this.taskBasicAuthService.login(this.username, this.password)
  .then(
    (data) => {
      let spin = document.getElementById('spinner');
      document.getElementById('login-btn').removeChild(spin);
    }

  )
  .catch(
    (error) => {
      this.invalidCred = true;
      this.errorMessage = error;
      this.isLoginAttempted = false;
      let spin = document.getElementById('spinner');
      document.getElementById('login-btn').removeChild(spin);
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
