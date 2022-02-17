import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SubVerticalMasterSaveDTO } from '../core/models/subVerticalMasterDTO.model';

@Injectable({
  providedIn: 'root'
})
export class SubVerticalService {

  public sendData = new BehaviorSubject<any>('');
  editVerticalData = this.sendData.asObservable();

  constructor() { }

  activeSubVerticals: SubVerticalMasterSaveDTO[];
  pendingSubVerticals: SubVerticalMasterSaveDTO[];

  setData(value) {
    this.sendData.next(value);

  }

}
