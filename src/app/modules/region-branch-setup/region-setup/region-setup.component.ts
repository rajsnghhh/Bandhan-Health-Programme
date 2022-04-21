import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-region-setup',
  templateUrl: './region-setup.component.html',
  styleUrls: ['./region-setup.component.css']
})
export class RegionSetupComponent implements OnInit {
  regionForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private toaster: ToastrService, private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<RegionSetupComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.regionForm = this.fb.group({
      region: ['', Validators.required],
    });
  }
  get f() {
    return this.regionForm.controls;
  }

  onSave() {

  }

  showSuccess(message) {
    this.toaster.success(message, 'Status Change', {
      timeOut: 3000,
    });
  }

  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
