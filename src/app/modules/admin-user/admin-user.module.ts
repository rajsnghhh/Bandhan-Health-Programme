import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUserRoutingModule } from './admin-user-routing.module';
import { UserCreateFormComponent } from './user-create/user-create-form.component';
import { UserTableComponent } from './user-table-view/user-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [UserTableComponent, UserCreateFormComponent],
  imports: [
    CommonModule,
    AdminUserRoutingModule, ReactiveFormsModule, FormsModule,
    MatTabsModule, MatNativeDateModule, MatDialogModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AdminUserModule { }
