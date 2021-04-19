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
    return this.http.post('http://localhost:8080/api/v1/users',user);
  }

  async postUserDataOnPersonDataProfileEdit(user: UserDet) {
    // console.log("user.getUserId()" + user.getUserId());
    return this.http.put('http://localhost:8080/api/v1/users/'+user.getUserId(),user);
  }

  async getUserDataByID(userId: string) {
    this.http.get<UserDet>('http://localhost:8080/api/v1/users/'+userId).subscribe(data => {
        this.users = data;
        localStorage.setItem('userDet',JSON.stringify(data));
        this.router.navigate(['dashboard']);
    },
    error=> {
      console.log(error);
      this.router.navigate(['error']);
    });
  }
}
