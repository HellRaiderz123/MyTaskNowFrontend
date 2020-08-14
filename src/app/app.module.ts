import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskFooterComponent } from './task-footer/task-footer.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskLoginComponent } from './task-login/task-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskHeaderComponent,
    TaskFooterComponent,
    TaskHomeComponent,
    TaskLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
