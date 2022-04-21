import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionBranchSetupRoutingModule } from './region-branch-setup-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RegionBranchHomeComponent } from './region-branch-home/region-branch-home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RegionSetupComponent } from './region-setup/region-setup.component';
import { BranchSetupComponent } from './branch-setup/branch-setup.component'

@NgModule({
  declarations: [RegionBranchHomeComponent, RegionSetupComponent, BranchSetupComponent],
  imports: [
    CommonModule,
    RegionBranchSetupRoutingModule, ReactiveFormsModule, FormsModule,
    MatTabsModule, MatNativeDateModule, MatDialogModule, MatMenuModule,
    MatIconModule
  ]
})
export class RegionBranchSetupModule { }
