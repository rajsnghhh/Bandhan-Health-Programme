import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { BranchSetupComponent } from '../branch-setup/branch-setup.component';
import { RegionSetupComponent } from '../region-setup/region-setup.component';

@Component({
  selector: 'app-region-branch-home',
  templateUrl: './region-branch-home.component.html',
  styleUrls: ['./region-branch-home.component.css']
})
export class RegionBranchHomeComponent implements OnInit {
  stateSelectForm: FormGroup;
  stateList: Array<any> = [];
  regionAndBranchList: Array<any> = [];
  stateMasterId: any;
  loader: boolean = true;
  createAccess: boolean;
  updateAccess: boolean;
  deleteAccess: boolean;

  constructor(private fb: FormBuilder, private httpService: HttpService, private http: HttpClient,
    private baselineService: BaselineSurveyService, private toaster: ToastrService,
    private confirmationDialogService: ConfirmationDialogService, public dialog: MatDialog,
    private sidebarService: SidebarService,) { }

  ngOnInit(): void {
    this.createForm();

    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
    }
    this.http.post(`${this.httpService.baseURL}state/getListOfAllStates`, Dto).subscribe((res: any) => {
      this.stateList = res.responseObject.stateList;
      this.stateMasterId = res.responseObject.stateList[0].stateMasterId;
      this.stateSelectForm.get('state').patchValue(this.stateMasterId);
      this.getRegionAndBranchList(this.stateMasterId);
    });

    this.createAccess = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 29)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.updateAccess = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 29)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteAccess = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 29)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;

  }

  openCreateRegion() {
    const dialogRef = this.dialog.open(RegionSetupComponent, {
      width: '500px',
      height: '280px',
      data: { editMode: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getRegionAndBranchList(this.stateMasterId);
    });
  }

  openCreateBranch() {
    const dialogRef = this.dialog.open(BranchSetupComponent, {
      width: '95vw',
      maxWidth: '100vw',
      data: { editMode: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getRegionAndBranchList(this.stateMasterId);
    });
  }

  openEditRegion(regionMasterId, regionName) {
    const dialogRef = this.dialog.open(RegionSetupComponent, {
      width: '500px',
      height: '280px',
      data: { editMode: true, regionId: regionMasterId, regionName: regionName }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getRegionAndBranchList(this.stateMasterId);
    });
  }

  openEditBranch(regionMasterId, branch) {
    const dialogRef = this.dialog.open(BranchSetupComponent, {
      width: '95vw',
      maxWidth: '100vw',
      data: { editMode: true, regionMasterId: regionMasterId, branchDetails: branch }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getRegionAndBranchList(this.stateMasterId);
    });
  }

  createForm() {
    this.stateSelectForm = this.fb.group({
      state: [''],
    });
  }
  get f() {
    return this.stateSelectForm.controls;
  }

  changeState(value) {
    this.stateMasterId = value;
    this.getRegionAndBranchList(this.stateMasterId);
  }

  getRegionAndBranchList(stateMasterId) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateMasterId: stateMasterId
    }
    this.loader = false;
    this.http.post(`${this.httpService.baseURL}region/getStateWiseRegionAndBranchList`, Dto).subscribe((res: any) => {
      this.regionAndBranchList = res.responseObject.regionbranchlist;
      this.loader = true;
    }, error => {
      this.showError('Error');
      this.loader = true;
    });
  }

  deleteRegion(regionMasterId, regionName) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionMasterId: regionMasterId,
    }
    if (this.regionAndBranchList.find(x => x.regionMasterId == regionMasterId)?.branchList.length != 0) {
      this.showError('Delete all branch');
    } else {
      this.confirmationDialogService.confirm('', `Do you want to delete ${regionName} ?`).then(() => {
        this.http.post(`${this.httpService.baseURL}region/deleteRegion`, Dto).subscribe((res) => {
          this.showSuccess('Success');
          this.getRegionAndBranchList(this.stateMasterId);
        })
      }).catch(() => '');
    }

  }

  deleteBranch(branchId, branchName) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId,
    }
    this.confirmationDialogService.confirm('', `Do you want to delete ${branchName} ?`).then(() => {
      this.http.post(`${this.httpService.baseURL}branch/deleteBranch`, Dto).subscribe((res: any) => {
        if (res.status == true) {
          this.showSuccess(res.message);
          this.getRegionAndBranchList(this.stateMasterId);
        } else {
          this.showError(res.message)
        }
      })
    }).catch(() => '');
  }

  showSuccess(message) {
    this.toaster.success(message, 'Deleted', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
}
