import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuacRegisterRoutingModule } from './muac-register-routing.module';
import { MuacRegisterCreateComponent } from './muac-register-create/muac-register-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MuacRegisterCreateComponent],
  imports: [
    CommonModule,
    MuacRegisterRoutingModule,
    FormsModule
  ]
})
export class MuacRegisterModule { }
