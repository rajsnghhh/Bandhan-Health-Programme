import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsSetupRoutingModule } from './ss-setup-routing.module';
import { SsSetupComponent } from './ss-setup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [SsSetupComponent],
  imports: [
    CommonModule,
    SsSetupRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class SsSetupModule { }
