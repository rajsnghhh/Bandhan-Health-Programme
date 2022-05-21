import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockSetupRoutingModule } from './block-setup-routing.module';
import { BlockSetupFormComponent } from './block-setup-form/block-setup-form.component';
import { BlockHomeComponent } from './block-home/block-home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { LoaderModule } from '../shared/loader/loader.module';


@NgModule({
  declarations: [BlockSetupFormComponent, BlockHomeComponent],
  imports: [
    CommonModule,
    BlockSetupRoutingModule, ReactiveFormsModule, FormsModule,
    MatTabsModule, MatNativeDateModule, MatDialogModule, MatMenuModule,
    MatIconModule, LoaderModule
  ]
})
export class BlockSetupModule { }
