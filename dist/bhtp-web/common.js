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
    villagesOfBranch(obj) {
        return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj);
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

/***/ "SMi9":
/*!********************************************************************!*\
  !*** ./src/app/modules/baseline-survey/baseline-survey.service.ts ***!
  \********************************************************************/
/*! exports provided: BaselineSurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaselineSurveyService", function() { return BaselineSurveyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BaselineSurveyService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    getCasteView(obj) {
        return this.http.post(`${this.baseURL}castemaster/view`, obj);
    }
    getEducationDetails(obj) {
        return this.http.post(`${this.baseURL}educationalqualificationmaster/view`, obj);
    }
    monthlyIncomeDetails(obj) {
        return this.http.post(`${this.baseURL}monthlyincomemaster/view`, obj);
    }
    religionDetails(obj) {
        return this.http.post(`${this.baseURL}religionmaster/view`, obj);
    }
    occupationDetails(obj) {
        return this.http.post(`${this.baseURL}occupationmaster/view`, obj);
    }
    getIdCardDetails(obj) {
        return this.http.post(`${this.baseURL}identitycardtypes/view`, obj);
    }
    saveBaselineSurvey(obj) {
        return this.http.post(`${this.baseURL}baselinesurvey/saveOrUpdate`, obj);
    }
    baselineView(obj) {
        return this.http.post(`${this.baseURL}baselinesurvey/view`, obj);
    }
    baselineViewDetail(obj) {
        return this.http.post(`${this.baseURL}baselinesurvey/view/detail`, obj);
    }
    deleteFamily(obj) {
        return this.http.post(`${this.baseURL}familydetail/saveOrUpdate`, obj);
    }
    viewMoreFamilyDetails(obj) {
        return this.http.post(`${this.baseURL}familydetail/view`, obj);
    }
    baselineSurveyStatus(obj) {
        return this.http.post(`${this.baseURL}baselinesurvey/status`, obj);
    }
    villagesOfBranch(obj) {
        return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj);
    }
    ssVillageWiseList(obj) {
        return this.http.post(`${this.baseURL}swasthyasahayika/villageWiseList`, obj);
    }
    listOfBranchesOfARegion(obj) {
        return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
    }
}
BaselineSurveyService.ɵfac = function BaselineSurveyService_Factory(t) { return new (t || BaselineSurveyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BaselineSurveyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BaselineSurveyService, factory: BaselineSurveyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaselineSurveyService, [{
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

/***/ "g6Br":
/*!*****************************************************!*\
  !*** ./src/app/modules/core/http/branch.service.ts ***!
  \*****************************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BranchService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.dataAccessDTO = {
            userId: '100',
            userName: 'bk103586',
        };
        this.Dto = {
            dataAccessDTO: this.dataAccessDTO,
            branchId: 1
        };
    }
    listOfBranchUser() {
        return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, this.Dto);
    }
}
BranchService.ɵfac = function BranchService_Factory(t) { return new (t || BranchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BranchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchService, factory: BranchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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