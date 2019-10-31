import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {UserService} from '../services'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    data : Date = new Date();
    error:string;
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService) { }

    ngOnInit() {

        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z\s]*$')]],
            lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z\s]*$')]],
            gender: ['',Validators.required],
            contactNo: ['', [Validators.required]],
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    

    }
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            debugger
            return;
        }

        
        this.loading = true;
        /* this.alertService.success('Registration successful', true);
        this.router.navigate(['/index']); */
        

        this.userService.register(this.registerForm.value)
             .pipe(first())
             .subscribe(
                 data => {
                    this.router.navigate(['/index'], { queryParams: { registered: true }});
                 },
                 error => {
                     this.error=error.error.message;
                     console.log(error.message);
                     this.loading = false;
                 }); 

        
    }

    btnClick= function () {
        this.router.navigateByUrl('/index');
    };


}
