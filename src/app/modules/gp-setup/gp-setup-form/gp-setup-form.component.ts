import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-gp-setup-form',
  templateUrl: './gp-setup-form.component.html',
  styleUrls: ['./gp-setup-form.component.css']
})
export class GpSetupFormComponent implements OnInit {
  blockForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private toaster: ToastrService, private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<GpSetupFormComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.blockForm = this.fb.group({
      state: ['', Validators.required],
      district: ['', Validators.required],
      block: ['', Validators.required],
      gpName: ['', Validators.required],
      type: ['', Validators.required],
    });
  }
  get f() {
    return this.blockForm.controls;
  }

  changeState(value) {

  }
  changeDistrict(value) {

  }

  onSave() { }

  closeDialog() {
    this.dialogRef.close();
  }

}
