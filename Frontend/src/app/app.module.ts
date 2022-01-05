import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [AppComponent, UserListComponent, UserFormComponent, LoginComponent, LogoutComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, RouterModule, CommonModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
