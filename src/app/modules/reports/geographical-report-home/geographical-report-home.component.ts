import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-geographical-report-home',
  templateUrl: './geographical-report-home.component.html',
  styleUrls: ['./geographical-report-home.component.css']
})
export class GeographicalReportHomeComponent implements OnInit {
  geographicalOutreachList: Array<any> = [];
  stateWiseList: Array<any> = [];
  showHideTable: boolean = false;
  loader: boolean = true;

  constructor(private httpService: HttpService,
    private http: HttpClient, private toaster: ToastrService,) { }

  ngOnInit(): void {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
    }
    this.loader = false;
    this.http.post(`${this.httpService.baseURL}report/getGeographicalOutreach`, Dto).subscribe((res: any) => {
      this.geographicalOutreachList = res.responseObject?.geographicalOutreachList;
      this.loader = true;
    });

  }

  collaps(value) {
    let Dto1 = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      projectMasterId: value
    }
    this.loader = false;
    this.http.post(`${this.httpService.baseURL}report/getStateWiseDetails`, Dto1).subscribe((res: any) => {
      this.stateWiseList = res.responseObject?.stateWiseList;
      this.loader = true;
    });

    this.showHideTable = !this.showHideTable
  }
}
