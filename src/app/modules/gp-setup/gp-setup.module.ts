import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GpSetupRoutingModule } from './gp-setup-routing.module';
import { GpHomeComponent } from './gp-home/gp-home.component';
import { GpSetupFormComponent } from './gp-setup-form/gp-setup-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { LoaderModule } from '../shared/loader/loader.module';


@NgModule({
  declarations: [GpHomeComponent, GpSetupFormComponent],
  imports: [
    CommonModule,
    GpSetupRoutingModule, ReactiveFormsModule, FormsModule,
    MatTabsModule, MatNativeDateModule, MatDialogModule, MatMenuModule,
    MatIconModule, LoaderModule
  ]
})
export class GpSetupModule { }
