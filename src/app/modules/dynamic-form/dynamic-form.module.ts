import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormEditComponent } from './dynamic-form-edit/dynamic-form-edit.component';
import { FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [DynamicFormComponent, DynamicFormEditComponent],
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class DynamicFormModule { }
