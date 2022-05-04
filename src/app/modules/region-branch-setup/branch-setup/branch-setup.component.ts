import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-branch-setup',
  templateUrl: './branch-setup.component.html',
  styleUrls: ['./branch-setup.component.css']
})
export class BranchSetupComponent implements OnInit {
  branchForm: FormGroup;
  regionList: Array<any> = [];
  subVerticalsList: Array<any> = [];
  subVerticleProjectList: Array<any> = [];
  branchTypeList: Array<any> = [];
  stateList: Array<any> = [];
  stateWiseDistrictList: Array<any> = [];
  blockList: Array<any> = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private toaster: ToastrService, private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<BranchSetupComponent>, public validationService: ValidationService,) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createForm();
    this.allDropdownValue();

  }

  allDropdownValue() {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
    }
    this.http.post(`${this.httpService.baseURL}user/getListOfAllRegions`, Dto).subscribe((res: any) => {
      this.regionList = res.responseObject;
    });
    this.http.post(`${this.httpService.baseURL}subvertical/getListOfAllSubVerticals`, Dto).subscribe((res: any) => {
      this.subVerticalsList = res.responseObject.subVerticalList;
    });

    this.http.post(`${this.httpService.baseURL}branch/getListOfALLBranchTypes`, Dto).subscribe((res: any) => {
      this.branchTypeList = res.responseObject.branchTypeList;
    });

    this.http.post(`${this.httpService.baseURL}state/getListOfAllStates`, Dto).subscribe((res: any) => {
      this.stateList = res.responseObject.stateList;
    });
  }

  changeSubVertical(value) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      subVerticalMasterId: value
    }
    this.http.post(`${this.httpService.baseURL}subvertical/getSubVerticalWiseListOfAllProjects`, Dto).subscribe((res: any) => {
      this.subVerticleProjectList = res.responseObject.projectList;
    });
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
  }

  changeDistrict(value) {
    this.blockList = this.stateWiseDistrictList.find(item => item.districtMasterId == value)?.blockList;
  }

  createForm() {
    this.branchForm = this.fb.group({
      region: ['', Validators.required],
      subVertical: ['', Validators.required],
      subVerticleProject: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      block: ['', Validators.required],
      branchName: ['', Validators.required],
      branchType: ['', Validators.required],
      startDate: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required],
      primaryContactName: ['', Validators.required],
      primaryMobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      primaryEmail: ['', [Validators.required, Validators.email]],
      postOffice: [''],
      policeStation: [''],
      branchLandmark: [''],
      secondaryContactName: [''],
      secondaryMobile: ['', Validators.compose([Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      secondaryEmail: ['', Validators.email],
    });
  }
  get f() {
    return this.branchForm.controls;
  }

  onSave() {
    console.log(this.branchForm)
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: "0",
      regionMasterId: this.branchForm.value.region,
      projectMasterId: this.branchForm.value.subVerticleProject,
      blockMasterId: this.branchForm.value.block,
      branchName: this.branchForm.value.branchName,
      branchTypeMasterId: this.branchForm.value.branchType,
      branchPincode: this.branchForm.value.pincode,
      branchActiveFlag: "Y",
      branchOpenDate: this.branchForm.value.startDate,
      branchAddressLine: this.branchForm.value.address,
      branchPostOffice: this.branchForm.value.postOffice,
      branchPoliceStation: this.branchForm.value.policeStation,
      branchlandMark: this.branchForm.value.branchLandmark,
      branchPhonePrimary: this.branchForm.value.primaryMobile,
      branchEmailPrimary: this.branchForm.value.primaryEmail,
      branchPhoneSecondary: this.branchForm.value.secondaryMobile,
      branchEmailSecondary: this.branchForm.value.secondaryEmail
    }
    if (this.branchForm.valid) {
      this.http.post(`${this.httpService.baseURL}branch/saveOrUpdate`, Dto).subscribe((res: any) => {
        console.log(res);
        if (res.status) {
          this.dialogRef.close();
          this.showSuccess('Branch Created');
        } else {
          this.showError(res.message);
        }
      });
    }

  }


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

  closeDialog() {
    this.dialogRef.close();
  }
}
