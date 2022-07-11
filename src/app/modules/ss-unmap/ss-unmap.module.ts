import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsUnmapRoutingModule } from './ss-unmap-routing.module';
import { SsUnmapComponent } from './ss-unmap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ssUnmapFilterPipe } from '../shared/ss-unmap-search.pipe';


@NgModule({
  declarations: [SsUnmapComponent, ssUnmapFilterPipe],
  imports: [
    CommonModule,
    SsUnmapRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule, FormsModule
  ]
})
export class SsUnmapModule { }
