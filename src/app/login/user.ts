export class User {
    sessionDTO: SessionDTO;
    status: boolean;
    message: string;
    responseObject: ResponseObject;
}



export interface SessionDTO {
    status: boolean;
    reasonCode: string;
}

export interface AccessDetailList {
    accessType: string;
    url: string;
}

export interface SubMenuDetailList {
    accessDetailList: AccessDetailList[];
    subFunctionMasterId: number;
    subFunctionShortName: string;
}

export interface MenuDetailList {
    subMenuDetailList: SubMenuDetailList[];
    functionMasterId: number;
    functionShortName: string;
}

export interface UserdetailDTO {
    userId: number;
    loginId: string;
    userFirstName: string;
    userMiddleName?: any;
    userLastName: string;
    userMobilePrimary: string;
    userEmailPrimary?: any;
}

export interface RoledetailDTO {
    roleMasterId: number;
    roleShortName: string;
    roleDescription: string;
}

export interface ResponseObject {
    menuDetailList: MenuDetailList[];
    userdetailDTO: UserdetailDTO;
    RoledetailDTO: RoledetailDTO;
}

export interface RootObject {
    sessionDTO: SessionDTO;
    status: boolean;
    message: string;
    responseObject: ResponseObject;
}



