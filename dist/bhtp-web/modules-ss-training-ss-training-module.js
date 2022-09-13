(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ss-training-ss-training-module"],{

/***/ "DWMF":
/*!***********************************************************!*\
  !*** ./src/app/modules/ss-training/ss-training.module.ts ***!
  \***********************************************************/
/*! exports provided: SsTrainingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsTrainingModule", function() { return SsTrainingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ss_training_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ss-training-routing.module */ "jO2I");
/* harmony import */ var _ss_training_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ss-training.component */ "tcRG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _shared_ss_training_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/ss-training-search.pipe */ "OjvM");








class SsTrainingModule {
}
SsTrainingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SsTrainingModule });
SsTrainingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SsTrainingModule_Factory(t) { return new (t || SsTrainingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ss_training_routing_module__WEBPACK_IMPORTED_MODULE_2__["SsTrainingRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SsTrainingModule, { declarations: [_ss_training_component__WEBPACK_IMPORTED_MODULE_3__["SsTrainingComponent"], _shared_ss_training_search_pipe__WEBPACK_IMPORTED_MODULE_6__["ssTrainingPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ss_training_routing_module__WEBPACK_IMPORTED_MODULE_2__["SsTrainingRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SsTrainingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ss_training_component__WEBPACK_IMPORTED_MODULE_3__["SsTrainingComponent"], _shared_ss_training_search_pipe__WEBPACK_IMPORTED_MODULE_6__["ssTrainingPipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ss_training_routing_module__WEBPACK_IMPORTED_MODULE_2__["SsTrainingRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "OjvM":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/ss-training-search.pipe.ts ***!
  \***********************************************************/
/*! exports provided: ssTrainingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssTrainingPipe", function() { return ssTrainingPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ssTrainingPipe {
    transform(items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            let filterKeys = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(item => filterKeys.reduce((x, keyName) => (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
            }
            else {
                return items.filter(item => {
                    return filterKeys.some((keyName) => {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    }
}
ssTrainingPipe.ɵfac = function ssTrainingPipe_Factory(t) { return new (t || ssTrainingPipe)(); };
ssTrainingPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ssTraining", type: ssTrainingPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ssTrainingPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'ssTraining'
            }]
    }], null, null); })();


/***/ }),

/***/ "jO2I":
/*!*******************************************************************!*\
  !*** ./src/app/modules/ss-training/ss-training-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SsTrainingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsTrainingRoutingModule", function() { return SsTrainingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ss_training_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ss-training.component */ "tcRG");





const routes = [{ path: '', component: _ss_training_component__WEBPACK_IMPORTED_MODULE_2__["SsTrainingComponent"] }];
class SsTrainingRoutingModule {
}
SsTrainingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SsTrainingRoutingModule });
SsTrainingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SsTrainingRoutingModule_Factory(t) { return new (t || SsTrainingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SsTrainingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SsTrainingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "tWYX":
/*!************************************************************!*\
  !*** ./src/app/modules/ss-training/ss-training.service.ts ***!
  \************************************************************/
/*! exports provided: SsTrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsTrainingService", function() { return SsTrainingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SsTrainingService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    listOfBranchesOfARegion(obj) {
        return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
    }
    branchWiseSSTrainingEventList(obj) {
        return this.http.post(`${this.baseURL}sstraining/getSSTrainingEventList`, obj);
    }
    ssTrainingTypeAndTopic(obj) {
        return this.http.post(`${this.baseURL}sstraining/getSSTrainingTypeAndTopic`, obj);
    }
    getSSList(obj) {
        return this.http.post(`${this.baseURL}sstraining/getSSList`, obj);
    }
    createUpdateDeleteSSTraining(obj) {
        return this.http.post(`${this.baseURL}sstraining/saveUpdateDeleteSsTrainingEvent`, obj);
    }
    approveSSTraining(obj) {
        return this.http.post(`${this.baseURL}sstraining/approveSSTrainingEvent`, obj);
    }
    staffListOfBranch(obj) {
        return this.http.post(`${this.baseURL}branch/getListOfActiveHcoITL`, obj);
    }
}
SsTrainingService.ɵfac = function SsTrainingService_Factory(t) { return new (t || SsTrainingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SsTrainingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SsTrainingService, factory: SsTrainingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SsTrainingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tcRG":
/*!**************************************************************!*\
  !*** ./src/app/modules/ss-training/ss-training.component.ts ***!
  \**************************************************************/
/*! exports provided: SsTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsTrainingComponent", function() { return SsTrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/http/http.service */ "YwHQ");
/* harmony import */ var _ss_training_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ss-training.service */ "tWYX");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/validation.service */ "yjnX");
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ "aQtA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _shared_ss_training_search_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/ss-training-search.pipe */ "OjvM");


















function SsTrainingComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SsTrainingComponent_div_7_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](55); return ctx_r8.createSSTrainingEvents(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00A0Schedule SS Training Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_div_9_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", region_r14.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", region_r14.regionName, " ");
} }
function SsTrainingComponent_div_9_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_div_9_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SsTrainingComponent_div_9_div_10_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.l.region.errors.required);
} }
function SsTrainingComponent_div_9_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", branch_r16.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", branch_r16.branchName, " ");
} }
function SsTrainingComponent_div_9_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_div_9_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SsTrainingComponent_div_9_div_20_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.l.branch.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function SsTrainingComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SsTrainingComponent_div_9_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SsTrainingComponent_div_9_option_9_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SsTrainingComponent_div_9_div_10_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SsTrainingComponent_div_9_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.changeBranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SsTrainingComponent_div_9_option_19_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SsTrainingComponent_div_9_div_20_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx_r1.l.region.invalid && ctx_r1.l.region.touched, ctx_r1.l.region.valid && (ctx_r1.l.region.dirty || ctx_r1.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, ctx_r1.l.branch.invalid && ctx_r1.l.branch.touched, ctx_r1.l.branch.valid && (ctx_r1.l.branch.dirty || ctx_r1.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.l.branch.errors);
} }
function SsTrainingComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_tr_48_td_17_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SsTrainingComponent_tr_48_td_17_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const event_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](55); return ctx_r27.editSSTrainingEvents(event_r21, _r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_tr_48_td_17_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SsTrainingComponent_tr_48_td_17_i_2_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const event_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.deleteSSTrainingEvents(event_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_tr_48_td_17_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SsTrainingComponent_tr_48_td_17_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const event_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.approveSSTrainingEvents(event_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_tr_48_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SsTrainingComponent_tr_48_td_17_i_1_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SsTrainingComponent_tr_48_td_17_i_2_Template, 1, 0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SsTrainingComponent_tr_48_td_17_i_3_Template, 1, 0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.deleteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.role == "PO");
} }
function SsTrainingComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SsTrainingComponent_tr_48_Template_td_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const event_r21 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](53); return ctx_r36.viewParticipantsDetails(_r4, event_r21.ssList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SsTrainingComponent_tr_48_td_17_Template, 4, 3, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r21.training_type_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", event_r21.ss_training_event_start_date.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", event_r21.ss_training_event_end_date.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r21.ssCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r21.ssCompletedTraining);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", event_r21.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.updateMode || ctx_r3.deleteMode);
} }
function SsTrainingComponent_ng_template_52_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eventSS_r39 = ctx.$implicit;
    const i_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r40 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](eventSS_r39.swasthya_sahayika_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](eventSS_r39.branch_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](eventSS_r39.village_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", eventSS_r39.user_firstname ? eventSS_r39.user_firstname : "-", " ", eventSS_r39.user_middlename, " ", eventSS_r39.user_lastname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", eventSS_r39.countAttendance ? eventSS_r39.countAttendance : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](eventSS_r39.status ? eventSS_r39.status : "-");
} }
function SsTrainingComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Participants Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SsTrainingComponent_ng_template_52_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.detailsOfParticipantsModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "thead", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "SS Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Staff In Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Attendance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tbody", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, SsTrainingComponent_ng_template_52_tr_31_Template, 15, 9, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.eventSSList);
} }
function SsTrainingComponent_ng_template_54_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create SS Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_ng_template_54_h3_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Edit SS Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_ng_template_54_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 67);
} }
function SsTrainingComponent_ng_template_54_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Region Name:\u00A0\u00A0", ctx_r46.regionName ? ctx_r46.regionName : "NA", "");
} }
function SsTrainingComponent_ng_template_54_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trainingType_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", trainingType_r56.training_type_master_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", trainingType_r56.training_type_name, " ");
} }
function SsTrainingComponent_ng_template_54_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Type Of Training selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_ng_template_54_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SsTrainingComponent_ng_template_54_div_28_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r48.t.trainingType.errors.required);
} }
function SsTrainingComponent_ng_template_54_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "From Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_ng_template_54_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SsTrainingComponent_ng_template_54_div_40_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r49.t.fromDate.errors.required);
} }
function SsTrainingComponent_ng_template_54_div_54_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trainingtopic_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", trainingtopic_r61.ss_training_event_topic_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", trainingtopic_r61.ss_training_event_topic_name, " ");
} }
function SsTrainingComponent_ng_template_54_div_54_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Topic of Training selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_ng_template_54_div_54_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SsTrainingComponent_ng_template_54_div_54_div_9_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.t.trainingtopic.errors.required);
} }
function SsTrainingComponent_ng_template_54_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Topic of Training :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "-- Select Training Topic --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SsTrainingComponent_ng_template_54_div_54_option_8_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SsTrainingComponent_ng_template_54_div_54_div_9_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r50.t.trainingtopic.invalid && ctx_r50.t.trainingtopic.touched, ctx_r50.t.trainingtopic.valid && (ctx_r50.t.trainingtopic.dirty || ctx_r50.t.trainingtopic.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r50.ssTrainingTopic);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r50.t.trainingtopic.errors);
} }
function SsTrainingComponent_ng_template_54_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", branch_r63.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", branch_r63.branchName, " ");
} }
function SsTrainingComponent_ng_template_54_div_68_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_ng_template_54_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SsTrainingComponent_ng_template_54_div_68_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r52.t.ssbranch.errors.required);
} }
function SsTrainingComponent_ng_template_54_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Participant selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_ng_template_54_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SsTrainingComponent_ng_template_54_div_81_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r53.t.participantType.errors.required);
} }
function SsTrainingComponent_ng_template_54_option_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const staff_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", staff_r66.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"](" ", staff_r66.user_firstname, " ", staff_r66.user_middlename, " ", staff_r66.user_lastname, " - ", staff_r66.role_shortname, " ");
} }
function SsTrainingComponent_ng_template_54_tr_111_input_12_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SsTrainingComponent_ng_template_54_tr_111_input_12_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const ss_r67 = ctx_r72.$implicit; const i_r68 = ctx_r72.index; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r71.selectSSForTraining(ss_r67, i_r68, $event.target.checked, ss_r67.swasthya_sahayika_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_ng_template_54_tr_111_input_13_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SsTrainingComponent_ng_template_54_tr_111_input_13_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const ss_r67 = ctx_r75.$implicit; const i_r68 = ctx_r75.index; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r74.selectSSForTraining(ss_r67, i_r68, $event.target.checked, ss_r67.swasthya_sahayika_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SsTrainingComponent_ng_template_54_tr_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SsTrainingComponent_ng_template_54_tr_111_input_12_Template, 1, 0, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SsTrainingComponent_ng_template_54_tr_111_input_13_Template, 1, 0, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ss_r67 = ctx.$implicit;
    const i_r68 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r68 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ss_r67.swasthya_sahayika_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ss_r67.branch_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ss_r67.village_name ? ss_r67.village_name : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ss_r67.user_firstname ? ss_r67.user_firstname : "-", " ", ss_r67.user_middlename, " ", ss_r67.user_lastname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ss_r67.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ss_r67.isChecked == false);
} }
function SsTrainingComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SsTrainingComponent_ng_template_54_h3_4_Template, 2, 0, "h3", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SsTrainingComponent_ng_template_54_h3_5_Template, 2, 0, "h3", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SsTrainingComponent_ng_template_54_div_6_Template, 1, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SsTrainingComponent_ng_template_54_div_7_Template, 3, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SsTrainingComponent_ng_template_54_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r77.ssTrainingModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Type of Training:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SsTrainingComponent_ng_template_54_Template_select_change_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r79.changeTrainingType($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "-- Select Training Type --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SsTrainingComponent_ng_template_54_option_27_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SsTrainingComponent_ng_template_54_div_28_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Duration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "From Date:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SsTrainingComponent_ng_template_54_Template_input_keydown_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r80.restrictTypeOfDate(); })("change", function SsTrainingComponent_ng_template_54_Template_input_change_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r81.expectToDate($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, SsTrainingComponent_ng_template_54_div_40_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "To Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Trainer Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function SsTrainingComponent_ng_template_54_Template_input_keypress_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r82.validationService.onlyAlphabetsAndSpace($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Trainer Designation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function SsTrainingComponent_ng_template_54_Template_input_keypress_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r83.validationService.onlyAlphabetsAndSpace($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, SsTrainingComponent_ng_template_54_div_54_Template, 10, 6, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "fieldset", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "legend", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "ADD SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Branch:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "select", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SsTrainingComponent_ng_template_54_Template_select_change_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r84.changessbranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, SsTrainingComponent_ng_template_54_option_67_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, SsTrainingComponent_ng_template_54_div_68_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Participant Type:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SsTrainingComponent_ng_template_54_Template_select_change_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r85.filterSSList($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "-- Select Participant --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Fresh SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Absent SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, SsTrainingComponent_ng_template_54_div_81_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Staff In Charge:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SsTrainingComponent_ng_template_54_Template_select_change_85_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r86.changestaff($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "-- Filter By Staff --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, SsTrainingComponent_ng_template_54_option_90_Template, 2, 5, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "No User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "thead", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "SS Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Staff In Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "tbody", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, SsTrainingComponent_ng_template_54_tr_111_Template, 14, 9, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SsTrainingComponent_ng_template_54_Template_button_click_114_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r87.saveSSTrainingForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r7.SSTrainingEditData == null ? null : ctx_r7.SSTrainingEditData.training_event_master_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.SSTrainingEditData == null ? null : ctx_r7.SSTrainingEditData.training_event_master_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.lowerRoleBranchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.lowerRoleBranchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Branch Name:\u00A0\u00A0", ctx_r7.branchName ? ctx_r7.branchName : "NA", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r7.createSSTrainingEventForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](22, _c0, ctx_r7.t.trainingType.invalid && ctx_r7.t.trainingType.touched, ctx_r7.t.trainingType.valid && (ctx_r7.t.trainingType.dirty || ctx_r7.t.trainingType.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.ssTrainingType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.t.trainingType.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r7.setFromDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](25, _c0, ctx_r7.t.fromDate.invalid && ctx_r7.t.fromDate.touched, ctx_r7.t.fromDate.valid && (ctx_r7.t.fromDate.dirty || ctx_r7.t.fromDate.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.t.fromDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r7.setToDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.createSSTrainingEventForm.value.trainingType == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](28, _c0, ctx_r7.t.ssbranch.invalid && ctx_r7.t.ssbranch.touched, ctx_r7.t.ssbranch.valid && (ctx_r7.t.ssbranch.dirty || ctx_r7.t.ssbranch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.t.ssbranch.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](31, _c0, ctx_r7.t.participantType.invalid && ctx_r7.t.participantType.touched, ctx_r7.t.participantType.valid && (ctx_r7.t.participantType.dirty || ctx_r7.t.participantType.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.t.participantType.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.staffList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.ssList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r7.disabledSaveTrainingForm());
} }
const _c1 = function (a0) { return { training_type_name: a0 }; };
const _c2 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class SsTrainingComponent {
    constructor(fb, http, sidebarService, toaster, httpService, ssTrainingService, modalService, config, validationService, confirmationDialogService, router) {
        this.fb = fb;
        this.http = http;
        this.sidebarService = sidebarService;
        this.toaster = toaster;
        this.httpService = httpService;
        this.ssTrainingService = ssTrainingService;
        this.modalService = modalService;
        this.validationService = validationService;
        this.confirmationDialogService = confirmationDialogService;
        this.router = router;
        this.regionList = [];
        this.branchList = [];
        this.villagesOfBranch = [];
        this.ssEventList = [];
        this.eventSSList = [];
        this.ssList = [];
        this.AllSSList = [];
        this.ssTrainingType = [];
        this.ssTrainingTopic = [];
        this.ssTrainingDataPushPop = [];
        this.allBranchID = [];
        this.checkedSS = [];
        this.page = 1;
        this.pageSize = 6;
        this.staffList = [];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngDoCheck() {
        this.searchFullscreen = this.validationService.val;
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.role = this.sidebarService.RoleDTOName;
        console.log(this.role, 'role');
        this.createForm();
        this.sidebarService.checkRoledetailDTO().then((res) => {
            if (res.regionBranchHide) {
                this.regionList = res.region;
                this.regionBranchHide = res.regionBranchHide;
            }
            else {
                this.lowerRoleBranchId = res.branchId;
                this.branchList = res.branchLIST;
                this.branchName = res.branchName;
                console.log(this.branchName, 'this.branchName');
                this.allBranchID.push(this.lowerRoleBranchId);
                console.log(this.lowerRoleBranchId, 'lowerRoleBranchId');
                let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
                let Dto = {
                    dataAccessDTO: {
                        userId: dataAccessDTO.userName,
                        userName: dataAccessDTO.userId,
                    },
                    branchId: this.lowerRoleBranchId
                };
                this.regionBranchHide = res.regionBranchHide;
                this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res) => {
                    if (res.sessionDTO.status == true) {
                        this.villagesOfBranch = res.responseObject;
                    }
                });
                let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.lowerRoleBranchId };
                this.ssTrainingService.branchWiseSSTrainingEventList(req).subscribe((res) => {
                    this.ssEventList = res.responseObject.branchWiseSsTrainingEventList;
                    console.log(this.ssEventList);
                });
            }
        });
        ((_c = (_b = (_a = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 7)) === null || _a === void 0 ? void 0 : _a.subMenuDetailList.find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)) === null || _b === void 0 ? void 0 : _b.accessDetailList.find(accessType => accessType.accessType == 'view')) === null || _c === void 0 ? void 0 : _c.accessType) ? this.router.navigate(['/ss-training']) : this.router.navigate(['/error']);
        this.createMode = ((_f = (_e = (_d = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 7)) === null || _d === void 0 ? void 0 : _d.subMenuDetailList.find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)) === null || _e === void 0 ? void 0 : _e.accessDetailList.find(accessType => accessType.accessType == 'create')) === null || _f === void 0 ? void 0 : _f.accessType) ? true : false;
        this.updateMode = ((_j = (_h = (_g = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 7)) === null || _g === void 0 ? void 0 : _g.subMenuDetailList.find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)) === null || _h === void 0 ? void 0 : _h.accessDetailList.find(accessType => accessType.accessType == 'update')) === null || _j === void 0 ? void 0 : _j.accessType) ? true : false;
        this.deleteMode = ((_m = (_l = (_k = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 7)) === null || _k === void 0 ? void 0 : _k.subMenuDetailList.find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)) === null || _l === void 0 ? void 0 : _l.accessDetailList.find(accessType => accessType.accessType == 'delete')) === null || _m === void 0 ? void 0 : _m.accessType) ? true : false;
    }
    createForm() {
        this.viewSSTrainingEventForm = this.fb.group({
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    get l() {
        return this.viewSSTrainingEventForm.controls;
    }
    changeRegion(regionId) {
        var _a;
        this.regionID = regionId;
        console.log(this.regionID);
        this.regionName = (_a = this.regionList.find((reg) => reg.regionMasterId == this.regionID)) === null || _a === void 0 ? void 0 : _a.regionName;
        console.log(this.regionName, 'this.regionName');
        let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: this.regionID };
        this.ssTrainingService.listOfBranchesOfARegion(req).subscribe((res) => {
            this.branchList = res.responseObject;
            this.branchList.forEach((item) => {
                this.allBranchID.push(item.branchId);
                console.log(this.allBranchID);
            });
        });
        this.viewSSTrainingEventForm.controls.branch.setValue('');
        this.ssEventList = [];
        if (this.viewSSTrainingEventForm.value.region == '') {
            this.viewSSTrainingEventForm.controls.branch.setValue('');
            this.ssEventList = [];
            this.branchList = [];
        }
    }
    changeBranch(branchId) {
        var _a;
        this.upperRoleBranchId = branchId;
        let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
        this.ssTrainingService.branchWiseSSTrainingEventList(req).subscribe((res) => {
            this.ssEventList = res.responseObject.branchWiseSsTrainingEventList;
            console.log(this.ssEventList);
        });
        this.branchName = (_a = this.branchList.find((item) => item.branchId == branchId)) === null || _a === void 0 ? void 0 : _a.branchName;
        console.log(this.branchName, ' this.branchName');
    }
    viewParticipantsDetails(detailsOfParticipants, ssList) {
        this.eventSSList = ssList;
        console.log(this.eventSSList, 'ssList');
        this.modalContent = '';
        this.modalReference = this.modalService.open(detailsOfParticipants, {
            windowClass: 'detailsOfParticipants',
        });
    }
    detailsOfParticipantsModalDismiss() {
        var _a;
        (_a = this.modalReference) === null || _a === void 0 ? void 0 : _a.close();
    }
    createSSTrainingEvents(SSTraining) {
        console.log(this.SSTrainingEditData, 'SSTrainingEditData');
        console.log(this.lowerRoleBranchId, 'lowerRoleBranchId');
        console.log(this.upperRoleBranchId, 'upperRoleBranchId');
        console.log(this.regionID, 'regionID');
        console.log(this.regionName, 'this.regionName');
        setTimeout(() => {
            this.modalContent = '';
            this.modalReference = this.modalService.open(SSTraining, {
                windowClass: 'SSTraining',
            });
        }, 1000);
        this.ssTrainingFormModal();
        if (!this.createSSTrainingEventForm.value.trainingType) {
            this.createSSTrainingEventForm.controls['duration'].disable();
            this.createSSTrainingEventForm.controls['fromDate'].disable();
            this.createSSTrainingEventForm.controls['toDate'].disable();
            this.createSSTrainingEventForm.controls['ssbranch'].disable();
            this.createSSTrainingEventForm.controls['participantType'].disable();
            this.createSSTrainingEventForm.controls['staff'].disable();
        }
        let req = { dataAccessDTO: this.httpService.dataAccessDTO };
        this.ssTrainingService.ssTrainingTypeAndTopic(req).subscribe((res) => {
            this.ssTrainingType = res.responseObject.ssTrainingType;
            this.ssTrainingTopic = res.responseObject.ssTrainingTopic;
            console.log(this.ssTrainingType, ' this.ssTrainingType');
            console.log(this.ssTrainingTopic, ' this.ssTrainingTopic');
        });
    }
    editSSTrainingEvents(event, SSTraining) {
        this.SSTrainingEditData = event;
        console.log(this.SSTrainingEditData, 'SSTrainingEditData');
        this.createSSTrainingEvents(SSTraining);
    }
    ssTrainingFormModal() {
        var data = this.SSTrainingEditData;
        console.log(data, 'data');
        this.createSSTrainingEventForm = this.fb.group({
            trainingType: [(data === null || data === void 0 ? void 0 : data.training_type_master_id) ? data === null || data === void 0 ? void 0 : data.training_type_master_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            duration: [''],
            fromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toDate: [''],
            trainername: [(data === null || data === void 0 ? void 0 : data.trainer_name) ? data === null || data === void 0 ? void 0 : data.trainer_name : ''],
            trainerdesignation: [(data === null || data === void 0 ? void 0 : data.trainer_designation) ? data === null || data === void 0 ? void 0 : data.trainer_designation : ''],
            trainingtopic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ssbranch: [this.upperRoleBranchId ? this.upperRoleBranchId : this.lowerRoleBranchId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            participantType: ['fresh', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            staff: ['']
        });
        this.createSSTrainingEventForm.markAllAsTouched();
        if (data) {
            this.changeTrainingType(data === null || data === void 0 ? void 0 : data.training_type_master_id);
            this.createSSTrainingEventForm.controls['toDate'].disable();
            this.createSSTrainingEventForm.controls.fromDate.setValue(data === null || data === void 0 ? void 0 : data.ss_training_event_start_date);
            this.expectToDate(data === null || data === void 0 ? void 0 : data.ss_training_event_start_date);
            this.createSSTrainingEventForm.controls.trainingtopic.setValue(data === null || data === void 0 ? void 0 : data.ss_training_event_topic_master_id);
        }
        this.branchWiseStaffList();
    }
    branchWiseStaffList() {
        let hcoreq = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            branchId: this.createSSTrainingEventForm.value.ssbranch
        };
        console.log(hcoreq, 'hcoreq');
        this.ssTrainingService.staffListOfBranch(hcoreq).subscribe((res) => {
            this.staffList = res.responseObject;
            console.log(this.staffList, 'staffList');
        });
    }
    get t() {
        return this.createSSTrainingEventForm.controls;
    }
    getMinDate() {
        let today = new Date().toISOString().slice(0, 10);
        this.setFromDate = moment__WEBPACK_IMPORTED_MODULE_3__(today).add(1, "days").format("YYYY-MM-DD");
    }
    expectToDate(e) {
        console.log(this.durationValue, 'this.durationValue');
        var mydate = new Date(e);
        if (mydate.getDay() == 0) {
            this.showError('Sunday not allowed');
            this.createSSTrainingEventForm.controls.fromDate.setValue('');
            this.createSSTrainingEventForm.controls.toDate.setValue('');
            return;
        }
        if (this.createSSTrainingEventForm.value.trainingType == 2) {
            this.setToDate = this.createSSTrainingEventForm.value.fromDate;
            this.createSSTrainingEventForm.controls.toDate.setValue(this.setToDate);
            this.createSSTrainingEventForm.value.toDate = this.setToDate;
            console.log(this.setToDate, 'ifcondition');
        }
        else {
            e = new Date(e === null || e === void 0 ? void 0 : e.replace(/-/g, "/"));
            var endDate, noOfDaysToAdd = (this.durationValue - 1), count = 0;
            while (count < noOfDaysToAdd) {
                endDate = new Date(e.setDate(e.getDate() + 1));
                if (endDate.getDay() != 0) {
                    count++;
                }
            }
            this.setToDate = moment__WEBPACK_IMPORTED_MODULE_3__(endDate).format("YYYY-MM-DD");
            this.createSSTrainingEventForm.controls.toDate.setValue(this.setToDate);
            this.createSSTrainingEventForm.value.toDate = this.setToDate;
            console.log(this.setToDate, 'elsecondition');
        }
    }
    changeTrainingType(e) {
        this.getMinDate();
        this.createSSTrainingEventForm.controls.participantType.setValue('fresh');
        this.createSSTrainingEventForm.controls.trainingtopic.setValue('');
        if (e == 1) {
            this.createSSTrainingEventForm.controls.duration.setValue(6);
            this.createSSTrainingEventForm.value.duration = 6;
            this.durationValue = this.createSSTrainingEventForm.value.duration;
            this.changeparticipantType('fresh', this.staffID);
            this.createSSTrainingEventForm.controls['ssbranch'].enable();
            this.createSSTrainingEventForm.controls['participantType'].enable();
            this.createSSTrainingEventForm.controls['staff'].enable();
        }
        else if (e == 2) {
            this.createSSTrainingEventForm.controls.duration.setValue(1);
            this.createSSTrainingEventForm.value.duration = 1;
            this.durationValue = this.createSSTrainingEventForm.value.duration;
            this.changeparticipantType('fresh', this.staffID);
            this.createSSTrainingEventForm.controls['ssbranch'].enable();
            this.createSSTrainingEventForm.controls['participantType'].enable();
            this.createSSTrainingEventForm.controls['staff'].enable();
        }
        else if (e == 3) {
            this.createSSTrainingEventForm.controls.duration.setValue(2);
            this.createSSTrainingEventForm.value.duration = 2;
            this.durationValue = this.createSSTrainingEventForm.value.duration;
            this.changeparticipantType('fresh', this.staffID);
            this.createSSTrainingEventForm.controls['ssbranch'].enable();
            this.createSSTrainingEventForm.controls['participantType'].disable();
            this.createSSTrainingEventForm.controls['staff'].enable();
        }
        else if (e == 4) {
            this.createSSTrainingEventForm.controls.duration.setValue(2);
            this.createSSTrainingEventForm.value.duration = 2;
            this.durationValue = this.createSSTrainingEventForm.value.duration;
            this.changeparticipantType('fresh', this.staffID);
            this.createSSTrainingEventForm.controls['ssbranch'].enable();
            this.createSSTrainingEventForm.controls['participantType'].disable();
            this.createSSTrainingEventForm.controls['staff'].enable();
        }
        else {
            this.ssList = [];
            this.createSSTrainingEventForm.controls['ssbranch'].disable();
            this.createSSTrainingEventForm.controls['participantType'].disable();
            this.createSSTrainingEventForm.controls['staff'].disable();
        }
        console.log(this.createSSTrainingEventForm.value.duration, 'formdurationvalue');
        console.log(this.durationValue, 'vardurationvalue');
        this.createSSTrainingEventForm.controls.fromDate.setValue('');
        this.createSSTrainingEventForm.controls.toDate.setValue('');
        if (this.createSSTrainingEventForm.value.trainingType) {
            this.createSSTrainingEventForm.controls['fromDate'].enable();
        }
        else {
            this.createSSTrainingEventForm.controls['fromDate'].disable();
            this.createSSTrainingEventForm.controls.duration.setValue('');
            this.createSSTrainingEventForm.controls.fromDate.setValue('');
            this.createSSTrainingEventForm.controls.toDate.setValue('');
        }
    }
    changeparticipantType(participantType, staffID) {
        console.log(this.allBranchID, 'this.allBranchIDthis.allBranchID');
        let ssListObj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            branchId: this.allBranchID,
            trainingTypeMasterId: this.createSSTrainingEventForm.value.trainingType
        };
        this.ssTrainingService.getSSList(ssListObj).subscribe((res) => {
            var _a, _b, _c, _d, _e;
            this.AllSSList = res.responseObject;
            this.AllSSList = (_a = this.AllSSList) === null || _a === void 0 ? void 0 : _a.map((_a) => {
                var { isChecked = false } = _a, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["isChecked"]);
                return (Object.assign({ isChecked }, rest));
            });
            this.ssList = this.AllSSList;
            console.log(this.ssList, 'this.AllSSList');
            if (this.SSTrainingEditData) {
                (_b = this.ssList) === null || _b === void 0 ? void 0 : _b.forEach((item) => {
                    var _a, _b;
                    if ((_b = (_a = this.SSTrainingEditData) === null || _a === void 0 ? void 0 : _a.ssList) === null || _b === void 0 ? void 0 : _b.find(it => it.swasthya_sahayika_id == item.swasthya_sahayika_id)) {
                        item.isChecked = true;
                    }
                });
            }
            console.log(this.ssList, 'this.ssList');
            console.log(this.lowerRoleBranchId, "lowerRoleBranchId");
            console.log(this.upperRoleBranchId, "upperRoleBranchId");
            this.ssList = (_c = this.ssList) === null || _c === void 0 ? void 0 : _c.filter((item) => item.branch_id == this.upperRoleBranchId ? this.upperRoleBranchId : this.lowerRoleBranchId);
            console.log(this.ssList, 'this.specificSSList');
            if (this.createSSTrainingEventForm.value.trainingType == 1 || this.createSSTrainingEventForm.value.trainingType == 2) {
                if (participantType == 'fresh') {
                    this.ssList = (_d = this.ssList) === null || _d === void 0 ? void 0 : _d.filter((item) => item.status == 'fresh');
                    console.log(this.ssList, ' freshSSList');
                }
                else if (participantType == 'absent') {
                    this.ssList = (_e = this.ssList) === null || _e === void 0 ? void 0 : _e.filter((item) => item.status != 'fresh');
                    console.log(this.ssList, 'absentSSList');
                }
                else {
                    this.ssList = [];
                }
            }
            if (this.createSSTrainingEventForm.value.staff) {
                console.log(staffID, 'staffID');
                if (staffID == 'viewall') {
                    this.ssList = this.ssList;
                    console.log(this.ssList, 'viewall');
                }
                else if (staffID == 'nouser') {
                    this.ssList = this.ssList.filter(item => item.user_id == null);
                    console.log(this.ssList, 'nullusersslist');
                }
                else {
                    this.ssList = this.ssList.filter(item => item.user_id == staffID);
                    console.log(this.ssList, 'staffidsslist');
                }
            }
        });
    }
    filterSSList(participantType) {
        this.createSSTrainingEventForm.controls.staff.setValue('');
        this.ssList = this.AllSSList;
        console.log(this.ssList, 'this.ssList');
        console.log(this.upperRoleBranchId, 'this.upperRoleBranchId ');
        console.log(this.lowerRoleBranchId, 'this.lowerRoleBranchId');
        this.ssList = this.ssList.filter((item) => item.branch_id == this.upperRoleBranchId ? this.upperRoleBranchId : this.lowerRoleBranchId);
        console.log(this.ssList, 'this.specificSSList');
        if (this.createSSTrainingEventForm.value.trainingType == 1 || this.createSSTrainingEventForm.value.trainingType == 2) {
            if (participantType == 'fresh') {
                this.ssList = this.ssList.filter((item) => item.status == 'fresh');
                console.log(this.ssList, ' freshSSList');
            }
            else if (participantType == 'absent') {
                this.ssList = this.ssList.filter((item) => item.status != 'fresh');
                console.log(this.ssList, 'absentSSList');
            }
            else {
                this.ssList = [];
            }
        }
    }
    changessbranch(e) {
        if (!this.lowerRoleBranchId) {
            this.upperRoleBranchId = e;
        }
        else {
            this.lowerRoleBranchId = e;
        }
        this.filterSSList('fresh');
        this.createSSTrainingEventForm.controls.participantType.setValue('fresh');
        this.createSSTrainingEventForm.controls.staff.setValue('');
        if (this.checked) {
            this.selectSSForTraining(this.indexWiseSSLIST, this.ssIndex, this.checked);
        }
        this.branchWiseStaffList();
    }
    selectSSForTraining(SSLIST, index, e) {
        this.indexWiseSSLIST = SSLIST;
        console.log(this.indexWiseSSLIST);
        this.ssIndex = index;
        this.checked = e;
        if (this.checked == true) {
            this.AllSSList.find(list => { var _a; return list.swasthya_sahayika_id == ((_a = this.indexWiseSSLIST) === null || _a === void 0 ? void 0 : _a.swasthya_sahayika_id); }).isChecked = true;
            console.log(this.AllSSList, 'ALLSSLIST');
        }
        else {
            this.AllSSList.find(list => { var _a; return list.swasthya_sahayika_id == ((_a = this.indexWiseSSLIST) === null || _a === void 0 ? void 0 : _a.swasthya_sahayika_id); }).isChecked = false;
            console.log(this.AllSSList, 'ALLSSLIST');
        }
    }
    disabledSaveTrainingForm() {
        var _a;
        let flag = true;
        if (!this.createSSTrainingEventForm.value.trainingType || !this.createSSTrainingEventForm.value.fromDate) {
            flag = false;
        }
        if (this.createSSTrainingEventForm.value.trainingType == 3) {
            if (!this.createSSTrainingEventForm.value.trainingtopic) {
                flag = false;
            }
        }
        var check = [];
        check = (_a = this.AllSSList) === null || _a === void 0 ? void 0 : _a.filter(item => item.isChecked == true);
        // console.log(check?.length);
        if ((check === null || check === void 0 ? void 0 : check.length) == 0) {
            flag = false;
        }
        return flag;
    }
    saveSSTrainingForm() {
        var _a, _b, _c, _d, _e, _f;
        this.ssTrainingDataPushPop = [];
        this.checkedSS = (_a = this.AllSSList) === null || _a === void 0 ? void 0 : _a.filter(item => item.isChecked == true);
        this.checkedSS.forEach((item => {
            this.checkedSS = item.swasthya_sahayika_id;
            console.log(this.checkedSS, 'checkedSS');
            this.ssTrainingDataPushPop.push(this.checkedSS);
            console.log(this.ssTrainingDataPushPop);
        }));
        var ssSaveObj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            training_event_master_id: ((_b = this.SSTrainingEditData) === null || _b === void 0 ? void 0 : _b.training_event_master_id) ? (_c = this.SSTrainingEditData) === null || _c === void 0 ? void 0 : _c.training_event_master_id : 0,
            active_flag: this.SSTrainingEditData ? 'A' : 'UA',
            ss_training_event_type: (_d = this.createSSTrainingEventForm) === null || _d === void 0 ? void 0 : _d.value.trainingType,
            ss_training_event_topic_master_id: ((_e = this.createSSTrainingEventForm) === null || _e === void 0 ? void 0 : _e.value.trainingtopic) ? (_f = this.createSSTrainingEventForm) === null || _f === void 0 ? void 0 : _f.value.trainingtopic : 0,
            ss_training_event_start_date: this.createSSTrainingEventForm.value.fromDate,
            ss_training_event_end_date: this.setToDate,
            trainer_name: this.validationService.camelize(this.createSSTrainingEventForm.value.trainername.trim()),
            trainer_designation: this.validationService.camelize(this.createSSTrainingEventForm.value.trainerdesignation.trim()),
            branchId: this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId,
            ssList: this.ssTrainingDataPushPop
        };
        console.log(ssSaveObj, 'ssSaveObj');
        this.ssTrainingService.createUpdateDeleteSSTraining(ssSaveObj).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.ssTrainingModalDismiss();
                this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
            }
            else {
                this.showError(res.message);
            }
        });
    }
    ssTrainingModalDismiss() {
        var _a, _b, _c, _d;
        console.log((_a = this.SSTrainingEditData) === null || _a === void 0 ? void 0 : _a.training_event_master_id, 'training_event_master_id');
        var ID = (_b = this.SSTrainingEditData) === null || _b === void 0 ? void 0 : _b.training_event_master_id;
        if (ID) {
            this.SSTrainingEditData = [];
            ID = 0;
            (_c = this.modalReference) === null || _c === void 0 ? void 0 : _c.close();
        }
        else {
            (_d = this.modalReference) === null || _d === void 0 ? void 0 : _d.close();
            this.ssList = [];
            this.ssTrainingDataPushPop = [];
        }
    }
    deleteSSTrainingEvents(event) {
        this.confirmationDialogService.confirm('', 'Are you sure you want to delete ss training record ?')
            .then(() => this.delete(event))
            .catch(() => '');
    }
    delete(event) {
        var ssDeleteObj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            training_event_master_id: event === null || event === void 0 ? void 0 : event.training_event_master_id,
            active_flag: 'D',
            ss_training_event_type: event === null || event === void 0 ? void 0 : event.training_type_master_id,
            ss_training_event_topic_master_id: event === null || event === void 0 ? void 0 : event.ss_training_event_topic_master_id,
            ss_training_event_start_date: event === null || event === void 0 ? void 0 : event.ss_training_event_start_date,
            ss_training_event_end_date: event === null || event === void 0 ? void 0 : event.ss_training_event_end_date,
            trainer_name: event === null || event === void 0 ? void 0 : event.trainer_name,
            trainer_designation: event === null || event === void 0 ? void 0 : event.trainer_designation,
            branchId: this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId,
            ssList: event === null || event === void 0 ? void 0 : event.ssList
        };
        console.log(ssDeleteObj);
        this.ssTrainingService.createUpdateDeleteSSTraining(ssDeleteObj).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.ssTrainingModalDismiss();
                this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
            }
            else {
                this.showError(res.message);
            }
        });
    }
    approveSSTrainingEvents(event) {
        this.confirmationDialogService.confirm('', 'Are you sure you want to approve ss training record ?')
            .then(() => this.approveSS(event))
            .catch(() => '');
    }
    approveSS(event) {
        var ssTrainingObj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            training_event_master_id: event.training_event_master_id
        };
        console.log(ssTrainingObj);
        this.ssTrainingService.approveSSTraining(ssTrainingObj).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
            }
            else {
                this.showError(res.message);
            }
        });
    }
    changestaff(staffid) {
        this.staffID = staffid;
        this.changeparticipantType(this.createSSTrainingEventForm.value.participantType, this.staffID);
    }
    showSuccess(message) {
        this.toaster.success(message, 'SS Training Event', {
            timeOut: 3000,
        });
    }
    showError(message) {
        this.toaster.error(message, 'SS Training Event', {
            timeOut: 3000,
        });
    }
    restrictTypeOfDate() { return false; }
}
SsTrainingComponent.ɵfac = function SsTrainingComponent_Factory(t) { return new (t || SsTrainingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ss_training_service__WEBPACK_IMPORTED_MODULE_8__["SsTrainingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_10__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"])); };
SsTrainingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SsTrainingComponent, selectors: [["app-ss-training"]], decls: 56, vars: 17, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search by Type Of Training...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "8%"], [2, "width", "25%"], [2, "width", "20%"], ["style", "width:20%;", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["detailsOfParticipants", ""], ["SSTraining", ""], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], [1, "fas", "fa-plus-circle", 2, "cursor", "pointer", 3, "click"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [2, "cursor", "pointer", "color", "blue", 3, "click"], ["style", "width: 20%;", 4, "ngIf"], ["class", "fas fa-edit", "title", "Edit SS Training Event", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete SS Training Event", 3, "click", 4, "ngIf"], ["class", "fas fa-check-circle", "title", "Approve SS Training Event", 3, "click", 4, "ngIf"], ["title", "Edit SS Training Event", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete SS Training Event", 1, "fas", "fa-trash", 3, "click"], ["title", "Approve SS Training Event", 1, "fas", "fa-check-circle", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], [1, "closes", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], [2, "width", "5%"], [2, "width", "30%"], [2, "width", "10%"], [2, "text-align", "center"], [1, "col-md-4"], ["class", "modal-title", "id", "modal-basic-title", 4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-2"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "col-md-6"], [2, "margin-left", "-40px"], ["for", "trainingType"], ["formControlName", "trainingType", "id", "trainingType", 1, "form-select", 3, "ngClass", "change"], ["for", "duration"], ["type", "text", "placeholder", "Training Duration", "formControlName", "duration", 1, "form-control"], ["for", "fromDate"], ["type", "date", "formControlName", "fromDate", 1, "form-control", 3, "min", "ngClass", "keydown", "change"], ["for", "toDate"], ["type", "date", "formControlName", "toDate", 1, "form-control", 3, "min"], ["for", "trainername"], ["type", "text", "placeholder", "Trainer Name", "formControlName", "trainername", "maxlength", "45", 1, "form-control", 2, "text-transform", "capitalize", 3, "keypress"], ["for", "trainerdesignation"], ["type", "text", "placeholder", "Trainer Designation", "formControlName", "trainerdesignation", "maxlength", "45", 1, "form-control", 2, "text-transform", "capitalize", 3, "keypress"], ["class", "form-group col-md", 4, "ngIf"], [1, "scheduler-border"], [1, "form-group", "col-md-4"], ["for", "ssbranch"], ["formControlName", "ssbranch", "id", "ssbranch", 1, "form-select", 2, "width", "99%", 3, "ngClass", "change"], ["for", "participantType"], ["formControlName", "participantType", "id", "participantType", 1, "form-select", 2, "width", "100%", 3, "ngClass", "change"], ["value", "fresh"], ["value", "absent"], ["for", "staff"], ["formControlName", "staff", "id", "staff", 1, "form-select", 3, "change"], ["value", "viewall"], ["value", "nouser"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [2, "margin-left", "100px"], ["for", "trainingtopic"], ["formControlName", "trainingtopic", "id", "trainingtopic", 1, "form-select", 3, "ngClass"], ["class", "form-check-input", "type", "checkbox", "checked", "", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["type", "checkbox", "checked", "", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"]], template: function SsTrainingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SS Training Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SsTrainingComponent_div_7_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SsTrainingComponent_div_9_Template, 21, 12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SsTrainingComponent_Template_input_ngModelChange_15_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "thead", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "SL No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Type of");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "SS Participated");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "SS Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, SsTrainingComponent_th_46_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, SsTrainingComponent_tr_48_Template, 18, 8, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "ssTraining");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "pagination-controls", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function SsTrainingComponent_Template_pagination_controls_pageChange_51_listener($event) { return ctx.p = $event; })("pageBoundsCorrection", function SsTrainingComponent_Template_pagination_controls_pageBoundsCorrection_51_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, SsTrainingComponent_ng_template_52_Template, 32, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, SsTrainingComponent_ng_template_54_Template, 116, 34, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.viewSSTrainingEventForm.value.branch || ctx.lowerRoleBranchId) && ctx.createMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.viewSSTrainingEventForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.updateMode || ctx.deleteMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](49, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](50, 10, ctx.ssEventList, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, ctx.searchText)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c2, ctx.p)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginatePipe"], _shared_ss_training_search_pipe__WEBPACK_IMPORTED_MODULE_15__["ssTrainingPipe"]], styles: [".close[_ngcontent-%COMP%] {\r\n  margin-right: 885px;\r\n}\r\n\r\n.closes[_ngcontent-%COMP%] {\r\n  margin-left: 610px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  overflow-x: hidden;\r\n  width: 850px;\r\n  margin-left: -130px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n}\r\n\r\n.fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #499;\r\n  font-size: 20px;\r\n}\r\n\r\n.fa-check-circle[_ngcontent-%COMP%]:hover {\r\n  color: darkgreen !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 150px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 540px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 840px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 690px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 850px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 140px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNzLXRyYWluaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcy10cmFpbmluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDg4NXB4O1xyXG59XHJcblxyXG4uY2xvc2VzIHtcclxuICBtYXJnaW4tbGVmdDogNjEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBoZWlnaHQ6IDQzMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB3aWR0aDogODUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMzBweDtcclxufVxyXG5cclxuLnRhYmxlIHRoIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZhLXBsdXMtY2lyY2xlIHtcclxuICBjb2xvcjogIzQ5OTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5mYS1jaGVjay1jaXJjbGU6aG92ZXIge1xyXG4gIGNvbG9yOiBkYXJrZ3JlZW4gIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogNTQwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogODQwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW4tbGVmdDogNjkwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gaW5wdXQge1xyXG4gIHdpZHRoOiA3NCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDg1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIgLnNlYXJjaF9pbm5lciBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SsTrainingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-ss-training',
                templateUrl: './ss-training.component.html',
                styleUrls: ['./ss-training.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] }, { type: _ss_training_service__WEBPACK_IMPORTED_MODULE_8__["SsTrainingService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalConfig"] }, { type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_10__["ValidationService"] }, { type: _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationDialogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-ss-training-ss-training-module.js.map