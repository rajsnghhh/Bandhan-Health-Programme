import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthForumRoutingModule } from './health-forum-routing.module';
import { HealthForumComponent } from './health-forum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { healthForumFilterPipe } from '../shared/sidebar/health-forum-search.pipe';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [HealthForumComponent, healthForumFilterPipe],
  imports: [
    CommonModule,
    HealthForumRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule, 
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class HealthForumModule { }
