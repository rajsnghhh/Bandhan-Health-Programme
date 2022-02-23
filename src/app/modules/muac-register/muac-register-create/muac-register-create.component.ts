import { HttpClient } from '@angular/common/http';
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
  start: any;
  end: any;
  selStartDate: any;
  month: any;
  day: any;
  year: any;


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
    this.muacService.muacCampList(obj).subscribe((response: any) => {
      this.muacList = response.responseObject;
      this.muacCampList = response.responseObject.muaccampDetailList;
      console.log(this.muacList);
      this.getMinDate(this.muacList);
    })
  }

  openModal(createMuac) {
    this.modalContent = '';
    this.modalReference = this.modalService.open(createMuac, {
      windowClass: 'createMuac',
    });
  }

  // addMoreMuac() {
  //   this.muacDetails.muacInfo.forEach((item) => {
  //     this.start = item.startDate;
  //     this.end = item.endDate;
  //   })

  //   if (this.start == '') {
  //     console.log('error');
  //   } else if (this.end == '') {
  //     console.log('error');
  //   } else {
  //     this.muacDetails.muacInfo.push({
  //       muacCampId: 0,
  //       startDate: '',
  //       endDate: '',
  //       userId: 100,
  //       createdDateTime: new Date().toISOString().slice(0, 10)
  //     });
  //   }

  // }

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

  // removeMuac(i) {
  //   this.muacDetails.muacInfo.splice(i, 1)
  // }

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
    console.log('raj', this.muacList);
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
      muacCampDTOList: this.muacDetails.muacInfo
    }
    console.log(postBody);
    //API call for save muac
    this.muacService.saveMuac(postBody).subscribe((response: any) => {
      this.muacSave = response;
      console.log(this.muacSave);

      if (response.message == 'Success') {
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
    var dateString = muacList.projectStartDate;
    var projectDate = moment(dateString).add(1, "days").format("YYYY-MM-DD")

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

  expect(e) {
    var dtStartDate = new Date(e.target.value);
    this.month = dtStartDate.getMonth() + 1;
    this.day = dtStartDate.getDate() + 1;
    this.year = dtStartDate.getFullYear();
    if (this.month < 10) this.month = '0' + this.month.toString();
    if (this.day < 10) this.day = '0' + this.day.toString();
    var maxDate = this.year + '-' + this.month + '-' + this.day;
    this.selStartDate = maxDate;
  }

  editMuac(item, createMuac) {
    this.modalContent = '';
    this.modalReference = this.modalService.open(createMuac, {
      windowClass: 'createMuac',
    });
    console.log(item);
    this.muacDetails.muacInfo[0].startDate = item.startDate;
    this.muacDetails.muacInfo[0].endDate = item.endDate;


  }

  // showSuccess(message) {
  //   this.toaster.success(message, 'Muac Camp Save', {
  //     timeOut: 3000,
  //   });
  // }

  // showError(message) {
  //   this.toaster.error(message, 'Muac Camp Save', {
  //     timeOut: 3000,
  //   });
  // }

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
      if (confirm('Do you want to delete household :' + item.campNumber)) {
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
