import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
// import { User } from  'firebase';
import { UserDet } from './user.model';
import { TaskUsersService } from '../userService/task-users.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskBasicAuthService {

  // user: User;

  users = new UserDet;
  authUser;

  constructor(
    private httpClient: HttpClient, 
    public  afAuth:  AngularFireAuth, 
    public  router:  Router,
    private taskUsersService: TaskUsersService
    ) { 
      if(!(localStorage.getItem('user')==null || localStorage.getItem('user')=='null')){
        this.authUser = JSON.parse(localStorage.getItem('user'));
        this.users.setUserEmail(this.authUser.email);
        this.users.setUserName(this.authUser.uid);

      }
    }

  basicAuthService(username:string, password: string): boolean {
    if(username=='admin@xyz.com' && password =='root123') 
      return true;
    else
      return false;
  }


  async login(email: string, password: string){
    var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    this.afAuth.authState.subscribe(user => {
      if (user){
        // this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        //Need to get User Det with User iD and set to localStorage
        console.log(JSON.parse(JSON.stringify(user)).uid)
        this.taskUsersService.getUserDataByID(JSON.parse(JSON.stringify(user)).uid).subscribe(
          data => {
              this.users = data;
              localStorage.setItem('userDet',JSON.stringify(data));
          },
          error=> {
            console.log(error);
          }
        );
        this.router.navigate(['dashboard']);
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async register(email: string, password: string, fullName: string) {
     var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
     this.sendEmailVerification();
     this.afAuth.authState.subscribe(user => {
      if (user){
        localStorage.setItem('user', null);
        //this.user = user;
        //User - add details Api call
        this.authUser = JSON.parse(JSON.stringify(user));
        this.users.setUserId(this.authUser.uid);
        this.users.setUserEmail(this.authUser.email);
        this.users.setUserName(fullName);
        //calling end point
        this.taskUsersService.postUserDataOnReg(this.users).subscribe();
      } else {
        localStorage.setItem('user', null);
      }
    });
    this.router.navigate(['']);
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
    //this.router.navigate(['admin/verify-email']);
  }

async sendPasswordResetEmail(passwordResetEmail: string) {
  return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
}

async logout(){
  await this.afAuth.auth.signOut();
  localStorage.removeItem('user');
  localStorage.removeItem('userDet');
}

get isLoggedIn(): boolean{
  const  user  =  JSON.parse(localStorage.getItem('user'));
  // console.log('here in isLOggedIN and return ' +  (user  !==  null));
  return  user  !==  null;
}

async  loginWithGoogle(){
  await  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  this.router.navigate(['admin/list']);
}

getUserDetails() : UserDet {
  return this.users;
}

}
