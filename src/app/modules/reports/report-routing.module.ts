import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeneficiaryInfoComponent } from './beneficiary-info/beneficiary-info.component';
import { GeographicalReportHomeComponent } from './geographical-report-home/geographical-report-home.component';

const routes: Routes = [{ path: 'geographicalReport', component: GeographicalReportHomeComponent },
{ path: 'beneficiaryInfo', component: BeneficiaryInfoComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
