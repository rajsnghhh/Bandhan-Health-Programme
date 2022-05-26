import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictSetupRoutingModule } from './district-setup-routing.module';
import { DistrictSetupComponent } from './district-setup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [DistrictSetupComponent],
  imports: [
    CommonModule,
    DistrictSetupRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class DistrictSetupModule { }
