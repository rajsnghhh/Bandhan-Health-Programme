import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-gp-setup-form',
  templateUrl: './gp-setup-form.component.html',
  styleUrls: ['./gp-setup-form.component.css']
})
export class GpSetupFormComponent implements OnInit {
  gpForm: UntypedFormGroup;
  stateList: Array<any> = [];
  stateWiseDistrictList: Array<any> = [];
  blockList: Array<any> = [];

  constructor(private fb: UntypedFormBuilder, private http: HttpClient, private toaster: ToastrService,
    private httpService: HttpService, public validationService: ValidationService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<GpSetupFormComponent>) {
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

    if (this.data.editMode) {
      let Dto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        stateId: this.data.gpMunicipalityDetails.stateMasterId
      }
      this.http.post(`${this.httpService.baseURL}district/getListOfDistrictAndBlock`, Dto).subscribe((res: any) => {
        this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
        this.blockList = this.stateWiseDistrictList.find(item => item.districtMasterId == this.data.gpMunicipalityDetails.districtMasterId)?.blockList;
      });
      this.gpForm.patchValue({
        state: this.data.gpMunicipalityDetails.stateMasterId,
        district: this.data.gpMunicipalityDetails.districtMasterId,
        block: this.data.gpMunicipalityDetails.blockMasterId,
        gpName: this.data.gpMunicipalityDetails.gpMunicipalityName,
        type: this.data.gpMunicipalityDetails.gpMunicipalityType,
      })
    }
  }

  createForm() {
    this.gpForm = this.fb.group({
      state: ['', Validators.required],
      district: ['', Validators.required],
      block: ['', Validators.required],
      gpName: ['', Validators.required],
      type: ['', Validators.required],
    });
  }
  get f() {
    return this.gpForm.controls;
  }

  changeState(value) {
    let stateId = value;
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: stateId
    }
    this.http.post(`${this.httpService.baseURL}district/getListOfDistrictAndBlock`, Dto).subscribe((res: any) => {
      this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
    });
    if (!this.gpForm.value.state) {
      this.blockList = [];
    }
  }

  changeDistrict(value) {
    this.blockList = this.stateWiseDistrictList.find(item => item.districtMasterId == value)?.blockList;
    this.gpForm.controls.block.setValue('');
    if (!this.gpForm.value.district) {
    }
  }

  onSave() {
    this.gpForm.markAllAsTouched();
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      gpMunicipalityId: this.data.editMode ? this.data.gpMunicipalityDetails.gpMunicipalityId : "0",
      gpMunicipalityType: this.gpForm.value.type,
      blockMasterId: this.gpForm.value.block,
      gpMunicipalityName: this.validationService.camelize(this.gpForm.value.gpName.trim()),
    }
    if (this.gpForm.valid) {
      this.http.post(`${this.httpService.baseURL}gpmunicipality/saveOrUpdate`, Dto).subscribe((res: any) => {
        if (res.status) {
          this.dialogRef.close();
          this.showSuccess('GP / Municipality Created');
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
