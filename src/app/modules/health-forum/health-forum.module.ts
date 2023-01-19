import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthForumRoutingModule } from './health-forum-routing.module';
import { HealthForumComponent } from './health-forum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { healthForumFilterPipe } from '../shared/sidebar/health-forum-search.pipe';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LoaderModule } from '../shared/loader/loader.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { HealthForumAngularMatModalComponent } from './health-forum-angular-mat-modal/health-forum-angular-mat-modal.component';
import { MatTabsModule } from '@angular/material/tabs';
import { healthForumeventFilterPipe } from '../shared/sidebar/event-forum-seach.pipe';

@NgModule({
  declarations: [HealthForumComponent, healthForumFilterPipe, healthForumeventFilterPipe, HealthForumAngularMatModalComponent],
  imports: [
    CommonModule,
    HealthForumRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule, LoaderModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule, MatDialogModule, MatTabsModule,
  ]
})
export class HealthForumModule { }
