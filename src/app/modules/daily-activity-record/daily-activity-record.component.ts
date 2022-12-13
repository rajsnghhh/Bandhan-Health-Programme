import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { DailyActivityRecordService } from './daily-activity-record.service';

@Component({
  selector: 'app-daily-activity-record',
  templateUrl: './daily-activity-record.component.html',
  styleUrls: ['./daily-activity-record.component.css']
})
export class DailyActivityRecordComponent implements OnInit {
  darForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  regionBranchHide: boolean;
  villagesOfBranch: Array<any> = [];
  darListByStaffID: Array<any> = [];
  darListByBranchID: Array<any> = [];
  darListByRegionID: Array<any> = [];
  roleAccess: any;
  lowerRankbranchId: any;
  minToDate: any;
  maxToDate: any;
  dateWiseStaffDarDetails: Array<any> = [];
  modalContent: any;
  modalReference: any;
  dateWiseStaffDarDetailsModal: any;

  constructor(private fb: FormBuilder, private sidebarService: SidebarService, private http: HttpClient,
    private httpService: HttpService, private dailyActRecord: DailyActivityRecordService,
    private toaster: ToastrService, private modalService: NgbModal, config: NgbModalConfig,) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    let roleAccessDTO = JSON.parse(localStorage.getItem('user'));
    this.roleAccess = roleAccessDTO.responseObject?.RoledetailDTO?.roleShortName
    console.log(this.roleAccess);
    this.darForms();

    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.lowerRankbranchId = res.branchId;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userName,
            userName: dataAccessDTO.userId,
          },
          branchId: this.lowerRankbranchId
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        });

        // let Dato = {
        //   dataAccessDTO: this.httpService.dataAccessDTO,
        //   branchId: res.branchId
        // }

        // this.dailyActRecord.HcoITLListOfBranch(Dato).subscribe((res: any) => {
        //   this.HcoITLList = res.responseObject;
        //   console.log(this.HcoITLList, 'HcoITLList');
        // });
      }
    });

    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }

  darForms() {
    this.darForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      // hco: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });

  }

  get l() {
    return this.darForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId, 'regionId');

    let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };

    this.dailyActRecord.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res?.responseObject;
    });
    this.darForm.controls.branch.setValue('');
  }

  fromDateExpectToDate(e) {
    if (e.target.value == '') {
      this.darForm.controls.toDate.setValue('');
    }
    console.log(e.target.value);
    this.minToDate = e.target.value;
    this.maxToDate = moment(this.addMonths(3, new Date(e.target.value))).format('YYYY-MM-DD');
    console.log(this.maxToDate, ' this.maxToDate');
  }

  addMonths(numOfMonths, date = new Date()) {
    date.setMonth(date.getMonth() + numOfMonths);
    return date;
  }

  toDateChange() {
    if (!this.darForm.value.fromDate) {
      this.showError('Please Select From Date');
      this.darForm.controls.toDate.setValue('');
    }
  }

  fetchReport() {
    let item = this.darForm.value;

    if (this.roleAccess == 'HCO') {
      this.viewDailyRecordByStaffId();
    } else {
      if (item.branch == 'allBranches') {
        this.viewDailyRecordByRegionId();
      }

      if (item.branch != 'allBranches') {
        this.viewDailyRecordByBranchId();
      }
    }

  }

  viewDailyRecordByStaffId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      staffMasterId: this.httpService.dataAccessDTO.userId
    }

    console.log(obj);

    this.dailyActRecord.recordViewByStaffId(obj).subscribe((res) => {
      this.darListByStaffID = res.responseObject;
      this.dateWiseStaffDarDetails = res.responseObject[0]?.dateWiseStaffDarDetails;
      console.log(this.darListByStaffID, 'darListByStaffID');
      console.log(this.dateWiseStaffDarDetails, 'this.dateWiseStaffDarDetails');
      if (this.darListByStaffID?.length == 0) {
        this.showError('No data found !');
      }

      if (res.status == false) {
        this.showError(res.message);
      }

    });

  }

  viewDailyRecordByBranchId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      branchMasterId: this.darForm.value.branch ? this.darForm.value.branch : this.lowerRankbranchId
    }

    console.log(obj);

    this.dailyActRecord.recordViewByBranchId(obj).subscribe((res) => {
      this.darListByBranchID = res.responseObject;
      console.log(this.darListByBranchID, 'darListByBranchID');

      if (this.darListByBranchID?.length == 0) {
        this.showError('No data found !');
      }

      if (res.status == false) {
        this.showError(res.message);
      }
    });

  }

  viewDailyRecordByRegionId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      regionMasterId: this.darForm.value.region
    }

    console.log(obj);

    this.dailyActRecord.recordViewByRegionId(obj).subscribe((res) => {
      this.darListByRegionID = res.responseObject;
      console.log(this.darListByRegionID);
      if (this.darListByRegionID?.length == 0) {
        this.showError('No data found !');
      }

      if (res.status == false) {
        this.showError(res.message);
      }

    });

  }

  disabledFetchReport() {
    let flag = true;
    if (this.roleAccess.includes('HCO')) {
      if (!this.darForm.value.toDate) {
        flag = false;
      }
    } else {
      if (!this.darForm.value.region || !this.darForm.value.branch || !this.darForm.value.toDate) {
        flag = false;
      }
    }

    return flag;
  }

  staffClickDateWiseRecords(item, staffDateWiseRecords) {
    this.dateWiseStaffDarDetails = item.dateWiseStaffDarDetails;
    console.log(item, this.dateWiseStaffDarDetails, '  this.dateWiseStaffDarDetails ');

    this.modalContent = '';
    this.dateWiseStaffDarDetailsModal = this.modalService.open(staffDateWiseRecords, {
      windowClass: 'staffDateWiseRecords',
    });

  }

  staffDateWiseRecordsModalDismiss() {
    this.dateWiseStaffDarDetailsModal.close();
  }


  showSuccess(message) {
    this.toaster.success(message, 'Daily-Activity Record', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Daily-Activity Record', {
      timeOut: 3000,
    });
  }

  restrictTypeOfDate() {
    return false;
  }

}
