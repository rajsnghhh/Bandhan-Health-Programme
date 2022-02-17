import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http/http.service';
import { Donor } from '../core/models/donor.model';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})


export class DonorComponent implements OnInit {

  itemToEdit: Donor;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

  }

  sendEditDonorData(item) {
    this.itemToEdit = item;
  }

}
