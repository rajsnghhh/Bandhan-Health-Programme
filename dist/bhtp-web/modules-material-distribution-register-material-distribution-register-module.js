(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-material-distribution-register-material-distribution-register-module"],{

/***/ "JZ5p":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/material-distribution-register/material-distribution-register-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MaterialDistributionRegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDistributionRegisterRoutingModule", function() { return MaterialDistributionRegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _material_distribution_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-distribution-register.component */ "YNtd");





const routes = [{ path: '', component: _material_distribution_register_component__WEBPACK_IMPORTED_MODULE_2__["MaterialDistributionRegisterComponent"] }];
class MaterialDistributionRegisterRoutingModule {
}
MaterialDistributionRegisterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialDistributionRegisterRoutingModule });
MaterialDistributionRegisterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialDistributionRegisterRoutingModule_Factory(t) { return new (t || MaterialDistributionRegisterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialDistributionRegisterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialDistributionRegisterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "OL2Z":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/material-distribution-register/material-distribution-register.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: MaterialDistributionRegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDistributionRegisterModule", function() { return MaterialDistributionRegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _material_distribution_register_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-distribution-register-routing.module */ "JZ5p");
/* harmony import */ var _material_distribution_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-distribution-register.component */ "YNtd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");









class MaterialDistributionRegisterModule {
}
MaterialDistributionRegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialDistributionRegisterModule });
MaterialDistributionRegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialDistributionRegisterModule_Factory(t) { return new (t || MaterialDistributionRegisterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_distribution_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["MaterialDistributionRegisterRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialDistributionRegisterModule, { declarations: [_material_distribution_register_component__WEBPACK_IMPORTED_MODULE_3__["MaterialDistributionRegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _material_distribution_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["MaterialDistributionRegisterRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialDistributionRegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_material_distribution_register_component__WEBPACK_IMPORTED_MODULE_3__["MaterialDistributionRegisterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _material_distribution_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["MaterialDistributionRegisterRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"].forRoot()
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "WcQT":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/material-distribution-register/material-distribution-register.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: MaterialDistributionRegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDistributionRegisterService", function() { return MaterialDistributionRegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MaterialDistributionRegisterService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    getBranchesOfRegion(obj) {
        return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
    }
    getVillagesOfBranch(obj) {
        return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj);
    }
    getEligibleFamilyDetails(obj) {
        return this.http.post(`${this.baseURL}mdregister/getEligibleMdRegisterFamily`, obj);
    }
    getFamilyChildDetails(obj) {
        return this.http.post(`${this.baseURL}mdregister/getFamilyChildDetails`, obj);
    }
    getItemSubItemList(obj) {
        return this.http.post(`${this.baseURL}mdregister/getItemSubItemList`, obj);
    }
    saveUpdateDeleteMaterialDistribution(obj) {
        return this.http.post(`${this.baseURL}mdregister/saveUpdateDeleteMaterialDistribution`, obj);
    }
    getMaterialDistributionList(obj) {
        return this.http.post(`${this.baseURL}mdregister/getMaterialDistributionList`, obj);
    }
}
MaterialDistributionRegisterService.ɵfac = function MaterialDistributionRegisterService_Factory(t) { return new (t || MaterialDistributionRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MaterialDistributionRegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MaterialDistributionRegisterService, factory: MaterialDistributionRegisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialDistributionRegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "YNtd":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/material-distribution-register/material-distribution-register.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: MaterialDistributionRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDistributionRegisterComponent", function() { return MaterialDistributionRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/http/http.service */ "YwHQ");
/* harmony import */ var _material_distribution_register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-distribution-register.service */ "WcQT");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/validation.service */ "yjnX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ "aQtA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");

















function MaterialDistributionRegisterComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_div_7_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](66); return ctx_r15.viewEligibleFamilyDetails(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00A0Create Material Distribution Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_9_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", region_r21.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", region_r21.regionName, " ");
} }
function MaterialDistributionRegisterComponent_div_9_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_9_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_9_div_10_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.m.region.errors.required);
} }
function MaterialDistributionRegisterComponent_div_9_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", branch_r23.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", branch_r23.branchName, " ");
} }
function MaterialDistributionRegisterComponent_div_9_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_9_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_9_div_20_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r20.m.branch.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function MaterialDistributionRegisterComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_div_9_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MaterialDistributionRegisterComponent_div_9_option_9_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MaterialDistributionRegisterComponent_div_9_div_10_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_div_9_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.changeBranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MaterialDistributionRegisterComponent_div_9_option_19_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MaterialDistributionRegisterComponent_div_9_div_20_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx_r1.m.region.invalid && ctx_r1.m.region.touched, ctx_r1.m.region.valid && (ctx_r1.m.region.dirty || ctx_r1.m.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.m.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, ctx_r1.m.branch.invalid && ctx_r1.m.branch.touched, ctx_r1.m.branch.valid && (ctx_r1.m.branch.dirty || ctx_r1.m.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.m.branch.errors);
} }
function MaterialDistributionRegisterComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", block_r28.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", block_r28.blockName, " ");
} }
function MaterialDistributionRegisterComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_20_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.m.block.errors.required);
} }
function MaterialDistributionRegisterComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gp_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", gp_r30.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gp_r30.name, " ");
} }
function MaterialDistributionRegisterComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_30_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.m.gp.errors.required);
} }
function MaterialDistributionRegisterComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vill_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", vill_r32.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vill_r32.villageName, " ");
} }
function MaterialDistributionRegisterComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_40_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.m.gram.errors.required);
} }
function MaterialDistributionRegisterComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_tr_60_Template_td_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const mat_r34 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](64); return ctx_r36.viewdistributionDetails(_r9, mat_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mat_r34 = ctx.$implicit;
    const i_r35 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r35 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mat_r34.family_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", mat_r34.first_name, "", mat_r34.middle_name, " ", mat_r34.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mat_r34.husband_or_guardian_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mat_r34.distributionCount);
} }
function MaterialDistributionRegisterComponent_ng_template_63_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const beneficiary_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", beneficiary_r46.child_name, " ");
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const beneficiary_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](beneficiary_r48.status);
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sub_item_r50.md_sub_item_name, "");
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_19_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_19_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const mat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](68); return ctx_r53.editMaterialDistributedFamily(_r13, mat_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_19_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_19_i_2_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const mat_r40 = ctx_r57.$implicit; const i_r41 = ctx_r57.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r56.deleteMaterialDistributedFamily(mat_r40, i_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_19_i_1_Template, 1, 0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_19_i_2_Template, 1, 0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r45.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r45.deleteMode);
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MaterialDistributionRegisterComponent_ng_template_63_tr_27_tr_6_Template, 3, 1, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MaterialDistributionRegisterComponent_ng_template_63_tr_27_tr_8_Template, 3, 1, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sub Item List");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MaterialDistributionRegisterComponent_ng_template_63_tr_27_li_16_Template, 2, 1, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_19_Template, 3, 2, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mat_r40 = ctx.$implicit;
    const i_r41 = ctx.index;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r41 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mat_r40.distribution_date.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r39.materialDistributionListFamilyWise[i_r41].childList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r39.materialDistributionListFamilyWise[i_r41].childList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mat_r40.subItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Other Item : ", ctx_r39.materialDistributionListFamilyWise[i_r41].other_item_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r39.updateMode || ctx_r39.deleteMode);
} }
function MaterialDistributionRegisterComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Distribution Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_63_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r59.viewDistributionDetailsModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Distribution Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Beneficiary Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Beneficiary Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MaterialDistributionRegisterComponent_ng_template_63_th_25_Template, 2, 0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tbody", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MaterialDistributionRegisterComponent_ng_template_63_tr_27_Template, 20, 7, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.updateMode || ctx_r10.deleteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.materialDistributionListFamilyWise);
} }
function MaterialDistributionRegisterComponent_ng_template_65_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_65_tr_46_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r65); const item_r62 = ctx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](68); return ctx_r64.createMaterialDistribution(_r13, item_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r62 = ctx.$implicit;
    const i_r63 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r63 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r62.family_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", item_r62.first_name, " ", item_r62.middle_name, " ", item_r62.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r62.husband_or_guardian_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r62.below2Current ? item_r62.below2Current : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r62.below5Current ? item_r62.below5Current : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r62.girl14To18Current ? item_r62.girl14To18Current : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r62.pregnant_woman);
} }
function MaterialDistributionRegisterComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Eligible Family List");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_65_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r66.eligibleFamilyDetailsModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "SL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Husband Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Child Under");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "2 yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Child 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "to 5 yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Adolescent Girl");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "14 to 18 yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Pregnant");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Distribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tbody", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, MaterialDistributionRegisterComponent_ng_template_65_tr_46_Template, 19, 10, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.eligibleFamilyList);
} }
function MaterialDistributionRegisterComponent_ng_template_67_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r73 = ctx.$implicit;
    const i_r74 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r74 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r73.child_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r73.dob.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r73.sex);
} }
function MaterialDistributionRegisterComponent_ng_template_67_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r75.item_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r75.item_name, " ");
} }
function MaterialDistributionRegisterComponent_ng_template_67_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Selection of Item List is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_67_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_ng_template_67_div_40_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r70.t.itemList.errors.required);
} }
function MaterialDistributionRegisterComponent_ng_template_67_div_41_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Selection of Sub Item List is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_67_div_41_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_ng_template_67_div_41_div_6_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r77.t.subItems.errors.required);
} }
function MaterialDistributionRegisterComponent_ng_template_67_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sub Item List:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ng-multiselect-dropdown", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function MaterialDistributionRegisterComponent_ng_template_67_div_41_Template_ng_multiselect_dropdown_onSelect_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r79.onItemSelect($event); })("onDeSelect", function MaterialDistributionRegisterComponent_ng_template_67_div_41_Template_ng_multiselect_dropdown_onDeSelect_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r81.onItemDeSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MaterialDistributionRegisterComponent_ng_template_67_div_41_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "Select Multiple Sub Item List")("settings", ctx_r71.dropdownSettings)("data", ctx_r71.subItemList)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx_r71.t.subItems.invalid && ctx_r71.t.subItems.touched, ctx_r71.t.subItems.valid && (ctx_r71.t.subItems.dirty || ctx_r71.t.subItems.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r71.t.subItems.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Other Sub Item : ", ctx_r71.createMaterialDistributionForm.value.enterSubItem, "");
} }
function MaterialDistributionRegisterComponent_ng_template_67_div_42_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sub Item is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_67_div_42_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_ng_template_67_div_42_div_6_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r82.t.enterSubItem.errors.required);
} }
function MaterialDistributionRegisterComponent_ng_template_67_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sub Item:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function MaterialDistributionRegisterComponent_ng_template_67_div_42_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r84.validationService.onlyAlphabetsAndSpace($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MaterialDistributionRegisterComponent_ng_template_67_div_42_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r72.t.enterSubItem.invalid && ctx_r72.t.enterSubItem.touched, ctx_r72.t.enterSubItem.valid && (ctx_r72.t.enterSubItem.dirty || ctx_r72.t.enterSubItem.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.t.enterSubItem.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Other Sub Item : ", ctx_r72.createMaterialDistributionForm.value.enterSubItem, "");
} }
function MaterialDistributionRegisterComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_67_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r86.createMaterialDistributionModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "fieldset", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "legend", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Beneficiary List");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tbody", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MaterialDistributionRegisterComponent_ng_template_67_tr_23_Template, 9, 4, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "fieldset", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "legend", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Distribute Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Item List:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "select", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_ng_template_67_Template_select_change_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r88.changeItemList($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "-- Select Item List --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, MaterialDistributionRegisterComponent_ng_template_67_option_37_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, MaterialDistributionRegisterComponent_ng_template_67_div_40_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, MaterialDistributionRegisterComponent_ng_template_67_div_41_Template, 10, 9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, MaterialDistributionRegisterComponent_ng_template_67_div_42_Template, 10, 6, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_67_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r89.createMaterialDistributionSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.eligibleChildList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r14.createMaterialDistributionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c0, ctx_r14.t.itemList.invalid && ctx_r14.t.itemList.touched, ctx_r14.t.itemList.valid && (ctx_r14.t.itemList.dirty || ctx_r14.t.itemList.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.itemList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.t.itemList.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.createMaterialDistributionForm.value.itemList != "OTHERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.createMaterialDistributionForm.value.itemList == "OTHERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r14.disabledSaveMaterialTraining());
} }
const _c1 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class MaterialDistributionRegisterComponent {
    constructor(fb, sidebarService, http, httpService, materialDistributionService, modalService, config, validationService, toaster, confirmationDialogService, router) {
        this.fb = fb;
        this.sidebarService = sidebarService;
        this.http = http;
        this.httpService = httpService;
        this.materialDistributionService = materialDistributionService;
        this.modalService = modalService;
        this.validationService = validationService;
        this.toaster = toaster;
        this.confirmationDialogService = confirmationDialogService;
        this.router = router;
        this.dropdownSettings = {};
        this.regionList = [];
        this.branchList = [];
        this.villagesOfBranch = [];
        this.gpList = [];
        this.villageList = [];
        this.page = 1;
        this.pageSize = 6;
        this.eligibleFamilyList = [];
        this.eligibleChildList = [];
        this.itemList = [];
        this.subItemList = [];
        this.subItemMultiItem = [];
        this.materialDistributionList = [];
        this.materialDistributionListFamilyWise = [];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.view_materialDistributionForm();
        this.sidebarService.checkRoledetailDTO().then((res) => {
            if (res.regionBranchHide) {
                this.regionList = res.region;
                this.regionBranchHide = res.regionBranchHide;
            }
            else {
                this.lowerRoleBranchId = res.branchId;
                let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
                let Dto = {
                    dataAccessDTO: {
                        userId: dataAccessDTO.userId,
                        userName: dataAccessDTO.userName,
                    },
                    branchId: this.lowerRoleBranchId
                };
                this.regionBranchHide = res.regionBranchHide;
                this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res) => {
                    if (res.sessionDTO.status == true) {
                        this.villagesOfBranch = res.responseObject;
                        console.log(this.villagesOfBranch, 'lowerrankvillagesOfBranch');
                    }
                });
            }
        });
        ((_c = (_b = (_a = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 5)) === null || _a === void 0 ? void 0 : _a.subMenuDetailList.find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)) === null || _b === void 0 ? void 0 : _b.accessDetailList.find(accessType => accessType.accessType == 'view')) === null || _c === void 0 ? void 0 : _c.accessType) ? this.router.navigate(['/material-distribution-register']) : this.router.navigate(['/error']);
        this.createMode = ((_f = (_e = (_d = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 5)) === null || _d === void 0 ? void 0 : _d.subMenuDetailList.find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)) === null || _e === void 0 ? void 0 : _e.accessDetailList.find(accessType => accessType.accessType == 'create')) === null || _f === void 0 ? void 0 : _f.accessType) ? true : false;
        this.updateMode = ((_j = (_h = (_g = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 5)) === null || _g === void 0 ? void 0 : _g.subMenuDetailList.find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)) === null || _h === void 0 ? void 0 : _h.accessDetailList.find(accessType => accessType.accessType == 'update')) === null || _j === void 0 ? void 0 : _j.accessType) ? true : false;
        this.deleteMode = ((_m = (_l = (_k = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 5)) === null || _k === void 0 ? void 0 : _k.subMenuDetailList.find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)) === null || _l === void 0 ? void 0 : _l.accessDetailList.find(accessType => accessType.accessType == 'delete')) === null || _m === void 0 ? void 0 : _m.accessType) ? true : false;
    }
    view_materialDistributionForm() {
        this.viewMaterialDistributionForm = this.fb.group({
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    get m() {
        return this.viewMaterialDistributionForm.controls;
    }
    changeRegion(regionId) {
        console.log(regionId, 'regionMasterId');
        if (regionId) {
            let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };
            this.materialDistributionService.getBranchesOfRegion(req).subscribe((res) => {
                this.branchList = res.responseObject;
                console.log(this.branchList, 'branchList');
            });
        }
        this.viewMaterialDistributionForm.controls.branch.setValue('');
        this.viewMaterialDistributionForm.controls.block.setValue('');
        this.viewMaterialDistributionForm.controls.gp.setValue('');
        this.viewMaterialDistributionForm.controls.gram.setValue('');
        this.gpList = [];
        this.villageList = [];
        this.villagesOfBranch = [];
        if (this.viewMaterialDistributionForm.value.region == '') {
            this.branchList = [];
        }
    }
    changeBranch(branchId) {
        console.log(branchId, 'branchId');
        let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
        this.materialDistributionService.getVillagesOfBranch(req).subscribe((res) => {
            this.villagesOfBranch = res.responseObject;
            console.log(this.villagesOfBranch, 'villagesOfBranch');
        });
        this.viewMaterialDistributionForm.controls.block.setValue('');
        this.viewMaterialDistributionForm.controls.gp.setValue('');
        this.viewMaterialDistributionForm.controls.gram.setValue('');
        this.gpList = [];
        this.villageList = [];
    }
    changeBlock(blockId) {
        var _a;
        console.log(blockId, 'blockId');
        this.gpList = (_a = this.villagesOfBranch.find(block => block.blockMasterId == blockId)) === null || _a === void 0 ? void 0 : _a.gpDtoList;
        console.log(this.gpList, 'gplist');
        this.viewMaterialDistributionForm.controls.gp.setValue('');
        this.viewMaterialDistributionForm.controls.gram.setValue('');
        this.villageList = [];
    }
    changeGp(gpId) {
        var _a;
        console.log(gpId, 'GpId');
        this.villageList = (_a = this.gpList.find(gp => gp.gpMunicipalId == gpId)) === null || _a === void 0 ? void 0 : _a.villageDtoList;
        console.log(this.villageList, 'villageList');
        this.viewMaterialDistributionForm.controls.gram.setValue('');
    }
    changeVillage(villageId) {
        this.villageID = villageId;
        console.log(this.villageID, 'changevillage this.villageID');
        let req = { dataAccessDTO: this.httpService.dataAccessDTO, village_master_id: villageId };
        this.materialDistributionService.getMaterialDistributionList(req).subscribe((res) => {
            this.materialDistributionList = res.responseObject;
            console.log(this.materialDistributionList, 'this.materialDistributionList');
        });
    }
    viewdistributionDetails(detailsOfDistribution, mat) {
        var _a;
        console.log(mat);
        if (mat.pregnant_woman == 'Y') {
            this.materialDistributionListFamilyWise = mat.material_distribution_List;
            this.materialDistributionListFamilyWise.forEach((item) => {
                item.childList = [];
                item.childList.push({ child_name: mat.first_name + mat.middle_name + ' ' + mat.last_name, status: 'PW' });
                console.log(item.childList);
            });
        }
        else {
            this.materialDistributionListFamilyWise = mat.material_distribution_List;
        }
        this.materialDistributionListFamilyWise = (_a = this.materialDistributionListFamilyWise) === null || _a === void 0 ? void 0 : _a.map((_a) => {
            var { family_detail_id = mat.family_detail_id, pregnant_woman = mat.pregnant_woman } = _a, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["family_detail_id", "pregnant_woman"]);
            return (Object.assign({ family_detail_id, pregnant_woman }, rest));
        });
        console.log(this.materialDistributionListFamilyWise, 'this.materialDistributionListFamilyWise');
        this.modalContent = '';
        this.modalReference = this.modalService.open(detailsOfDistribution, {
            windowClass: 'detailsOfParticipants',
        });
    }
    viewDistributionDetailsModalDismiss() {
        this.modalReference = this.modalService.dismissAll();
    }
    viewEligibleFamilyDetails(eligibleFamilyDetails) {
        console.log(this.villageID, 'this.villageID');
        this.modalContent = '';
        this.modalReference = this.modalService.open(eligibleFamilyDetails, {
            windowClass: 'eligibleFamilyDetails',
        });
        let viewFamObj = { dataAccessDTO: this.httpService.dataAccessDTO, village_master_id: this.villageID };
        this.materialDistributionService.getEligibleFamilyDetails(viewFamObj).subscribe((res) => {
            this.eligibleFamilyList = res.responseObject;
            console.log(this.eligibleFamilyList, 'eligibleFamilyList');
        });
    }
    eligibleFamilyDetailsModalDismiss() {
        this.modalReference = this.modalService.dismissAll();
    }
    create_materialDistributionForm(onDistributionEditData) {
        var _a, _b;
        console.log(onDistributionEditData, '...create_materialDistributionForm');
        if (onDistributionEditData != '') {
            this.editItemID = (_b = (_a = onDistributionEditData === null || onDistributionEditData === void 0 ? void 0 : onDistributionEditData.subItems) === null || _a === void 0 ? void 0 : _a.find(item => item.md_item_id)) === null || _b === void 0 ? void 0 : _b.md_item_id;
            console.log(this.editItemID, 'edit_item_ID');
            var edit_sub_item_ID = [];
            onDistributionEditData === null || onDistributionEditData === void 0 ? void 0 : onDistributionEditData.subItems.forEach(item => {
                edit_sub_item_ID.push({ sub_item_id: item.md_sub_item_id, sub_item_name: item.md_sub_item_name });
                console.log(edit_sub_item_ID, ' edit_sub_item_ID ');
                this.subItemMultiItem.push(item.md_sub_item_id);
            });
            console.log(edit_sub_item_ID, ' edit_sub_item_ID ');
        }
        this.createMaterialDistributionForm = this.fb.group({
            itemList: [this.editItemID ? this.editItemID : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subItems: [edit_sub_item_ID ? edit_sub_item_ID : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            enterSubItem: [(onDistributionEditData === null || onDistributionEditData === void 0 ? void 0 : onDistributionEditData.other_item_name) ? onDistributionEditData === null || onDistributionEditData === void 0 ? void 0 : onDistributionEditData.other_item_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    get t() {
        return this.createMaterialDistributionForm.controls;
    }
    createMaterialDistribution(materialDistribution, fam_details) {
        console.log(this.onDistributionEditData);
        this.familyDetails = fam_details;
        console.log(this.familyDetails, 'this.familyDetails');
        this.create_materialDistributionForm(this.onDistributionEditData);
        this.getItemList();
        console.log(fam_details.family_detail_id, 'family_detail_id');
        setTimeout(() => {
            this.modalContent = '';
            this.modalReference = this.modalService.open(materialDistribution, {
                windowClass: 'materialDistribution',
            });
        }, 200);
        let viewChildObj = { dataAccessDTO: this.httpService.dataAccessDTO, family_detail_id: fam_details.family_detail_id };
        this.materialDistributionService.getFamilyChildDetails(viewChildObj).subscribe((res) => {
            this.eligibleChildList = res.responseObject;
            console.log(this.eligibleChildList, 'eligibleChildList');
        });
    }
    getItemList() {
        let ItemObj = { dataAccessDTO: this.httpService.dataAccessDTO };
        this.materialDistributionService.getItemSubItemList(ItemObj).subscribe((res) => {
            this.itemList = res.responseObject;
            console.log(this.itemList, 'this.itemList');
            this.changeItemList(this.editItemID);
        });
    }
    changeItemList(itemId) {
        var _a, _b;
        console.log(itemId);
        this.subItemList = (_a = this.itemList.find(item => item.item_id == itemId)) === null || _a === void 0 ? void 0 : _a.subItemList;
        console.log(this.subItemList, 'subItemList');
        console.log((_b = this.onDistributionEditData) === null || _b === void 0 ? void 0 : _b.subItems, 'this.onDistributionEditData.subItems');
        this.dropdownSettings = {
            singleSelection: false,
            enableCheckAll: false,
            idField: 'sub_item_id',
            textField: 'sub_item_name',
            allowSearchFilter: true,
        };
    }
    onItemSelect(item) {
        console.log(item);
        this.subItemMultiItem.push(item.sub_item_id);
        console.log(this.subItemMultiItem);
    }
    onItemDeSelect(item) {
        console.log(item);
        console.log(this.subItemMultiItem);
        const index = this.subItemMultiItem.findIndex((x) => x == item.sub_item_id);
        if (index !== -1) {
            this.subItemMultiItem.splice(index, 1);
            console.log(this.subItemMultiItem);
        }
    }
    createMaterialDistributionModalDismiss() {
        var _a, _b, _c, _d;
        (_a = this.modalReference) === null || _a === void 0 ? void 0 : _a.close();
        this.subItemMultiItem = [];
        var ID = (_b = this.onDistributionEditData) === null || _b === void 0 ? void 0 : _b.material_distribution_register_id;
        if (ID) {
            this.onDistributionEditData = '';
            ID = 0;
            (_c = this.modalReference) === null || _c === void 0 ? void 0 : _c.close();
            this.editItemID = '';
        }
        else {
            (_d = this.modalReference) === null || _d === void 0 ? void 0 : _d.close();
        }
    }
    disabledSaveMaterialTraining() {
        let flag = true;
        if (this.createMaterialDistributionForm.value.itemList == 'OTHERS') {
            if (!this.createMaterialDistributionForm.value.enterSubItem) {
                flag = false;
            }
        }
        else if (this.subItemMultiItem.length == 0) {
            flag = false;
        }
        return flag;
    }
    createMaterialDistributionSave() {
        var _a, _b, _c;
        console.log('createMaterialDistributionSave');
        console.log(this.familyDetails, 'xxxxxxxxxxsavexxx');
        console.log(this.onDistributionEditData, 'onDistributionEditData');
        let saveReq = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            material_distribution_register_id: this.onDistributionEditData ? (_a = this.onDistributionEditData) === null || _a === void 0 ? void 0 : _a.material_distribution_register_id : 0,
            active_flag: this.onDistributionEditData ? 'U' : 'C',
            family_detail_id: this.onDistributionEditData ? (_b = this.onDistributionEditData) === null || _b === void 0 ? void 0 : _b.family_detail_id : this.familyDetails.family_detail_id,
            pregnant_woman: this.onDistributionEditData ? (_c = this.onDistributionEditData) === null || _c === void 0 ? void 0 : _c.pregnant_woman : this.familyDetails.pregnant_woman,
            subItems: this.subItemMultiItem,
            otherItem: this.createMaterialDistributionForm.value.enterSubItem ? this.createMaterialDistributionForm.value.enterSubItem : null
        };
        console.log(saveReq, 'saveReq');
        this.materialDistributionService.saveUpdateDeleteMaterialDistribution(saveReq).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.createMaterialDistributionModalDismiss();
                this.eligibleFamilyDetailsModalDismiss();
                this.viewDistributionDetailsModalDismiss();
                this.changeVillage(this.villageID);
            }
            else {
                this.showError(res.message);
            }
        });
    }
    savingDataDisplayModalDismiss() {
        var _a;
        (_a = this.modalReference) === null || _a === void 0 ? void 0 : _a.close();
    }
    editMaterialDistributedFamily(materialDistribution, mat) {
        this.onDistributionEditData = mat;
        this.createMaterialDistribution(materialDistribution, mat);
    }
    deleteMaterialDistributedFamily(mat, i) {
        this.confirmationDialogService.confirm('', 'Are you sure you want to delete distribution record ?')
            .then(() => this.delete(mat, i))
            .catch(() => '');
    }
    delete(mat, i) {
        console.log(mat, 'deleteMaterialDistributedFamily');
        let deleteReq = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            material_distribution_register_id: mat.material_distribution_register_id,
            active_flag: 'D',
            family_detail_id: mat.family_detail_id,
            pregnant_woman: mat.pregnant_woman,
            subItems: mat.subItems,
            otherItem: mat.other_item_map_id
        };
        console.log(deleteReq);
        this.materialDistributionService.saveUpdateDeleteMaterialDistribution(deleteReq).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.materialDistributionListFamilyWise.splice(i, 1);
            }
            else {
                this.showError(res.message);
            }
        });
    }
    showSuccess(message) {
        this.toaster.success(message, 'Material Distribution Register', {
            timeOut: 3000,
        });
    }
    showError(message) {
        this.toaster.error(message, 'Material Distribution Register', {
            timeOut: 3000,
        });
    }
}
MaterialDistributionRegisterComponent.ɵfac = function MaterialDistributionRegisterComponent_Factory(t) { return new (t || MaterialDistributionRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_material_distribution_register_service__WEBPACK_IMPORTED_MODULE_6__["MaterialDistributionRegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"])); };
MaterialDistributionRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MaterialDistributionRegisterComponent, selectors: [["app-material-distribution-register"]], decls: 69, vars: 27, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "6%"], [2, "width", "10%"], [2, "width", "25%"], [2, "width", "20%"], [2, "width", "15%"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["detailsOfDistribution", ""], ["eligibleFamilyDetails", ""], ["materialDistribution", ""], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], [1, "fas", "fa-plus-circle", 2, "cursor", "pointer", 3, "click"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [2, "cursor", "pointer", "color", "blue", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-25px", 3, "click"], [1, "modal-body"], [2, "width", "5%"], ["style", "width:12%;", 4, "ngIf"], [2, "width", "12%"], [1, "popover__wrapper"], [1, "popover__title"], [1, "popover__content"], [1, "card-header"], ["style", "width: 12%;", 4, "ngIf"], ["class", "fas fa-edit", "title", "Edit Material Distributed Family", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Material Distributed Family", 3, "click", 4, "ngIf"], ["title", "Edit Material Distributed Family", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Material Distributed Family", 1, "fas", "fa-trash", 3, "click"], [2, "float", "right", "cursor", "pointer", "font-size", "35px", "margin-bottom", "20px", 3, "click"], [2, "width", "8%"], [2, "width", "14%"], ["title", "Distribute Material", 1, "fas", "fa-file", 3, "click"], [1, "scheduler-border"], ["id", "beneficiaryScroll", 1, "QA_table"], [1, "form-group", "col-md-6"], ["for", "itemList"], ["formControlName", "itemList", "id", "itemList", 1, "form-select", 3, "ngClass", "change"], ["value", "OTHERS"], ["class", "form-group col-md-6", 4, "ngIf"], [1, "modal-footer"], [1, "col-md-6"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], ["for", "subItemList"], ["formControlName", "subItems", 3, "placeholder", "settings", "data", "ngClass", "onSelect", "onDeSelect"], ["for", "enterSubItem"], ["type", "text", "placeholder", "Enter Sub Item", "formControlName", "enterSubItem", "maxlength", "45", 1, "form-control", 3, "ngClass", "keypress"]], template: function MaterialDistributionRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Material Distribution Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MaterialDistributionRegisterComponent_div_7_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MaterialDistributionRegisterComponent_div_9_Template, 21, 12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Block :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_Template_select_change_16_listener($event) { return ctx.changeBlock($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "-- Select Block --");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MaterialDistributionRegisterComponent_option_19_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MaterialDistributionRegisterComponent_div_20_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "GP/ Municipality :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_Template_select_change_26_listener($event) { return ctx.changeGp($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "-- Select GP/ Municipality --");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, MaterialDistributionRegisterComponent_option_29_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, MaterialDistributionRegisterComponent_div_30_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Village/ Gram Sansad/ Locality :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_Template_select_change_36_listener($event) { return ctx.changeVillage($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "-- Select Village --");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, MaterialDistributionRegisterComponent_option_39_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, MaterialDistributionRegisterComponent_div_40_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "thead", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "SL No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Family No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Family Head Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Guardian Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "No. of time distributed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Distribution Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tbody", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, MaterialDistributionRegisterComponent_tr_60_Template, 13, 7, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "pagination-controls", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function MaterialDistributionRegisterComponent_Template_pagination_controls_pageChange_62_listener($event) { return ctx.p = $event; })("pageBoundsCorrection", function MaterialDistributionRegisterComponent_Template_pagination_controls_pageBoundsCorrection_62_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, MaterialDistributionRegisterComponent_ng_template_63_Template, 28, 2, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, MaterialDistributionRegisterComponent_ng_template_65_Template, 47, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, MaterialDistributionRegisterComponent_ng_template_67_Template, 48, 11, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewMaterialDistributionForm.value.gram && ctx.createMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.viewMaterialDistributionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](16, _c0, ctx.m.block.invalid && ctx.m.block.touched, ctx.m.block.valid && (ctx.m.block.dirty || ctx.m.block.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.m.block.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](19, _c0, ctx.m.gp.invalid && ctx.m.gp.touched, ctx.m.gp.valid && (ctx.m.gp.dirty || ctx.m.gp.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gpList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.m.gp.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](22, _c0, ctx.m.gram.invalid && ctx.m.gram.touched, ctx.m.gram.valid && (ctx.m.gram.dirty || ctx.m.gram.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.villageList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.m.gram.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](61, 13, ctx.materialDistributionList, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c1, ctx.p)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationControlsComponent"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginatePipe"]], styles: [".fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #499;\r\n  font-size: 20px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  overflow-x: hidden;\r\n  width: 1000px;\r\n  margin-left: -230px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 150px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n#beneficiaryScroll[_ngcontent-%COMP%] {\r\n  margin: 0 -19px;\r\n  padding: 0 24px;\r\n  max-height: 26vh;\r\n  overflow: auto;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translate(0, -20px);\r\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\r\n}\r\n\r\n.popover__title[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #499;\r\n  text-align: center;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 200px !important;\r\n  transform: translate(0, 15px) !important;\r\n  background-color: white;\r\n  color: #828BB2;\r\n  box-shadow: 3px 4px 5px 3px rgba(117, 111, 117, 1);\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: \"\";\r\n  left: calc(10% - 10px);\r\n  top: -10px;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #bfbfbf transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #499;\r\n}\r\n\r\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLWRpc3RyaWJ1dGlvbi1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseURBQXlEO0VBQ3pELHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6Im1hdGVyaWFsLWRpc3RyaWJ1dGlvbi1yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLXBsdXMtY2lyY2xlIHtcclxuICBjb2xvcjogIzQ5OTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBoZWlnaHQ6IDQzMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjMwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzQ5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxLjRlbSAxLjRlbSAxLjRlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAwIDEuNWVtIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNiZW5lZmljaWFyeVNjcm9sbCB7XHJcbiAgbWFyZ2luOiAwIC0xOXB4O1xyXG4gIHBhZGRpbmc6IDAgMjRweDtcclxuICBtYXgtaGVpZ2h0OiAyNnZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wb3BvdmVyX193cmFwcGVyOmhvdmVyIC5wb3BvdmVyX19jb250ZW50IHtcclxuICB6LWluZGV4OiAxMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTIwcHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjc1LCAtMC4wMiwgMC4yLCAwLjk3KTtcclxufVxyXG5cclxuLnBvcG92ZXJfX3RpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICM0OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5wb3BvdmVyX19jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTVweCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzgyOEJCMjtcclxuICBib3gtc2hhZG93OiAzcHggNHB4IDVweCAzcHggcmdiYSgxMTcsIDExMSwgMTE3LCAxKTtcclxufVxyXG5cclxuLnBvcG92ZXJfX2NvbnRlbnQgbGkge1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fY29udGVudDpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGxlZnQ6IGNhbGMoMTAlIC0gMTBweCk7XHJcbiAgdG9wOiAtMTBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNiZmJmYmYgdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbn1cclxuXHJcbnRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0aCwgdGFibGUuZGF0YVRhYmxlIHRib2R5IHRkIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialDistributionRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-material-distribution-register',
                templateUrl: './material-distribution-register.component.html',
                styleUrls: ['./material-distribution-register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: _material_distribution_register_service__WEBPACK_IMPORTED_MODULE_6__["MaterialDistributionRegisterService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"] }, { type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }, { type: _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-material-distribution-register-material-distribution-register-module.js.map