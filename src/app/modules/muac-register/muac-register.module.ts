import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuacRegisterRoutingModule } from './muac-register-routing.module';
import { MuacRegisterCreateComponent } from './muac-register-create/muac-register-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../shared/loader/loader.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [MuacRegisterCreateComponent],
  imports: [
    CommonModule,
    MuacRegisterRoutingModule,
    FormsModule, LoaderModule,
    ReactiveFormsModule, Ng2SearchPipeModule
  ]
})
export class MuacRegisterModule { }
