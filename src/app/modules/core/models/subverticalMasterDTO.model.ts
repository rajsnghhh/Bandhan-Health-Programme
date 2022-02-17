import { DataAccessDTO } from "./dataAccessDTO.model";
import { VerticalMasterSaveDTO } from "./verticalMasterDTO.model";

export class SubVerticalMasterSaveDTO {
    constructor(
        public status: string,
        public subVerticalCode: string,
        public subVerticalMasterId: number,
        public subVerticalName: string,
        public verticalMasterDataDTO: VerticalMasterSaveDTO

    ) {
    }
}

export class SubVerticalMastersSaveDTO {
    constructor(
        public status: string,
        public subVerticalCode: string,
        public subVerticalMasterId: number,
        public subVerticalName: string

    ) {
    }
}
export class SubVerticalMasterViewDTO {
    constructor(public activeStatus: string, public dataAccessDTO: DataAccessDTO) {

    }
}

