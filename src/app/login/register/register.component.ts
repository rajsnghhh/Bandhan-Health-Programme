import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { ValidationService } from 'src/app/modules/shared/services/validation.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  show: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: LoginService,
    private toaster: ToastrService,
    public validationService: ValidationService,
    // private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.accountService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.register(this.f.newPassword.value)
      .pipe(first())
      .subscribe(
        (data) => {
          // console.log(data, 'registerData');
          //  if(data.status === true){
          //  this.showSuccess('success');
          //   this.router.navigate(['/'], { relativeTo: this.route });
          //  }else{
          //   this.showError('error');
          //  }
          // this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['/'], { relativeTo: this.route });
        },
        error => {
          console.log('error reset')
          // this.alertService.error(error);
          this.loading = false;
        });
  }

  password() {
    this.show = !this.show;
  }

  showError(message) {
    this.toaster.error(message, 'Error In password reset', {
      timeOut: 3000,
    });
  }

  showSuccess(message) {
    this.toaster.success(message, 'Password reset', {
      timeOut: 3000,
    });
  }

}
