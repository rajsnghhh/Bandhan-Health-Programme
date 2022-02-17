import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "../modules/core/http/http.service";
import { RoleFunctionMapDTO } from "../modules/core/models/roleSubFunctionMapDTO.model";

@Injectable()
export class RoleAcessResolver implements Resolve<RoleFunctionMapDTO>{

    constructor(private httpService : HttpService){
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<RoleFunctionMapDTO> | Promise<RoleFunctionMapDTO> | RoleFunctionMapDTO {
        return this.httpService.postRequest(`rolemaster/rolefunctionmap/view`, this.httpService.dataAccessDTO)
    }
}