import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserCreateFormComponent } from '../user-create/user-create-form.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  userForm: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.createForm();
  }

  openCreateUser() {
    const dialogRef = this.dialog.open(UserCreateFormComponent, {
      width: '1000px',
      height: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  createForm() {
    this.userForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
    });
  }
  get f() {
    return this.userForm.controls;
  }
}
