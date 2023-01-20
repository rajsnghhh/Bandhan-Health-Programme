import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscortRerefRegisterRoutingModule } from './escort-reref-register-routing.module';
import { EscortRerefRegisterComponent } from './escort-reref-register.component';


@NgModule({
  declarations: [EscortRerefRegisterComponent],
  imports: [
    CommonModule,
    EscortRerefRegisterRoutingModule
  ]
})
export class EscortRerefRegisterModule { }
