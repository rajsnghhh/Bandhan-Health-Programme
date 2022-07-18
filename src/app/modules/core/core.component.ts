import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart } from 'chart.js'
import { ToastrService } from 'ngx-toastr';
import { HttpService } from './http/http.service';
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit, AfterViewInit {
  canvas1: any;
  ctx1: any;
  @ViewChild('mychart1') mychart1: any;
  canvas2: any;
  ctx2: any;
  @ViewChild('mychart2') mychart2: any;
  loader: boolean = true;
  Dto = {
    dataAccessDTO: this.httpService.dataAccessDTO,
  }
  totalDonor: any;
  totalBlock: any;
  totalBranch: any;
  totalDistrict: any;
  totalProjectMasterId: any;
  totalRegion: any;
  totalStateName: any;
  totalVillageLocality: any;
  totalFamilyCount: any;
  totalPemCumulative: any;
  totalLmCumulative: any;
  totalPwCumulative: any;
  constructor(private httpService: HttpService, public dialog: MatDialog,
    private http: HttpClient, private toaster: ToastrService,) { }

  ngOnInit() {
    this.loader = false;

    this.http.post(`${this.httpService.baseURL}report/getGeographicalOutreach`, this.Dto).subscribe((res: any) => {
      let donorName: Array<any> = [];
      let block: Array<any> = [];
      let branch: Array<any> = [];
      let district: Array<any> = [];
      let projectMasterId: Array<any> = [];
      let region: Array<any> = [];
      let stateName: any = [];
      let villageLocality: Array<any> = [];
      res.responseObject?.geographicalOutreachList.map(i => {
        donorName.push(i.donorName);
        block.push(i.block);
        branch.push(i.branch);
        district.push(i.district);
        projectMasterId.push(i.projectMasterId);
        region.push(i.region);
        stateName += i.stateName + ',';
        villageLocality.push(i.villageLocality);
      })
      let arr = new Array();
      arr = stateName.slice(0, (stateName.length - 1)).split(",");
      let removeNullState = arr.filter((i) => i != 'null');
      this.totalDonor = [...new Set(donorName)].length;
      this.totalBlock = block.reduce((a, b) => a + b, 0);
      this.totalBranch = branch.reduce((a, b) => a + b, 0);
      this.totalDistrict = district.reduce((a, b) => a + b, 0);
      this.totalProjectMasterId = [...new Set(projectMasterId)].length;
      this.totalRegion = region.reduce((a, b) => a + b, 0);
      this.totalStateName = [...new Set(removeNullState)].length;
      this.totalVillageLocality = villageLocality.reduce((a, b) => a + b, 0);
    }, error => {
    });



  }

  ngAfterViewInit(): void {
    this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoProject`, this.Dto).subscribe((res: any) => {
      let familyCount: Array<any> = [];
      let pemCumulative: Array<any> = [];
      let lmCumulative: Array<any> = [];
      let pwCumulative: Array<any> = [];
      res.responseObject.projectWiseBeneficiaryList.map((i) => {
        familyCount.push(i.totalFamilyCount);
        pemCumulative.push(i.pemCumulative);
        lmCumulative.push(i.lmCumulative);
        pwCumulative.push(i.pwCumulative);
      })
      this.totalFamilyCount = familyCount.reduce((a, b) => a + b, 0);
      this.totalPemCumulative = pemCumulative.reduce((a, b) => a + b, 0);
      this.totalLmCumulative = lmCumulative.reduce((a, b) => a + b, 0);
      this.totalPwCumulative = pwCumulative.reduce((a, b) => a + b, 0);
      console.log(this.totalFamilyCount, this.totalPemCumulative, this.totalLmCumulative, this.totalPwCumulative);
      this.doughnutChart();
      this.loader = true;
    });

    this.barChart();

  }

  doughnutChart() {
    this.canvas1 = this.mychart1.nativeElement;
    this.ctx1 = this.canvas1.getContext('2d');

    const doughnutdata = {
      labels: [
        'Total Family',
        'PEM',
        'LM',
        'PW',
      ],
      datasets: [{
        data: [this.totalFamilyCount, this.totalPemCumulative, this.totalLmCumulative, this.totalPwCumulative],
        backgroundColor: [
          'rgb(75, 192, 192)',
          'rgb(245, 57, 97)',
          'rgb(20, 154, 245)',
          'rgb(255, 189, 32)',

        ],
        hoverOffset: 4
      }]
    };

    new Chart(this.ctx1, {
      type: 'doughnut',
      data: doughnutdata
    });
  }

  barChart() {
    this.canvas2 = this.mychart2.nativeElement;
    this.ctx2 = this.canvas2.getContext('2d');

    const bardata = {
      labels: [''],
      datasets: [{
        label: 'Child Below 5 Years',
        data: [27],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2
      }
        , {
        label: 'Child Below 2 Years',
        data: [59],
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 2
      }, {
        label: 'Child PEM',
        data: [80],
        backgroundColor: "rgba(255, 205, 86, 0.6)",
        borderColor: 'rgb(255, 205, 86)',
        borderWidth: 2
      }
        , {
        label: 'Adolescent Girls',
        data: [64],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2
      }
      ]
    };

    new Chart(this.ctx2, {
      type: 'bar',
      data: bardata,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              min: 0, max: 100
            }
          }]
        }
      },
    });
  }


}
