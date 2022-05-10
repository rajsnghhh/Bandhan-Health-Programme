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
  blockMasterId: any;
  stateCode: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private toaster: ToastrService, private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<BranchSetupComponent>, public validationService: ValidationService,) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createForm();
    this.allDropdownValue();
    if (this.data.editMode == false) {
      this.branchForm.reset();
    } else {
      this.changeSubVertical(this.data.branchDetails.subverticalMasterId);

      // this.chnageANything(this.data.branchDetails.stateMasterId).then((res) => {
      //   this.changeDistrict(this.data.branchDetails.districtMasterId);
      // });


      let Dto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        stateId: this.data.branchDetails.stateMasterId
      }
      this.http.post(`${this.httpService.baseURL}district/getListOfDistrictAndBlock`, Dto).subscribe((res: any) => {
        this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
        this.blockList = this.stateWiseDistrictList.find(item => item.districtMasterId == this.data.branchDetails.districtMasterId)?.blockList;
      });

      this.branchForm.patchValue({
        region: this.data.regionMasterId,
        subVertical: this.data.branchDetails.subverticalMasterId,
        subVerticleProject: this.data.branchDetails.projectMasterId,
        state: this.data.branchDetails.stateMasterId,
        district: this.data.branchDetails.districtMasterId,
        block: this.data.branchDetails.blockMasterId,
        branchName: this.data.branchDetails.branchName,
        branchType: this.data.branchDetails.branchTypeMasterId,
        startDate: this.data.branchDetails.branchOpenDate,
        address: this.data.branchDetails.branchAddressLine,
        pincode: this.data.branchDetails.branchPincode,
        primaryMobile: this.data.branchDetails.branchPhonePrimary,
        primaryEmail: this.data.branchDetails.branchEmailPrimary,
        postOffice: this.data.branchDetails.branchPostOffice,
        policeStation: this.data.branchDetails.branchPoliceStation,
        branchLandmark: this.data.branchDetails.branchlandMark,
        secondaryMobile: this.data.branchDetails.branchPhoneSecondary,
        secondaryEmail: this.data.branchDetails.branchEmailSecondary,
      });
      this.branchForm.markAllAsTouched();
    }
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

  // chnageANything(value): Promise<any> {
  //   let stateId = value;

  //   let Dto = {
  //     dataAccessDTO: this.httpService.dataAccessDTO,
  //     stateId: stateId
  //   }
  //   return new Promise((resolve, reject) => {
  //     this.http.post(`${this.httpService.baseURL}district/getListOfDistrictAndBlock`, Dto).subscribe((res: any) => {
  //       this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
  //       resolve(res.responseObject);
  //     });
  //   })
  // }
  changeState(value) {
    let stateId = value;
    this.stateCode = this.stateList.find(x => x.stateMasterId == value)?.stateCode;
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
      primaryContactName: [''],
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
      branchId: this.data.editMode == false ? "0" : this.data.branchDetails.branchId,
      regionMasterId: this.branchForm.value.region,
      projectMasterId: this.branchForm.value.subVerticleProject,
      stateCode: this.stateCode,
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
