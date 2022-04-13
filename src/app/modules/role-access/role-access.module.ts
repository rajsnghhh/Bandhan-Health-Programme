import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleAccessRoutingModule } from './role-access-routing.module';
import { RoleAccessComponent } from './role-access.component';


@NgModule({
  declarations: [RoleAccessComponent],
  imports: [
    CommonModule,
    RoleAccessRoutingModule
  ]
})
export class RoleAccessModule { }
