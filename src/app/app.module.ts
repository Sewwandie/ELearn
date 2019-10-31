import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

import { UserService, AuthenticationService, AuthGuardService } from './services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard';
import { AdminPortalComponent } from './admin-portal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    DashboardComponent,
    AdminPortalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,AuthenticationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
