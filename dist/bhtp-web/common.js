(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "4W/U":
/*!****************************************************************!*\
  !*** ./src/app/modules/core/models/verticalMasterDTO.model.ts ***!
  \****************************************************************/
/*! exports provided: VerticalMasterSaveDTO, VerticalMasterViewDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMasterSaveDTO", function() { return VerticalMasterSaveDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMasterViewDTO", function() { return VerticalMasterViewDTO; });
class VerticalMasterSaveDTO {
    constructor(verticalMasterId, verticalName, verticalCode, status, subVerticalMasterDTOList = [{}]) {
        this.verticalMasterId = verticalMasterId;
        this.verticalName = verticalName;
        this.verticalCode = verticalCode;
        this.status = status;
        this.subVerticalMasterDTOList = subVerticalMasterDTOList;
    }
}
class VerticalMasterViewDTO {
    constructor(activeStatus, dataAccessDTO) {
        this.activeStatus = activeStatus;
        this.dataAccessDTO = dataAccessDTO;
    }
}


/***/ }),

/***/ "SICW":
/*!****************************************************************!*\
  !*** ./src/app/modules/muac-register/muac-register.service.ts ***!
  \****************************************************************/
/*! exports provided: MuacRegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuacRegisterService", function() { return MuacRegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MuacRegisterService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    listOfBranchesOfARegion(obj) {
        return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
    }
    muacCampList(obj) {
        return this.http.post(`${this.baseURL}muaccamp/branchWiseList`, obj);
    }
    saveMuac(obj) {
        return this.http.post(`${this.baseURL}muaccamp/saveOrUpdate`, obj);
    }
    deleteMuac(obj) {
        return this.http.post(`${this.baseURL}muaccamp/delete`, obj);
    }
}
MuacRegisterService.ɵfac = function MuacRegisterService_Factory(t) { return new (t || MuacRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MuacRegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MuacRegisterService, factory: MuacRegisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MuacRegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "dXFN":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/models/subverticalMasterDTO.model.ts ***!
  \*******************************************************************/
/*! exports provided: SubVerticalMasterSaveDTO, SubVerticalMastersSaveDTO, SubVerticalMasterViewDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubVerticalMasterSaveDTO", function() { return SubVerticalMasterSaveDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubVerticalMastersSaveDTO", function() { return SubVerticalMastersSaveDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubVerticalMasterViewDTO", function() { return SubVerticalMasterViewDTO; });
class SubVerticalMasterSaveDTO {
    constructor(status, subVerticalCode, subVerticalMasterId, subVerticalName, verticalMasterDataDTO) {
        this.status = status;
        this.subVerticalCode = subVerticalCode;
        this.subVerticalMasterId = subVerticalMasterId;
        this.subVerticalName = subVerticalName;
        this.verticalMasterDataDTO = verticalMasterDataDTO;
    }
}
class SubVerticalMastersSaveDTO {
    constructor(status, subVerticalCode, subVerticalMasterId, subVerticalName) {
        this.status = status;
        this.subVerticalCode = subVerticalCode;
        this.subVerticalMasterId = subVerticalMasterId;
        this.subVerticalName = subVerticalName;
    }
}
class SubVerticalMasterViewDTO {
    constructor(activeStatus, dataAccessDTO) {
        this.activeStatus = activeStatus;
        this.dataAccessDTO = dataAccessDTO;
    }
}


/***/ }),

/***/ "y5mg":
/*!****************************************************!*\
  !*** ./src/app/modules/core/models/donor.model.ts ***!
  \****************************************************/
/*! exports provided: Donor, DonorMasterViewDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Donor", function() { return Donor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorMasterViewDTO", function() { return DonorMasterViewDTO; });
class Donor {
    constructor(donorMasterId, donorMasterName, status) {
        this.donorMasterId = donorMasterId;
        this.donorMasterName = donorMasterName;
        this.status = status;
    }
}
class DonorMasterViewDTO {
    constructor(activeStatus, dataAccessDTO) {
        this.activeStatus = activeStatus;
        this.dataAccessDTO = dataAccessDTO;
    }
}


/***/ })

}]);
//# sourceMappingURL=common.js.map