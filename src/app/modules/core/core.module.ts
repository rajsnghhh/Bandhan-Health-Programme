import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [CoreComponent, DashboardComponent],
  imports: [
    CommonModule,
    CoreRoutingModule, MatCardModule
  ]

})
export class CoreModule { }
