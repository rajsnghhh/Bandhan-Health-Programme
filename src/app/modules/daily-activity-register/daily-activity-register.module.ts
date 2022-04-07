import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyActivityRegisterRoutingModule } from './daily-activity-register-routing.module';
import { DailyActivityRegisterComponent } from './daily-activity-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DailyActivityRegisterComponent],
  imports: [
    CommonModule,
    DailyActivityRegisterRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbPaginationModule
  ]
})
export class DailyActivityRegisterModule { }
