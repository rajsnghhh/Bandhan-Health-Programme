import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { SsTrainingService } from './ss-training.service';

@Component({
  selector: 'app-ss-training',
  templateUrl: './ss-training.component.html',
  styleUrls: ['./ss-training.component.css']
})
export class SsTrainingComponent implements OnInit {
  ssTrainingForm: FormGroup;
  ssTrainingScheduleForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  regionBranchHide: boolean;
  modalContent: any;
  modalReference: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private sidebarService: SidebarService, private httpService: HttpService,
    private ssTrainingService: SsTrainingService, private modalService: NgbModal, config: NgbModalConfig,) {
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
    this.ssTrainingForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],

    });
  }

  get l() {
    return this.ssTrainingForm.controls;
  }


  changeRegion(regionId) {
    console.log(regionId);

    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };

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

  createSSTrainingEvent(SSTraining) {
    // console.log(this.villageId, 'villge idcreate');
    this.modalContent = '';
    this.modalReference = this.modalService.open(SSTraining, {
      windowClass: 'SSTraining',
    });
    this.ssTrainingFormModal();
  }

  ssTrainingFormModal() {
    this.ssTrainingScheduleForm = this.fb.group({
      trainingType: ['', Validators.required],
      duration: ['', Validators.required],

    });
  }

  get t() {
    return this.ssTrainingScheduleForm.controls;
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
}
