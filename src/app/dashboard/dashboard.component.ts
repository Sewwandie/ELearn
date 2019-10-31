import { Component, OnInit } from '@angular/core';
import {AuthenticationService,UserService} from '../services';
import { Router,  } from '@angular/router';
import { User } from '../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stds:any[];
  corses:any[];
  quizes:any[];
  currentUser:User;

  constructor(private authenticationService :AuthenticationService,
    private router:Router,
    private userService:UserService
    ) {
      this.currentUser = this.authenticationService.currentUserValue;
     }

  ngOnInit() {
    this.loadstds();
    this.loadquizs();
    this.loadcorses();
    
  }

  btnClick= function () {
    this.authenticationService.logout();
    this.router.navigateByUrl('index');
};




private loadstds() {
  this.userService.getAllstds()
        .subscribe(data => this.stds = data);
  
}

private loadquizs() {
  this.userService.getAllQuizs()
        .subscribe(data => this.quizes = data);
  
}
private loadcorses() {
  this.userService.getAllcorses()
        .subscribe(data => this.corses = data);
  
}

}
