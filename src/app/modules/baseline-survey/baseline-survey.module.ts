import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaselineSurveyRoutingModule } from './baseline-survey-routing.module';
import { BaselineCreateComponent } from './baseline-create/baseline-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaselineViewComponent } from './baseline-view/baseline-view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BaselineEditComponent } from './baseline-edit/baseline-edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoaderModule } from '../shared/loader/loader.module';
import { LocationComponent } from './location/location.component';
import { LocationModule } from './location/location.module';

@NgModule({
  declarations: [BaselineCreateComponent, BaselineViewComponent, BaselineEditComponent],
  imports: [
    CommonModule,
    BaselineSurveyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    LoaderModule, LocationModule, 
  ]

})
export class BaselineSurveyModule {

}
