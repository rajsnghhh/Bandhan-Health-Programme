import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouRoutingModule } from './mou-routing.module';
import { MouComponent } from './mou.component';
import { MouViewComponent } from './mou-view/mou-view.component';
import { MouCreateComponent } from './mou-create/mou-create.component';
import { MouPendingComponent } from './mou-pending/mou-pending.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [MouComponent, MouViewComponent, MouCreateComponent, MouPendingComponent],
  imports: [
    CommonModule,
    MouRoutingModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule

  ]
})
export class MouModule { }
