import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskBasicAuthService {

  constructor(private httpClient: HttpClient) { }

  basicAuthService(username:string, password: string): boolean {
    if(username=='admin@xyz.com' && password =='root123') 
      return true;
    else
      return false;
  }
}
