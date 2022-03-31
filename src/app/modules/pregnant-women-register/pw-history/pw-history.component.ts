import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-pw-history',
  templateUrl: './pw-history.component.html',
  styleUrls: ['./pw-history.component.css']
})
export class PwHistoryComponent implements OnInit {

  pregnantWomenHistory: Array<any> = [];

  constructor(private http: HttpClient, private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PwHistoryComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      familyDetailId: this.data.familyDetailId,
    }
    this.http.post(`${this.httpService.baseURL}pwr/getFamilyDetailHistory`, Dto).subscribe((res: any) => {
      this.pregnantWomenHistory = res.responseObject.familyDetailHistory;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
