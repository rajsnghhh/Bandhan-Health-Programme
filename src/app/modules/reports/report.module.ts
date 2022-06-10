import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { LoaderModule } from '../shared/loader/loader.module';
import { GeographicalReportHomeComponent } from './geographical-report-home/geographical-report-home.component';


@NgModule({
  declarations: [GeographicalReportHomeComponent],
  imports: [
    CommonModule,
    ReportRoutingModule, LoaderModule
  ]
})
export class ReportModule { }
