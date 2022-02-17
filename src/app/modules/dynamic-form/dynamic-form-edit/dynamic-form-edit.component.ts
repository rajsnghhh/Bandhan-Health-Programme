import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HttpService } from '../../core/http/http.service';
import { DynamicFormService } from '../dynamic-form.service';

@Component({
  selector: 'app-dynamic-form-edit',
  templateUrl: './dynamic-form-edit.component.html',
  styleUrls: ['./dynamic-form-edit.component.css'],
})
export class DynamicFormEditComponent implements OnInit, OnDestroy {
  editDataSub: Subscription;
  createObj = {
    question_master_id: 0,
    quesName: '',
    typeId: '',
    addAnswers: [],
  };

  constructor(
    private httpService: HttpService,
    private dynamicFormService: DynamicFormService,
    private router: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  receivedUserData: any;
  editMode: boolean;

  ngOnInit(): void {
    this.createObj.addAnswers = [];
    this.createObj.addAnswers.push({
      title_info: '',
    });

    this.router.params.subscribe((response) => {
      console.log(response);
      if (response.question_master_id) {
        this.editMode = true;
        this.editDataSub = this.dynamicFormService.editFormData.subscribe(
          (data) => {
            console.log(data);
            this.receivedUserData = data;
            if (this.receivedUserData) {
              console.log('inside data');
              this.createObj.quesName = this.receivedUserData.title;
              this.createObj.typeId = this.receivedUserData.view_type;
              this.createObj.addAnswers = this.receivedUserData.menu_info;
              this.createObj.question_master_id =
                this.receivedUserData.question_master_id;
            }
    
          }
        );
      }
    });
  }

  saveForm(dynamicForm: NgForm): void {
    let obj = {
      questions: [
        {
          question_master_id: this.createObj.question_master_id,
          view_type: this.createObj.typeId,
          title: this.createObj.quesName,
          description: 'Enabled',
          keyboardOptions: 'Numeric',
          menu_info: this.createObj.addAnswers,
        },
      ],
    };
    console.log(obj);
    this.dynamicFormService.saveDynamicForm(obj).subscribe((response: any) => {
      console.log(response);
      if (response.success) {
        this.showSuccess(response.message);
        this.createObj = {
          quesName: '',
          typeId: '',
          question_master_id: 0,
          addAnswers: [],
        };
      } else {
        this.showError(response.message);
      }
    });
  }

  addmoreAns() {
    this.createObj.addAnswers.push({
      title_info: '',
    });
    console.log(this.createObj);
  }

  removeAns(i) {
    this.createObj.addAnswers.splice(i,1);
  }

  ngOnDestroy(): void {
    console.log('Inside destroy');
    if (this.editMode) this.editDataSub.unsubscribe();
  }

  showSuccess(message) {
    this.toastr.success(message, 'Dynamic Form', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toastr.error(message, 'Dynamic Form', {
      timeOut: 3000,
    });
  }
}