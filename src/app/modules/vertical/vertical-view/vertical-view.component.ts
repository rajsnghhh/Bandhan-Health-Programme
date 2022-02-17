import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { HttpService } from '../../core/http/http.service';
import { VerticalMasterViewDTO } from '../../core/models/verticalMasterDTO.model';
import { VerticalService } from '../vertical.service';


@Component({
  selector: 'app-vertical-view',
  templateUrl: './vertical-view.component.html',
  styleUrls: ['./vertical-view.component.css']
})
export class VerticalViewComponent implements OnInit {
  @Output() editVerticalData = new EventEmitter<VerticalMasterViewDTO>()
  constructor(public verticalService: VerticalService, private httpService: HttpService) { }

  page = 1;
  pageSize = 4;
  ngOnInit(): void {
    const postBody: VerticalMasterViewDTO = {
      activeStatus: 'Y',
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    this.httpService.postRequest(`vertical/view`, postBody).subscribe((data: any) => {
      this.verticalService.activeVerticals = data.responseObject;

      console.log(this.verticalService.activeVerticals);
    });
  }

  editVertical(item) {
    // console.log(item);
    this.editVerticalData.emit(item);
  }

}
