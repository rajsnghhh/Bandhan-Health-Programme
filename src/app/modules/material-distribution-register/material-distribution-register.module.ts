import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDistributionRegisterRoutingModule } from './material-distribution-register-routing.module';
import { MaterialDistributionRegisterComponent } from './material-distribution-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [MaterialDistributionRegisterComponent],
  imports: [
    CommonModule,
    MaterialDistributionRegisterRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class MaterialDistributionRegisterModule { }
