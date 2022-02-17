import { DataAccessDTO } from "./dataAccessDTO.model";
import {  SubVerticalMastersSaveDTO } from "./subverticalMasterDTO.model";

export class ProjectMasterSaveDTO {
    constructor(public projectMasterId: number,
        public projectCode: string,
        public projectName: string,
        public status: string,
        public projectEndDate: string,
        public projectStartDate: string,
        public subVerticalMasterDTO: SubVerticalMastersSaveDTO) {
    }
}

export class ProjectMasterViewDTO {
    constructor(public activeStatus: string, public dataAccessDTO: DataAccessDTO) {
    }
}
