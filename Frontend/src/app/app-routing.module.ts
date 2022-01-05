import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from '../app/service/AuthService';


//authguard to block routes when user not authenti

const routes: Routes = [
  { path: 'users', component: UserListComponent ,canActivate:[AuthGuardService] },
  { path: 'adduser', component: UserFormComponent ,canActivate:[AuthGuardService] },
  { path: 'edit/:userId', component: UserFormComponent ,canActivate:[AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
