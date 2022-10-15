import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDistributionRegisterRoutingModule } from './material-distribution-register-routing.module';
import { MaterialDistributionRegisterComponent } from './material-distribution-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { materialDistributionFilterPipe } from '../shared/material-distribution-search.pipe';

@NgModule({
  declarations: [MaterialDistributionRegisterComponent, materialDistributionFilterPipe],
  imports: [
    CommonModule,
    MaterialDistributionRegisterRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule
  ]
})
export class MaterialDistributionRegisterModule { }
