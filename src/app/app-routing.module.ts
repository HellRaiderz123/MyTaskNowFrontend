import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskLoginComponent } from './task-login/task-login.component';

const routes: Routes = [
  {path: '', component: TaskHomeComponent},
  {path: 'login', component: TaskLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
