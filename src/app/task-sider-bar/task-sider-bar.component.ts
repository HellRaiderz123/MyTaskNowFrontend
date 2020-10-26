import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-sider-bar',
  templateUrl: './task-sider-bar.component.html',
  styleUrls: ['./task-sider-bar.component.css']
})
export class TaskSiderBarComponent implements OnInit {

  @Input() sideBarList: Array<String>;
  @Input() userName: string;
  @Input() sideBarType: string;

  constructor(private route: Router) { 
  }

  ngOnInit(): void {
  }

  gotoRespectiveModule(value: string){
    value = value.toLocaleLowerCase();
    this.route.navigate(
      [this.sideBarType, { outlets: { personaProfile: [value]} }]
      );
  }

}
