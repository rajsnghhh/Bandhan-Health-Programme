import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(@Optional() public dialogRef: MatDialogRef<UserCreateFormComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any, private toaster: ToastrService, private fb: FormBuilder,
    public validationService: ValidationService,
  ) { dialogRef.disableClose = true; }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.userForm = this.fb.group({
      userRole: ['', Validators.required],
      region: ['', Validators.required],
      branch: ['', Validators.required],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      middleName: ['', Validators.compose([Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.minLength(3)])],
      loginId: ['', Validators.required],
      primaryMobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      secondaryMobile: ['', Validators.compose([Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      primaryEmail: ['', Validators.required],
      secondaryEmail: [''],
    });
  }
  get f() {
    return this.userForm.controls;
  }

  changeRole(value) {

  }

  onSave() {

  }

  closeDialog() {
    this.dialogRef.close();
  }

  showSuccess(message) {
    this.toaster.success(message, 'Child MUAC Save', {
      timeOut: 3000,
    });
  }
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
}


