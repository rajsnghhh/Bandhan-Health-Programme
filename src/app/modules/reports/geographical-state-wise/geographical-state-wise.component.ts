import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-geographical-state-wise',
  templateUrl: './geographical-state-wise.component.html',
  styleUrls: ['./geographical-state-wise.component.css']
})
export class GeographicalStateWiseComponent implements OnInit {
  stateWiseList: Array<any> = [];
  loader: boolean = true;
  projectCode: any;
  donorName: any;

  constructor(@Optional() public dialogRef: MatDialogRef<GeographicalStateWiseComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any, private httpService: HttpService,
    private http: HttpClient,) { }

  ngOnInit(): void {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      projectMasterId: this.data.projectMasterId
    }
    this.loader = false;
    this.http.post(`${this.httpService.baseURL}report/getStateWiseDetails`, Dto).subscribe((res: any) => {
      this.projectCode = res.responseObject?.stateWiseList[0].project_code
      this.donorName = res.responseObject?.stateWiseList[0].donor_name
      if (res.responseObject?.stateWiseList[0].stateName != null) {
        this.stateWiseList = res.responseObject?.stateWiseList;
      }
      console.log(res)
      this.loader = true;
    }, error => {
      this.loader = true;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
