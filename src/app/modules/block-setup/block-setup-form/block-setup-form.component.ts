import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-block-setup-form',
  templateUrl: './block-setup-form.component.html',
  styleUrls: ['./block-setup-form.component.css']
})
export class BlockSetupFormComponent implements OnInit {
  blockForm: FormGroup;
  stateList: Array<any> = [];
  stateWiseDistrictList: Array<any> = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private toaster: ToastrService, private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<BlockSetupFormComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createForm();
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
    }
    this.http.post(`${this.httpService.baseURL}state/getListOfAllStates`, Dto).subscribe((res: any) => {
      this.stateList = res.responseObject.stateList;
    });
  }

  createForm() {
    this.blockForm = this.fb.group({
      state: ['', Validators.required],
      district: ['', Validators.required],
      blockName: ['', Validators.required],
      pinCode: ['', Validators.required],
    });
  }
  get f() {
    return this.blockForm.controls;
  }

  changeState(value) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: value
    }
    this.http.post(`${this.httpService.baseURL}district/getListOfDistrictAndBlock`, Dto).subscribe((res: any) => {
      this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
    });
  }
  changeDistrict(value) {

  }

  onSave() { }

  closeDialog() {
    this.dialogRef.close();
  }
}
