import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';

const myRoutes : Routes=[

  {
    path:"",component:AdminLoginComponent
  },
  {
    path:"userlogin",component:UserLoginComponent
  },
  {
    path:"register",component:RegistrationComponent
  },
  {
    path:"dashboard",component:AdminDashboardComponent
  },
  {
    path:"viewprofile",component:ViewProfileComponent
  }


]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    RegistrationComponent,
    AdminDashboardComponent,
    ViewProfileComponent,
    UsernavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
