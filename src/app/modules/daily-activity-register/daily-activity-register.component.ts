import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { DailyActivityRegisterService } from './daily-activity-register.service';
import { HttpService } from '../core/http/http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-daily-activity-register',
  templateUrl: './daily-activity-register.component.html',
  styleUrls: ['./daily-activity-register.component.css']
})

export class DailyActivityRegisterComponent implements OnInit {
  locationForm: FormGroup;
  editForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpDtoList: Array<any> = [];
  villageDtoList: Array<any> = [];
  selectedBlock: String;
  selectedGp: String;
  branchVillageMapId: any;
  villageMasterId: any;
  hcoList: any;
  hcoId: any;
  darList: Array<any> = [];
  darViewFamilyList: Array<any> = [];
  darViewChildList: Array<any> = [];
  page = 1;
  pageSize = 6;
  p: any;
  role: any;
  modalContent: any;
  modalReference: any;
  modalIndex: any;
  childCheckbox: any;
  visitCheckbox: any;
  changeSS: any;
  swasthyaSahayika: Array<any> = [];
  visitData: Array<any> = [];
  editListCheck: any;
  childbox: Array<any> = [];
  isDisabled: boolean = false;
  mode: any;
  updateMode: boolean;
  deleteMode: boolean;

  constructor(private fb: FormBuilder, public validationService: ValidationService, private sidebarService: SidebarService,
    private dailyActivityService: DailyActivityRegisterService, private toaster: ToastrService, private httpService: HttpService,
    private modalService: NgbModal, private router: Router, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.role = this.sidebarService.RoleDTOName;
    console.log(this.role);


    this.locForm();

    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.sidebarService.branchId
    }

    setTimeout(() => {
      if (this.sidebarService.RoleDTOName.indexOf('HCO') != -1 || this.sidebarService.RoleDTOName.indexOf('TL') != -1) {
        this.dailyActivityService.villagesOfBranch(Dto).subscribe((res) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
            console.log(this.villagesOfBranch, 'villagesOfBranch1');
          }
        })
      }
    }, 1000);

    this.regionList = this.sidebarService.listOfRegion;

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 137)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 137)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;

  }

  changeRegion(region) {
    let regionId = this.regionList.find((reg) => reg.regionName == region)?.regionMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };

    setTimeout(() => {
      this.dailyActivityService.listOfBranchesOfARegion(req).subscribe((res) => {
        this.branchList = res?.responseObject;
      },
        (error) => {
          this.branchList = null;
        }
      );
    }, 1000);
    this.locationForm.controls.branch.setValue('');
    if (this.locationForm.value.region == '') {
      this.locationForm.controls.hco.setValue('');
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
      this.branchList = [];
      this.hcoList = [];
      this.showError('No Data Found');
    }
  }

  changeHco(id) {
    this.hcoId = id;

    this.locationForm.controls.fromDate.setValue('');
    this.locationForm.controls.toDate.setValue('');
    this.darList = [];
    this.darViewFamilyList = [];
    if (this.locationForm.value.hco == '') {
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
      this.showError('No Data Found');
    }
  }

  changeBranch(branch) {

    console.log(branch);

    this.sidebarService.branchId = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    this.sidebarService.branchName = this.locationForm.get('branch').value
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.sidebarService.branchId
    }

    this.dailyActivityService.hcoListOfBranch(Dto).subscribe((res: any) => {
      this.hcoList = res.responseObject;
      console.log(this.hcoList, 'hcoList');
    });


    if (branch) {
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
    }

    if (this.locationForm.value.branch == '') {
      this.locationForm.controls.hco.setValue('');
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
      this.hcoList = [];
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.showError('No Data Found');
    }

    if (this.locationForm.value.hco == '') {
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
    }

  }

  changeSahika(ss) {
    this.sidebarService.swasthyaSahayikaId = ss;
    this.sidebarService.swasthyaSahayikaName = this.swasthyaSahayika.find(i => i.swasthyaSahayikaId == ss)?.swasthyaSahayikaName
  }

  locForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      hco: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
  }

  fromDateChange() {
    if (this.locationForm.value.fromDate && this.locationForm.value.toDate) {
      this.locationForm.controls.toDate.setValue('');
    }
    this.darList = [];
    this.darViewFamilyList = [];
  }

  toDateChange() {
    this.darList = [];
    this.darViewFamilyList = [];
  }

  viewDAREntryList() {

    if (this.role != 'HCO' && this.role != 'HCOI' && this.role != 'TL') {
      if (!this.locationForm.value.hco) {
        this.showError('Please Select Role');
        return;
      }
    }

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      hcoId: this.hcoId ? this.hcoId : this.sidebarService.userId,
      startDate: this.locationForm.value.fromDate,
      endDate: this.locationForm.value.toDate,
      withVisitPurposeMap: false
    }

    console.log(obj);

    this.dailyActivityService.viewingDAREntryList(obj).subscribe((res) => {
      this.darList = res.responseObject;
      console.log(this.darList);
      if (this.darList.length == 0) {
        this.showError('No data found !');
      }

      if (res.status == false) {
        this.showError(res.message);
      }

    });

  }

  darViewFamily(item) {
    this.darViewFamilyList = item;

    console.log(this.darViewChildList, 'this.darViewChildList');

    console.log(this.darViewFamilyList, 'darViewFamily');

  }

  modalDismiss() {
    this.modalReference.close();
  }

  changeChildbox(e, item) {
    var data = e.target.checked;
    if (data) {
      this.childbox.push({
        active_flag: "A",
        childId: item.childId,
        darChildMapId: item.darChildMapId,
      });
      console.log(this.childbox);
    } else {
      this.childbox.pop();
    }

  }

  changeVisitbox(e, items) {
    console.log(items);

    if (e.target.checked) {
      items.answer = 'Y';
    }

    else {
      items.answer = 'N';
    }

    console.log(e.target.checked, items);
  }


  changess(e) {
    this.changeSS = e;
    console.log(this.changeSS);
  }

  editDARModal(editDAR, item) {
    console.log(item);
    this.mode = 'E';

    this.editListCheck = item;
    this.darViewChildList = this.editListCheck.darChildList;

    this.editForms();
    let req = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      villageId: this.editListCheck.villageId,
      userId: this.sidebarService.userId
    }

    console.log(req);


    this.dailyActivityService.ssVillageWiseList(req).subscribe((res) => {
      this.swasthyaSahayika = res.responseObject;
    });
    setTimeout(() => {
      this.modalContent = '';
      this.modalReference = this.modalService.open(editDAR, {
        windowClass: 'editDAR',
      });
    }, 500)

    let post = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      dailyActivityRegisterMasterId: this.editListCheck.dailyActivityRegisterMasterId
    }

    this.dailyActivityService.visitPurposeData(post).subscribe((res) => {
      this.visitData = res.responseObject;
      console.log(this.visitData, 'visitData');
    });

  }


  viewDARModal(editDAR, item) {
    this.mode = 'V';

    this.editListCheck = item;
    this.darViewChildList = this.editListCheck.darChildList;
    this.editForms();

    let req = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      villageId: this.editListCheck.villageId,
      userId: this.sidebarService.userId
    }

    console.log(req);


    this.dailyActivityService.ssVillageWiseList(req).subscribe((res) => {
      this.swasthyaSahayika = res.responseObject;
    });
    setTimeout(() => {
      this.modalContent = '';
      this.modalReference = this.modalService.open(editDAR, {
        windowClass: 'editDAR',
      });
    }, 500)

    let post = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      dailyActivityRegisterMasterId: this.editListCheck.dailyActivityRegisterMasterId
    }

    this.dailyActivityService.visitPurposeData(post).subscribe((res) => {
      this.visitData = res.responseObject;
      console.log(this.visitData, 'visitData');
    });

    this.editForm.disable();

  }


  editForms() {
    this.editForm = this.fb.group({
      child: [''],
      ss: [this.editListCheck.visitedWithSS ? this.editListCheck.visitedWithSS : this.changeSS],
      sahayika: [this.editListCheck.ssId ? this.editListCheck.ssId : '']
    });

    if (this.editListCheck.visitedWithSS == 'Y') {
      this.changeSS = 'Y';
    }

    if (this.editListCheck.visitedWithSS == 'N') {
      this.changeSS = 'N';
    }

  }

  deleteDAR(item, i) {
    console.log('deleteDAR');

    this.confirmationDialogService.confirm('', 'Are you sure you want to delete ?')
      .then(() => this.delete(item, i)
      )

      .catch(() => '');
  }

  delete(item, i) {
    console.log(item);

    let obj = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      darMasterId: item.dailyActivityRegisterMasterId,
      familyId: item.familyId,
      visitDate: item.darVisitDate,
      visitedWithSS: item.visitedWithSS,
      ssId: item.ssId,
      childList: item.darChildList,
      latitude: item.latitude,
      longitude: item.longitude,
      active_flag: "D",
      visitPurposeData: this.visitData
    }

    console.log(obj);

    this.dailyActivityService.saveEditDAR(obj).subscribe((res) => {
      console.log(res);

      if (res.status == true) {
        this.showSuccess(res.message);
        this.darViewFamilyList.splice(i, 1);
      }

    });


  }

  saveEditDAR() {
    console.log(this.editListCheck);
    var item = this.editListCheck;

    var chng;
    if (this.changeSS) {
      chng = this.changeSS
    } else {
      chng = item.visitedWithSS
    }

    var ssid;
    if (this.changeSS == 'Y') {
      ssid = this.sidebarService.swasthyaSahayikaId;
    }

    if (this.changeSS == 'N') {
      ssid = null;
    }


    let obj = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      darMasterId: item.dailyActivityRegisterMasterId,
      familyId: item.familyId,
      visitDate: item.darVisitDate,
      visitedWithSS: chng,
      ssId: ssid ? ssid : ssid,
      childList: this.childbox,
      latitude: item.latitude,
      longitude: item.longitude,
      active_flag: "A",
      visitPurposeData: this.visitData
    }

    console.log(obj);

    this.dailyActivityService.saveEditDAR(obj).subscribe((res) => {
      console.log(res);

      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
      }

    });

  }

  showSuccess(message) {
    this.toaster.success(message, 'Daily-Activity Register', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Daily-Activity Register', {
      timeOut: 3000,
    });
  }

  restrictTypeOfDate() {
    return false;
  }

  get l() {
    return this.locationForm.controls;
  }
}
