import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskLoginComponent } from './task-login/task-login.component';
import { TaskRouteGuardService } from './services/guard/task-route-guard.service';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskUserProfileComponent } from './task-user-profile/task-user-profile.component';
import { TaskUserProfileBodyComponent } from './task-user-profile-body/task-user-profile-body.component';
import { TaskErrorComponent } from './task-error/task-error.component';
import { BackendErrorComponent } from './backend-error/backend-error.component';
import { TaskDashboardDetailProjectComponent } from './task-dashboard-detail-project/task-dashboard-detail-project.component';

const routes: Routes = [
  {path: '', component: TaskHomeComponent },
  {path: 'login', component: TaskLoginComponent },
  {path: 'dashboard', component: TaskDashboardComponent , canActivate: [TaskRouteGuardService] },
  {path: 'profile', component: TaskUserProfileComponent, canActivate: [TaskRouteGuardService], children: [
    {path: 'personal details', component: TaskUserProfileBodyComponent, canActivate: [TaskRouteGuardService], outlet: 'personaProfile'}
  ] },
  {path: 'dashboard/detail-project', component: TaskDashboardDetailProjectComponent, canActivate: [TaskRouteGuardService]},
  {path: 'error', component: BackendErrorComponent},
  {path: '**', component: TaskErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
