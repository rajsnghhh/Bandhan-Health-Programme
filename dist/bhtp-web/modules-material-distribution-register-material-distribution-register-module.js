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
















function MaterialDistributionRegisterComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_div_7_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](66); return ctx_r17.viewEligibleFamilyDetails(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00A0Create Material Distribution Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_9_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", region_r23.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", region_r23.regionName, " ");
} }
function MaterialDistributionRegisterComponent_div_9_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_9_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_9_div_10_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r20.m.region.errors.required);
} }
function MaterialDistributionRegisterComponent_div_9_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", branch_r25.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", branch_r25.branchName, " ");
} }
function MaterialDistributionRegisterComponent_div_9_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_9_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_9_div_20_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.m.branch.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function MaterialDistributionRegisterComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_div_9_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MaterialDistributionRegisterComponent_div_9_option_9_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MaterialDistributionRegisterComponent_div_9_div_10_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_div_9_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.changeBranch($event.target.value); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", block_r30.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", block_r30.blockName, " ");
} }
function MaterialDistributionRegisterComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_20_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.m.block.errors.required);
} }
function MaterialDistributionRegisterComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gp_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", gp_r32.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gp_r32.name, " ");
} }
function MaterialDistributionRegisterComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_30_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.m.gp.errors.required);
} }
function MaterialDistributionRegisterComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vill_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", vill_r34.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vill_r34.villageName, " ");
} }
function MaterialDistributionRegisterComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_40_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.m.gram.errors.required);
} }
function MaterialDistributionRegisterComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_tr_60_Template_td_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const mat_r36 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](64); return ctx_r38.viewdistributionDetails(_r9, mat_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mat_r36 = ctx.$implicit;
    const i_r37 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r37 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mat_r36.family_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", mat_r36.first_name, "", mat_r36.middle_name, " ", mat_r36.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mat_r36.husband_or_guardian_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mat_r36.distributionCount);
} }
function MaterialDistributionRegisterComponent_ng_template_63_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const beneficiary_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](beneficiary_r50.child_name);
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r45.pwName);
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const beneficiary_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](beneficiary_r52.status);
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r47.pwStatus);
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sub_item_r54.md_sub_item_name, "");
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_21_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_21_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const mat_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](68); return ctx_r57.editMaterialDistributedFamily(_r13, mat_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_21_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_21_i_2_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const mat_r42 = ctx_r61.$implicit; const i_r43 = ctx_r61.index; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r60.deleteMaterialDistributedFamily(mat_r42, i_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_21_i_1_Template, 1, 0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_21_i_2_Template, 1, 0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r49.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r49.deleteMode);
} }
function MaterialDistributionRegisterComponent_ng_template_63_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MaterialDistributionRegisterComponent_ng_template_63_tr_27_tr_6_Template, 3, 1, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MaterialDistributionRegisterComponent_ng_template_63_tr_27_span_7_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MaterialDistributionRegisterComponent_ng_template_63_tr_27_tr_9_Template, 3, 1, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MaterialDistributionRegisterComponent_ng_template_63_tr_27_span_10_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Sub Item List");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MaterialDistributionRegisterComponent_ng_template_63_tr_27_li_18_Template, 2, 1, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, MaterialDistributionRegisterComponent_ng_template_63_tr_27_td_21_Template, 3, 2, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mat_r42 = ctx.$implicit;
    const i_r43 = ctx.index;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r43 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mat_r42.distribution_date.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r41.materialDistributionListFamilyWise[i_r43].childList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", mat_r42.pregnant_woman == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r41.materialDistributionListFamilyWise[i_r43].childList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", mat_r42.pregnant_woman == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mat_r42.subItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Other Item : ", ctx_r41.materialDistributionListFamilyWise[i_r43].other_item_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r41.updateMode || ctx_r41.deleteMode);
} }
function MaterialDistributionRegisterComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Distribution Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_63_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r63.viewDistributionDetailsModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Distribution Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Beneficiary Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Beneficiary Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MaterialDistributionRegisterComponent_ng_template_63_th_25_Template, 2, 0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tbody", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MaterialDistributionRegisterComponent_ng_template_63_tr_27_Template, 22, 9, "tr", 31);
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
function MaterialDistributionRegisterComponent_ng_template_65_tr_48_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 53);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_65_tr_48_Template_i_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); const item_r66 = ctx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](68); return ctx_r68.createMaterialDistribution(_r13, item_r66); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    const i_r67 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r67 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r66.family_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", item_r66.first_name, " ", item_r66.middle_name, " ", item_r66.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r66.husband_or_guardian_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r66.swasthya_sahayika_name ? item_r66.swasthya_sahayika_name : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r66.below2Current ? item_r66.below2Current : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r66.below5Current ? item_r66.below5Current : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r66.girl14To18Current ? item_r66.girl14To18Current : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r66.pregnant_woman);
} }
function MaterialDistributionRegisterComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Eligible Family List");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_65_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r70.eligibleFamilyDetailsModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 53);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "SS Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Child Under");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "2 yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Child 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "to 5 yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Adolescent Girl");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "14 to 18 yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Pregnant");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Distribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tbody", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, MaterialDistributionRegisterComponent_ng_template_65_tr_48_Template, 21, 11, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.eligibleFamilyList);
} }
function MaterialDistributionRegisterComponent_ng_template_67_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r75 = ctx.$implicit;
    const i_r76 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r76 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r75.child_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r75.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r75.sex);
} }
function MaterialDistributionRegisterComponent_ng_template_67_div_27_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("* ", items_r80.sub_item_name, "\u00A0\u00A0\u00A0");
} }
function MaterialDistributionRegisterComponent_ng_template_67_div_27_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_ng_template_67_div_27_tr_6_Template_tr_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r85); const items_r80 = ctx.$implicit; const i_r81 = ctx.index; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r84.selectSubItemForMD(items_r80, i_r81, "S"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_ng_template_67_div_27_tr_6_td_1_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", items_r80.isChecked == true);
} }
function MaterialDistributionRegisterComponent_ng_template_67_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_67_div_27_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const i_r78 = ctx.index; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](70); return ctx_r86.changeItemList(_r15, $event.target.value, i_r78); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MaterialDistributionRegisterComponent_ng_template_67_div_27_tr_6_Template, 2, 1, "tr", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r77.item_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r77.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r77.subItemList);
} }
function MaterialDistributionRegisterComponent_ng_template_67_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function MaterialDistributionRegisterComponent_ng_template_67_div_29_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r88.validationService.onlyAlphabetsAndSpace($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_67_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r90.createMaterialDistributionModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "fieldset", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "legend", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Beneficiary List");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 66);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "fieldset", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "legend", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Distribute Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MaterialDistributionRegisterComponent_ng_template_67_div_27_Template, 7, 3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, MaterialDistributionRegisterComponent_ng_template_67_div_29_Template, 2, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_67_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r92.createMaterialDistributionSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Save");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.itemList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r14.createMaterialDistributionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.OtherItemStatus == "O");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r14.disabledSaveMaterialTraining());
} }
function MaterialDistributionRegisterComponent_ng_template_69_tr_9_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_ng_template_69_tr_9_input_5_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100); const items_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r98.selectSubItemForMD(items_r94, $event.target.checked, "C"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_69_tr_9_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_ng_template_69_tr_9_input_6_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103); const items_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r101.selectSubItemForMD(items_r94, $event.target.checked, "C"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaterialDistributionRegisterComponent_ng_template_69_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MaterialDistributionRegisterComponent_ng_template_69_tr_9_input_5_Template, 1, 0, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MaterialDistributionRegisterComponent_ng_template_69_tr_9_input_6_Template, 1, 0, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](items_r94.sub_item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", items_r94.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", items_r94.isChecked == false);
} }
function MaterialDistributionRegisterComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MaterialDistributionRegisterComponent_ng_template_69_tr_9_Template, 7, 3, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_69_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r104.saveLocallySubItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r16.itemName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.subItemList);
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
        this.showSelectedSI = '';
        this.OtherItemStatus = 'I';
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
        this.materialDistributionListFamilyWise = mat.material_distribution_List;
        console.log(mat);
        this.pwName = mat.first_name + mat.middle_name + ' ' + mat.last_name;
        this.pwStatus = 'PW';
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
        // this.modalReference.close()
    }
    create_materialDistributionForm(onDistributionEditData) {
        console.log(onDistributionEditData, '...create_materialDistributionForm');
        this.createMaterialDistributionForm = this.fb.group({
            enterSubItem: [(onDistributionEditData === null || onDistributionEditData === void 0 ? void 0 : onDistributionEditData.other_item_name) ? onDistributionEditData === null || onDistributionEditData === void 0 ? void 0 : onDistributionEditData.other_item_name : '']
        });
    }
    get t() {
        return this.createMaterialDistributionForm.controls;
    }
    createMaterialDistribution(materialDistribution, fam_details) {
        var _a;
        console.log((_a = this.onDistributionEditData) === null || _a === void 0 ? void 0 : _a.subItems);
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
            var _a, _b;
            this.eligibleChildList = ((_a = this.onDistributionEditData) === null || _a === void 0 ? void 0 : _a.childList) ? (_b = this.onDistributionEditData) === null || _b === void 0 ? void 0 : _b.childList : res.responseObject;
            console.log(this.eligibleChildList, 'eligibleChildList');
        });
    }
    getItemList() {
        let ItemObj = { dataAccessDTO: this.httpService.dataAccessDTO };
        this.materialDistributionService.getItemSubItemList(ItemObj).subscribe((res) => {
            this.itemList = res.responseObject;
            this.itemList.push({ item_id: 'OTHERS', item_name: 'Others' });
            console.log(this.itemList);
            this.itemList.forEach(item => {
                var _a, _b, _c;
                if (item.item_id != "OTHERS") {
                    this.subItemList = item.subItemList;
                    console.log(this.subItemList, 'subItemList');
                    this.subItemList = (_a = this.subItemList) === null || _a === void 0 ? void 0 : _a.map((_a) => {
                        var { isChecked = false } = _a, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["isChecked"]);
                        return (Object.assign({ isChecked }, rest));
                    });
                    console.log(this.subItemList, 'subItemList');
                    (_c = (_b = this.onDistributionEditData) === null || _b === void 0 ? void 0 : _b.subItems) === null || _c === void 0 ? void 0 : _c.forEach(item => {
                        var _a, _b;
                        (_b = (_a = this.subItemList) === null || _a === void 0 ? void 0 : _a.filter(it => it.sub_item_id == item.md_sub_item_id)) === null || _b === void 0 ? void 0 : _b.forEach(item1 => {
                            item1.isChecked = true;
                        });
                    });
                    item.subItemList = this.subItemList;
                    console.log(item.subItemList, '351');
                }
            });
        });
    }
    changeItemList(itemSubItemList, itemId, i) {
        var _a, _b;
        console.log(itemId);
        this.itemID = i;
        console.log(this.itemList);
        this.itemName = (_a = this.itemList.find(item => item.item_id == itemId)) === null || _a === void 0 ? void 0 : _a.item_name;
        console.log(this.itemName);
        if (itemId != 'OTHERS') {
            this.modalContent = '';
            this.modalReference = this.modalService.open(itemSubItemList, {
                windowClass: 'itemSubItemList',
            });
        }
        else {
            if (this.createMaterialDistributionForm.value.enterSubItem) {
                this.OtherItemStatus = "O";
            }
            else {
                if (this.OtherItemStatus == "O") {
                    this.OtherItemStatus = "I";
                }
                else {
                    this.OtherItemStatus = "O";
                }
            }
        }
        this.subItemList = (_b = this.itemList.find(item => item.item_id == itemId)) === null || _b === void 0 ? void 0 : _b.subItemList;
        console.log(this.subItemList, 'subItemList');
    }
    selectSubItemForMD(subItemList, e, type) {
        if (type == "C") {
            this.checked = e;
            if (this.checked == true) {
                this.showSelectedSI = "";
                this.subItemList.find(list => list.sub_item_id == (subItemList === null || subItemList === void 0 ? void 0 : subItemList.sub_item_id)).isChecked = true;
                console.log(this.subItemList, 'subItemList');
            }
            else {
                this.showSelectedSI = "";
                this.subItemList.find(list => list.sub_item_id == (subItemList === null || subItemList === void 0 ? void 0 : subItemList.sub_item_id)).isChecked = false;
                console.log(this.subItemList, 'subItemList');
            }
        }
        else {
            this.itemList.find(v => v.item_id == e).subItemList = this.subItemList;
            this.checked = e;
            if (this.checked % 2 == 1) {
                this.subItemList.find(list => list.sub_item_id == (subItemList === null || subItemList === void 0 ? void 0 : subItemList.sub_item_id)).isChecked = true;
                console.log(this.subItemList, 'subItemList');
                this.itemList[e].subItemList = this.subItemList;
            }
            else {
                this.subItemList.find(list => list.sub_item_id == (subItemList === null || subItemList === void 0 ? void 0 : subItemList.sub_item_id)).isChecked = false;
                console.log(this.subItemList, 'subItemList');
                this.itemList[e].subItemList = this.subItemList;
            }
        }
    }
    saveLocallySubItem() {
        console.log(this.subItemList, 'subItemList');
        this.modalReference.close();
    }
    createMaterialDistributionModalDismiss() {
        // this.modalReference = this.modalService.dismissAll();
        // this.modalReference.close();
        // console.log('cls');
        var _a;
        // this.subItemMultiItem = [];
        var ID = (_a = this.onDistributionEditData) === null || _a === void 0 ? void 0 : _a.material_distribution_register_id;
        if (ID) {
            this.onDistributionEditData = '';
            ID = 0;
            this.modalReference = this.modalService.dismissAll();
            this.editItemID = '';
        }
        else {
            this.modalReference = this.modalService.dismissAll();
        }
    }
    disabledSaveMaterialTraining() {
        let flag = true;
        // if (this.createMaterialDistributionForm.value.itemList == 'OTHERS') {
        //   if (!this.createMaterialDistributionForm.value.enterSubItem) {
        //     flag = false;
        //   }
        // } else if (this.subItemMultiItem.length == 0) {
        //   flag = false;
        // }
        return flag;
    }
    createMaterialDistributionSave() {
        var _a, _b, _c;
        this.subItemMultiItem = [];
        console.log('createMaterialDistributionSave');
        console.log(this.familyDetails, 'xxxxxxxxxxsavexxx');
        console.log(this.onDistributionEditData, 'onDistributionEditData');
        console.log(this.itemList, 'wholeitemliost');
        this.itemList.forEach((x) => {
            if (x.item_id != 'OTHERS') {
                var multiSub = [];
                multiSub = x.subItemList.filter(it => it.isChecked == true);
                console.log(multiSub, 'inside loop');
                multiSub.forEach((y) => {
                    this.subItemMultiItem.push(y.sub_item_id);
                    console.log(this.subItemMultiItem, ' this.subItemMultiItem');
                });
            }
        });
        console.log(this.subItemMultiItem, ' finallistsi');
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
MaterialDistributionRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MaterialDistributionRegisterComponent, selectors: [["app-material-distribution-register"]], decls: 71, vars: 27, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "6%"], [2, "width", "10%"], [2, "width", "25%"], [2, "width", "20%"], [2, "width", "15%"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["detailsOfDistribution", ""], ["eligibleFamilyDetails", ""], ["materialDistribution", ""], ["itemSubItemList", ""], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], [1, "fas", "fa-plus-circle", 2, "cursor", "pointer", 3, "click"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [2, "cursor", "pointer", "color", "blue", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-25px", 3, "click"], [1, "modal-body"], [2, "width", "5%"], ["style", "width:12%;", 4, "ngIf"], [2, "width", "12%"], [1, "popover__wrapper"], [1, "popover__title"], [1, "popover__content"], [1, "card-header"], ["style", "width: 12%;", 4, "ngIf"], ["class", "fas fa-edit", "title", "Edit Material Distributed Family", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Material Distributed Family", 3, "click", 4, "ngIf"], ["title", "Edit Material Distributed Family", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Material Distributed Family", 1, "fas", "fa-trash", 3, "click"], [2, "float", "right", "cursor", "pointer", "font-size", "35px", "margin-bottom", "20px", 3, "click"], [2, "width", "8%"], [2, "width", "14%"], ["title", "Distribute Material", 1, "fas", "fa-file", 3, "click"], [1, "scheduler-border"], ["id", "beneficiaryScroll", 1, "QA_table"], ["class", "row", 4, "ngFor", "ngForOf"], ["class", "form-group col-md-12", 4, "ngIf"], [1, "modal-footer"], [1, "col-md-6"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "collapsible", 2, "padding", "10px", "width", "-webkit-fill-available", 3, "value", "click"], [2, "table-layout", "fixed"], ["style", "overflow:hidden; white-space:nowrap; display: inline;", 3, "change", 4, "ngFor", "ngForOf"], [2, "overflow", "hidden", "white-space", "nowrap", "display", "inline", 3, "change"], [1, "form-group", "col-md-12"], ["type", "text", "placeholder", "Enter Other Sub Item", "formControlName", "enterSubItem", "maxlength", "45", 1, "form-control", 3, "keypress"], [1, "modal-contents"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [2, "margin-left", "160px"], ["class", "form-check-input", "type", "checkbox", "checked", "", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["type", "checkbox", "checked", "", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"]], template: function MaterialDistributionRegisterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, MaterialDistributionRegisterComponent_ng_template_65_Template, 49, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, MaterialDistributionRegisterComponent_ng_template_67_Template, 35, 5, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, MaterialDistributionRegisterComponent_ng_template_69_Template, 13, 2, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginatePipe"]], styles: [".fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #499;\r\n  font-size: 20px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  overflow-x: hidden;\r\n  width: 1050px;\r\n  margin-left: -230px;\r\n}\r\n\r\n.modal-contents[_ngcontent-%COMP%] {\r\n  height: 260px;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 150px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n#beneficiaryScroll[_ngcontent-%COMP%] {\r\n  margin: 0 -19px;\r\n  padding: 0 24px;\r\n  max-height: 26vh;\r\n  overflow: auto;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translate(0, -20px);\r\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\r\n}\r\n\r\n.popover__title[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #499;\r\n  text-align: center;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 200px !important;\r\n  transform: translate(0, 15px) !important;\r\n  background-color: white;\r\n  color: #828BB2;\r\n  box-shadow: 3px 4px 5px 3px rgba(117, 111, 117, 1);\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: \"\";\r\n  left: calc(10% - 10px);\r\n  top: -10px;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #bfbfbf transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #499;\r\n}\r\n\r\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n  width: 100%;\r\n}\r\n\r\n.form-check-input[type=checkbox][_ngcontent-%COMP%] {\r\n  border-radius: 0.25em;\r\n  margin-left: 180px;\r\n}\r\n\r\n.collapsible[_ngcontent-%COMP%] {\r\n  background-color: #686868;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 18px;\r\n  border: none;\r\n  text-align: left;\r\n  outline: none;\r\n  font-size: 15px;\r\n  border-radius: 10px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.collapsible[_ngcontent-%COMP%]:after {\r\n  content: '\\002B';\r\n  color: white;\r\n  font-weight: bold;\r\n  float: right;\r\n  margin-left: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLWRpc3RyaWJ1dGlvbi1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlEQUF5RDtFQUN6RCx5QkFBeUI7RUFDekIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibWF0ZXJpYWwtZGlzdHJpYnV0aW9uLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtcGx1cy1jaXJjbGUge1xyXG4gIGNvbG9yOiAjNDk5O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMzBweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnRzIHtcclxuICBoZWlnaHQ6IDI2MHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhYmxlIHRoIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2JlbmVmaWNpYXJ5U2Nyb2xsIHtcclxuICBtYXJnaW46IDAgLTE5cHg7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIG1heC1oZWlnaHQ6IDI2dmg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5wb3BvdmVyX193cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBvcG92ZXJfX3dyYXBwZXI6aG92ZXIgLnBvcG92ZXJfX2NvbnRlbnQge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzQ5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLnBvcG92ZXJfX2NvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNXB4KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjODI4QkIyO1xyXG4gIGJveC1zaGFkb3c6IDNweCA0cHggNXB4IDNweCByZ2JhKDExNywgMTExLCAxMTcsIDEpO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fY29udGVudCBsaSB7XHJcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbn1cclxuXHJcbi5wb3BvdmVyX19jb250ZW50OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgbGVmdDogY2FsYygxMCUgLSAxMHB4KTtcclxuICB0b3A6IC0xMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2JmYmZiZiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxufVxyXG5cclxudGFibGUuZGF0YVRhYmxlIHRib2R5IHRoLCB0YWJsZS5kYXRhVGFibGUgdGJvZHkgdGQge1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICBtYXJnaW4tbGVmdDogMTgwcHg7XHJcbn1cclxuXHJcbi5jb2xsYXBzaWJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4Njg2ODtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb2xsYXBzaWJsZTphZnRlciB7XHJcbiAgY29udGVudDogJ1xcMDAyQic7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59Il19 */"] });
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