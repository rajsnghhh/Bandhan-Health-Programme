import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUserRoutingModule } from './admin-user-routing.module';
import { UserCreateFormComponent } from './user-create/user-create-form.component';
import { UserTableComponent } from './user-table-view/user-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [UserTableComponent, UserCreateFormComponent],
  imports: [
    CommonModule,
    AdminUserRoutingModule, ReactiveFormsModule, FormsModule,
    MatTabsModule, MatNativeDateModule, MatDialogModule,
  ]
})
export class AdminUserModule { }
