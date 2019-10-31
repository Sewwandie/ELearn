import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {AuthenticationService} from '../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error:string;
    success:string;
    loged:boolean;


  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private authenticationService:AuthenticationService) { 
      if(this.authenticationService.currentUserValue){
        this.loged=true;
      }
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/index';
        if (this.route.snapshot.queryParams['registered']) {
            this.success = 'Registration successful';
        }

      }

  get f() { return this.loginForm.controls; }

      

  btnClick= function (){
          this.submitted = true;
          this.success=null;
          this.error=null;
  
          // stop here if form is invalid
          if (this.loginForm.invalid) {
              return;
          }
  
                 
  
          this.loading = true;
          this.authenticationService.login(this.f.username.value, this.f.password.value)
              .pipe(first())
              .subscribe(
                  data => {
                      this.router.navigate(['/index']);
                  },
                  error => {
                      this.error = error.error.message;
                      this.loading = false;
                  });    
      }
    





  

  

}
