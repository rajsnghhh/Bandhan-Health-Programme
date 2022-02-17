import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../core/http/http.service';
import { ProjectMasterSaveDTO } from '../../core/models/projectMasterDTO.model';
import { ValidationService } from '../../shared/services/validation.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SubVerticalMastersSaveDTO, SubVerticalMasterViewDTO } from '../../core/models/subverticalMasterDTO.model';
import { Subscription } from 'rxjs';
import { ProjectService } from '../project.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit, OnDestroy {
  dropdownSettings: IDropdownSettings;
  donorList: any;
  subVerticalList: any;
  editDataSub: Subscription;


  constructor(public projectService: ProjectService, private router: ActivatedRoute,
    public validationService: ValidationService,
    private httpService: HttpService, private toastr: ToastrService) { }
  saveObj = new ProjectMasterSaveDTO(0, '', '', 'N', '', '', new SubVerticalMastersSaveDTO('Y', 'string', 0, 'string'));
  receivedUserData: any;
  editMode: boolean;


  ngOnInit(): void {

    this.router.params.subscribe((data) => {
      console.log(data);
      if (data.projectMasterId) {
        this.editMode = true;
        this.editDataSub = this.projectService.editProjectData.subscribe(data => {
          console.log(data);
          this.receivedUserData = data;
          if (this.receivedUserData) {
            console.log('inside data');
            this.saveObj.projectStartDate = this.receivedUserData.projectStartDate
            this.saveObj.projectEndDate = this.receivedUserData.projectEndDate
            this.saveObj.subVerticalMasterDTO.subVerticalMasterId = this.receivedUserData.subVerticalMasterDTO.subVerticalMasterId;
            this.saveObj.projectName = this.receivedUserData.projectName;
            this.saveObj.projectCode = this.receivedUserData.projectCode;
          }
        })
      }

    })

    const subVerticalPostBody = new SubVerticalMasterViewDTO('Y', this.httpService.dataAccessDTO);

    this.httpService.postRequest(`subvertical/view`, subVerticalPostBody).subscribe((data: any) => {
      this.subVerticalList = data.responseObject;
      console.log(this.subVerticalList);
    });



    this.dropdownSettings = {
      singleSelection: false,
      idField: 'donorMasterId',
      textField: 'donorMasterName',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }

  }

  saveProject(projectForm: NgForm): void {

    this.saveObj.projectName = this.validationService.firstCaps(this.saveObj.projectName.trim())

    const postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      projectMasterDTO: this.saveObj
    }

    console.log(postBody);
    this.httpService.postRequest(`project/saveOrUpdate`, postBody).subscribe(response => {
      console.log(response)
      if (response.status) {
        this.showSuccess(response.message);
        this.saveObj = new ProjectMasterSaveDTO(0, '', '', 'N', '', '', new SubVerticalMastersSaveDTO('Y', 'string', 0, 'string'));
      }

      else {
        this.showError(response.message);
      }

    });
  }


  ngOnDestroy(): void {
    console.log('Inside destroy');
    if (this.editMode)
      this.editDataSub.unsubscribe();
  }

  showSuccess(message) {
    this.toastr.success(message, 'Project Save', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toastr.error(message, 'Project Save', {
      timeOut: 3000,
    });
  }
}
