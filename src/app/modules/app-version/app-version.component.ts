import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../core/http/http.service';
import { AppVersionService } from './app-version.service';

@Component({
  selector: 'app-app-version',
  templateUrl: './app-version.component.html',
  styleUrls: ['./app-version.component.css']
})
export class AppVersionComponent implements OnInit {
  appVerForm: FormGroup;
  modalContent: any;
  modalReference: any;
  appVerList: Array<any> = [];

  constructor(private appService: AppVersionService, private httpService: HttpService, private modalService: NgbModal,
    private fb: FormBuilder, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    let postObj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.appService.listToGetAllAppVersions(postObj).subscribe((res: any) => {
      this.appVerList = res.responseObject;
      console.log(this.appVerList);
    });

    this.createForm();
  }

  createForm() {
    this.appVerForm = this.fb.group({
      applicationVersion: ['', Validators.required],
      applicationUrl: ['', Validators.required],
      updateDet: ['', Validators.required]

    })
  }

  get f() {
    return this.appVerForm.controls;
  }

  createAppVersion(createAppVer) {
    this.modalContent = '';
    this.modalReference = this.modalService.open(createAppVer, {
      windowClass: 'createAppVer',
    });

    // console.log(this.editssData?.ssId, 'this.editssData?.ssIdcreate');
    // console.log('branchId', this.branchId);

    // let obj = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId }

    // this.ssService.blockGPVillOfBranch(obj).subscribe((res) => {
    //   this.blockList = res.responseObject;
    //   console.log(this.blockList, 'blockList');
    //   this.changeBlock(this.editssData?.blockDto?.blockId);
    //   this.changeGP(this.editssData?.gpDto?.gpId);
    // })

    // setTimeout(() => {
    //   this.modalContent = '';
    //   this.modalReference = this.modalService.open(createSS, {
    //     windowClass: 'createMuac',
    //   });
    //   this.createSSForm();
    // }, 1000);

    // let obj2 = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId }

    // this.staffLists();

  }

  appVerModalDismiss() {
    // if (this.editssData?.ssId) {
    //   this.editssData = []
    //   this.modalReference?.close();
    // }
    // else {
    this.modalReference?.close();
    // }

  }

  saveAppVersions() {

    let postObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      appVersionDto: {
        app_version_master_id: 0,
        app_version: this.appVerForm.value.applicationVersion,
        skippable: "N",
        update_details: this.appVerForm.value.updateDet,
        app_link: this.appVerForm.value.applicationUrl,
        created_on: null,
        created_by: null,
        active_flag: 'A',
        updated_on: null,
        updated_by: null,
        deleted_on: null,
        deleted_by: null
      }
    }

    console.log(postObj);


    this.appService.appVersionSave(postObj).subscribe((res: any) => {
      console.log(res);
    });


  }



}
