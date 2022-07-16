import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'
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

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.doughnutChart();
    this.barChart();

  }

  doughnutChart() {
    this.canvas1 = this.mychart1.nativeElement;
    this.ctx1 = this.canvas1.getContext('2d');

    const doughnutdata = {
      labels: [
        'PEM',
        'LM',
        'PW'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(245, 57, 97)',
          'rgb(20, 154, 245)',
          'rgb(255, 189, 32)'
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
        backgroundColor: "rgba(255, 205, 86, 0.5)",
        borderColor: 'rgb(255, 205, 86)',
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
