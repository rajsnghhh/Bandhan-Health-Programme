import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Donor } from '../../core/models/donor.model';
import { DonorService } from '../donor.service';


@Component({
  selector: 'app-donor-view',
  templateUrl: './donor-view.component.html',
  styleUrls: ['./donor-view.component.css']
})
export class DonorViewComponent implements OnInit {
  donorsSearch: String;
 
  @Output() editDonorData = new EventEmitter<Donor>()
  constructor(private httpService: HttpService, public donorService: DonorService) { }
  page = 1;
  pageSize = 4;
  ngOnInit(): void {
    const postBody = {
      activeStatus: 'Y',
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    this.httpService.postRequest(`donor/view`, postBody).subscribe((data: any) => {
      this.donorService.activeDonors = data.responseObject;

      console.log(this.donorService.activeDonors);
    });

  }

  editDonor(item) {
    this.editDonorData.emit(item);
  }

}
