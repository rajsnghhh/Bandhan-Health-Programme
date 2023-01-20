import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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
  changePasswordForm: UntypedFormGroup;
  loading = false;
  showOldPassword: boolean = false;
  showNewPassword: boolean = false;

  constructor(public validationService: ValidationService, private fb: UntypedFormBuilder, private httpService: HttpService,
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
    let Dto = {
      userId: this.data?.userId,
      inputPassword: this.changePasswordForm.value.oldPassword,
      newPassword: this.changePasswordForm.value.newPassword
    }
    if (this.changePasswordForm.value.newPassword == this.changePasswordForm.value.confirmPassword) {
      this.http.post(`${this.httpService.baseURL}user/changePassword`, Dto)
        .subscribe((res: any) => {
          if (res.status) {
            this.showSuccess('Success');
            this.dialogRef.close();
          } else {
            this.showError(res.message);
          }
        },
          error => {
            this.showError('Error');
            this.dialogRef.close();
          });
    } else {
      this.checkBothPasswordSame('Error');
    }
  }

  showHideOldPassword() {
    this.showOldPassword = !this.showOldPassword;
  }

  showHideNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }

  showError(message) {
    this.toaster.error(message, 'Error in password change', {
      timeOut: 4000,
    });
  }

  showSuccess(message) {
    this.toaster.success(message, 'Password change successful', {
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
