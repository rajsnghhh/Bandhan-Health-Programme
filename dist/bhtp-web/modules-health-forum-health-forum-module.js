(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-health-forum-health-forum-module"],{

/***/ "5xUQ":
/*!****************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum.component.ts ***!
  \****************************************************************/
/*! exports provided: HealthForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthForumComponent", function() { return HealthForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health-forum-angular-mat-modal/health-forum-angular-mat-modal.component */ "ySC2");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/http/http.service */ "YwHQ");
/* harmony import */ var _health_forum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./health-forum.service */ "I7C7");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/validation.service */ "yjnX");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ "aQtA");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/loader/loader.component */ "G/xV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/sidebar/health-forum-search.pipe */ "RFxm");























function HealthForumComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_div_17_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](69); return ctx_r15.createHealthForum(_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_div_19_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", region_r21.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", region_r21.regionName, " ");
} }
function HealthForumComponent_div_19_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_div_19_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_div_19_div_10_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.l.region.errors.required);
} }
function HealthForumComponent_div_19_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", branch_r23.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", branch_r23.branchName, " ");
} }
function HealthForumComponent_div_19_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_div_19_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_div_19_div_20_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r20.l.branch.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function HealthForumComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_div_19_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HealthForumComponent_div_19_option_9_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HealthForumComponent_div_19_div_10_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_div_19_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.changeBranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HealthForumComponent_div_19_option_19_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HealthForumComponent_div_19_div_20_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx_r2.l.region.invalid && ctx_r2.l.region.touched, ctx_r2.l.region.valid && (ctx_r2.l.region.dirty || ctx_r2.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, ctx_r2.l.branch.invalid && ctx_r2.l.branch.touched, ctx_r2.l.branch.valid && (ctx_r2.l.branch.dirty || ctx_r2.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.l.branch.errors);
} }
function HealthForumComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_tr_60_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_td_20_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65); return ctx_r36.viewHFEventDetails(_r5, health_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_tr_60_i_26_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_i_26_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](69); return ctx_r39.editHealthForum(_r9, health_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_tr_60_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_i_27_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.deleteHealthForum(health_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_tr_60_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.approveHealthForum(health_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_tr_60_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.approveARescheduleHealthForum(health_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_tr_60_i_30_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_i_30_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](73); return ctx_r51.rescheduleHealthForum(_r13, health_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_Template_td_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const health_r28 = ctx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.openDialog(health_r28.villageList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HealthForumComponent_tr_60_td_20_Template, 2, 0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HealthForumComponent_tr_60_i_26_Template, 1, 0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HealthForumComponent_tr_60_i_27_Template, 1, 0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HealthForumComponent_tr_60_i_28_Template, 1, 0, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HealthForumComponent_tr_60_i_29_Template, 1, 0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HealthForumComponent_tr_60_i_30_Template, 1, 0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const health_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r29 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", health_r28.scheduleDetails.date.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", health_r28.rescheduleDetails ? health_r28.rescheduleDetails.rescheduleToDate.split("-").reverse().join("-") : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", health_r28.staffFirstName, " ", health_r28.staffLastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](health_r28.ssName ? health_r28.ssName : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" * ", health_r28.topicDetails.topicName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.eventViewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](health_r28.forumFamilyPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](health_r28.forumAdolescentGirlPresent + health_r28.forumFamilyHeadPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.deleteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.approveMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.rescheduleApprovalMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.rescheduleMode);
} }
function HealthForumComponent_ng_template_64_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_64_i_6_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](71); return ctx_r58.createHFEvents(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_64_tr_49_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const disease_r65 = ctx.$implicit;
    const i_r66 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", i_r66 + 1, ". ", disease_r65.diseasesName, " ");
} }
function HealthForumComponent_ng_template_64_tr_49_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_64_tr_49_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const event_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](71); return ctx_r67.editHFEvents(_r11, event_r60); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_64_tr_49_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_64_tr_49_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const event_r60 = ctx_r71.$implicit; const i_r61 = ctx_r71.index; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r70.deleteHFEvent(event_r60, i_r61); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_64_tr_49_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_64_tr_49_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const event_r60 = ctx.$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](67); return ctx_r73.viewFamilyAttendedDetails(_r7, event_r60); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HealthForumComponent_ng_template_64_tr_49_li_22_Template, 2, 2, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HealthForumComponent_ng_template_64_tr_49_i_28_Template, 1, 0, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HealthForumComponent_ng_template_64_tr_49_i_29_Template, 1, 0, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r60 = ctx.$implicit;
    const i_r61 = ctx.index;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r61 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r60.createdOn.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", event_r60.forumEventFamilyPresent, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", event_r60.forumEventFamilyHeadPresent + event_r60.forumEventAdolescentGirlPresent, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r60.eventConductedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r57.viewForumList.topicDetails.topicName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", event_r60.seasonalDiseaseDiscussedList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", event_r60.startHour, ":", event_r60.startMinute, " ", event_r60.startAmOrPm, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", event_r60.endHour, ":", event_r60.endMinute, " ", event_r60.endAmOrPm, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r57.eventUpdateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r57.eventDeleteMode);
} }
function HealthForumComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Event Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HealthForumComponent_ng_template_64_i_6_Template, 1, 0, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_64_Template_span_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r75.viewHFEventModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Family View/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Attended");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Attended");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Conducted By");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Topic Discussed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Seasonal Disease");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Discussed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tbody", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, HealthForumComponent_ng_template_64_tr_49_Template, 30, 15, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.eventCreateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.viewEventList);
} }
function HealthForumComponent_ng_template_66_tbody_32_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fam_r80 = ctx.$implicit;
    const fami_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fam_r80.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", fam_r80.familyFirstName, " ", fam_r80.familyMiddleName, " ", fam_r80.familyLastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fami_r78.villageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolateV"]([" ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren == "Y" ? "PEM, LM, PW, 2-5 yr" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren == "Y" ? "PEM, LM, 2-5 yr" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren.includes("N") ? "PEM" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren.includes("N") ? "" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren == "Y" ? "LM, PW, 2-5 yr" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren.includes("N") ? "PW" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren.includes("N") ? "LM" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren == "Y" ? "PEM, PW, 2-5 yr" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren.includes("N") ? "PEM, LM, PW" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren.includes("N") ? "PEM, LM" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren == "Y" ? "PW, 2-5 yr" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren == "Y" ? "2-5 yr" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren.includes("N") ? "LM, PW" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren == "Y" ? "LM, 2-5 yr" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren.includes("N") ? "PEM, PW" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren == "Y" ? "PEM, 2-5 yr" : "", " "]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fam_r80.family_head_present);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fam_r80.hasAdolescentGirlChildren);
} }
function HealthForumComponent_ng_template_66_tbody_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_66_tbody_32_tr_1_Template, 13, 23, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fami_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", fami_r78.familyList);
} }
function HealthForumComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Family Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_66_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r83.viewFamilyModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Family No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Family Head Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Status Of Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Family Head");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Adolescent Girl");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, HealthForumComponent_ng_template_66_tbody_32_Template, 2, 1, "tbody", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.familyDetails);
} }
function HealthForumComponent_ng_template_68_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create Health Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_68_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit Health Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_68_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_68_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_16_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r87.c.date.errors.required);
} }
function HealthForumComponent_ng_template_68_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const staff_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", staff_r101.staffId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", staff_r101.staffFisrtName, " ", staff_r101.staffMiddleName, " ", staff_r101.staffLastName, " ");
} }
function HealthForumComponent_ng_template_68_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Staff Name selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_68_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_26_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r89.c.staffName.errors.required);
} }
function HealthForumComponent_ng_template_68_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ss_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ss_r103.ssId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ss_r103.ssName, " ");
} }
function HealthForumComponent_ng_template_68_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Area selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_68_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_40_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r91.c.areaList.errors.required);
} }
function HealthForumComponent_ng_template_68_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", topic_r105.ss_training_event_topic_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", topic_r105.ss_training_event_topic_name, " ");
} }
function HealthForumComponent_ng_template_68_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Topic selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_68_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_50_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r93.c.topic.errors.required);
} }
function HealthForumComponent_ng_template_68_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No. of Event Proposed is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_68_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_63_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r94.c.event.errors.required);
} }
function HealthForumComponent_ng_template_68_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hours_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", hours_r108.hourValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hours_r108.hourName, " ");
} }
function HealthForumComponent_ng_template_68_div_75_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_68_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_75_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r96.c.hour.errors.required);
} }
function HealthForumComponent_ng_template_68_option_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const minutes_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", minutes_r111.minuteValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", minutes_r111.minuteName, " ");
} }
function HealthForumComponent_ng_template_68_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_68_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_81_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r98.c.minute.errors.required);
} }
function HealthForumComponent_ng_template_68_div_90_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Meridiem");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_68_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_90_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r99.c.meridiem.errors.required);
} }
function HealthForumComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HealthForumComponent_ng_template_68_h2_3_Template, 2, 0, "h2", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HealthForumComponent_ng_template_68_h2_4_Template, 2, 0, "h2", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_68_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r115.createHFModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Date :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function HealthForumComponent_ng_template_68_Template_input_keydown_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r117.restrictTypeOfDate(); })("change", function HealthForumComponent_ng_template_68_Template_input_change_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r118.changeDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HealthForumComponent_ng_template_68_div_16_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Staff Name :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_68_Template_select_change_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r119.changeStaff($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "-- Select Staff Name --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HealthForumComponent_ng_template_68_option_25_Template, 2, 4, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HealthForumComponent_ng_template_68_div_26_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "SS Name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_68_Template_select_change_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r120.changeSS($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "-- Select SS Name --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HealthForumComponent_ng_template_68_option_33_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Select Multiple Area :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ng-multiselect-dropdown", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function HealthForumComponent_ng_template_68_Template_ng_multiselect_dropdown_onSelect_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r121.onItemSelect($event); })("onSelectAll", function HealthForumComponent_ng_template_68_Template_ng_multiselect_dropdown_onSelectAll_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r122.onSelectAll($event); })("onDeSelect", function HealthForumComponent_ng_template_68_Template_ng_multiselect_dropdown_onDeSelect_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r123.onItemDeSelect($event); })("onDeSelectAll", function HealthForumComponent_ng_template_68_Template_ng_multiselect_dropdown_onDeSelectAll_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r124.onItemDeSelectAll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, HealthForumComponent_ng_template_68_div_40_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Topic :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "select", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "-- Select Topic --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, HealthForumComponent_ng_template_68_option_49_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, HealthForumComponent_ng_template_68_div_50_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "No. of Event Proposed :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "select", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "-- Select Event--");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, HealthForumComponent_ng_template_68_div_63_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Schedule Start Time :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "select", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "-- HH --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, HealthForumComponent_ng_template_68_option_74_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, HealthForumComponent_ng_template_68_div_75_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "select", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "-- MM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, HealthForumComponent_ng_template_68_option_80_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, HealthForumComponent_ng_template_68_div_81_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "select", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "-- AM/PM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, HealthForumComponent_ng_template_68_div_90_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_68_Template_button_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r125.HfSaveOrUpdate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r10.editHFDetails == null ? null : ctx_r10.editHFDetails.healthForumMasterId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.editHFDetails == null ? null : ctx_r10.editHFDetails.healthForumMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r10.createHFForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r10.minDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](28, _c0, ctx_r10.c.date.invalid && ctx_r10.c.date.touched, ctx_r10.c.date.valid && (ctx_r10.c.date.dirty || ctx_r10.c.date.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.c.date.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](31, _c0, ctx_r10.c.staffName.invalid && ctx_r10.c.staffName.touched, ctx_r10.c.staffName.valid && (ctx_r10.c.staffName.dirty || ctx_r10.c.staffName.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.staffList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.c.staffName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.SSList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("settings", ctx_r10.dropdownSettings)("data", ctx_r10.areaList)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](34, _c0, ctx_r10.c.areaList.invalid && ctx_r10.c.areaList.touched, ctx_r10.c.areaList.valid && (ctx_r10.c.areaList.dirty || ctx_r10.c.areaList.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.c.areaList.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](37, _c0, ctx_r10.c.topic.invalid && ctx_r10.c.topic.touched, ctx_r10.c.topic.valid && (ctx_r10.c.topic.dirty || ctx_r10.c.topic.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.topicList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.c.topic.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](40, _c0, ctx_r10.c.event.invalid && ctx_r10.c.event.touched, ctx_r10.c.event.valid && (ctx_r10.c.event.dirty || ctx_r10.c.event.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.c.event.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](43, _c0, ctx_r10.c.hour.invalid && ctx_r10.c.hour.touched, ctx_r10.c.hour.valid && (ctx_r10.c.hour.dirty || ctx_r10.c.hour.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.hourList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.c.hour.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](46, _c0, ctx_r10.c.minute.invalid && ctx_r10.c.minute.touched, ctx_r10.c.minute.valid && (ctx_r10.c.minute.dirty || ctx_r10.c.minute.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.minuteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.c.minute.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](49, _c0, ctx_r10.c.meridiem.invalid && ctx_r10.c.meridiem.touched, ctx_r10.c.meridiem.valid && (ctx_r10.c.meridiem.dirty || ctx_r10.c.meridiem.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.c.meridiem.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r10.saveIsDisabled());
} }
function HealthForumComponent_ng_template_70_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create Health Forum Event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_70_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit Health Forum Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_70_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hours_r137 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", hours_r137.hourValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hours_r137.hourName, " ");
} }
function HealthForumComponent_ng_template_70_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const minutes_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", minutes_r139.minuteValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", minutes_r139.minuteName, " ");
} }
function HealthForumComponent_ng_template_70_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hours_r141 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", hours_r141.hourValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hours_r141.hourName, " ");
} }
function HealthForumComponent_ng_template_70_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const minutes_r143 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", minutes_r143.minuteValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", minutes_r143.minuteName, " ");
} }
function HealthForumComponent_ng_template_70_div_92_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select event conduction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_70_div_92_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_70_div_92_div_12_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r145.e.eventConduction.errors.required);
} }
function HealthForumComponent_ng_template_70_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Event Conducted By :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HealthForumComponent_ng_template_70_div_92_div_12_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r132.e.eventConduction.invalid && ctx_r132.e.eventConduction.touched, ctx_r132.e.eventConduction.valid && (ctx_r132.e.eventConduction.dirty || ctx_r132.e.eventConduction.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r132.e.eventConduction.errors);
} }
function HealthForumComponent_ng_template_70_div_93_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select event conduction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_70_div_93_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_70_div_93_div_12_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r147.e.eventConduction.errors.required);
} }
function HealthForumComponent_ng_template_70_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Event Conducted By :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HealthForumComponent_ng_template_70_div_93_div_12_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r133.e.eventConduction.invalid && ctx_r133.e.eventConduction.touched, ctx_r133.e.eventConduction.valid && (ctx_r133.e.eventConduction.dirty || ctx_r133.e.eventConduction.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r133.e.eventConduction.errors);
} }
const _c1 = function () { return { standalone: true }; };
function HealthForumComponent_ng_template_70_tr_111_Template(rf, ctx) { if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function HealthForumComponent_ng_template_70_tr_111_Template_input_keypress_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r152); const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r151.validationService.onlyAlphabetsAndSpace($event); })("keypress", function HealthForumComponent_ng_template_70_tr_111_Template_input_keypress_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r152); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r153.validationService.titleCase($event); })("ngModelChange", function HealthForumComponent_ng_template_70_tr_111_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r152); const i_r150 = ctx.index; const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r154.visitorDetails.visitorInfo[i_r150].visitorName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function HealthForumComponent_ng_template_70_tr_111_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r152); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r155.validationService.onlyAlphabetsAndSpace($event); })("keypress", function HealthForumComponent_ng_template_70_tr_111_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r152); const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r156.validationService.titleCase($event); })("ngModelChange", function HealthForumComponent_ng_template_70_tr_111_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r152); const i_r150 = ctx.index; const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r157.visitorDetails.visitorInfo[i_r150].visitorDesignation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_70_tr_111_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r152); const i_r150 = ctx.index; const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r158.removeNewVisitor(i_r150); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r150 = ctx.index;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1))("ngModel", ctx_r134.visitorDetails.visitorInfo[i_r150].visitorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1))("ngModel", ctx_r134.visitorDetails.visitorInfo[i_r150].visitorDesignation);
} }
function HealthForumComponent_ng_template_70_div_172_tr_15_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_div_172_tr_15_input_6_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r166); const disease_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r164.selectMultipleDisease($event, disease_r160); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_70_div_172_tr_15_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_div_172_tr_15_input_7_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r169); const disease_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r167.selectMultipleDisease($event, disease_r160); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_70_div_172_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HealthForumComponent_ng_template_70_div_172_tr_15_input_6_Template, 1, 0, "input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HealthForumComponent_ng_template_70_div_172_tr_15_input_7_Template, 1, 0, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const disease_r160 = ctx.$implicit;
    const i_r161 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r161 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](disease_r160.diseaseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", disease_r160.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", disease_r160.isChecked == false);
} }
function HealthForumComponent_ng_template_70_div_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "legend", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Seasonal Disease Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HealthForumComponent_ng_template_70_div_172_tr_15_Template, 8, 4, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r135.eventDiseaseList);
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const vill_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vill_r170.villageName, " ");
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_input_22_Template(rf, ctx) { if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_input_22_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r185); const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const vill_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r183.changefamilyHeadPresent($event, fami_r176, vill_r170); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const int_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", int_r177);
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_input_23_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_input_23_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r190); const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const vill_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r188.changefamilyHeadPresent($event, fami_r176, vill_r170); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const int_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", int_r177);
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r197); const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const vill_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r195.changefamilyHeadPresent($event, fami_r176, vill_r170); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const int_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", int_r177);
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_input_3_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r202); const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const vill_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r200.changefamilyHeadPresent($event, fami_r176, vill_r170); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const int_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", int_r177);
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_input_2_Template, 1, 1, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_input_3_Template, 1, 1, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fami_r176.radioCheck == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fami_r176.radioCheck != "N");
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r210); const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const vill_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r208.changefamilyHeadPresent($event, fami_r176, vill_r170); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const int_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", int_r177);
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_input_3_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r215); const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const vill_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r213.changefamilyHeadPresent($event, fami_r176, vill_r170); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const int_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", int_r177);
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_input_2_Template, 1, 1, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_input_3_Template, 1, 1, "input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fami_r176.radioCheck == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fami_r176.radioCheck != "N");
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_input_1_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r228); const adol_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r226.selectAdolescent($event, adol_r220, fami_r176); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r232); const adol_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r230.selectAdolescent($event, adol_r220, fami_r176); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_input_1_Template, 1, 0, "input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_input_2_Template, 1, 0, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adol_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", adol_r220.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", adol_r220.isChecked != true);
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_input_1_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r239); const adol_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r237.selectAdolescent($event, adol_r220, fami_r176); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r243); const adol_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r241.selectAdolescent($event, adol_r220, fami_r176); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_input_1_Template, 1, 0, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_input_2_Template, 1, 0, "input", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adol_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", adol_r220.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", adol_r220.isChecked != true);
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_Template, 3, 2, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_Template, 3, 2, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adol_r220 = ctx.$implicit;
    const ide_r221 = ctx.index;
    const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ide_r221 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", adol_r220.childName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", adol_r220.age, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fami_r176.radioCheck != "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fami_r176.radioCheck == "NA");
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "legend", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Adolescent Girl Attended ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_Template, 9, 5, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fami_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", fami_r176.adolescentGilrChildren);
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r249); const fami_r176 = ctx.$implicit; const int_r177 = ctx.index; const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r248.unselectFamily(fami_r176, int_r177); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Family Head Present :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_input_22_Template, 1, 1, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_input_23_Template, 1, 1, "input", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_Template, 6, 2, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_Template, 6, 2, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_Template, 18, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fami_r176 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Family No. : ", fami_r176.familyNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("Name : ", fami_r176.firstName, "", fami_r176.middleName, " ", fami_r176.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Status : ", fami_r176.setStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fami_r176.radioCheck == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fami_r176.radioCheck != "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fami_r176.adolescentGilrChildren.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fami_r176.adolescentGilrChildren.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fami_r176.adolescentGilrChildren.length > 0);
} }
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_Template, 29, 10, "div", 182);
} if (rf & 2) {
    const i_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r173.eventFamList[i_r171]);
} }
function HealthForumComponent_ng_template_70_mat_tab_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_1_Template, 1, 1, "ng-template", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_Template, 1, 1, "ng-template", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    const _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HealthForumComponent_ng_template_70_h2_3_Template, 2, 0, "h2", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HealthForumComponent_ng_template_70_h2_4_Template, 2, 0, "h2", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_70_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r252); const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r251.editHFEventModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Start Time :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "-- HH --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HealthForumComponent_ng_template_70_option_22_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "select", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "-- MM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HealthForumComponent_ng_template_70_option_26_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "select", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "-- AM/PM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u00A0\u00A0End Time :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "select", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "-- HH --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, HealthForumComponent_ng_template_70_option_44_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "select", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "-- MM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, HealthForumComponent_ng_template_70_option_48_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "select", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "-- AM/PM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Staff Present :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_input_change_69_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r252); const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r253.staffPresentorNot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_input_change_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r252); const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r254.staffPresentorNot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " SS Present :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_input_change_85_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r252); const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r255.ssPresentorNot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_input_change_89_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r252); const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r256.ssPresentorNot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, HealthForumComponent_ng_template_70_div_92_Template, 13, 5, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, HealthForumComponent_ng_template_70_div_93_Template, 13, 5, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "h4", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Visitor Details :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_70_Template_i_click_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r252); const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r257.addMoreVisitor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "table", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "thead", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "tr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "th", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "th", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Designation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "th", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "tbody", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, HealthForumComponent_ng_template_70_tr_111_Template, 8, 6, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "h4", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Discussion Topic :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "label", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, " Recap Last Month's Topic :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "input", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "label", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " Discussion on This Month's Topic :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, " Any Discussion on Seasonal Diseases :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_input_change_164_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r252); const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r258.changeseasonalDiscussion($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_input_change_169_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r252); const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r259.changeseasonalDiscussion($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](172, HealthForumComponent_ng_template_70_div_172_Template, 16, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "View Family List By :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "select", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_select_change_179_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r252); const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r260.viewFilterByFamilyList($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "-- All Family --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Selected Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Unselected Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "mat-tab-group", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function HealthForumComponent_ng_template_70_Template_mat_tab_group_selectedTabChange_187_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r252); const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r261.tabChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](188, HealthForumComponent_ng_template_70_mat_tab_188_Template, 3, 0, "mat-tab", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_70_Template_button_click_191_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r252); const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r262.saveEditHFEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r12.editHF_eventDetails == null ? null : ctx_r12.editHF_eventDetails.healthForumEventId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.editHF_eventDetails == null ? null : ctx_r12.editHF_eventDetails.healthForumEventId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r12.createEditHFEventForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.hourList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.minuteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.hourList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.minuteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" (", ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.staffFirstName, " ", ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.staffLastName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (", (ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.ssName) ? ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.ssName : "No SS Present", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.createEditHFEventForm.value.ssPresent && !ctx_r12.createEditHFEventForm.value.staffPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.createEditHFEventForm.value.ssPresent || ctx_r12.createEditHFEventForm.value.staffPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.visitorDetails.visitorInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", (ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.lastMonthHfTopicName) ? ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.lastMonthHfTopicName : "-", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", (ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.topicName) ? ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.topicName : "-", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.createEditHFEventForm.value.seasonalDiscussion == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.eventVillList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r12.saveEditHFEventDisabled());
} }
function HealthForumComponent_ng_template_72_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_72_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_72_div_16_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r263.r.date.errors.required);
} }
function HealthForumComponent_ng_template_72_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Comment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_72_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_72_div_24_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r264.r.comment.errors.required);
} }
function HealthForumComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    const _r268 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reschedule Health Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_72_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r268); const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r267.rescheduleHFModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Date :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function HealthForumComponent_ng_template_72_Template_input_keydown_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r268); const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r269.restrictTypeOfDate(); })("change", function HealthForumComponent_ng_template_72_Template_input_change_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r268); const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r270.changeDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HealthForumComponent_ng_template_72_div_16_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Comments :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "textarea", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HealthForumComponent_ng_template_72_div_24_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_72_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r268); const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r271.saveRescheduled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r14.rescheduleHFForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r14.setDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c0, ctx_r14.r.date.invalid && ctx_r14.r.date.touched, ctx_r14.r.date.valid && (ctx_r14.r.date.dirty || ctx_r14.r.date.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.r.date.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c0, ctx_r14.r.comment.invalid && ctx_r14.r.comment.touched, ctx_r14.r.comment.valid && (ctx_r14.r.comment.dirty || ctx_r14.r.comment.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.r.comment.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r14.rescheduleSave());
} }
const _c2 = function (a0, a1, a2) { return { staffFirstName: a0, staffLastName: a1, ssName: a2 }; };
const _c3 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class HealthForumComponent {
    constructor(fb, sidebarService, http, httpService, healthForumService, modalService, config, router, toaster, validationService, dialog, confirmationDialogService) {
        this.fb = fb;
        this.sidebarService = sidebarService;
        this.http = http;
        this.httpService = httpService;
        this.healthForumService = healthForumService;
        this.modalService = modalService;
        this.router = router;
        this.toaster = toaster;
        this.validationService = validationService;
        this.dialog = dialog;
        this.confirmationDialogService = confirmationDialogService;
        this.regionList = [];
        this.branchList = [];
        this.villagesOfBranch = [];
        this.viewHealthForumsOfBranch = [];
        this.viewEventList = [];
        this.familyDetails = [];
        this.dropdownSettings = {};
        this.areaList = [];
        this.hourList = [];
        this.minuteList = [];
        this.staffList = [];
        this.SSList = [];
        this.topicList = [];
        this.villageList = [];
        this.editHFDetails = {};
        this.editHFDetailsTime = [];
        this.loader = false;
        this.page = 1;
        this.pageSize = 6;
        this.visitorDetails = {
            visitorInfo: [],
        };
        this.index = 0;
        this.eventVillList = [];
        this.eventVillListID = [];
        this.eventDiseaseList = [];
        this.eventFamList = [];
        this.setFamList = [];
        this.statusList = [];
        this.diseaseListID = [];
        this.adolGirlListDisable = [];
        this.familyListData = [];
        this.editHF_eventDetails = {};
        this.familyHeadPresentLenChk = [];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngDoCheck() {
        this.searchFullscreen = this.validationService.val;
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
        this.healthForumForms();
        this.sidebarService.checkRoledetailDTO().then((res) => {
            this.lowerRankbranchId = res.branchId;
            if (res.regionBranchHide) {
                this.regionList = res.region;
                this.loader = true;
                this.regionBranchHide = res.regionBranchHide;
            }
            else {
                let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
                let Dto = {
                    dataAccessDTO: {
                        userId: dataAccessDTO.userName,
                        userName: dataAccessDTO.userId,
                    },
                    branchId: this.lowerRankbranchId
                };
                this.regionBranchHide = res.regionBranchHide;
                this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res) => {
                    if (res.sessionDTO.status == true) {
                        this.loader = true;
                        this.villagesOfBranch = res.responseObject;
                    }
                });
                this.changeBranch(this.lowerRankbranchId);
            }
        });
        this.regionBranchHide = this.sidebarService.regionBranchHide;
        ((_c = (_b = (_a = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 8)) === null || _a === void 0 ? void 0 : _a.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)) === null || _b === void 0 ? void 0 : _b.accessDetailList.find(accessType => accessType.accessType == 'view')) === null || _c === void 0 ? void 0 : _c.accessType) ? this.router.navigate(['/health-forum']) : this.router.navigate(['/error']);
        this.createMode = ((_f = (_e = (_d = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 8)) === null || _d === void 0 ? void 0 : _d.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)) === null || _e === void 0 ? void 0 : _e.accessDetailList.find(accessType => accessType.accessType == 'create')) === null || _f === void 0 ? void 0 : _f.accessType) ? true : false;
        this.updateMode = ((_j = (_h = (_g = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 8)) === null || _g === void 0 ? void 0 : _g.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)) === null || _h === void 0 ? void 0 : _h.accessDetailList.find(accessType => accessType.accessType == 'update')) === null || _j === void 0 ? void 0 : _j.accessType) ? true : false;
        this.deleteMode = ((_m = (_l = (_k = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 8)) === null || _k === void 0 ? void 0 : _k.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)) === null || _l === void 0 ? void 0 : _l.accessDetailList.find(accessType => accessType.accessType == 'delete')) === null || _m === void 0 ? void 0 : _m.accessType) ? true : false;
        this.approveMode = ((_q = (_p = (_o = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 8)) === null || _o === void 0 ? void 0 : _o.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)) === null || _p === void 0 ? void 0 : _p.accessDetailList.find(accessType => accessType.accessType == 'approve')) === null || _q === void 0 ? void 0 : _q.accessType) ? true : false;
        this.rescheduleMode = ((_t = (_s = (_r = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 8)) === null || _r === void 0 ? void 0 : _r.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)) === null || _s === void 0 ? void 0 : _s.accessDetailList.find(accessType => accessType.accessType == 'reschedule')) === null || _t === void 0 ? void 0 : _t.accessType) ? true : false;
        this.rescheduleApprovalMode = ((_w = (_v = (_u = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 8)) === null || _u === void 0 ? void 0 : _u.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)) === null || _v === void 0 ? void 0 : _v.accessDetailList.find(accessType => accessType.accessType == 'reschedule approval')) === null || _w === void 0 ? void 0 : _w.accessType) ? true : false;
        this.eventViewMode = ((_z = (_y = (_x = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 8)) === null || _x === void 0 ? void 0 : _x.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)) === null || _y === void 0 ? void 0 : _y.accessDetailList.find(accessType => accessType.accessType == 'event view')) === null || _z === void 0 ? void 0 : _z.accessType) ? true : false;
        this.eventCreateMode = ((_2 = (_1 = (_0 = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 8)) === null || _0 === void 0 ? void 0 : _0.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)) === null || _1 === void 0 ? void 0 : _1.accessDetailList.find(accessType => accessType.accessType == 'event create')) === null || _2 === void 0 ? void 0 : _2.accessType) ? true : false;
        this.eventUpdateMode = ((_5 = (_4 = (_3 = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 8)) === null || _3 === void 0 ? void 0 : _3.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)) === null || _4 === void 0 ? void 0 : _4.accessDetailList.find(accessType => accessType.accessType == 'event update')) === null || _5 === void 0 ? void 0 : _5.accessType) ? true : false;
        this.eventDeleteMode = ((_8 = (_7 = (_6 = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionMasterId == 8)) === null || _6 === void 0 ? void 0 : _6.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)) === null || _7 === void 0 ? void 0 : _7.accessDetailList.find(accessType => accessType.accessType == 'event delete')) === null || _8 === void 0 ? void 0 : _8.accessType) ? true : false;
    }
    healthForumForms() {
        this.healthForumForm = this.fb.group({
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    get l() {
        return this.healthForumForm.controls;
    }
    changeRegion(regionId) {
        console.log(regionId, 'regionId');
        let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };
        this.healthForumService.listOfBranchesOfARegion(req).subscribe((res) => {
            this.branchList = res === null || res === void 0 ? void 0 : res.responseObject;
            console.log(this.branchList, 'this.branchList');
        });
        this.healthForumForm.controls.branch.setValue('');
        this.viewHealthForumsOfBranch = [];
    }
    changeBranch(branchId) {
        console.log(branchId, 'branchId');
        this.branchId = branchId;
        let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
        this.loader = false;
        this.healthForumService.viewHealthForumsOfABranch(req).subscribe((res) => {
            this.viewHealthForumsOfBranch = res === null || res === void 0 ? void 0 : res.responseObject;
            this.loader = true;
            console.log(this.viewHealthForumsOfBranch, 'this.viewHealthForumsOfBranch');
        });
        this.viewHealthForumsOfBranch = [];
    }
    viewHFEventDetails(HFeventDetails, health) {
        this.viewForumList = health;
        console.log(this.viewForumList, 'viewForumList');
        this.viewEventList = health.eventList;
        console.log(this.viewEventList, 'viewEventList');
        this.modalContent = '';
        this.viewHFEventModal = this.modalService.open(HFeventDetails, {
            windowClass: 'HFeventDetails',
        });
    }
    viewHFEventModalDismiss() {
        this.viewHFEventModal.close();
    }
    viewFamilyAttendedDetails(ViewFamilyDetails, event) {
        console.log(event);
        if (event.forumEventFamilyPresent == 0) {
            this.showError('No family is available');
            return;
        }
        else {
            let obj = {
                dataAccessDTO: this.httpService.dataAccessDTO,
                healthForumEventId: event.healthForumEventId,
                healthForumMasterId: this.viewForumList.healthForumMasterId
            };
            this.healthForumService.viewHealthForumsOfAEvent(obj).subscribe((res) => {
                var _a;
                console.log(res.responseObject);
                this.familyDetails = (_a = res.responseObject) === null || _a === void 0 ? void 0 : _a.villageWiseFamilyList;
                console.log(this.familyDetails, 'this.familyDetails');
            });
            this.modalContent = '';
            this.viewFamilyDetailModal = this.modalService.open(ViewFamilyDetails, {
                windowClass: 'ViewFamilyDetails',
            });
        }
    }
    viewFamilyModalDismiss() {
        this.viewFamilyDetailModal.close();
    }
    hourLists() {
        for (let i = 1; i <= 12; i++) {
            if (i < 10) {
                this.hourList.push({ hourName: '0' + i, hourValue: '0' + i });
            }
            else {
                this.hourList.push({ hourName: i, hourValue: i });
            }
            // console.log(this.hourList);
        }
    }
    minuteLists() {
        for (let i = 0; i <= 59; i++) {
            if (i < 10) {
                this.minuteList.push({ minuteName: '0' + i, minuteValue: '0' + i });
            }
            else {
                this.minuteList.push({ minuteName: i, minuteValue: i });
            }
            // console.log(this.minuteList);
        }
    }
    getAllStaffAndTheirSSOfABranch() {
        let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId };
        this.healthForumService.getAllStaffAndTheirSSOfABranch(req).subscribe((res) => {
            this.staffList = res.responseObject;
            console.log(this.staffList, 'staffList');
        });
    }
    createHealthForum(createHF) {
        console.log(this.editHFDetails, 'editHFDetails');
        this.hourList = [];
        this.minuteList = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'villageMasterId',
            textField: 'villageName',
            selectAllText: 'Select All',
            unSelectAllText: 'Unselect All',
            itemsShowLimit: 3,
            allowSearchFilter: true,
        };
        this.createHFForms();
        if (this.editHFDetails.healthForumMasterId) {
            setTimeout(() => {
                this.modalContent = '';
                this.createHFModal = this.modalService.open(createHF, {
                    windowClass: 'createHF',
                });
                this.loader = true;
            }, 1500);
        }
        else {
            this.modalContent = '';
            this.createHFModal = this.modalService.open(createHF, {
                windowClass: 'createHF',
            });
        }
        let dateString = new Date();
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_3__(dateString).add(1, "days").format("YYYY-MM-DD");
        this.hourLists();
        this.minuteLists();
        this.getAllStaffAndTheirSSOfABranch();
    }
    changeDate() {
        var _a, _b, _c;
        this.getTopicListAndAreasOfStaffAndOrSS();
        if (!((_a = this.editHFDetails) === null || _a === void 0 ? void 0 : _a.healthForumMasterId)) {
            this.createHFForm.controls.areaList.setValue('');
            this.createHFForm.controls.topic.setValue('');
        }
        // if (this.createHFForm.value.staffName) {
        //   this.getTopicListAndAreasOfStaffAndOrSS();
        // }
        if (((_c = (_b = this.editHFDetails) === null || _b === void 0 ? void 0 : _b.scheduleDetails) === null || _c === void 0 ? void 0 : _c.date) != this.createHFForm.value.date) {
            this.createHFForm.controls.areaList.setValue('');
            this.createHFForm.controls.topic.setValue('');
        }
    }
    changeStaff(staffId) {
        var _a, _b, _c, _d;
        console.log(staffId, 'staffId');
        if (!((_a = this.editHFDetails) === null || _a === void 0 ? void 0 : _a.healthForumMasterId)) {
            this.createHFForm.controls.areaList.setValue('');
            this.createHFForm.controls.topic.setValue('');
            this.createHFForm.controls.ssName.setValue('');
        }
        if (((_c = (_b = this.editHFDetails) === null || _b === void 0 ? void 0 : _b.staffDetails) === null || _c === void 0 ? void 0 : _c.staffId) != this.createHFForm.value.staffName) {
            this.createHFForm.controls.ssName.setValue('');
            this.createHFForm.controls.areaList.setValue('');
            this.createHFForm.controls.topic.setValue('');
        }
        // if ( this.createHFForm.value.areaList) {
        //   console.log(this.areaList.forEach(x => { x }));
        // }
        // if (this.editHFDetails?.staffDetails.staffId && this.createHFForm.value.staffName && ) {
        //   // this.createHFForm.controls.ssName.setValue('');
        //   this.createHFForm.controls.areaList.setValue('');
        //   // this.createHFForm.controls.topic.setValue('');
        // }
        this.SSList = (_d = this.staffList.find(item => item.staffId == staffId)) === null || _d === void 0 ? void 0 : _d.ssList;
        console.log(this.SSList, 'ssList');
        this.getTopicListAndAreasOfStaffAndOrSS();
        // this.getTopicListAndAreasOfStaffAndOrSS();
        // from 270 line already commented before today
        // if (this.createHFForm.value.areaList) {
        //   if (this.editHFDetails?.staffDetails?.staffId == this.createHFForm.value.staffName &&
        //     this.editHFDetails?.ssDetails?.ssId == this.createHFForm.value.ssName &&
        //     this.editHFDetails?.scheduleDetails?.date == this.createHFForm.value.date) {
        //   }
        // if (this.editHFDetails?.healthForumMasterId) {
        //   this.createHFForm.controls.areaList.setValue('');
        // }
        // }
    }
    changeSS(ssId) {
        var _a, _b, _c;
        console.log(ssId, 'ssId');
        this.getTopicListAndAreasOfStaffAndOrSS();
        if (!((_a = this.editHFDetails) === null || _a === void 0 ? void 0 : _a.healthForumMasterId)) {
            this.createHFForm.controls.areaList.setValue('');
            this.createHFForm.controls.topic.setValue('');
        }
        if (((_c = (_b = this.editHFDetails) === null || _b === void 0 ? void 0 : _b.ssDetails) === null || _c === void 0 ? void 0 : _c.ssId) != this.createHFForm.value.ssName) {
            this.createHFForm.controls.areaList.setValue('');
            this.createHFForm.controls.topic.setValue('');
        }
        // Commented Before Today
        // if (this.createHFForm.value.areaList) {
        //   if (!this.editHFDetails?.healthForumMasterId) {
        //     this.createHFForm.controls.areaList.setValue('');
        //   }
        // }
    }
    getTopicListAndAreasOfStaffAndOrSS() {
        var _a, _b, _c, _d;
        this.areaList = [];
        if (!this.createHFForm.value.ssName) {
            this.createHFForm.controls.ssName.setValue('');
        }
        let req = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            healthForumDate: (_a = this.createHFForm) === null || _a === void 0 ? void 0 : _a.value.date,
            staffMasterId: (_b = this.createHFForm) === null || _b === void 0 ? void 0 : _b.value.staffName, ssId: ((_c = this.createHFForm) === null || _c === void 0 ? void 0 : _c.value.ssName) ? (_d = this.createHFForm) === null || _d === void 0 ? void 0 : _d.value.ssName : ''
        };
        this.healthForumService.getTopicListAndAreasOfStaffAndOrSS(req).subscribe((res) => {
            var _a, _b, _c;
            console.log(res.responseObject);
            this.topicList = (_a = res.responseObject) === null || _a === void 0 ? void 0 : _a.allTopics;
            console.log(this.topicList, ' this.topicList');
            this.areaList = (_b = res.responseObject) === null || _b === void 0 ? void 0 : _b.villageDetails;
            this.areaList = (_c = this.areaList) === null || _c === void 0 ? void 0 : _c.map((_a) => {
                var { isChecked = false } = _a, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["isChecked"]);
                return (Object.assign({ isChecked }, rest));
            });
            console.log(this.areaList, 'areaList');
        });
    }
    onItemSelect(areaList) {
        this.areaList.filter(list => list.villageMasterId == (areaList === null || areaList === void 0 ? void 0 : areaList.villageMasterId)).forEach((x) => {
            x.isChecked = true;
        });
        console.log(this.areaList);
    }
    onItemDeSelect(areaList) {
        this.areaList.filter(list => list.villageMasterId == (areaList === null || areaList === void 0 ? void 0 : areaList.villageMasterId)).forEach((x) => {
            x.isChecked = false;
        });
        console.log(this.areaList);
    }
    onSelectAll() {
        this.areaList.forEach((x) => {
            x.isChecked = true;
        });
        console.log(this.areaList);
    }
    onItemDeSelectAll() {
        this.areaList.forEach((x) => {
            x.isChecked = false;
        });
        console.log(this.areaList);
    }
    createHFForms() {
        var _a, _b, _c;
        this.editHFDetailsTime = [];
        if ((_a = this.editHFDetails) === null || _a === void 0 ? void 0 : _a.healthForumMasterId) {
            var text = (_c = (_b = this.editHFDetails) === null || _b === void 0 ? void 0 : _b.scheduleDetails) === null || _c === void 0 ? void 0 : _c.time;
            text.trim().replace(" ", ":").trim().split(":").forEach(e => {
                if (e.length < 2) {
                    this.editHFDetailsTime.push("0" + e);
                }
                else {
                    this.editHFDetailsTime.push(e);
                }
                console.log(this.editHFDetailsTime);
            });
            console.log(this.editHFDetails.villageList);
            this.editHFDetails.villageList = this.editHFDetails.villageList.map((_a) => {
                var { villageId: villageMasterId } = _a, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["villageId"]);
                return (Object.assign({ villageMasterId }, rest));
            });
            console.log(this.editHFDetails.villageList);
            setTimeout(() => {
                this.editHFDetails.villageList.forEach(e => {
                    this.areaList.find(v => v.villageMasterId == e.villageMasterId).isChecked = true;
                });
            }, 1000);
            // if (this.editHFDetails?.staffDetails.staffId == this.createHFForm.value.staffName &&
            //   this.editHFDetails?.ssDetails.ssId == this.createHFForm.value.ssName &&
            //   this.editHFDetails?.scheduleDetails.date == this.createHFForm.value.date) {
            //   this.editHFDetails.villageList.forEach(e => {
            //     this.areaList.find(v => v.villageMasterId == e.villageId).isChecked = true;
            //   })
            //   this.areaList?.filter(e => e.isChecked).forEach(er => {
            //     this.editVill.push({ villageName: er.villageName, villageMasterId: er.villageMasterId });
            //     console.log(this.editVill);
            //   })
            //   console.log(this.areaList, 'areaList');
            //   console.log(this.editVill);
            // }
            // console.log(this.editHFDetails.villageList);
            this.createHFForm = this.fb.group({
                date: [this.editHFDetails.scheduleDetails.date, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                staffName: [this.editHFDetails.staffDetails.staffId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                ssName: [this.editHFDetails.ssDetails.ssId ? this.editHFDetails.ssDetails.ssId : ''],
                areaList: [this.editHFDetails.villageList ? this.editHFDetails.villageList : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                hour: [this.editHFDetailsTime[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                minute: [this.editHFDetailsTime[1], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                meridiem: [this.editHFDetailsTime[2], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                topic: [this.editHFDetails.topicDetails.topicId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                event: [this.editHFDetails.noOfEventProposed, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            // console.log(this.editHFDetails.topicDetails.topicId);
            this.createHFForm.markAllAsTouched();
            // this.getAllStaffAndTheirSSOfABranch();
            setTimeout(() => {
                this.changeStaff(this.editHFDetails.staffDetails.staffId);
            }, 500);
        }
        else {
            this.createHFForm = this.fb.group({
                date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                staffName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                ssName: [''],
                areaList: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                hour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                minute: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                meridiem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                event: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
    }
    saveIsDisabled() {
        let flag = true;
        if (!this.createHFForm.value.date) {
            flag = false;
        }
        else if (!this.createHFForm.value.staffName) {
            flag = false;
        }
        else if (!this.createHFForm.value.areaList) {
            flag = false;
        }
        else if (!this.createHFForm.value.topic) {
            flag = false;
        }
        else if (!this.createHFForm.value.event) {
            flag = false;
        }
        else if (!this.createHFForm.value.hour) {
            flag = false;
        }
        else if (!this.createHFForm.value.minute) {
            flag = false;
        }
        else if (!this.createHFForm.value.meridiem) {
            flag = false;
        }
        return flag;
    }
    HfSaveOrUpdate() {
        var _a, _b;
        console.log(this.editHFDetails, 'editHFDetails');
        console.log(this.areaList);
        var tt = [];
        this.villageList = this.areaList.filter(list => list.isChecked == true);
        this.villageList.forEach(x => {
            tt.push({
                villageMasterId: x.villageMasterId
            });
        });
        console.log(this.villageList, 'this.villageList');
        // if (this.editHFDetails?.healthForumMasterId) {
        //   console.log(this.editHFDetails.villageList);
        //   this.areaList.forEach(i => {
        //     this.villageList = this.editHFDetails.villageList.filter(list => list.villageId == i.villageMasterId)
        //     if (this.villageList.length > 0) {
        //       if (i.isChecked) {
        //         this.villageList.forEach(x => {
        //           tt.push({
        //             healthForumVillageMapId: x.healthForumVillageMapId,
        //             active_flag: "A",
        //             villageMasterId: x.villageId
        //           });
        //         });
        //       } else {
        //         this.villageList.forEach(x => {
        //           tt.push({
        //             healthForumVillageMapId: x.healthForumVillageMapId,
        //             active_flag: "D",
        //             villageMasterId: x.villageId
        //           });
        //         });
        //       }
        //     } else {
        //       if (i.isChecked) {
        //         tt.push({
        //           healthForumVillageMapId: 0,
        //           active_flag: "A",
        //           villageMasterId: i.villageMasterId
        //         });
        //       }
        //     }
        //   })
        // } else {
        //   this.villageList = this.areaList.filter(list => list.isChecked == true);
        //   this.villageList.forEach(x => {
        //     tt.push({
        //       healthForumVillageMapId: x.healthForumVillageMapId,
        //       active_flag: x.active_flag,
        //       villageMasterId: x.villageMasterId
        //     });
        //   });
        //   console.log(this.villageList, 'this.villageList');
        // }
        let saveObj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            healthForumMasterId: ((_a = this.editHFDetails) === null || _a === void 0 ? void 0 : _a.healthForumMasterId) ? (_b = this.editHFDetails) === null || _b === void 0 ? void 0 : _b.healthForumMasterId : 0,
            branchId: this.healthForumForm.value.branch ? this.healthForumForm.value.branch : this.lowerRankbranchId,
            staffId: this.createHFForm.value.staffName,
            ssId: this.createHFForm.value.ssName ? this.createHFForm.value.ssName : null,
            topicId: this.createHFForm.value.topic,
            date: this.createHFForm.value.date,
            scheduleStartHour: this.createHFForm.value.hour,
            scheduleStartMinute: this.createHFForm.value.minute,
            amOrPm: this.createHFForm.value.meridiem,
            noOfEventProposed: this.createHFForm.value.event,
            active_flag: 'A',
            villageList: tt
        };
        console.log(saveObj, 'savObj');
        if (saveObj.villageList.length == 0) {
            this.showError('Area selection is required');
            return;
        }
        this.healthForumService.HFSaveOrUpdate(saveObj).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.changeBranch(this.branchId || this.lowerRankbranchId);
                this.createHFModalDismiss();
            }
            else {
                this.showError(res.message);
            }
        });
    }
    editHealthForum(createHF, health) {
        this.editHFDetails = health;
        this.loader = false;
        this.createHealthForum(createHF);
    }
    get c() {
        return this.createHFForm.controls;
    }
    createHFModalDismiss() {
        var _a;
        var ID = (_a = this.editHFDetails) === null || _a === void 0 ? void 0 : _a.healthForumMasterId;
        if (ID) {
            this.editHFDetails = '';
            ID = 0;
            this.createHFModal.close();
            // this.editVill = []
        }
        else {
            this.createHFModal.close();
            // this.editVill = []
        }
    }
    deleteHealthForum(health) {
        this.confirmationDialogService.confirm('', 'Are you sure you want to delete this forum ?')
            .then(() => this.delete(health))
            .catch(() => '');
    }
    delete(health) {
        let delObj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            healthForumMasterId: health.healthForumMasterId,
            branchId: this.healthForumForm.value.branch,
            staffId: health.staffDetails.staffId,
            ssId: health.ssDetails.ssId,
            topicId: health.topicDetails.topicId,
            date: health.scheduleDetails.date,
            // scheduleStartHour: this.createHFForm.value.hour,
            // scheduleStartMinute: this.createHFForm.value.minute,
            // amOrPm: this.createHFForm.value.meridiem,
            noOfEventProposed: health.noOfEventProposed,
            active_flag: 'D',
            villageList: health.villageList
        };
        console.log(delObj, 'delObj');
        this.healthForumService.HFSaveOrUpdate(delObj).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.changeBranch(this.branchId || this.lowerRankbranchId);
            }
            else {
                this.showError(res.message);
            }
        });
    }
    approveHealthForum(health) {
        console.log(health);
        if (health.approvalStatus == 'A') {
            this.showError('Forum is already approved');
            return;
        }
        else {
            let appObj = { dataAccessDTO: this.httpService.dataAccessDTO, healthForumMasterId: health.healthForumMasterId, isApproved: false };
            this.healthForumService.HFApprove(appObj).subscribe((res) => {
                console.log(res);
                if (res.status == true) {
                    this.showSuccess('Approved Successfully');
                    this.changeBranch(this.branchId || this.lowerRankbranchId);
                }
                else {
                    this.showError(res.message);
                }
            });
        }
    }
    showSuccess(message) {
        this.toaster.success(message, 'Health Forum', {
            timeOut: 3000,
        });
    }
    showError(message) {
        this.toaster.error(message, 'Health Forum', {
            timeOut: 3000,
        });
    }
    restrictTypeOfDate() {
        return false;
    }
    openDialog(health) {
        this.dialog.open(_health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_4__["HealthForumAngularMatModalComponent"], {
            width: '400px',
            height: '250px',
            data: { villLists: health }
        });
    }
    createHFEvents(createEditHFEvent) {
        var _a, _b, _c;
        this.hourList = [];
        this.minuteList = [];
        this.hourLists();
        this.minuteLists();
        this.visitorDetails.visitorInfo.push({
            visitorName: '',
            visitorDesignation: '',
            health_forum_event_visitor_map_id: 0,
            active_flag: 'A'
        });
        let HFPrerequisite = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            branchId: this.branchId || this.lowerRankbranchId,
            healthForumMasterId: this.viewForumList.healthForumMasterId
        };
        this.loader = false;
        this.healthForumService.HForumEventPrerequisite(HFPrerequisite).subscribe((res) => {
            var _a;
            this.loader = true;
            this.HForumEventPrerequisite = res.responseObject;
            // if (this.HForumEventPrerequisite.ssName != null) {
            //   this.createEditHFEventForm.controls.ssPresent.setValue('');
            // } else {
            //   let yesDisabled = (document.getElementById("yess") as HTMLInputElement);
            //   yesDisabled.disabled = true;
            //   this.createEditHFEventForm.controls.ssPresent.setValue('N');
            //   this.createEditHFEventForm.controls.staffPresent.setValue('Y');
            //   this.createEditHFEventForm.controls.eventConduction.setValue('STAFF');
            // }
            console.log(this.HForumEventPrerequisite, 'HForumEventPrerequisite');
            this.eventDiseaseList = res.responseObject.seasonalDiseaseList;
            this.eventDiseaseList = (_a = this.eventDiseaseList) === null || _a === void 0 ? void 0 : _a.map((_a) => {
                var { isChecked = false } = _a, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["isChecked"]);
                return (Object.assign({ isChecked }, rest));
            });
            // console.log(this.eventDiseaseList);
            this.eventVillList = res.responseObject.villageList;
            console.log(this.eventDiseaseList, 'eventDiseaseList');
            // console.log(this.eventVillList, 'eventVillList');
            this.eventVillListID = [];
            this.eventVillList.forEach(x => {
                this.eventVillListID.push(x.villageId);
                // console.log(this.eventVillListID, 'eventVillListID');
            });
            let famReq = {
                dataAccessDTO: this.httpService.dataAccessDTO,
                villageId: this.eventVillListID,
                healthForumMasterId: this.viewForumList.healthForumMasterId,
            };
            this.loader = false;
            this.healthForumService.getListOfFamsOfAVillForHFEvent(famReq).subscribe((res) => {
                var _a;
                this.eventFamList = res.responseObject;
                this.setFamList = res.responseObject;
                this.loader = true;
                // console.log(this.eventVillList, 'eventVillList22');
                console.log(this.eventFamList, 'eventFamList');
                (_a = this.eventFamList) === null || _a === void 0 ? void 0 : _a.forEach((x) => {
                    // console.log(x);
                    var _a;
                    x.familyList = (_a = x.familyList) === null || _a === void 0 ? void 0 : _a.map((_a) => {
                        var { setStatus = '', radioCheck = 'NA', villageId = '', adolGirl = [], health_forum_event_family_map_id = 0 } = _a, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["setStatus", "radioCheck", "villageId", "adolGirl", "health_forum_event_family_map_id"]);
                        return (Object.assign({ setStatus, radioCheck, villageId, adolGirl, health_forum_event_family_map_id }, rest));
                    });
                    this.setData(x.familyList);
                });
                this.eventFamList = [];
                this.eventVillList.forEach(item => {
                    var _a, _b, _c, _d;
                    this.eventFamList.push(((_b = (_a = res.responseObject) === null || _a === void 0 ? void 0 : _a.find(items => items.villageId == item.villageId)) === null || _b === void 0 ? void 0 : _b.familyList) ? (_d = (_c = res.responseObject) === null || _c === void 0 ? void 0 : _c.find(items => items.villageId == item.villageId)) === null || _d === void 0 ? void 0 : _d.familyList : []);
                });
                // console.log(this.eventFamList);
                this.eventFamList.forEach((item) => {
                    item.forEach(items => {
                        var _a;
                        items.adolescentGilrChildren = (_a = items.adolescentGilrChildren) === null || _a === void 0 ? void 0 : _a.map((_a) => {
                            var { isChecked = false, health_forum_event_child_map_id = 0 } = _a, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["isChecked", "health_forum_event_child_map_id"]);
                            return (Object.assign({ isChecked, health_forum_event_child_map_id }, rest));
                        });
                        // console.log(items.adolescentGilrChildren);
                    });
                });
            });
        });
        if ((_a = this.editHF_eventDetails) === null || _a === void 0 ? void 0 : _a.healthForumEventId) {
            setTimeout(() => {
                this.createEditHFEventForms(this.editHF_eventDetails);
                this.modalContent = '';
                this.editHFEventModal = this.modalService.open(createEditHFEvent, {
                    windowClass: 'createEditHFEvent',
                });
            }, 1500);
        }
        if (!((_b = this.editHF_eventDetails) === null || _b === void 0 ? void 0 : _b.healthForumEventId) && this.viewForumList.approvalStatus == 'A') {
            this.createEditHFEventForms(this.editHF_eventDetails);
            this.modalContent = '';
            this.editHFEventModal = this.modalService.open(createEditHFEvent, {
                windowClass: 'createEditHFEvent',
            });
        }
        else if (!((_c = this.editHF_eventDetails) === null || _c === void 0 ? void 0 : _c.healthForumEventId) && this.viewForumList.approvalStatus != 'A') {
            this.showError('Health Forum is not approved');
            return;
        }
        // if (this.viewForumList.approvalStatus == 'A') {
        //   // console.log(this.editHF_eventDetails, 'editHF_eventDetails');
        //   setTimeout(() => {
        //     this.createEditHFEventForms(this.editHF_eventDetails);
        //     this.modalContent = '';
        //     this.editHFEventModal = this.modalService.open(createEditHFEvent, {
        //       windowClass: 'createEditHFEvent',
        //     });
        //   }, 1500);
        //   // this.visitorDetails.visitorInfo = this.visitorDetails.visitorInfo.map(({
        //   //   health_forum_event_visitor_map_id = 0,
        //   //   active_flag = 'A',
        //   //   ...rest
        //   // }) => ({
        //   //   health_forum_event_visitor_map_id, active_flag,
        //   //   ...rest
        //   // }));
        //   // console.log(this.visitorDetails.visitorInfo);
        // } else {
        // }
    }
    editHFEvents(createEditHFEvent, event) {
        this.editHF_eventDetails = event;
        // console.log(this.editHF_eventDetails, 'this.editHF_eventDetails');
        this.createHFEvents(createEditHFEvent);
    }
    setData(familyList) {
        // console.log(familyList);
        familyList.forEach(x => {
            this.statusList = [];
            this.statusList.push({ status: x.has2to5yearsoldChildren, set: "2-5 yr" }, { status: x.hasAdolescentGirlChildren, set: "14-18 yr" }, { status: x.hasChildPresentInPem, set: "PEM" }, { status: x.presentInLactatingMother, set: "LM" }, { status: x.presentInPregnantWoman, set: "PW" });
            // console.log(this.statusList);
            var mainString = "";
            this.statusList.forEach(x => {
                if (x.status == "Y") {
                    mainString += x.set;
                    mainString += ", ";
                }
            });
            if (mainString.length < 1) {
                // console.log(mainString);
                x.setStatus = "-";
            }
            else {
                x.setStatus = mainString.substring(0, mainString.length - 2);
                // console.log(x.setStatus);
            }
        });
    }
    saveFamRecordModalDismiss() {
        this.saveFamRecordModal.close();
    }
    addMoreVisitor() {
        this.visitorDetails.visitorInfo.push({
            visitorName: '',
            visitorDesignation: '',
            health_forum_event_visitor_map_id: 0,
            active_flag: 'A'
        });
    }
    removeNewVisitor(i) {
        if (this.moreEventDetails) {
            if (this.moreEventDetails.visitorDetailsList.length != 0) {
                if (this.visitorDetails.visitorInfo[i].health_forum_event_visitor_map_id != 0) {
                    this.visitorDetails.visitorInfo[i].active_flag = "D";
                }
                else {
                    this.visitorDetails.visitorInfo.splice(i, 1);
                }
            }
            else {
                this.visitorDetails.visitorInfo.splice(i, 1);
            }
        }
        else {
            this.visitorDetails.visitorInfo.splice(i, 1);
        }
        console.log(this.visitorDetails.visitorInfo);
    }
    editHFEventModalDismiss() {
        var _a;
        this.familyHeadPresentLenChk = [];
        // this.editHFEventModal.close();
        // this.visitorDetails.visitorInfo = []
        // this.eventFamList.forEach(x => {
        //   x.forEach(y => {
        //     if (y.radioCheck != 'NA')
        //       this.familyHeadPresentLenChk.push(y.radioCheck = 'NA');
        //     console.log(this.familyHeadPresentLenChk);
        //   })
        // })
        var ID = (_a = this.editHF_eventDetails) === null || _a === void 0 ? void 0 : _a.healthForumEventId;
        if (ID) {
            this.editHF_eventDetails = '';
            ID = 0;
            this.editHFEventModal.close();
            this.visitorDetails.visitorInfo = [];
            this.editStartHour = '';
            this.editStartMin = '';
            this.editEndHour = '';
            this.editEndMin = '';
            this.moreEventDetails = '';
        }
        else {
            this.editHFEventModal.close();
            this.visitorDetails.visitorInfo = [];
        }
    }
    createEditHFEventForms(editHF_eventDetails) {
        var _a;
        if ((_a = this.editHF_eventDetails) === null || _a === void 0 ? void 0 : _a.healthForumEventId) {
            // this.editStartHour = this.editHF_eventDetails?.startHour;
            // this.editStartHour = this.editStartHour.toString();
            // this.editStartMin = this.editHF_eventDetails?.startMinute;
            // this.editStartMin = this.editStartMin.toString();
            // this.editEndHour = this.editHF_eventDetails?.endHour;
            // this.editEndHour = this.editEndHour.toString();
            // this.editEndMin = this.editHF_eventDetails?.endMinute;
            // this.editEndMin = this.editEndMin.toString();
            // if (this.editStartHour.length < 2) {
            //   this.editStartHour = '0' + this.editStartHour;
            //   console.log(this.editStartHour, 'this.editStartHour');
            // } else {
            //   this.editStartHour = this.editHF_eventDetails?.startHour
            // }
            // if (this.editStartMin.length < 2) {
            //   this.editStartMin = '0' + this.editStartMin;
            //   console.log(this.editStartMin, 'this.editStartMin');
            // } else {
            //   this.editStartMin = this.editHF_eventDetails?.startMinute
            // }
            // if (this.editEndHour.length < 2) {
            //   this.editEndHour = '0' + this.editEndHour;
            //   console.log(this.editEndHour, 'this.editEndHour');
            // } else {
            //   this.editEndHour = this.editHF_eventDetails?.endHour
            // }
            // if (this.editEndMin.length < 2) {
            //   this.editEndMin = '0' + this.editEndMin;
            //   console.log(this.editEndMin, 'this.editEndMin');
            // } else {
            //   this.editEndMin = this.editHF_eventDetails?.endMinute
            // }
            let moreEventDetailsobj = {
                dataAccessDTO: this.httpService.dataAccessDTO,
                healthForumEventId: this.editHF_eventDetails.healthForumEventId,
                healthForumMasterId: this.viewForumList.healthForumMasterId
            };
            this.healthForumService.viewHealthForumsOfAEvent(moreEventDetailsobj).subscribe((res) => {
                this.moreEventDetails = res.responseObject;
                // console.log(this.moreEventDetails, 'this.moreEventDetails');
                this.setmoreEventDetails(this.moreEventDetails, editHF_eventDetails);
            });
        }
        else {
            this.createEditHFEventForm = this.fb.group({
                startHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                startMin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                startMeridiem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                endHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                endMin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                endMeridiem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                staffPresent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                ssPresent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                eventConduction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lastMonTopic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                thisMonTopic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                seasonalDiscussion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            this.createEditHFEventForm.markAllAsTouched();
        }
    }
    unselectFamily(fami, int) {
        fami.radioCheck = 'NA';
        fami.adolescentGilrChildren.forEach(z => {
            z.active_flag = "D";
        });
        fami.adolGirl = [];
        fami.adolescentGilrChildren.filter(x => x.active_flag == "D").forEach((z) => {
            var t = [];
            z.age.split(/[year,month,days]+/).forEach(x => {
                t.push(x);
                this.year = t[0];
                this.month = t[1];
                this.day = t[2];
            });
            console.log(this.year, this.month, this.day);
            fami.adolGirl.push({
                health_forum_event_child_map_id: z.health_forum_event_child_map_id, childId: z.childDetailId, active_flag: 'D',
                latestMuac: z.latestMuac, ageYears: this.year.trim(), ageMonths: this.month.trim(), ageDays: this.day.trim(),
                latestMuacRegisterId: z.latestMuacRegisterId, present_status: z.presentInPem
            });
        });
        console.log(fami);
    }
    setmoreEventDetails(data, editHF_eventDetails) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        console.log(data, 'moreEventDetails');
        console.log(editHF_eventDetails, 'editHF_eventDetails');
        // console.log(data.seasonalDiseaseDiscussedList);
        // console.log(data.visitorDetailsList);
        // console.log(this.visitorDetails.visitorInfo);
        console.log(data.villageWiseFamilyList, 'data.villageWiseFamilyList');
        setTimeout(() => {
            console.log(this.eventFamList, 'eventFamList2222');
            this.familyHeadPresentLenChk = [];
            data.villageWiseFamilyList.forEach(x => {
                x.familyList.forEach(t => {
                    this.eventFamList.forEach(y => {
                        y.forEach(e => {
                            e.villageId = x.villageId;
                            if (e.familyDetailId == t.familyId) {
                                e.health_forum_event_family_map_id = t.health_forum_event_family_map_id;
                            }
                        });
                        y.filter(z => z.familyDetailId == t.familyId).forEach(m => {
                            y.health_forum_event_family_map_id = x.health_forum_event_family_map_id;
                            m.radioCheck = t.family_head_present;
                            this.familyHeadPresentLenChk.push(m);
                            console.log(this.familyHeadPresentLenChk, ' this.familyHeadPresentLenChk');
                            t.childrenList.forEach(er => {
                                m.adolescentGilrChildren.filter(v => v.childDetailId == er.childId).forEach(rr => {
                                    rr.isChecked = true;
                                    rr.age = er.ageYears + " year " + er.ageMonths + " month " + er.ageDays + " day ";
                                    rr.health_forum_event_child_map_id = er.health_forum_event_child_map_id;
                                });
                            });
                            setTimeout(() => {
                                m.adolGirl = [];
                                m.adolescentGilrChildren.filter(x => x.isChecked).forEach((z) => {
                                    var t = [];
                                    z.age.split(/[year,month,days]+/).forEach(x => {
                                        t.push(x);
                                        this.year = t[0];
                                        this.month = t[1];
                                        this.day = t[2];
                                    });
                                    console.log(this.year, this.month, this.day);
                                    m.adolGirl.push({
                                        health_forum_event_child_map_id: z.health_forum_event_child_map_id, childId: z.childDetailId, active_flag: 'A',
                                        latestMuac: z.latestMuac, ageYears: this.year.trim(), ageMonths: this.month.trim(), ageDays: this.day.trim(),
                                        latestMuacRegisterId: z.latestMuacRegisterId, present_status: z.presentInPem
                                    });
                                });
                            }, 500);
                        });
                    });
                });
            });
        }, 1000);
        this.visitorDetails.visitorInfo = [];
        data.visitorDetailsList.forEach(x => {
            this.visitorDetails.visitorInfo.push({
                visitorDesignation: x.visitorDesignation, visitorName: x.visitorName,
                health_forum_event_visitor_map_id: x.health_forum_event_visitor_map_id, active_flag: 'A'
            });
        });
        this.diseaseListID = [];
        data.seasonalDiseaseDiscussedList.forEach(x => {
            this.eventDiseaseList.filter(v => v.diseaseId == x.diseaseId).forEach(z => {
                z.isChecked = true;
                this.diseaseListID.push({ health_forum_event_season_diseases_map_id: x.health_forum_event_season_diseases_map_id, diseaseId: z.diseaseId, active_flag: 'A' });
                console.log(this.diseaseListID);
            });
        });
        console.log(this.eventDiseaseList, 'eventDiseaseList');
        this.editStartHour = (_a = this.editHF_eventDetails) === null || _a === void 0 ? void 0 : _a.startHour;
        this.editStartHour = this.editStartHour.toString();
        this.editStartMin = (_b = this.editHF_eventDetails) === null || _b === void 0 ? void 0 : _b.startMinute;
        this.editStartMin = this.editStartMin.toString();
        this.editEndHour = (_c = this.editHF_eventDetails) === null || _c === void 0 ? void 0 : _c.endHour;
        this.editEndHour = this.editEndHour.toString();
        this.editEndMin = (_d = this.editHF_eventDetails) === null || _d === void 0 ? void 0 : _d.endMinute;
        this.editEndMin = this.editEndMin.toString();
        if (this.editStartHour.length < 2) {
            this.editStartHour = '0' + this.editStartHour;
            // console.log(this.editStartHour, 'this.editStartHour');
        }
        else {
            this.editStartHour = (_e = this.editHF_eventDetails) === null || _e === void 0 ? void 0 : _e.startHour;
        }
        if (this.editStartMin.length < 2) {
            this.editStartMin = '0' + this.editStartMin;
            // console.log(this.editStartMin, 'this.editStartMin');
        }
        else {
            this.editStartMin = (_f = this.editHF_eventDetails) === null || _f === void 0 ? void 0 : _f.startMinute;
        }
        if (this.editEndHour.length < 2) {
            this.editEndHour = '0' + this.editEndHour;
            // console.log(this.editEndHour, 'this.editEndHour');
        }
        else {
            this.editEndHour = (_g = this.editHF_eventDetails) === null || _g === void 0 ? void 0 : _g.endHour;
        }
        if (this.editEndMin.length < 2) {
            this.editEndMin = '0' + this.editEndMin;
            // console.log(this.editEndMin, 'this.editEndMin');
        }
        else {
            this.editEndMin = (_h = this.editHF_eventDetails) === null || _h === void 0 ? void 0 : _h.endMinute;
        }
        this.createEditHFEventForm = this.fb.group({
            startHour: [this.editStartHour ? this.editStartHour : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startMin: [this.editStartMin ? this.editStartMin : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startMeridiem: [editHF_eventDetails.startAmOrPm ? editHF_eventDetails.startAmOrPm : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endHour: [this.editEndHour ? this.editEndHour : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endMin: [this.editEndMin ? this.editEndMin : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endMeridiem: [editHF_eventDetails.endAmOrPm ? editHF_eventDetails.endAmOrPm : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            staffPresent: [(data === null || data === void 0 ? void 0 : data.wasStaffPresent) ? data === null || data === void 0 ? void 0 : data.wasStaffPresent : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ssPresent: [(data === null || data === void 0 ? void 0 : data.wasSsPresent) ? data === null || data === void 0 ? void 0 : data.wasSsPresent : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            eventConduction: [(data === null || data === void 0 ? void 0 : data.conductedByStaffOrSS) ? data === null || data === void 0 ? void 0 : data.conductedByStaffOrSS : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastMonTopic: [(data === null || data === void 0 ? void 0 : data.recapLastMonthTopic) ? data === null || data === void 0 ? void 0 : data.recapLastMonthTopic : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            thisMonTopic: [(data === null || data === void 0 ? void 0 : data.discussionOnThisMonthTopic) ? data === null || data === void 0 ? void 0 : data.discussionOnThisMonthTopic : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seasonalDiscussion: [(data === null || data === void 0 ? void 0 : data.discussionOnAnySeasonalDisease) ? data === null || data === void 0 ? void 0 : data.discussionOnAnySeasonalDisease : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.createEditHFEventForm.markAllAsTouched();
    }
    selectMultipleDisease(e, disease) {
        this.diseaseListID = [];
        console.log(e.target.checked, disease);
        if (e.target.checked == true) {
            disease.isChecked = true;
        }
        else {
            disease.isChecked = false;
        }
        console.log(this.moreEventDetails);
        if (!this.moreEventDetails) {
            this.eventDiseaseList.forEach(x => {
                if (x.isChecked == true) {
                    console.log(x.diseaseId);
                    this.diseaseListID.push({ health_forum_event_season_diseases_map_id: 0, diseaseId: x.diseaseId, active_flag: 'A' });
                    console.log(this.diseaseListID);
                }
            });
        }
        else {
            this.eventDiseaseList.forEach(e => {
                if (this.moreEventDetails.seasonalDiseaseDiscussedList.length != 0) {
                    if (this.moreEventDetails.seasonalDiseaseDiscussedList.filter(v => v.diseaseId == e.diseaseId).length == 0) {
                        if (e.isChecked == true) {
                            console.log(e.diseaseId);
                            this.diseaseListID.push({ health_forum_event_season_diseases_map_id: 0, diseaseId: e.diseaseId, active_flag: 'A' });
                            console.log(this.diseaseListID);
                        }
                    }
                    else {
                        this.moreEventDetails.seasonalDiseaseDiscussedList.filter(v => v.diseaseId == e.diseaseId).forEach(r => {
                            if (e.isChecked == true) {
                                this.diseaseListID.push({ health_forum_event_season_diseases_map_id: r.health_forum_event_season_diseases_map_id, diseaseId: r.diseaseId, active_flag: 'A' });
                            }
                            else {
                                this.diseaseListID.push({ health_forum_event_season_diseases_map_id: r.health_forum_event_season_diseases_map_id, diseaseId: r.diseaseId, active_flag: 'D' });
                            }
                        });
                    }
                }
            });
        }
        console.log(this.eventDiseaseList);
    }
    selectAdolescent(e, adolescent, fami) {
        console.log(fami);
        if (e.target.checked == true) {
            adolescent.isChecked = true;
            console.log(adolescent);
        }
        else {
            adolescent.isChecked = false;
            console.log(adolescent);
        }
        console.log(this.eventFamList);
        fami.adolGirl = [];
        fami.adolescentGilrChildren.filter(x => x.isChecked).forEach((z) => {
            var t = [];
            z.age.split(/[year,month,days]+/).forEach(x => {
                t.push(x);
                this.year = t[0];
                this.month = t[1];
                this.day = t[2];
            });
            console.log(this.year, this.month, this.day);
            fami.adolGirl.push({
                health_forum_event_child_map_id: z.health_forum_event_child_map_id, childId: z.childDetailId, active_flag: 'A',
                latestMuac: z.latestMuac, ageYears: this.year.trim(), ageMonths: this.month.trim(), ageDays: this.day.trim(),
                latestMuacRegisterId: z.latestMuacRegisterId, present_status: z.presentInPem
            });
        });
        console.log(fami);
    }
    changefamilyHeadPresent(e, family, vill) {
        // console.log(vill.villageId);
        console.log(family);
        family.radioCheck = e.target.value;
        family.villageId = vill.villageId;
        this.familyHeadPresentLenChk = [];
        this.eventFamList.forEach(x => {
            x.forEach(y => {
                if (y.radioCheck != 'NA')
                    this.familyHeadPresentLenChk.push(y);
                console.log(this.familyHeadPresentLenChk);
            });
        });
    }
    viewFilterByFamilyList(e) {
        console.log(e);
        if (e == 'selectedFam') {
            var notSel = [];
            this.setFamList.forEach(x => {
                console.log(x);
                notSel.push(x.familyList.filter(x => x.radioCheck != 'NA'));
            });
            this.eventFamList = notSel;
            console.log(this.eventFamList);
        }
        else if (e == 'unselectedFam') {
            var notSel = [];
            this.setFamList.forEach(x => {
                console.log(x);
                notSel.push(x.familyList.filter(x => x.radioCheck == 'NA'));
            });
            this.eventFamList = notSel;
            console.log(this.eventFamList);
        }
        else {
            var notSel = [];
            this.setFamList.forEach(x => {
                console.log(x);
                notSel.push(x.familyList);
            });
            this.eventFamList = notSel;
            console.log(this.eventFamList);
        }
    }
    staffPresentorNot(e) {
        console.log(e);
        if (this.createEditHFEventForm.value.staffPresent == 'Y' && this.createEditHFEventForm.value.ssPresent == 'N') {
            this.createEditHFEventForm.controls.eventConduction.setValue('STAFF');
        }
        else if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'Y') {
            this.createEditHFEventForm.controls.eventConduction.setValue('SS');
        }
        else if (this.createEditHFEventForm.value.staffPresent == 'Y' && this.createEditHFEventForm.value.ssPresent == 'Y') {
            this.createEditHFEventForm.controls.eventConduction.setValue('');
        }
        else if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'N') {
            this.showError('Staff or SS both should not be NO');
            this.createEditHFEventForm.controls.eventConduction.setValue('');
            this.createEditHFEventForm.controls.staffPresent.setValue('');
            this.createEditHFEventForm.controls.ssPresent.setValue('');
        }
    }
    ssPresentorNot(e) {
        console.log(e);
        if (this.createEditHFEventForm.value.staffPresent == 'Y' && this.createEditHFEventForm.value.ssPresent == 'N') {
            this.createEditHFEventForm.controls.eventConduction.setValue('STAFF');
        }
        else if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'Y') {
            this.createEditHFEventForm.controls.eventConduction.setValue('SS');
        }
        else if (this.createEditHFEventForm.value.staffPresent == 'Y' && this.createEditHFEventForm.value.ssPresent == 'Y') {
            this.createEditHFEventForm.controls.eventConduction.setValue('');
        }
        else if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'N') {
            this.showError('Staff or SS both should not be NO');
            this.createEditHFEventForm.controls.eventConduction.setValue('');
            this.createEditHFEventForm.controls.staffPresent.setValue('');
            this.createEditHFEventForm.controls.ssPresent.setValue('');
        }
    }
    saveEditHFEvent() {
        this.familyListData = [];
        console.log(this.eventFamList);
        var arr = [];
        var i = 0;
        this.eventFamList.forEach(item => {
            item.forEach(x => {
                arr.push(x);
                if (x.radioCheck != 'NA') {
                    if (x.adolescentGilrChildren.length > 0) {
                        if (x.adolGirl.length == 0) {
                            i++;
                            if (i == 1) {
                                this.showError('Minimum one adolescent selection is required as family head is present');
                                return;
                            }
                            else {
                                return;
                            }
                        }
                        else {
                            this.familyListData.push({
                                health_forum_event_family_map_id: x.health_forum_event_family_map_id, familyId: x.familyDetailId, villageId: x.villageId,
                                presentInPregnantWoman: x.presentInPregnantWoman,
                                presentInLactatingMother: x.presentInLactatingMother,
                                hasChildPresentInPem: x.hasChildPresentInPem,
                                has2to5yearsOldChildren: x.has2to5yearsoldChildren,
                                hasAdolescentGirlChildren: x.hasAdolescentGirlChildren,
                                family_head_present: x.radioCheck,
                                adolescent_girl_attended: x.adolGirl.length > 0 ? 'Y' : 'N',
                                active_flag: 'A',
                                childrenList: x.adolGirl
                            });
                        }
                    }
                    else {
                        this.familyListData.push({
                            health_forum_event_family_map_id: x.health_forum_event_family_map_id, familyId: x.familyDetailId, villageId: x.villageId,
                            presentInPregnantWoman: x.presentInPregnantWoman,
                            presentInLactatingMother: x.presentInLactatingMother,
                            hasChildPresentInPem: x.hasChildPresentInPem,
                            has2to5yearsOldChildren: x.has2to5yearsoldChildren,
                            hasAdolescentGirlChildren: x.hasAdolescentGirlChildren,
                            family_head_present: x.radioCheck,
                            adolescent_girl_attended: x.adolGirl.length > 0 ? 'Y' : 'N',
                            active_flag: 'A',
                            childrenList: x.adolGirl
                        });
                    }
                }
                else {
                    if (x.health_forum_event_family_map_id != 0) {
                        this.familyListData.push({
                            health_forum_event_family_map_id: x.health_forum_event_family_map_id, familyId: x.familyDetailId, villageId: x.villageId,
                            presentInPregnantWoman: x.presentInPregnantWoman,
                            presentInLactatingMother: x.presentInLactatingMother,
                            hasChildPresentInPem: x.hasChildPresentInPem,
                            has2to5yearsOldChildren: x.has2to5yearsoldChildren,
                            hasAdolescentGirlChildren: x.hasAdolescentGirlChildren,
                            family_head_present: x.radioCheck,
                            adolescent_girl_attended: x.adolGirl.length > 0 ? 'Y' : 'N',
                            active_flag: x.health_forum_event_family_map_id == 0 ? 'A' : 'D',
                            childrenList: x.adolGirl
                        });
                    }
                }
            });
        });
        setTimeout(() => {
            var ch = [];
            var tt = [];
            arr.filter(er => er.radioCheck != "NA").forEach(x => {
                if (x.adolescentGilrChildren.length != 0) {
                    if (x.adolGirl.length == 0) {
                        ch.push({ isChecked: false });
                    }
                    else {
                        tt.push(x.adolGirl);
                        ch.push({ isChecked: true });
                    }
                }
            });
            if (ch.length == tt.length) {
                this.saveEvent();
            }
        }, 200);
    }
    saveEvent() {
        // console.log(this.moreEventDetails, 'pkkaset');
        var _a, _b;
        // this.setmoreEventDetails(this.moreEventDetails, editHF_eventDetails);
        var tt = [];
        this.visitorDetails.visitorInfo.forEach(x => {
            if (x.visitorName == "") {
                tt.push();
            }
            else {
                tt.push(x);
            }
        });
        console.log(tt);
        let savEditReq = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            healthForumEventId: ((_a = this.moreEventDetails) === null || _a === void 0 ? void 0 : _a.healthForumEventId) ? (_b = this.moreEventDetails) === null || _b === void 0 ? void 0 : _b.healthForumEventId : 0,
            active_flag: 'A',
            healthForumMasterId: this.viewForumList.healthForumMasterId,
            startTimeHour: this.createEditHFEventForm.value.startHour,
            startTimeMinute: this.createEditHFEventForm.value.startMin,
            startTimeAmORPm: this.createEditHFEventForm.value.startMeridiem,
            endTimeHour: this.createEditHFEventForm.value.endHour,
            endTimeMinute: this.createEditHFEventForm.value.endMin,
            endTimeAmOrPm: this.createEditHFEventForm.value.endMeridiem,
            wasStaffPresent: this.createEditHFEventForm.value.staffPresent,
            staffId: this.HForumEventPrerequisite.staffId,
            wasSsPresent: this.createEditHFEventForm.value.ssPresent,
            ssId: this.HForumEventPrerequisite.ssId,
            conductedByStaffOrSS: this.createEditHFEventForm.value.eventConduction,
            recapLastMonthTopic: this.createEditHFEventForm.value.lastMonTopic,
            discussionOnThisMonthTopic: this.createEditHFEventForm.value.thisMonTopic,
            discussionOnAnySeasonalDisease: this.createEditHFEventForm.value.seasonalDiscussion,
            seasonalDiseaseDiscussedList: this.diseaseListID,
            visitorDetailsList: tt.length == 0 ? [] : this.visitorDetails.visitorInfo,
            familyList: this.familyListData
        };
        if (savEditReq.familyList.filter(x => x.active_flag == 'A').length == 0) {
            this.showError('Please select at least one family');
            return;
        }
        console.log(savEditReq, 'savEditReq');
        this.healthForumService.saveOrUpdateHealthForumEvent(savEditReq).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.editHFEventModalDismiss();
                // this.changeBranch(this.branchId || this.lowerRankbranchId);
            }
            else {
                this.showError(res.message);
            }
        });
    }
    saveEditHFEventDisabled() {
        // console.log(this.familyHeadPresentLenChk);
        let flag = true;
        if (this.familyHeadPresentLenChk.length < 1) {
            flag = false;
        }
        if (!this.createEditHFEventForm.value.startHour) {
            flag = false;
        }
        else if (!this.createEditHFEventForm.value.startMin) {
            flag = false;
        }
        else if (!this.createEditHFEventForm.value.startMeridiem) {
            flag = false;
        }
        else if (!this.createEditHFEventForm.value.endHour) {
            flag = false;
        }
        else if (!this.createEditHFEventForm.value.endMin) {
            flag = false;
        }
        else if (!this.createEditHFEventForm.value.endMeridiem) {
            flag = false;
        }
        else if (this.createEditHFEventForm.value.staffPresent != 'Y' && this.createEditHFEventForm.value.ssPresent != 'Y') {
            flag = false;
        }
        else if (!this.createEditHFEventForm.value.eventConduction) {
            flag = false;
        }
        else if (!this.createEditHFEventForm.value.lastMonTopic) {
            flag = false;
        }
        else if (!this.createEditHFEventForm.value.thisMonTopic) {
            flag = false;
        }
        else if (!this.createEditHFEventForm.value.seasonalDiscussion) {
            flag = false;
        }
        else if (this.createEditHFEventForm.value.seasonalDiscussion == 'Y') {
            if (this.diseaseListID.length < 1) {
                flag = false;
            }
        }
        return flag;
    }
    get e() {
        return this.createEditHFEventForm.controls;
    }
    changeseasonalDiscussion() {
        this.diseaseListID = [];
        console.log(this.eventDiseaseList);
        this.eventDiseaseList.forEach(x => {
            if (x.isChecked == true) {
                console.log(x.isChecked = false);
            }
        });
        console.log(this.eventDiseaseList);
    }
    tabChanged(tabChangeEvent) {
        this.index = tabChangeEvent.index;
    }
    deleteHFEvent(event, i) {
        this.confirmationDialogService.confirm('', 'Are you sure you want to delete this event ?')
            .then(() => this.delete_event(event, i))
            .catch(() => '');
        console.log(event);
    }
    delete_event(event, i) {
        let delReq = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            healthForumEventId: event.healthForumEventId,
            active_flag: 'D',
            healthForumMasterId: this.viewForumList.healthForumMasterId,
            startTimeHour: event.startHour,
            startTimeMinute: event.startMinute,
            startTimeAmORPm: event.startAmOrPm,
            endTimeHour: event.endHour,
            endTimeMinute: event.endMinute,
            endTimeAmOrPm: event.endAmOrPm,
        };
        console.log(delReq, 'delReq');
        this.healthForumService.saveOrUpdateHealthForumEvent(delReq).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.viewEventList.splice(i, 1);
                // this.editHFEventModalDismiss();
                // this.changeBranch(this.branchId || this.lowerRankbranchId);
            }
            else {
                this.showError(res.message);
            }
        });
    }
    rescheduleHealthForum(rescheduleHF, health) {
        this.rescheduleData = health;
        console.log(this.rescheduleData);
        if (this.rescheduleData.eventList.length < 2) {
            this.setDate = moment__WEBPACK_IMPORTED_MODULE_3__().format("YYYY-MM-DD");
            this.modalContent = '';
            this.rescheduleHFModal = this.modalService.open(rescheduleHF, {
                windowClass: 'rescheduleHF',
            });
            this.rescheduleHFForms();
        }
        else {
            this.showError('HF cannot be rescheduled');
            return;
        }
    }
    rescheduleHFModalDismiss() {
        this.rescheduleHFModal.close();
    }
    rescheduleHFForms() {
        this.rescheduleHFForm = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    get r() {
        return this.rescheduleHFForm.controls;
    }
    rescheduleSave() {
        let flag = true;
        if (!this.rescheduleHFForm.value.date) {
            flag = false;
        }
        else if (!this.rescheduleHFForm.value.comment) {
            flag = false;
        }
        return flag;
    }
    saveRescheduled() {
        console.log(this.rescheduleData.scheduleDetails.time);
        var text = this.rescheduleData.scheduleDetails.time;
        var tt = [];
        text.trim().replace(" ", ":").trim().split(":").forEach(e => {
            if (e.length < 2) {
                tt.push("0" + e);
            }
            else {
                tt.push(e);
            }
            console.log(tt);
        });
        let req = {
            dataAccessDTO: this.httpService.dataAccessDTO, healthForumMasterId: this.rescheduleData.healthForumMasterId,
            date: this.rescheduleHFForm.value.date,
            scheduleStartHour: tt[0],
            scheduleStartMinute: tt[1],
            amOrPm: tt[2],
            comment: this.rescheduleHFForm.value.comment
        };
        this.healthForumService.rescheduleHealthForum(req).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
                this.rescheduleHFModal.close();
                this.changeBranch(this.branchId || this.lowerRankbranchId);
            }
            else {
                this.showError(res.message);
            }
        });
    }
    approveARescheduleHealthForum(health) {
        console.log(health);
        let req = {
            dataAccessDTO: this.httpService.dataAccessDTO, healthForumMasterId: health.healthForumMasterId
        };
        this.healthForumService.approveARescheduleHealthForum(req).subscribe((res) => {
            console.log(res);
            if (res.status == true) {
                this.showSuccess(res.message);
            }
            else {
                this.showError(res.message);
            }
        });
    }
}
HealthForumComponent.ɵfac = function HealthForumComponent_Factory(t) { return new (t || HealthForumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_health_forum_service__WEBPACK_IMPORTED_MODULE_8__["HealthForumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_12__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmationDialogService"])); };
HealthForumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HealthForumComponent, selectors: [["app-health-forum"]], decls: 74, vars: 21, consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "search by staff or ss name ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "width", "4%"], [2, "width", "12%"], [2, "width", "19%"], [2, "width", "22%"], [2, "width", "8%"], ["style", "width: 8%;", 4, "ngIf"], [2, "width", "11%"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["HFeventDetails", ""], ["ViewFamilyDetails", ""], ["createHF", ""], ["createEditHFEvent", ""], ["rescheduleHF", ""], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], ["title", "Create Health Forum", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#a8d7d7", "font-size", "30px", "margin-top", "5px"], ["title", "Create Health Forum", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "30px", "margin-top", "5px", 3, "click"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [1, "popover__wrapper"], [1, "popover__title", 2, "color", "#0d6efd"], [1, "popover__content"], [2, "word-wrap", "break-word", "text-align", "left"], [1, "btn-link", 2, "width", "8%", "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], ["class", " btn-link", "style", "width: 8%; color:#0d6efd; text-decoration: none; cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "fas fa-edit", "title", "Edit Health Forum", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Health Forum", 3, "click", 4, "ngIf"], ["class", "fas fa-check-circle", "title", "Approve Health Forum", 3, "click", 4, "ngIf"], ["class", "fas fa-check-circle", "title", "Approve Reschedule Health Forum", 3, "click", 4, "ngIf"], ["class", "fas fa-calendar", "title", "Reschedule Health Forum", 3, "click", 4, "ngIf"], ["title", "Edit Health Forum", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Health Forum", 1, "fas", "fa-trash", 3, "click"], ["title", "Approve Health Forum", 1, "fas", "fa-check-circle", 3, "click"], ["title", "Approve Reschedule Health Forum", 1, "fas", "fa-check-circle", 3, "click"], ["title", "Reschedule Health Forum", 1, "fas", "fa-calendar", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], ["class", "fas fa-plus-circle", "style", "cursor: pointer; color: #499; font-size: 25px; margin-top: -39px;margin-left: -239px;", "title", "Create Health Forum Event", 3, "click", 4, "ngIf"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-25px", 3, "click"], [1, "modal-body"], [2, "width", "10%"], [2, "width", "15%"], [2, "text-align", "center"], ["title", "Create Health Forum Event", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "25px", "margin-top", "-39px", "margin-left", "-239px", 3, "click"], [1, "btn-link", 2, "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], ["style", "word-wrap: break-word; text-align: left;", 4, "ngFor", "ngForOf"], ["class", "fas fa-edit", "title", "Edit Health Forum Event", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Health Forum Event", 3, "click", 4, "ngIf"], ["title", "Edit Health Forum Event", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Health Forum Event", 1, "fas", "fa-trash", 3, "click"], [2, "width", "13%"], [1, "modal-contents"], ["class", "dialog-title", 4, "ngIf"], [1, "modal-body", 2, "height", "40vh", "overflow-y", "auto"], ["for", "date"], ["type", "date", "formControlName", "date", 1, "form-control", 3, "min", "ngClass", "keydown", "change"], ["for", "staffName"], ["formControlName", "staffName", "id", "staffName", 1, "form-select", 3, "ngClass", "change"], ["for", "ssName"], ["formControlName", "ssName", "id", "ssName", 1, "form-select", 3, "change"], ["for", "area"], ["placeholder", "-- Select Area(s) --", "formControlName", "areaList", 1, "form-control", "dropdown-multiselect__caret", 3, "settings", "data", "ngClass", "onSelect", "onSelectAll", "onDeSelect", "onDeSelectAll"], ["for", "topic"], ["formControlName", "topic", "id", "topic", 1, "form-select", 3, "ngClass"], ["for", "event"], ["formControlName", "event", "id", "event", 1, "form-select", 3, "ngClass"], ["value", "1"], ["value", "2"], ["for", "startTime"], [1, "input-group", "input-group-sm", "mb-3"], ["id", "inputGroup-sizing-sm", "formControlName", "hour", "id", "hour", 1, "form-select", 2, "width", "9rem", 3, "ngClass"], ["id", "inputGroup-sizing-sm", "formControlName", "minute", "id", "minute", 1, "form-select", 2, "width", "9rem", 3, "ngClass"], ["id", "inputGroup-sizing-sm", "formControlName", "meridiem", "id", "meridiem", 1, "form-select", 2, "width", "9rem", 3, "ngClass"], ["value", "AM"], ["value", "PM"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "dialog-title"], [1, "modal-conten"], [1, "modal-body", 2, "height", "62vh", "overflow-y", "auto"], ["for", ""], ["id", "inputGroup-sizing-sm", "formControlName", "startHour", "id", "startHour", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "startMin", "id", "startMin", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "startMeridiem", "id", "startMeridiem", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "endHour", "id", "endHour", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "endMin", "id", "endMin", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "endMeridiem", "id", "endMeridiem", 1, "input-group-text", 2, "width", "24%"], [1, "card", 2, "width", "540px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "150px", "margin-left", "15px"], [1, "card-body"], [1, "form-group", "col-md", 2, "margin-top", "15px"], ["for", "staffPresent"], [1, "form-check-inline"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "staffPresent", 1, "form-check-input", 3, "change"], ["for", "", 1, "form-check-label"], ["type", "radio", "id", "no", "value", "N", "formControlName", "staffPresent", 1, "form-check-input", 3, "change"], ["for", "ssPresent"], ["type", "radio", "id", "yess", "value", "Y", "formControlName", "ssPresent", 1, "form-check-input", 3, "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "ssPresent", 1, "form-check-input", 3, "change"], ["class", "form-group col-md", "style", "margin-top: 15px;", 4, "ngIf"], [1, "card", 2, "width", "690px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "240px", "margin-left", "-75px"], [1, "card-body", 2, "height", "40vh"], [1, "card-title"], ["id", "circle", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "float", "right", "margin-top", "-45px", 3, "click"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table"], ["id", "header_fixed"], [2, "width", "10rem"], [2, "width", "3rem"], ["id", "tbody", 2, "text-align", "center"], [1, "form-group", "col-md-6"], [1, "card", 2, "width", "540px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "auto", "margin-left", "15px"], [1, "form-group", "col-md-8"], ["for", "lastMonTopic"], [1, "form-group", "col-md-4"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "lastMonTopic", 1, "form-check-input"], ["type", "radio", "id", "no", "value", "N", "formControlName", "lastMonTopic", 1, "form-check-input"], ["for", "thisMonTopic"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "thisMonTopic", 1, "form-check-input"], ["type", "radio", "id", "no", "value", "N", "formControlName", "thisMonTopic", 1, "form-check-input"], ["for", "seasonalDiscussion"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "seasonalDiscussion", 1, "form-check-input", 3, "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "seasonalDiscussion", 1, "form-check-input", 3, "change"], [1, "col-md-6"], [1, "form-select", 3, "change"], ["value", "selectedFam"], ["value", "unselectedFam"], ["animationDuration", "500ms", 3, "selectedTabChange"], ["for", "eventConduction"], ["formControlName", "eventConduction", "disabled", "", "id", "eventConduction", 1, "form-select", 3, "ngClass"], ["value", "STAFF"], ["value", "SS"], ["formControlName", "eventConduction", "id", "eventConduction", 1, "form-select", 3, "ngClass"], ["type", "text", "maxlength", "20", "placeholder", "e.g. xyz", 1, "form-control", 2, "width", "16rem", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange"], ["type", "text", "maxlength", "20", "placeholder", "e.g. Engineer", 1, "form-control", 2, "width", "16rem", "margin-left", "75px", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange"], ["type", "button", 1, "btn", "btn-remove", 2, "width", "2rem", 3, "click"], [1, "fas", "fa-minus-circle"], [1, "scheduler-border", 2, "height", "190px"], [1, "scheduler-border"], ["id", "table_wrapper", 1, "table", "table-striped"], [2, "width", "5%"], [2, "width", "25%"], ["id", "tbodyDisease", 2, "text-align", "center"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["mat-tab-label", "", "style", "margin-left: 5px;"], ["matTabContent", ""], ["class", "card", "style", "width: 670px;background: whitesmoke; border: none;border-radius: 14px;height: auto; margin-bottom:10px", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "670px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "auto", "margin-bottom", "10px"], [1, "col-md-5"], [1, "col-md-1"], ["title", "Unselect Family Head Present", 1, "fas", "fa-trash", 3, "click"], [1, "col-md-4"], [1, "col-md-3"], ["class", "form-check-input", "type", "radio", "id", "yes", "value", "Y", "checked", "", 3, "name", "change", 4, "ngIf"], ["class", "form-check-input", "type", "radio", "id", "yes", "value", "Y", 3, "name", "change", 4, "ngIf"], ["class", "form-check-inline", 4, "ngIf"], ["type", "radio", "id", "yes", "value", "Y", "checked", "", 1, "form-check-input", 3, "name", "change"], ["type", "radio", "id", "yes", "value", "Y", 1, "form-check-input", 3, "name", "change"], ["class", "form-check-input", "type", "radio", "id", "famHeadNo", "value", "N", "disabled", "", 3, "name", "change", 4, "ngIf"], ["type", "radio", "id", "famHeadNo", "value", "N", "disabled", "", 1, "form-check-input", 3, "name", "change"], ["class", "form-check-input", "type", "radio", "id", "famHeadNo", "value", "N", "checked", "", 3, "name", "change", 4, "ngIf"], ["class", "form-check-input", "type", "radio", "id", "famHeadNo", "value", "N", 3, "name", "change", 4, "ngIf"], ["type", "radio", "id", "famHeadNo", "value", "N", "checked", "", 1, "form-check-input", 3, "name", "change"], ["type", "radio", "id", "famHeadNo", "value", "N", 1, "form-check-input", 3, "name", "change"], [2, "width", "2%"], [2, "width", "31%"], [2, "width", "7%"], ["id", "tbodyy", 2, "text-align", "center"], ["style", "width: 7%;", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", "disabled", "", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "disabled", "", 3, "change", 4, "ngIf"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", "disabled", "", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "disabled", "", 1, "form-check-input", 3, "change"], [1, "modal-HF"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-18px", 3, "click"], [1, "modal-body", 2, "height", "35vh", "overflow-y", "auto"], ["for", "comment"], ["rows", "4", "cols", "50", "formControlName", "comment", 1, "form-control", 2, "resize", "none", "height", "5em", 3, "ngClass"]], template: function HealthForumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Health Forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HealthForumComponent_Template_input_ngModelChange_13_listener($event) { return ctx.registerSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HealthForumComponent_div_16_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HealthForumComponent_div_17_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HealthForumComponent_div_19_Template, 21, 12, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Sl.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Rescheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Staff Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "SS Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Village");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, HealthForumComponent_th_48_Template, 4, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Total Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Attended");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Total Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Attended");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, HealthForumComponent_tr_60_Template, 31, 15, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "healthForumFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "pagination-controls", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function HealthForumComponent_Template_pagination_controls_pageChange_63_listener($event) { return ctx.p = $event; })("pageBoundsCorrection", function HealthForumComponent_Template_pagination_controls_pageBoundsCorrection_63_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, HealthForumComponent_ng_template_64_Template, 50, 2, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, HealthForumComponent_ng_template_66_Template, 33, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, HealthForumComponent_ng_template_68_Template, 95, 52, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, HealthForumComponent_ng_template_70_Template, 193, 18, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, HealthForumComponent_ng_template_72_Template, 29, 13, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.registerSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.healthForumForm.value.branch || !ctx.createMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.healthForumForm.value.branch && ctx.createMode || ctx.lowerRankbranchId && ctx.createMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.healthForumForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.eventViewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](61, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](62, 12, ctx.viewHealthForumsOfBranch, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](15, _c2, ctx.registerSearch, ctx.registerSearch, ctx.registerSearch)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c3, ctx.p)));
    } }, directives: [_shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabContent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["PaginatePipe"], _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_20__["healthForumFilterPipe"]], styles: [".popover__wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translate(0, -20px);\r\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\r\n}\r\n\r\n.popover__title[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #499;\r\n  text-align: center;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 200px !important;\r\n  transform: translate(0, 15px) !important;\r\n  background-color: white;\r\n  color: #828BB2;\r\n  box-shadow: 3px 4px 5px 3px rgba(117, 111, 117, 1);\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: \"\";\r\n  left: calc(10% - 10px);\r\n  top: -10px;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #bfbfbf transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  border: 0px solid transparent;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  background: #499;\r\n  padding: 12px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  width: 1080px;\r\n  margin-left: -275px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-HF[_ngcontent-%COMP%] {\r\n  height: 360px;\r\n  width: 498px;\r\n}\r\n\r\n.modal-contents[_ngcontent-%COMP%] {\r\n  height: 450px;\r\n  width: 490px;\r\n}\r\n\r\n.modal-conten[_ngcontent-%COMP%] {\r\n  height: 570px;\r\n  width: 1300px;\r\n  margin-left: -400px;\r\n  background: white;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 4px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child) > [_ngcontent-%COMP%]:last-child > *[_ngcontent-%COMP%] {\r\n  border-bottom-color: white;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 390px;\r\n  margin-top: -8px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 690px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 55%;\r\n  margin-left: 600px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 57%;\r\n  margin-left: 770px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 200px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 74px;\r\n  margin-bottom: 11px;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n  margin-left: -15px;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\nng-multiselect-dropdown[_ngcontent-%COMP%] {\r\n  padding: 0px !important;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 198px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n.fa-check-circle[_ngcontent-%COMP%]:hover {\r\n  color: darkgreen !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.fa-calendar[_ngcontent-%COMP%]:hover {\r\n  color: midnightblue !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\r\n  margin-left: 2px;\r\n  border-top-left-radius: 7px;\r\n  border-bottom-left-radius: 7px;\r\n  border-top-right-radius: 7px;\r\n  border-bottom-right-radius: 7px;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]:not(.has-validation) > .dropdown-toggle[_ngcontent-%COMP%]:nth-last-child(n+3), .input-group[_ngcontent-%COMP%]:not(.has-validation) > [_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {\r\n  border-top-right-radius: 7px;\r\n  border-bottom-right-radius: 7px;\r\n  border-top-left-radius: 7px;\r\n  border-bottom-left-radius: 7px;\r\n}\r\n\r\n#circle[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 20px;\r\n}\r\n\r\n.fa-minus-circle[_ngcontent-%COMP%] {\r\n  color: red !important;\r\n  font-size: 20px;\r\n  margin-left: 65px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: static;\r\n  top: 0;\r\n  z-index: 999;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\n#tbody[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 120px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#tbodyy[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 65px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n  padding: 4px;\r\n}\r\n\r\n#tbodyDisease[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 116px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n  .mat-tab-header {\r\n  margin-left: -75px;\r\n}\r\n\r\n\r\n\r\n  .mat-tab-body-wrapper {\r\n  position: relative;\r\n  overflow-y: auto;\r\n  height: 280px;\r\n  display: flex;\r\n  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);\r\n  margin-left: -75px;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: -12px 0 1.5em 0 !important;\r\n  height: 140px;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 200px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1mb3J1bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5REFBeUQ7RUFDekQseUJBQXlCO0VBQ3pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYix1REFBdUQ7RUFDdkQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QyxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6ImhlYWx0aC1mb3J1bS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcG92ZXJfX3dyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fd3JhcHBlcjpob3ZlciAucG9wb3Zlcl9fY29udGVudCB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgLTAuMDIsIDAuMiwgMC45Nyk7XHJcbn1cclxuXHJcbi5wb3BvdmVyX190aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fY29udGVudCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDE1cHgpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICM4MjhCQjI7XHJcbiAgYm94LXNoYWRvdzogM3B4IDRweCA1cHggM3B4IHJnYmEoMTE3LCAxMTEsIDExNywgMSk7XHJcbn1cclxuXHJcbi5wb3BvdmVyX19jb250ZW50IGxpIHtcclxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxufVxyXG5cclxuLnBvcG92ZXJfX2NvbnRlbnQ6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBsZWZ0OiBjYWxjKDEwJSAtIDEwcHgpO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYmZiZmJmIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG59XHJcblxyXG4uUUFfdGFibGUgLnRhYmxlIHRoZWFkIHRoIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgd2lkdGg6IDEwODBweDtcclxuICBtYXJnaW4tbGVmdDogLTI3NXB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbC1IRiB7XHJcbiAgaGVpZ2h0OiAzNjBweDtcclxuICB3aWR0aDogNDk4cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50cyB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICB3aWR0aDogNDkwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW4ge1xyXG4gIGhlaWdodDogNTcwcHg7XHJcbiAgd2lkdGg6IDEzMDBweDtcclxuICBtYXJnaW4tbGVmdDogLTQwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uUUFfdGFibGUgLnRhYmxlIHRib2R5IHRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGJvZHkgdGQge1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLnRhYmxlPjpub3QoOmxhc3QtY2hpbGQpPjpsYXN0LWNoaWxkPioge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyIGJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzOTBweDtcclxuICBtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDY5MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXIgaW5wdXQge1xyXG4gIHdpZHRoOiA1NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGlucHV0IHtcclxuICB3aWR0aDogNTclO1xyXG4gIG1hcmdpbi1sZWZ0OiA3NzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZGFhYjg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXIgYnV0dG9uIGkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMiAuc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gYnV0dG9uIGkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBtYXJnaW4tbGVmdDogNzRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG59XHJcblxyXG4uZGlhbG9nLXRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xNHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMDAwMDtcclxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMDAwO1xyXG59XHJcblxyXG5uZy1tdWx0aXNlbGVjdC1kcm9wZG93biB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxLjRlbSAxLjRlbSAxLjRlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAwIDEuNWVtIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB3aWR0aDogMTk4cHg7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mYS1jaGVjay1jaXJjbGU6aG92ZXIge1xyXG4gIGNvbG9yOiBkYXJrZ3JlZW4gIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmZhLWNhbGVuZGFyOmhvdmVyIHtcclxuICBjb2xvcjogbWlkbmlnaHRibHVlICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cD46bm90KDpmaXJzdC1jaGlsZCk6bm90KC5kcm9wZG93bi1tZW51KTpub3QoLnZhbGlkLXRvb2x0aXApOm5vdCgudmFsaWQtZmVlZGJhY2spOm5vdCguaW52YWxpZC10b29sdGlwKTpub3QoLmludmFsaWQtZmVlZGJhY2spIHtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXA6bm90KC5oYXMtdmFsaWRhdGlvbik+LmRyb3Bkb3duLXRvZ2dsZTpudGgtbGFzdC1jaGlsZChuKzMpLFxyXG4uaW5wdXQtZ3JvdXA6bm90KC5oYXMtdmFsaWRhdGlvbik+Om5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpOm5vdCguZHJvcGRvd24tbWVudSkge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4jY2lyY2xlIHtcclxuICBjb2xvcjogIzNlNzc1OCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmZhLW1pbnVzLWNpcmNsZSB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogNjVweDtcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgLnRhYmxlIHRoZWFkIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzQ5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuI2hlYWRlcl9maXhlZCB7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG5cclxuI3Rib2R5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4jdGJvZHl5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4jdGJvZHlEaXNlYXNlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDExNnB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG50YWJsZSB0aGVhZCxcclxudGJvZHkgdHIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNzVweDtcclxufVxyXG5cclxuLyogOjpuZy1kZWVwLm1hdC10YWItZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA1NXB4O1xyXG59ICovXHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwMG1zIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcclxuICBtYXJnaW4tbGVmdDogLTc1cHg7XHJcbn1cclxuXHJcbmZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxLjRlbSAxLjRlbSAxLjRlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogLTEycHggMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HealthForumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-health-forum',
                templateUrl: './health-forum.component.html',
                styleUrls: ['./health-forum.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] }, { type: _health_forum_service__WEBPACK_IMPORTED_MODULE_8__["HealthForumService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalConfig"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }, { type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_12__["ValidationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] }, { type: _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmationDialogService"] }]; }, null); })();


/***/ }),

/***/ "7Odh":
/*!******************************************************************!*\
  !*** ./src/app/modules/shared/sidebar/event-forum-seach.pipe.ts ***!
  \******************************************************************/
/*! exports provided: healthForumeventFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthForumeventFilterPipe", function() { return healthForumeventFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class healthForumeventFilterPipe {
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
healthForumeventFilterPipe.ɵfac = function healthForumeventFilterPipe_Factory(t) { return new (t || healthForumeventFilterPipe)(); };
healthForumeventFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "eventFilter", type: healthForumeventFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](healthForumeventFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'eventFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "I7C7":
/*!**************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum.service.ts ***!
  \**************************************************************/
/*! exports provided: HealthForumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthForumService", function() { return HealthForumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class HealthForumService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    listOfBranchesOfARegion(obj) {
        return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
    }
    viewHealthForumsOfABranch(obj) {
        return this.http.post(`${this.baseURL}healthForum/viewHealthForumsOfABranch`, obj);
    }
    viewHealthForumsOfAEvent(obj) {
        return this.http.post(`${this.baseURL}healthForum/viewHealthForumEventDetails`, obj);
    }
    getAllStaffAndTheirSSOfABranch(obj) {
        return this.http.post(`${this.baseURL}swasthyasahayika/getAllStaffAndTheirSSOfABranch`, obj);
    }
    getTopicListAndAreasOfStaffAndOrSS(obj) {
        return this.http.post(`${this.baseURL}healthForum/getHealthForumTopicListAndAreasOfStaffAndOrSS`, obj);
    }
    HFSaveOrUpdate(obj) {
        return this.http.post(`${this.baseURL}healthForum/saveOrUpdate`, obj);
    }
    HFApprove(obj) {
        return this.http.post(`${this.baseURL}healthForum/approve`, obj);
    }
    HForumEventPrerequisite(obj) {
        return this.http.post(`${this.baseURL}healthForum/healthForumEventPrerequisite`, obj);
    }
    getListOfFamsOfAVillForHFEvent(obj) {
        return this.http.post(`${this.baseURL}healthForum/getListOfFamiliesOfAVillageForHealthForum`, obj);
    }
    saveOrUpdateHealthForumEvent(obj) {
        return this.http.post(`${this.baseURL}healthForum/saveOrUpdateHealthForumEvent`, obj);
    }
    rescheduleHealthForum(obj) {
        return this.http.post(`${this.baseURL}healthForum/rescheduleHealthForum`, obj);
    }
    approveARescheduleHealthForum(obj) {
        return this.http.post(`${this.baseURL}healthForum/approveARescheduleHealthForum`, obj);
    }
}
HealthForumService.ɵfac = function HealthForumService_Factory(t) { return new (t || HealthForumService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HealthForumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HealthForumService, factory: HealthForumService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthForumService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "RFxm":
/*!********************************************************************!*\
  !*** ./src/app/modules/shared/sidebar/health-forum-search.pipe.ts ***!
  \********************************************************************/
/*! exports provided: healthForumFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthForumFilterPipe", function() { return healthForumFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class healthForumFilterPipe {
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
healthForumFilterPipe.ɵfac = function healthForumFilterPipe_Factory(t) { return new (t || healthForumFilterPipe)(); };
healthForumFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "healthForumFilter", type: healthForumFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](healthForumFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'healthForumFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "hpym":
/*!*************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum.module.ts ***!
  \*************************************************************/
/*! exports provided: HealthForumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthForumModule", function() { return HealthForumModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _health_forum_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./health-forum-routing.module */ "yNho");
/* harmony import */ var _health_forum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health-forum.component */ "5xUQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/sidebar/health-forum-search.pipe */ "RFxm");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/loader/loader.module */ "iFG+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./health-forum-angular-mat-modal/health-forum-angular-mat-modal.component */ "ySC2");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _shared_sidebar_event_forum_seach_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/sidebar/event-forum-seach.pipe */ "7Odh");
















class HealthForumModule {
}
HealthForumModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HealthForumModule });
HealthForumModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HealthForumModule_Factory(t) { return new (t || HealthForumModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _health_forum_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthForumRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"].forRoot(),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HealthForumModule, { declarations: [_health_forum_component__WEBPACK_IMPORTED_MODULE_3__["HealthForumComponent"], _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_6__["healthForumFilterPipe"], _shared_sidebar_event_forum_seach_pipe__WEBPACK_IMPORTED_MODULE_13__["healthForumeventFilterPipe"], _health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_11__["HealthForumAngularMatModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _health_forum_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthForumRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthForumModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_health_forum_component__WEBPACK_IMPORTED_MODULE_3__["HealthForumComponent"], _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_6__["healthForumFilterPipe"], _shared_sidebar_event_forum_seach_pipe__WEBPACK_IMPORTED_MODULE_13__["healthForumeventFilterPipe"], _health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_11__["HealthForumAngularMatModalComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _health_forum_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthForumRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"].forRoot(),
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "yNho":
/*!*********************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: HealthForumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthForumRoutingModule", function() { return HealthForumRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _health_forum_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./health-forum.component */ "5xUQ");





const routes = [{ path: '', component: _health_forum_component__WEBPACK_IMPORTED_MODULE_2__["HealthForumComponent"] }];
class HealthForumRoutingModule {
}
HealthForumRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HealthForumRoutingModule });
HealthForumRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HealthForumRoutingModule_Factory(t) { return new (t || HealthForumRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HealthForumRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthForumRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ySC2":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum-angular-mat-modal/health-forum-angular-mat-modal.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: HealthForumAngularMatModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthForumAngularMatModalComponent", function() { return HealthForumAngularMatModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HealthForumAngularMatModalComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.villageName);
} }
class HealthForumAngularMatModalComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.lists = [];
        dialogRef.disableClose = true;
    }
    ngOnInit() {
        console.log(this.data.villLists);
    }
    closeDialog() {
        this.dialogRef.close();
    }
}
HealthForumAngularMatModalComponent.ɵfac = function HealthForumAngularMatModalComponent_Factory(t) { return new (t || HealthForumAngularMatModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
HealthForumAngularMatModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthForumAngularMatModalComponent, selectors: [["app-health-forum-angular-mat-modal"]], decls: 15, vars: 1, consts: [["mat-dialog-content", ""], [1, "fas", "fa-times", 2, "float", "right", 3, "click"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header_fixed", 2, "text-align", "center"], [2, "width", "5%"], [2, "width", "20%"], [4, "ngFor", "ngForOf"]], template: function HealthForumAngularMatModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HealthForumAngularMatModalComponent_Template_i_click_1_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sl. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Village Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HealthForumAngularMatModalComponent_tr_14_Template, 5, 2, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.villLists);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n  background-color: #499;\r\n  color: #FFFFFF;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 165px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 6px;\r\n}\r\n\r\n  .mat-dialog-container {\r\n  padding: 12px 17px;\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1mb3J1bS1hbmd1bGFyLW1hdC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJoZWFsdGgtZm9ydW0tYW5ndWxhci1tYXQtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI2hlYWRlcl9maXhlZCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbn1cclxuXHJcbnRhYmxlIHRib2R5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDE2NXB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG50YWJsZSB0aGVhZCwgdGJvZHkgdHIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbi5RQV90YWJsZSAudGFibGUgdGJvZHkgdGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEycHggMTdweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthForumAngularMatModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-health-forum-angular-mat-modal',
                templateUrl: './health-forum-angular-mat-modal.component.html',
                styleUrls: ['./health-forum-angular-mat-modal.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-health-forum-health-forum-module.js.map