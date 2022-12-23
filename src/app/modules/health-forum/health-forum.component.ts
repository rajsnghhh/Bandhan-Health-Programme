import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { HealthForumService } from './health-forum.service';

@Component({
  selector: 'app-health-forum',
  templateUrl: './health-forum.component.html',
  styleUrls: ['./health-forum.component.css']
})
export class HealthForumComponent implements OnInit {
  healthForumForm: FormGroup;
  createHFForm: FormGroup;
  regionBranchHide: boolean;
  lowerRankbranchId: any;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  viewHealthForumsOfBranch: Array<any> = [];
  modalContent: any;
  viewHFEventModal: any;
  viewFamilyDetailModal: any;
  createHFModal: any;
  viewEventList: Array<any> = [];
  viewForumList: any;
  familyDetails: Array<any> = [];
  searchFullscreen: boolean;
  registerSearch: any;
  dropdownSettings: IDropdownSettings = {};
  areaList: Array<any> = [];
  hourList: Array<any> = [];
  minuteList: Array<any> = [];

  constructor(private fb: FormBuilder, private sidebarService: SidebarService, private http: HttpClient, private httpService: HttpService,
    private healthForumService: HealthForumService, private modalService: NgbModal, config: NgbModalConfig,
    private toaster: ToastrService, public validationService: ValidationService,) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    this.healthForumForms();
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

        this.changeBranch(this.lowerRankbranchId);
      }
    });

    this.regionBranchHide = this.sidebarService.regionBranchHide;

  }

  healthForumForms() {
    this.healthForumForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
    });
  }

  get l() {
    return this.healthForumForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId, 'regionId');

    let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };

    this.healthForumService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res?.responseObject;
      console.log(this.branchList, 'this.branchList');
    });
    this.healthForumForm.controls.branch.setValue('');
    this.viewHealthForumsOfBranch = [];
  }

  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };

    this.healthForumService.viewHealthForumsOfABranch(req).subscribe((res) => {
      this.viewHealthForumsOfBranch = res?.responseObject;
      console.log(this.viewHealthForumsOfBranch, 'this.viewHealthForumsOfBranch');
    });
    this.viewHealthForumsOfBranch = [];
  }

  viewHFEventDetails(HFeventDetails, health) {
    this.viewForumList = health;
    console.log(this.viewForumList, 'viewForumList');
    this.viewEventList = health.eventList;
    console.log(this.viewEventList, 'viewEventList');

    this.modalContent = '';
    this.viewHFEventModal = this.modalService.open(HFeventDetails, {
      windowClass: 'HFeventDetails',
    });

  }

  viewHFEventModalDismiss() {
    this.viewHFEventModal.close();
  }

  viewFamilyAttendedDetails(ViewFamilyDetails, event) {
    console.log(event);
    if (event.forumEventFamilyPresent == 0) {
      this.showError('No family is available');
      return;
    } else {
      let obj = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        healthForumEventId: event.healthForumEventId,
        healthForumMasterId: this.viewForumList.healthForumMasterId
      }

      this.healthForumService.viewHealthForumsOfAEvent(obj).subscribe((res: any) => {
        console.log(res.responseObject);
        this.familyDetails = res.responseObject?.villageWiseFamilyList;
        console.log(this.familyDetails, 'this.familyDetails');
      });

      this.modalContent = '';
      this.viewFamilyDetailModal = this.modalService.open(ViewFamilyDetails, {
        windowClass: 'ViewFamilyDetails',
      });
    }

  }

  viewFamilyModalDismiss() {
    this.viewFamilyDetailModal.close();
  }

  createHealthForum(createHF) {

    this.areaList = [
      { itemid: 1, itemtext: 'Hanoi' },
      { itemid: 2, itemtext: 'Lang Son' },
      { itemid: 3, itemtext: 'Vung Tau' },
      { itemid: 4, itemtext: 'Hue' },
      { itemid: 5, itemtext: 'Cu Chi' },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'itemid',
      textField: 'itemtext',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.createHFForms();

    this.modalContent = '';
    this.createHFModal = this.modalService.open(createHF, {
      windowClass: 'createHF',
    });

    this.hourLists();
    this.minuteLists();
  }

  hourLists() {
    for (let i = 1; i <= 12; i++) {
      if (i < 10) {
        this.hourList.push({ hourName: '0' + i, hourValue: '0' + i });
      } else {
        this.hourList.push({ hourName: i, hourValue: i });
      }
      console.log(this.hourList);
    }
  }

  minuteLists() {
    for (let i = 0; i <= 59; i++) {
      if (i < 10) {
        this.minuteList.push({ minuteName: '0' + i, minuteValue: '0' + i });
      } else {
        this.minuteList.push({ minuteName: i, minuteValue: i });
      }
      console.log(this.minuteList);
    }
  }

  onItemSelect(item) {
    console.log(item);
    // this.selectedItems.push(item);
    // this.MouFormData.patchValue({ donorList: this.selectedItems });
  }
  onSelectAll(item) {
    console.log(item);
    // this.selectedItems = items;
    // this.MouFormData.patchValue({ donorList: this.selectedItems });
  }
  onItemDeSelect(item) {
    console.log(item);
    // console.log(item);
    // const index: number = this.selectedItems.findIndex(
    //   (x) => x.donorMasterId == item.donorMasterId
    // );
    // if (index !== -1) {
    //   this.selectedItems.splice(index, 1);
    // }
    // this.MouFormData.patchValue({ donorList: this.selectedItems });
  }
  onItemDeSelectAll(item) {
    console.log(item);
    // this.selectedItems = items;
    // this.MouFormData.patchValue({ donorList: this.selectedItems });
  }

  createHFForms() {
    this.createHFForm = this.fb.group({
      date: ['', Validators.required],
      staffName: ['', Validators.required],
      ssName: ['', Validators.required],
      areaList: ['', Validators.required],
      hour: ['', Validators.required],
      minute: ['', Validators.required],
      meridiem: ['', Validators.required],
      topic: ['', Validators.required],
      event: ['', Validators.required],
    })

  }

  get c() {
    return this.createHFForm.controls;
  }


  createHFModalDismiss() {
    this.createHFModal.close();
  }

  showSuccess(message) {
    this.toaster.success(message, 'Health Forum', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Health Forum', {
      timeOut: 3000,
    });
  }

  restrictTypeOfDate() {
    return false;
  }

}




