import { DataAccessDTO } from "./dataAccessDTO.model";

export class VerticalMasterSaveDTO {
    constructor(public verticalMasterId: number, public verticalName: string,
        public verticalCode: string, public status: string, public subVerticalMasterDTOList = [{}]) {
    }
}

export class VerticalMasterViewDTO {
    constructor(public activeStatus: string, public dataAccessDTO: DataAccessDTO) {
    }
}