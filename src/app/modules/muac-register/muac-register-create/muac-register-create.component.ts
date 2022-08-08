
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { MuacRegisterService } from '../muac-register.service';

@Component({
  selector: 'app-muac-register-create',
  templateUrl: './muac-register-create.component.html',
  styleUrls: ['./muac-register-create.component.css']
})
export class MuacRegisterCreateComponent implements OnInit {
  locationForm: FormGroup;
  muacList: any;
  muacCampList: Array<any> = [];
  modalContent: any;
  modalReference: any;
  muacDetails = {
    muacInfo: [],
  };
  muacSave: any;
  minDate: any;
  maxDate: any;
  editMaxDate: any;
  editMinDate: any;
  start: any;
  end: any;
  selStartDate: any;
  month: any;
  day: any;
  year: any;
  muacEditInfo: any;

  ProjectStartDate: any;
  ProjectEndDate: any;
  MuacList: any;
  loader: boolean = true;
  villagesOfBranch: Array<any> = [];
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  muacAdd: boolean;
  updateMode: boolean;
  deleteMode: boolean;
  createMode: boolean;
  regionBranchHide: boolean;
  branchId: any;
  hcoBranchId: any;
  setStartDate: any;
  setEndDate: any;


  constructor(private httpService: HttpService, private muacService: MuacRegisterService,
    private modalService: NgbModal, private toaster: ToastrService, private fb: FormBuilder,
    private sidebarService: SidebarService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    console.log(this.sidebarService.userId);

    this.locForm();

    this.muacDetails.muacInfo.push({
      muacCampId: 0,
      startDate: '',
      endDate: '',
      userId: this.sidebarService.userId,
      createdDateTime: new Date().toISOString().slice(0, 10)
    });

    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        this.hcoBranchId = res.branchId;
        this.changeBranch(res.branchId)
        let Dto = {
          dataAccessDTO: res.dataAccessDTO,
          branchId: res.branchId
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        })
      }
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'MUAC Camp')?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/muac-register/create']) : this.router.navigate(['/error']);

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'MUAC Camp')?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'MUAC Camp')?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'MUAC Camp')?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

  }

  changeRegion(regionId) {
    console.log(regionId, 'regionId');

    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };

    this.muacService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res?.responseObject;
    }, (error) => { this.branchList = null; });

    this.locationForm.controls.branch.setValue('');
    this.muacCampList = [];

    if (this.locationForm.value.region == '') {
      this.showError('No Data Found');
      this.muacCampList = [];
    }
  }

  changeBranch(branchId) {
    this.branchId = branchId;
    let obj = {
      activeStatus: 'A',
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: branchId
    }

    this.loader = false;

    //API call for viewing muacList
    setTimeout(() => {
      this.muacService.muacCampList(obj).subscribe((response: any) => {
        this.loader = true;
        this.muacList = response.responseObject;
        this.muacCampList = response.responseObject?.muaccampDetailList;
        if (this.muacCampList?.length == 0) {
          this.showError('No Data Found');
        }
        console.log(this.muacCampList);
        this.getMinDate(this.muacList);
      },
        (err) => {
          this.loader = true;
        })
    }, 1000);

    if (!branchId) {
      if (this.locationForm.value.branch == '') {
        this.showError('No Data Found');
        this.muacCampList = [];
        this.muacAdd = true;
      }
    }

  }

  createModal(createMuac) {
    this.modalContent = '';
    this.modalReference = this.modalService.open(createMuac, {
      windowClass: 'createMuac',
    });
  }

  locForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required]
    });
  }

  get l() {
    return this.locationForm.controls;
  }

  editModal(editMuac, item) {
    this.muacEditInfo = item;
    console.log(this.muacEditInfo, 'muacEditInfo');

    this.muacDetails.muacInfo[0].startDate = item.startDate;
    this.muacDetails.muacInfo[0].endDate = item.endDate;
    this.modalContent = '';
    this.modalReference = this.modalService.open(editMuac, {
      windowClass: 'editMuac',
    });

    var index = this.MuacList.muaccampDetailList.findIndex(function (items) { return items.muacCampId === item.muacCampId })
    console.log(index, 'index')

    if (index == 0) {
      if (this.MuacList.muaccampDetailList.length == 1) {
        console.log('branchOpenDate', this.muacList?.branchOpenDate);
        console.log('branchCloseDate', this.muacList?.branchCloseDate);
        console.log('projectStartDate', this.muacList?.projectStartDate);
        console.log('projectEndDate', this.muacList?.projectEndDate);
        var projectStartDate = this.muacList?.projectStartDate;
        var branchOpenDate = this.muacList?.branchOpenDate;

        if (projectStartDate < branchOpenDate) {
          console.log("projectStartDate is lesser than branchOpenDate");
          this.setStartDate = branchOpenDate;
          console.log(this.setStartDate, 'setStartDate');
        }
        else if (projectStartDate > branchOpenDate) {
          console.log("projectStartDate is greater than branchOpenDate");
          this.setStartDate = projectStartDate;
          console.log(this.setStartDate, 'setStartDate');
        } else {
          console.log("both are equal");
          this.setStartDate = projectStartDate;
          console.log(this.setStartDate, 'setStartDate');
        }

        var dateString = this.setStartDate;
        var minDateToSet: any = moment(dateString).add(1, "days").format("YYYY-MM-DD");
        this.editMinDate = minDateToSet;
        var secondindexstartdate = this.MuacList.projectEndDate
        console.log(secondindexstartdate, 'secondindex12')
        this.editMaxDate = moment(secondindexstartdate).subtract(1, "days").format("YYYY-MM-DD")
      } else {
        this.editMinDate = this.MuacList.projectStartDate;
        var secondindexstartdate = this.MuacList.muaccampDetailList[index + 1]
        console.log(secondindexstartdate.startDate, 'secondinde23x')
        this.editMaxDate = moment(secondindexstartdate.startDate).subtract(1, "days").format("YYYY-MM-DD")
      }
    }

    else if (index == this.MuacList.muaccampDetailList.length - 1) {
      this.editMaxDate = this.MuacList.projectEndDate;
      var secondlastindexstartdate = this.MuacList.muaccampDetailList.filter((items, index) => index == this.MuacList.muaccampDetailList.length - 2)
      console.log(secondlastindexstartdate[0]?.endDate, 'secondindex')
      this.editMinDate = moment(secondlastindexstartdate[0]?.endDate).add(1, "days").format("YYYY-MM-DD")
    }

    else {
      var afterindex = this.MuacList.muaccampDetailList.filter((items, indexs) => indexs == index + 1)
      this.editMaxDate = moment(afterindex[0]?.startDate).subtract(1, "days").format("YYYY-MM-DD")
      var beforeindex = this.MuacList.muaccampDetailList.filter((items, indexs) => indexs == index - 1)
      this.editMinDate = moment(beforeindex[0]?.endDate).add(1, "days").format("YYYY-MM-DD")
    }

  }

  saveEditMuac() {
    let postBody = {
      activeStatus: 'A',
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId,
      projectMasterId: this.muacList.projectMasterId,
      projectName: this.muacList.projectName,
      projectStartDate: this.muacList.projectStartDate,
      projectEndDate: this.muacList.projectEndDate,
      branchName: this.muacList.branchName,
      branchOpenDate: this.muacList.branchOpenDate,
      branchCloseDate: this.muacList.branchCloseDate,
      muacCampDTOList: [{
        muacCampId: this.muacEditInfo.muacCampId,
        startDate: this.muacDetails.muacInfo[0].startDate,
        endDate: this.muacDetails.muacInfo[0].endDate,
        userId: this.sidebarService.userId,
        createdDateTime: new Date().toISOString().slice(0, 10)
      }],
    }
    console.log(postBody);

    if ((this.muacDetails.muacInfo[0].startDate) > (this.muacDetails.muacInfo[0].endDate) ||
      (this.muacDetails.muacInfo[0].startDate) == (this.muacDetails.muacInfo[0].endDate)) {
      this.showError('End date should be after the start date');
      return;
    }

    // API call for Edit muac
    this.muacService.saveMuac(postBody).subscribe((response: any) => {
      this.muacSave = response;
      console.log(this.muacSave);

      if (response.status === true) {
        this.showSuccess(response.message);
        this.muacModalDismiss();
        this.changeBranch(this.branchId);
      } else {
        this.showError(response.message);
      }

    })

  }


  muacModalDismiss() {
    this.modalReference.close();
    this.muacDetails.muacInfo = [{
      muacCampId: 0,
      startDate: '',
      endDate: '',
      userId: this.sidebarService.userId,
      createdDateTime: new Date().toISOString().slice(0, 10)
    }];
  }

  checkMuacDisabled() {
    let flag = true;

    if (this.muacDetails.muacInfo.length == 0) {
      flag = false;
    }

    this.muacDetails.muacInfo.forEach((item) => {
      if (!item.startDate || !item.endDate) {
        flag = false;
      }
    });

    return flag;
  }

  addMuacDisabled() {
    let flag = true;
    if (this.locationForm.value.branch == '') {
      flag = false;
    }

    if (this.branchId) {
      flag = true;
    }
    return flag;
  }

  saveMuac() {

    let postBody = {
      activeStatus: 'A',
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId,
      projectMasterId: this.muacList.projectMasterId,
      projectName: this.muacList.projectName,
      projectStartDate: this.muacList.projectStartDate,
      projectEndDate: this.muacList.projectEndDate,
      branchName: this.muacList.branchName,
      branchOpenDate: this.muacList.branchOpenDate,
      branchCloseDate: this.muacList.branchCloseDate,
      muacCampDTOList: this.muacDetails.muacInfo,
    }

    console.log(postBody);

    if ((this.muacDetails.muacInfo[0].startDate) > (this.muacDetails.muacInfo[0].endDate)) {
      this.showError('End date should be after the start date');
      return;
    }

    // API call for save muac
    this.muacService.saveMuac(postBody).subscribe((response: any) => {
      this.muacSave = response;
      console.log(this.muacSave);

      if (response.status === true) {
        this.showSuccess(response.message);
        this.muacModalDismiss();
        this.changeBranch(this.branchId);
      } else {
        this.showError(response.message);
      }

    })

  }

  getMinDate(muacList) {
    this.MuacList = muacList;
    if (muacList.muaccampDetailList.length == 0) {
      console.log('branchOpenDate', muacList?.branchOpenDate);
      console.log('branchCloseDate', muacList?.branchCloseDate);
      console.log('projectStartDate', muacList?.projectStartDate);
      console.log('projectEndDate', muacList?.projectEndDate);
      var projectStartDate = muacList?.projectStartDate;
      var branchOpenDate = muacList?.branchOpenDate;

      if (projectStartDate < branchOpenDate) {
        console.log("projectStartDate is lesser than branchOpenDate");
        this.setStartDate = branchOpenDate;
        console.log(this.setStartDate, 'setStartDate');
      }
      else if (projectStartDate > branchOpenDate) {
        console.log("projectStartDate is greater than branchOpenDate");
        this.setStartDate = projectStartDate;
        console.log(this.setStartDate, 'setStartDate');
      } else {
        console.log("both are equal");
        this.setStartDate = projectStartDate;
        console.log(this.setStartDate, 'setStartDate');
      }

      var dateString = this.setStartDate;
      var minDateToSet: any = moment(dateString).add(1, "days").format("YYYY-MM-DD");
      this.minDate = minDateToSet;


      var projectEndDate = muacList?.projectEndDate
      var branchCloseDate = muacList?.branchCloseDate

      if (projectEndDate < branchCloseDate) {
        console.log("projectEndDate is lesser than branchCloseDate");
        this.setEndDate = projectEndDate;
        console.log(this.setEndDate, 'setEndDate');
      }
      else if (projectEndDate > branchCloseDate) {
        console.log("projectEndDate is greater than branchCloseDate");
        this.setEndDate = branchCloseDate;
        console.log(this.setEndDate, 'setEndDate');
      } else {
        console.log("both are equal");
        this.setEndDate = projectEndDate;
        console.log(this.setEndDate, 'setEndDate');
      }

      this.maxDate = this.setEndDate
    } else {
      let lastMuacDate = muacList?.muaccampDetailList
      const muacEndDate = lastMuacDate[lastMuacDate.length - 1];
      const muacEndDateSet = muacEndDate?.endDate
      console.log(muacEndDateSet);

      const muacDate = moment(muacEndDateSet).add(1, "days").format("YYYY-MM-DD")
      this.minDate = muacDate;

      var projectEndDate = muacList?.projectEndDate
      var branchCloseDate = muacList?.branchCloseDate

      if (projectEndDate < branchCloseDate) {
        console.log("projectEndDate is lesser than branchCloseDate");
        this.setEndDate = projectEndDate;
        console.log(this.setEndDate, 'setEndDate');
      }
      else if (projectEndDate > branchCloseDate) {
        console.log("projectEndDate is greater than branchCloseDate");
        this.setEndDate = branchCloseDate;
        console.log(this.setEndDate, 'setEndDate');
      } else {
        console.log("both are equal");
        this.setEndDate = projectEndDate;
        console.log(this.setEndDate, 'setEndDate');
      }

      this.maxDate = this.setEndDate
    }

  }

  addDays(numOfDays: number, date = new Date()) {
    date.setDate(date.getDate() + numOfDays);
    return date;
  }

  expectEndDate(e) {
    // var dtStartDate = new Date(e.target.value);
    // this.month = dtStartDate.getMonth() + 1;
    // this.day = dtStartDate.getDate() + 1;
    // this.year = dtStartDate.getFullYear();
    if (this.month < 10) this.month = '0' + this.month.toString();
    if (this.day < 10) this.day = '0' + this.day.toString();
    // var maxDate = this.year + '-' + this.month + '-' + this.day;
    this.selStartDate = moment(this.addDays(1, new Date(e.target.value))).format('YYYY-MM-DD');
    console.log(this.selStartDate, 'selstartdate');
  }

  deleteMuac(item, i) {
    const post = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId,
      muacCampId: item.muacCampId,
      status: 'D',
      userId: this.sidebarService.userId,
      createdDateTime: item.startDate
    }

    console.log(post);

    if (i === (this.muacList.muaccampDetailList.length - 1)) {
      if (confirm('Do you want to delete muac camp :' + item.campNumber)) {
        this.muacService.deleteMuac(post).subscribe((response: any) => {
          if (response.status === true) {
            this.muacList.muaccampDetailList.splice(i, 1);
            this.showSuccess(response.message);
          }

          else {
            this.showError(response.message);
          }

        })
      }
    }

    else {
      this.showError('Always delete last one');
    }
  }

  showSuccess(message) {
    this.toaster.success(message, 'Muac Camp', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Muac Camp', {
      timeOut: 3000,
    });
  }

  restrictTypeOfDate() {
    return false;
  }
}
