import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppVersionRoutingModule } from './app-version-routing.module';
import { AppVersionComponent } from './app-version.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppVersionComponent],
  imports: [
    CommonModule,
    AppVersionRoutingModule,
    ReactiveFormsModule
  ]
})
export class AppVersionModule { }
