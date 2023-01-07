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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/validation.service */ "yjnX");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ "aQtA");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/loader/loader.component */ "G/xV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/sidebar/health-forum-search.pipe */ "RFxm");






















function HealthForumComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_div_17_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](72); return ctx_r12.createHealthForum(_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_div_19_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", region_r18.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", region_r18.regionName, " ");
} }
function HealthForumComponent_div_19_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_div_19_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_div_19_div_10_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.l.region.errors.required);
} }
function HealthForumComponent_div_19_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", branch_r20.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", branch_r20.branchName, " ");
} }
function HealthForumComponent_div_19_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_div_19_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_div_19_div_20_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.l.branch.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function HealthForumComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_div_19_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HealthForumComponent_div_19_option_9_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HealthForumComponent_div_19_div_10_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_div_19_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.changeBranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HealthForumComponent_div_19_option_19_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HealthForumComponent_div_19_div_20_Template, 2, 1, "div", 44);
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
function HealthForumComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_tr_63_Template_td_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const health_r25 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.openDialog(health_r25.villageList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_tr_63_Template_td_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const health_r25 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](68); return ctx_r29.viewHFEventDetails(_r4, health_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_tr_63_Template_i_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const health_r25 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](72); return ctx_r30.editHealthForum(_r8, health_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_tr_63_Template_i_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const health_r25 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.deleteHealthForum(health_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_tr_63_Template_i_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const health_r25 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.approveHealthForum(health_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const health_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r26 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", health_r25.scheduleDetails.date.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", health_r25.rescheduleDetails ? health_r25.rescheduleDetails.rescheduleToDate.split("-").reverse().join("-") : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", health_r25.staffFirstName, " ", health_r25.staffLastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](health_r25.ssName ? health_r25.ssName : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" * ", health_r25.topicDetails.topicName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](health_r25.forumFamilyPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](health_r25.forumAdolescentGirlPresent + health_r25.forumFamilyHeadPresent);
} }
function HealthForumComponent_ng_template_67_tr_47_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const disease_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", i_r38 + 1, ". ", disease_r37.diseasesName, " ");
} }
function HealthForumComponent_ng_template_67_tr_47_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_67_tr_47_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const event_r34 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](70); return ctx_r39.viewFamilyAttendedDetails(_r6, event_r34); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HealthForumComponent_ng_template_67_tr_47_li_22_Template, 2, 2, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_67_tr_47_Template_i_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const event_r34 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](74); return ctx_r41.editHFEvents(_r10, event_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_67_tr_47_Template_i_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r42.deleteHFEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r34 = ctx.$implicit;
    const i_r35 = ctx.index;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r35 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r34.createdOn.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", event_r34.forumEventFamilyPresent, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", event_r34.forumEventFamilyHeadPresent + event_r34.forumEventAdolescentGirlPresent, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r34.eventConductedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r33.viewForumList.topicDetails.topicName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", event_r34.seasonalDiseaseDiscussedList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", event_r34.startHour, ":", event_r34.startMinute, " ", event_r34.startAmOrPm, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", event_r34.endHour, ":", event_r34.endMinute, " ", event_r34.endAmOrPm, " ");
} }
function HealthForumComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Event Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_67_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.viewHFEventModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Family View/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Attended");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Attended");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Conducted By");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Topic Discussed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Seasonal Disease");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Discussed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tbody", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, HealthForumComponent_ng_template_67_tr_47_Template, 30, 13, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.viewEventList);
} }
function HealthForumComponent_ng_template_69_tbody_32_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 70);
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
    const fam_r48 = ctx.$implicit;
    const fami_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fam_r48.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", fam_r48.familyFirstName, " ", fam_r48.familyMiddleName, " ", fam_r48.familyLastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fami_r46.villageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolateV"]([" ", fam_r48.hasChildPresentInPem == "Y" && fam_r48.presentInLactatingMother == "Y" && fam_r48.presentInPregnantWoman == "Y" && fam_r48.has2to5yearsOldChildren == "Y" ? "PEM, LM, PW, 2-5 yr" : "", " ", fam_r48.hasChildPresentInPem == "Y" && fam_r48.presentInLactatingMother == "Y" && fam_r48.presentInPregnantWoman.includes("N") && fam_r48.has2to5yearsOldChildren == "Y" ? "PEM, LM, 2-5 yr" : "", " ", fam_r48.hasChildPresentInPem == "Y" && fam_r48.presentInLactatingMother.includes("N") && fam_r48.presentInPregnantWoman.includes("N") && fam_r48.has2to5yearsOldChildren.includes("N") ? "PEM" : "", " ", fam_r48.hasChildPresentInPem.includes("N") && fam_r48.presentInLactatingMother.includes("N") && fam_r48.presentInPregnantWoman.includes("N") && fam_r48.has2to5yearsOldChildren.includes("N") ? "" : "", " ", fam_r48.hasChildPresentInPem.includes("N") && fam_r48.presentInLactatingMother == "Y" && fam_r48.presentInPregnantWoman == "Y" && fam_r48.has2to5yearsOldChildren == "Y" ? "LM, PW, 2-5 yr" : "", " ", fam_r48.hasChildPresentInPem.includes("N") && fam_r48.presentInLactatingMother.includes("N") && fam_r48.presentInPregnantWoman == "Y" && fam_r48.has2to5yearsOldChildren.includes("N") ? "PW" : "", " ", fam_r48.hasChildPresentInPem.includes("N") && fam_r48.presentInLactatingMother == "Y" && fam_r48.presentInPregnantWoman.includes("N") && fam_r48.has2to5yearsOldChildren.includes("N") ? "LM" : "", " ", fam_r48.hasChildPresentInPem == "Y" && fam_r48.presentInLactatingMother.includes("N") && fam_r48.presentInPregnantWoman == "Y" && fam_r48.has2to5yearsOldChildren == "Y" ? "PEM, PW, 2-5 yr" : "", " ", fam_r48.hasChildPresentInPem == "Y" && fam_r48.presentInLactatingMother == "Y" && fam_r48.presentInPregnantWoman == "Y" && fam_r48.has2to5yearsOldChildren.includes("N") ? "PEM, LM, PW" : "", " ", fam_r48.hasChildPresentInPem == "Y" && fam_r48.presentInLactatingMother == "Y" && fam_r48.presentInPregnantWoman.includes("N") && fam_r48.has2to5yearsOldChildren.includes("N") ? "PEM, LM" : "", " ", fam_r48.hasChildPresentInPem.includes("N") && fam_r48.presentInLactatingMother.includes("N") && fam_r48.presentInPregnantWoman == "Y" && fam_r48.has2to5yearsOldChildren == "Y" ? "PW, 2-5 yr" : "", " ", fam_r48.hasChildPresentInPem.includes("N") && fam_r48.presentInLactatingMother.includes("N") && fam_r48.presentInPregnantWoman.includes("N") && fam_r48.has2to5yearsOldChildren == "Y" ? "2-5 yr" : "", " ", fam_r48.hasChildPresentInPem.includes("N") && fam_r48.presentInLactatingMother == "Y" && fam_r48.presentInPregnantWoman == "Y" && fam_r48.has2to5yearsOldChildren.includes("N") ? "LM, PW" : "", " ", fam_r48.hasChildPresentInPem.includes("N") && fam_r48.presentInLactatingMother == "Y" && fam_r48.presentInPregnantWoman.includes("N") && fam_r48.has2to5yearsOldChildren == "Y" ? "LM, 2-5 yr" : "", " ", fam_r48.hasChildPresentInPem == "Y" && fam_r48.presentInLactatingMother.includes("N") && fam_r48.presentInPregnantWoman == "Y" && fam_r48.has2to5yearsOldChildren.includes("N") ? "PEM, PW" : "", " ", fam_r48.hasChildPresentInPem == "Y" && fam_r48.presentInLactatingMother.includes("N") && fam_r48.presentInPregnantWoman.includes("N") && fam_r48.has2to5yearsOldChildren == "Y" ? "PEM, 2-5 yr" : "", " "]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fam_r48.family_head_present);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fam_r48.hasAdolescentGirlChildren);
} }
function HealthForumComponent_ng_template_69_tbody_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_69_tbody_32_tr_1_Template, 13, 23, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fami_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", fami_r46.familyList);
} }
function HealthForumComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Family Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_69_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r51.viewFamilyModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 63);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Family Head Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 70);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, HealthForumComponent_ng_template_69_tbody_32_Template, 2, 1, "tbody", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.familyDetails);
} }
function HealthForumComponent_ng_template_71_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create Health Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_71_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit Health Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_71_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_71_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_71_div_16_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r55.c.date.errors.required);
} }
function HealthForumComponent_ng_template_71_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const staff_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", staff_r69.staffId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", staff_r69.staffFisrtName, " ", staff_r69.staffMiddleName, " ", staff_r69.staffLastName, " ");
} }
function HealthForumComponent_ng_template_71_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Staff Name selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_71_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_71_div_26_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r57.c.staffName.errors.required);
} }
function HealthForumComponent_ng_template_71_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ss_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ss_r71.ssId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ss_r71.ssName, " ");
} }
function HealthForumComponent_ng_template_71_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Area selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_71_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_71_div_40_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r59.c.areaList.errors.required);
} }
function HealthForumComponent_ng_template_71_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", topic_r73.ss_training_event_topic_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", topic_r73.ss_training_event_topic_name, " ");
} }
function HealthForumComponent_ng_template_71_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Topic selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_71_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_71_div_50_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r61.c.topic.errors.required);
} }
function HealthForumComponent_ng_template_71_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No. of Event Proposed is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_71_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_71_div_63_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r62.c.event.errors.required);
} }
function HealthForumComponent_ng_template_71_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hours_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", hours_r76.hourValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hours_r76.hourName, " ");
} }
function HealthForumComponent_ng_template_71_div_75_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_71_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_71_div_75_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r64.c.hour.errors.required);
} }
function HealthForumComponent_ng_template_71_option_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const minutes_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", minutes_r79.minuteValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", minutes_r79.minuteName, " ");
} }
function HealthForumComponent_ng_template_71_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_71_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_71_div_81_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r66.c.minute.errors.required);
} }
function HealthForumComponent_ng_template_71_div_90_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Meridiem");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_71_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_71_div_90_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r67.c.meridiem.errors.required);
} }
function HealthForumComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HealthForumComponent_ng_template_71_h2_3_Template, 2, 0, "h2", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HealthForumComponent_ng_template_71_h2_4_Template, 2, 0, "h2", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_71_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r83.createHFModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Date :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function HealthForumComponent_ng_template_71_Template_input_keydown_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r85.restrictTypeOfDate(); })("change", function HealthForumComponent_ng_template_71_Template_input_change_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r86.changeDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HealthForumComponent_ng_template_71_div_16_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Staff Name :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_71_Template_select_change_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r87.changeStaff($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "-- Select Staff Name --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HealthForumComponent_ng_template_71_option_25_Template, 2, 4, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HealthForumComponent_ng_template_71_div_26_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "SS Name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "select", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_71_Template_select_change_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r88.changeSS($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "-- Select SS Name --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HealthForumComponent_ng_template_71_option_33_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Select Multiple Area :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ng-multiselect-dropdown", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function HealthForumComponent_ng_template_71_Template_ng_multiselect_dropdown_onSelect_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r89.onItemSelect($event); })("onSelectAll", function HealthForumComponent_ng_template_71_Template_ng_multiselect_dropdown_onSelectAll_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r90.onSelectAll($event); })("onDeSelect", function HealthForumComponent_ng_template_71_Template_ng_multiselect_dropdown_onDeSelect_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r91.onItemDeSelect($event); })("onDeSelectAll", function HealthForumComponent_ng_template_71_Template_ng_multiselect_dropdown_onDeSelectAll_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r92.onItemDeSelectAll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, HealthForumComponent_ng_template_71_div_40_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Topic :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "select", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "-- Select Topic --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, HealthForumComponent_ng_template_71_option_49_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, HealthForumComponent_ng_template_71_div_50_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "No. of Event Proposed :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "select", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "-- Select Event--");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, HealthForumComponent_ng_template_71_div_63_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Schedule Start Time :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "-- HH --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, HealthForumComponent_ng_template_71_option_74_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, HealthForumComponent_ng_template_71_div_75_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "-- MM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, HealthForumComponent_ng_template_71_option_80_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, HealthForumComponent_ng_template_71_div_81_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "-- AM/PM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, HealthForumComponent_ng_template_71_div_90_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_71_Template_button_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r93.HfSaveOrUpdate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r9.editHFDetails == null ? null : ctx_r9.editHFDetails.healthForumMasterId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.editHFDetails == null ? null : ctx_r9.editHFDetails.healthForumMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r9.createHFForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r9.minDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](28, _c0, ctx_r9.c.date.invalid && ctx_r9.c.date.touched, ctx_r9.c.date.valid && (ctx_r9.c.date.dirty || ctx_r9.c.date.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.c.date.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](31, _c0, ctx_r9.c.staffName.invalid && ctx_r9.c.staffName.touched, ctx_r9.c.staffName.valid && (ctx_r9.c.staffName.dirty || ctx_r9.c.staffName.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.staffList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.c.staffName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.SSList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("settings", ctx_r9.dropdownSettings)("data", ctx_r9.areaList)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](34, _c0, ctx_r9.c.areaList.invalid && ctx_r9.c.areaList.touched, ctx_r9.c.areaList.valid && (ctx_r9.c.areaList.dirty || ctx_r9.c.areaList.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.c.areaList.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](37, _c0, ctx_r9.c.topic.invalid && ctx_r9.c.topic.touched, ctx_r9.c.topic.valid && (ctx_r9.c.topic.dirty || ctx_r9.c.topic.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.topicList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.c.topic.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](40, _c0, ctx_r9.c.event.invalid && ctx_r9.c.event.touched, ctx_r9.c.event.valid && (ctx_r9.c.event.dirty || ctx_r9.c.event.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.c.event.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](43, _c0, ctx_r9.c.hour.invalid && ctx_r9.c.hour.touched, ctx_r9.c.hour.valid && (ctx_r9.c.hour.dirty || ctx_r9.c.hour.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.hourList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.c.hour.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](46, _c0, ctx_r9.c.minute.invalid && ctx_r9.c.minute.touched, ctx_r9.c.minute.valid && (ctx_r9.c.minute.dirty || ctx_r9.c.minute.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.minuteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.c.minute.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](49, _c0, ctx_r9.c.meridiem.invalid && ctx_r9.c.meridiem.touched, ctx_r9.c.meridiem.valid && (ctx_r9.c.meridiem.dirty || ctx_r9.c.meridiem.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.c.meridiem.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r9.saveIsDisabled());
} }
function HealthForumComponent_ng_template_73_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hours_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", hours_r102.hourValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hours_r102.hourName, " ");
} }
function HealthForumComponent_ng_template_73_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const minutes_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", minutes_r104.minuteValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", minutes_r104.minuteName, " ");
} }
function HealthForumComponent_ng_template_73_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hours_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", hours_r106.hourValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hours_r106.hourName, " ");
} }
function HealthForumComponent_ng_template_73_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const minutes_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", minutes_r108.minuteValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", minutes_r108.minuteName, " ");
} }
function HealthForumComponent_ng_template_73_div_102_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select event conduction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_73_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_73_div_102_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r98.e.eventConduction.errors.required);
} }
function HealthForumComponent_ng_template_73_tr_120_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function HealthForumComponent_ng_template_73_tr_120_Template_input_keypress_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r113.validationService.onlyAlphabetsAndSpace($event); })("keypress", function HealthForumComponent_ng_template_73_tr_120_Template_input_keypress_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r115.validationService.titleCase($event); })("ngModelChange", function HealthForumComponent_ng_template_73_tr_120_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114); const i_r112 = ctx.index; const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r116.visitorDetails.visitorInfo[i_r112].name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function HealthForumComponent_ng_template_73_tr_120_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r117.validationService.onlyAlphabetsAndSpace($event); })("keypress", function HealthForumComponent_ng_template_73_tr_120_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r118.validationService.titleCase($event); })("ngModelChange", function HealthForumComponent_ng_template_73_tr_120_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114); const i_r112 = ctx.index; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r119.visitorDetails.visitorInfo[i_r112].designation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_73_tr_120_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114); const i_r112 = ctx.index; const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r120.removeNewVisitor(i_r112); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r112 = ctx.index;
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r99.visitorDetails.visitorInfo[i_r112].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r99.visitorDetails.visitorInfo[i_r112].designation);
} }
function HealthForumComponent_ng_template_73_div_188_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please select seasonal disease name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_73_div_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_73_div_188_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r100.e.seasonalDisease.errors.required);
} }
function HealthForumComponent_ng_template_73_mat_tab_191_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const vill_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vill_r122.villageName, " ");
} }
function HealthForumComponent_ng_template_73_mat_tab_191_ng_template_2_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Family Head Present :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_mat_tab_191_ng_template_2_div_0_div_1_Template_input_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r133); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r132.changethisMonTopic($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_mat_tab_191_ng_template_2_div_0_div_1_Template_input_change_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r133); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r134.changethisMonTopic($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fami_r131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Family No. : ", fami_r131.familyNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("Name : ", fami_r131.firstName, "", fami_r131.middleName, " ", fami_r131.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Status : ", fami_r131.setStatus, "");
} }
function HealthForumComponent_ng_template_73_mat_tab_191_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_73_mat_tab_191_ng_template_2_div_0_div_1_Template, 28, 5, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fam_r128 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", fam_r128.familyList);
} }
function HealthForumComponent_ng_template_73_mat_tab_191_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HealthForumComponent_ng_template_73_mat_tab_191_ng_template_2_div_0_Template, 2, 1, "div", 29);
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r125.eventFamList);
} }
function HealthForumComponent_ng_template_73_mat_tab_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthForumComponent_ng_template_73_mat_tab_191_ng_template_1_Template, 1, 1, "ng-template", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HealthForumComponent_ng_template_73_mat_tab_191_ng_template_2_Template, 1, 1, "ng-template", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthForumComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit Health Forum Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_73_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r135.editHFEventModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Start Time :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "-- HH --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HealthForumComponent_ng_template_73_option_22_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "-- MM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HealthForumComponent_ng_template_73_option_26_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "-- AM/PM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u00A0\u00A0End Time :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "select", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "-- HH --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, HealthForumComponent_ng_template_73_option_44_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "select", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "-- MM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, HealthForumComponent_ng_template_73_option_48_Template, 2, 2, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "select", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "-- AM/PM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Staff Present :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_Template_input_change_67_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r137.changestaffPresent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_Template_input_change_72_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r138.changestaffPresent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " SS Present :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_Template_input_change_82_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r139.changessPresent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_Template_input_change_87_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r140.changessPresent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Event Conducted By :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "select", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, HealthForumComponent_ng_template_73_div_102_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h4", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "visitor Details :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_73_Template_i_click_108_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r141.addMoreVisitor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "table", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "thead", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Designation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "tbody", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](120, HealthForumComponent_ng_template_73_tr_120_Template, 8, 2, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "h4", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Discussion Topic :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " Recap Last Month's Topic :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "(Planning for better health and how to reduce health expenditures)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_Template_input_change_137_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r142.changelastMonTopic($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_Template_input_change_142_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r143.changelastMonTopic($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "label", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, " Discussion on This Month's Topic :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "(Planning for better health and how to reduce health expenditures)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_Template_input_change_155_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r144.changethisMonTopic($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_Template_input_change_160_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r145.changethisMonTopic($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, " Any Discussion on Seasonal Diseases :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_Template_input_change_171_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r146.changeseasonalDiscussion($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_Template_input_change_176_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r147.changeseasonalDiscussion($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Seasonal Disease Name :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "select", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_73_Template_select_change_185_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r148.changeseasonalDisease($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "-- Select Disease Name--");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](188, HealthForumComponent_ng_template_73_div_188_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "mat-tab-group", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function HealthForumComponent_ng_template_73_Template_mat_tab_group_selectedTabChange_190_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r149.tabChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](191, HealthForumComponent_ng_template_73_mat_tab_191_Template, 3, 0, "mat-tab", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r11.editHFEventForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.hourList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.minuteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.hourList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.minuteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c0, ctx_r11.e.eventConduction.invalid && ctx_r11.e.eventConduction.touched, ctx_r11.e.eventConduction.valid && (ctx_r11.e.eventConduction.dirty || ctx_r11.e.eventConduction.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.e.eventConduction.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.visitorDetails.visitorInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c0, ctx_r11.e.seasonalDisease.invalid && ctx_r11.e.seasonalDisease.touched, ctx_r11.e.seasonalDisease.valid && (ctx_r11.e.seasonalDisease.dirty || ctx_r11.e.seasonalDisease.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.e.seasonalDisease.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.eventVillList);
} }
const _c1 = function (a0, a1, a2) { return { staffFirstName: a0, staffLastName: a1, ssName: a2 }; };
const _c2 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class HealthForumComponent {
    constructor(fb, sidebarService, http, httpService, healthForumService, modalService, config, toaster, validationService, dialog, confirmationDialogService) {
        this.fb = fb;
        this.sidebarService = sidebarService;
        this.http = http;
        this.httpService = httpService;
        this.healthForumService = healthForumService;
        this.modalService = modalService;
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
        this.statusList = [];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngDoCheck() {
        this.searchFullscreen = this.validationService.val;
    }
    ngOnInit() {
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
                        this.villagesOfBranch = res.responseObject;
                    }
                });
                this.changeBranch(this.lowerRankbranchId);
            }
        });
        this.regionBranchHide = this.sidebarService.regionBranchHide;
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
        this.confirmationDialogService.confirm('', 'Are you sure you want to delete forum ?')
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
    editHFEvents(editHFEvent, event) {
        console.log(event, 'event');
        this.hourList = [];
        this.minuteList = [];
        this.editHFEventForms();
        this.modalContent = '';
        this.editHFEventModal = this.modalService.open(editHFEvent, {
            windowClass: 'editHFEvent',
        });
        this.hourLists();
        this.minuteLists();
        this.visitorDetails.visitorInfo.push({
            name: '',
            designation: ''
        });
        let HFPrerequisite = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            branchId: this.branchId || this.lowerRankbranchId,
            healthForumMasterId: this.viewForumList.healthForumMasterId
        };
        this.healthForumService.HForumEventPrerequisite(HFPrerequisite).subscribe((res) => {
            console.log(res.responseObject);
            this.eventDiseaseList = res.responseObject.seasonalDiseaseList;
            this.eventVillList = res.responseObject.villageList;
            console.log(this.eventDiseaseList, 'eventDiseaseList');
            console.log(this.eventVillList, 'eventVillList');
            this.eventVillList.forEach(x => {
                this.eventVillListID.push(x.villageId);
                console.log(this.eventVillListID, 'eventVillListID');
            });
            let famReq = {
                dataAccessDTO: this.httpService.dataAccessDTO,
                villageId: [80],
                healthForumMasterId: 25,
            };
            console.log(famReq);
            this.healthForumService.getListOfFamsOfAVillForHFEvent(famReq).subscribe((res) => {
                this.eventFamList = res.responseObject;
                console.log(this.eventFamList, 'eventFamList');
                this.eventFamList.forEach(x => {
                    var _a;
                    x.familyList = (_a = x.familyList) === null || _a === void 0 ? void 0 : _a.map((_a) => {
                        var { setStatus = '' } = _a, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["setStatus"]);
                        return (Object.assign({ setStatus }, rest));
                    });
                    this.setData(x.familyList);
                    // x.familyList.forEach(y => {
                    //   console.log(y.has2to5yearsoldChildren);
                    // });
                });
            });
        });
    }
    setData(familyList) {
        console.log(familyList);
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
    addMoreVisitor() {
        this.visitorDetails.visitorInfo.push({
            name: '',
            designation: ''
        });
    }
    removeNewVisitor(i) {
        this.visitorDetails.visitorInfo.splice(i, 1);
    }
    editHFEventModalDismiss() {
        this.editHFEventModal.close();
        this.visitorDetails.visitorInfo = [];
    }
    editHFEventForms() {
        this.editHFEventForm = this.fb.group({
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
            seasonalDiscussion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seasonalDisease: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    get e() {
        return this.editHFEventForm.controls;
    }
    tabChanged(tabChangeEvent) {
        this.index = tabChangeEvent.index;
    }
}
HealthForumComponent.ɵfac = function HealthForumComponent_Factory(t) { return new (t || HealthForumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_health_forum_service__WEBPACK_IMPORTED_MODULE_8__["HealthForumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_11__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationDialogService"])); };
HealthForumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HealthForumComponent, selectors: [["app-health-forum"]], decls: 75, vars: 20, consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "search by staff or ss name ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "width", "4%"], [2, "width", "12%"], [2, "width", "17%"], [2, "width", "22%"], [2, "width", "8%"], [2, "width", "11%"], [2, "width", "15%"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["HFeventDetails", ""], ["ViewFamilyDetails", ""], ["createHF", ""], ["editHFEvent", ""], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], ["title", "Create Health Forum", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#a8d7d7", "font-size", "30px", "margin-top", "5px"], ["title", "Create Health Forum", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "30px", "margin-top", "5px", 3, "click"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [1, "popover__wrapper"], [1, "popover__title", 2, "color", "#0d6efd"], [1, "popover__content"], [2, "word-wrap", "break-word", "text-align", "left"], [1, "btn-link", 2, "width", "8%", "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], ["title", "Edit Health Forum", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Health Forum", 1, "fas", "fa-trash", 3, "click"], ["title", "Approve Health Forum", 1, "fas", "fa-check-circle", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-25px", 3, "click"], [1, "modal-body"], [2, "width", "10%"], [2, "text-align", "center"], [1, "btn-link", 2, "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], ["style", "word-wrap: break-word; text-align: left;", 4, "ngFor", "ngForOf"], ["title", "Edit Health Forum Event", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Health Forum Event", 1, "fas", "fa-trash", 3, "click"], [2, "width", "13%"], [1, "modal-contents"], ["class", "dialog-title", 4, "ngIf"], [1, "modal-body", 2, "height", "40vh", "overflow-y", "auto"], ["for", "date"], ["type", "date", "formControlName", "date", 1, "form-control", 3, "min", "ngClass", "keydown", "change"], ["for", "staffName"], ["formControlName", "staffName", "id", "staffName", 1, "form-select", 3, "ngClass", "change"], ["for", "ssName"], ["formControlName", "ssName", "id", "ssName", 1, "form-select", 3, "change"], ["for", "area"], ["placeholder", "-- Select Area(s) --", "formControlName", "areaList", 1, "form-control", "dropdown-multiselect__caret", 3, "settings", "data", "ngClass", "onSelect", "onSelectAll", "onDeSelect", "onDeSelectAll"], ["for", "topic"], ["formControlName", "topic", "id", "topic", 1, "form-select", 3, "ngClass"], ["for", "event"], ["formControlName", "event", "id", "event", 1, "form-select", 3, "ngClass"], ["value", "1"], ["value", "2"], ["for", "startTime"], [1, "input-group", "input-group-sm", "mb-3"], ["id", "inputGroup-sizing-sm", "formControlName", "hour", "id", "hour", 1, "form-select", 2, "width", "9rem", 3, "ngClass"], ["id", "inputGroup-sizing-sm", "formControlName", "minute", "id", "minute", 1, "form-select", 2, "width", "9rem", 3, "ngClass"], ["id", "inputGroup-sizing-sm", "formControlName", "meridiem", "id", "meridiem", 1, "form-select", 2, "width", "9rem", 3, "ngClass"], ["value", "AM"], ["value", "PM"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "dialog-title"], [1, "modal-conten"], [1, "modal-body", 2, "height", "65vh", "overflow-y", "auto"], ["for", ""], ["id", "inputGroup-sizing-sm", "formControlName", "startHour", "id", "startHour", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "startMin", "id", "startMin", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "startMeridiem", "id", "startMeridiem", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "endHour", "id", "endHour", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "endMin", "id", "endMin", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "endMeridiem", "id", "endMeridiem", 1, "input-group-text", 2, "width", "24%"], [1, "card", 2, "width", "540px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "150px", "margin-left", "15px"], [1, "card-body"], [1, "form-group", "col-md", 2, "margin-top", "15px"], ["for", "staffPresent"], [1, "form-check-inline"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "staffPresent", 1, "form-check-input", 3, "change"], ["for", "", 1, "form-check-label"], ["type", "radio", "id", "no", "value", "N", "formControlName", "staffPresent", 1, "form-check-input", 3, "change"], ["for", "ssPresent"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "ssPresent", 1, "form-check-input", 3, "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "ssPresent", 1, "form-check-input", 3, "change"], ["for", "eventConduction"], ["formControlName", "eventConduction", "id", "eventConduction", 1, "form-select", 3, "ngClass"], ["value", "staff"], ["value", "ss"], [1, "card", 2, "width", "690px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "240px", "margin-left", "-75px"], [1, "card-body", 2, "height", "40vh"], [1, "card-title"], ["id", "circle", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "float", "right", "margin-top", "-45px", 3, "click"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table"], ["id", "header_fixed"], ["id", "tbodyy", 2, "text-align", "center"], [1, "card", 2, "width", "540px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "370px"], [1, "form-group", "col-md-8"], ["for", "lastMonTopic"], [1, "form-group", "col-md-4"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "lastMonTopic", 1, "form-check-input", 3, "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "lastMonTopic", 1, "form-check-input", 3, "change"], ["for", "thisMonTopic"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "thisMonTopic", 1, "form-check-input", 3, "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "thisMonTopic", 1, "form-check-input", 3, "change"], ["for", "seasonalDiscussion"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "seasonalDiscussion", 1, "form-check-input", 3, "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "seasonalDiscussion", 1, "form-check-input", 3, "change"], [1, "form-group", "col-md", 2, "margin-top", "-12px"], ["for", "seasonalDisease"], ["formControlName", "seasonalDisease", "id", "seasonalDisease", 1, "form-select", 3, "ngClass", "change"], ["animationDuration", "500ms", 3, "selectedTabChange"], ["type", "text", "maxlength", "20", "placeholder", "e.g. xyz", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngModel", "keypress", "ngModelChange"], ["type", "text", "maxlength", "20", "placeholder", "e.g. Engineer", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngModel", "keypress", "ngModelChange"], ["type", "button", 1, "btn", "btn-remove", 3, "click"], [1, "fas", "fa-minus-circle"], ["mat-tab-label", ""], ["matTabContent", ""], ["class", "card", "style", "width: 670px;background: whitesmoke; border: none;border-radius: 14px;height: 150px; margin-bottom:10px", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "670px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "150px", "margin-bottom", "10px"], [1, "form-group", "col-md-3"], [1, "form-group", "col-md-9"]], template: function HealthForumComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Total Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Attended");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Total Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Attended");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, HealthForumComponent_tr_63_Template, 30, 9, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "healthForumFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "pagination-controls", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function HealthForumComponent_Template_pagination_controls_pageChange_66_listener($event) { return ctx.p = $event; })("pageBoundsCorrection", function HealthForumComponent_Template_pagination_controls_pageBoundsCorrection_66_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, HealthForumComponent_ng_template_67_Template, 48, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, HealthForumComponent_ng_template_69_Template, 33, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, HealthForumComponent_ng_template_71_Template, 95, 52, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, HealthForumComponent_ng_template_73_Template, 192, 17, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.registerSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.healthForumForm.value.branch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.healthForumForm.value.branch || ctx.lowerRankbranchId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.healthForumForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](64, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](65, 11, ctx.viewHealthForumsOfBranch, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](14, _c1, ctx.registerSearch, ctx.registerSearch, ctx.registerSearch)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c2, ctx.p)));
    } }, directives: [_shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabContent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["PaginatePipe"], _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_19__["healthForumFilterPipe"]], styles: [".popover__wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translate(0, -20px);\r\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\r\n}\r\n\r\n.popover__title[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #499;\r\n  text-align: center;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 200px !important;\r\n  transform: translate(0, 15px) !important;\r\n  background-color: white;\r\n  color: #828BB2;\r\n  box-shadow: 3px 4px 5px 3px rgba(117, 111, 117, 1);\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: \"\";\r\n  left: calc(10% - 10px);\r\n  top: -10px;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #bfbfbf transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #499;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  border: 0px solid transparent;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  background: #499;\r\n  padding: 12px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  width: 1080px;\r\n  margin-left: -275px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-contents[_ngcontent-%COMP%] {\r\n  height: 450px;\r\n  width: 490px;\r\n}\r\n\r\n.modal-conten[_ngcontent-%COMP%] {\r\n  height: 550px;\r\n  width: 1300px;\r\n  margin-left: -400px;\r\n  \r\n  background: white;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 4px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child) > [_ngcontent-%COMP%]:last-child > *[_ngcontent-%COMP%] {\r\n  border-bottom-color: white;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 390px;\r\n  margin-top: -8px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 690px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 55%;\r\n  margin-left: 600px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 57%;\r\n  margin-left: 770px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 200px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 74px;\r\n  margin-bottom: 11px;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n  margin-left: -15px;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\nng-multiselect-dropdown[_ngcontent-%COMP%] {\r\n  padding: 0px !important;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 198px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n.fa-check-circle[_ngcontent-%COMP%]:hover {\r\n  color: darkgreen !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\r\n  margin-left: 2px;\r\n  border-top-left-radius: 7px;\r\n  border-bottom-left-radius: 7px;\r\n  border-top-right-radius: 7px;\r\n  border-bottom-right-radius: 7px;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]:not(.has-validation) > .dropdown-toggle[_ngcontent-%COMP%]:nth-last-child(n+3), .input-group[_ngcontent-%COMP%]:not(.has-validation) > [_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {\r\n  border-top-right-radius: 7px;\r\n  border-bottom-right-radius: 7px;\r\n  border-top-left-radius: 7px;\r\n  border-bottom-left-radius: 7px;\r\n}\r\n\r\n#circle[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 20px;\r\n}\r\n\r\n.fa-minus-circle[_ngcontent-%COMP%] {\r\n  color: red !important;\r\n  font-size: 20px;\r\n  margin-left: 25px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: static;\r\n  top: 0;\r\n  z-index: 999;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\n#tbodyy[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 140px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n  .mat-tab-body .mat-tab-body-content {\r\n  height: 325px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n  .mat-tab-header {\r\n  margin-left: -75px;\r\n}\r\n\r\n  .mat-tab-body-wrapper {\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: flex;\r\n  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);\r\n  margin-left: -75px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1mb3J1bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5REFBeUQ7RUFDekQseUJBQXlCO0VBQ3pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7R0FFRzs7QUFFSDs7O0dBR0c7O0FBRUg7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1REFBdUQ7RUFDdkQsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImhlYWx0aC1mb3J1bS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcG92ZXJfX3dyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fd3JhcHBlcjpob3ZlciAucG9wb3Zlcl9fY29udGVudCB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgLTAuMDIsIDAuMiwgMC45Nyk7XHJcbn1cclxuXHJcbi5wb3BvdmVyX190aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fY29udGVudCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDE1cHgpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICM4MjhCQjI7XHJcbiAgYm94LXNoYWRvdzogM3B4IDRweCA1cHggM3B4IHJnYmEoMTE3LCAxMTEsIDExNywgMSk7XHJcbn1cclxuXHJcbi5wb3BvdmVyX19jb250ZW50IGxpIHtcclxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxufVxyXG5cclxuLnBvcG92ZXJfX2NvbnRlbnQ6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBsZWZ0OiBjYWxjKDEwJSAtIDEwcHgpO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYmZiZmJmIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5O1xyXG59XHJcblxyXG4uUUFfdGFibGUgLnRhYmxlIHRoZWFkIHRoIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgd2lkdGg6IDEwODBweDtcclxuICBtYXJnaW4tbGVmdDogLTI3NXB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50cyB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICB3aWR0aDogNDkwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW4ge1xyXG4gIGhlaWdodDogNTUwcHg7XHJcbiAgd2lkdGg6IDEzMDBweDtcclxuICBtYXJnaW4tbGVmdDogLTQwMHB4O1xyXG4gIC8qIG92ZXJmbG93LXk6IGF1dG87ICovXHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5RQV90YWJsZSAudGFibGUgdGJvZHkgdGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi50YWJsZT46bm90KDpsYXN0LWNoaWxkKT46bGFzdC1jaGlsZD4qIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogMzkwcHg7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2OTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTlweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyIGlucHV0IHtcclxuICB3aWR0aDogNTUlO1xyXG4gIG1hcmdpbi1sZWZ0OiA2MDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBpbnB1dCB7XHJcbiAgd2lkdGg6IDU3JTtcclxuICBtYXJnaW4tbGVmdDogNzcwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmRhYWI4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMiAuc2VhcmNoX2lubmVyIGJ1dHRvbiBpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIgLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiBpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgbWFyZ2luLWxlZnQ6IDc0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG59XHJcblxyXG4uZGlhbG9nLXRpdGxlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAtMTRweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICMyNzc7XHJcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzAwMDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDAwMDtcclxufVxyXG5cclxubmctbXVsdGlzZWxlY3QtZHJvcGRvd24ge1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5maWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMS40ZW0gMS40ZW0gMS40ZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxlZ2VuZC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgd2lkdGg6IDE5OHB4O1xyXG4gIGNvbG9yOiAjZGRkO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZmEtY2hlY2stY2lyY2xlOmhvdmVyIHtcclxuICBjb2xvcjogZGFya2dyZWVuICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cD46bm90KDpmaXJzdC1jaGlsZCk6bm90KC5kcm9wZG93bi1tZW51KTpub3QoLnZhbGlkLXRvb2x0aXApOm5vdCgudmFsaWQtZmVlZGJhY2spOm5vdCguaW52YWxpZC10b29sdGlwKTpub3QoLmludmFsaWQtZmVlZGJhY2spIHtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXA6bm90KC5oYXMtdmFsaWRhdGlvbik+LmRyb3Bkb3duLXRvZ2dsZTpudGgtbGFzdC1jaGlsZChuKzMpLCAuaW5wdXQtZ3JvdXA6bm90KC5oYXMtdmFsaWRhdGlvbik+Om5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpOm5vdCguZHJvcGRvd24tbWVudSkge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4jY2lyY2xlIHtcclxuICBjb2xvcjogIzNlNzc1OCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmZhLW1pbnVzLWNpcmNsZSB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuXHJcbiN0YWJsZV93cmFwcGVyIC50YWJsZSB0aGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE3cHggMzBweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICM0OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbiNoZWFkZXJfZml4ZWQge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbn1cclxuXHJcbiN0Ym9keXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbnRhYmxlIHRoZWFkLCB0Ym9keSB0ciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5IC5tYXQtdGFiLWJvZHktY29udGVudCB7XHJcbiAgaGVpZ2h0OiAzMjVweDtcclxufVxyXG5cclxuLyogOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWdyb3VwLWNvbnRlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNzVweDtcclxufSAqL1xyXG5cclxuLyogOjpuZy1kZWVwIC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbHMge1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xyXG59ICovXHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyIHtcclxuICBtYXJnaW4tbGVmdDogLTc1cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwMG1zIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcclxuICBtYXJnaW4tbGVmdDogLTc1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HealthForumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-health-forum',
                templateUrl: './health-forum.component.html',
                styleUrls: ['./health-forum.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] }, { type: _health_forum_service__WEBPACK_IMPORTED_MODULE_8__["HealthForumService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalConfig"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_11__["ValidationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] }, { type: _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationDialogService"] }]; }, null); })();


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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HealthForumModule, { declarations: [_health_forum_component__WEBPACK_IMPORTED_MODULE_3__["HealthForumComponent"], _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_6__["healthForumFilterPipe"], _health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_11__["HealthForumAngularMatModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _health_forum_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthForumRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthForumModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_health_forum_component__WEBPACK_IMPORTED_MODULE_3__["HealthForumComponent"], _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_6__["healthForumFilterPipe"], _health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_11__["HealthForumAngularMatModalComponent"]],
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
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n  background-color: #499;\r\n  color: #FFFFFF;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 165px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 6px;\r\n}\r\n\r\n  .mat-dialog-container {\r\n  padding: 12px 17px;\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1mb3J1bS1hbmd1bGFyLW1hdC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJoZWFsdGgtZm9ydW0tYW5ndWxhci1tYXQtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI2hlYWRlcl9maXhlZCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbn1cclxuXHJcbnRhYmxlIHRib2R5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDE2NXB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG50YWJsZSB0aGVhZCwgdGJvZHkgdHIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbi5RQV90YWJsZSAudGFibGUgdGJvZHkgdGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEycHggMTdweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */"] });
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