import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHhSsRemapRoutingModule } from './user-hh-ss-remap-routing.module';
import { UserHhSsRemapHomeComponent } from './user-hh-ss-remap-home/user-hh-ss-remap-home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserHhSsRemapHomeComponent],
  imports: [
    CommonModule,
    UserHhSsRemapRoutingModule, ReactiveFormsModule, FormsModule,
  ]
})
export class UserHhSsRemapModule { }
