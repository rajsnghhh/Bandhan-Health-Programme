import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { GeographicalStateWiseComponent } from '../geographical-state-wise/geographical-state-wise.component';

@Component({
  selector: 'app-geographical-report-home',
  templateUrl: './geographical-report-home.component.html',
  styleUrls: ['./geographical-report-home.component.css']
})
export class GeographicalReportHomeComponent implements OnInit {
  geographicalOutreachList: Array<any> = [];
  stateWiseList: Array<any> = [];
  loader: boolean = true;

  constructor(private httpService: HttpService, public dialog: MatDialog,
    private http: HttpClient, private toaster: ToastrService,) { }

  ngOnInit(): void {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
    }
    this.loader = false;
    this.http.post(`${this.httpService.baseURL}report/getGeographicalOutreach`, Dto).subscribe((res: any) => {
      this.geographicalOutreachList = res.responseObject?.geographicalOutreachList;
      this.loader = true;
    }, error => {
      this.showError('Error');
      this.loader = true;
    });

  }

  collaps(value) {
    const dialogRef = this.dialog.open(GeographicalStateWiseComponent, {
      width: '700px',
      height: '400px',
      data: { projectMasterId: value }
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }

  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
}
