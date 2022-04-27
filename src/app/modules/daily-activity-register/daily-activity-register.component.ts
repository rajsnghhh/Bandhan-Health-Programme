import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { DailyActivityRegisterService } from './daily-activity-register.service';
import { HttpService } from '../core/http/http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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
  visitData: any;
  editListCheck: any;
  childbox: Array<any> = [];


  constructor(private fb: FormBuilder, public validationService: ValidationService, private sidebarService: SidebarService,
    private dailyActivityService: DailyActivityRegisterService, private toaster: ToastrService, private httpService: HttpService,
    private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.role = this.sidebarService.RoleDTOName;

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
    }, 500);
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

  // changeBlock(blockname) {
  //   this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
  //   this.selectedBlock = this.locationForm.get('block').value;
  //   this.locationForm.controls.gp.setValue('');
  //   this.locationForm.controls.gram.setValue('');
  //   if (this.locationForm.value.block == '') {
  //     this.showError('No Data Found');
  //     // this.pemDetails = [];
  //     this.villageDtoList = [];
  //     this.gpDtoList = [];
  //   }
  // }
  // changeGp(gpName) {
  //   this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
  //   this.selectedGp = this.locationForm.get('gp').value;
  //   this.locationForm.controls.gram.setValue('');
  //   console.log(this.villageDtoList);

  //   if (this.locationForm.value.gp == '') {
  //     this.showError('No Data Found');
  //     // this.pemDetails = [];
  //     this.villageDtoList = [];
  //   }
  // }

  // changeVillage(villagename) {
  //   this.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.branchVillageMapId;
  //   this.villageMasterId = this.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId
  //   console.log(this.villageMasterId);

  //   // this.viewPEMList();

  //   if (this.locationForm.value.gram == '') {
  //     this.showError('No Data Found');
  //     // this.pemDetails = [];
  //   }

  // }


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

    // return this.editForm.controls;
    // this.darViewFamilyList = this.darViewFamilyList;
    // this.editForms();

    this.modalReference.close();
    // console.log('true');

    // let currentUrl = this.router.url;
    // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this.router.navigate([currentUrl]);
    // });
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
    if (e.target.checked) {
      items.answer = 'Y';
    }

    else {
      items.answer = 'N';
    }

    console.log(e.target.checked, items);
  }


  changess(e) {
    this.changeSS = e.target.value;
    console.log(this.changeSS);
  }

  editDARModal(editDAR, item, villId, darId, i, editList) {
    this.darViewChildList = item;
    // console.log(this.darViewChildList, 'darChildList');
    // console.log(villId, darId);
    this.editListCheck = editList;
    console.log(this.editListCheck, 'Action');


    this.editForms();

    let req = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      villageId: villId,
      userId: this.sidebarService.userId
    }

    console.log(req);


    this.dailyActivityService.ssVillageWiseList(req).subscribe((res) => {
      this.swasthyaSahayika = res.responseObject;
    });
    this.modalContent = '';
    this.modalReference = this.modalService.open(editDAR, {
      windowClass: 'editDAR',
    });

    let post = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      dailyActivityRegisterMasterId: darId
    }

    this.dailyActivityService.visitPurposeData(post).subscribe((res) => {
      this.visitData = res.responseObject;
      console.log(this.visitData, 'visitData');
      // console.log(this.visitData[i].subPurposes);
      // var tt = this.visitData[i].subPurposes.filter((x) => x.answer == 'Y');
      // console.log(tt);
    });

  }

  editForms() {
    this.editForm = this.fb.group({
      ss: [this.editListCheck.visitedWithSS ? this.editListCheck.visitedWithSS : this.changeSS],
      sahayika: [this.editListCheck.ssId ? this.editListCheck.ssId : '']
    });

    // if(this.changeSS == "Y"){
    //   this.editForm.controls.sahayika.setValue(this.editListCheck.ssId) ;
    // }else{  
    //   this.editForm.controls.sahayika.setValue('');
    // }

    if (this.editListCheck.visitedWithSS == 'Y') {
      this.changeSS = 'Y';
    }

    if (this.editListCheck.visitedWithSS == 'N') {
      this.changeSS = 'N';
    }

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
      ssId: ssid,
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
