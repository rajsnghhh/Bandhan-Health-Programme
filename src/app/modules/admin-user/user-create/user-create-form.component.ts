import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent implements OnInit {
  userForm: FormGroup;


  selectMultiRegion: boolean;
  selectSingleRegion: boolean;
  selectSingleBranch: boolean;
  selectBaseBranch: Boolean;
  regionId: any;
  roleMasterId: any;
  currentBranchId: any;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  roleList: Array<any> = [];
  dropdownSettings: IDropdownSettings = {};
  region: Array<any> = [];
  branch: Array<any> = [];
  disableMultiRegion: boolean;
  // branchVillageMapId: any;

  constructor(@Optional() public dialogRef: MatDialogRef<UserCreateFormComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any, private toaster: ToastrService, private fb: FormBuilder,
    public validationService: ValidationService, private modalService: NgbModal, private httpService: HttpService,
    private http: HttpClient, private baselineService: BaselineSurveyService,
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data, 'Edit')
    this.createForm();
    this.regionList = this.data.regionList;

    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
    }
    this.http.post(`${this.httpService.baseURL}user/getListOfAllRoles`, Dto).subscribe((res: any) => {
      this.roleList = res.responseObject;
    });

    if (this.data.createMode) {
      this.userForm.reset();
      this.userForm.get('userRole').enable();
      this.disableMultiRegion = false;
      this.userForm.get('region').enable();
      this.userForm.get('branch').enable();
      this.userForm.get('baseBranch').enable();
    } else {
      if (this.data.userData.activeHouseholdCount == 0 && this.data.userData.activeSsCount == 0) {
        this.userForm.get('userRole').enable();
        this.disableMultiRegion = false;
        this.userForm.get('region').enable();
        this.userForm.get('branch').enable();
        this.userForm.get('baseBranch').enable();
      } else {
        this.userForm.get('userRole').disable();
        this.disableMultiRegion = true;
        this.userForm.get('region').disable();
        this.userForm.get('branch').disable();
        this.userForm.get('baseBranch').disable();
      }

      let Dto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        userId: this.data.userData.userId
      }
      this.http.post(`${this.httpService.baseURL}user/getUserDetails`, Dto).subscribe((res: any) => {
        // this.branchVillageMapId = res.responseObject.branchList[0].branchName;
        // this.branchList = this.data.branchList;
        this.changeRole(this.data.userData.roleShortName);
        this.changeRegion(res.responseObject.regionList[0]?.regionName);
        // this.changeBranch(res.responseObject.branchList[0]?.branchName);
        this.userForm.patchValue({
          userRole: res.responseObject.roleShortName,
          multiRegion: res.responseObject?.regionList,
          region: res.responseObject.regionList[0]?.regionName,
          branch: res.responseObject.branchList[0]?.branchName,
          baseBranch: res.responseObject?.currentBranchId,
          firstName: res.responseObject.userFirstName,
          middleName: res.responseObject.userMiddleName,
          lastName: res.responseObject.userLastName,
          loginId: res.responseObject.loginId,
          primaryMobile: res.responseObject.mobileNumber,
          secondaryMobile: res.responseObject.mobileNumberSecondary,
          primaryEmail: res.responseObject.email,
          secondaryEmail: res.responseObject.emailSecondary,
        });
        this.userForm.get('branch').patchValue(res.responseObject.branchList[0]?.branchName);
        // console.log(res.responseObject.branchList[0]?.branchName)
      });

    }

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'regionMasterId',
      textField: 'regionName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      itemsShowLimit: 3,
    };
  }


  createForm() {
    this.userForm = this.fb.group({
      userRole: [null, Validators.required],
      multiRegion: ['', Validators.required],
      region: [null, Validators.required],
      branch: [null, Validators.required],
      baseBranch: [''],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      middleName: ['', Validators.compose([Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.minLength(3)])],
      loginId: ['', Validators.required],
      primaryMobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      secondaryMobile: ['', Validators.compose([Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      primaryEmail: ['', [Validators.required, Validators.email]],
      secondaryEmail: ['', Validators.email],
    });
  }
  get f() {
    return this.userForm.controls;
  }

  changeRole(value) {
    this.roleMasterId = this.roleList.find(role => role.roleShortName == value)?.roleMasterId;
    if (value?.indexOf('HCO') != -1) {
      this.selectMultiRegion = false;
      this.selectSingleRegion = true;
      this.selectSingleBranch = true;
      this.selectBaseBranch = false;
      this.userForm.get('region').setValidators(Validators.required);
      this.userForm.get('branch').setValidators(Validators.required);
      this.userForm.get('multiRegion').clearAsyncValidators();
    } else if (value == 'AC') {
      this.selectMultiRegion = false;
      this.selectSingleRegion = true;
      this.selectSingleBranch = false;
      this.selectBaseBranch = true;
      this.userForm.get('region').setValidators(Validators.required);
      this.userForm.get('branch').clearAsyncValidators();
      this.userForm.get('multiRegion').clearAsyncValidators();
    } else {
      this.selectMultiRegion = true;
      this.selectSingleRegion = false;
      this.selectSingleBranch = false;
      this.selectBaseBranch = true;
      this.userForm.get('multiRegion').setValidators(Validators.required);
      this.userForm.get('branch').clearAsyncValidators();
      this.userForm.get('region').clearAsyncValidators();
    }
  }
  changeRegion(region) {
    this.regionId = this.regionList.find((reg) => reg.regionName == region)?.regionMasterId;
    this.region = [{ 'regionMasterId': this.regionId }]
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: this.regionId,
    };
    this.baselineService.listOfBranchesOfARegion(req).subscribe(
      (res) => {
        this.branchList = res?.responseObject;
      },
      (error) => {
        this.branchList = null;
      }
    );
    if (this.userForm.value.region == '') {
      this.branchList = [];
    }
  }
  changeBranch(value) {
    this.currentBranchId = this.branchList?.find(branch => branch.branchName == value)?.branchId;
    this.branch = [{ 'branchId': this.currentBranchId }]
  }

  changeBaseBranch(value) {
    this.currentBranchId = value;
  }

  onSave() {
    console.log(this.userForm);
    this.changeBranch(this.userForm.value.branch);
    this.userForm.markAllAsTouched();
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.data.createMode ? 0 : this.data.userData.userId,
      userFirstName: this.userForm.value.firstName,
      userMiddleName: this.userForm.value.middleName,
      userLastName: this.userForm.value.lastName,
      loginId: 'BK' + this.userForm.value.loginId,
      email: this.userForm.value.primaryEmail,
      emailSecondary: this.userForm.value.secondaryEmail,
      mobileNumber: this.userForm.value.primaryMobile,
      mobileNumberSecondary: this.userForm.value.secondaryMobile,
      currentBranchId: this.currentBranchId,
      roleShortName: this.userForm.value.userRole,
      roleMasterId: this.roleMasterId,
      branchList: (this.userForm.value.userRole?.indexOf('HCO') != -1) ?
        this.branch : null,
      regionList: (this.userForm.value.userRole?.indexOf('HCO') != -1 || this.userForm.value.userRole?.indexOf('AC') != -1) ?
        this.region : this.userForm.value.multiRegion
    }
    console.log(Dto);
    if (this.userForm.valid) {
      this.http.post(`${this.httpService.baseURL}user/saveOrUpdate`, Dto).subscribe((res: any) => {
        this.dialogRef.close();
        this.showSuccess('Success')
      });
    } else {
      this.showError('Error')
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  showSuccess(message) {
    this.toaster.success(message, 'New User Created', {
      timeOut: 3000,
    });
  }
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
}


