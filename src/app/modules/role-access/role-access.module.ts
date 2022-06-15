import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleAccessRoutingModule } from './role-access-routing.module';
import { RoleAccessComponent } from './role-access.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../shared/loader/loader.module';

@NgModule({
  declarations: [RoleAccessComponent],
  imports: [
    CommonModule,
    RoleAccessRoutingModule,
    ReactiveFormsModule, LoaderModule
  ]
})
export class RoleAccessModule { }
