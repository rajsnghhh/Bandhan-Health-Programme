import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentralRegisterRoutingModule } from './central-register-routing.module';
import { CentralRegisterViewComponent } from './central-register-view/central-register-view.component';
import { CentralRegisterCreateComponent } from './central-register-create/central-register-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [CentralRegisterViewComponent, CentralRegisterCreateComponent],
  imports: [
    CommonModule,
    CentralRegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class CentralRegisterModule { }
