import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';

@Component({
  selector: 'app-user-hh-ss-remap-home',
  templateUrl: './user-hh-ss-remap-home.component.html',
  styleUrls: ['./user-hh-ss-remap-home.component.css']
})
export class UserHhSsRemapHomeComponent implements OnInit {
  locationForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  fromUserList: Array<any> = [];
  toUserList: Array<any> = [];

  constructor(private httpService: HttpService, private http: HttpClient, private fb: FormBuilder,
    private sidebarService: SidebarService, private confirmationDialogService: ConfirmationDialogService,
    private baselineService: BaselineSurveyService, private toaster: ToastrService,) { }

  ngOnInit(): void {
    this.createForm();
    this.regionList = this.sidebarService.listOfRegion;
  }

  createForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      fromUser: ['', Validators.required],
      toUser: ['', Validators.required],
    });
  }

  get f() {
    return this.locationForm.controls;
  }

  changeRegion(value) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: value,
    };
    this.baselineService.listOfBranchesOfARegion(Dto).subscribe(
      (res) => {
        this.branchList = res?.responseObject;
      },
      (error) => {
        this.branchList = null;
      }
    );
  }

  changeBranch(value) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: value
    }
    this.http.post(`${this.httpService.baseURL}branch/getListOfAllHcoITL`, Dto).subscribe((res: any) => {
      this.fromUserList = res?.responseObject;
    });
  }

  changeFromUser(value) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: value
    }
    this.http.post(`${this.httpService.baseURL}branch/getListOfActiveHcoITL`, Dto).subscribe((res: any) => {
      this.toUserList = res?.responseObject;
    });
  }

  changeToUser(value) {

  }

  remapUser() {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      fromUserId: this.locationForm.value.fromUser,
      toUserId: this.locationForm.value.toUser
    }

    this.confirmationDialogService.confirm('', `Do you want to remap?`).then(() => {
      this.http.post(`${this.httpService.baseURL}remap/remapAllHhAndSsOfOneUserToAnother`, Dto).subscribe((res) => {
        this.showSuccess('Success');
      })
    }).catch(() => '');
  }

  showSuccess(message) {
    this.toaster.success(message, 'Deleted', {
      timeOut: 3000,
    });
  }
}
