import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { SsUnmapService } from './ss-unmap.service';

@Component({
  selector: 'app-ss-unmap',
  templateUrl: './ss-unmap.component.html',
  styleUrls: ['./ss-unmap.component.css']
})
export class SsUnmapComponent implements OnInit {
  ssUnmapForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  hcouserList: Array<any> = [];
  ssList: Array<any> = [];
  page = 1;
  pageSize = 5;
  p: any;
  branchId: any;
  searchText: any;
  searchFullscreen: boolean;
  userList: Array<any> = [];
  hcoUserNameFilter: any;

  constructor(private fb: FormBuilder, private httpService: HttpService, private ssUnmapService: SsUnmapService,
    private confirmationDialogService: ConfirmationDialogService, private toaster: ToastrService,
    public validationService: ValidationService, private sidebarService: SidebarService, private router: Router) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {

    this.createForm();

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.ssUnmapService.listOfRegionsOfUser(obj).subscribe((res) => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'Unmap SS from User and All HH')?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? this.router.navigate(['/ss-unmap']) : this.router.navigate(['/error']);
  }

  changeRegion(regionId) {
    console.log(regionId);

    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };
    this.ssUnmapService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');

    }, (error) => {
      this.branchList = null;
    }
    );
    this.ssUnmapForm.controls.branch.setValue('')
    this.ssList = [];
    if (this.ssUnmapForm.value.region == '') {
      this.ssUnmapForm.controls.branch.setValue('');
      this.ssList = [];
    }
  }

  changeBranch(branchId) {

    console.log(branchId);
    this.branchId = branchId;

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
    this.ssUnmapService.listOfswasthyasahayika(obj).subscribe((res) => {
      this.ssList = res.responseObject?.ssDtoList;
      console.log(this.ssList);
    });

    this.ssList = [];
    if (this.ssUnmapForm.value.branch == '') {
      this.ssList = [];
    }

    let obj2 = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId
    }
    this.ssUnmapService.hcoListOfBranch(obj2).subscribe((res) => {
      this.userList = res.responseObject;
      console.log(this.userList, 'this.userList');

    });

  }

  createForm() {
    this.ssUnmapForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      hcouser: ['', Validators.required]

    });
  }

  get f() {
    return this.ssUnmapForm.controls;
  }

  unmapSS(e, ssId, i) {
    console.log(ssId, e.target.value, e.target.checked);

    this.confirmationDialogService.confirm('', 'Are you sure you want to unmap SS from all mapped Household and User')
      .then(() => this.unmap(ssId, i)
      )
      .catch(() => e.target.checked = false);

  }


  unmap(ssId, i) {
    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, ssId: ssId };
    console.log(obj);

    this.ssUnmapService.unmapSsFromAllMappedHhAndUser(obj).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        let obj = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId };
        this.ssUnmapService.listOfswasthyasahayika(obj).subscribe((res) => {
          this.ssList = res.responseObject?.ssDtoList;
          console.log(this.ssList);
        });

      };
    });

  }

  hcoUserWiseViewList(hcoUser) {
    console.log(hcoUser);

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId };
    this.ssUnmapService.listOfswasthyasahayika(obj).subscribe((res) => {
      this.ssList = res.responseObject?.ssDtoList;
      console.log(this.ssList);
      this.callSSfilter(hcoUser);
    });

  }

  callSSfilter(hcoUser) {
    console.log(hcoUser);

    if (hcoUser == 'NA') {
      this.ssList = this.ssList?.filter(item => item.userDto === null);
      console.log(this.ssList);
    } else if (hcoUser == '') {
      this.ssList = this.ssList;
    } else {
      this.ssList = this.ssList?.filter(item => item.userDto?.userId == hcoUser);
      console.log(this.ssList);
    }

  }

  showSuccess(message) {
    this.toaster.success(message, 'Unmap SS', {
      timeOut: 10000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Unmap SS', {
      timeOut: 5000,
    });
  }

}
