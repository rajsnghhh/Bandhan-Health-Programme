import { DataAccessDTO } from "./dataAccessDTO.model";

export class Donor {

    constructor(public donorMasterId: number, public donorMasterName: string, public status: string) {
    }

}

export class DonorMasterViewDTO {
    constructor(public activeStatus: string, public dataAccessDTO: DataAccessDTO) {
    }
}
