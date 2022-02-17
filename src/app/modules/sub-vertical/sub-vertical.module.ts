import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubVerticalRoutingModule } from './sub-vertical-routing.module';
import { SubVerticalComponent } from './sub-vertical.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubVerticalCreateComponent } from './sub-vertical-create/sub-vertical-create.component';
import { SubVerticalPendingComponent } from './sub-vertical-pending/sub-vertical-pending.component';
import { SubVerticalViewComponent } from './sub-vertical-view/sub-vertical-view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [SubVerticalComponent, SubVerticalCreateComponent, SubVerticalPendingComponent, SubVerticalViewComponent],
  imports: [
    CommonModule,
    SubVerticalRoutingModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule
  ]
})
export class SubVerticalModule { }
