import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectPendingComponent } from './project-pending/project-pending.component';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [
  { path: '', component: ProjectViewComponent },
  { path: 'create', component: ProjectCreateComponent },
  { path: 'create/:projectMasterId', component: ProjectCreateComponent },
  { path: 'pending', component: ProjectPendingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
