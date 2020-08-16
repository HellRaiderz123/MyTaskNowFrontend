import { Component, OnInit } from '@angular/core';
import { TaskBasicAuthService } from '../services/loginService/task-basic-auth.service';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent implements OnInit {

  constructor(public taskBasicAuthService: TaskBasicAuthService) { }

  ngOnInit(): void {
  }

}
