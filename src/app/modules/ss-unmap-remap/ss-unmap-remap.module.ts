import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsUnmapRemapRoutingModule } from './ss-unmap-remap-routing.module';
import { SsUnmapRemapComponent } from './ss-unmap-remap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [SsUnmapRemapComponent],
  imports: [
    CommonModule,
    SsUnmapRemapRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class SsUnmapRemapModule { }
