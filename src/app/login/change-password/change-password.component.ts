import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/modules/core/http/http.service';
import { ValidationService } from 'src/app/modules/shared/services/validation.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  loading = false;
  submitted = false;
  show: boolean = false;
  loader: boolean = true;
  // formBuilder: any;

  constructor(public validationService: ValidationService, private fb: FormBuilder, private httpService: HttpService,
    private toaster: ToastrService, private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ChangePasswordComponent>) {
    dialogRef.disableClose = true;
  }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  get f() {
    return this.changePasswordForm.controls;
  }



  onSubmit() {
    this.submitted = true;
    let newPassword = this.changePasswordForm.get('newPassword').value;
    let confirmPassword = this.changePasswordForm.get('confirmPassword').value;



  }

  password() {
    this.show = !this.show;
  }

  showError(message) {
    this.toaster.error(message, 'Error in password reset', {
      timeOut: 4000,
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

  /* Close the dialog pop-up */
  closeDialog() {
    this.dialogRef.close();
  }
}
