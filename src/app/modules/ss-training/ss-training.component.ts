import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { SsTrainingService } from './ss-training.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ss-training',
  templateUrl: './ss-training.component.html',
  styleUrls: ['./ss-training.component.css']
})
export class SsTrainingComponent implements OnInit {
  viewSSTrainingEventForm: FormGroup;
  createSSTrainingEventForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  regionBranchHide: boolean;
  modalContent: any;
  modalReference: any;
  setFromDate: any;
  setToDate: any;
  durationValue: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private sidebarService: SidebarService, private toaster: ToastrService,
    private httpService: HttpService, private ssTrainingService: SsTrainingService, private modalService: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.createForm();

    this.sidebarService.checkRoledetailDTO().then((res: any) => {
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
          branchId: res.branchId
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

        // this.dailyActivityService.hcoListOfBranch(Dato).subscribe((res: any) => {
        //   this.hcoList = res.responseObject;
        //   console.log(this.hcoList, 'hcoList');
        // });
      }
    });
  }

  createForm() {
    this.viewSSTrainingEventForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
    });
  }

  get l() {
    return this.viewSSTrainingEventForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId);
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };

    this.ssTrainingService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList);
    });

    // this.locationForm.controls.branch.setValue('');
    // this.locationForm.controls.hco.setValue('');
    // this.locationForm.controls.fromDate.setValue('');
    // this.locationForm.controls.toDate.setValue('');
    // this.darList = [];
    // this.darViewFamilyList = [];
    // this.branchList = [];
    // this.hcoList = [];
    // if (this.locationForm.value.region == '') {
    //   this.locationForm.controls.hco.setValue('');
    //   this.locationForm.controls.fromDate.setValue('');
    //   this.locationForm.controls.toDate.setValue('');
    //   this.darList = [];
    //   this.darViewFamilyList = [];
    //   this.branchList = [];
    //   this.hcoList = [];
    //   this.showError('No Data Found');
    // }
  }

  changeBranch(branchId) {
    console.log(branchId);
  }

  viewParticipantsDetails(detailsOfParticipants) {
    this.modalContent = '';
    this.modalReference = this.modalService.open(detailsOfParticipants, {
      windowClass: 'detailsOfParticipants',
    });

  }

  detailsOfParticipantsModalDismiss() {
    this.modalReference?.close();
  }

  editSSTrainingEvents() {
    console.log('editSSTrainingEvents');
  }

  deleteSSTrainingEvents() {
    console.log('deleteSSTrainingEvents');
  }


  createSSTrainingEvent(SSTraining) {
    console.log(this.viewSSTrainingEventForm.value.branch, 'branchId');
    this.modalContent = '';
    this.modalReference = this.modalService.open(SSTraining, {
      windowClass: 'SSTraining',
    });
    this.ssTrainingFormModal();
    this.getMinDate();
    this.createSSTrainingEventForm.controls['duration'].disable();
    this.createSSTrainingEventForm.controls['toDate'].disable();
    if (!this.createSSTrainingEventForm.value.trainingType) {
      this.createSSTrainingEventForm.controls['fromDate'].disable();
    }
  }

  ssTrainingFormModal() {
    this.createSSTrainingEventForm = this.fb.group({
      trainingType: ['', Validators.required],
      duration: [''],
      fromDate: ['', Validators.required],
      toDate: [''],
      trainername: [''],
      trainerdesignation: [''],
      trainingtopic: ['', Validators.required],
    });
  }

  get t() {
    return this.createSSTrainingEventForm.controls;
  }

  TrainingType(e) {
    console.log(e);

    if (e == 1) {
      this.createSSTrainingEventForm.controls.duration.setValue(6);
      this.createSSTrainingEventForm.value.duration = 6;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
    } else if (e == 2) {
      this.createSSTrainingEventForm.controls.duration.setValue(1);
      this.createSSTrainingEventForm.value.duration = 1;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
    } else if (e == 3) {
      this.createSSTrainingEventForm.controls.duration.setValue(2);
      this.createSSTrainingEventForm.value.duration = 2;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
    } else if (e == 4) {
      this.createSSTrainingEventForm.controls.duration.setValue(2);
      this.createSSTrainingEventForm.value.duration = 2;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
    }
    console.log(this.createSSTrainingEventForm.value.duration, 'formdurationvalue');
    console.log(this.durationValue, 'vardurationvalue');
    this.createSSTrainingEventForm.controls.fromDate.setValue('');
    this.createSSTrainingEventForm.controls.toDate.setValue('');
    if (this.createSSTrainingEventForm.value.trainingType) {
      this.createSSTrainingEventForm.controls['fromDate'].enable();
    } else {
      this.createSSTrainingEventForm.controls['fromDate'].disable();
      this.createSSTrainingEventForm.controls.duration.setValue('');
      this.createSSTrainingEventForm.controls.fromDate.setValue('');
      this.createSSTrainingEventForm.controls.toDate.setValue('');
    }
  }

  getMinDate() {
    let today = new Date().toISOString().slice(0, 10);
    this.setFromDate = moment(today).add(1, "days").format("YYYY-MM-DD");
  }

  expectToDate(e) {
    console.log(this.durationValue, 'this.durationValue');
    var mydate = new Date(e);
    if (mydate.getDay() == 0) {
      this.showError('Sunday not allowed');
      this.createSSTrainingEventForm.controls.fromDate.setValue('');
      this.createSSTrainingEventForm.controls.toDate.setValue('');
      return;
    }

    if (this.createSSTrainingEventForm.value.trainingType == 2) {
      this.setToDate = this.createSSTrainingEventForm.value.fromDate;
      this.createSSTrainingEventForm.controls.toDate.setValue(this.setToDate);
      console.log(this.setToDate);
    } else {
      e = new Date(e.replace(/-/g, "/"));
      var endDate: any, noOfDaysToAdd = (this.durationValue - 1), count = 0;
      while (count < noOfDaysToAdd) {
        endDate = new Date(e.setDate(e.getDate() + 1));
        if (endDate.getDay() != 0) {
          count++;
        }
      }
      this.setToDate = moment(endDate).format("YYYY-MM-DD");
      this.createSSTrainingEventForm.controls.toDate.setValue(this.setToDate);
      this.createSSTrainingEventForm.value.toDate = this.setToDate;
      console.log(this.setToDate);
    }
  }

  ssTrainingModalDismiss() {
    // console.log(this.villageId);

    // if (this.villageId) {
    //   this.editVillData = [];
    //   this.villageId = 0;
    //   this.modalReference?.close();
    // }
    // else {
    this.modalReference?.close();
    // }
  }

  restrictTypeOfDate() { return false; }

  showSuccess(message) {
    this.toaster.success(message, 'SS Training Event', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'SS Training Event', {
      timeOut: 2000,
    });
  }
}
