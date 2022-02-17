import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { FormsModule } from '@angular/forms';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectPendingComponent } from './project-pending/project-pending.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    ProjectComponent, 
    ProjectCreateComponent, 
    ProjectViewComponent, 
    ProjectPendingComponent, 
    ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    Ng2SearchPipeModule
  ]

})
export class ProjectModule { }
