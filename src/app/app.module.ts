import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskFooterComponent } from './task-footer/task-footer.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskLoginComponent } from './task-login/task-login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskUserProfileComponent } from './task-user-profile/task-user-profile.component';
import { TaskUserProfileBodyComponent } from './task-user-profile-body/task-user-profile-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskSiderBarComponent } from './task-sider-bar/task-sider-bar.component';
import { TaskErrorComponent } from './task-error/task-error.component';
import { TaskDashProjectsComponent } from './task-dash-projects/task-dash-projects.component';
import { BackendErrorComponent } from './backend-error/backend-error.component';
import { TaskDashboardDetailProjectComponent } from './task-dashboard-detail-project/task-dashboard-detail-project.component';
import { TaskFavComponent } from './task-reusable-component/task-fav/task-fav.component';
import { TaskCircleProgressComponentComponent } from './task-reusable-component/task-circle-progress-component/task-circle-progress-component.component';
import { TaskDashboardDetailsProjectPhaseComponent } from './task-dashboard-details-project-phase/task-dashboard-details-project-phase.component';
import { TaskDashboardDetailsProjectTaskComponent } from './task-dashboard-details-project-task/task-dashboard-details-project-task.component';

const firebaseConfig = {
  apiKey: "AIzaSyD0dazNOvb6bMqSNn2Qz0B7cUdtxPRGGbg",
  authDomain: "mytasknowco-9d4d5.firebaseapp.com",
  projectId: "mytasknowco-9d4d5",
  storageBucket: "mytasknowco-9d4d5.appspot.com",
  messagingSenderId: "12894406298",
  appId: "1:12894406298:web:09eaa89676904767158123"
};

@NgModule({
  declarations: [
    AppComponent,
    TaskHeaderComponent,
    TaskFooterComponent,
    TaskHomeComponent,
    TaskLoginComponent,
    TaskDashboardComponent,
    TaskUserProfileComponent,
    TaskUserProfileBodyComponent,
    TaskSiderBarComponent,
    TaskErrorComponent,
    TaskDashProjectsComponent,
    BackendErrorComponent,
    TaskDashboardDetailProjectComponent,
    TaskFavComponent,
    TaskCircleProgressComponentComponent,
    TaskDashboardDetailsProjectPhaseComponent,
    TaskDashboardDetailsProjectTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      percent:100,
      titleFontSize:"0" ,
      showSubtitle:false ,
      showUnits:false,
      outerStrokeColor:"#707070" ,
      innerStrokeColor:"#D4D4D4" ,
      radius:20,
      backgroundPadding:7,
      outerStrokeWidth:5,
      space:-5,
      innerStrokeWidth:5,
      animation:true,
      animationDuration:1000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
