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
  // loginForm: FormGroup;
  // show: boolean = false;
  // get f(): any {
  //   return this.loginForm.controls;
  // }

  // dataAccessDTO = {
  //   deviceType: "W",
  //   loginId: "BK000001",
  //   password: "1234"
  // }

  // constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  // ngOnInit(): void {
  //   this.loginForm = this.fb.group({
  //     username: [null, Validators.required],
  //     password: [null, Validators.required]
  //   });


  // }
  // password() {
  //   this.show = !this.show;
  // }

  // login() {
  //   console.log(this.f.username.value);

  //   this.http.post('http://192.168.153.56:6181/bhp/api/v1/user/login', this.dataAccessDTO).subscribe((res) => {
  //     console.log(res);
  //     this.router.navigate(['./Baseline-Survey/create']);
  //   })
  // }

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  show: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: LoginService,
    public validationService: ValidationService,
    private toaster: ToastrService
    // private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.accountService.userValue) {
      this.router.navigate(['/Baseline-Survey/create']);
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

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.login(("BK" + this.f.username.value), this.f.password.value)
      .pipe(first())
      .subscribe(
        (data: RootObject) => {
          console.log(data.message, 'loginData')
          if (data.message.indexOf("first") !== -1) {
            localStorage.clear();
            this.router.navigate(['/register']);
          } else {
            this.router.navigate(['/Baseline-Survey/create']);
            this.showSuccess('You are LogIn');
          }
        },
        error => {
          // this.alertService.error(error);
          this.accountService.logout();
          this.loading = false;
          this.showError('User Name & Password not Correct');
        });
  }

  password() {
    this.show = !this.show;
  }

  showError(message) {
    this.toaster.error(message, 'Error In LogIn', {
      timeOut: 3000,
    });
  }

  showSuccess(message) {
    this.toaster.success(message, 'WelCome', {
      timeOut: 3000,
    });
  }
}
