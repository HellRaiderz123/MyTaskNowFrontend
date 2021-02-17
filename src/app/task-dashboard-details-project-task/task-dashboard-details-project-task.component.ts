import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-dashboard-details-project-task',
  templateUrl: './task-dashboard-details-project-task.component.html',
  styleUrls: ['./task-dashboard-details-project-task.component.css']
})
export class TaskDashboardDetailsProjectTaskComponent implements OnInit {

  @Input() projectPhase: string;

  projectDetailList = [];

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.projectPhase==='A&D') {
      this.projectDetailList = [
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
      } else {
    
        this.projectDetailList = [
        {"task": "Dashboad", "sub-task":
          [
            {"name":"Home Widgets", "collaborators":["Tarun","Ram"], "detail":"Home Widgets Analysis"},
            {"name":"Capacity Widgtes", "collaborators":["Tarun","Shyan"], "detail":"Capacity Widgets Analysis"},
            {"name":"Balancing Widgets", "collaborators":["Mohan","Ram"], "detail":"Balancing Widgets Analysis"}
          ]
        },
        {"task": "Auction Automation", "sub-task":
          [
            {"name":"Gemini Acution Letter", "collaborators":["Tarun","Ram"], "detail":"Gemini Auction Letter Screens"},
            {"name":"Exit Acution Letter", "collaborators":["Tarun","Ram"], "detail":"Exit Acution Letter Screens"}
          ]
        },
        {"task": "Dashboad Analysis", "sub-task":
          [
            {"name":"Home Dashboard Analysis", "collaborators":["Tarun","Ram"], "detail":"Home Widgets Analysis"}
          ]
        }
      ];
      }
  }

}
