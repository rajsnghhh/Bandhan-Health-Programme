import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DonorRoutingModule } from './donor-routing.module';
import { DonorComponent } from './donor.component';
import { DonorCreateComponent } from './donor-create/donor-create.component';
import { DonorViewComponent } from './donor-view/donor-view.component';
import { DonorPendingComponent } from './donor-pending/donor-pending.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [DonorComponent, DonorCreateComponent, DonorViewComponent, DonorPendingComponent],
  imports: [
    CommonModule,
    FormsModule,
    DonorRoutingModule,
    NgbModule,
    Ng2SearchPipeModule
  ]
})
export class DonorModule { }
