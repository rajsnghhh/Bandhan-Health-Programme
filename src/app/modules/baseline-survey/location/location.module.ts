import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { LoaderModule } from '../../shared/loader/loader.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [LocationComponent],
    imports: [
        CommonModule, LoaderModule, ReactiveFormsModule
    ],
    exports: [LocationComponent]
})
export class LocationModule { }