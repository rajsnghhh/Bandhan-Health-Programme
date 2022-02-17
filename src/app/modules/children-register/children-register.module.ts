import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenRegisterRoutingModule } from './children-register-routing.module';
import { ChildrenRegisterCreateComponent } from './children-register-create/children-register-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChildrenRegisterCreateComponent],
  imports: [
    CommonModule,
    ChildrenRegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ChildrenRegisterModule { }
