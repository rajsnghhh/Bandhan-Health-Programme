import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
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


  constructor(private http: HttpService, private muacService: MuacRegisterService, private modalService: NgbModal) { }

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
    console.log(postBody)
    //API call for save muac
    this.muacService.saveMuac(postBody).subscribe((response: any) => {
      this.muacSave = response;
      console.log(this.muacSave);
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
    const muacEndDateSet = muacEndDate.endDate
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



}
