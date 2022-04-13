import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserCreateFormComponent } from '../user-create/user-create-form.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
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
}
