import { Component, OnInit } from '@angular/core';
import {UserService} from '../services'

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  stds:any[];
  admins:any[];
  modrs:any[];
  corses:any[];
  quizes:any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadAdmins();
    this.loadmodrs();
    this.loadstds();
    this.loadquizs();
    this.loadcorses();
  }

  private loadstds() {
    this.userService.getAllstds()
          .subscribe(data => this.stds = data);
    
  }
  private loadAdmins() {
    this.userService.getAllAdmins()
          .subscribe(data => this.admins = data);
    
  }
  private loadmodrs() {
    this.userService.getAllmodrs()
          .subscribe(data => this.modrs = data);
    
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
