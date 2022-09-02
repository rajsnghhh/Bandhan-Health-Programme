import { SubFunctionMasterDTO } from "./subFunctionDTO.model";

export interface MainFunctionDTO {
    activeFlag: string
    mainFunctionMasterId: number
    mainFunctionName: string
    subFunctionMasterDTOList: SubFunctionMasterDTO[]
  }