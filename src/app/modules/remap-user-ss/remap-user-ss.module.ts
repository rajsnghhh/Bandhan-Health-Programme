import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemapUserSsRoutingModule } from './remap-user-ss-routing.module';
import { RemapUserSsComponent } from './remap-user-ss.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../shared/loader/loader.module';


@NgModule({
  declarations: [RemapUserSsComponent],
  imports: [
    CommonModule,
    RemapUserSsRoutingModule,
    ReactiveFormsModule, LoaderModule, FormsModule
  ]
})
export class RemapUserSsModule { }
