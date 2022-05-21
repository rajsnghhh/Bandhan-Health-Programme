import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-block-setup-form',
  templateUrl: './block-setup-form.component.html',
  styleUrls: ['./block-setup-form.component.css']
})
export class BlockSetupFormComponent implements OnInit {
  blockForm: FormGroup;
  stateList: Array<any> = [];
  stateWiseDistrictList: Array<any> = [];


  constructor(private fb: FormBuilder, private http: HttpClient, private toaster: ToastrService,
    private httpService: HttpService, public validationService: ValidationService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<BlockSetupFormComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createForm();
    this.blockForm.get('district').enable();
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
    }
    this.http.post(`${this.httpService.baseURL}state/getListOfAllStates`, Dto).subscribe((res: any) => {
      this.stateList = res.responseObject.stateList;
    });

    if (this.data.editMode == false) {
      this.blockForm.get('state').enable();
      this.blockForm.get('district').enable();
    } else {
      this.blockForm.get('state').disable();
      this.blockForm.get('district').disable();
      this.changeState(this.data.blockInfo.stateMasterId);
      this.blockForm.patchValue({
        state: this.data.blockInfo.stateMasterId,
        district: this.data.blockInfo.districtMasterId,
        blockName: this.data.blockInfo.blockName,
        pinCode: this.data.blockInfo.pinCode,
      })
    }
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

  onSave() {
    this.blockForm.markAllAsTouched();
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      blockMasterId: this.data.editMode ? this.data.blockInfo.blockMasterId : "0",
      districtMasterId: this.blockForm.controls.district.value,
      blockName: this.validationService.camelize(this.blockForm.value.blockName.trim()),
      pinCode: this.blockForm.value.pinCode,
    }
    if (this.blockForm.valid) {
      this.http.post(`${this.httpService.baseURL}block/saveOrUpdate`, Dto).subscribe((res: any) => {
        if (res.status) {
          this.dialogRef.close();
          this.showSuccess('Block Created');
        } else {
          this.showError(res.message);
        }
      }, error => {
        this.dialogRef.close();
        this.showError('Error')
      });

    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  /* Show success message toaster */
  showSuccess(message) {
    this.toaster.success(message, 'Success', {
      timeOut: 3000,
    });
  }

  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
}
