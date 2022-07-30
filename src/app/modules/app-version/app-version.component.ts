import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
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
  skipValue: string;

  constructor(private appService: AppVersionService, private httpService: HttpService, private modalService: NgbModal,
    private fb: FormBuilder, config: NgbModalConfig, private toaster: ToastrService,) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.viewListOfAllVersion();
  }

  viewListOfAllVersion() {
    let postObj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.appService.listToGetAllAppVersions(postObj).subscribe((res: any) => {
      this.appVerList = res.responseObject;
      console.log(this.appVerList);
    });
  }

  createForm() {
    this.appVerForm = this.fb.group({
      applicationVersion: ['', Validators.required],
      applicationUrl: ['https://play.google.com/store/apps/details?id=app.bandhan.bhp', [Validators.required, Validators.pattern(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi)]],
      updateDet: ['', Validators.required],
      skippable: ['N', Validators.required],
    })

    // this.appVerForm?.markAllAsTouched();

  }

  get f() {
    return this.appVerForm.controls;
  }

  createAppVersion(createAppVer) {
    this.createForm();
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

  skippableOrNot(e) {
    this.skipValue = e.target.value;
    console.log(this.skipValue);


  }

  saveAppVersions() {

    let postObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      appVersionDto: {
        app_version_master_id: 0,
        app_version: this.appVerForm.value.applicationVersion,
        skippable: this.appVerForm.value.skippable,
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
      if (res.status == true) {
        this.showSuccess(res.message);
        this.appVerModalDismiss();
        this.viewListOfAllVersion();
      }
      else {
        this.showError(res.message);
      }

    });


  }

  delteAppVer(item) {

    console.log(item);

    let postObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      appVersionDto: {
        app_version_master_id: item.app_version_master_id,
        app_version: item.app_version,
        skippable: item.skippable,
        update_details: item.update_details,
        app_link: item.app_link,
        created_on: null,
        created_by: null,
        active_flag: 'D',
        updated_on: null,
        updated_by: null,
        deleted_on: null,
        deleted_by: null
      }
    }

    console.log(postObj);


    this.appService.appVersionSave(postObj).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.viewListOfAllVersion();
      }
      else {
        this.showError(res.message);
      }

    });

  }

  checkFieldDisabled() {
    let flag = true;

    if (!this.appVerForm.value.applicationVersion) {
      flag = false;
    } else if (!this.appVerForm.value.applicationUrl) {
      flag = false;
    } else if (!this.appVerForm.value.updateDet) {
      flag = false;
    } else if (this.f.applicationUrl.errors?.pattern) {
      flag = false
    }

    return flag;
  }

  showSuccess(message) {
    this.toaster.success(message, 'Application Version', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Application Version', {
      timeOut: 3000,
    });
  }



}


