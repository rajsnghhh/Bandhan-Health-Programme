import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { LoaderModule } from '../shared/loader/loader.module';
import { GeographicalReportHomeComponent } from './geographical-report-home/geographical-report-home.component';
import { BeneficiaryInfoComponent } from './beneficiary-info/beneficiary-info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GeographicalReportHomeComponent, BeneficiaryInfoComponent],
  imports: [
    CommonModule,
    ReportRoutingModule, LoaderModule, ReactiveFormsModule,
    FormsModule,
  ]
})
export class ReportModule { }
