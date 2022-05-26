import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsUnmapRoutingModule } from './ss-unmap-routing.module';
import { SsUnmapComponent } from './ss-unmap.component';


@NgModule({
  declarations: [SsUnmapComponent],
  imports: [
    CommonModule,
    SsUnmapRoutingModule
  ]
})
export class SsUnmapModule { }
