import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerticalRoutingModule } from './vertical-routing.module';
import { VerticalComponent } from './vertical.component';
import { VerticalCreateComponent } from './vertical-create/vertical-create.component';
import { VerticalViewComponent } from './vertical-view/vertical-view.component';
import { VerticalPendingComponent } from './vertical-pending/vertical-pending.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


@NgModule({
  declarations: [VerticalComponent, VerticalCreateComponent, VerticalViewComponent, VerticalPendingComponent],
  imports: [
    CommonModule,
    VerticalRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class VerticalModule { }
