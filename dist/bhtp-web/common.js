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

/***/ "aQtA":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/confirmation-dialog/confirmation-dialog.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ConfirmationDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogService", function() { return ConfirmationDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation-dialog.component */ "V8h6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




class ConfirmationDialogService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    confirm(title, message, btnOkText = 'OK', btnCancelText = 'Cancel', dialogSize = 'sm') {
        const modalRef = this.modalService.open(_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"], { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    }
}
ConfirmationDialogService.ɵfac = function ConfirmationDialogService_Factory(t) { return new (t || ConfirmationDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
ConfirmationDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfirmationDialogService, factory: ConfirmationDialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class BranchService {
    constructor(http) {
        this.http = http;
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
        return this.http.post('http://192.168.153.56:6181/bhp/api/v1/village/getVillagesOfABranch', this.Dto);
    }
}
BranchService.ɵfac = function BranchService_Factory(t) { return new (t || BranchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BranchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchService, factory: BranchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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