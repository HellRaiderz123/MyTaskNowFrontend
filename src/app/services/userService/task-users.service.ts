import { Injectable } from '@angular/core';
import { UserDet } from '../loginService/user.model';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskUsersService {

  users = new UserDet;

  constructor(
    private http: HttpClient,
    public  router:  Router,
  ) { }

  async postUserDataOnReg(user: UserDet) {
    return this.http.post('https://https://mytasknow-co.herokuapp.com/api/v1/users/',user);
  }

  async postUserDataOnPersonDataProfileEdit(user: UserDet) {
    console.log("user.getUserId()" + user.userId);
    return this.http.put('https://mytasknow-co.herokuapp.com/api/v1/users/'+user.userId,user);
  }

  async getUserDataByID(userId: string) {
    this.http.get<UserDet>('https://mytasknow-co.herokuapp.com/api/v1/users/'+userId).subscribe(data => {
        this.users = data;
        localStorage.setItem('userDet',JSON.stringify(data));
        this.router.navigate(['dashboard']);
    },
    error=> {
      console.log(error);
      this.router.navigate(['error']);
    });
  }

  getUserDataByIDDet(userId: string) {
    return this.http.get<UserDet>('https://mytasknow-co.herokuapp.com/api/v1/users/'+userId);
  }
}
