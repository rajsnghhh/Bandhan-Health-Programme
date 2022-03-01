
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { MuacRegisterService } from '../muac-register.service';

@Component({
  selector: 'app-muac-register-create',
  templateUrl: './muac-register-create.component.html',
  styleUrls: ['./muac-register-create.component.css']
})
export class MuacRegisterCreateComponent implements OnInit {
  muacList: any;
  muacCampList: any;
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
  loader: boolean = false;


  constructor(private http: HttpService, private muacService: MuacRegisterService,
    private modalService: NgbModal, private toaster: ToastrService, private router: Router) { }

  ngOnInit(): void {

    this.muacDetails.muacInfo.push({
      muacCampId: 0,
      startDate: '',
      endDate: '',
      userId: 100,
      createdDateTime: new Date().toISOString().slice(0, 10)
    });

    let obj = {
      activeStatus: 'A',
      dataAccessDTO: this.http.dataAccessDTO,
      id: 1
    }

    //API call for viewing muacList
    setTimeout(() => {
      this.muacService.muacCampList(obj).subscribe((response: any) => {
        this.loader = true;
        this.muacList = response.responseObject;
        this.muacCampList = response.responseObject.muaccampDetailList;
        console.log(this.muacList);
        this.getMinDate(this.muacList);
      },
        (err) => {
          this.loader = true;
        })
    }, 1000);

  }

  createModal(createMuac) {
    this.modalContent = '';
    this.modalReference = this.modalService.open(createMuac, {
      windowClass: 'createMuac',
    });
  }

  editModal(editMuac, item) {
    this.muacEditInfo = item;
    this.muacDetails.muacInfo[0].startDate = item.startDate;
    this.muacDetails.muacInfo[0].endDate = item.endDate;
    this.modalContent = '';
    this.modalReference = this.modalService.open(editMuac, {
      windowClass: 'editMuac',
    });

    var index = this.MuacList.muaccampDetailList.findIndex(function (items) { return items.muacCampId === item.muacCampId })
    console.log(index, 'index')

    if (index == 0) {
      this.editMinDate = this.ProjectStartDate;
      var secondindexstartdate = this.MuacList.muaccampDetailList.filter((items, index) => index == 1)
      console.log(secondindexstartdate[0]?.startDate, 'secondindex')
      this.editMaxDate = moment(secondindexstartdate[0]?.startDate).subtract(1, "days").format("YYYY-MM-DD")
    }

    else if (index == this.MuacList.muaccampDetailList.length - 1) {
      this.editMaxDate = this.ProjectEndDate;
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

  muacModalDismiss() {
    this.modalReference.close();
    this.muacDetails.muacInfo = [{
      muacCampId: 0,
      startDate: '',
      endDate: '',
      userId: 100,
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

  saveMuac() {

    let postBody = {
      activeStatus: 'A',
      dataAccessDTO: this.http.dataAccessDTO,
      branchId: 1,
      projectMasterId: this.muacList.projectMasterId,
      projectName: this.muacList.projectName,
      projectStartDate: this.muacList.projectStartDate,
      projectEndDate: this.muacList.projectEndDate,
      branchName: this.muacList.branchName,
      branchOpenDate: this.muacList.branchOpenDate,
      branchCloseDate: this.muacList.branchCloseDate,
      muacCampDTOList: this.muacDetails.muacInfo,
    }

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
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentUrl]);
        });
        this.muacDetails.muacInfo = [{
          muacCampId: 0,
          startDate: '',
          endDate: '',
          userId: 100,
          createdDateTime: new Date().toISOString().slice(0, 10)
        }];

      } else {
        this.showError(response.message);
      }

    })

  }

  getMinDate(muacList) {
    console.log('projectStartDate', muacList.projectStartDate);
    console.log('projectEndDate', muacList.projectEndDate);
    this.ProjectStartDate = muacList.projectStartDate
    this.ProjectEndDate = muacList.projectEndDate
    this.MuacList = muacList
    var dateString = muacList.projectStartDate;
    var projectDate: any = moment(dateString).add(1, "days").format("YYYY-MM-DD")

    this.minDate = projectDate;
    this.maxDate = muacList.projectEndDate

    let lastMuacDate = muacList.muaccampDetailList
    const muacEndDate = lastMuacDate[lastMuacDate.length - 1];
    const muacEndDateSet = muacEndDate?.endDate
    const muacDate = moment(muacEndDateSet).add(1, "days").format("YYYY-MM-DD")

    if (muacList.muaccampDetailList.length == 0) {
      this.minDate = projectDate;
    }
    else {
      this.minDate = muacDate;
    }

  }

  expectEndDate(e) {
    var dtStartDate = new Date(e.target.value);
    this.month = dtStartDate.getMonth() + 1;
    this.day = dtStartDate.getDate() + 1;
    this.year = dtStartDate.getFullYear();
    if (this.month < 10) this.month = '0' + this.month.toString();
    if (this.day < 10) this.day = '0' + this.day.toString();
    var maxDate = this.year + '-' + this.month + '-' + this.day;
    this.selStartDate = maxDate;
  }

  saveEditMuac() {
    let postBody = {
      activeStatus: 'A',
      dataAccessDTO: this.http.dataAccessDTO,
      branchId: 1,
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
        userId: 100,
        createdDateTime: new Date().toISOString().slice(0, 10)
      }],
    }
    console.log(postBody);

    if ((this.muacDetails.muacInfo[0].startDate) > (this.muacDetails.muacInfo[0].endDate)) {
      this.showError('End date should be after the start date');
      return;
    }

    // API call for Edit muac
    this.muacService.saveMuac(postBody).subscribe((response: any) => {
      this.muacSave = response;
      console.log(this.muacSave);

      if (response.status === true) {
        this.showSuccess(response.message);
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentUrl]);
        });
        this.muacDetails.muacInfo = [{
          muacCampId: 0,
          startDate: '',
          endDate: '',
          userId: 100,
          createdDateTime: new Date().toISOString().slice(0, 10)
        }];

      } else {
        this.showError(response.message);
      }

    })

  }

  deleteMuac(item, i) {
    const post = {
      activeStatus: "A",
      dataAccessDTO: this.http.dataAccessDTO,
      branchId: 1,
      muacCampId: item.muacCampId,
      status: 'D',
      userId: 100,
      createdDateTime: item.startDate
    }

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
}
