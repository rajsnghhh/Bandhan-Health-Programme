import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchVillageMapRoutingModule } from './branch-village-map-routing.module';
import { BranchVillageMapComponent } from './branch-village-map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [BranchVillageMapComponent],
  imports: [
    CommonModule,
    BranchVillageMapRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class BranchVillageMapModule { }
