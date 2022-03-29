import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pw-status',
  templateUrl: './pw-status.component.html',
  styleUrls: ['./pw-status.component.css']
})
export class PwStatusComponent implements OnInit {

  pwStatusForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PwStatusComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.pwStatusForm = this.fb.group({
      pregnantStatus: ['N'],
    });
  }

  onSave() {

  }

  closeDialog() {
    this.dialogRef.close();
  }
}
