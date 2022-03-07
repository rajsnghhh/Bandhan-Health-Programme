import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login.component';
import { ResetComponent } from './reset/reset.component';
import { LoaderModule } from '../modules/shared/loader/loader.module';

@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    LoaderModule
  ]
})
export class AccountModule { }
