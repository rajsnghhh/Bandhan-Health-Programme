import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { LoaderModule } from '../shared/loader/loader.module';
@NgModule({
  declarations: [CoreComponent, DashboardComponent],
  imports: [
    CommonModule,
    CoreRoutingModule, MatCardModule, LoaderModule
  ]

})
export class CoreModule { }
