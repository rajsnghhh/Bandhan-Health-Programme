import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemapUserHhRoutingModule } from './remap-user-hh-routing.module';
import { RemapUserHhComponent } from './remap-user-hh.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../shared/loader/loader.module';


@NgModule({
  declarations: [RemapUserHhComponent],
  imports: [
    CommonModule,
    RemapUserHhRoutingModule,
    ReactiveFormsModule, LoaderModule
  ]
})
export class RemapUserHhModule { }
