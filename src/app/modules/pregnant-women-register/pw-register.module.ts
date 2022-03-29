import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwRegisterRoutingModule } from './pw-register-routing.module';
import { PwRegisterComponent } from './pw-register/pw-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PwViewComponent } from './pw-view/pw-view.component';
import { PwStatusComponent } from './pw-status/pw-status.component';
import { SinglePwListComponent } from './single-pw-list/single-pw-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [PwRegisterComponent, PwViewComponent, PwStatusComponent, SinglePwListComponent],
  imports: [
    CommonModule,
    PwRegisterRoutingModule, ReactiveFormsModule, FormsModule,
    MatTabsModule, MatNativeDateModule, MatDialogModule, Ng2SearchPipeModule, NgxPaginationModule
  ]
})
export class PwRegisterModule { }
