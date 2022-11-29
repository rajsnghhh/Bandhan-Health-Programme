(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pem-register-pem-register-module"],{

/***/ "+OJD":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/pem-register/pem-register-create/pem-register-create.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PemRegisterCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PemRegisterCreateComponent", function() { return PemRegisterCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pem_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pem-register.service */ "QTw/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/http/http.service */ "YwHQ");
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/validation.service */ "yjnX");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");















function PemRegisterCreateComponent_form_15_div_1_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", region_r20.regionName, " ");
} }
function PemRegisterCreateComponent_form_15_div_1_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_form_15_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_form_15_div_1_div_10_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.l.region.errors.required);
} }
function PemRegisterCreateComponent_form_15_div_1_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r22.branchName, " ");
} }
function PemRegisterCreateComponent_form_15_div_1_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_form_15_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_form_15_div_1_div_20_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.l.branch.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function PemRegisterCreateComponent_form_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_form_15_div_1_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PemRegisterCreateComponent_form_15_div_1_option_9_Template, 2, 1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PemRegisterCreateComponent_form_15_div_1_div_10_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_form_15_div_1_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.changeBranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PemRegisterCreateComponent_form_15_div_1_option_19_Template, 2, 1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PemRegisterCreateComponent_form_15_div_1_div_20_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r9.l.region.invalid && ctx_r9.l.region.touched, ctx_r9.l.region.valid && (ctx_r9.l.region.dirty || ctx_r9.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx_r9.l.branch.invalid && ctx_r9.l.branch.touched, ctx_r9.l.branch.valid && (ctx_r9.l.branch.dirty || ctx_r9.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.l.branch.errors);
} }
function PemRegisterCreateComponent_form_15_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", block_r27.blockName, " ");
} }
function PemRegisterCreateComponent_form_15_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_form_15_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_form_15_div_12_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.l.block.errors.required);
} }
function PemRegisterCreateComponent_form_15_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gp_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", gp_r29.name, " ");
} }
function PemRegisterCreateComponent_form_15_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_form_15_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_form_15_div_22_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.l.gp.errors.required);
} }
function PemRegisterCreateComponent_form_15_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vill_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", vill_r31.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vill_r31.villageName, " ");
} }
function PemRegisterCreateComponent_form_15_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_form_15_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_form_15_div_32_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.l.gram.errors.required);
} }
function PemRegisterCreateComponent_form_15_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_form_15_div_1_Template, 21, 12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Block :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_form_15_Template_select_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.changeBlock($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "-- Select Block --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PemRegisterCreateComponent_form_15_option_11_Template, 2, 1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PemRegisterCreateComponent_form_15_div_12_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "GP/ Municipality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_form_15_Template_select_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.changeGp($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "-- Select GP/ Municipality --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PemRegisterCreateComponent_form_15_option_21_Template, 2, 1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PemRegisterCreateComponent_form_15_div_22_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Village/ Gram Sansad/ Locality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_form_15_Template_select_change_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.changeVillage($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "-- Select Village --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PemRegisterCreateComponent_form_15_option_31_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PemRegisterCreateComponent_form_15_div_32_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.locationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.regionBranchHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx_r0.l.block.invalid && ctx_r0.l.block.touched, ctx_r0.l.block.valid && (ctx_r0.l.block.dirty || ctx_r0.l.block.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.villagesOfBranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.l.block.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx_r0.l.gp.invalid && ctx_r0.l.gp.touched, ctx_r0.l.gp.valid && (ctx_r0.l.gp.dirty || ctx_r0.l.gp.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gpDtoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.l.gp.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c0, ctx_r0.l.gram.invalid && ctx_r0.l.gram.touched, ctx_r0.l.gram.valid && (ctx_r0.l.gram.dirty || ctx_r0.l.gram.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.villageDtoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.l.gram.errors);
} }
function PemRegisterCreateComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add PEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_tr_46_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PemRegisterCreateComponent_tr_46_td_17_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const pem_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53); return ctx_r40.addPemModal(_r5, pem_r37.childId, pem_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PemRegisterCreateComponent_tr_46_Template_td_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const pem_r37 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51); return ctx_r43.openModal(_r3, pem_r37.childId, pem_r37.childAge, pem_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PemRegisterCreateComponent_tr_46_td_17_Template, 2, 0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pem_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r2.p - 1) * 5 + i_r38 + 1 ? (ctx_r2.p - 1) * 5 + i_r38 + 1 : i_r38 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pem_r37.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", pem_r37.firstName, " ", pem_r37.middleName, " ", pem_r37.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pem_r37.husbandOrGuardianName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pem_r37.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pem_r37.childAge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](pem_r37.latestMuacIndicatorName == "RED" ? "danger" : pem_r37.latestMuacIndicatorName == "GREEN" ? "success" : pem_r37.latestMuacIndicatorName == "YELLOW" ? "warning" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.createMode);
} }
function PemRegisterCreateComponent_ng_template_50_th_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_ng_template_50_tr_116_i_18_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_50_tr_116_i_18_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const item_r48 = ctx_r53.$implicit; const i_r49 = ctx_r53.index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55); return ctx_r52.editPEMData(item_r48, i_r49, _r7, item_r48.pemCounsellingDataMasterId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_ng_template_50_tr_116_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_50_tr_116_i_19_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const item_r48 = ctx_r56.$implicit; const i_r49 = ctx_r56.index; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.deletePEMData(item_r48, i_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_ng_template_50_tr_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PemRegisterCreateComponent_ng_template_50_tr_116_i_18_Template, 1, 0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PemRegisterCreateComponent_ng_template_50_tr_116_i_19_Template, 1, 0, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    const i_r49 = ctx.index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r49 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.pemDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.muacData.muac);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.muacData.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.muacData.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.experiencedDiarrhea);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.supplementaryFood);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.visitingHcareCenter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.deleteMode);
} }
function PemRegisterCreateComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PEM Counselling Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_50_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.modalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fieldset", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "legend", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Place of delivery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Birth weight of child (In kg): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Primary immunization completed after 12 months: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Primary immunization completed after 24 months:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Exclusive breastfeeding followed or not (at least for first 6 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Exclusive breastfeeding followed or not (upto first 12 month):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Exclusive breastfeeding followed or not (upto first 18 month):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Exclusive breastfeeding followed or not (upto first 24 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "table", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "SL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Data of");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Record Keeping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Muac ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " (In cm)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Height ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " (In cm)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " (In kg)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Experienced ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Diarrhea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Supplementary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Food Provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Visiting Health ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Care center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, PemRegisterCreateComponent_ng_template_50_th_114_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tbody", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, PemRegisterCreateComponent_ng_template_50_tr_116_Template, 20, 10, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.placeOfDelivery) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.placeOfDelivery : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.birthWeight) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.birthWeight : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.primaryImmunizationUpto12Completed) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.primaryImmunizationUpto12Completed : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.primaryImmunizationUpto24Completed) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.primaryImmunizationUpto24Completed : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto6Complete) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto6Complete : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto12Complete) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto12Complete : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto18Complete) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto18Complete : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto24Complete) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto24Complete : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.updateMode || ctx_r4.deleteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.pemRegisterEntry);
} }
function PemRegisterCreateComponent_ng_template_52_div_109_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date of record keeping is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_ng_template_52_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_52_div_109_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r61.f.pemDate.errors.required);
} }
function PemRegisterCreateComponent_ng_template_52_div_116_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Height is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_ng_template_52_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_52_div_116_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r62.f.height.errors.required);
} }
function PemRegisterCreateComponent_ng_template_52_div_123_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_ng_template_52_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_52_div_123_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.f.weight.errors.required);
} }
function PemRegisterCreateComponent_ng_template_52_div_130_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MUAC is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_ng_template_52_div_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_52_div_130_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.f.muac.errors.required);
} }
function PemRegisterCreateComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create PEM Counselling Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_52_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.modalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fieldset", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "legend", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Place of delivery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.delivery($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u00A0\u00A0Institution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.delivery($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00A0\u00A0Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Birth weight of child (In kg):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PemRegisterCreateComponent_ng_template_52_Template_input_keyup_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.birthWeightVal(); })("keypress", function PemRegisterCreateComponent_ng_template_52_Template_input_keypress_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.validationService.onlyIntegerAndDecimal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Primary immunization completed after 12 months: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.immunization12($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.immunization12($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Primary immunization completed after 24 months: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.immunization24($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.immunization24($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Exclusive breastfeeding followed or not (at least for first 6 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.breastfeeding6($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_61_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.breastfeeding6($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Exclusive breastfeeding followed or not (upto first 12 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.breastfeeding12($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.breastfeeding12($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Exclusive breastfeeding followed or not (upto first 18 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_80_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.breastfeeding18($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_85_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.breastfeeding18($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Exclusive breastfeeding followed or not (upto first 24 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_92_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.breastfeeding24($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_97_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.breastfeeding24($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "fieldset", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "legend", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Date of record keeping: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PemRegisterCreateComponent_ng_template_52_Template_input_keydown_108_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.restrictTypeOfDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, PemRegisterCreateComponent_ng_template_52_div_109_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Height (In cm): \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function PemRegisterCreateComponent_ng_template_52_Template_input_keypress_115_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.validationService.onlyIntegerAndDecimal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, PemRegisterCreateComponent_ng_template_52_div_116_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Weight (In kg): \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function PemRegisterCreateComponent_ng_template_52_Template_input_keypress_122_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.validationService.onlyIntegerAndDecimal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, PemRegisterCreateComponent_ng_template_52_div_123_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "MUAC (In cm): \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PemRegisterCreateComponent_ng_template_52_Template_input_keyup_129_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.muacVal(); })("keypress", function PemRegisterCreateComponent_ng_template_52_Template_input_keypress_129_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.validationService.onlyIntegerAndDecimal($event); })("keydown", function PemRegisterCreateComponent_ng_template_52_Template_input_keydown_129_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.restrictZero($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, PemRegisterCreateComponent_ng_template_52_div_130_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Whether experienced Diarrhea: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_139_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.diarrhe($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_144_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.diarrhe($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Supplementary food provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " or not: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_155_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.supplementar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_160_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.supplementar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Whether visiting the health care centre: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_169_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.healthCare($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_174_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.healthCare($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_52_Template_button_click_178_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.savePEMRegisterEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_52_Template_button_click_181_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.resetPEMRegisterEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.pemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r6.immunization12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r6.immunization12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx_r6.f.pemDate.invalid && ctx_r6.f.pemDate.touched, ctx_r6.f.pemDate.valid && (ctx_r6.f.pemDate.dirty || ctx_r6.f.pemDate.touched)))("min", ctx_r6.childDob)("max", ctx_r6.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.pemDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c0, ctx_r6.f.height.invalid && ctx_r6.f.height.touched, ctx_r6.f.height.valid && (ctx_r6.f.height.dirty || ctx_r6.f.height.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.height.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, ctx_r6.f.weight.invalid && ctx_r6.f.weight.touched, ctx_r6.f.weight.valid && (ctx_r6.f.weight.dirty || ctx_r6.f.weight.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.weight.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c0, ctx_r6.f.muac.invalid && ctx_r6.f.muac.touched, ctx_r6.f.muac.valid && (ctx_r6.f.muac.dirty || ctx_r6.f.muac.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.muac.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last Muac Recorded: ", ctx_r6.latestMuac, "");
} }
function PemRegisterCreateComponent_ng_template_54_div_109_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date of record keeping is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_ng_template_54_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_54_div_109_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.e.pemDate.errors.required);
} }
function PemRegisterCreateComponent_ng_template_54_div_116_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Height is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_ng_template_54_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_54_div_116_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r103.e.height.errors.required);
} }
function PemRegisterCreateComponent_ng_template_54_div_123_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " weight is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_ng_template_54_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_54_div_123_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r104.e.weight.errors.required);
} }
function PemRegisterCreateComponent_ng_template_54_div_130_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MUAC is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PemRegisterCreateComponent_ng_template_54_div_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_54_div_130_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r105.e.muac.errors.required);
} }
function PemRegisterCreateComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit PEM Counselling Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_54_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.modalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fieldset", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "legend", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Place of delivery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.delivery($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u00A0\u00A0Institution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.delivery($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00A0\u00A0Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Birth weight of child (In kg):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function PemRegisterCreateComponent_ng_template_54_Template_input_keypress_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.validationService.onlyIntegerAndDecimal($event); })("keyup", function PemRegisterCreateComponent_ng_template_54_Template_input_keyup_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r115.birthWeightVal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Primary immunization completed after 12 months: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r116.immunization12($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r117.immunization12($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Primary immunization completed after 24 months: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r118.immunization24($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.immunization24($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Exclusive breastfeeding followed or not (at least for first 6 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r120.breastfeeding6($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_61_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r121.breastfeeding6($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Exclusive breastfeeding followed or not (upto first 12 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.breastfeeding12($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r123.breastfeeding12($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Exclusive breastfeeding followed or not (upto first 18 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_80_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r124.breastfeeding18($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_85_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r125.breastfeeding18($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Exclusive breastfeeding followed or not (upto first 24 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_92_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r126.breastfeeding24($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_97_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r127.breastfeeding24($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "fieldset", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "legend", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Date of record keeping: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PemRegisterCreateComponent_ng_template_54_Template_input_keydown_108_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r128.restrictTypeOfDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, PemRegisterCreateComponent_ng_template_54_div_109_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Height (In cm): \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function PemRegisterCreateComponent_ng_template_54_Template_input_keypress_115_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r129.validationService.onlyIntegerAndDecimal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, PemRegisterCreateComponent_ng_template_54_div_116_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Weight (In kg): \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function PemRegisterCreateComponent_ng_template_54_Template_input_keypress_122_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.validationService.onlyIntegerAndDecimal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, PemRegisterCreateComponent_ng_template_54_div_123_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "MUAC (In cm): \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PemRegisterCreateComponent_ng_template_54_Template_input_keyup_129_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r131.muacVal(); })("keypress", function PemRegisterCreateComponent_ng_template_54_Template_input_keypress_129_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r132.validationService.onlyIntegerAndDecimal($event); })("keydown", function PemRegisterCreateComponent_ng_template_54_Template_input_keydown_129_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r133.restrictZero($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, PemRegisterCreateComponent_ng_template_54_div_130_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Whether experienced Diarrhea: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_137_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r134.diarrhe($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_142_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.diarrhe($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Supplementary food provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " or not: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_153_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r136.supplementar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_158_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r137.supplementar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Whether visiting the health care centre: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_167_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r138.healthCare($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_172_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r139.healthCare($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_54_Template_button_click_176_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r140.saveEditPEMRegisterEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_54_Template_button_click_179_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r141.resetEditPEMRegisterEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r8.editPemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx_r8.e.pemDate.invalid && ctx_r8.e.pemDate.touched, ctx_r8.e.pemDate.valid && (ctx_r8.e.pemDate.dirty || ctx_r8.e.pemDate.touched)))("min", ctx_r8.childDob)("max", ctx_r8.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.e.pemDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx_r8.e.height.invalid && ctx_r8.e.height.touched, ctx_r8.e.height.valid && (ctx_r8.e.height.dirty || ctx_r8.e.height.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.e.height.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c0, ctx_r8.e.weight.invalid && ctx_r8.e.weight.touched, ctx_r8.e.weight.valid && (ctx_r8.e.weight.dirty || ctx_r8.e.weight.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.e.weight.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, ctx_r8.e.muac.invalid && ctx_r8.e.muac.touched, ctx_r8.e.muac.valid && (ctx_r8.e.muac.dirty || ctx_r8.e.muac.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.e.muac.errors);
} }
const _c1 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class PemRegisterCreateComponent {
    constructor(fb, pemService, http, modalService, toaster, httpService, validationService, sidebarService, config, activatedRoute, router) {
        this.fb = fb;
        this.pemService = pemService;
        this.http = http;
        this.modalService = modalService;
        this.toaster = toaster;
        this.httpService = httpService;
        this.validationService = validationService;
        this.sidebarService = sidebarService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loader = false;
        this.regionList = [];
        this.branchList = [];
        this.villagesOfBranch = [];
        this.gpDtoList = [];
        this.villageDtoList = [];
        this.today = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngDoCheck() {
        this.searchFullscreen = this.validationService.val;
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.activatedRoute.queryParams.subscribe(params => {
            this.setStatus = params['status'];
            this.familyID = params['familyID'];
            this.regionID = params['regionID'];
            this.branchID = params['branchID'];
            this.blockID = params['blockID'];
            this.gpID = params['gpID'];
            this.villageID = params['villageID'];
            console.log(params, 'params');
            console.log(this.familyID, 'familyID');
            console.log(this.regionID, ' this.regionID');
            console.log(this.branchID, ' this.branchID');
            console.log(this.blockID, ' this.blockID ');
            console.log(this.gpID, 'this.gpID');
            console.log(this.villageID, ' this.villageID ');
        });
        let JSONDatas = { regionID: this.regionID, branchID: this.branchID, blockID: this.blockID, gpID: this.gpID, villageID: this.villageID };
        localStorage.setItem("datas", JSON.stringify(JSONDatas));
        if (this.setStatus == 'viewCentralPEM') {
            this.viewPEMList();
        }
        else {
            this.locForm();
            this.createForm(this.pemDataSave);
            this.sidebarService.checkRoledetailDTO().then((res) => {
                if (res.regionBranchHide) {
                    this.regionList = res.region;
                    this.regionBranchHide = res.regionBranchHide;
                }
                else {
                    let Dto = {
                        dataAccessDTO: res.dataAccessDTO,
                        branchId: res.branchId
                    };
                    this.regionBranchHide = res.regionBranchHide;
                    this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res) => {
                        if (res.sessionDTO.status == true) {
                            this.villagesOfBranch = res.responseObject;
                        }
                    });
                }
            });
            ((_c = (_b = (_a = this.sidebarService.subMenuList
                .find(functionShortName => functionShortName.functionShortName == 'Registers')) === null || _a === void 0 ? void 0 : _a.subMenuDetailList.find(item => item.subFunctionMasterId == 113 || item.subFunctionMasterId == 114 || item.subFunctionMasterId == 115 || item.subFunctionMasterId == 116)) === null || _b === void 0 ? void 0 : _b.accessDetailList.find(accessType => accessType.accessType == 'view')) === null || _c === void 0 ? void 0 : _c.accessType) ? this.router.navigate(['/pem-register/create']) : this.router.navigate(['/error']);
        }
        this.createMode = ((_f = (_e = (_d = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionShortName == 'Registers')) === null || _d === void 0 ? void 0 : _d.subMenuDetailList.find(item => item.subFunctionMasterId == 113 || item.subFunctionMasterId == 114 || item.subFunctionMasterId == 115 || item.subFunctionMasterId == 116)) === null || _e === void 0 ? void 0 : _e.accessDetailList.find(accessType => accessType.accessType == 'create')) === null || _f === void 0 ? void 0 : _f.accessType) ? true : false;
        console.log(this.createMode);
        this.updateMode = ((_j = (_h = (_g = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionShortName == 'Registers')) === null || _g === void 0 ? void 0 : _g.subMenuDetailList.find(item => item.subFunctionMasterId == 113 || item.subFunctionMasterId == 114 || item.subFunctionMasterId == 115 || item.subFunctionMasterId == 116)) === null || _h === void 0 ? void 0 : _h.accessDetailList.find(accessType => accessType.accessType == 'update')) === null || _j === void 0 ? void 0 : _j.accessType) ? true : false;
        console.log(this.updateMode);
        this.deleteMode = ((_m = (_l = (_k = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionShortName == 'Registers')) === null || _k === void 0 ? void 0 : _k.subMenuDetailList.find(item => item.subFunctionMasterId == 113 || item.subFunctionMasterId == 114 || item.subFunctionMasterId == 115 || item.subFunctionMasterId == 116)) === null || _l === void 0 ? void 0 : _l.accessDetailList.find(accessType => accessType.accessType == 'delete')) === null || _m === void 0 ? void 0 : _m.accessType) ? true : false;
        console.log(this.deleteMode);
    }
    changeRegion(region) {
        var _a;
        let regionId = (_a = this.regionList.find((reg) => reg.regionName == region)) === null || _a === void 0 ? void 0 : _a.regionMasterId;
        let req = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            regionId: regionId,
        };
        this.loader = false;
        setTimeout(() => {
            this.pemService.listOfBranchesOfARegion(req).subscribe((res) => {
                this.loader = true;
                this.branchList = res === null || res === void 0 ? void 0 : res.responseObject;
            }, (error) => {
                this.loader = true;
                this.branchList = null;
            });
        }, 500);
        this.locationForm.controls.branch.setValue('');
        this.locationForm.controls.block.setValue('');
        this.locationForm.controls.gp.setValue('');
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.region == '') {
            this.showError('No Data Found');
            this.pemDetails = [];
            this.villageDtoList = [];
            this.villagesOfBranch = [];
            this.gpDtoList = [];
        }
    }
    changeBranch(branch) {
        var _a, _b;
        this.sidebarService.branchId = (_b = (_a = this.branchList) === null || _a === void 0 ? void 0 : _a.find(bran => bran.branchName == branch)) === null || _b === void 0 ? void 0 : _b.branchId;
        this.sidebarService.branchName = this.locationForm.get('branch').value;
        let Dto = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            branchId: this.sidebarService.branchId
        };
        this.loader = false;
        setTimeout(() => {
            this.pemService.villagesOfBranch(Dto).subscribe((res) => {
                this.loader = true;
                this.villagesOfBranch = res.responseObject;
                console.log(this.villagesOfBranch, 'villagesOfBranch2');
            });
        }, 500);
        this.locationForm.controls.block.setValue('');
        this.locationForm.controls.gp.setValue('');
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.branch == '') {
            this.showError('No Data Found');
            this.pemDetails = [];
            this.villageDtoList = [];
            this.villagesOfBranch = [];
            this.gpDtoList = [];
        }
    }
    changeBlock(blockname) {
        var _a;
        this.gpDtoList = (_a = this.villagesOfBranch.find(block => block.blockName == blockname)) === null || _a === void 0 ? void 0 : _a.gpDtoList;
        this.selectedBlock = this.locationForm.get('block').value;
        this.locationForm.controls.gp.setValue('');
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.block == '') {
            this.showError('No Data Found');
            this.pemDetails = [];
            this.villageDtoList = [];
            this.gpDtoList = [];
        }
    }
    changeGp(gpName) {
        var _a, _b;
        this.villageDtoList = (_b = (_a = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)) === null || _a === void 0 ? void 0 : _a.gpDtoList.find(gp => gp.name == gpName)) === null || _b === void 0 ? void 0 : _b.villageDtoList;
        this.selectedGp = this.locationForm.get('gp').value;
        this.locationForm.controls.gram.setValue('');
        console.log(this.villageDtoList);
        if (this.locationForm.value.gp == '') {
            this.showError('No Data Found');
            this.pemDetails = [];
            this.villageDtoList = [];
        }
    }
    changeVillage(villageid) {
        var _a, _b, _c;
        this.villageid = villageid;
        this.branchVillageMapId = (_c = (_b = (_a = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)) === null || _a === void 0 ? void 0 : _a.gpDtoList.find(gp => gp.name == this.selectedGp)) === null || _b === void 0 ? void 0 : _b.villageDtoList.find(vill => vill.villageMasterId == villageid)) === null || _c === void 0 ? void 0 : _c.branchVillageMapId;
        console.log(this.branchVillageMapId, 'this.branchVillageMapId');
        console.log(this.villageid, 'villageid');
        this.viewPEMList();
        if (this.locationForm.value.gram == '') {
            this.showError('No Data Found');
            this.pemDetails = [];
        }
    }
    locForm() {
        this.locationForm = this.fb.group({
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    createForm(pemDataSave) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        var item = pemDataSave;
        this.latestMuac = (_a = this.pemDataSave) === null || _a === void 0 ? void 0 : _a.latestMuacValue;
        this.firstVisitDate = (_b = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _b === void 0 ? void 0 : _b.firstVisitDate;
        this.secondVisitDate = (_c = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _c === void 0 ? void 0 : _c.secondVisitDate;
        this.pemForm = this.fb.group({
            delivery: [((_d = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _d === void 0 ? void 0 : _d.placeOfDelivery) ? (_e = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _e === void 0 ? void 0 : _e.placeOfDelivery : ''],
            birthweight: [((_f = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _f === void 0 ? void 0 : _f.birthWeight) ? (_g = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _g === void 0 ? void 0 : _g.birthWeight : ''],
            height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.heightRange])],
            weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.weightRange])],
            breastfeeding6: [((_h = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _h === void 0 ? void 0 : _h.ebfUpto6Complete) ? (_j = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _j === void 0 ? void 0 : _j.ebfUpto6Complete : ''],
            breastfeeding12: [((_k = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _k === void 0 ? void 0 : _k.ebfUpto12Complete) ? (_l = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _l === void 0 ? void 0 : _l.ebfUpto12Complete : ''],
            breastfeeding18: [((_m = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _m === void 0 ? void 0 : _m.ebfUpto18Complete) ? (_o = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _o === void 0 ? void 0 : _o.ebfUpto18Complete : ''],
            breastfeeding24: [((_p = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _p === void 0 ? void 0 : _p.ebfUpto24Complete) ? (_q = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _q === void 0 ? void 0 : _q.ebfUpto24Complete : ''],
            pemDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            muac: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.muacRange])],
            immunization12: [((_r = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _r === void 0 ? void 0 : _r.primaryImmunizationUpto12Completed) ? (_s = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _s === void 0 ? void 0 : _s.primaryImmunizationUpto12Completed : ''],
            immunization24: [((_t = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _t === void 0 ? void 0 : _t.primaryImmunizationUpto24Completed) ? (_u = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _u === void 0 ? void 0 : _u.primaryImmunizationUpto24Completed : ''],
            diarrhea: [(item === null || item === void 0 ? void 0 : item.latestPemCounsellingExperiencedDiarrhea) ? item === null || item === void 0 ? void 0 : item.latestPemCounsellingExperiencedDiarrhea : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            supplementary: [(item === null || item === void 0 ? void 0 : item.latestPemCounsellingSupplementaryFood) ? item === null || item === void 0 ? void 0 : item.latestPemCounsellingSupplementaryFood : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            healthcare: [(item === null || item === void 0 ? void 0 : item.latestPemCounsellingVisitingHealthCenter) ? item === null || item === void 0 ? void 0 : item.latestPemCounsellingVisitingHealthCenter : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    get f() {
        return this.pemForm.controls;
    }
    get e() {
        return this.editPemForm.controls;
    }
    get l() {
        return this.locationForm.controls;
    }
    showSuccess(message) {
        this.toaster.success(message, 'Pem Register', {
            timeOut: 3000,
        });
    }
    showError(message) {
        this.toaster.error(message, 'Pem Register', {
            timeOut: 3000,
        });
    }
    p(event) { }
    openModal(pemData, childId, childAge, pemDetails) {
        console.log(pemDetails);
        this.childDob = pemDetails.dob;
        this.childAge = childAge;
        this.viewPEMRegisterEntry(childId, pemDetails);
        this.modalContent = '';
        this.modalReference = this.modalService.open(pemData, {
            windowClass: 'pemData',
        });
    }
    addPemModal(addPem, childId, pem) {
        var _a, _b, _c, _d, _e;
        this.checkAge = pem.childAge;
        console.log(pem, 'pemxxxxxxx');
        this.childDob = pem.dob;
        this.pemDataSave = pem;
        this.createForm(this.pemDataSave);
        console.log(this.pemDataSave);
        this.childrenId = childId;
        this.modalContent = '';
        this.modalReference = this.modalService.open(addPem, {
            windowClass: 'pemData',
        });
        let y = (_a = this.checkAge) === null || _a === void 0 ? void 0 : _a.indexOf("year");
        let year = parseInt((_b = this.checkAge) === null || _b === void 0 ? void 0 : _b.slice(0, y - 1));
        let m = (_c = this.checkAge) === null || _c === void 0 ? void 0 : _c.indexOf("r");
        let m1 = (_d = this.checkAge) === null || _d === void 0 ? void 0 : _d.indexOf("month");
        let month = parseInt((_e = this.checkAge) === null || _e === void 0 ? void 0 : _e.slice(m + 2, m1 - 1));
        if (year == 0 && month >= 6) {
            this.pemForm.controls['immunization12'].disable();
            this.pemForm.controls['immunization24'].disable();
            this.pemForm.controls['breastfeeding6'].enable();
            this.pemForm.controls['breastfeeding12'].disable();
            this.pemForm.controls['breastfeeding18'].disable();
            this.pemForm.controls['breastfeeding24'].disable();
        }
        if (year == 1 && month < 6) {
            this.pemForm.controls['immunization12'].enable();
            this.pemForm.controls['immunization24'].disable();
            this.pemForm.controls['breastfeeding6'].enable();
            this.pemForm.controls['breastfeeding12'].enable();
            this.pemForm.controls['breastfeeding18'].disable();
            this.pemForm.controls['breastfeeding24'].disable();
        }
        if (year >= 1 && month >= 6) {
            this.pemForm.controls['immunization12'].enable();
            this.pemForm.controls['immunization24'].disable();
            this.pemForm.controls['breastfeeding6'].enable();
            this.pemForm.controls['breastfeeding12'].enable();
            this.pemForm.controls['breastfeeding18'].enable();
            this.pemForm.controls['breastfeeding24'].disable();
        }
        if (year >= 2 && month >= 0) {
            this.pemForm.controls['immunization12'].enable();
            this.pemForm.controls['immunization24'].enable();
            this.pemForm.controls['breastfeeding6'].enable();
            this.pemForm.controls['breastfeeding12'].enable();
            this.pemForm.controls['breastfeeding18'].enable();
            this.pemForm.controls['breastfeeding24'].enable();
        }
    }
    modalDismiss() {
        var _a;
        (_a = this.modalReference) === null || _a === void 0 ? void 0 : _a.close();
    }
    delivery(e) {
        this.institutionalDelivery = e.target.value;
        console.log(this.institutionalDelivery);
    }
    immunization12(e) {
        this.immunizationDelivery12 = e.target.value;
        console.log(this.immunizationDelivery12);
    }
    immunization24(e) {
        this.immunizationDelivery24 = e.target.value;
        console.log(this.immunizationDelivery24);
    }
    breastfeeding6(e) {
        this.breastFeeding6 = e.target.value;
    }
    breastfeeding12(e) {
        this.breastFeeding12 = e.target.value;
    }
    breastfeeding18(e) {
        this.breastFeeding18 = e.target.value;
    }
    breastfeeding24(e) {
        this.breastFeeding24 = e.target.value;
    }
    diarrhe(e) {
        this.diarrhea = e.target.value;
    }
    supplementar(e) {
        this.supplementary = e.target.value;
    }
    healthCare(e) {
        this.healthcare = e.target.value;
    }
    restrictTypeOfDate() {
        return false;
    }
    viewPEMList() {
        let obj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            villageMasterId: this.villageID ? this.villageID : this.villageid
        };
        this.pemService.viewPemList(obj).subscribe((res) => {
            this.pemDetails = res.responseObject;
            console.log(this.pemDetails);
            if (this.setStatus == 'viewCentralPEM') {
                var setData = this.pemDetails.filter(fam => fam.familyDetailId == this.familyID);
                console.log(setData);
                this.pemDetails = setData;
            }
        });
    }
    viewPEMRegisterEntry(childId, pemDetails) {
        let obj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            childId: childId
        };
        this.pemService.viewPemRegisterEntry(obj).subscribe((res) => {
            this.pemRegisterEntry = res.responseObject;
            this.childDTO = pemDetails.childBasicStatusDto;
            console.log(this.pemRegisterEntry);
            console.log(this.childDTO);
        });
    }
    resetPEMRegisterEntry() {
        this.createForm(this.pemDataSave);
    }
    savePEMRegisterEntry() {
        let item = this.pemForm.value;
        if (item.pemDate == '') {
            this.showError('Please select date of record keeping');
            return;
        }
        if (item.height == '') {
            this.showError('Please enter height');
            return;
        }
        if (this.pemForm.value.height < 10 || this.pemForm.value.height > 180) {
            this.showError('Height should be between 10cm to 180cm');
            return;
        }
        if (item.weight == '') {
            this.showError('Please enter weight');
            return;
        }
        if (this.pemForm.value.weight > 25) {
            this.showError('Weight should be under 25kg');
            return;
        }
        if (item.muac == '') {
            this.showError('Please enter muac value');
            return;
        }
        if (this.pemForm.value.muac > 30) {
            this.showError('Muac should be under 30cm');
            return;
        }
        if (this.pemForm.value.birthweight > 9) {
            this.showError('Birth weight should not be more than 9 kg');
            return;
        }
        if (item.diarrhea == '') {
            this.showError('Please select experienced Diarrhea or not');
            return;
        }
        if (item.supplementary == '') {
            this.showError('Please select Supplementary food provided or not');
            return;
        }
        if (item.healthcare == '') {
            this.showError('Please select visiting the health care centre or not');
            return;
        }
        this.heightVal();
        this.weightVal();
        let pemBody = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            muacDataDto: {
                muacRegisterId: 0,
                muacCampId: null,
                childId: this.childrenId,
                height: item.height ? item.height : 0,
                weight: item.weight ? item.weight : 0,
                muac: item.muac,
                active_flag: 'A'
            },
            pemCounsellingDataDto: {
                pemCounsellingDataMasterId: 0,
                experiencedDiarrhea: item.diarrhea,
                supplementaryFoodProvided: item.supplementary,
                visitingHealthCareCenter: item.healthcare,
                active_flag: "A",
                pemDate: item.pemDate
            },
            childBasicStatusDto: {
                placeOfDelivery: item.delivery ? item.delivery : null,
                birthWeight: item.birthweight ? item.birthweight : null,
                firstVisitDate: this.firstVisitDate,
                secondVisitDate: this.secondVisitDate,
                ebfUpto6Complete: item.breastfeeding6 ? item.breastfeeding6 : null,
                primaryImmunizationUpto12Completed: item.immunization12 ? item.immunization12 : null,
                ebfUpto12Complete: item.breastfeeding12 ? item.breastfeeding12 : null,
                ebfUpto18Complete: item.breastfeeding18 ? item.breastfeeding18 : null,
                primaryImmunizationUpto24Completed: item.immunization24 ? item.immunization24 : null,
                ebfUpto24Complete: item.breastfeeding24 ? item.breastfeeding24 : null
            }
        };
        console.log(pemBody);
        this.pemService.savePemRegister(pemBody).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.modalDismiss();
                this.changeVillage(this.villageid);
            }
            else {
                this.showError(res.message);
            }
        });
    }
    editPEMData(item, i, editPem, pemCounsellingDataMasterId) {
        var checkAge = this.childAge;
        this.modalDismiss();
        this.modalContent = '';
        this.modalReference = this.modalService.open(editPem, {
            windowClass: 'pemData',
        });
        this.EditForm(item);
        checkAge = this.childAge;
        console.log(item, '***', editPem);
        let y = checkAge === null || checkAge === void 0 ? void 0 : checkAge.indexOf("year");
        let year = parseInt(checkAge === null || checkAge === void 0 ? void 0 : checkAge.slice(0, y - 1));
        let m = checkAge === null || checkAge === void 0 ? void 0 : checkAge.indexOf("r");
        let m1 = checkAge === null || checkAge === void 0 ? void 0 : checkAge.indexOf("month");
        let month = parseInt(checkAge === null || checkAge === void 0 ? void 0 : checkAge.slice(m + 2, m1 - 1));
        if (year == 0 && month >= 6) {
            this.editPemForm.controls['immunization12'].disable();
            this.editPemForm.controls['immunization24'].disable();
            this.editPemForm.controls['breastfeeding6'].enable();
            this.editPemForm.controls['breastfeeding12'].disable();
            this.editPemForm.controls['breastfeeding18'].disable();
            this.editPemForm.controls['breastfeeding24'].disable();
        }
        if (year == 1 && month < 6) {
            this.editPemForm.controls['immunization12'].enable();
            this.editPemForm.controls['immunization24'].disable();
            this.editPemForm.controls['breastfeeding6'].enable();
            this.editPemForm.controls['breastfeeding12'].enable();
            this.editPemForm.controls['breastfeeding18'].disable();
            this.editPemForm.controls['breastfeeding24'].disable();
        }
        if (year >= 1 && month >= 6) {
            this.editPemForm.controls['immunization12'].enable();
            this.editPemForm.controls['immunization24'].disable();
            this.editPemForm.controls['breastfeeding6'].enable();
            this.editPemForm.controls['breastfeeding12'].enable();
            this.editPemForm.controls['breastfeeding18'].enable();
            this.editPemForm.controls['breastfeeding24'].disable();
        }
        if (year >= 2 && month >= 0) {
            this.editPemForm.controls['immunization12'].enable();
            this.editPemForm.controls['immunization24'].enable();
            this.editPemForm.controls['breastfeeding6'].enable();
            this.editPemForm.controls['breastfeeding12'].enable();
            this.editPemForm.controls['breastfeeding18'].enable();
            this.editPemForm.controls['breastfeeding24'].enable();
        }
    }
    EditForm(item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        this.saveEditFormData = item;
        this.editPemForm = this.fb.group({
            delivery: [((_a = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _a === void 0 ? void 0 : _a.placeOfDelivery) ? (_b = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _b === void 0 ? void 0 : _b.placeOfDelivery : null],
            birthweight: [((_c = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _c === void 0 ? void 0 : _c.birthWeight) ? (_d = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _d === void 0 ? void 0 : _d.birthWeight : null],
            height: [((_e = item === null || item === void 0 ? void 0 : item.muacData) === null || _e === void 0 ? void 0 : _e.height) ? (_f = item === null || item === void 0 ? void 0 : item.muacData) === null || _f === void 0 ? void 0 : _f.height : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.heightRange])],
            weight: [((_g = item === null || item === void 0 ? void 0 : item.muacData) === null || _g === void 0 ? void 0 : _g.weight) ? (_h = item === null || item === void 0 ? void 0 : item.muacData) === null || _h === void 0 ? void 0 : _h.weight : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.weightRange])],
            breastfeeding6: [((_j = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _j === void 0 ? void 0 : _j.ebfUpto6Complete) ? (_k = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _k === void 0 ? void 0 : _k.ebfUpto6Complete : ''],
            breastfeeding12: [((_l = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _l === void 0 ? void 0 : _l.ebfUpto12Complete) ? (_m = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _m === void 0 ? void 0 : _m.ebfUpto12Complete : ''],
            breastfeeding18: [((_o = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _o === void 0 ? void 0 : _o.ebfUpto18Complete) ? (_p = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _p === void 0 ? void 0 : _p.ebfUpto18Complete : ''],
            breastfeeding24: [((_q = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _q === void 0 ? void 0 : _q.ebfUpto24Complete) ? (_r = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _r === void 0 ? void 0 : _r.ebfUpto24Complete : ''],
            pemDate: [item === null || item === void 0 ? void 0 : item.pemDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            muac: [((_s = item === null || item === void 0 ? void 0 : item.muacData) === null || _s === void 0 ? void 0 : _s.muac) ? (_t = item === null || item === void 0 ? void 0 : item.muacData) === null || _t === void 0 ? void 0 : _t.muac : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.muacRange])],
            immunization12: [((_u = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _u === void 0 ? void 0 : _u.primaryImmunizationUpto12Completed) ? (_v = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _v === void 0 ? void 0 : _v.primaryImmunizationUpto12Completed : ''],
            immunization24: [((_w = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _w === void 0 ? void 0 : _w.primaryImmunizationUpto24Completed) ? (_x = item === null || item === void 0 ? void 0 : item.childBasicStatusDto) === null || _x === void 0 ? void 0 : _x.primaryImmunizationUpto24Completed : ''],
            diarrhea: [(item === null || item === void 0 ? void 0 : item.experiencedDiarrhea) ? item === null || item === void 0 ? void 0 : item.experiencedDiarrhea : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            supplementary: [(item === null || item === void 0 ? void 0 : item.supplementaryFood) ? item === null || item === void 0 ? void 0 : item.supplementaryFood : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            healthcare: [(item === null || item === void 0 ? void 0 : item.visitingHcareCenter) ? item === null || item === void 0 ? void 0 : item.visitingHcareCenter : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.editPemForm.markAllAsTouched();
    }
    saveEditPEMRegisterEntry() {
        var item = this.editPemForm.value;
        console.log(this.saveEditFormData);
        var set = this.saveEditFormData;
        if (item.pemDate == '') {
            this.showError('Please select date of record keeping');
            return;
        }
        if (item.height == '') {
            this.showError('Please enter height');
            return;
        }
        if (parseInt(this.editPemForm.value.height) < 10 || parseInt(this.editPemForm.value.height) > 180) {
            this.showError('Height should be between 10cm to 180cm');
            return;
        }
        if (item.weight == '') {
            this.showError('Please enter weight');
            return;
        }
        if (this.editPemForm.value.weight > 25) {
            this.showError('Weight should be under 25kg');
            return;
        }
        if (item.muac == '') {
            this.showError('Please enter muac value');
            return;
        }
        if (this.editPemForm.value.muac > 30) {
            this.showError('Muac should be under 30cm');
            return;
        }
        if (this.editPemForm.value.birthweight > 9) {
            this.showError('Birth weight should not be more than 9 kg');
            return;
        }
        if (this.editPemForm.value.diarrhea == '') {
            this.showError('Please select experienced Diarrhea or not');
            return;
        }
        if (this.editPemForm.value.supplementary == '') {
            this.showError('Please select Supplementary food provided or not');
            return;
        }
        if (this.editPemForm.value.healthcare == '') {
            this.showError('Please select visiting the health care centre or not');
            return;
        }
        this.heightVal();
        this.weightVal();
        let pemBody = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            muacDataDto: {
                muacRegisterId: set.muacData.muacRegisterId,
                muacCampId: set.muacData.muacCampId,
                childId: set.childId,
                height: item.height ? item.height : 0,
                weight: item.weight ? item.weight : 0,
                muac: item.muac ? item.muac : 0,
                active_flag: 'A'
            },
            pemCounsellingDataDto: {
                pemCounsellingDataMasterId: set.pemCounsellingDataMasterId,
                experiencedDiarrhea: item.diarrhea ? item.diarrhea : '',
                supplementaryFoodProvided: item.supplementary ? item.supplementary : '',
                visitingHealthCareCenter: item.healthcare ? item.healthcare : '',
                active_flag: 'A',
                pemDate: item.pemDate
            },
            childBasicStatusDto: {
                placeOfDelivery: item.delivery ? item.delivery : null,
                birthWeight: item.birthweight ? item.birthweight : null,
                firstVisitDate: set.childBasicStatusDto.firstVisitDate,
                secondVisitDate: set.childBasicStatusDto.secondVisitDate,
                ebfUpto6Complete: item.breastfeeding6 ? item.breastfeeding6 : null,
                primaryImmunizationUpto12Completed: item.immunization12 ? item.immunization12 : null,
                ebfUpto12Complete: item.breastfeeding12 ? item.breastfeeding12 : null,
                ebfUpto18Complete: item.breastfeeding18 ? item.breastfeeding18 : null,
                primaryImmunizationUpto24Completed: item.immunization24 ? item.immunization24 : null,
                ebfUpto24Complete: item.breastfeeding24 ? item.breastfeeding24 : null
            }
        };
        console.log(pemBody);
        this.pemService.savePemRegister(pemBody).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.modalDismiss();
                this.changeVillage(this.villageid);
            }
            else {
                this.showError(res.message);
            }
        });
    }
    /* MUAC range between 1 to 30, validation */
    muacRange(controls) {
        if (controls.value >= 1 && controls.value <= 30) {
            return null;
        }
        return { 'notInMuacRange': true };
    }
    /* weight range between 0 to 25, validation */
    weightRange(controls) {
        if (controls.value >= 0 && controls.value <= 25 || controls.value == null) {
            return null;
        }
        return { 'notInWeightRange': true };
    }
    /* Birth Weight range between 0 to 9, validation */
    birthWeightRange(controls) {
        if (controls.value >= 0 && controls.value <= 9 || controls.value == null) {
            return null;
        }
        return { 'notInBirthWeightRange': true };
    }
    /* Height range between 10 to 180, validation */
    heightRange(controls) {
        if (controls.value >= 10 && controls.value <= 180 || controls.value == null || controls.value == '') {
            return null;
        }
        return { 'notInHeightRange': true };
    }
    deletePEMData(item, i) {
        console.log(item);
        if (confirm('Do you want to delete PEMData: ')) {
            let pemBody = {
                dataAccessDTO: this.httpService.dataAccessDTO,
                muacDataDto: {
                    muacRegisterId: item.muacData.muacRegisterId,
                    muacCampId: item.muacData.muacCampId,
                    childId: item.childId,
                    height: item.muacData.height,
                    weight: item.muacData.weight,
                    muac: item.muacData.muac,
                    active_flag: 'D'
                },
                pemCounsellingDataDto: {
                    pemCounsellingDataMasterId: item.pemCounsellingDataMasterId,
                    experiencedDiarrhea: item.experiencedDiarrhea,
                    supplementaryFoodProvided: item.supplementaryFood,
                    visitingHealthCareCenter: item.visitingHcareCenter,
                    active_flag: 'D',
                    pemDate: item.pemDate
                },
                childBasicStatusDto: {
                    placeOfDelivery: item.childBasicStatusDto.placeOfDelivery,
                    birthWeight: item.childBasicStatusDto.birthWeight,
                    firstVisitDate: item.childBasicStatusDto.firstVisitDate,
                    secondVisitDate: item.childBasicStatusDto.secondVisitDate,
                    ebfUpto6Complete: item.childBasicStatusDto.ebfUpto6Complete,
                    primaryImmunizationUpto12Completed: item.childBasicStatusDto.primaryImmunizationUpto12Completed,
                    ebfUpto12Complete: item.childBasicStatusDto.ebfUpto12Complete,
                    ebfUpto18Complete: item.childBasicStatusDto.ebfUpto18Complete,
                    primaryImmunizationUpto24Completed: item.childBasicStatusDto.primaryImmunizationUpto24Completed,
                    ebfUpto24Complete: item.childBasicStatusDto.ebfUpto24Complete
                }
            };
            console.log(pemBody);
            this.pemService.savePemRegister(pemBody).subscribe((res) => {
                console.log(res);
                if (res.status == true) {
                    this.showSuccess(res.message);
                    this.pemRegisterEntry.splice(i, 1);
                }
                else {
                    this.showError(res.message);
                }
            });
        }
    }
    restrictZero(event) {
        if (event.target.value.length === 0 && event.key === '0') {
            event.preventDefault();
        }
    }
    heightVal() {
        var _a, _b;
        console.log(this.pemForm.value.height);
        if (parseInt(this.pemForm.value.height) < 10 || parseInt(this.pemForm.value.height) > 180) {
            this.showError('Height should be between 10cm to 180cm');
            return;
        }
        if (parseInt((_a = this.editPemForm) === null || _a === void 0 ? void 0 : _a.value.height) < 10 || parseInt((_b = this.editPemForm) === null || _b === void 0 ? void 0 : _b.value.height) > 180) {
            this.showError('Height should be between 10cm to 180cm');
            return;
        }
    }
    weightVal() {
        var _a;
        if (parseInt(this.pemForm.value.weight) > 25) {
            this.showError('Weight should be under 25kg');
            return;
        }
        if (parseInt((_a = this.editPemForm) === null || _a === void 0 ? void 0 : _a.value.weight) > 25) {
            this.showError('Weight should be under 25kg');
            return;
        }
    }
    muacVal() {
        var _a;
        if (parseInt(this.pemForm.value.muac) > 30) {
            this.showError('Muac should be under 30cm');
            return;
        }
        if (parseInt((_a = this.editPemForm) === null || _a === void 0 ? void 0 : _a.value.muac) > 30) {
            this.showError('Muac should be under 30cm');
            return;
        }
    }
    birthWeightVal() {
        var _a;
        if (parseInt(this.pemForm.value.birthweight) > 9) {
            this.showError('Birth weight should not be more than 9 kg');
            return;
        }
        if (parseInt((_a = this.editPemForm) === null || _a === void 0 ? void 0 : _a.value.birthweight) > 9) {
            this.showError('Birth weight should not be more than 9 kg');
            return;
        }
    }
}
PemRegisterCreateComponent.ɵfac = function PemRegisterCreateComponent_Factory(t) { return new (t || PemRegisterCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pem_register_service__WEBPACK_IMPORTED_MODULE_2__["PemRegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_8__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
PemRegisterCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PemRegisterCreateComponent, selectors: [["app-pem-register-create"]], decls: 56, vars: 13, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search pem info here...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], ["class", "form-signin", 3, "formGroup", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "width", "4%"], [2, "width", "8%"], [2, "width", "15%"], [2, "width", "20%"], [2, "width", "10%"], ["style", "width: 10%;", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["pemData", ""], ["addPem", ""], ["editPem", ""], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], [1, "fa", "fa-circle", "fa-lg"], [1, "btn-link", 2, "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", "padding", "0px", "width", "10%", 3, "click"], ["title", "Create PEM", 1, "fa", "fa-plus", 3, "click"], [1, "modal-content"], [1, "modal-header", 2, "height", "80px"], [1, "white_box", "QA_section", "mb_30", 2, "height", "100px"], [1, "col-md"], ["title", "close", 1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-18px", 3, "click"], [1, "scheduler-border"], [1, "col"], [1, "form-group", "col-md-6"], ["for", "", 2, "font-weight", "500", "font-size", "1rem"], ["for", ""], ["id", "table_wrapper", 2, "margin", "5px"], ["id", "table_wrapper", 1, "table", "table-striped", 2, "table-layout", "fixed"], [2, "text-align", "center"], ["class", "fas fa-edit", "title", "Edit PEM", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete PEM", 3, "click", 4, "ngIf"], ["title", "Edit PEM", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete PEM", 1, "fas", "fa-trash", 3, "click"], ["id", "pem", 1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md-3"], ["for", "delivery"], [1, "form-check-inline"], ["type", "radio", "name", "delivery", "id", "yes", "value", "Institution", "formControlName", "delivery", 1, "form-check-input", 3, "change"], ["for", "delivery", 1, "form-check-label"], ["type", "radio", "name", "delivery", "id", "no", "value", "Home", "formControlName", "delivery", 1, "form-check-input", 3, "change"], ["for", "birthweight"], ["type", "text", "maxlength", "5", "placeholder", "Birth Weight (In kg)", "formControlName", "birthweight", 1, "form-control", 3, "keyup", "keypress"], ["for", "immunization12"], ["type", "radio", "name", "immunization12", "id", "yes", "value", "Y", "formControlName", "immunization12", 1, "form-check-input", 3, "disabled", "change"], ["for", "immunization12", 1, "form-check-label"], ["type", "radio", "name", "immunization12", "id", "no", "value", "N", "formControlName", "immunization12", 1, "form-check-input", 3, "disabled", "change"], ["for", "immunization24"], ["type", "radio", "name", "immunization24", "id", "yes", "value", "Y", "formControlName", "immunization24", 1, "form-check-input", 3, "change"], ["for", "immunization24", 1, "form-check-label"], ["type", "radio", "name", "immunization24", "id", "no", "value", "N", "formControlName", "immunization24", 1, "form-check-input", 3, "change"], ["for", "breastfeeding6"], ["type", "radio", "name", "breastfeeding6", "id", "yes", "value", "Y", "formControlName", "breastfeeding6", 1, "form-check-input", 3, "change"], ["for", "breastfeeding6", 1, "form-check-label"], ["type", "radio", "name", "breastfeeding6", "id", "No", "value", "N", "formControlName", "breastfeeding6", 1, "form-check-input", 3, "change"], ["for", "breastfeeding12"], ["type", "radio", "name", "breastfeeding12", "id", "yes", "value", "Y", "formControlName", "breastfeeding12", 1, "form-check-input", 3, "change"], ["for", "breastfeeding12", 1, "form-check-label"], ["type", "radio", "name", "breastfeeding12", "id", "No", "value", "N", "formControlName", "breastfeeding12", 1, "form-check-input", 3, "change"], ["for", "breastfeeding18"], ["type", "radio", "name", "breastfeeding18", "id", "yes", "value", "Y", "formControlName", "breastfeeding18", 1, "form-check-input", 3, "change"], ["for", "breastfeeding18", 1, "form-check-label"], ["type", "radio", "name", "breastfeeding18", "id", "No", "value", "N", "formControlName", "breastfeeding18", 1, "form-check-input", 3, "change"], ["for", "breastfeeding24"], ["type", "radio", "name", "breastfeeding24", "id", "yes", "value", "Y", "formControlName", "breastfeeding24", 1, "form-check-input", 3, "change"], ["for", "breastfeeding24", 1, "form-check-label"], ["type", "radio", "name", "breastfeeding24", "id", "No", "value", "N", "formControlName", "breastfeeding24", 1, "form-check-input", 3, "change"], ["for", "pemDate"], ["type", "date", "formControlName", "pemDate", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "height"], ["type", "text", "maxlength", "5", "placeholder", "Height (In cm)", "formControlName", "height", 1, "form-control", 3, "ngClass", "keypress"], ["for", "weight"], ["type", "text", "maxlength", "7", "placeholder", "weight (In kg)", "formControlName", "weight", 1, "form-control", 3, "ngClass", "keypress"], ["for", "muac"], ["type", "text", "maxlength", "4", "placeholder", "Muac (In cm)", "formControlName", "muac", 1, "form-control", 3, "ngClass", "keyup", "keypress", "keydown"], ["for", "diarrhea"], ["type", "radio", "name", "diarrhea", "id", "yes", "value", "Y", "formControlName", "diarrhea", 1, "form-check-input", 3, "change"], ["for", "diarrhea", 1, "form-check-label"], ["type", "radio", "name", "diarrhea", "id", "No", "value", "N", "formControlName", "diarrhea", 1, "form-check-input", 3, "change"], ["for", "supplementary"], ["type", "radio", "name", "supplementary", "id", "yes", "value", "Y", "formControlName", "supplementary", 1, "form-check-input", 3, "change"], ["for", "supplementary", 1, "form-check-label"], ["type", "radio", "name", "supplementary", "id", "No", "value", "N", "formControlName", "supplementary", 1, "form-check-input", 3, "change"], ["for", "healthcare"], ["type", "radio", "name", "healthcare", "id", "yes", "value", "Y", "formControlName", "healthcare", 1, "form-check-input", 3, "change"], ["for", "healthcare", 1, "form-check-label"], ["type", "radio", "name", "healthcare", "id", "No", "value", "N", "formControlName", "healthcare", 1, "form-check-input", 3, "change"], [1, "text-center"], [1, "btn", "btn-primary", "m-1", 3, "click"], [1, "fas", "fa-check-circle", "m-1"], [1, "btn", "btn-secondary", "m-1", 3, "click"], [1, "fa", "fa-refresh", "m-1"], ["type", "text", "maxlength", "5", "placeholder", "Birth Weight (In kg)", "formControlName", "birthweight", 1, "form-control", 3, "keypress", "keyup"], ["type", "radio", "name", "immunization12", "id", "yes", "value", "Y", "formControlName", "immunization12", 1, "form-check-input", 3, "change"], ["type", "radio", "name", "immunization12", "id", "no", "value", "N", "formControlName", "immunization12", 1, "form-check-input", 3, "change"]], template: function PemRegisterCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View PEM Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PemRegisterCreateComponent_Template_input_ngModelChange_12_listener($event) { return ctx.registerSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PemRegisterCreateComponent_form_15_Template, 33, 20, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "SL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Family No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mother Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Guardian Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Child Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Current");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "PEM Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Data Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PemRegisterCreateComponent_th_44_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PemRegisterCreateComponent_tr_46_Template, 18, 12, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "pagination-controls", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PemRegisterCreateComponent_Template_pagination_controls_pageChange_49_listener($event) { return ctx.p = $event; })("pageBoundsCorrection", function PemRegisterCreateComponent_Template_pagination_controls_pageBoundsCorrection_49_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, PemRegisterCreateComponent_ng_template_50_Template, 117, 10, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PemRegisterCreateComponent_ng_template_52_Template, 184, 26, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, PemRegisterCreateComponent_ng_template_54_Template, 182, 23, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setStatus != "viewCentralPEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 8, ctx.pemDetails, ctx.registerSearch), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.p)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipe"]], styles: [".modal-content[_ngcontent-%COMP%] {\r\n  height: 620px;\r\n  overflow-x: hidden;\r\n  width: 1140px;\r\n  margin-left: -320px;\r\n  margin-top: -4px;\r\n}\r\n\r\n#pem[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 120px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n.fa-plus[_ngcontent-%COMP%]:hover {\r\n  color: rgb(31, 218, 31) !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 0px groove #ddd !important;\r\n  background-color: #ddd;\r\n  width: 0px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 374px;\r\n  height: 63%;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 678px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 60%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 525px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 685px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 140px;\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%] {\r\n  color: #cd0202;\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\r\n  color: #24d524;\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\r\n  color: #f7cd00;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n  vertical-align: top;\r\n  border-top: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbS1yZWdpc3Rlci1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUIiLCJmaWxlIjoicGVtLXJlZ2lzdGVyLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNjIwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zMjBweDtcclxuICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4jcGVtIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgLnRhYmxlIHRoZWFkIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzQ5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxLjRlbSAxLjRlbSAxLjRlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAwIDEuNWVtIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mYS1wbHVzOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDMxLCAyMTgsIDMxKSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG5maWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMS40ZW0gMS40ZW0gMS40ZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxlZ2VuZC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDBweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgd2lkdGg6IDBweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogMzc0cHg7XHJcbiAgaGVpZ2h0OiA2MyU7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogNjc4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW4tbGVmdDogNTI1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBpbnB1dCB7XHJcbiAgd2lkdGg6IDc0JTtcclxuICBtYXJnaW4tbGVmdDogNjg1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZGFhYjg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXIgYnV0dG9uIGkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBtYXJnaW4tbGVmdDogMTQwcHg7XHJcbn1cclxuXHJcbi5RQV9zZWN0aW9uIC5RQV90YWJsZSB0Ym9keSAuZGFuZ2VyIHtcclxuICBjb2xvcjogI2NkMDIwMjtcclxufVxyXG5cclxuLlFBX3NlY3Rpb24gLlFBX3RhYmxlIHRib2R5IC5zdWNjZXNzIHtcclxuICBjb2xvcjogIzI0ZDUyNDtcclxufVxyXG5cclxuLlFBX3NlY3Rpb24gLlFBX3RhYmxlIHRib2R5IC53YXJuaW5nIHtcclxuICBjb2xvcjogI2Y3Y2QwMDtcclxufVxyXG5cclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PemRegisterCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pem-register-create',
                templateUrl: './pem-register-create.component.html',
                styleUrls: ['./pem-register-create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _pem_register_service__WEBPACK_IMPORTED_MODULE_2__["PemRegisterService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_8__["SidebarService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, null); })();


/***/ }),

/***/ "8xsE":
/*!*************************************************************!*\
  !*** ./src/app/modules/pem-register/pem-register.module.ts ***!
  \*************************************************************/
/*! exports provided: PemRegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PemRegisterModule", function() { return PemRegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pem_register_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pem-register-routing.module */ "YMLM");
/* harmony import */ var _pem_register_create_pem_register_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pem-register-create/pem-register-create.component */ "+OJD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");








class PemRegisterModule {
}
PemRegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PemRegisterModule });
PemRegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PemRegisterModule_Factory(t) { return new (t || PemRegisterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pem_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["PemRegisterRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PemRegisterModule, { declarations: [_pem_register_create_pem_register_create_component__WEBPACK_IMPORTED_MODULE_3__["PemRegisterCreateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pem_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["PemRegisterRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PemRegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pem_register_create_pem_register_create_component__WEBPACK_IMPORTED_MODULE_3__["PemRegisterCreateComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pem_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["PemRegisterRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QTw/":
/*!**************************************************************!*\
  !*** ./src/app/modules/pem-register/pem-register.service.ts ***!
  \**************************************************************/
/*! exports provided: PemRegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PemRegisterService", function() { return PemRegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PemRegisterService {
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
    viewPemList(obj) {
        return this.http.post(`${this.baseURL}pem/view`, obj);
    }
    viewPemRegisterEntry(obj) {
        return this.http.post(`${this.baseURL}pem/viewAllPemCounsellingDataOfAChild`, obj);
    }
    savePemRegister(obj) {
        return this.http.post(`${this.baseURL}pem/saveCounsellingData`, obj);
    }
}
PemRegisterService.ɵfac = function PemRegisterService_Factory(t) { return new (t || PemRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PemRegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PemRegisterService, factory: PemRegisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PemRegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "YMLM":
/*!*********************************************************************!*\
  !*** ./src/app/modules/pem-register/pem-register-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PemRegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PemRegisterRoutingModule", function() { return PemRegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pem_register_create_pem_register_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pem-register-create/pem-register-create.component */ "+OJD");





const routes = [{ path: 'create', component: _pem_register_create_pem_register_create_component__WEBPACK_IMPORTED_MODULE_2__["PemRegisterCreateComponent"] }];
class PemRegisterRoutingModule {
}
PemRegisterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PemRegisterRoutingModule });
PemRegisterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PemRegisterRoutingModule_Factory(t) { return new (t || PemRegisterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PemRegisterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PemRegisterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-pem-register-pem-register-module.js.map