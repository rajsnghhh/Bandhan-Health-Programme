(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-baseline-survey-baseline-survey-module"],{

/***/ "9Oov":
/*!*******************************************************************!*\
  !*** ./src/app/modules/baseline-survey/baseline-survey.module.ts ***!
  \*******************************************************************/
/*! exports provided: BaselineSurveyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaselineSurveyModule", function() { return BaselineSurveyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _baseline_survey_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseline-survey-routing.module */ "yWKN");
/* harmony import */ var _baseline_create_baseline_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseline-create/baseline-create.component */ "D5AH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _baseline_view_baseline_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./baseline-view/baseline-view.component */ "U4S0");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _baseline_edit_baseline_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./baseline-edit/baseline-edit.component */ "OgXQ");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/loader/loader.module */ "iFG+");
/* harmony import */ var _location_location_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./location/location.module */ "q1Gc");













class BaselineSurveyModule {
}
BaselineSurveyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BaselineSurveyModule });
BaselineSurveyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BaselineSurveyModule_Factory(t) { return new (t || BaselineSurveyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _baseline_survey_routing_module__WEBPACK_IMPORTED_MODULE_2__["BaselineSurveyRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
            _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__["LoaderModule"], _location_location_module__WEBPACK_IMPORTED_MODULE_10__["LocationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaselineSurveyModule, { declarations: [_baseline_create_baseline_create_component__WEBPACK_IMPORTED_MODULE_3__["BaselineCreateComponent"], _baseline_view_baseline_view_component__WEBPACK_IMPORTED_MODULE_5__["BaselineViewComponent"], _baseline_edit_baseline_edit_component__WEBPACK_IMPORTED_MODULE_7__["BaselineEditComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _baseline_survey_routing_module__WEBPACK_IMPORTED_MODULE_2__["BaselineSurveyRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__["LoaderModule"], _location_location_module__WEBPACK_IMPORTED_MODULE_10__["LocationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaselineSurveyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_baseline_create_baseline_create_component__WEBPACK_IMPORTED_MODULE_3__["BaselineCreateComponent"], _baseline_view_baseline_view_component__WEBPACK_IMPORTED_MODULE_5__["BaselineViewComponent"], _baseline_edit_baseline_edit_component__WEBPACK_IMPORTED_MODULE_7__["BaselineEditComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _baseline_survey_routing_module__WEBPACK_IMPORTED_MODULE_2__["BaselineSurveyRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                    _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__["LoaderModule"], _location_location_module__WEBPACK_IMPORTED_MODULE_10__["LocationModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "D5AH":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/baseline-survey/baseline-create/baseline-create.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BaselineCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaselineCreateComponent", function() { return BaselineCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../location/location.component */ "SfUW");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _baseline_survey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../baseline-survey.service */ "SMi9");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/http/http.service */ "YwHQ");
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/validation.service */ "yjnX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _core_http_branch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/http/branch.service */ "g6Br");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "G/xV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");















const _c0 = ["aadhaarId"];
function BaselineCreateComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Family selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_26_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.family.errors.required);
} }
function BaselineCreateComponent_div_27_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Number of Family is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_27_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_27_div_6_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.f.totalFamily.errors.required);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function BaselineCreateComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Family:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_div_27_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.validationService.onlyInteger($event); })("keydown", function BaselineCreateComponent_div_27_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.restrictZero($event); })("keyup", function BaselineCreateComponent_div_27_Template_input_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.familyNo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaselineCreateComponent_div_27_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.f.totalFamily.invalid && ctx_r1.f.totalFamily.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.totalFamily.errors);
} }
function BaselineCreateComponent_div_28_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Member of Household is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_28_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_28_div_6_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.f.households.errors.required);
} }
const _c2 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function BaselineCreateComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Member Household:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_div_28_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.validationService.onlyInteger($event); })("keydown", function BaselineCreateComponent_div_28_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.restrictZero($event); })("keyup", function BaselineCreateComponent_div_28_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.zeroMembers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaselineCreateComponent_div_28_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, ctx_r2.f.households.invalid && ctx_r2.f.households.touched, ctx_r2.f.households.valid && (ctx_r2.f.households.dirty || ctx_r2.f.households.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.households.errors);
} }
function BaselineCreateComponent_div_29_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Member of Household is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_29_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_29_div_6_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.f.households.errors.required);
} }
function BaselineCreateComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Member Household:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_div_29_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.validationService.onlyInteger($event); })("keydown", function BaselineCreateComponent_div_29_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.restrictZero($event); })("keyup", function BaselineCreateComponent_div_29_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.checkFamily(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaselineCreateComponent_div_29_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r3.f.households.invalid && ctx_r3.f.households.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.households.errors);
} }
function BaselineCreateComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_40_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaselineCreateComponent_div_40_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.firstName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.firstName.errors.minlength);
} }
function BaselineCreateComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_45_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.middleName.errors.minlength);
} }
function BaselineCreateComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_50_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.lastName.errors.minlength);
} }
function BaselineCreateComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Age is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_57_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.age.errors.required);
} }
function BaselineCreateComponent_div_65_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Husband/Guardian\u2019s Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_65_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_65_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaselineCreateComponent_div_65_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.husbandName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.husbandName.errors.minlength);
} }
function BaselineCreateComponent_div_70_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile No. should be of 10 digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_70_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile No. should be starting with 6, 7, 8 or 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_70_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaselineCreateComponent_div_70_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.mobile.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.mobile.errors.pattern);
} }
function BaselineCreateComponent_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r61.identityCardTypesMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r61.name, " ");
} }
function BaselineCreateComponent_div_78_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " AADHAAR CARD Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_78_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " AADHAAR CARD Number Invalid ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_78_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_78_div_7_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaselineCreateComponent_div_78_div_7_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.f.aadhar.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.f.aadhar.errors.minlength || ctx_r64.f.aadhar.errors.pattern);
} }
function BaselineCreateComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "AADHAAR CARD NO :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 81, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BaselineCreateComponent_div_78_Template_input_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.aadharcardValidation($event); })("keypress", function BaselineCreateComponent_div_78_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.validationService.onlyIntegerAndSpace($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BaselineCreateComponent_div_78_div_7_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, ctx_r11.f.aadhar.invalid && ctx_r11.f.aadhar.touched, ctx_r11.f.aadhar.valid && (ctx_r11.f.aadhar.dirty || ctx_r11.f.aadhar.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.f.aadhar.errors);
} }
function BaselineCreateComponent_div_79_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PAN Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_79_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PAN Number Invalid ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_79_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_79_div_6_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaselineCreateComponent_div_79_div_6_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r70.f.pan.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r70.f.pan.errors.minlength || ctx_r70.f.pan.errors.pattern);
} }
function BaselineCreateComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PAN CARD NO :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_div_79_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.validationService.charnum($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaselineCreateComponent_div_79_div_6_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, ctx_r12.f.pan.invalid && ctx_r12.f.pan.touched, ctx_r12.f.pan.valid && (ctx_r12.f.pan.dirty || ctx_r12.f.pan.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.f.pan.errors);
} }
function BaselineCreateComponent_div_80_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " VOTER CARD Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_80_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " VOTER CARD Number Invalid ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_80_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_80_div_6_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaselineCreateComponent_div_80_div_6_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.f.voter.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.f.voter.errors.minlength || ctx_r75.f.voter.errors.pattern);
} }
function BaselineCreateComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " VOTER CARD NO :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_div_80_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.validationService.charnum($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaselineCreateComponent_div_80_div_6_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, ctx_r13.f.voter.invalid && ctx_r13.f.voter.touched, ctx_r13.f.voter.valid && (ctx_r13.f.voter.dirty || ctx_r13.f.voter.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.f.voter.errors);
} }
function BaselineCreateComponent_option_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r80.religionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r80.religionMasterDescription, " ");
} }
function BaselineCreateComponent_div_91_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Religion is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_91_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.f.religion.errors.required);
} }
function BaselineCreateComponent_option_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r83.casteTypeMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r83.casteTypeDescription, " ");
} }
function BaselineCreateComponent_div_101_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Caste is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_101_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.f.caste.errors.required);
} }
function BaselineCreateComponent_option_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r86.educationalQualificationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r86.qualification, " ");
} }
function BaselineCreateComponent_option_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r88.monthlyIncomeMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r88.incomeRange, " ");
} }
function BaselineCreateComponent_option_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r90.occupationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r90.occupationDescription, " ");
} }
function BaselineCreateComponent_div_130_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Male is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_130_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.f.fmale.errors.required);
} }
function BaselineCreateComponent_div_137_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Female is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_137_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.f.ffemale.errors.required);
} }
function BaselineCreateComponent_div_146_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Senior Citizen is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_146_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.f.fsenior.errors.required);
} }
function BaselineCreateComponent_div_160_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Micro Group is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_160_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.f.bbMicro.errors.required);
} }
function BaselineCreateComponent_div_175_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pregnancy selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_175_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.f.pregnancy.errors.required);
} }
function BaselineCreateComponent_div_205_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Children count is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_205_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineCreateComponent_div_205_div_6_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r97.f.child.errors.required);
} }
function BaselineCreateComponent_div_205_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " How many children do you have?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_div_205_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.validationService.onlyInteger($event); })("keydown", function BaselineCreateComponent_div_205_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.restrictZero($event); })("keyup", function BaselineCreateComponent_div_205_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.checkChildren(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaselineCreateComponent_div_205_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, ctx_r26.f.child.invalid && ctx_r26.f.child.touched, ctx_r26.f.child.valid && (ctx_r26.f.child.dirty || ctx_r26.f.child.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.f.child.errors);
} }
function BaselineCreateComponent_div_206_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Do you have any child below 18 years?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_div_206_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.childBelow18($event); })("click", function BaselineCreateComponent_div_206_Template_input_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.radioValueCheck(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_div_206_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.childBelow18($event); })("click", function BaselineCreateComponent_div_206_Template_input_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.radioValueCheck(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r27.showChildDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", !ctx_r27.showChildDetails);
} }
function BaselineCreateComponent_div_207_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Do you have children below 5 years?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_div_207_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.childBelow5($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_div_207_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.childBelow5($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r28.showChildDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", !ctx_r28.showChildDetails);
} }
function BaselineCreateComponent_div_208_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "In the case of the last delivery, where did it has been taken place?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_div_208_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.institutionallDelivery($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0\u00A0Institution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_div_208_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.institutionallDelivery($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00A0\u00A0Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_div_210_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Are you breastfeeding your child aged below 2 years till now?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_div_210_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.breastFeeding($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_div_210_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r116.breastFeeding($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_div_210_Template_input_change_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r117.breastFeeding($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u00A0\u00A0N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineCreateComponent_ng_template_221_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_ng_template_221_tr_25_Template_input_keypress_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r122.validationService.onlyAlphabetsAndSpace($event); })("keypress", function BaselineCreateComponent_ng_template_221_tr_25_Template_input_keypress_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r124.validationService.titleCase($event); })("ngModelChange", function BaselineCreateComponent_ng_template_221_tr_25_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const i_r121 = ctx.index; const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r125.childDetails.childInfo[i_r121].childName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BaselineCreateComponent_ng_template_221_tr_25_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const i_r121 = ctx.index; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r126.childDetails.childInfo[i_r121].dob = $event; })("keydown", function BaselineCreateComponent_ng_template_221_tr_25_Template_input_keydown_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r127.restrictTypeOfDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BaselineCreateComponent_ng_template_221_tr_25_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const i_r121 = ctx.index; const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r128.childDetails.childInfo[i_r121].sex = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-- Select Sex --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineCreateComponent_ng_template_221_tr_25_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const i_r121 = ctx.index; const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r129.removeNewChild(i_r121); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r121 = ctx.index;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r119.childDetails.childInfo[i_r121].childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r119.childDetails.childInfo[i_r121].dob)("min", ctx_r119.minDate)("max", ctx_r119.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r119.childDetails.childInfo[i_r121].sex);
} }
function BaselineCreateComponent_ng_template_221_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Child Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineCreateComponent_ng_template_221_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.addNewChild(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineCreateComponent_ng_template_221_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r132.childModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BaselineCreateComponent_ng_template_221_tr_25_Template, 18, 5, "tr", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineCreateComponent_ng_template_221_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r133.saveChild(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.childDetails.childInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r32.checkChildDisabled());
} }
class BaselineCreateComponent {
    constructor(fb, modalService, baselineService, httpService, validationService, toaster, httpBranch, sidebarService) {
        this.fb = fb;
        this.modalService = modalService;
        this.baselineService = baselineService;
        this.httpService = httpService;
        this.validationService = validationService;
        this.toaster = toaster;
        this.httpBranch = httpBranch;
        this.sidebarService = sidebarService;
        this.haveChildren = 'N';
        this.breastfeeding = 'NA';
        this.today = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10);
        this.idTypeField = 0;
        this.haveSanitaryLatrine = 'N';
        this.addSum = 0;
        this.showAge = 0;
        this.ageCheck = 0;
        this.showChildDetails = false;
        this.childDetails = {
            childInfo: [],
        };
        this.loader = true;
    }
    ngOnInit() {
        this.getMinDate();
        this.createForm();
        this.childDetails.childInfo = [];
        this.childDetails.childInfo.push({
            age: 'string',
            childDetailId: 0,
            childName: '',
            createdOn: 'string',
            dob: '',
            familyDetailId: 0,
            sex: '',
            status: 'A'
        });
        let obj = this.httpService.dataAccessDTO;
        // API call for getting caste
        this.baselineService.getCasteView(obj).subscribe((response) => {
            this.casteList = response.responseObject;
            // console.log(this.casteList);
        });
        //API call for getting education details
        this.baselineService.getEducationDetails(obj).subscribe((response) => {
            this.educationList = response.responseObject;
            // console.log(this.educationList);
        });
        //API call for getting monthlyIncomeDetails
        this.baselineService.monthlyIncomeDetails(obj).subscribe((response) => {
            this.householdIncomeDetails = response.responseObject;
            // console.log(this.householdIncomeDetails);
        });
        //API call for getting religionDetails
        this.baselineService.religionDetails(obj).subscribe((response) => {
            this.religionDetails = response.responseObject;
            // console.log(this.religionDetails);
        });
        //API call for getting occupationDetails
        this.baselineService.occupationDetails(obj).subscribe((response) => {
            this.occupationDetails = response.responseObject;
            // console.log(this.occupationDetails);
        });
        //API call for getting idCardDetails
        this.baselineService.getIdCardDetails(obj).subscribe((response) => {
            this.cardDetails = response.responseObject;
            // console.log(this.cardDetails);
        });
    }
    aadharcardValidation(event) {
        let data;
        if (event.keyCode !== 8 && event.keyCode !== 46) {
            data = this.aadhaarId.nativeElement.value
                .replace(/[^0-9]/g, '')
                .replace(/\W/gi, '')
                .replace(/(.{4})/g, '$1 ')
                .trim();
        }
        else {
            data = this.aadhaarId.nativeElement.value;
        }
        let q = this.aadhaarId.nativeElement;
        q.value = data;
        return data;
    }
    getMinDate() {
        let date = new Date();
        let toDate = date.getDate();
        if (toDate < 10) {
            toDate = '0' + toDate;
        }
        let month = date.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let year = date.getUTCFullYear() - 18;
        this.minDate = year + "-" + month + "-" + toDate;
    }
    createForm() {
        this.baselineSurvey = this.fb.group({
            family: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            totalFamily: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            households: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            middleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2)])],
            husbandName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[6789][0-9]{9}")])],
            idtype: [''],
            aadhar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}")])],
            pan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")])],
            voter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[A-Z]{3}[0-9]{7}")])],
            religion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            caste: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            education: [''],
            household: [''],
            occupation: [''],
            fmale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ffemale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fsenior: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bbMicro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pregnancy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sanitary: this.haveSanitaryLatrine,
            haveChildren: this.haveChildren,
            child: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            childbelow18: this.childbelow18,
            childbelow5: this.childbelow5,
            institutional: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            breastFeeding: this.breastfeeding,
        });
    }
    get f() {
        return this.baselineSurvey.controls;
    }
    changesanitary(e) {
        this.haveSanitaryLatrine = e.target.value;
    }
    havesChildren(e) {
        this.haveChildren = e.target.value;
        this.baselineSurvey.controls.child.setValue('');
        this.baselineSurvey.controls.childbelow18.setValue('');
        this.showChildDetails = false;
        this.baselineSurvey.controls.childbelow5.setValue('');
        this.baselineSurvey.controls.institutional.setValue('');
        this.baselineSurvey.controls.breastFeeding.setValue('NA');
        this.childDetails.childInfo = [{
                age: 'string',
                childDetailId: 0,
                childName: '',
                createdOn: 'string',
                dob: '',
                familyDetailId: 0,
                sex: '',
                status: 'A'
            }];
    }
    childBelow18(e) {
        this.childbelow18 = e.target.value;
        this.baselineSurvey.controls.childbelow5.setValue('');
        this.baselineSurvey.controls.institutional.setValue('');
        this.baselineSurvey.controls.breastFeeding.setValue('NA');
        this.childDetails.childInfo = [{
                age: 'string',
                childDetailId: 0,
                childName: '',
                createdOn: 'string',
                dob: '',
                familyDetailId: 0,
                sex: '',
                status: 'A'
            }];
    }
    childBelow5(e) {
        this.childbelow5 = e.target.value;
        this.baselineSurvey.controls.institutional.setValue('');
        this.baselineSurvey.controls.breastFeeding.setValue('NA');
    }
    institutionallDelivery(e) {
        this.institutionalDelivery = e.target.value;
    }
    breastFeeding(e) {
        this.breastfeeding = e.target.value;
    }
    saveBaselineCreateBack() {
        window.history.go(-1);
    }
    resetBaselineCreate() {
        this.idTypeField = 0;
        this.familyField = '';
        this.haveSanitaryLatrine = 'N';
        this.haveChildren = 'N';
        this.childbelow18 = '';
        this.childbelow5 = '';
        this.breastfeeding = 'NA';
        this.institutionalDelivery = '';
        this.showChildDetails = false;
        this.createForm();
        this.locationComponent.createForm();
        this.addSum = 0;
        this.childDetails.childInfo = [{
                age: 'string',
                childDetailId: 0,
                childName: '',
                createdOn: 'string',
                dob: '',
                familyDetailId: 0,
                sex: '',
                status: 'A'
            }];
    }
    saveMoreBaselineCreate() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        console.log(this.baselineSurvey.value);
        let item = this.baselineSurvey.value;
        let idValue = '';
        let tfamily;
        this.locationComponent.locationForm.markAllAsTouched();
        this.baselineSurvey.markAllAsTouched();
        // console.log(thiitem.branch == this.baselineSurvey.get('branch').value)
        item.firstName = this.validationService.firstCaps(item.firstName.trim());
        item.middleName = this.validationService.firstCaps(item.middleName.trim());
        item.lastName = this.validationService.firstCaps(item.lastName.trim());
        item.husbandName = this.validationService.firstCaps(item.husbandName.trim());
        this.childDetails.childInfo.forEach(item => {
            if (item.childName == '') {
                this.childDetails.childInfo = [];
            }
        });
        if (item.idtype == 1) {
            idValue = item.aadhar;
        }
        else if (item.idtype == 2) {
            idValue = item.pan;
        }
        else if (item.idtype == 3) {
            idValue = item.voter;
        }
        if (this.familyField == 'J') {
            tfamily = item.totalFamily;
        }
        else if (this.familyField == 'S') {
            tfamily = 1;
        }
        else {
            tfamily = '';
        }
        if (item.idtype != 1 || item.idtype != 2 || item.idtype != 3) {
            this.idCard = [];
        }
        if (item.idtype == 1 || item.idtype == 2 || item.idtype == 3) {
            this.idCard = [
                {
                    familyIdentityCardMapId: 0,
                    identityCardTypesMasterDTO: {
                        identityCardTypesMasterId: item.idtype,
                        name: (_a = this.cardDetails.filter((x) => x.identityCardTypesMasterId == item.idtype)[0]) === null || _a === void 0 ? void 0 : _a.name
                    },
                    number: idValue
                }
            ];
        }
        const postBody = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            houseHoldDetailDTO: {
                branchDTO: {
                    branchId: this.sidebarService.branchId,
                    branchName: this.sidebarService.branchName,
                },
                branchVillageMapId: this.sidebarService.branchVillageMapId,
                familyDetailDTOList: [
                    {
                        age: item.age,
                        bbMicroGroupMembership: item.bbMicro,
                        casteTypeMasterDTO: {
                            casteTypeDescription: (_b = this.casteList.filter((x) => x.casteTypeMasterId == item.caste)[0]) === null || _b === void 0 ? void 0 : _b.casteTypeDescription,
                            casteTypeMasterId: item.caste
                        },
                        childDetailDTOList: this.childDetails.childInfo,
                        childrenBelow18: item.childbelow18 ? item.childbelow18 : 'NA',
                        childrenBelow5: item.childbelow5 ? item.childbelow5 : 'NA',
                        createdOn: 'string',
                        educationalQualificationMasterDTO: {
                            educationalQualificationMasterId: item.education ? item.education : 0,
                            qualification: ((_c = this.educationList.filter((x) => x.educationalQualificationMasterId == item.education)[0]) === null || _c === void 0 ? void 0 : _c.qualification) ? (_d = this.educationList.filter((x) => x.educationalQualificationMasterId == item.education)[0]) === null || _d === void 0 ? void 0 : _d.qualification : ''
                        },
                        existingChildCount: 0,
                        familyDetailId: 0,
                        familyDetailRemaingStatusDTO: {
                            createdFamilyCount: 0,
                            createdFamilyMambersCount: 0,
                            totalFamilyCount: 0,
                            totalFamilyMambersCount: 0
                        },
                        familyNumber: "string",
                        familyType: item.family,
                        firstName: item.firstName,
                        haveChild: item.haveChildren,
                        haveSanitaryLatrine: item.sanitary,
                        householdDetailsId: 0,
                        husbandOrGuardianName: item.husbandName,
                        identityCardDTOList: this.idCard,
                        institutionalDelivery: item.institutional ? item.institutional : 'NA',
                        lactetingMother: item.breastFeeding,
                        lastName: item.lastName,
                        middleName: item.middleName,
                        mobileNumber: item.mobile,
                        monthlyIncomeMasterDTO: {
                            incomeRange: ((_e = this.householdIncomeDetails.filter((x) => x.monthlyIncomeMasterId == item.household)[0]) === null || _e === void 0 ? void 0 : _e.incomeRange) ? (_f = this.householdIncomeDetails.filter((x) => x.monthlyIncomeMasterId == item.household)[0]) === null || _f === void 0 ? void 0 : _f.incomeRange : '',
                            monthlyIncomeMasterId: item.household ? item.household : 0
                        },
                        occupationMasterDTO: {
                            occupationDescription: ((_g = this.occupationDetails.filter((x) => x.occupationMasterId == item.occupation)[0]) === null || _g === void 0 ? void 0 : _g.occupationDescription) ? (_h = this.occupationDetails.filter((x) => x.occupationMasterId == item.occupation)[0]) === null || _h === void 0 ? void 0 : _h.occupationDescription : '',
                            occupationMasterId: item.occupation ? item.occupation : 0
                        },
                        pregnantWoman: item.pregnancy,
                        religionMasterDTO: {
                            religionMasterDescription: (_j = this.religionDetails.filter((x) => x.religionMasterId == item.religion)[0]) === null || _j === void 0 ? void 0 : _j.religionMasterDescription,
                            religionMasterId: item.religion
                        },
                        status: "A",
                        totaFamilyMemberFemales: item.ffemale,
                        totaFamilyMemberMales: item.fmale,
                        totaFamilyMemberSrcitizen: item.fsenior,
                        totalNumberOfChildren: item.child ? item.child : 0
                    }
                ],
                familyType: item.family,
                houseHoldNumber: "string",
                householdDetailId: 0,
                numberOfFamily: tfamily,
                status: "A",
                swasthyaSahayikaDTO: {
                    name: this.sidebarService.swasthyaSahayikaName ? this.sidebarService.swasthyaSahayikaName : '',
                    swasthyaSahayikaId: parseInt(this.sidebarService.swasthyaSahayikaId) ? parseInt(this.sidebarService.swasthyaSahayikaId) : 0
                },
                totalMembers: item.households
            }
        };
        console.log(postBody);
        if (!this.baselineSurvey.value.family) {
            this.showError('Please Select Family Type');
            return;
        }
        if (this.familyField === 'J') {
            if (!this.baselineSurvey.value.totalFamily) {
                this.showError('Please Enter Total Number of Family');
                return;
            }
            else if (this.baselineSurvey.value.totalFamily < 2) {
                this.showError('Joint Family will be minimum two');
                return;
            }
        }
        if (!this.baselineSurvey.value.households) {
            this.showError('Please Enter Total Member of Household (All Family)');
            return;
        }
        if (this.familyField === 'J') {
            if (this.baselineSurvey.value.households) {
                let totalHousehold = 0;
                let totalFamily = 0;
                let item = this.baselineSurvey.value;
                if (item.totalFamily != '' && item.totalFamily != undefined) {
                    totalFamily = parseInt(item.totalFamily);
                }
                if (item.households != '' && item.households != undefined) {
                    totalHousehold = parseInt(item.households);
                }
                if (totalHousehold < totalFamily && totalHousehold != totalFamily) {
                    this.showError('Total Member of Household (All family) must be greater than or equal to Total Family');
                    return;
                }
            }
        }
        if (!this.baselineSurvey.value.firstName) {
            this.showError('First Name should not be blank');
            return;
        }
        else if (this.baselineSurvey.value.firstName.length < 3) {
            this.showError('First Name should be at least 3 char long');
            return;
        }
        if (this.baselineSurvey.value.middleName.length) {
            if (this.baselineSurvey.value.middleName.length < 3) {
                this.showError('Middle Name should be at least 3 char long');
                return;
            }
        }
        if (this.baselineSurvey.value.lastName.length) {
            if (this.baselineSurvey.value.lastName.length < 3) {
                this.showError('Last Name should be at least 3 char long');
                return;
            }
        }
        if (!this.baselineSurvey.value.age) {
            this.showError('Age should not be blank');
            return;
        }
        if (!this.baselineSurvey.value.husbandName) {
            this.showError('Husband Name should not be blank');
            return;
        }
        else if (this.baselineSurvey.value.husbandName.length < 3) {
            this.showError('Husband Name should be at least 3 char long');
            return;
        }
        if (this.baselineSurvey.value.mobile.length) {
            if (this.baselineSurvey.value.mobile.length != 10) {
                this.showError('Mobile Number should exactly contain 10 char');
                return;
            }
            else {
                let startChar = parseInt(this.baselineSurvey.value.mobile.substr(0, 1));
                // console.log(startChar);
                if (startChar < 6) {
                    this.showError('Mobile Number must start from 6-9');
                    return;
                }
            }
        }
        if (this.baselineSurvey.value.idtype) {
            if (this.idTypeField == 1) {
                if (!this.baselineSurvey.value.aadhar) {
                    this.showError('Please Enter Aadhaar Card No.');
                    return;
                }
                var regexp = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
                var x = this.baselineSurvey.value.aadhar;
                if (!regexp.test(x)) {
                    this.showError('Invalid Aadhaar Card No!');
                    return;
                }
            }
        }
        if (this.baselineSurvey.value.idtype) {
            if (this.idTypeField == 2) {
                if (!this.baselineSurvey.value.pan) {
                    this.showError('Please Enter PAN Card No');
                    return;
                }
                var regexp = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
                var x = this.baselineSurvey.value.pan;
                if (!regexp.test(x)) {
                    this.showError('Invalid Pan Card No!');
                    return;
                }
            }
        }
        if (this.baselineSurvey.value.idtype) {
            if (this.idTypeField == 3) {
                if (!this.baselineSurvey.value.voter) {
                    this.showError('Please Enter Voter Card No');
                    return;
                }
                var regexp = /^([A-Z]){3}([0-9]){7}?$/;
                var x = this.baselineSurvey.value.voter;
                if (!regexp.test(x)) {
                    this.showError('Invalid Voter Card No!');
                    return;
                }
            }
        }
        if (!this.baselineSurvey.value.religion) {
            this.showError('Please select Religion');
            return;
        }
        if (!this.baselineSurvey.value.caste) {
            this.showError('Please select Caste');
            return;
        }
        if (!this.baselineSurvey.value.fmale) {
            this.showError('Please Enter Total Family Member Male');
            return;
        }
        if (!this.baselineSurvey.value.ffemale) {
            this.showError('Please Enter Total Family Member Female');
            return;
        }
        if (!this.baselineSurvey.value.fsenior) {
            this.showError('Please Enter Total Family Member Senior Citizen');
            return;
        }
        if (!this.baselineSurvey.value.bbMicro) {
            this.showError('Please select Micro Group');
            return;
        }
        if (!this.baselineSurvey.value.pregnancy) {
            this.showError('Please select Pregnancy');
            return;
        }
        if (this.baselineSurvey.value.haveChildren == 'Y') {
            if (!this.baselineSurvey.value.child) {
                this.showError('Please enter children count');
                return;
            }
        }
        if (this.baselineSurvey.value.haveChildren == 'Y') {
            if (!this.baselineSurvey.value.childbelow18) {
                this.showError('Please select child below 18 years');
                return;
            }
        }
        if (this.baselineSurvey.value.childbelow18 == 'Y') {
            if (!this.baselineSurvey.value.childbelow5) {
                this.showError('Please select child below 5 years');
                return;
            }
        }
        if (this.baselineSurvey.value.childbelow5 == 'Y') {
            if (!this.baselineSurvey.value.institutional) {
                this.showError('Please select institutional delivery');
                return;
            }
        }
        if (this.baselineSurvey.value.childbelow5 == 'Y') {
            if (!this.baselineSurvey.value.breastFeeding) {
                this.showError('Please select breastfeeding');
                return;
            }
        }
        if (this.baselineSurvey.value.haveChildren == 'N') {
            this.baselineSurvey.value.child = 0;
        }
        this.childDetails.childInfo.forEach((item, index) => {
            console.log(this.childDetails.childInfo);
            this.ageCheck = item.dob;
            if (this.ageCheck) {
                const convertAge = new Date(this.ageCheck);
                const timeDiff = Math.abs(Date.now() - convertAge.getTime());
                this.childDetails.childInfo[index].showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
            }
        });
        if (this.baselineSurvey.value.childbelow18 == 'Y' || this.baselineSurvey.value.breastFeeding == 'Y' || this.baselineSurvey.value.breastFeeding == 'N' || this.baselineSurvey.value.childbelow5 == 'Y') {
            if (this.childDetails.childInfo.length == 0) {
                this.showError('Please add child details');
                return;
            }
        }
        if (this.baselineSurvey.value.childbelow18 == 'Y') {
            if (this.showAge > 18) {
                this.showError('Please add a child below 18 years');
                return;
            }
        }
        if (this.baselineSurvey.value.childbelow5 == 'Y') {
            let isvalid = 0;
            this.childDetails.childInfo.forEach((item, index) => {
                if (this.childDetails.childInfo[index].showAge <= 5) {
                    isvalid += 1;
                }
            });
            if (isvalid == 0) {
                this.showError('Please add a child below 5 years');
                return;
            }
        }
        if (this.baselineSurvey.value.childbelow18 == 'Y' && this.baselineSurvey.value.childbelow5 == 'N') {
            let isvalid = 0;
            this.childDetails.childInfo.forEach((item, index) => {
                if (this.childDetails.childInfo[index].showAge < 5) {
                    isvalid += 1;
                }
            });
            if (isvalid > 0) {
                this.showError('You can not add child below 5 years');
                return;
            }
        }
        if (this.baselineSurvey.value.breastFeeding == 'Y' || this.baselineSurvey.value.breastFeeding == 'N') {
            let isvalid = 0;
            this.childDetails.childInfo.forEach((item, index) => {
                if (this.childDetails.childInfo[index].showAge < 2) {
                    isvalid += 1;
                }
            });
            if (isvalid == 0) {
                this.showError('Please add a child below 2 years');
                return;
            }
        }
        if (this.baselineSurvey.value.childbelow5 == 'Y' && this.baselineSurvey.value.breastFeeding == 'NA') {
            let isvalid = 0;
            this.childDetails.childInfo.forEach((item, index) => {
                if (this.childDetails.childInfo[index].showAge < 2) {
                    isvalid += 1;
                }
            });
            if (isvalid > 0) {
                this.showError('You can not add child below 2 years');
                return;
            }
        }
        if (this.baselineSurvey.value.child < this.childDetails.childInfo.length) {
            this.showError(' Entered child data should not be more than children count');
            return;
        }
        let maleData = this.childDetails.childInfo.filter((x) => x.sex == 'M');
        // console.log(maleData.length);
        let femaleData = this.childDetails.childInfo.filter((x) => x.sex == 'F');
        // console.log(femaleData.length);
        if (this.baselineSurvey.value.fmale < maleData.length) {
            this.showError('Total Male child should not be more than Total Family Member Male');
            return;
        }
        if (this.baselineSurvey.value.ffemale <= femaleData.length) {
            this.showError('Total Female child should not be more than or equal to Total Family Member Female');
            return;
        }
        this.baselineService.saveBaselineSurvey(postBody).subscribe((response) => {
            console.log(response);
            if (response.message == "Success") {
                this.showSuccess(response.message);
                this.resetBaselineCreate();
            }
            else {
                this.showError(response.responseObject);
            }
        });
    }
    openModal(child) {
        this.modalContent = '';
        this.modalReference = this.modalService.open(child, {
            windowClass: 'Child-Create-ModalClass',
        });
    }
    addNewChild() {
        this.childDetails.childInfo.push({
            age: 'string',
            childDetailId: 0,
            childName: '',
            createdOn: 'string',
            dob: '',
            familyDetailId: 0,
            sex: '',
            status: 'A'
        });
    }
    childModalDismiss() {
        var _a;
        (_a = this.modalReference) === null || _a === void 0 ? void 0 : _a.close();
    }
    removeNewChild(i) {
        this.childDetails.childInfo.splice(i, 1);
    }
    restrictZero(event) {
        if (event.target.value.length === 0 && event.key === '0') {
            event.preventDefault();
        }
    }
    zeroFemale() {
        if (this.baselineSurvey.value.ffemale.startsWith(0)) {
            this.showError('Female count should not be zero');
            this.baselineSurvey.controls.ffemale.setValue('');
            return;
        }
    }
    zeroAge() {
        if (this.baselineSurvey.value.age.startsWith(0)) {
            this.showError('Age should not be zero');
            this.baselineSurvey.controls.age.setValue('');
            return;
        }
    }
    zeroMembers() {
        if (this.baselineSurvey.value.households.startsWith(0)) {
            this.showError('Members should not be zero');
            this.baselineSurvey.controls.households.setValue('');
            return;
        }
    }
    familyCountChecking() {
        let totalMale = 0;
        let totalFemale = 0;
        let totalsenior = 0;
        let item = this.baselineSurvey.value;
        if (item.fmale != '' && item.fmale != undefined) {
            totalMale = parseInt(item.fmale);
        }
        if (item.ffemale != '' && item.ffemale != undefined) {
            totalFemale = parseInt(item.ffemale);
        }
        if (item.fsenior != '' && item.fsenior != undefined) {
            totalsenior = parseInt(item.fsenior);
        }
        if (totalsenior > (totalMale + totalFemale)) {
            this.baselineSurvey.controls.fsenior.setValue('');
            this.showError('Senior Citizen count can not be greater than the sum of Male & Female');
        }
    }
    showSuccess(message) {
        this.toaster.success(message, 'Baseline Register Save', {
            timeOut: 3000,
        });
    }
    showError(message) {
        this.toaster.error(message, 'Baseline Register', {
            timeOut: 3000,
        });
    }
    IdType(IdType) {
        if (IdType == '') {
            this.idTypeField = 0;
        }
        else {
            this.idTypeField = IdType;
        }
        if (this.baselineSurvey.value.idtype == '') {
            this.baselineSurvey.controls.pan.setValue('');
            this.baselineSurvey.controls.voter.setValue('');
            this.baselineSurvey.controls.aadhar.setValue('');
        }
    }
    familyType(id) {
        this.familyField = id;
        this.baselineSurvey.controls.households.setValue('');
    }
    radioValueCheck(x) {
        this.showChildDetails = (x === 1);
    }
    checkChildDisabled() {
        let flag = true;
        if (this.childDetails.childInfo.length == 0) {
            flag = false;
        }
        this.childDetails.childInfo.forEach((item) => {
            if (!item.childName || !item.dob || !item.sex) {
                flag = false;
            }
        });
        return flag;
    }
    addMF() {
        let item = this.baselineSurvey.value;
        let male = item.fmale == '' ? 0 : parseInt(item.fmale);
        let female = item.ffemale == '' ? 0 : parseInt(item.ffemale);
        this.addSum = male + female;
        this.checkHousehold();
    }
    checkHousehold() {
        let totalHousehold = 0;
        let totalMale = 0;
        let totalFemale = 0;
        let item = this.baselineSurvey.value;
        if (item.households != '' && item.households != undefined) {
            totalHousehold = parseInt(item.households);
        }
        if (item.fmale != '' && item.fmale != undefined) {
            totalMale = parseInt(item.fmale);
        }
        if (item.ffemale != '' && item.ffemale != undefined) {
            totalFemale = parseInt(item.ffemale);
        }
        if (totalHousehold < (totalMale + totalFemale) && totalHousehold != (totalMale + totalFemale)) {
            this.baselineSurvey.controls.fmale.setValue('');
            this.baselineSurvey.controls.ffemale.setValue('');
            this.addSum = 0;
            this.showError('Total Member of Household must be greater than or equal to sum of Total Male & Total Female');
        }
    }
    checkFamily() {
        let totalHousehold = 0;
        let totalFamily = 0;
        let item = this.baselineSurvey.value;
        if (item.totalFamily != '' && item.totalFamily != undefined) {
            totalFamily = parseInt(item.totalFamily);
        }
        if (item.households != '' && item.households != undefined) {
            totalHousehold = parseInt(item.households);
        }
        if (totalHousehold < totalFamily && totalHousehold != totalFamily) {
            this.showError('Total Member of Household (All family) must be greater than or equal to Total Family');
        }
    }
    checkChildren() {
        let totalChildren = 0;
        let totalMale = 0;
        let totalFemale = 0;
        let totalSenior = 0;
        let item = this.baselineSurvey.value;
        if (item.child != '' && item.child != undefined) {
            totalChildren = parseInt(item.child);
        }
        if (item.fmale != '' && item.fmale != undefined) {
            totalMale = parseInt(item.fmale);
        }
        if (item.ffemale != '' && item.ffemale != undefined) {
            totalFemale = parseInt(item.ffemale);
        }
        if (item.fsenior != '' && item.fsenior != undefined) {
            totalSenior = parseInt(item.fsenior);
        }
        if (totalChildren > ((totalMale + totalFemale) - totalSenior) && totalChildren != ((totalMale + totalFemale) - totalSenior)) {
            this.showError('Children count should be less than or equal to (Male + Female) – (Sr.Citizen)');
            this.baselineSurvey.controls.child.setValue('');
        }
        if (this.baselineSurvey.value.child.startsWith(0)) {
            this.showError('Child count should not be zero');
            this.baselineSurvey.controls.child.setValue('');
            return;
        }
    }
    familyNo(e) {
        if (e.target.value < 2) {
            this.showError('Joint Family will be minimum two');
        }
    }
    saveChild() {
        let totalChildren = 0;
        let item = this.baselineSurvey.value;
        if (item.child != '' && item.child != undefined) {
            totalChildren = parseInt(item.child);
        }
        if (totalChildren < this.childDetails.childInfo.length) {
            this.showError(' Entered child data should not be more than children count');
            // return;
        }
        else {
            console.log(this.childDetails);
            this.modalReference.close();
        }
    }
    restrictTypeOfDate() {
        return false;
    }
}
BaselineCreateComponent.ɵfac = function BaselineCreateComponent_Factory(t) { return new (t || BaselineCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_baseline_survey_service__WEBPACK_IMPORTED_MODULE_4__["BaselineSurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_branch_service__WEBPACK_IMPORTED_MODULE_8__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_9__["SidebarService"])); };
BaselineCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaselineCreateComponent, selectors: [["app-baseline-create"]], viewQuery: function BaselineCreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_location_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.aadhaarId = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.locationComponent = _t.first);
    } }, decls: 223, vars: 88, consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], [1, "scheduler-border"], [1, "form-group", "col-md-6"], ["for", "family"], [1, "text-danger"], ["formControlName", "family", "id", "family", 1, "form-select", 3, "ngClass", "change"], ["value", ""], ["value", "S"], ["value", "J"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group col-md-3", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "firstName"], ["type", "text", "placeholder", "Enter First Name", "formControlName", "firstName", "maxlength", "20", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "middleName"], ["type", "text", "maxlength", "20", "placeholder", "Enter Middle Name", "formControlName", "middleName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "lastName"], ["type", "text", "maxlength", "20", "placeholder", "Enter Last Name", "formControlName", "lastName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "age"], ["type", "", "maxlength", "2", "placeholder", "Enter Age", "formControlName", "age", 1, "form-control", 3, "ngClass", "keypress", "keydown", "keyup"], [1, "form-group", "col-md-3"], ["for", "husbandName"], ["type", "text", "maxlength", "20", "placeholder", "Enter Husband Name", "formControlName", "husbandName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "mobile"], ["type", "", "maxlength", "10", "placeholder", "Enter Mobile No", "formControlName", "mobile", 1, "form-control", 3, "ngClass", "keypress"], ["for", "idtype"], ["formControlName", "idtype", 1, "form-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group col-md", 4, "ngIf"], ["for", "religion"], ["formControlName", "religion", "id", "religion", 1, "form-select", 3, "ngClass"], ["for", "caste"], ["formControlName", "caste", "id", "caste", 1, "form-select", 3, "ngClass"], ["for", "education"], ["formControlName", "education", "id", "education", 1, "form-select"], ["for", "household"], ["formControlName", "household", "id", "household", 1, "form-select"], ["for", "occupation"], ["formControlName", "occupation", "id", "occupation", 1, "form-select"], ["for", "fmale"], ["type", "text", "maxlength", "2", "placeholder", "Child, Adult, and Senior", "formControlName", "fmale", 1, "form-control", 3, "ngClass", "keypress", "keyup", "change"], ["for", "ffemale"], ["type", "text", "placeholder", "Child, Adult, and Senior", "maxlength", "2", "formControlName", "ffemale", 1, "form-control", 3, "ngClass", "keypress", "keyup", "change", "keydown"], ["for", "fsenior"], ["type", "text", "maxlength", "2", "placeholder", "Enter Total Senior Citizen", "formControlName", "fsenior", 1, "form-control", 3, "ngClass", "keypress", "change", "keyup"], ["for", "bbMicro"], ["formControlName", "bbMicro", "id", "bbMicro", 1, "form-select", 3, "ngClass"], ["value", "Y"], ["value", "N"], ["for", "pregnancy"], ["formControlName", "pregnancy", "id", "pregnancy", 1, "form-select", 3, "ngClass"], ["value", "NA"], ["for", "sanitary"], [1, "form-check-inline"], ["name", "sanitary", "type", "radio", "id", "yes", "value", "Y", "formControlName", "sanitary", 1, "form-check-input", 3, "change"], ["for", "", 1, "form-check-label"], ["type", "radio", "id", "no", "value", "N", "formControlName", "sanitary", 1, "form-check-input", 3, "change"], ["for", "haveChildren"], ["name", "haveChildren", "type", "radio", "id", "yes", "value", "Y", "formControlName", "haveChildren", 1, "form-check-input", 3, "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "haveChildren", 1, "form-check-input", 3, "change"], ["for", "", 1, "btn", "btn-link", 3, "disabled", "click"], [1, "text-center"], [1, "btn", "btn-primary", "m-1", 3, "click"], [1, "fas", "fa-check-circle", "m-1"], [1, "btn", "btn-secondary", "m-1", 3, "click"], [1, "fa", "fa-refresh", "m-1"], ["child", ""], [1, "invalid-feedback"], [4, "ngIf"], ["for", "totalFamily"], ["type", "text", "maxlength", "2", "placeholder", "Total Number of Family", "formControlName", "totalFamily", 1, "form-control", 3, "ngClass", "keypress", "keydown", "keyup"], ["for", "households"], ["type", "text", "maxlength", "2", "placeholder", "Total Member of All family", "formControlName", "households", 1, "form-control", 3, "ngClass", "keypress", "keydown", "keyup"], [3, "value"], ["for", "aadhar"], ["type", "text", "maxlength", "14", "placeholder", "Like 2104 0533 7065", "formControlName", "aadhar", 1, "form-control", 3, "ngClass", "keyup", "keypress"], ["aadhaarId", ""], ["for", "pan"], ["type", "text", "maxlength", "10", "placeholder", "Like BBHPM5672K", "formControlName", "pan", 1, "form-control", 3, "ngClass", "keypress"], ["for", "voter"], ["type", "text", "maxlength", "10", "placeholder", "Like NDF1758462", "formControlName", "voter", 1, "form-control", 3, "ngClass", "keypress"], ["for", "child"], ["type", "text", "placeholder", "Enter Children ", "formControlName", "child", "maxlength", "2", 1, "form-control", 3, "ngClass", "keypress", "keydown", "keyup"], ["for", "childbelow18"], ["name", "childbelow18", "type", "radio", "id", "yes", "value", "Y", "formControlName", "childbelow18", 1, "form-check-input", 3, "checked", "change", "click"], ["type", "radio", "id", "no", "value", "N", "formControlName", "childbelow18", 1, "form-check-input", 3, "checked", "change", "click"], ["for", "childbelow5"], ["name", "childbelow5", "type", "radio", "id", "yes", "value", "Y", "formControlName", "childbelow5", 1, "form-check-input", 3, "checked", "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "childbelow5", 1, "form-check-input", 3, "checked", "change"], ["for", "institutional"], ["type", "radio", "name", "institutional", "id", "yes", "value", "I", "formControlName", "institutional", 1, "form-check-input", 3, "change"], ["for", "institutional", 1, "form-check-label"], ["type", "radio", "name", "institutional", "id", "no", "value", "H", "formControlName", "institutional", 1, "form-check-input", 3, "change"], ["for", "breastFeeding"], ["type", "radio", "name", "breastFeeding", "id", "yes", "value", "Y", "formControlName", "breastFeeding", 1, "form-check-input", 3, "change"], ["for", "breastFeeding", 1, "form-check-label"], ["type", "radio", "name", "breastFeeding", "id", "no", "value", "N", "formControlName", "breastFeeding", 1, "form-check-input", 3, "change"], ["type", "radio", "name", "breastFeeding", "id", "na", "value", "NA", "formControlName", "breastFeeding", 1, "form-check-input", 3, "change"], [1, "modal-content"], [1, "modal-header"], [1, "col-md-7"], ["id", "modal-basic-title", 1, "modal-title"], [1, "col-md-3"], ["title", "Add Child", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", 3, "click"], [1, "col-md-2"], ["title", "close", 1, "close", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "bttn", 3, "disabled", "click"], ["type", "text", "maxlength", "20", "placeholder", "Enter Child Name", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngModel", "keypress", "ngModelChange"], ["type", "date", 1, "form-control", 3, "ngModel", "min", "max", "ngModelChange", "keydown"], ["id", "sex", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "M"], ["value", "F"], ["value", "O"], ["type", "button", 1, "btn", "btn-remove", 3, "click"], [1, "fas", "fa-minus-circle"]], template: function BaselineCreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Baseline Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fieldset", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "legend", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HH Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Family Type:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_Template_select_change_19_listener($event) { return ctx.familyType($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "-- Select Family Type --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Single Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Joint Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BaselineCreateComponent_div_26_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BaselineCreateComponent_div_27_Template, 7, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BaselineCreateComponent_div_28_Template, 7, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, BaselineCreateComponent_div_29_Template, 7, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "fieldset", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "legend", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Family Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "First Name:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_39_listener($event) { return ctx.validationService.onlyAlphabets($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, BaselineCreateComponent_div_40_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Middle Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_44_listener($event) { return ctx.validationService.onlyAlphabets($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, BaselineCreateComponent_div_45_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_49_listener($event) { return ctx.validationService.onlyAlphabets($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, BaselineCreateComponent_div_50_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Age:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_56_listener($event) { return ctx.validationService.onlyInteger($event); })("keydown", function BaselineCreateComponent_Template_input_keydown_56_listener($event) { return ctx.restrictZero($event); })("keyup", function BaselineCreateComponent_Template_input_keyup_56_listener() { return ctx.zeroAge(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, BaselineCreateComponent_div_57_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Husband/Guardian\u2019s:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_64_listener($event) { return ctx.validationService.onlyAlphabetsAndSpace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, BaselineCreateComponent_div_65_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Mobile No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_69_listener($event) { return ctx.validationService.onlyInteger($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, BaselineCreateComponent_div_70_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "ID Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_Template_select_change_74_listener($event) { return ctx.IdType($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "-- Select --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, BaselineCreateComponent_option_77_Template, 2, 2, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, BaselineCreateComponent_div_78_Template, 8, 5, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, BaselineCreateComponent_div_79_Template, 7, 5, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, BaselineCreateComponent_div_80_Template, 7, 5, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Religion :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "-- Select Religion --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, BaselineCreateComponent_option_90_Template, 2, 2, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, BaselineCreateComponent_div_91_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Caste :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "-- Select Caste --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, BaselineCreateComponent_option_100_Template, 2, 2, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, BaselineCreateComponent_div_101_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Education Level:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "-- Select Education --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, BaselineCreateComponent_option_108_Template, 2, 2, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Monthly Family Income: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "-- Select Income --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, BaselineCreateComponent_option_115_Template, 2, 2, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Occupation:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "select", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "-- Select --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, BaselineCreateComponent_option_123_Template, 2, 2, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Total Male Family Member:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_129_listener($event) { return ctx.validationService.onlyInteger($event); })("keyup", function BaselineCreateComponent_Template_input_keyup_129_listener() { return ctx.addMF(); })("change", function BaselineCreateComponent_Template_input_change_129_listener() { return ctx.checkChildren(); })("keyup", function BaselineCreateComponent_Template_input_keyup_129_listener() { return ctx.familyCountChecking(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, BaselineCreateComponent_div_130_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Total Female Family Member:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_136_listener($event) { return ctx.validationService.onlyInteger($event); })("keyup", function BaselineCreateComponent_Template_input_keyup_136_listener() { return ctx.addMF(); })("change", function BaselineCreateComponent_Template_input_change_136_listener() { return ctx.checkChildren(); })("keyup", function BaselineCreateComponent_Template_input_keyup_136_listener() { return ctx.familyCountChecking(); })("keyup", function BaselineCreateComponent_Template_input_keyup_136_listener() { return ctx.checkHousehold(); })("keydown", function BaselineCreateComponent_Template_input_keydown_136_listener($event) { return ctx.restrictZero($event); })("keyup", function BaselineCreateComponent_Template_input_keyup_136_listener() { return ctx.zeroFemale(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, BaselineCreateComponent_div_137_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Total Senior Citizen :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_145_listener($event) { return ctx.validationService.onlyInteger($event); })("change", function BaselineCreateComponent_Template_input_change_145_listener() { return ctx.checkChildren(); })("keyup", function BaselineCreateComponent_Template_input_keyup_145_listener() { return ctx.familyCountChecking(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, BaselineCreateComponent_div_146_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Micro Group :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "select", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "-- Micro Group --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Non-Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](160, BaselineCreateComponent_div_160_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Are you pregnant now? :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "-- Select Pregnancy --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](175, BaselineCreateComponent_div_175_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Do you have sanitary latrine at your house premise?\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_Template_input_change_182_listener($event) { return ctx.changesanitary($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " \u00A0\u00A0Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_Template_input_change_187_listener($event) { return ctx.changesanitary($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " \u00A0\u00A0No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Do you have any child?\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_Template_input_change_196_listener($event) { return ctx.havesChildren($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " \u00A0\u00A0Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineCreateComponent_Template_input_change_201_listener($event) { return ctx.havesChildren($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " \u00A0\u00A0No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](205, BaselineCreateComponent_div_205_Template, 7, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](206, BaselineCreateComponent_div_206_Template, 14, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](207, BaselineCreateComponent_div_207_Template, 14, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](208, BaselineCreateComponent_div_208_Template, 14, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](210, BaselineCreateComponent_div_210_Template, 18, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineCreateComponent_Template_button_click_212_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](222); return ctx.openModal(_r31); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Child Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineCreateComponent_Template_button_click_215_listener() { return ctx.saveMoreBaselineCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineCreateComponent_Template_button_click_218_listener() { return ctx.resetBaselineCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](221, BaselineCreateComponent_ng_template_221_Template, 30, 2, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.baselineSurvey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](49, _c2, ctx.f.family.invalid && ctx.f.family.touched, ctx.f.family.valid && (ctx.f.family.dirty || ctx.f.family.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.family.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.familyField == "J");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.familyField == "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.familyField == "J");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](52, _c2, ctx.f.firstName.invalid && ctx.f.firstName.touched, ctx.f.firstName.valid && (ctx.f.firstName.dirty || ctx.f.firstName.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.firstName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c1, ctx.f.middleName.invalid && ctx.f.middleName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.middleName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c1, ctx.f.lastName.invalid && ctx.f.lastName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.lastName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](59, _c2, ctx.f.age.invalid && ctx.f.age.touched, ctx.f.age.valid && (ctx.f.age.dirty || ctx.f.age.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.age.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](62, _c2, ctx.f.husbandName.invalid && ctx.f.husbandName.touched, ctx.f.husbandName.valid && (ctx.f.husbandName.dirty || ctx.f.husbandName.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.husbandName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c1, ctx.f.mobile.invalid && ctx.f.mobile.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.mobile.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idTypeField == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idTypeField == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idTypeField == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](67, _c2, ctx.f.religion.invalid && ctx.f.religion.touched, ctx.f.religion.valid && (ctx.f.religion.dirty || ctx.f.religion.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.religionDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.religion.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](70, _c2, ctx.f.caste.invalid && ctx.f.caste.touched, ctx.f.caste.valid && (ctx.f.caste.dirty || ctx.f.caste.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.casteList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.caste.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.educationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.householdIncomeDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.occupationDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](73, _c2, ctx.f.fmale.invalid && ctx.f.fmale.touched, ctx.f.fmale.valid && (ctx.f.fmale.dirty || ctx.f.fmale.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.fmale.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](76, _c2, ctx.f.ffemale.invalid && ctx.f.ffemale.touched, ctx.f.ffemale.valid && (ctx.f.ffemale.dirty || ctx.f.ffemale.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.ffemale.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Male + Female : ", ctx.addSum, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](79, _c2, ctx.f.fsenior.invalid && ctx.f.fsenior.touched, ctx.f.fsenior.valid && (ctx.f.fsenior.dirty || ctx.f.fsenior.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.fsenior.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](82, _c2, ctx.f.bbMicro.invalid && ctx.f.bbMicro.touched, ctx.f.bbMicro.valid && (ctx.f.bbMicro.dirty || ctx.f.bbMicro.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.bbMicro.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](85, _c2, ctx.f.pregnancy.invalid && ctx.f.pregnancy.touched, ctx.f.pregnancy.valid && (ctx.f.pregnancy.dirty || ctx.f.pregnancy.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.pregnancy.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.haveChildren === "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.haveChildren === "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.childbelow18 === "Y" && ctx.haveChildren === "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.childbelow5 === "Y" && ctx.haveChildren === "Y" && ctx.childbelow18 === "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.childbelow5 === "Y" && ctx.haveChildren === "Y" && ctx.childbelow18 === "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.showChildDetails);
    } }, directives: [_shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _location_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 25px;\r\n  margin-left: -170px;\r\n}\r\n\r\n.fa-minus-circle[_ngcontent-%COMP%] {\r\n  color: red !important;\r\n  font-size: 25px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  margin-left: 290px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n  overflow-x: auto;\r\n  width: 750px;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 150px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VsaW5lLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJiYXNlbGluZS1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mYS1wbHVzLWNpcmNsZSB7XHJcbiAgY29sb3I6ICMzZTc3NTggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNzBweDtcclxufVxyXG5cclxuLmZhLW1pbnVzLWNpcmNsZSB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBtYXJnaW4tbGVmdDogMjkwcHg7XHJcbn1cclxuXHJcbiN0YWJsZV93cmFwcGVyIC50YWJsZSB0aGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE3cHggMzBweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICM0OTk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgd2lkdGg6IDc1MHB4O1xyXG59XHJcblxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaselineCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-baseline-create',
                templateUrl: './baseline-create.component.html',
                styleUrls: ['./baseline-create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _baseline_survey_service__WEBPACK_IMPORTED_MODULE_4__["BaselineSurveyService"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: _core_http_branch_service__WEBPACK_IMPORTED_MODULE_8__["BranchService"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_9__["SidebarService"] }]; }, { aadhaarId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['aadhaarId']
        }], locationComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_location_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"]]
        }] }); })();


/***/ }),

/***/ "OgXQ":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/baseline-survey/baseline-edit/baseline-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BaselineEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaselineEditComponent", function() { return BaselineEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/validation.service */ "yjnX");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/http/http.service */ "YwHQ");
/* harmony import */ var _baseline_survey_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../baseline-survey.service */ "SMi9");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function BaselineEditComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selection of family is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineEditComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineEditComponent_div_42_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.family.errors.required);
} }
function BaselineEditComponent_div_43_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total Number of Family is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineEditComponent_div_43_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineEditComponent_div_43_div_6_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.totalFamily.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function BaselineEditComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Family:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineEditComponent_div_43_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.validationService.onlyInteger($event); })("keydown", function BaselineEditComponent_div_43_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.restrictZero($event); })("keyup", function BaselineEditComponent_div_43_Template_input_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.familyNo($event); })("ngModelChange", function BaselineEditComponent_div_43_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.totalFamili = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaselineEditComponent_div_43_div_6_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.totalFamili)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.f.totalFamily.invalid && ctx_r1.f.totalFamily.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.totalFamily.errors);
} }
function BaselineEditComponent_div_44_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total Member of Household is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineEditComponent_div_44_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineEditComponent_div_44_div_6_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.f.households.errors.required);
} }
const _c1 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function BaselineEditComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Member Household:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineEditComponent_div_44_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.validationService.onlyInteger($event); })("keydown", function BaselineEditComponent_div_44_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.restrictZero($event); })("ngModelChange", function BaselineEditComponent_div_44_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.totalMembers = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaselineEditComponent_div_44_div_6_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.totalMembers)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r2.f.households.invalid && ctx_r2.f.households.touched, ctx_r2.f.households.valid && (ctx_r2.f.households.dirty || ctx_r2.f.households.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.households.errors);
} }
function BaselineEditComponent_div_45_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total Member of Household is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineEditComponent_div_45_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineEditComponent_div_45_div_6_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.f.households.errors.required);
} }
function BaselineEditComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Member Household:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BaselineEditComponent_div_45_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.validationService.onlyInteger($event); })("keydown", function BaselineEditComponent_div_45_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.restrictZero($event); })("keyup", function BaselineEditComponent_div_45_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.checkFamily(); })("ngModelChange", function BaselineEditComponent_div_45_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.totalMembers = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaselineEditComponent_div_45_div_6_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.totalMembers)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r3.f.households.invalid && ctx_r3.f.households.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.households.errors);
} }
class BaselineEditComponent {
    constructor(routes, fb, toaster, validationService, httpService, baselineService, sidebarService) {
        this.routes = routes;
        this.fb = fb;
        this.toaster = toaster;
        this.validationService = validationService;
        this.httpService = httpService;
        this.baselineService = baselineService;
        this.sidebarService = sidebarService;
    }
    ngOnInit() {
        this.routes.queryParams.subscribe(params => {
            this.houseHoldId = params['id'];
            this.branch = params['bName'];
            this.village = params['vName'];
            this.branchVillageMapId = params['vId'];
            this.ss = params['ssName'];
            this.swasthyaSahayikaId = params['ssId'];
            this.famType = params['type'];
            this.totalMembers = params['tMem'];
            this.totalFamili = params['tFam'];
            this.householdNumber = params['hhNo'];
            console.log(params, 'abccccccccc');
            this.familyType(this.famType);
        });
        this.createForm();
        this.baselineSurvey.get('branchName').disable();
        this.baselineSurvey.get('villageName').disable();
        this.baselineSurvey.get('ssName').disable();
        let postBody = {
            activeStatus: "A",
            dataAccessDTO: this.httpService.dataAccessDTO,
            id: this.houseHoldId
        };
        this.baselineService.baselineSurveyStatus(postBody).subscribe((response) => {
            console.log(response);
            this.familyStatus = response.responseObject.familyDetailRemaingStatusDTO;
            console.log(this.familyStatus);
        });
    }
    createForm() {
        this.baselineSurvey = this.fb.group({
            branchName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            villageName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ssName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            family: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            totalFamily: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            households: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get f() {
        return this.baselineSurvey.controls;
    }
    familyType(id) {
        this.familyField = id;
        // this.baselineSurvey.controls.households.setValue('');
    }
    restrictZero(event) {
        if (event.target.value.length === 0 && event.key === '0') {
            event.preventDefault();
        }
    }
    familyNo(e) {
        if (e.target.value < 2) {
            this.showError('Joint Family will be minimum two');
        }
    }
    checkFamily() {
        let totalHousehold = 0;
        let totalFamily = 0;
        let item = this.baselineSurvey.value;
        if (item.totalFamily != '' && item.totalFamily != undefined) {
            totalFamily = parseInt(item.totalFamily);
        }
        if (item.households != '' && item.households != undefined) {
            totalHousehold = parseInt(item.households);
        }
        if (totalHousehold < totalFamily && totalHousehold != totalFamily) {
            this.showError('Total Member of Household (All family) must be greater than or equal to Total Family');
        }
    }
    showSuccess(message) {
        this.toaster.success(message, 'Household Info Save', {
            timeOut: 3000,
        });
    }
    showError(message) {
        this.toaster.error(message, 'Household Info Save', {
            timeOut: 3000,
        });
    }
    backEditHousehold() {
        window.history.go(-1);
    }
    saveEditHousehold() {
        if (this.familyField == 'J') {
            this.tFamily = this.totalFamili;
        }
        else if (this.familyField == 'S') {
            this.tFamily = 1;
        }
        const postBody = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            houseHoldDetailDTO: {
                branchDTO: {
                    branchId: this.sidebarService.branchId,
                    branchName: this.sidebarService.branchName,
                },
                branchVillageMapId: this.branchVillageMapId,
                familyDetailDTOList: [],
                familyType: this.famType,
                houseHoldNumber: this.householdNumber,
                householdDetailId: this.houseHoldId,
                numberOfFamily: this.tFamily,
                status: "A",
                swasthyaSahayikaDTO: {
                    name: this.ss ? this.ss : '',
                    swasthyaSahayikaId: this.swasthyaSahayikaId ? this.swasthyaSahayikaId : 0
                },
                totalMembers: this.totalMembers
            }
        };
        console.log(postBody);
        if (!this.baselineSurvey.value.family) {
            this.showError('Please Select Family Type');
            return;
        }
        if (this.familyField === 'J') {
            if (!this.baselineSurvey.value.totalFamily) {
                this.showError('Please Enter Total Number of Family');
                return;
            }
            else if (this.baselineSurvey.value.totalFamily < 2) {
                this.showError('Joint Family will be minimum two');
                return;
            }
        }
        if (!this.baselineSurvey.value.households) {
            this.showError('Please Enter Total Member of Household (All Family)');
            return;
        }
        if (this.familyField === 'J') {
            if (this.baselineSurvey.value.households) {
                let totalHousehold = 0;
                let totalFamily = 0;
                let item = this.baselineSurvey.value;
                if (item.totalFamily != '' && item.totalFamily != undefined) {
                    totalFamily = parseInt(item.totalFamily);
                }
                if (item.households != '' && item.households != undefined) {
                    totalHousehold = parseInt(item.households);
                }
                if (totalHousehold < totalFamily && totalHousehold != totalFamily) {
                    this.showError('Total Member of Household (All family) must be greater than or equal to Total Family');
                    return;
                }
            }
        }
        if (this.totalMembers < this.familyStatus.createdFamilyMambersCount) {
            this.showError('Total Members should not be less than the created Members');
            return;
        }
        if (this.totalFamili < this.familyStatus.createdFamilyCount) {
            this.showError('Total Family should not be less than the created Family');
            return;
        }
        if (this.familyStatus.createdFamilyCount > 1 && this.famType == 'S') {
            this.showError('Family type should not be single');
            return;
        }
        this.baselineService.saveBaselineSurvey(postBody).subscribe((response) => {
            console.log(response);
            if (response.status == true) {
                this.showSuccess(response.message);
                this.backEditHousehold();
            }
            else {
                this.showError(response.responseObject);
            }
        });
    }
}
BaselineEditComponent.ɵfac = function BaselineEditComponent_Factory(t) { return new (t || BaselineEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_baseline_survey_service__WEBPACK_IMPORTED_MODULE_6__["BaselineSurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_7__["SidebarService"])); };
BaselineEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaselineEditComponent, selectors: [["app-baseline-edit"]], decls: 53, vars: 13, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], [1, "scheduler-border"], [1, "form-group", "col-md"], ["for", "branchName"], [1, "text-danger"], ["type", "text", "formControlName", "branchName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "villageName"], ["type", "text", "formControlName", "villageName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "ssName"], ["type", "text", "formControlName", "ssName", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-6"], ["for", "family"], ["formControlName", "family", "id", "family", 1, "form-select", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["value", ""], ["value", "S"], ["value", "J"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group col-md-3", 4, "ngIf"], [1, "text-center"], [1, "btn", "btn-primary", "m-1", 3, "click"], [1, "fas", "fa-check-circle", "m-1"], [1, "btn", "btn-secondary", "m-1", 3, "click"], [1, "fa", "fa-arrow-left", "m-1"], [1, "invalid-feedback"], [4, "ngIf"], [1, "form-group", "col-md-3"], ["for", "totalFamily"], ["type", "text", "maxlength", "2", "placeholder", "Total Number of Family", "formControlName", "totalFamily", 1, "form-control", 3, "ngModel", "ngClass", "keypress", "keydown", "keyup", "ngModelChange"], ["for", "households"], ["type", "text", "maxlength", "2", "placeholder", "Total Member of All family", "formControlName", "households", 1, "form-control", 3, "ngModel", "ngClass", "keypress", "keydown", "ngModelChange"], ["type", "text", "maxlength", "2", "placeholder", "Total Member of All family", "formControlName", "households", 1, "form-control", 3, "ngModel", "ngClass", "keypress", "keydown", "keyup", "ngModelChange"]], template: function BaselineEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit Household Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "legend", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "HH Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Branch :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BaselineEditComponent_Template_input_ngModelChange_16_listener($event) { return ctx.branch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "GS/ Ward/ Village :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BaselineEditComponent_Template_input_ngModelChange_22_listener($event) { return ctx.village = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Name of SS :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BaselineEditComponent_Template_input_ngModelChange_28_listener($event) { return ctx.ss = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Family Type:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BaselineEditComponent_Template_select_ngModelChange_35_listener($event) { return ctx.famType = $event; })("change", function BaselineEditComponent_Template_select_change_35_listener($event) { return ctx.familyType($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "-- Select Family Type --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Single Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Joint Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, BaselineEditComponent_div_42_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, BaselineEditComponent_div_43_Template, 7, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, BaselineEditComponent_div_44_Template, 7, 6, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, BaselineEditComponent_div_45_Template, 7, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineEditComponent_Template_button_click_47_listener() { return ctx.saveEditHousehold(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineEditComponent_Template_button_click_50_listener() { return ctx.backEditHousehold(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.baselineSurvey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.branch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.village);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ss);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.famType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx.f.family.invalid && ctx.f.family.touched, ctx.f.family.valid && (ctx.f.family.dirty || ctx.f.family.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.family.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.familyField == "J");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.familyField == "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.familyField == "J");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: [".form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n  \r\n \r\n  fieldset.scheduler-border[_ngcontent-%COMP%] {\r\n    border: 1px groove #ddd !important;\r\n    padding: 0 1.4em 1.4em 1.4em !important;\r\n    margin: 0 0 1.5em 0 !important;\r\n  }\r\n  \r\n \r\n  legend.scheduler-border[_ngcontent-%COMP%] {\r\n    border: 1px groove #ddd !important;\r\n    background-color: gray;\r\n    width: 150px;\r\n    color: #ddd;\r\n    font-size: 1.2em !important;\r\n    font-weight: bold !important;\r\n    font-family: ui-sans-serif;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VsaW5lLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtFQUN2Qjs7O0VBR0E7SUFDRSxrQ0FBa0M7SUFDbEMsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtFQUNoQzs7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwwQkFBMEI7RUFDNUIiLCJmaWxlIjoiYmFzZWxpbmUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIH1cclxuICBcclxuIFxyXG4gIGZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgMS40ZW0gMS40ZW0gMS40ZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAwIDEuNWVtIDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgbGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjb2xvcjogI2RkZDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaselineEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-baseline-edit',
                templateUrl: './baseline-edit.component.html',
                styleUrls: ['./baseline-edit.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: _baseline_survey_service__WEBPACK_IMPORTED_MODULE_6__["BaselineSurveyService"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_7__["SidebarService"] }]; }, null); })();


/***/ }),

/***/ "SfUW":
/*!************************************************************************!*\
  !*** ./src/app/modules/baseline-survey/location/location.component.ts ***!
  \************************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var _baseline_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../baseline-survey.service */ "SMi9");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "G/xV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LocationComponent_div_2_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", region_r12.regionName, " ");
} }
function LocationComponent_div_2_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocationComponent_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LocationComponent_div_2_div_10_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.region.errors.required);
} }
function LocationComponent_div_2_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r14.branchName, " ");
} }
function LocationComponent_div_2_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocationComponent_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LocationComponent_div_2_div_20_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.f.branch.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function LocationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LocationComponent_div_2_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LocationComponent_div_2_option_9_Template, 2, 1, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LocationComponent_div_2_div_10_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LocationComponent_div_2_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeBranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LocationComponent_div_2_option_19_Template, 2, 1, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LocationComponent_div_2_div_20_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r0.f.region.invalid && ctx_r0.f.region.touched, ctx_r0.f.region.valid && (ctx_r0.f.region.dirty || ctx_r0.f.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx_r0.f.branch.invalid && ctx_r0.f.branch.touched, ctx_r0.f.branch.valid && (ctx_r0.f.branch.dirty || ctx_r0.f.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.branch.errors);
} }
function LocationComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", block_r19.blockName, " ");
} }
function LocationComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocationComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LocationComponent_div_14_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.block.errors.required);
} }
function LocationComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gp_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gp_r21.name, " ");
} }
function LocationComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocationComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LocationComponent_div_24_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.gp.errors.required);
} }
function LocationComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vill_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vill_r23.villageName, " ");
} }
function LocationComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocationComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LocationComponent_div_34_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.gram.errors.required);
} }
function LocationComponent_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ss_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ss_r25.swasthyaSahayikaId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ss_r25.swasthyaSahayikaName, " ");
} }
class LocationComponent {
    constructor(fb, sidebarService, baselineService) {
        this.fb = fb;
        this.sidebarService = sidebarService;
        this.baselineService = baselineService;
        this.regionList = [];
        this.branchList = [];
        this.villagesOfBranch = [];
        this.gpDtoList = [];
        this.villageDtoList = [];
        this.ssList = [];
        this.swasthyaSahayika = [];
        this.loader = true;
    }
    ngOnInit() {
        this.createForm();
        setTimeout(() => {
            this.getLocationHco();
        }, 500);
        this.regionList = this.sidebarService.listOfRegion;
        this.regionBranchHide = this.sidebarService.regionBranchHide;
    }
    getLocationHco() {
        let dto = {
            dataAccessDTO: {
                userId: this.sidebarService.userId,
                userName: this.sidebarService.loginId,
            },
            branchId: this.sidebarService.branchId
        };
        this.baselineService.villagesOfBranch(dto).subscribe((res) => {
            console.log(res, 'res list');
            this.villagesOfBranch = res.responseObject;
            console.log(this.villagesOfBranch, 'villagesOfBranch1');
        });
    }
    changeRegion(region) {
        var _a, _b, _c;
        let regionId = (_a = this.regionList.find((reg) => reg.regionName == region)) === null || _a === void 0 ? void 0 : _a.regionMasterId;
        let req = {
            dataAccessDTO: {
                userId: (_b = this.sidebarService) === null || _b === void 0 ? void 0 : _b.userId,
                userName: (_c = this.sidebarService) === null || _c === void 0 ? void 0 : _c.loginId,
            },
            regionId: regionId,
        };
        this.loader = false;
        setTimeout(() => {
            this.baselineService.listOfBranchesOfARegion(req).subscribe((res) => {
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
        this.locationForm.controls.swasthyaSahayika.setValue('');
    }
    changeBranch(branch) {
        var _a, _b;
        this.sidebarService.branchId = (_b = (_a = this.branchList) === null || _a === void 0 ? void 0 : _a.find(bran => bran.branchName == branch)) === null || _b === void 0 ? void 0 : _b.branchId;
        this.sidebarService.branchName = this.locationForm.get('branch').value;
        let Dto = {
            dataAccessDTO: {
                userId: this.sidebarService.userId,
                userName: this.sidebarService.loginId,
            },
            branchId: this.sidebarService.branchId
        };
        this.loader = false;
        setTimeout(() => {
            this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
                this.loader = true;
                this.villagesOfBranch = res.responseObject;
                console.log(this.villagesOfBranch, 'villagesOfBranch2');
            });
        }, 500);
        this.locationForm.controls.block.setValue('');
        this.locationForm.controls.gp.setValue('');
        this.locationForm.controls.gram.setValue('');
        this.locationForm.controls.swasthyaSahayika.setValue('');
    }
    changeBlock(blockname) {
        var _a;
        this.gpDtoList = (_a = this.villagesOfBranch.find(block => block.blockName == blockname)) === null || _a === void 0 ? void 0 : _a.gpDtoList;
        this.selectedBlock = this.locationForm.get('block').value;
        this.locationForm.controls.gp.setValue('');
        this.locationForm.controls.gram.setValue('');
        this.locationForm.controls.swasthyaSahayika.setValue('');
    }
    changeGp(gpName) {
        var _a, _b;
        this.villageDtoList = (_b = (_a = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)) === null || _a === void 0 ? void 0 : _a.gpDtoList.find(gp => gp.name == gpName)) === null || _b === void 0 ? void 0 : _b.villageDtoList;
        this.selectedGp = this.locationForm.get('gp').value;
        this.locationForm.controls.gram.setValue('');
        this.locationForm.controls.swasthyaSahayika.setValue('');
    }
    changeVillage(villagename) {
        var _a, _b, _c, _d, _e, _f;
        let villId = (_c = (_b = (_a = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)) === null || _a === void 0 ? void 0 : _a.gpDtoList.find(gp => gp.name == this.selectedGp)) === null || _b === void 0 ? void 0 : _b.villageDtoList.find(vill => vill.villageName == villagename)) === null || _c === void 0 ? void 0 : _c.villageMasterId;
        this.sidebarService.branchVillageMapId = (_f = (_e = (_d = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)) === null || _d === void 0 ? void 0 : _d.gpDtoList.find(gp => gp.name == this.selectedGp)) === null || _e === void 0 ? void 0 : _e.villageDtoList.find(vill => vill.villageName == villagename)) === null || _f === void 0 ? void 0 : _f.branchVillageMapId;
        let req = {
            dataAccessDTO: {
                userId: this.sidebarService.userId,
                userName: this.sidebarService.loginId,
            },
            villageId: villId,
            userId: this.sidebarService.userId
        };
        this.loader = false;
        setTimeout(() => {
            this.baselineService.ssVillageWiseList(req).subscribe((res) => {
                console.log(res);
                this.loader = true;
                this.swasthyaSahayika = res.responseObject;
            }, (error) => {
                this.loader = true;
                this.swasthyaSahayika = null;
            });
        }, 500);
        this.locationForm.controls.swasthyaSahayika.setValue('');
    }
    changeSS(ss) {
        var _a;
        this.sidebarService.swasthyaSahayikaId = ss;
        this.sidebarService.swasthyaSahayikaName = (_a = this.swasthyaSahayika.find(i => i.swasthyaSahayikaId == ss)) === null || _a === void 0 ? void 0 : _a.swasthyaSahayikaName;
    }
    createForm() {
        this.locationForm = this.fb.group({
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            swasthyaSahayika: [''],
        });
    }
    get f() {
        return this.locationForm.controls;
    }
}
LocationComponent.ɵfac = function LocationComponent_Factory(t) { return new (t || LocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_baseline_survey_service__WEBPACK_IMPORTED_MODULE_3__["BaselineSurveyService"])); };
LocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationComponent, selectors: [["app-location"]], decls: 43, vars: 22, consts: [[3, "hidden"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], ["for", "swasthyaSahayika"], ["formControlName", "swasthyaSahayika", "id", "swasthyaSahayika", 1, "form-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"]], template: function LocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LocationComponent_div_2_Template, 21, 12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Block :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LocationComponent_Template_select_change_10_listener($event) { return ctx.changeBlock($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "-- Select Block --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LocationComponent_option_13_Template, 2, 1, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LocationComponent_div_14_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "GP/ Municipality :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LocationComponent_Template_select_change_20_listener($event) { return ctx.changeGp($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "-- Select GP/ Municipality --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LocationComponent_option_23_Template, 2, 1, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LocationComponent_div_24_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "GS/ Ward/ Village:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LocationComponent_Template_select_change_30_listener($event) { return ctx.changeVillage($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "-- Select Village --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LocationComponent_option_33_Template, 2, 1, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LocationComponent_div_34_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Name of SS :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LocationComponent_Template_select_change_38_listener($event) { return ctx.changeSS($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "-- Select SS --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, LocationComponent_option_41_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.locationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx.f.block.invalid && ctx.f.block.touched, ctx.f.block.valid && (ctx.f.block.dirty || ctx.f.block.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.block.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c0, ctx.f.gp.invalid && ctx.f.gp.touched, ctx.f.gp.valid && (ctx.f.gp.dirty || ctx.f.gp.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gpDtoList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.gp.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c0, ctx.f.gram.invalid && ctx.f.gram.touched, ctx.f.gram.valid && (ctx.f.gram.dirty || ctx.f.gram.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.villageDtoList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.gram.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.swasthyaSahayika);
    } }, directives: [_shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-location',
                templateUrl: './location.component.html',
                styleUrls: ['./location.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"] }, { type: _baseline_survey_service__WEBPACK_IMPORTED_MODULE_3__["BaselineSurveyService"] }]; }, null); })();


/***/ }),

/***/ "U4S0":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/baseline-survey/baseline-view/baseline-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BaselineViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaselineViewComponent", function() { return BaselineViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _baseline_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../baseline-survey.service */ "SMi9");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/http/http.service */ "YwHQ");
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/confirmation-dialog/confirmation-dialog.service */ "aQtA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_http_branch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/http/branch.service */ "g6Br");
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/validation.service */ "yjnX");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "G/xV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");

















function BaselineViewComponent_div_8_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", region_r12.regionName, " ");
} }
function BaselineViewComponent_div_8_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineViewComponent_div_8_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineViewComponent_div_8_div_10_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.region.errors.required);
} }
function BaselineViewComponent_div_8_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r14.branchName, " ");
} }
function BaselineViewComponent_div_8_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineViewComponent_div_8_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineViewComponent_div_8_div_20_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.f.branch.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function BaselineViewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineViewComponent_div_8_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BaselineViewComponent_div_8_option_9_Template, 2, 1, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BaselineViewComponent_div_8_div_10_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineViewComponent_div_8_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeBranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BaselineViewComponent_div_8_option_19_Template, 2, 1, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BaselineViewComponent_div_8_div_20_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r0.f.region.invalid && ctx_r0.f.region.touched, ctx_r0.f.region.valid && (ctx_r0.f.region.dirty || ctx_r0.f.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx_r0.f.branch.invalid && ctx_r0.f.branch.touched, ctx_r0.f.branch.valid && (ctx_r0.f.branch.dirty || ctx_r0.f.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.branch.errors);
} }
function BaselineViewComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vill_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vill_r19.villageName, " ");
} }
function BaselineViewComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Village Selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineViewComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaselineViewComponent_div_18_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.gram.errors.required);
} }
function BaselineViewComponent_tr_64_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineViewComponent_tr_64_td_13_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.gotoFamily(item_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineViewComponent_tr_64_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineViewComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineViewComponent_tr_64_Template_td_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const item_r21 = ctx.$implicit; const i_r22 = ctx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](69); return ctx_r28.openModal(_r4, item_r21.familyDetailDTOList, item_r21, i_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BaselineViewComponent_tr_64_td_13_Template, 2, 0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BaselineViewComponent_tr_64_td_14_Template, 2, 0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineViewComponent_tr_64_Template_i_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const item_r21 = ctx.$implicit; const i_r22 = ctx.index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.editHousehold(item_r21, i_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineViewComponent_tr_64_Template_i_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const item_r21 = ctx.$implicit; const i_r22 = ctx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](69); return ctx_r31.deleteHousehold(item_r21, i_r22, _r4, item_r21.familyDetailDTOList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r3.p - 1) * 5 + i_r22 + 1 ? (ctx_r3.p - 1) * 5 + i_r22 + 1 : i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r21.houseHoldNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r21.familyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r21.numberOfFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r21.totalMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r21.familyType == "J");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r21.familyType == "S");
} }
function BaselineViewComponent_ng_template_68_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineViewComponent_ng_template_68_tr_41_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineViewComponent_ng_template_68_tr_41_td_17_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const item_r38 = ctx_r42.$implicit; const i_r39 = ctx_r42.index; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.editFamily(item_r38, i_r39, ctx_r41.items); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineViewComponent_ng_template_68_tr_41_td_17_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const item_r38 = ctx_r45.$implicit; const i_r39 = ctx_r45.index; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.deleteFamily(item_r38, i_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineViewComponent_ng_template_68_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineViewComponent_ng_template_68_tr_41_Template_td_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const item_r38 = ctx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71); return ctx_r46.familyModal(_r6, item_r38.familyDetailId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BaselineViewComponent_ng_template_68_tr_41_td_17_Template, 3, 0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r39 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r38.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r38.firstName, " ", item_r38.middleName, " ", item_r38.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r38.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r38.totaFamilyMemberFemales + item_r38.totaFamilyMemberMales);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r38.totalNumberOfChildren);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r38.existingChildCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.modalTitle == "V");
} }
function BaselineViewComponent_ng_template_68_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineViewComponent_ng_template_68_div_42_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.changeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 Select this checkbox for deleting Household ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "! Important : All family in this household will be deleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineViewComponent_ng_template_68_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineViewComponent_ng_template_68_div_43_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.deleteHH(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete Household");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineViewComponent_ng_template_68_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete Household");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaselineViewComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Family Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineViewComponent_ng_template_68_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.modalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Husband");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Family ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Member Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Total Child ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Child Below 18 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "yr. entered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Family ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, BaselineViewComponent_ng_template_68_th_39_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, BaselineViewComponent_ng_template_68_tr_41_Template, 18, 10, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, BaselineViewComponent_ng_template_68_div_42_Template, 7, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, BaselineViewComponent_ng_template_68_div_43_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, BaselineViewComponent_ng_template_68_div_44_Template, 4, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.modalTitle == "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.familyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.modalTitle == "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.modalTitle == "D" && ctx_r5.toggleBool == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.modalTitle == "D" && ctx_r5.toggleBool == true);
} }
function BaselineViewComponent_ng_template_70_tr_242_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = ctx.$implicit;
    const i_r57 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r57 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r56.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r56.dob.substring(0, 10).split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r56.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r56.age);
} }
function BaselineViewComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Family Details View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaselineViewComponent_ng_template_70_Template_span_click_5_listener() { const modal_r54 = ctx.$implicit; return modal_r54.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fieldset", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "legend", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HH Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Family No:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Family Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Husband Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Mobile:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "ID Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "ID Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Religion:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Caste:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Occupation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Income:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Education:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "BB Micro Group:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Sanitary Latrine: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Pregnant Woman:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Have Children: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Child below 5 yrs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Child below 18 yrs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Institutional Delivery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Lacteting Mother:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Total No. of children:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Total Family Member (Male): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Total Family Member (Female): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Total Family Member (Senior Citizen): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "fieldset", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "legend", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Child Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "table", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "tbody", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](242, BaselineViewComponent_ng_template_70_tr_242_Template, 11, 5, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.familyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.firstName, " ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.middleName, " ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.identityCardDTOList[0] == null ? null : ctx_r7.moreDetails.identityCardDTOList[0].identityCardTypesMasterDTO == null ? null : ctx_r7.moreDetails.identityCardDTOList[0].identityCardTypesMasterDTO.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.identityCardDTOList[0] == null ? null : ctx_r7.moreDetails.identityCardDTOList[0].number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.religionMasterDTO.religionMasterDescription, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.casteTypeMasterDTO.casteTypeDescription, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.occupationMasterDTO.occupationDescription, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.monthlyIncomeMasterDTO.incomeRange, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.educationalQualificationMasterDTO.qualification, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.bbMicroGroupMembership, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.haveSanitaryLatrine, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.pregnantWoman, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.haveChild, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.childrenBelow5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.childrenBelow18, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.institutionalDelivery, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.lactetingMother, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.totalNumberOfChildren, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.totaFamilyMemberMales, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.totaFamilyMemberFemales, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.totaFamilyMemberSrcitizen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.moreDetails == null ? null : ctx_r7.moreDetails.childDetailDTOList);
} }
const _c1 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class BaselineViewComponent {
    constructor(fb, baselineService, modalService, toaster, httpService, confirmationDialogService, route, httpBranch, validationService, sidebarService) {
        this.fb = fb;
        this.baselineService = baselineService;
        this.modalService = modalService;
        this.toaster = toaster;
        this.httpService = httpService;
        this.confirmationDialogService = confirmationDialogService;
        this.route = route;
        this.httpBranch = httpBranch;
        this.validationService = validationService;
        this.sidebarService = sidebarService;
        this.page = 1;
        this.pageSize = 6;
        this.loader = false;
        this.regionList = [];
        this.branchList = [];
        this.villagesOfBranch = [];
        this.gpDtoList = [];
        this.villageDtoList = [];
        this.ssList = [];
        this.swasthyaSahayika = [];
        this.modalTitle = 'V';
        this.toggleBool = true;
    }
    ngDoCheck() {
        this.searchFullscreen = this.validationService.val;
    }
    ngOnInit() {
        this.createForm();
        this.householdFamDetails();
        let dataAccessDTO = {
            userId: this.sidebarService.userId,
            userName: this.sidebarService.loginId,
        };
        let Dto = {
            dataAccessDTO: dataAccessDTO,
            branchId: this.sidebarService.branchId
        };
        setTimeout(() => {
            this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
                var _a, _b;
                if (res.sessionDTO.status == true) {
                    this.villagesOfBranch = (_b = (_a = res === null || res === void 0 ? void 0 : res.responseObject[0]) === null || _a === void 0 ? void 0 : _a.gpDtoList[0]) === null || _b === void 0 ? void 0 : _b.villageDtoList;
                    console.log(this.villagesOfBranch, 'villagesOfBranch1');
                }
            });
        }, 500);
        this.regionList = this.sidebarService.listOfRegion;
        this.regionBranchHide = this.sidebarService.regionBranchHide;
    }
    changeRegion(region) {
        var _a, _b, _c;
        let regionId = (_a = this.regionList.find((reg) => reg.regionName == region)) === null || _a === void 0 ? void 0 : _a.regionMasterId;
        let req = {
            dataAccessDTO: {
                userId: (_b = this.sidebarService) === null || _b === void 0 ? void 0 : _b.userId,
                userName: (_c = this.sidebarService) === null || _c === void 0 ? void 0 : _c.loginId,
            },
            regionId: regionId,
        };
        this.loader = false;
        setTimeout(() => {
            this.baselineService.listOfBranchesOfARegion(req).subscribe((res) => {
                this.loader = true;
                this.branchList = res === null || res === void 0 ? void 0 : res.responseObject;
            }, (error) => {
                this.loader = true;
                this.branchList = null;
            });
        }, 500);
        this.locationForm.controls.branch.setValue('');
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.region == '') {
            this.showError('No Data Found');
            this.baselineDetails = [];
        }
    }
    changeBranch(branch) {
        var _a, _b;
        this.sidebarService.branchId = (_b = (_a = this.branchList) === null || _a === void 0 ? void 0 : _a.find(bran => bran.branchName == branch)) === null || _b === void 0 ? void 0 : _b.branchId;
        this.sidebarService.branchName = this.locationForm.get('branch').value;
        let Dto = {
            dataAccessDTO: {
                userId: this.sidebarService.userId,
                userName: this.sidebarService.loginId,
            },
            branchId: this.sidebarService.branchId
        };
        this.loader = false;
        setTimeout(() => {
            this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
                var _a, _b;
                this.loader = true;
                this.villagesOfBranch = (_b = (_a = res.responseObject[0]) === null || _a === void 0 ? void 0 : _a.gpDtoList[0]) === null || _b === void 0 ? void 0 : _b.villageDtoList;
                console.log(this.villagesOfBranch, 'villagesOfBranch2');
            });
        }, 500);
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.branch == '') {
            this.showError('No Data Found');
            this.baselineDetails = [];
        }
    }
    changeVillage(villagename) {
        var _a;
        this.branchVillageMapId = (_a = this.villagesOfBranch.find(i => i.villageName == villagename)) === null || _a === void 0 ? void 0 : _a.branchVillageMapId;
        this.householdFamDetails(this.branchVillageMapId);
        if (this.locationForm.value.gram == '') {
            this.showError('No Data Found');
            this.baselineDetails = [];
        }
    }
    householdFamDetails(branchVillageMapId = null) {
        let obj = {
            activeStatus: "A",
            dataAccessDTO: this.httpService.dataAccessDTO,
            id: branchVillageMapId
        };
        //API call for viewing HouseholdWithFamilyDetails
        this.loader = false;
        setTimeout(() => {
            this.baselineService.baselineViewDetail(obj).subscribe((response) => {
                this.loader = true;
                this.baselineDetails = response.responseObject;
                // console.log(this.baselineDetails);
            }, (err) => {
                this.loader = true;
            });
        }, 1000);
    }
    createForm() {
        this.locationForm = this.fb.group({
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    get f() {
        return this.locationForm.controls;
    }
    openModal(viewFamily, familyDetailDTOList, item, title, i) {
        title = this.modalTitle;
        console.log(title);
        console.log(item.householdDetailId, 'ccdd');
        this.householdId = item.householdDetailId;
        this.familyDetails = familyDetailDTOList;
        this.modalContent = '';
        this.modalReference = this.modalService.open(viewFamily, {
            windowClass: 'viewFamily',
        });
    }
    familyModal(viewDetails, id) {
        this.modalDismiss();
        this.getMoreDetails(id);
        this.modalContent = '';
        this.modalReference = this.modalService.open(viewDetails, {
            windowClass: 'viewDetails',
        });
    }
    getMoreDetails(id) {
        let postBody = {
            activeStatus: "A",
            dataAccessDTO: this.httpService.dataAccessDTO,
            id: id
        };
        //API call for viewing Details of centralRegister
        this.baselineService.viewMoreFamilyDetails(postBody).subscribe((response) => {
            this.moreDetails = response.responseObject;
            console.log(this.moreDetails);
        });
    }
    modalDismiss() {
        console.log('true');
        if (this.modalTitle == 'D') {
            this.modalReference.close();
            let currentUrl = this.route.url;
            this.route
                .navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.route.navigate([currentUrl]);
            });
        }
        else {
            this.modalReference.close();
        }
    }
    editHousehold(item) {
        console.log('edit', item);
        this.route.navigate(['/Baseline-Survey/edit'], {
            queryParams: {
                id: item.householdDetailId,
                type: item.familyType,
                tMem: item.totalMembers,
                tFam: item.numberOfFamily,
                hhNo: item.houseHoldNumber,
                bName: item.branchDTO.branchName,
                vName: this.villagesOfBranch.find(i => i.branchVillageMapId == item.branchVillageMapId).villageName,
                vId: item.branchVillageMapId,
                ssName: item.swasthyaSahayikaDTO.name,
                ssId: item.swasthyaSahayikaDTO.swasthyaSahayikaId
            }
        });
    }
    deleteHousehold(item, i, familyDetailDTOList, viewFamily, title) {
        this.finalDelHH = item;
        title = 'D';
        this.modalTitle = title;
        this.openModal(familyDetailDTOList, viewFamily, item, title, i);
        console.log(this.modalTitle);
    }
    deleteHH() {
        var item = this.finalDelHH;
        const post = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            houseHoldDetailDTO: {
                branchDTO: {
                    branchId: 15,
                    branchName: "Kestopur",
                },
                branchVillageMapId: 888,
                familyDetailDTOList: [
                    {
                        age: item.age,
                        bbMicroGroupMembership: item.familyDetailDTOList[0].bbMicroGroupMembership,
                        casteTypeMasterDTO: item.familyDetailDTOList[0].casteTypeMasterDTO,
                        childDetailDTOList: item.familyDetailDTOList[0].childDetailDTOList ? item.familyDetailDTOList[0].childDetailDTOList : [],
                        childrenBelow18: item.familyDetailDTOList[0].childrenBelow18 ? item.familyDetailDTOList[0].childrenBelow18 : 'NA',
                        childrenBelow5: item.familyDetailDTOList[0].childrenBelow5 ? item.familyDetailDTOList[0].childrenBelow5 : 'NA',
                        createdOn: item.familyDetailDTOList[0].createdOn,
                        educationalQualificationMasterDTO: item.familyDetailDTOList[0].educationalQualificationMasterDTO,
                        familyDetailId: item.familyDetailDTOList[0].familyDetailId,
                        familyDetailRemaingStatusDTO: item.familyDetailDTOList[0].familyDetailRemaingStatusDTO,
                        familyNumber: item.familyDetailDTOList[0].familyNumber,
                        familyType: item.familyDetailDTOList[0].familyType,
                        firstName: item.familyDetailDTOList[0].firstName,
                        haveChild: item.familyDetailDTOList[0].haveChild,
                        haveSanitaryLatrine: item.familyDetailDTOList[0].haveSanitaryLatrine,
                        householdDetailsId: item.familyDetailDTOList[0].householdDetailsId,
                        husbandOrGuardianName: item.familyDetailDTOList[0].husbandOrGuardianName,
                        identityCardDTOList: item.familyDetailDTOList[0].identityCardDTOList ? item.familyDetailDTOList[0].identityCardDTOList : [],
                        institutionalDelivery: item.familyDetailDTOList[0].institutionalDelivery ? 'NA' : 'NA',
                        lactetingMother: item.familyDetailDTOList[0].lactetingMother,
                        lastName: item.familyDetailDTOList[0].lastName,
                        middleName: item.familyDetailDTOList[0].middleName,
                        mobileNumber: item.familyDetailDTOList[0].mobileNumber ? item.familyDetailDTOList[0].mobileNumber : '',
                        monthlyIncomeMasterDTO: item.familyDetailDTOList[0].monthlyIncomeMasterDTO,
                        occupationMasterDTO: item.familyDetailDTOList[0].occupationMasterDTO,
                        pregnantWoman: item.familyDetailDTOList[0].pregnantWoman,
                        religionMasterDTO: item.familyDetailDTOList[0].religionMasterDTO,
                        status: item.familyDetailDTOList[0].status,
                        totaFamilyMemberFemales: item.familyDetailDTOList[0].totaFamilyMemberFemales,
                        totaFamilyMemberMales: item.familyDetailDTOList[0].totaFamilyMemberMales,
                        totaFamilyMemberSrcitizen: item.familyDetailDTOList[0].totaFamilyMemberSrcitizen,
                        totalNumberOfChildren: item.familyDetailDTOList[0].totalNumberOfChildren
                    }
                ],
                familyType: item.familyType,
                houseHoldNumber: item.houseHoldNumber,
                householdDetailId: item.householdDetailId,
                numberOfFamily: item.numberOfFamily,
                status: "D",
                swasthyaSahayikaDTO: {
                    name: "ABC",
                    swasthyaSahayikaId: 1
                },
                totalMembers: item.totalMembers
            }
        };
        this.baselineService.saveBaselineSurvey(post).subscribe((response) => {
            console.log(response);
            if (response.status == true) {
                this.modalDismiss();
                this.showSuccess(response.message);
                this.householdFamDetails();
            }
            else {
                this.showError(response.responseObject);
            }
        });
    }
    deleteFamily(item, i) {
        let postBody = {
            activeStatus: "A",
            dataAccessDTO: this.httpService.dataAccessDTO,
            id: item.familyDetailId
        };
        this.baselineService.viewMoreFamilyDetails(postBody).subscribe((response) => {
            let delDetails = response.responseObject;
            console.log(delDetails);
            this.delFam(delDetails, i);
        });
    }
    editFamily(item) {
        console.log(item, 'item');
        let postBody = {
            activeStatus: "A",
            dataAccessDTO: this.httpService.dataAccessDTO,
            id: this === null || this === void 0 ? void 0 : this.householdId
        };
        this.baselineService.baselineSurveyStatus(postBody).subscribe((response) => {
            var _a, _b, _c, _d;
            this.familyStatus = response.responseObject.familyDetailRemaingStatusDTO;
            console.log(this.familyStatus);
            this.modalReference.close();
            this.route.navigate(['/family-info/create'], {
                skipLocationChange: true,
                queryParams: {
                    id: item.householdDetailId,
                    famid: item.familyDetailId,
                    type: item.familyType,
                    cFamilyCount: (_a = this.familyStatus) === null || _a === void 0 ? void 0 : _a.createdFamilyCount,
                    cFamilyMembersCount: (_b = this.familyStatus) === null || _b === void 0 ? void 0 : _b.createdFamilyMambersCount,
                    tFamilyCount: (_c = this.familyStatus) === null || _c === void 0 ? void 0 : _c.totalFamilyCount,
                    tFamilyMembersCount: (_d = this.familyStatus) === null || _d === void 0 ? void 0 : _d.totalFamilyMambersCount
                }
            });
        });
    }
    delFam(delDetails, i) {
        if (this.familyDetails.length == 1) {
            this.showError('Please Delete Household');
            return;
        }
        if (confirm('Do you want to delete family: ' + delDetails.firstName + ' ' + delDetails.lastName)) {
            let post = {
                dataAccessDTO: this.httpService.dataAccessDTO,
                familyDetailDTO: {
                    age: delDetails.age,
                    bbMicroGroupMembership: delDetails.bbMicroGroupMembership,
                    casteTypeMasterDTO: {
                        casteTypeDescription: delDetails.casteTypeMasterDTO.casteTypeDescription,
                        casteTypeMasterId: delDetails.casteTypeMasterDTO.casteTypeMasterId
                    },
                    childDetailDTOList: delDetails.childDetailDTOList,
                    childrenBelow18: delDetails.childrenBelow18,
                    childrenBelow5: delDetails.childrenBelow5,
                    createdOn: delDetails.createdOn,
                    educationalQualificationMasterDTO: {
                        educationalQualificationMasterId: delDetails.educationalQualificationMasterDTO.educationalQualificationMasterId,
                        qualification: delDetails.educationalQualificationMasterDTO.qualification
                    },
                    familyDetailId: delDetails.familyDetailId,
                    familyDetailRemaingStatusDTO: {
                        createdFamilyCount: delDetails.familyDetailRemaingStatusDTO.createdFamilyCount,
                        createdFamilyMambersCount: delDetails.familyDetailRemaingStatusDTO.createdFamilyMambersCount,
                        totalFamilyCount: delDetails.familyDetailRemaingStatusDTO.totalFamilyCount,
                        totalFamilyMambersCount: delDetails.familyDetailRemaingStatusDTO.totalFamilyMambersCount
                    },
                    familyNumber: delDetails.familyNumber,
                    familyType: delDetails.familyType,
                    firstName: delDetails.firstName,
                    haveChild: delDetails.haveChild,
                    haveSanitaryLatrine: delDetails.haveSanitaryLatrine,
                    householdDetailsId: delDetails.householdDetailsId,
                    husbandOrGuardianName: delDetails.husbandOrGuardianName,
                    identityCardDTOList: delDetails.identityCardDTOList,
                    institutionalDelivery: delDetails.institutionalDelivery,
                    lactetingMother: delDetails.lactetingMother,
                    lastName: delDetails.lastName,
                    middleName: delDetails.middleName,
                    mobileNumber: delDetails.mobileNumber,
                    monthlyIncomeMasterDTO: {
                        incomeRange: delDetails.monthlyIncomeMasterDTO.incomeRange,
                        monthlyIncomeMasterId: delDetails.monthlyIncomeMasterDTO.monthlyIncomeMasterId
                    },
                    occupationMasterDTO: {
                        occupationDescription: delDetails.occupationMasterDTO.occupationDescription,
                        occupationMasterId: delDetails.occupationMasterDTO.occupationMasterId
                    },
                    pregnantWoman: delDetails.pregnantWoman,
                    religionMasterDTO: {
                        religionMasterDescription: delDetails.religionMasterDTO.religionMasterDescription,
                        religionMasterId: delDetails.religionMasterDTO.religionMasterId
                    },
                    status: "D",
                    totaFamilyMemberFemales: delDetails.totaFamilyMemberFemales,
                    totaFamilyMemberMales: delDetails.totaFamilyMemberMales,
                    totaFamilyMemberSrcitizen: delDetails.totaFamilyMemberSrcitizen,
                    totalNumberOfChildren: delDetails.totalNumberOfChildren
                }
            };
            this.baselineService.deleteFamily(post).subscribe((response) => {
                console.log(response);
                if (response.status == true) {
                    this.showSucces(response.message);
                    this.familyDetails.splice(i, 1);
                }
                else {
                    this.showErrorr(response.responseObject);
                }
            });
        }
    }
    showSuccess(message) {
        this.toaster.success(message, 'Household Delete', {
            timeOut: 3000,
        });
    }
    showError(message) {
        this.toaster.error(message, 'Household Delete', {
            timeOut: 3000,
        });
    }
    showSucces(message) {
        this.toaster.success(message, 'Family Delete', {
            timeOut: 3000,
        });
    }
    showErrorr(message) {
        this.toaster.error(message, 'Family Delete', {
            timeOut: 3000,
        });
    }
    p(event) { }
    changeEvent(event) {
        if (event.target.checked) {
            this.toggleBool = false;
            console.log(this.toggleBool);
        }
        else {
            this.toggleBool = true;
            console.log(this.toggleBool);
        }
    }
    gotoFamily(item) {
        let postBody = {
            activeStatus: "A",
            dataAccessDTO: this.httpService.dataAccessDTO,
            id: item.householdDetailId
        };
        this.baselineService.baselineSurveyStatus(postBody).subscribe((response) => {
            var _a, _b, _c, _d;
            this.familyStatus = response.responseObject.familyDetailRemaingStatusDTO;
            console.log(this.familyStatus);
            if (item.familyType == 'J' && ((_a = this.familyStatus) === null || _a === void 0 ? void 0 : _a.totalFamilyMambersCount) - ((_b = this.familyStatus) === null || _b === void 0 ? void 0 : _b.createdFamilyMambersCount) > 0 &&
                ((_c = this.familyStatus) === null || _c === void 0 ? void 0 : _c.totalFamilyCount) - ((_d = this.familyStatus) === null || _d === void 0 ? void 0 : _d.createdFamilyCount) > 0) {
                this.confirmationDialogService.confirm('', 'Do you want to add more family against Household No : ' + item.houseHoldNumber + ' ?')
                    .then(() => this.route.navigate(['/family-info/create'], {
                    queryParams: {
                        id: item.householdDetailId,
                        type: item.familyType,
                        cFamilyCount: this.familyStatus.createdFamilyCount,
                        cFamilyMembersCount: this.familyStatus.createdFamilyMambersCount,
                        tFamilyCount: this.familyStatus.totalFamilyCount,
                        tFamilyMembersCount: this.familyStatus.totalFamilyMambersCount
                    }
                }))
                    .catch(() => '');
            }
            else {
                this.showError('All Family Member or Family Count Is Already Added');
                return;
            }
        });
    }
}
BaselineViewComponent.ɵfac = function BaselineViewComponent_Factory(t) { return new (t || BaselineViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_baseline_survey_service__WEBPACK_IMPORTED_MODULE_2__["BaselineSurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_branch_service__WEBPACK_IMPORTED_MODULE_8__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_9__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_10__["SidebarService"])); };
BaselineViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaselineViewComponent, selectors: [["app-baseline-view"]], decls: 72, vars: 20, consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-6"], ["for", "gram"], [1, "text-danger"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search household info here...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["viewFamily", ""], ["viewDetails", ""], [1, "form-group", "col-md"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [1, "invalid-feedback"], [4, "ngIf"], [1, "btn-link", 2, "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], ["class", "btn-link", "style", "color:#0d6efd; text-decoration: none; cursor: pointer;", 3, "click", 4, "ngIf"], ["title", "Edit Household", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Household", 1, "fas", "fa-trash", 3, "click"], [1, "modal-content"], [1, "modal-header", 2, "height", "80px"], [1, "white_box", "QA_section", "mb_30", 2, "height", "100px"], ["title", "close", 1, "close", 2, "cursor", "pointer", "font-size", "35px", "margin-bottom", "25px", 3, "click"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped", 2, "table-layout", "fixed"], [2, "text-align", "center"], ["class", "form-check", 4, "ngIf"], [3, "click", 4, "ngIf"], ["title", "Edit Family", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Family", 1, "fas", "fa-trash", 3, "click"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["for", "flexCheckDefault", 1, "form-check-label"], [3, "click"], ["id", "deleteButton", 1, "btn", "btn-danger"], ["aria-hidden", "true", 1, "fas", "fa-trash"], ["disabled", "", "id", "deleteButton", 1, "btn", "btn-danger"], [1, "modal-content", 2, "height", "500px"], ["title", "close", 1, "closes", 2, "cursor", "pointer", "font-size", "35px", "margin-bottom", "25px", 3, "click"], [1, "modal-body"], [1, "scheduler-border"], [1, "col"], [1, "form-group", "col-md-6"], ["for", "", 2, "font-weight", "500", "font-size", "1.05rem"], ["for", ""], [1, "col-md-6"], ["id", "table_wrapper", 1, "table", "table-striped"]], template: function BaselineViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View Household Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BaselineViewComponent_div_8_Template, 21, 12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "GS/ Ward/ Village:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaselineViewComponent_Template_select_change_14_listener($event) { return ctx.changeVillage($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-- Select Village --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BaselineViewComponent_option_17_Template, 2, 1, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BaselineViewComponent_div_18_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BaselineViewComponent_Template_input_ngModelChange_24_listener($event) { return ctx.registerSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "SL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Household");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Total Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " of Household");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, BaselineViewComponent_tr_64_Template, 18, 7, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "pagination-controls", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function BaselineViewComponent_Template_pagination_controls_pageChange_67_listener($event) { return ctx.p = $event; })("pageBoundsCorrection", function BaselineViewComponent_Template_pagination_controls_pageBoundsCorrection_67_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, BaselineViewComponent_ng_template_68_Template, 45, 5, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, BaselineViewComponent_ng_template_70_Template, 243, 28, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.locationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, ctx.f.gram.invalid && ctx.f.gram.touched, ctx.f.gram.valid && (ctx.f.gram.dirty || ctx.f.gram.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.gram.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](65, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](66, 12, ctx.baselineDetails, ctx.registerSearch), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.p)));
    } }, directives: [_shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipe"]], styles: [".form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%] {\r\n  overflow-x: hidden;\r\n  height: 400px;\r\n  width: 1080px;\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 12px 25px;\r\n}\r\n\r\n.fa-plus[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 22px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n  overflow-x: hidden;\r\n  width: 1000px;\r\n  margin-left: -190px;\r\n  margin-top: -4px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  margin-left: 775px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n}\r\n\r\n.fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 25px;\r\n  margin-left: -200px;\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  color: #7e7172;\r\n  font-size: 15px;\r\n  color: #828bb2;\r\n  font-weight: 400;\r\n  border-bottom: 1px solid rgba(130, 139, 178, 0.1);\r\n  padding: 12px;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 540px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 840px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 690px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 850px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 140px;\r\n}\r\n\r\n#deleteButton[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-top: -30px;\r\n  margin-right: 20px;\r\n\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n\r\n.form-select[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n\r\n\r\n.closes[_ngcontent-%COMP%] {\r\n  margin-left: 700px;\r\n}\r\n\r\n.white_box[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 150px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VsaW5lLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlEQUFpRDtFQUNqRCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBT0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6ImJhc2VsaW5lLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5RQV90YWJsZSB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDEwODBweDtcclxufVxyXG5cclxuLlFBX3NlY3Rpb24gLlFBX3RhYmxlIC50YWJsZSB0aGVhZCB0aCB7XHJcbiAgcGFkZGluZzogMTJweCAyNXB4O1xyXG59XHJcblxyXG4uZmEtcGx1cyB7XHJcbiAgY29sb3I6ICMzZTc3NTggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTkwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBtYXJnaW4tbGVmdDogNzc1cHg7XHJcbn1cclxuXHJcbiN0YWJsZV93cmFwcGVyIC50YWJsZSB0aGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE3cHggMzBweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICM0OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmEtcGx1cy1jaXJjbGUge1xyXG4gIGNvbG9yOiAjM2U3NzU4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XHJcbn1cclxuXHJcbi5RQV9zZWN0aW9uIC5RQV90YWJsZSB0Ym9keSB0aCxcclxuLlFBX3NlY3Rpb24gLlFBX3RhYmxlIHRib2R5IHRkIHtcclxuICBjb2xvcjogIzdlNzE3MjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICM4MjhiYjI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMzAsIDEzOSwgMTc4LCAwLjEpO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXIgYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDU0MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDg0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXIgaW5wdXQge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDY5MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGlucHV0IHtcclxuICB3aWR0aDogNzQlO1xyXG4gIG1hcmdpbi1sZWZ0OiA4NTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZGFhYjg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXIgYnV0dG9uIGkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBtYXJnaW4tbGVmdDogMTQwcHg7XHJcbn1cclxuXHJcblxyXG4jZGVsZXRlQnV0dG9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmZvcm0tc2VsZWN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi8qIC5tb2RhbC1jb250ZW50cyB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0gKi9cclxuXHJcbi5jbG9zZXMge1xyXG4gIG1hcmdpbi1sZWZ0OiA3MDBweDtcclxufVxyXG5cclxuLndoaXRlX2JveCB7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaselineViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-baseline-view',
                templateUrl: './baseline-view.component.html',
                styleUrls: ['./baseline-view.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _baseline_survey_service__WEBPACK_IMPORTED_MODULE_2__["BaselineSurveyService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _core_http_branch_service__WEBPACK_IMPORTED_MODULE_8__["BranchService"] }, { type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_9__["ValidationService"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_10__["SidebarService"] }]; }, null); })();


/***/ }),

/***/ "q1Gc":
/*!*********************************************************************!*\
  !*** ./src/app/modules/baseline-survey/location/location.module.ts ***!
  \*********************************************************************/
/*! exports provided: LocationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationModule", function() { return LocationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.component */ "SfUW");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "iFG+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LocationModule {
}
LocationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LocationModule });
LocationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LocationModule_Factory(t) { return new (t || LocationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__["LoaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LocationModule, { declarations: [_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__["LoaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]], exports: [_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__["LoaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                exports: [_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yWKN":
/*!***************************************************************************!*\
  !*** ./src/app/modules/baseline-survey/baseline-survey-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: BaselineSurveyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaselineSurveyRoutingModule", function() { return BaselineSurveyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _baseline_create_baseline_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseline-create/baseline-create.component */ "D5AH");
/* harmony import */ var _baseline_edit_baseline_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseline-edit/baseline-edit.component */ "OgXQ");
/* harmony import */ var _baseline_view_baseline_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baseline-view/baseline-view.component */ "U4S0");







const routes = [{ path: 'create', component: _baseline_create_baseline_create_component__WEBPACK_IMPORTED_MODULE_2__["BaselineCreateComponent"] },
    { path: 'view', component: _baseline_view_baseline_view_component__WEBPACK_IMPORTED_MODULE_4__["BaselineViewComponent"] },
    { path: 'edit', component: _baseline_edit_baseline_edit_component__WEBPACK_IMPORTED_MODULE_3__["BaselineEditComponent"] }];
class BaselineSurveyRoutingModule {
}
BaselineSurveyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BaselineSurveyRoutingModule });
BaselineSurveyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BaselineSurveyRoutingModule_Factory(t) { return new (t || BaselineSurveyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaselineSurveyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaselineSurveyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-baseline-survey-baseline-survey-module.js.map