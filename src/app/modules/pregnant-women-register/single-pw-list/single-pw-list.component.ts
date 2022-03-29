import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PwViewComponent } from '../pw-view/pw-view.component';

@Component({
  selector: 'app-single-pw-list',
  templateUrl: './single-pw-list.component.html',
  styleUrls: ['./single-pw-list.component.css']
})
export class SinglePwListComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SinglePwListComponent>,
    public dialog: MatDialog,) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
  }

  openPwView() {
    const dialogRef = this.dialog.open(PwViewComponent, {
      width: '1000px',
      height: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
