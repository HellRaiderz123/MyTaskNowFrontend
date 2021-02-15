import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-dashboard-details-project-task',
  templateUrl: './task-dashboard-details-project-task.component.html',
  styleUrls: ['./task-dashboard-details-project-task.component.css']
})
export class TaskDashboardDetailsProjectTaskComponent implements OnInit {

  projectDetailList = [
    {"task": "Dashboad Analysis", "sub-task":
      [
        {"name":"Home Dashboard Analysis", "collaborators":["Tarun","Ram"], "detail":"Home Widgets Analysis"},
        {"name":"Capacity Dashboard Analysis", "collaborators":["Tarun","Shyan"], "detail":"Capacity Widgets Analysis"},
        {"name":"Balancing Dashboard Analysis", "collaborators":["Mohan","Ram"], "detail":"Balancing Widgets Analysis"}
      ]
    },
    {"task": "Auction Automation", "sub-task":
      [
        {"name":"Auction Letter Analysis", "collaborators":["Tarun","Ram"], "detail":"Auction Letter Analysis"}
      ]
    },
    {"task": "Dashboad Analysis", "sub-task":
      [
        {"name":"Home Dashboard Analysis", "collaborators":["Tarun","Ram"], "detail":"Home Widgets Analysis"}
      ]
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
