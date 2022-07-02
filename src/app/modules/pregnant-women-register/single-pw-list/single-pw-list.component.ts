import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { PwHistoryComponent } from '../pw-history/pw-history.component';
import { PwViewComponent } from '../pw-view/pw-view.component';
import * as moment from 'moment';
@Component({
  selector: 'app-single-pw-list',
  templateUrl: './single-pw-list.component.html',
  styleUrls: ['./single-pw-list.component.css']
})
export class SinglePwListComponent implements OnInit {

  pwName: string;
  familyNumber: any;
  husbandOrGuardianName: any;
  pregnantWomanRegisterDetailList: Array<any> = [];
  updateMode: boolean;
  deleteMode: boolean;
  createMode: boolean;
  diffLmpAndCurrent: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SinglePwListComponent>,
    public dialog: MatDialog, private httpService: HttpService, private confirmationDialogService: ConfirmationDialogService,
    private http: HttpClient, private toaster: ToastrService, private sidebarService: SidebarService,) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data.singlePregnantWomenList);
    this.pwName = this.data.singlePregnantWomenList.firstName + ' ' + this.data.singlePregnantWomenList.middleName + ' ' + this.data.singlePregnantWomenList.lastName;
    this.husbandOrGuardianName = this.data.singlePregnantWomenList.husbandOrGuardianName;
    this.familyNumber = this.data.singlePregnantWomenList.familyNumber;
    this.data.singlePregnantWomenList.pregnantWomanRegisterDetailList.forEach((item) => {
      this.pregnantWomanRegisterDetailList.push({
        "abortion": item.abortion,
        "actualDateOfDelivery": (item.actualDateOfDelivery == null) ? (item.lastMenstrualPeriod == null)
          ? '-'
          : ((moment(new Date(moment(new Date()).format('YYYY-MM-DD'))).diff(new Date(item.lastMenstrualPeriod), 'months', true).toFixed(2)) + " Month")
          : item.actualDateOfDelivery,
        "antenatalCheckup": item.antenatalCheckup,
        "delivery": item.delivery,
        "expectedDateOfDelivery": item.expectedDateOfDelivery,
        "firstAncCheckup": item.firstAncCheckup,
        "fourthAncCheckup": item.fourthAncCheckup,
        "initialWeight": item.initialWeight,
        "lastMenstrualPeriod": item.lastMenstrualPeriod,
        "livebirthOrStillbirth": item.livebirthOrStillbirth,
        "miscarriage": item.miscarriage,
        "placeOfDelivery": item.placeOfDelivery,
        "pregnancyComplication": item.pregnancyComplication,
        "pregnantWomanRegisterId": item.pregnantWomanRegisterId,
        "secondAncCheckup": item.secondAncCheckup,
        "thirdAncCheckup": item.thirdAncCheckup,
        "weightBeforeDelivery": item.weightBeforeDelivery
      })
    });

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 129)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 129)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 129)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
  }

  /* get the all Pregnant Women List */
  getPregnantWomenList(villageMasterId = null) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: villageMasterId
    }
    this.httpService.getPregnantWomenList(req).subscribe((res) => {
      this.pwName = this.data.singlePregnantWomenList.firstName + ' ' + this.data.singlePregnantWomenList.middleName + ' ' + this.data.singlePregnantWomenList.lastName;
      this.husbandOrGuardianName = this.data.singlePregnantWomenList.husbandOrGuardianName;
      this.familyNumber = this.data.singlePregnantWomenList.familyNumber;
      this.pregnantWomanRegisterDetailList = res?.responseObject?.pregnantWomanList.find(x => x.familyDetailId == this.data.id)?.pregnantWomanRegisterDetailList;
      console.log(this.pregnantWomanRegisterDetailList, 'listpage');
    })
  }

  openPwEdit(i) {
    const dialogRef = this.dialog.open(PwViewComponent, {
      width: '1000px',
      height: '550px',
      data: {
        pregnantWomanRegisterData: this.data.singlePregnantWomenList.pregnantWomanRegisterDetailList[i],
        familyDetailId: this.data.singlePregnantWomenList.familyDetailId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPregnantWomenList(this.data.villageMasterId)
    });
  }

  ViewPw(i) {
    const dialogRef = this.dialog.open(PwViewComponent, {
      width: '1000px',
      height: '550px',
      data: {
        viewMode: true,
        pregnantWomanRegisterData: this.data.singlePregnantWomenList.pregnantWomanRegisterDetailList[i],
        familyDetailId: this.data.singlePregnantWomenList.familyDetailId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPregnantWomenList(this.data.villageMasterId)
    });
  }

  openHistory() {
    const dialogRef = this.dialog.open(PwHistoryComponent, {
      width: '1000px',
      height: '550px',
      data: { familyDetailId: this.data.singlePregnantWomenList.familyDetailId }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // openCreatePage() {
  //   const dialogRef = this.dialog.open(PwViewComponent, {
  //     width: '1000px',
  //     height: '550px',
  //     data: {
  //       pregnantWomanRegisterData: this.data.singlePregnantWomenList
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.getPregnantWomenList(this.data.villageMasterId)
  //   });
  // }

  deletePregnency(value, i) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      familyDetailId: this.data.singlePregnantWomenList.familyDetailId,
      pregnantWomanStatus: 'N',
      pregnantWomanRegisterId: value.pregnantWomanRegisterId
    }
    if (i === (this.pregnantWomanRegisterDetailList.length - 1)) {
      this.confirmationDialogService.confirm('', 'Do you want to make as wrong entry ?').then(() => {
        this.http.post(`${this.httpService.baseURL}pwr/updateFamilyPregnantWomanDetail`, Dto).subscribe((res) => {
          this.dialogRef.close();
          this.showSuccess('Delete');
          this.getPregnantWomenList(this.data.villageMasterId);
        })
      }).catch(() => '');
    } else {
      this.showError('Error');
    }

  }

  closeDialog() {
    this.dialogRef.close();
  }

  showSuccess(message) {
    this.toaster.success(message, 'Pregnant Women Register Detete', {
      timeOut: 3000,
    });
  }
  showError(message) {
    this.toaster.error(message, 'Always delete last one', {
      timeOut: 3000,
    });
  }
}
