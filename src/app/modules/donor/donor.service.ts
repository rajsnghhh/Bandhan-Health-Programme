import { Injectable } from '@angular/core';
import { Donor } from '../core/models/donor.model';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  constructor() { }

  activeDonors : Donor[];
  pendingDonors : Donor[];
}
