import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeographicalReportHomeComponent } from './geographical-report-home/geographical-report-home.component';

const routes: Routes = [{ path: '', component: GeographicalReportHomeComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
