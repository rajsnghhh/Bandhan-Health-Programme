import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PemRegisterRoutingModule } from './pem-register-routing.module';
import { PemRegisterCreateComponent } from './pem-register-create/pem-register-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [PemRegisterCreateComponent],
  imports: [
    CommonModule,
    PemRegisterRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class PemRegisterModule { }
