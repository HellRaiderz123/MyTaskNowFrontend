import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-sider-bar',
  templateUrl: './task-sider-bar.component.html',
  styleUrls: ['./task-sider-bar.component.css']
})
export class TaskSiderBarComponent implements OnInit {

  @Input() sideBarList: Array<String>;
  @Input() userName: string;

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.sideBarList);
    console.log(this.userName);
  }

}
