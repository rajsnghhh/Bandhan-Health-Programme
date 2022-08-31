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
  regionName: any;
  regionID: any;
  branchID: any;
  ssEventList: Array<any> = [];
  eventSSList: Array<any> = [];
  ssList: Array<any> = [];
  ssTrainingType: Array<any> = [];
  ssTrainingTopic: Array<any> = [];
  ssTrainingDataPushPop = {
    dataAccessDTO: {},
    branchId: '',
    ssIdList: [],
  };

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
        this.branchID = res.branchId;
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userName,
            userName: dataAccessDTO.userId,
          },
          branchId: this.branchID
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        });

        this.changeBranch(this.branchID);
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
    this.regionID = regionId; console.log(this.regionID);

    this.regionName = this.regionList.find((reg) => reg.regionMasterId == this.regionID)?.regionName;
    console.log(this.regionName, 'this.regionName');

    let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: this.regionID };

    this.ssTrainingService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList);
    });

    this.viewSSTrainingEventForm.controls.branch.setValue('');
    this.ssEventList = [];
    if (this.viewSSTrainingEventForm.value.region == '') {
      this.viewSSTrainingEventForm.controls.branch.setValue('');
      this.ssEventList = [];
      this.branchList = [];
    }
  }

  changeBranch(branchId) {
    this.branchID = branchId;
    console.log(this.branchID);
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchID };

    this.ssTrainingService.branchWiseSSTrainingEventList(req).subscribe((res) => {
      this.ssEventList = res.responseObject.branchWiseSsTrainingEventList;
      console.log(this.ssEventList);
    });
  }

  viewParticipantsDetails(detailsOfParticipants, ssList) {
    this.eventSSList = ssList;
    console.log(this.eventSSList, 'ssList');

    this.modalContent = '';
    this.modalReference = this.modalService.open(detailsOfParticipants, {
      windowClass: 'detailsOfParticipants',
    });
  }

  detailsOfParticipantsModalDismiss() {
    this.modalReference?.close();
  }

  editSSTrainingEvents(SSTraining) {
    console.log('editSSTrainingEvents');
    this.modalContent = '';
    this.modalReference = this.modalService.open(SSTraining, {
      windowClass: 'SSTraining',
    });
    this.ssTrainingFormModal();
  }

  deleteSSTrainingEvents() {
    console.log('deleteSSTrainingEvents');
  }

  createSSTrainingEvent(SSTraining) {
    console.log(this.branchID, 'branchID');
    console.log(this.regionID, 'regionID');
    console.log(this.regionName, 'this.regionName');

    this.modalContent = '';
    this.modalReference = this.modalService.open(SSTraining, {
      windowClass: 'SSTraining',
    });
    this.ssTrainingFormModal();
    this.createSSTrainingEventForm.controls['duration'].disable();
    this.createSSTrainingEventForm.controls['toDate'].disable();
    if (!this.createSSTrainingEventForm.value.trainingType) {
      this.createSSTrainingEventForm.controls['fromDate'].disable();
    }

    let req = { dataAccessDTO: this.httpService.dataAccessDTO };

    this.ssTrainingService.ssTrainingTypeAndTopic(req).subscribe((res) => {
      this.ssTrainingType = res.responseObject.ssTrainingType;
      this.ssTrainingTopic = res.responseObject.ssTrainingTopic;
      console.log(this.ssTrainingType, ' this.ssTrainingType');
      console.log(this.ssTrainingTopic, ' this.ssTrainingTopic');
    });


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
      ssbranch: [this.viewSSTrainingEventForm.value.branch, Validators.required],
      participantType: ['fresh', Validators.required]
    });
  }

  get t() {
    return this.createSSTrainingEventForm.controls;
  }

  changeTrainingType(e) {
    console.log(e);
    this.getMinDate();

    if (e == 1) {
      this.createSSTrainingEventForm.controls.duration.setValue(6);
      this.createSSTrainingEventForm.value.duration = 6;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh');
      this.createSSTrainingEventForm.controls.participantType.setValue('fresh');
    } else if (e == 2) {
      this.createSSTrainingEventForm.controls.duration.setValue(1);
      this.createSSTrainingEventForm.value.duration = 1;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh');
      this.createSSTrainingEventForm.controls.participantType.setValue('fresh')
    } else if (e == 3) {
      this.createSSTrainingEventForm.controls.duration.setValue(2);
      this.createSSTrainingEventForm.value.duration = 2;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.viewSSList();
    } else if (e == 4) {
      this.createSSTrainingEventForm.controls.duration.setValue(2);
      this.createSSTrainingEventForm.value.duration = 2;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.viewSSList();
    } else {
      this.ssList = [];
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

  changessbranch(branchId) {
    console.log(branchId);
    this.viewSSList();
    this.changeparticipantType('fresh');
    this.createSSTrainingEventForm.controls.participantType.setValue('fresh');
    // const input = document.getElementById('flexCheckDefault') as HTMLInputElement | null;
    // if (input == null) { input.checked = true }
    console.log(this.ssList, 'xxxxx');
    var tt = this.ssList.filter(item => item.swasthya_sahayika_id);
    console.log(tt);

    var bt = this.ssTrainingDataPushPop.ssIdList.filter(item => item.ssId);
    console.log(bt);



  }

  changeparticipantType(participantType) {
    let ssListObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.createSSTrainingEventForm.value.ssbranch,
      trainingTypeMasterId: this.createSSTrainingEventForm.value.trainingType
    }

    this.ssTrainingService.getSSList(ssListObj).subscribe((res: any) => {
      this.ssList = res.responseObject;
      console.log(this.ssList, 'this.ssList');

      if (participantType == 'fresh') {
        this.ssList = this.ssList.filter((item) => item.status == 'fresh');
        console.log(this.ssList, ' freshSSList');
      } else if (participantType == 'absent') {
        this.ssList = this.ssList.filter((item) => item.status != 'fresh');
        console.log(this.ssList, 'absentSSList');
      } else {
        this.ssList = [];
      }

    });

  }

  selectSSForTraining(e, ss) {
    console.log(ss);

    var checkboxData = e.target.checked;
    if (checkboxData) {
      this.ssTrainingDataPushPop.dataAccessDTO = this.httpService.dataAccessDTO,
        this.ssTrainingDataPushPop.ssIdList.push({ ssId: ss.swasthya_sahayika_id });
    }
    else {
      var i = this.ssTrainingDataPushPop.ssIdList.findIndex(list => list.ssId == ss.swasthya_sahayika_id);
      this.ssTrainingDataPushPop.ssIdList.splice(i, 1);
    }

    console.log(this.ssTrainingDataPushPop, 'ssTrainingDataPushPop');

  }

  viewSSList() {
    let ssListObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.createSSTrainingEventForm.value.ssbranch,
      trainingTypeMasterId: this.createSSTrainingEventForm.value.trainingType
    }

    this.ssTrainingService.getSSList(ssListObj).subscribe((res: any) => {
      this.ssList = res.responseObject;
      console.log(this.ssList, 'this.ssList');
    });

  }

  saveSSTrainingForm() {
    console.log('save');

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
    this.ssTrainingDataPushPop.ssIdList = [];
    // }
  }

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

  restrictTypeOfDate() { return false; }
}
