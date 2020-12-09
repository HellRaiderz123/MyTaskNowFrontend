import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-circle-progress-component',
  templateUrl: './task-circle-progress-component.component.html',
  styleUrls: ['./task-circle-progress-component.component.css']
})
export class TaskCircleProgressComponentComponent implements OnInit {

  @Input() showSpinner:String;
  @Input() duration: String;

  isShow:boolean;

  constructor() { }

  ngOnInit(): void {
    console.log("tarun in sponner " + this.showSpinner)
    if(this.showSpinner) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

}
