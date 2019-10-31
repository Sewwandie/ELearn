import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {HomeComponent} from './home'
import {RegistrationComponent} from './registration'


const routes: Routes =[
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index',                component: HomeComponent },
  {path:'Register', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
