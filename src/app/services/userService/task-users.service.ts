import { Injectable } from '@angular/core';
import { UserDet } from '../loginService/user.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskUsersService {

  constructor(
    private http: HttpClient
  ) { }

  postUserDataOnReg(user: UserDet) {
    return this.http.post('http://localhost:8080/api/v1/users',user);
  }

  postUserDataOnPersonDataProfileEdit(user: UserDet) {
    return this.http.post('http://localhost:8080/api/v1/users',user);
  }
}
