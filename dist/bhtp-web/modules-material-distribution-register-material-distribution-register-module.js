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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/http/http.service */ "YwHQ");
/* harmony import */ var _material_distribution_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-distribution-register.service */ "WcQT");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/validation.service */ "yjnX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");














function MaterialDistributionRegisterComponent_div_11_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", region_r17.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", region_r17.regionName, " ");
} }
function MaterialDistributionRegisterComponent_div_11_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_11_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_11_div_10_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.m.region.errors.required);
} }
function MaterialDistributionRegisterComponent_div_11_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", branch_r19.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r19.branchName, " ");
} }
function MaterialDistributionRegisterComponent_div_11_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_11_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_11_div_20_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.m.branch.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function MaterialDistributionRegisterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_div_11_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MaterialDistributionRegisterComponent_div_11_option_9_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MaterialDistributionRegisterComponent_div_11_div_10_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_div_11_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.changeBranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MaterialDistributionRegisterComponent_div_11_option_19_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MaterialDistributionRegisterComponent_div_11_div_20_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r0.m.region.invalid && ctx_r0.m.region.touched, ctx_r0.m.region.valid && (ctx_r0.m.region.dirty || ctx_r0.m.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.m.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx_r0.m.branch.invalid && ctx_r0.m.branch.touched, ctx_r0.m.branch.valid && (ctx_r0.m.branch.dirty || ctx_r0.m.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.m.branch.errors);
} }
function MaterialDistributionRegisterComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", block_r24.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", block_r24.blockName, " ");
} }
function MaterialDistributionRegisterComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_22_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.m.block.errors.required);
} }
function MaterialDistributionRegisterComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gp_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", gp_r26.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gp_r26.name, " ");
} }
function MaterialDistributionRegisterComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_32_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.m.gp.errors.required);
} }
function MaterialDistributionRegisterComponent_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vill_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", vill_r28.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vill_r28.villageName, " ");
} }
function MaterialDistributionRegisterComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_42_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.m.gram.errors.required);
} }
function MaterialDistributionRegisterComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Distribution Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_81_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.viewDistributionDetailsModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Distribution Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Beneficiary Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Beneficiary Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "13-09-2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Rumila Bibi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "PW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Item One (si1, si2), Item Two (si 1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_83_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_83_tr_46_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const item_r33 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86); return ctx_r35.createMaterialDistribution(_r11, item_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r34 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r33.family_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r33.first_name, " ", item_r33.middle_name, " ", item_r33.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r33.husband_or_guardian_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r33.below2Current ? item_r33.below2Current : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r33.below5Current ? item_r33.below5Current : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r33.girl14To18Current ? item_r33.girl14To18Current : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r33.pregnant_woman);
} }
function MaterialDistributionRegisterComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Eligible Family List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_83_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.eligibleFamilyDetailsModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Husband Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Child Under");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "2 yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Child 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "to 5 yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Adolescent Girl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "14 to 18 yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Pregnant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Distribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, MaterialDistributionRegisterComponent_ng_template_83_tr_46_Template, 19, 10, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.eligibleFamilyList);
} }
function MaterialDistributionRegisterComponent_ng_template_85_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    const i_r45 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r45 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r44.child_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r44.dob.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r44.sex);
} }
function MaterialDistributionRegisterComponent_ng_template_85_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r46.item_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r46.item_name, " ");
} }
function MaterialDistributionRegisterComponent_ng_template_85_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Selection of Item List is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_85_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_ng_template_85_div_42_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.t.itemList.errors.required);
} }
function MaterialDistributionRegisterComponent_ng_template_85_div_43_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selection of Sub Item List is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_85_div_43_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_ng_template_85_div_43_div_6_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.t.subItems.errors.required);
} }
function MaterialDistributionRegisterComponent_ng_template_85_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sub Item List:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ng-multiselect-dropdown", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function MaterialDistributionRegisterComponent_ng_template_85_div_43_Template_ng_multiselect_dropdown_onSelect_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.onItemSelect($event); })("onDeSelect", function MaterialDistributionRegisterComponent_ng_template_85_div_43_Template_ng_multiselect_dropdown_onDeSelect_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.onItemDeSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MaterialDistributionRegisterComponent_ng_template_85_div_43_div_6_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Multiple Sub Item List")("settings", ctx_r42.dropdownSettings)("data", ctx_r42.subItemList)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r42.t.subItems.invalid && ctx_r42.t.subItems.touched, ctx_r42.t.subItems.valid && (ctx_r42.t.subItems.dirty || ctx_r42.t.subItems.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.t.subItems.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Other Sub Item : ", ctx_r42.createMaterialDistributionForm.value.enterSubItem, "");
} }
function MaterialDistributionRegisterComponent_ng_template_85_div_44_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sub Item is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_85_div_44_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_ng_template_85_div_44_div_6_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.t.enterSubItem.errors.required);
} }
function MaterialDistributionRegisterComponent_ng_template_85_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sub Item:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function MaterialDistributionRegisterComponent_ng_template_85_div_44_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.validationService.onlyAlphabetsAndSpace($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MaterialDistributionRegisterComponent_ng_template_85_div_44_div_6_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r43.t.enterSubItem.invalid && ctx_r43.t.enterSubItem.touched, ctx_r43.t.enterSubItem.valid && (ctx_r43.t.enterSubItem.dirty || ctx_r43.t.enterSubItem.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.t.enterSubItem.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Other Sub Item : ", ctx_r43.createMaterialDistributionForm.value.enterSubItem, "");
} }
function MaterialDistributionRegisterComponent_ng_template_85_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_85_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.createMaterialDistributionModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fieldset", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "legend", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Beneficiary List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MaterialDistributionRegisterComponent_ng_template_85_tr_25_Template, 9, 4, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "fieldset", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "legend", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Distribute Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Item List:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_ng_template_85_Template_select_change_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.changeItemList($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "-- Select Item List --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MaterialDistributionRegisterComponent_ng_template_85_option_39_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MaterialDistributionRegisterComponent_ng_template_85_div_42_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, MaterialDistributionRegisterComponent_ng_template_85_div_43_Template, 10, 9, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, MaterialDistributionRegisterComponent_ng_template_85_div_44_Template, 10, 6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_85_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.createMaterialDistributionSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.eligibleChildList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r12.createMaterialDistributionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx_r12.t.itemList.invalid && ctx_r12.t.itemList.touched, ctx_r12.t.itemList.valid && (ctx_r12.t.itemList.dirty || ctx_r12.t.itemList.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.itemList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.t.itemList.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.createMaterialDistributionForm.value.itemList != "OTHERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.createMaterialDistributionForm.value.itemList == "OTHERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r12.disabledSaveMaterialTraining());
} }
class MaterialDistributionRegisterComponent {
    constructor(fb, sidebarService, http, httpService, materialDistributionService, modalService, config, validationService, toaster) {
        this.fb = fb;
        this.sidebarService = sidebarService;
        this.http = http;
        this.httpService = httpService;
        this.materialDistributionService = materialDistributionService;
        this.modalService = modalService;
        this.validationService = validationService;
        this.toaster = toaster;
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
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.view_materialDistributionForm();
        this.sidebarService.checkRoledetailDTO().then((res) => {
            if (res.regionBranchHide) {
                this.regionList = res.region;
                this.regionBranchHide = res.regionBranchHide;
            }
            else {
                this.lowerRoleBranchId = res.branchId;
                // this.branchList = res.branchLIST;
                // this.branchName = res.branchName;
                // console.log(this.branchName, 'this.branchName');
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
                // this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
            }
        });
    }
    view_materialDistributionForm() {
        this.viewMaterialDistributionForm = this.fb.group({
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get m() {
        return this.viewMaterialDistributionForm.controls;
    }
    changeRegion(regionId) {
        console.log(regionId, 'regionMasterId');
        // this.regionName = this.regionList.find((reg) => reg.regionMasterId == this.regionID)?.regionName;
        // console.log(this.regionName, 'this.regionName');
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
    }
    viewdistributionDetails(detailsOfDistribution) {
        this.modalContent = '';
        this.modalReference = this.modalService.open(detailsOfDistribution, {
            windowClass: 'detailsOfParticipants',
        });
    }
    viewDistributionDetailsModalDismiss() {
        var _a;
        (_a = this.modalReference) === null || _a === void 0 ? void 0 : _a.close();
    }
    viewEligibleFamilyDetails(eligibleFamilyDetails) {
        console.log(this.villageID, 'this.villageID');
        this.modalContent = '';
        this.modalReference = this.modalService.open(eligibleFamilyDetails, {
            windowClass: 'eligibleFamilyDetails',
        });
        let viewFamObj = { dataAccessDTO: this.httpService.dataAccessDTO, village_master_id: 1 };
        this.materialDistributionService.getEligibleFamilyDetails(viewFamObj).subscribe((res) => {
            this.eligibleFamilyList = res.responseObject;
            console.log(this.eligibleFamilyList, 'eligibleFamilyList');
        });
    }
    eligibleFamilyDetailsModalDismiss() {
        this.modalReference = this.modalService.dismissAll();
    }
    create_materialDistributionForm() {
        this.createMaterialDistributionForm = this.fb.group({
            itemList: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subItems: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            enterSubItem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get t() {
        return this.createMaterialDistributionForm.controls;
    }
    createMaterialDistribution(materialDistribution, fam_details) {
        this.familyDetails = fam_details;
        console.log(this.familyDetails, 'this.familyDetails');
        console.log(fam_details.family_detail_id, 'family_detail_id');
        this.modalContent = '';
        this.modalReference = this.modalService.open(materialDistribution, {
            windowClass: 'materialDistribution',
        });
        let viewChildObj = { dataAccessDTO: this.httpService.dataAccessDTO, family_detail_id: fam_details.family_detail_id };
        this.materialDistributionService.getFamilyChildDetails(viewChildObj).subscribe((res) => {
            this.eligibleChildList = res.responseObject;
            console.log(this.eligibleChildList, 'eligibleChildList');
        });
        this.create_materialDistributionForm();
        this.getItemList();
    }
    getItemList() {
        let ItemObj = { dataAccessDTO: this.httpService.dataAccessDTO };
        this.materialDistributionService.getItemSubItemList(ItemObj).subscribe((res) => {
            this.itemList = res.responseObject;
            console.log(this.itemList, 'this.itemList');
        });
    }
    changeItemList(itemId) {
        var _a;
        console.log(itemId);
        this.subItemList = (_a = this.itemList.find(item => item.item_id == itemId)) === null || _a === void 0 ? void 0 : _a.subItemList;
        console.log(this.subItemList, 'subItemList');
        this.dropdownSettings = {
            singleSelection: false,
            enableCheckAll: false,
            idField: 'sub_item_id',
            textField: 'sub_item_name',
            // selectAllText: 'Select All',
            // unSelectAllText: 'Unselect All',
            // itemsShowLimit: 3,
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
        var _a;
        (_a = this.modalReference) === null || _a === void 0 ? void 0 : _a.close();
        this.subItemMultiItem = [];
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
        console.log('createMaterialDistributionSave');
        console.log(this.familyDetails, 'xxxxxxxxxxsavexxx');
        let saveReq = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            material_distribution_register_id: 0,
            active_flag: 'C',
            family_detail_id: this.familyDetails.family_detail_id,
            pregnant_woman: this.familyDetails.pregnant_woman,
            subItems: this.subItemMultiItem,
            otherItem: this.createMaterialDistributionForm.value.enterSubItem ? this.createMaterialDistributionForm.value.enterSubItem : null
        };
        console.log(saveReq, 'saveReq');
        this.materialDistributionService.saveUpdateDeleteMaterialDistribution(saveReq).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.createMaterialDistributionModalDismiss();
                // this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
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
    editMaterialDistributedFamily() {
        console.log('editMaterialDistributedFamily');
    }
    deleteMaterialDistributedFamily() {
        console.log('deleteMaterialDistributedFamily');
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
MaterialDistributionRegisterComponent.ɵfac = function MaterialDistributionRegisterComponent_Factory(t) { return new (t || MaterialDistributionRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_material_distribution_register_service__WEBPACK_IMPORTED_MODULE_5__["MaterialDistributionRegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
MaterialDistributionRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaterialDistributionRegisterComponent, selectors: [["app-material-distribution-register"]], decls: 87, vars: 20, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], [1, "fas", "fa-plus-circle", 2, "cursor", "pointer", 3, "click"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "6%"], [2, "width", "17%"], [2, "width", "20%"], [2, "width", "10%"], [2, "width", "15%"], [2, "width", "8%"], [2, "cursor", "pointer", "color", "blue", 3, "click"], ["title", "Edit Material Distributed Family", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Material Distributed Family", 1, "fas", "fa-trash", 3, "click"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["detailsOfDistribution", ""], ["eligibleFamilyDetails", ""], ["materialDistribution", ""], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-25px", 3, "click"], [1, "modal-body"], [2, "width", "5%"], [2, "width", "30%"], [2, "width", "25%"], [2, "text-align", "center"], [2, "float", "right", "cursor", "pointer", "font-size", "35px", "margin-bottom", "20px", 3, "click"], [2, "width", "12%"], [2, "width", "14%"], [4, "ngFor", "ngForOf"], ["title", "Distribute Material", 1, "fas", "fa-file", 3, "click"], [1, "scheduler-border"], ["id", "beneficiaryScroll", 1, "QA_table"], [1, "form-group", "col-md-6"], ["for", "itemList"], ["formControlName", "itemList", "id", "itemList", 1, "form-select", 3, "ngClass", "change"], ["value", "OTHERS"], ["class", "form-group col-md-6", 4, "ngIf"], [1, "modal-footer"], [1, "col-md-6"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], ["for", "subItemList"], ["formControlName", "subItems", 3, "placeholder", "settings", "data", "ngClass", "onSelect", "onDeSelect"], ["for", "enterSubItem"], ["type", "text", "placeholder", "Enter Sub Item", "formControlName", "enterSubItem", "maxlength", "45", 1, "form-control", 3, "ngClass", "keypress"]], template: function MaterialDistributionRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Material Distribution Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](84); return ctx.viewEligibleFamilyDetails(_r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0Create Material Distribution Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MaterialDistributionRegisterComponent_div_11_Template, 21, 12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Block :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_Template_select_change_18_listener($event) { return ctx.changeBlock($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "-- Select Block --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MaterialDistributionRegisterComponent_option_21_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MaterialDistributionRegisterComponent_div_22_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "GP/ Municipality :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_Template_select_change_28_listener($event) { return ctx.changeGp($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "-- Select GP/ Municipality --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MaterialDistributionRegisterComponent_option_31_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MaterialDistributionRegisterComponent_div_32_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Village/ Gram Sansad/ Locality :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_Template_select_change_38_listener($event) { return ctx.changeVillage($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "-- Select Village --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MaterialDistributionRegisterComponent_option_41_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MaterialDistributionRegisterComponent_div_42_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "thead", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "SL No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Family No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Family Head Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Guardian Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "No. of time distributed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Distribution Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "125");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Test 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Test 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_Template_td_click_75_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82); return ctx.viewdistributionDetails(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_Template_i_click_78_listener() { return ctx.editMaterialDistributedFamily(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_Template_i_click_79_listener() { return ctx.deleteMaterialDistributedFamily(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "pagination-controls", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MaterialDistributionRegisterComponent_Template_pagination_controls_pageChange_80_listener($event) { return ctx.p = $event; })("pageBoundsCorrection", function MaterialDistributionRegisterComponent_Template_pagination_controls_pageBoundsCorrection_80_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, MaterialDistributionRegisterComponent_ng_template_81_Template, 37, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, MaterialDistributionRegisterComponent_ng_template_83_Template, 47, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, MaterialDistributionRegisterComponent_ng_template_85_Template, 50, 11, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.viewMaterialDistributionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.m.block.invalid && ctx.m.block.touched, ctx.m.block.valid && (ctx.m.block.dirty || ctx.m.block.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.m.block.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx.m.gp.invalid && ctx.m.gp.touched, ctx.m.gp.valid && (ctx.m.gp.dirty || ctx.m.gp.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gpList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.m.gp.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c0, ctx.m.gram.invalid && ctx.m.gram.touched, ctx.m.gram.valid && (ctx.m.gram.dirty || ctx.m.gram.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.villageList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.m.gram.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: [".fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #499;\r\n  font-size: 20px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  overflow-x: hidden;\r\n  width: 1000px;\r\n  margin-left: -230px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 150px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n#beneficiaryScroll[_ngcontent-%COMP%] {\r\n  margin: 0 -19px;\r\n  padding: 0 24px;\r\n  max-height: 26vh;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLWRpc3RyaWJ1dGlvbi1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQiIsImZpbGUiOiJtYXRlcmlhbC1kaXN0cmlidXRpb24tcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1wbHVzLWNpcmNsZSB7XHJcbiAgY29sb3I6ICM0OTk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgaGVpZ2h0OiA0MzBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW4tbGVmdDogLTIzMHB4O1xyXG59XHJcblxyXG4udGFibGUgdGgge1xyXG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICM0OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5maWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMS40ZW0gMS40ZW0gMS40ZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxlZ2VuZC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGNvbG9yOiAjZGRkO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jYmVuZWZpY2lhcnlTY3JvbGwge1xyXG4gIG1hcmdpbjogMCAtMTlweDtcclxuICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgbWF4LWhlaWdodDogMjZ2aDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialDistributionRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-material-distribution-register',
                templateUrl: './material-distribution-register.component.html',
                styleUrls: ['./material-distribution-register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _material_distribution_register_service__WEBPACK_IMPORTED_MODULE_5__["MaterialDistributionRegisterService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"] }, { type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-material-distribution-register-material-distribution-register-module.js.map