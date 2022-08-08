import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { UserCreateFormComponent } from '../user-create/user-create-form.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  userForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  userList: Array<any> = [];
  regionId: any;
  branchId: any;
  loader: boolean = true;
  createAccess: boolean;
  updateAccess: boolean;
  deleteAccess: boolean;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private httpService: HttpService,
    private http: HttpClient, private baselineService: BaselineSurveyService, private toaster: ToastrService,
    private confirmationDialogService: ConfirmationDialogService, private sidebarService: SidebarService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();

    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
    }
    this.http.post(`${this.httpService.baseURL}user/getListOfAllRegions`, Dto).subscribe((res: any) => {
      this.regionList = res.responseObject;
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'User')?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/user']) : this.router.navigate(['/error']);

    this.createAccess = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 1)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.updateAccess = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 1)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteAccess = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 1)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }

  openCreateUser() {
    const dialogRef = this.dialog.open(UserCreateFormComponent, {
      width: '1000px',
      height: '550px',
      data: {
        createMode: true,
        regionList: this.regionList
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUserList(this.branchId, this.regionId);
    });
  }

  openEditUser(i) {
    const dialogRef = this.dialog.open(UserCreateFormComponent, {
      width: '1000px',
      height: '550px',
      data: {
        createMode: false,
        regionList: this.regionList,
        branchList: this.branchList,
        userData: this.userList[i]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUserList(this.branchId, this.regionId);
    });
  }

  createForm() {
    this.userForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
    });
  }
  get f() {
    return this.userForm.controls;
  }

  changeRegion(region) {
    this.regionId = this.regionList.find((reg) => reg.regionName == region)?.regionMasterId;
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
    this.branchId = this.branchList?.find(branch => branch.branchName == value)?.branchId;
    this.getUserList(this.branchId, this.regionId);
  }

  getUserList(branchId: any, regionId: any) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId,
      regionMasterId: regionId
    }
    this.loader = false;
    if (branchId != undefined || regionId != undefined) {
      this.http.post(`${this.httpService.baseURL}user/getListOfAllBranchAndRegionWiseUsers`, Dto).subscribe((res: any) => {
        this.userList = res.responseObject?.branchWiseUserList.concat(res.responseObject?.regionWiseUserList);
        console.log(this.userList);
        this.loader = true;
      }, error => {
        this.showError('Error');
        this.loader = true;
      })
    } else {
      this.loader = true;
    }

  }

  resetPasswords(i) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.userList[i].userId,
    }
    this.confirmationDialogService.confirm('', 'Do you want to reset password ?').then(() => {
      this.http.post(`${this.httpService.baseURL}user/resteUserLoginPassword`, Dto).subscribe((res) => {
        this.resetPwSuccess('Success');
      })
    }).catch(() => '');
  }

  deleteUser(i) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.userList[i].userId,
    }
    this.confirmationDialogService.confirm('', 'Do you want to delete ?').then(() => {
      this.http.post(`${this.httpService.baseURL}user/deleteUser`, Dto).subscribe((res: any) => {
        if (this.userList[i].activeHouseholdCount == 0 && this.userList[i].activeSsCount == 0) {
          this.showSuccess('Success');
          this.getUserList(this.branchId, this.regionId);
        } else {
          this.showError('User mapped with Household / SS')
        }
      })
    }).catch(() => '');
  }

  deactivateUser(i) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.userList[i].userId,
    }
    this.http.post(`${this.httpService.baseURL}user/deactivateUser`, Dto).subscribe((res: any) => {
      this.getUserList(this.branchId, this.regionId);
    });
  }

  activateUser(i) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.userList[i].userId,
    }
    this.http.post(`${this.httpService.baseURL}user/activateUser`, Dto).subscribe((res: any) => {
      this.getUserList(this.branchId, this.regionId);
    });
  }

  showSuccess(message) {
    this.toaster.success(message, 'User Deleted', {
      timeOut: 3000,
    });
  }

  resetPwSuccess(message) {
    this.toaster.success(message, 'Password Reset Successs', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
}
