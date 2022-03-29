import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-pw-view',
  templateUrl: './pw-view.component.html',
  styleUrls: ['./pw-view.component.css']
})
export class PwViewComponent implements OnInit {

  pwRegisterForm: FormGroup;

  constructor(private fb: FormBuilder, public validationService: ValidationService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PwViewComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.pwRegisterForm = this.fb.group({
      initialWeight: [''],
      lastMenstrualDate: [null],
      expectedDeliveryDate: [null],
      ancComplete: [null],
      anc1st: [null],
      anc2nd: [null],
      anc3rd: [null],
      anc4th: [null],
      pregnancyComplication: [''],
      beforeDeliveryWeight: [''],
      delivery: [''],
      miscarriage: [null],
      abortion: [null],
      actualDeliveryDate: [''],
      liveStill: [''],
      place: ['']
    });
  }
  get f() {
    return this.pwRegisterForm.controls;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
