import { Injectable } from '@angular/core';
import { ProjectMasterSaveDTO } from '../core/models/projectMasterDTO.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public sendData = new BehaviorSubject<any>('');
  editProjectData = this.sendData.asObservable();

  constructor() { }

  activeProjects: ProjectMasterSaveDTO[];
  pendingProjects: ProjectMasterSaveDTO[];

  setData(value) {
    this.sendData.next(value);

  }

}
