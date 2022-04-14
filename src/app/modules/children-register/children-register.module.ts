import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenRegisterRoutingModule } from './children-register-routing.module';
import { ChildrenRegisterCreateComponent } from './children-register-create/children-register-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../shared/loader/loader.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GrdFilterPipe } from '../shared/search.pipe';


@NgModule({
  declarations: [ChildrenRegisterCreateComponent,GrdFilterPipe],
  imports: [
    CommonModule,
    ChildrenRegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule, LoaderModule, NgxPaginationModule, Ng2SearchPipeModule
  ]
})
export class ChildrenRegisterModule { }
