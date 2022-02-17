import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormEditComponent } from './dynamic-form-edit/dynamic-form-edit.component';
import { DynamicFormComponent } from './dynamic-form.component';

const routes: Routes = [
  { path: '', component: DynamicFormComponent },
  { path: 'create', component: DynamicFormEditComponent },
  { path: 'create/:question_master_id', component: DynamicFormEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicFormRoutingModule {}
