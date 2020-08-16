import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskBasicAuthService } from '../loginService/task-basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskRouteGuardService implements CanActivate{

  constructor(
    private taskBasicAuthService: TaskBasicAuthService,
    private route: Router
    ) { }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.taskBasicAuthService.isLoggedIn)
      return true;
    else
      this.route.navigate(['login']);
      return false;
  }
}
