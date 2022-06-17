import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { LoaderModule } from '../shared/loader/loader.module';
import { GeographicalReportHomeComponent } from './geographical-report-home/geographical-report-home.component';
import { BeneficiaryInfoComponent } from './beneficiary-info/beneficiary-info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GeographicalStateWiseComponent } from './geographical-state-wise/geographical-state-wise.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [GeographicalReportHomeComponent, BeneficiaryInfoComponent, GeographicalStateWiseComponent],
  imports: [
    CommonModule,
    ReportRoutingModule, LoaderModule, ReactiveFormsModule,
    FormsModule, MatNativeDateModule, MatDialogModule,
  ]
})
export class ReportModule { }
