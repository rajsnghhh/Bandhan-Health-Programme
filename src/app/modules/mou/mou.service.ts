import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MouMasterSaveDTO } from '../core/models/mouMasterDTO.model';

@Injectable({
  providedIn: 'root',
})
export class MouService {
  public sendData = new BehaviorSubject<any>('');
  editMouData = this.sendData.asObservable();

  constructor() {}

  activeMou: MouMasterSaveDTO[];
  pendingMou: MouMasterSaveDTO[];

  setData(value) {
    this.sendData.next(value);
  }
  
}
