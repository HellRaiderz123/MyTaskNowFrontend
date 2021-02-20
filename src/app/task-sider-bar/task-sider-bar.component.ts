import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskBasicAuthService } from '../services/loginService/task-basic-auth.service';
import { UserDet } from '../services/loginService/user.model';

@Component({
  selector: 'app-task-sider-bar',
  templateUrl: './task-sider-bar.component.html',
  styleUrls: ['./task-sider-bar.component.css']
})
export class TaskSiderBarComponent implements OnInit {

  @Input() sideBarList: Array<String>;
  @Input() userName: string;
  @Input() sideBarType: string;

  users = new UserDet;
  
  constructor(private route: Router,
    private taskService: TaskBasicAuthService) {
    this.users = taskService.getUserDetails();
    console.log(this.users);
  }

  ngOnInit(): void {
    document.getElementById('sidebarCollapse').addEventListener('click', function () {
      document.getElementById('sidebar').classList.toggle('active');
      this.classList.toggle('active');
  });
  }

  gotoRespectiveModule(value: string){
    value = value.toLocaleLowerCase();
    this.route.navigate(
      [this.sideBarType, { outlets: { personaProfile: [value]} }]
      );
  }

}
