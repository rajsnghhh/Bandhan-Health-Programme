import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
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
  editAppVerData: any;
  createMode: boolean;
  updateMode: boolean;
  deleteMode: boolean;
  viewModalData: any;

  constructor(private appService: AppVersionService, private httpService: HttpService, private modalService: NgbModal,
    private fb: FormBuilder, private sidebarService: SidebarService, private router: Router, private toaster: ToastrService, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.viewListOfAllVersion();

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'Application Version')?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/app-version']) : this.router.navigate(['/error']);

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'Application Version')?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    console.log(this.createMode);


    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'Application Version')?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    console.log(this.updateMode);

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'Application Version')?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    console.log(this.deleteMode);
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
      applicationVersion: [this.editAppVerData?.app_version ? this.editAppVerData?.app_version : '', Validators.required],
      applicationUrl: [this.editAppVerData?.app_link ? this.editAppVerData?.app_link :
        'https://play.google.com/store/apps/details?id=app.bandhan.bhp', [Validators.required,
        Validators.pattern(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi)]],
      updateDet: [this.editAppVerData?.update_details ? this.editAppVerData?.update_details : '', Validators.required],
      skippable: [this.editAppVerData?.skippable ? this.editAppVerData?.skippable : 'N', Validators.required],
    })

    this.appVerForm?.markAllAsTouched();

  }

  get f() {
    return this.appVerForm.controls;
  }

  createAppVersion(createAppVer) {
    console.log(this.editAppVerData?.app_version_master_id, 'this.editAppVerData?.app_version_master_id');
    console.log(this.editAppVerData, 'createAppVerData');
    this.createForm();
    this.modalContent = '';
    this.modalReference = this.modalService.open(createAppVer, {
      windowClass: 'createAppVer',
    });

  }

  editAppVersion(createAppVer, item) {
    this.editAppVerData = item;
    this.createAppVersion(createAppVer);
  }

  appVerModalDismiss() {
    if (this.editAppVerData?.app_version_master_id) {
      this.editAppVerData = []
      this.modalReference?.close();
    }
    else {
      this.modalReference?.close();
    }
  }

  skippableOrNot(e) {
    this.skipValue = e.target.value;
    console.log(this.skipValue);
  }

  saveAppVersions() {

    let postObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      appVersionDto: {
        app_version_master_id: this.editAppVerData?.app_version_master_id ? this.editAppVerData?.app_version_master_id : 0,
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


