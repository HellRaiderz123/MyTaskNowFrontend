import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';

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

export const firebaseConfig = {
  apiKey: "AIzaSyBV8gdT47Bqa-7e4tVejOcJLVal1wtsYF0",
  authDomain: "mytasknow-co.firebaseapp.com",
  databaseURL: "https://mytasknow-co.firebaseio.com",
  projectId: "mytasknow-co",
  storageBucket: "mytasknow-co.appspot.com",
  messagingSenderId: "755812530679",
  appId: "1:755812530679:web:7555d1250009a07746d6f2",
  measurementId: "G-SXPS1NGXCL"
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
    TaskUserProfileBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
