import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillageSetupRoutingModule } from './village-setup-routing.module';
import { VillageSetupComponent } from './village-setup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [VillageSetupComponent],
  imports: [
    CommonModule,
    VillageSetupRoutingModule,
    ReactiveFormsModule
  ]
})
export class VillageSetupModule { }
