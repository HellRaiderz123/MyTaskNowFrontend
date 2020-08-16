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

  username: string;
  password: string;
  errorMessage: string;
  invalidCred: boolean;
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
  await this.taskBasicAuthService.login(this.username, this.password).catch(
    (error) => {
      this.invalidCred = true;
      this.errorMessage = error;
  });
  
  }

  async firebaseRegHandler() {
    await this.taskBasicAuthService.register(this.username, this.password).catch(
      (error) => {
        this.invalidCred = true;
        this.errorMessage = error;
    });
  }

  onFocusOfInput() {
    this.invalidCred = false;
  }

}
