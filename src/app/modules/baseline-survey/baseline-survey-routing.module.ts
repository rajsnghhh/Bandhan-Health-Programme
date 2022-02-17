import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaselineCreateComponent } from './baseline-create/baseline-create.component';
import { BaselineEditComponent } from './baseline-edit/baseline-edit.component';
import { BaselineViewComponent } from './baseline-view/baseline-view.component';

const routes: Routes = [{ path: 'create', component: BaselineCreateComponent },
{ path: 'view', component: BaselineViewComponent },
{ path: 'edit', component: BaselineEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaselineSurveyRoutingModule { }
