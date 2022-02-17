import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MouCreateComponent } from './mou-create/mou-create.component';
import { MouPendingComponent } from './mou-pending/mou-pending.component';
import { MouViewComponent } from './mou-view/mou-view.component';

const routes: Routes = [
  { path: '', component: MouViewComponent },
  { path: 'pending', component: MouPendingComponent },
  { path: 'create', component: MouCreateComponent },
  { path: 'pending/create', component: MouCreateComponent },
  { path: 'create/:mouMasterId', component: MouCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MouRoutingModule {}
