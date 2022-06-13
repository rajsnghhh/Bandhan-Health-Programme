import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleAccessRoutingModule } from './role-access-routing.module';
import { RoleAccessComponent } from './role-access.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [RoleAccessComponent],
  imports: [
    CommonModule,
    RoleAccessRoutingModule,
    ReactiveFormsModule,
    MatExpansionModule,
    
  ]
})
export class RoleAccessModule { }
