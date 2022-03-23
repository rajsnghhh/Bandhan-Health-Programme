import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LmRegisterRoutingModule } from './lm-register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LmViewComponent } from './lm-view/lm-view.component';
import { AddLmChildComponent } from './add-lm-child/add-lm-child.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoaderModule } from '../shared/loader/loader.module';


@NgModule({
  declarations: [LmViewComponent, AddLmChildComponent],
  imports: [
    CommonModule,
    LmRegisterRoutingModule, ReactiveFormsModule, FormsModule, MatNativeDateModule, MatDialogModule,
    MatExpansionModule, Ng2SearchPipeModule, LoaderModule
  ]
})
export class LmRegisterModule { }
