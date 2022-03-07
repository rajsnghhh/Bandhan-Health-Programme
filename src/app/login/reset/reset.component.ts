import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { ValidationService } from 'src/app/modules/shared/services/validation.service';
import { LoginService } from '../login.service';
import { Reset } from '../user';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  show: boolean = false;
  loader: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: LoginService,
    private toaster: ToastrService,
    public validationService: ValidationService,
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
    let newPassword = this.form.get('newPassword').value;
    let confirmPassword = this.form.get('confirmPassword').value;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    setTimeout(() => {
      if (newPassword == confirmPassword) {
        this.accountService.reset(this.f.newPassword.value)
          .pipe(first())
          .subscribe(
            (data: Reset) => {
              console.log(data, 'resetData');
              if ((data.status === true)) {
                this.showSuccess('Success');
                this.router.navigate(['/'], { relativeTo: this.route });
              }
              this.loader = true;
            },
            error => {
              this.loader = true;
              this.showError('Error');
              this.loading = false;
            });
      } else {
        this.loading = false;
        this.checkBothPasswordSame('Error');
      }
    }, 1000);

  }

  password() {
    this.show = !this.show;
  }

  showError(message) {
    this.toaster.error(message, 'Error in password reset', {
      timeOut: 3000,
    });
  }

  showSuccess(message) {
    this.toaster.success(message, 'Password reset successful', {
      timeOut: 3000,
    });
  }

  checkBothPasswordSame(message) {
    this.toaster.error(message, 'New Password & Confirm Password does not match ', {
      timeOut: 3000,
    });
  }

}
