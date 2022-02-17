import { Injectable } from '@angular/core';
import { VerticalMasterSaveDTO } from '../core/models/verticalMasterDTO.model';

@Injectable({
  providedIn: 'root'
})
export class VerticalService {

  constructor() { }

  activeVerticals: VerticalMasterSaveDTO[];
  pendingVerticals: VerticalMasterSaveDTO[];
}
