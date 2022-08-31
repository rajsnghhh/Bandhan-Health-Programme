import { MainFunctionDTO } from './mainFunctionDTO.model'
import { RoleMasterDTO } from './roleMasterDTO.model'

export interface RoleFunctionMapDTO {
    mainFunctionDTOList: MainFunctionDTO[]
    roleMasterDTO: RoleMasterDTO
}