import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillageSetupRoutingModule } from './village-setup-routing.module';
import { VillageSetupComponent } from './village-setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [VillageSetupComponent],
  imports: [
    CommonModule,
    VillageSetupRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
  ]
})
export class VillageSetupModule { }
