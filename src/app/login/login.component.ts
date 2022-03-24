import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { ValidationService } from '../modules/shared/services/validation.service';
import { LoginService } from './login.service';
import { RootObject } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  show: boolean = false;
  loader: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: LoginService,
    public validationService: ValidationService,
    private toaster: ToastrService
  ) {
    // redirect to home if already logged in
    if (this.accountService.userValue) {
      this.router.navigate(['/core']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loader = false;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.loader = true;
      return;
    }
    this.loading = false;

    setTimeout(() => {
      this.accountService.login(("BK" + this.f.username.value).trim(), this.f.password.value)
        .pipe(first())
        .subscribe(
          (data: RootObject) => {
            console.log("menudata", data)
            console.log(data.message, 'loginData')
            if (data.message.indexOf("first") !== -1) {
              this.accountService.logout();
              this.accountService.userFirstTime = data;
              this.router.navigate(['/reset']);
            } else {
              this.router.navigate(['/core']);
              this.showSuccess('Login Successful');
            }
            this.loader = true;
          },
          error => {
            this.loader = true;
            this.accountService.logout();
            this.loading = false;
            this.showError('Please Enter Valid credentials');
          });
    }, 2000);

  }

  password() {
    this.show = !this.show;
  }

  showError(message) {
    this.toaster.error(message, 'Login Failed', {
      timeOut: 3000,
    });
  }

  showSuccess(message) {
    this.toaster.success(message, 'Welcome', {
      timeOut: 1000,
    });
  }
}
