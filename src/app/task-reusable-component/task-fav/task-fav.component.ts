import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-fav',
  templateUrl: './task-fav.component.html',
  styleUrls: ['./task-fav.component.css']
})
export class TaskFavComponent implements OnInit {

  @Input() isFav:string;

  myClass: String;

  constructor() { }

  ngOnInit(): void {
    console.log(" tArun checking isFav " + this.isFav);
    this.isFav==='true' ? this.myClass = "fas fa-star" : this.myClass = "far fa-star";
  }

  onClick() {
    if(this.isFav==='true') {
      this.myClass = "far fa-star";
      this.isFav = "false";
      //call service to change the isFav of that project id
    } else {
      this.myClass = "fas fa-star";
      this.isFav = "true";
    }
  }

}
