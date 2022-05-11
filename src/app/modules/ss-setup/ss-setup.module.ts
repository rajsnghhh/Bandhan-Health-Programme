import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsSetupRoutingModule } from './ss-setup-routing.module';
import { SsSetupComponent } from './ss-setup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SsSetupComponent],
  imports: [
    CommonModule,
    SsSetupRoutingModule,
    ReactiveFormsModule
  ]
})
export class SsSetupModule { }
