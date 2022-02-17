import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './shared.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [SharedComponent, SidebarComponent, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],

  exports: [SidebarComponent]
})
export class SharedModule { }
