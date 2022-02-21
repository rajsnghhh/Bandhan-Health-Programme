import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './shared.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SharedComponent, SidebarComponent, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    AppRoutingModule,NgbModule,NgMultiSelectDropDownModule.forRoot()
  ],

  exports: [SidebarComponent]
})
export class SharedModule { }
