import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LmRegisterRoutingModule } from './lm-register-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LmViewComponent } from './lm-view/lm-view.component';
import { AddLmChildComponent } from './add-lm-child/add-lm-child.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [LmViewComponent, AddLmChildComponent],
  imports: [
    CommonModule,
    LmRegisterRoutingModule, ReactiveFormsModule, MatNativeDateModule, MatDialogModule,
    MatExpansionModule
  ]
})
export class LmRegisterModule { }
