import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllChildRegisterRoutingModule } from './all-child-register-routing.module';
import { AllChildRegisterComponent } from './all-child-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ViewMuaclistComponent } from './view-muaclist/view-muaclist.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AddChildMuacComponent } from './add-child-muac/add-child-muac.component';

@NgModule({
  declarations: [AllChildRegisterComponent, ViewMuaclistComponent, AddChildMuacComponent],
  imports: [
    CommonModule,
    AllChildRegisterRoutingModule, ReactiveFormsModule,
    MatTabsModule, MatNativeDateModule, MatDialogModule
  ]
})
export class AllChildRegisterModule { }
