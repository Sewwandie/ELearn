import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private authenticationService:AuthenticationService
  ) { }

    canActivate(): boolean{
      const currentUser = this.authenticationService.currentUserValue;
      if(currentUser){
        return true;
      }
      this.router.navigate(['/index']);
      return false;
    }



}
