import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsUnmapRoutingModule } from './ss-unmap-routing.module';
import { SsUnmapComponent } from './ss-unmap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [SsUnmapComponent],
  imports: [
    CommonModule,
    SsUnmapRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class SsUnmapModule { }
