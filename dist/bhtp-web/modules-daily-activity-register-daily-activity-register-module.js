(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-daily-activity-register-daily-activity-register-module"],{

/***/ "Vj/e":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/daily-activity-register/daily-activity-register.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DailyActivityRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyActivityRegisterComponent", function() { return DailyActivityRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/validation.service */ "yjnX");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var _daily_activity_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./daily-activity-register.service */ "h4ip");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/http/http.service */ "YwHQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");











function DailyActivityRegisterComponent_div_7_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", region_r11.regionName, " ");
} }
function DailyActivityRegisterComponent_div_7_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRegisterComponent_div_7_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRegisterComponent_div_7_div_10_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.l.region.errors.required);
} }
function DailyActivityRegisterComponent_div_7_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r13.branchName, " ");
} }
function DailyActivityRegisterComponent_div_7_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRegisterComponent_div_7_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRegisterComponent_div_7_div_20_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.l.branch.errors.required);
} }
function DailyActivityRegisterComponent_div_7_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hco_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", hco_r15.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", hco_r15.user_firstname, " ", hco_r15.user_middlename, " ", hco_r15.user_lastname, " - ", hco_r15.role_shortname, " ");
} }
function DailyActivityRegisterComponent_div_7_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hco selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRegisterComponent_div_7_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRegisterComponent_div_7_div_30_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.l.hco.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function DailyActivityRegisterComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_div_7_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DailyActivityRegisterComponent_div_7_option_9_Template, 2, 1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DailyActivityRegisterComponent_div_7_div_10_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_div_7_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.changeBranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DailyActivityRegisterComponent_div_7_option_19_Template, 2, 1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DailyActivityRegisterComponent_div_7_div_20_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Hco :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_div_7_Template_select_change_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.changeBranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "-- Select Hco --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DailyActivityRegisterComponent_div_7_option_29_Template, 2, 5, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DailyActivityRegisterComponent_div_7_div_30_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx_r0.l.region.invalid && ctx_r0.l.region.touched, ctx_r0.l.region.valid && (ctx_r0.l.region.dirty || ctx_r0.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, ctx_r0.l.branch.invalid && ctx_r0.l.branch.touched, ctx_r0.l.branch.valid && (ctx_r0.l.branch.dirty || ctx_r0.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.l.branch.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, ctx_r0.l.hco.invalid && ctx_r0.l.hco.touched, ctx_r0.l.hco.valid && (ctx_r0.l.hco.dirty || ctx_r0.l.hco.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.hcoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.l.hco.errors);
} }
function DailyActivityRegisterComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "From Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRegisterComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRegisterComponent_div_15_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.l.fromDate.errors.required);
} }
function DailyActivityRegisterComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "To Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRegisterComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRegisterComponent_div_22_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.l.toDate.errors.required);
} }
function DailyActivityRegisterComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyActivityRegisterComponent_tr_38_Template_td_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const item_r23 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.darViewFamily(item_r23.darViewFamilyDTOList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r3.p - 1) * 5 + i_r24 + 1 ? (ctx_r3.p - 1) * 5 + i_r24 + 1 : i_r24 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r23.darDate, " ");
} }
function DailyActivityRegisterComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r4.p - 1) * 5 + i_r28 + 1 ? (ctx_r4.p - 1) * 5 + i_r28 + 1 : i_r28 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r27.villageName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r27.firstName, " ", item_r27.middleName, " ", item_r27.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r27.visitedWithSS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r27.ssName);
} }
const _c1 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class DailyActivityRegisterComponent {
    constructor(fb, validationService, sidebarService, dailyActivityService, toaster, httpService) {
        this.fb = fb;
        this.validationService = validationService;
        this.sidebarService = sidebarService;
        this.dailyActivityService = dailyActivityService;
        this.toaster = toaster;
        this.httpService = httpService;
        this.regionList = [];
        this.branchList = [];
        this.villagesOfBranch = [];
        this.gpDtoList = [];
        this.villageDtoList = [];
        this.page = 1;
        this.pageSize = 6;
    }
    ngOnInit() {
        this.role = this.sidebarService.RoleDTOName;
        this.locForm();
        let Dto = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            branchId: this.sidebarService.branchId
        };
        setTimeout(() => {
            if (this.sidebarService.RoleDTOName.indexOf('HCO') != -1 || this.sidebarService.RoleDTOName.indexOf('TL') != -1) {
                this.dailyActivityService.villagesOfBranch(Dto).subscribe((res) => {
                    if (res.sessionDTO.status == true) {
                        this.villagesOfBranch = res.responseObject;
                        console.log(this.villagesOfBranch, 'villagesOfBranch1');
                    }
                });
            }
        }, 1000);
        this.regionList = this.sidebarService.listOfRegion;
    }
    changeRegion(region) {
        var _a;
        let regionId = (_a = this.regionList.find((reg) => reg.regionName == region)) === null || _a === void 0 ? void 0 : _a.regionMasterId;
        let req = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            regionId: regionId,
        };
        setTimeout(() => {
            this.dailyActivityService.listOfBranchesOfARegion(req).subscribe((res) => {
                this.branchList = res === null || res === void 0 ? void 0 : res.responseObject;
            }, (error) => {
                this.branchList = null;
            });
        }, 500);
        this.locationForm.controls.branch.setValue('');
        if (this.locationForm.value.region == '') {
            this.locationForm.controls.hco.setValue('');
            this.locationForm.controls.fromDate.setValue('');
            this.locationForm.controls.toDate.setValue('');
            this.darList = [];
            this.darViewFamilyList = [];
            // this.showError('No Data Found');
        }
    }
    changeBranch(branch) {
        var _a, _b;
        this.hcoId = branch;
        this.sidebarService.branchId = (_b = (_a = this.branchList) === null || _a === void 0 ? void 0 : _a.find(bran => bran.branchName == branch)) === null || _b === void 0 ? void 0 : _b.branchId;
        this.sidebarService.branchName = this.locationForm.get('branch').value;
        let Dto = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            branchId: this.sidebarService.branchId
        };
        this.dailyActivityService.hcoListOfBranch(Dto).subscribe((res) => {
            this.hcoList = res.responseObject;
            console.log(this.hcoList, 'hcoList');
        });
        if (this.locationForm.value.branch == '') {
            // this.showError('No Data Found');
            this.locationForm.controls.hco.setValue('');
            this.locationForm.controls.fromDate.setValue('');
            this.locationForm.controls.toDate.setValue('');
            this.darList = [];
            this.darViewFamilyList = [];
        }
        if (this.locationForm.value.hco == '') {
            this.locationForm.controls.fromDate.setValue('');
            this.locationForm.controls.toDate.setValue('');
            this.darList = [];
            this.darViewFamilyList = [];
        }
    }
    // changeBlock(blockname) {
    //   this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    //   this.selectedBlock = this.locationForm.get('block').value;
    //   this.locationForm.controls.gp.setValue('');
    //   this.locationForm.controls.gram.setValue('');
    //   if (this.locationForm.value.block == '') {
    //     this.showError('No Data Found');
    //     // this.pemDetails = [];
    //     this.villageDtoList = [];
    //     this.gpDtoList = [];
    //   }
    // }
    // changeGp(gpName) {
    //   this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    //   this.selectedGp = this.locationForm.get('gp').value;
    //   this.locationForm.controls.gram.setValue('');
    //   console.log(this.villageDtoList);
    //   if (this.locationForm.value.gp == '') {
    //     this.showError('No Data Found');
    //     // this.pemDetails = [];
    //     this.villageDtoList = [];
    //   }
    // }
    // changeVillage(villagename) {
    //   this.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.branchVillageMapId;
    //   this.villageMasterId = this.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId
    //   console.log(this.villageMasterId);
    //   // this.viewPEMList();
    //   if (this.locationForm.value.gram == '') {
    //     this.showError('No Data Found');
    //     // this.pemDetails = [];
    //   }
    // }
    locForm() {
        this.locationForm = this.fb.group({
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    viewDAREntryList() {
        let obj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            // hcoId: this.hcoId,
            hcoId: this.hcoId ? this.hcoId : this.sidebarService.userId,
            startDate: this.locationForm.value.fromDate,
            endDate: this.locationForm.value.toDate,
            withVisitPurposeMap: false
        };
        console.log(obj);
        this.dailyActivityService.viewingDAREntryList(obj).subscribe((res) => {
            this.darList = res.responseObject;
            console.log(this.darList);
        });
    }
    darViewFamily(item) {
        this.darViewFamilyList = item;
        console.log(this.darViewFamilyList, 'darViewFamily');
    }
    showSuccess(message) {
        this.toaster.success(message, 'Daily-Activity Register', {
            timeOut: 3000,
        });
    }
    showError(message) {
        this.toaster.error(message, 'Daily-Activity Register', {
            timeOut: 3000,
        });
    }
    restrictTypeOfDate() {
        return false;
    }
    get l() {
        return this.locationForm.controls;
    }
}
DailyActivityRegisterComponent.ɵfac = function DailyActivityRegisterComponent_Factory(t) { return new (t || DailyActivityRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_daily_activity_register_service__WEBPACK_IMPORTED_MODULE_4__["DailyActivityRegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
DailyActivityRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DailyActivityRegisterComponent, selectors: [["app-daily-activity-register"]], decls: 71, vars: 24, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "fromDate"], [1, "text-danger"], ["type", "date", "formControlName", "fromDate", 1, "form-control", 3, "ngClass", "keydown"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "toDate"], ["type", "date", "formControlName", "toDate", 1, "form-control", 3, "ngClass", "keydown", "change"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], ["for", "hco"], ["formControlName", "hco", "id", "hco", 1, "form-select", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], [3, "click"], [1, "fas", "fa-angle-right"]], template: function DailyActivityRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Daily Activity Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DailyActivityRegisterComponent_div_7_Template, 31, 18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "From Date :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DailyActivityRegisterComponent_Template_input_keydown_14_listener() { return ctx.restrictTypeOfDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DailyActivityRegisterComponent_div_15_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "To Date :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DailyActivityRegisterComponent_Template_input_keydown_21_listener() { return ctx.restrictTypeOfDate(); })("change", function DailyActivityRegisterComponent_Template_input_change_21_listener() { return ctx.viewDAREntryList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DailyActivityRegisterComponent_div_22_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "SL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DailyActivityRegisterComponent_tr_38_Template, 7, 2, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "pagination-controls", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function DailyActivityRegisterComponent_Template_pagination_controls_pageChange_40_listener($event) { return ctx.p = $event; })("pageBoundsCorrection", function DailyActivityRegisterComponent_Template_pagination_controls_pageBoundsCorrection_40_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "SL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Village");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Name of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Beneficiary Visited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Type of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " beneficiary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Alone /");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " With SS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Name of SS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, DailyActivityRegisterComponent_tr_68_Template, 13, 7, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "pagination-controls", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function DailyActivityRegisterComponent_Template_pagination_controls_pageChange_70_listener($event) { return ctx.p = $event; })("pageBoundsCorrection", function DailyActivityRegisterComponent_Template_pagination_controls_pageBoundsCorrection_70_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.locationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role != "HCO" && ctx.role != "HCOI" && ctx.role != "TL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx.l.fromDate.invalid && ctx.l.fromDate.touched, ctx.l.fromDate.valid && (ctx.l.fromDate.dirty || ctx.l.fromDate.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.l.fromDate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c0, ctx.l.toDate.invalid && ctx.l.toDate.touched, ctx.l.toDate.valid && (ctx.l.toDate.dirty || ctx.l.toDate.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.l.toDate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](39, 8, ctx.darList, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](69, 11, ctx.darViewFamilyList, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: [".form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\ntable.dataTable[_ngcontent-%COMP%] {\r\n  width: 100% !important;\r\n  margin-left: -11px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhaWx5LWFjdGl2aXR5LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7RUFDdkI7O0FBRUY7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImRhaWx5LWFjdGl2aXR5LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG5cclxudGFibGUuZGF0YVRhYmxlIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTFweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyActivityRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daily-activity-register',
                templateUrl: './daily-activity-register.component.html',
                styleUrls: ['./daily-activity-register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"] }, { type: _daily_activity_register_service__WEBPACK_IMPORTED_MODULE_4__["DailyActivityRegisterService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "VsSK":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/daily-activity-register/daily-activity-register-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: DailyActivityRegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyActivityRegisterRoutingModule", function() { return DailyActivityRegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _daily_activity_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily-activity-register.component */ "Vj/e");





const routes = [{ path: '', component: _daily_activity_register_component__WEBPACK_IMPORTED_MODULE_2__["DailyActivityRegisterComponent"] }];
class DailyActivityRegisterRoutingModule {
}
DailyActivityRegisterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DailyActivityRegisterRoutingModule });
DailyActivityRegisterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DailyActivityRegisterRoutingModule_Factory(t) { return new (t || DailyActivityRegisterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DailyActivityRegisterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyActivityRegisterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "h4ip":
/*!************************************************************************************!*\
  !*** ./src/app/modules/daily-activity-register/daily-activity-register.service.ts ***!
  \************************************************************************************/
/*! exports provided: DailyActivityRegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyActivityRegisterService", function() { return DailyActivityRegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class DailyActivityRegisterService {
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
    hcoListOfBranch(obj) {
        return this.http.post(`${this.baseURL}branch/getListOfHcoITL`, obj);
    }
    viewingDAREntryList(obj) {
        return this.http.post(`${this.baseURL}dailyActivity/viewDailyActivityRegister`, obj);
    }
}
DailyActivityRegisterService.ɵfac = function DailyActivityRegisterService_Factory(t) { return new (t || DailyActivityRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DailyActivityRegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DailyActivityRegisterService, factory: DailyActivityRegisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyActivityRegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "v3t/":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/daily-activity-register/daily-activity-register.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DailyActivityRegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyActivityRegisterModule", function() { return DailyActivityRegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _daily_activity_register_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily-activity-register-routing.module */ "VsSK");
/* harmony import */ var _daily_activity_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./daily-activity-register.component */ "Vj/e");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");








class DailyActivityRegisterModule {
}
DailyActivityRegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DailyActivityRegisterModule });
DailyActivityRegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DailyActivityRegisterModule_Factory(t) { return new (t || DailyActivityRegisterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _daily_activity_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["DailyActivityRegisterRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DailyActivityRegisterModule, { declarations: [_daily_activity_register_component__WEBPACK_IMPORTED_MODULE_3__["DailyActivityRegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _daily_activity_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["DailyActivityRegisterRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyActivityRegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_daily_activity_register_component__WEBPACK_IMPORTED_MODULE_3__["DailyActivityRegisterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _daily_activity_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["DailyActivityRegisterRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-daily-activity-register-daily-activity-register-module.js.map