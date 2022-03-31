import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../core/http/http.service';
import { PwHistoryComponent } from '../pw-history/pw-history.component';
import { PwViewComponent } from '../pw-view/pw-view.component';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SinglePwListComponent>,
    public dialog: MatDialog, private httpService: HttpService,) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data.singlePregnantWomenList);
    this.pwName = this.data.singlePregnantWomenList.firstName + ' ' + this.data.singlePregnantWomenList.middleName + ' ' + this.data.singlePregnantWomenList.lastName;
    this.husbandOrGuardianName = this.data.singlePregnantWomenList.husbandOrGuardianName;
    this.familyNumber = this.data.singlePregnantWomenList.familyNumber;
    this.pregnantWomanRegisterDetailList = this.data.singlePregnantWomenList.pregnantWomanRegisterDetailList;
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
      this.pregnantWomanRegisterDetailList = res.responseObject.pregnantWomanList[this.data.index].pregnantWomanRegisterDetailList
    })
  }

  openPwView(i) {
    const dialogRef = this.dialog.open(PwViewComponent, {
      width: '1000px',
      height: '550px',
      data: {
        createMode: false,
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

  openCreatePage() {
    const dialogRef = this.dialog.open(PwViewComponent, {
      width: '1000px',
      height: '550px',
      data: {
        createMode: true,
        pregnantWomanRegisterData: this.data.singlePregnantWomenList
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPregnantWomenList(this.data.villageMasterId)
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
