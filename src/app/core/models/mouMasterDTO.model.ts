import { Donor } from "./donor.model";

export class MouMasterSaveDTO {
    constructor(public mouMasterId: number,
        public amount: number,
        public mouNumber: string,
        public mouName: string,
        public status: string,
        public mouEndDate: string,
        public mouStartDate: string,
        public donorList: Donor[]
    ) {
    }

}