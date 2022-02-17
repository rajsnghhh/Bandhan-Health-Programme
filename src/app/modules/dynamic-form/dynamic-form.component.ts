import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from './dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  getFormData = [];
  questionId: '';
  dynamicFormSearch: String;

  constructor(private dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    let obj = '';
    this.dynamicFormService.getFormUi(obj).subscribe((response: any) => {
      this.getFormData = response.data.contents;
      console.log(response.data);
      console.log(this.getFormData);
    });
  }

  setData(data) {
    this.dynamicFormService.setData(data);
  }
}
