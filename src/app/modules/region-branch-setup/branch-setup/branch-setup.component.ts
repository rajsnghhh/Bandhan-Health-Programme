import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-branch-setup',
  templateUrl: './branch-setup.component.html',
  styleUrls: ['./branch-setup.component.css']
})
export class BranchSetupComponent implements OnInit {
  branchForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private toaster: ToastrService, private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<BranchSetupComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.branchForm = this.fb.group({
      region: ['', Validators.required],
      subVertical: ['', Validators.required],
      selectedSubVerticle: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      selectedDistrict: ['', Validators.required],
      branchName: ['', Validators.required],
      branchType: ['', Validators.required],
      startDate: ['', Validators.required],
      address: ['', Validators.required],
      primaryContactName: ['', Validators.required],
      primaryMobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      primaryEmail: ['', [Validators.required, Validators.email]],
      postOffice: ['', Validators.required],
      policeStation: ['', Validators.required],
      branchLandmark: ['', Validators.required],
      secondaryContactName: ['', Validators.required],
      secondaryMobile: ['', Validators.compose([Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      secondaryEmail: ['', Validators.email],
    });
  }
  get f() {
    return this.branchForm.controls;
  }

  onSave() {

  }

  closeDialog() {
    this.dialogRef.close();
  }
}
