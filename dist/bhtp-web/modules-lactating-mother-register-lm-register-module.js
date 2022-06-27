(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-lactating-mother-register-lm-register-module"],{

/***/ "+93P":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/lactating-mother-register/add-lm-child/add-lm-child.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddLmChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLmChildComponent", function() { return AddLmChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/validation.service */ "yjnX");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/http/http.service */ "YwHQ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");













function AddLmChildComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Birth Weight should be 0 to 9 kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_30_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.birthWeight.errors.notInBirthWeightRange);
} }
function AddLmChildComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Visit Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_45_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.firstVisitDate.errors.required);
} }
function AddLmChildComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Second Visit Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_53_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.secondVisitDate.errors.required);
} }
function AddLmChildComponent_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_81_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.muacDate6.errors.required);
} }
function AddLmChildComponent_div_87_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Height should be 10 to 180 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_87_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.height6month.errors.notInHeightRange);
} }
function AddLmChildComponent_div_93_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight should be 0 to 25 kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_93_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.weight6month.errors.notInWeightRange);
} }
function AddLmChildComponent_div_101_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_101_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MUAC should be 1 to 30 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_101_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddLmChildComponent_div_101_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.muacDate6.errors == null ? null : ctx_r6.f.muacDate6.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.muac6month.errors.notInMuacRange);
} }
function AddLmChildComponent_div_145_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_145_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.muacDate12.errors.required);
} }
function AddLmChildComponent_div_151_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Height should be 10 to 180 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_151_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.height12month.errors.notInHeightRange);
} }
function AddLmChildComponent_div_157_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight should be 0 to 25 kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_157_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.weight12month.errors.notInWeightRange);
} }
function AddLmChildComponent_div_165_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_165_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MUAC should be 1 to 30 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_165_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddLmChildComponent_div_165_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.f.muac12month.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.f.muac12month.errors.notInMuacRange);
} }
function AddLmChildComponent_div_193_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_193_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.f.muacDate18.errors.required);
} }
function AddLmChildComponent_div_199_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Height should be 10 to 180 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_199_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_199_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.f.height18month.errors.notInHeightRange);
} }
function AddLmChildComponent_div_205_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight should be 0 to 25 kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_205_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_205_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.f.weight18month.errors.notInWeightRange);
} }
function AddLmChildComponent_div_213_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_213_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MUAC should be 1 to 30 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_213_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_213_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddLmChildComponent_div_213_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.f.muac18month.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.f.muac18month.errors.notInMuacRange);
} }
function AddLmChildComponent_div_257_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_257_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_257_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.f.muacDate24.errors.required);
} }
function AddLmChildComponent_div_263_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Height should be 10 to 180 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_263_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_263_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.f.height24month.errors.notInHeightRange);
} }
function AddLmChildComponent_div_269_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight should be 0 to 25 kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_269_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_269_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.f.weight24month.errors.notInWeightRange);
} }
function AddLmChildComponent_div_277_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_277_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MUAC should be 1 to 30 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_277_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_277_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddLmChildComponent_div_277_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.f.muac24month.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.f.muac24month.errors.notInMuacRange);
} }
function AddLmChildComponent_div_293_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Date of Death:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_294_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Comment:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_297_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddLmChildComponent_div_297_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class AddLmChildComponent {
    constructor(validationService, fb, httpService, toaster, http, data, dialogRef) {
        this.validationService = validationService;
        this.fb = fb;
        this.httpService = httpService;
        this.toaster = toaster;
        this.http = http;
        this.data = data;
        this.dialogRef = dialogRef;
        this.childMuacList = [];
        this.today = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);
        dialogRef.disableClose = true;
    }
    ngOnInit() {
        var _a, _b;
        this.childDob = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.childWiselactatingmotherList) === null || _b === void 0 ? void 0 : _b.dob;
        let after6date = moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(6, 'M').format('YYYY-MM-DD');
        if (after6date > this.today) {
            this.maxFirstVisit = this.today;
        }
        else {
            this.maxFirstVisit = after6date;
        }
        this.muacRec6MinmaxDate();
        this.muacRec12MinmaxDate();
        this.muacRec18MinmaxDate();
        this.muacRec24MinmaxDate();
        this.editMode = this.data.editMode;
        this.panelOpenState = false;
        this.lmMuacList();
        this.createForm();
        this.disableForm();
        if (this.data.viewMode == true) {
            this.viewMode = this.data.viewMode;
            this.lmMuacList();
            this.childBirthForm.disable();
        }
    }
    /* get the childWiselactatingmotherMUACList &
      set the value in form */
    lmMuacList() {
        var _a, _b;
        let Dto = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            childId: (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.childWiselactatingmotherList) === null || _b === void 0 ? void 0 : _b.childDetailId
        };
        this.http.post(`${this.httpService.baseURL}lactatingmotherregister/childWiselactatingmotherMUACList`, Dto).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17;
            this.childMuacList = res === null || res === void 0 ? void 0 : res.responseObject;
            this.muacRegisterId6month = (_a = this.childMuacList.find(month => month.muacForMonth == "6")) === null || _a === void 0 ? void 0 : _a.muacRegisterId;
            this.muacRegisterId12month = (_b = this.childMuacList.find(month => month.muacForMonth == "12")) === null || _b === void 0 ? void 0 : _b.muacRegisterId;
            this.muacRegisterId18month = (_c = this.childMuacList.find(month => month.muacForMonth == "18")) === null || _c === void 0 ? void 0 : _c.muacRegisterId;
            this.muacRegisterId24month = (_d = this.childMuacList.find(month => month.muacForMonth == "24")) === null || _d === void 0 ? void 0 : _d.muacRegisterId;
            if (this.data.editMode == false) {
                this.childBirthForm.reset();
            }
            else {
                this.childBirthForm.patchValue({
                    place: (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.childWiselactatingmotherList) === null || _f === void 0 ? void 0 : _f.childBasicStatusDto.placeOfDelivery,
                    birthWeight: (_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.childWiselactatingmotherList) === null || _h === void 0 ? void 0 : _h.childBasicStatusDto.birthWeight,
                    primaryImmunizationUpto12Completed: (_l = (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.childWiselactatingmotherList) === null || _k === void 0 ? void 0 : _k.childBasicStatusDto) === null || _l === void 0 ? void 0 : _l.primaryImmunizationUpto12Completed,
                    primaryImmunizationUpto24Completed: (_p = (_o = (_m = this.data) === null || _m === void 0 ? void 0 : _m.childWiselactatingmotherList) === null || _o === void 0 ? void 0 : _o.childBasicStatusDto) === null || _p === void 0 ? void 0 : _p.primaryImmunizationUpto24Completed,
                    ebfUpto6Complete: (_r = (_q = this.data) === null || _q === void 0 ? void 0 : _q.childWiselactatingmotherList) === null || _r === void 0 ? void 0 : _r.childBasicStatusDto.ebfUpto6Complete,
                    ebfUpto12Complete: (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.childWiselactatingmotherList) === null || _t === void 0 ? void 0 : _t.childBasicStatusDto.ebfUpto12Complete,
                    ebfUpto18Complete: (_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.childWiselactatingmotherList) === null || _v === void 0 ? void 0 : _v.childBasicStatusDto.ebfUpto18Complete,
                    ebfUpto24Complete: (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.childWiselactatingmotherList) === null || _x === void 0 ? void 0 : _x.childBasicStatusDto.ebfUpto24Complete,
                    muacDate6: (_y = this.childMuacList.find(month => month.muacForMonth == "6")) === null || _y === void 0 ? void 0 : _y.muacRecordDate,
                    muacDate12: (_z = this.childMuacList.find(month => month.muacForMonth == "12")) === null || _z === void 0 ? void 0 : _z.muacRecordDate,
                    muacDate18: (_0 = this.childMuacList.find(month => month.muacForMonth == "18")) === null || _0 === void 0 ? void 0 : _0.muacRecordDate,
                    muacDate24: (_1 = this.childMuacList.find(month => month.muacForMonth == "24")) === null || _1 === void 0 ? void 0 : _1.muacRecordDate,
                    height6month: (_2 = this.childMuacList.find(month => month.muacForMonth == "6")) === null || _2 === void 0 ? void 0 : _2.height,
                    height12month: (_3 = this.childMuacList.find(month => month.muacForMonth == "12")) === null || _3 === void 0 ? void 0 : _3.height,
                    height18month: (_4 = this.childMuacList.find(month => month.muacForMonth == "18")) === null || _4 === void 0 ? void 0 : _4.height,
                    height24month: (_5 = this.childMuacList.find(month => month.muacForMonth == "24")) === null || _5 === void 0 ? void 0 : _5.height,
                    weight6month: (_6 = this.childMuacList.find(month => month.muacForMonth == "6")) === null || _6 === void 0 ? void 0 : _6.weight,
                    weight12month: (_7 = this.childMuacList.find(month => month.muacForMonth == "12")) === null || _7 === void 0 ? void 0 : _7.weight,
                    weight18month: (_8 = this.childMuacList.find(month => month.muacForMonth == "18")) === null || _8 === void 0 ? void 0 : _8.weight,
                    weight24month: (_9 = this.childMuacList.find(month => month.muacForMonth == "24")) === null || _9 === void 0 ? void 0 : _9.weight,
                    muac6month: (_10 = this.childMuacList.find(month => month.muacForMonth == "6")) === null || _10 === void 0 ? void 0 : _10.muac,
                    muac12month: (_11 = this.childMuacList.find(month => month.muacForMonth == "12")) === null || _11 === void 0 ? void 0 : _11.muac,
                    muac18month: (_12 = this.childMuacList.find(month => month.muacForMonth == "18")) === null || _12 === void 0 ? void 0 : _12.muac,
                    muac24month: (_13 = this.childMuacList.find(month => month.muacForMonth == "24")) === null || _13 === void 0 ? void 0 : _13.muac,
                    firstVisitDate: (_15 = (_14 = this.data) === null || _14 === void 0 ? void 0 : _14.childWiselactatingmotherList) === null || _15 === void 0 ? void 0 : _15.childBasicStatusDto.firstVisitDate,
                    secondVisitDate: (_17 = (_16 = this.data) === null || _16 === void 0 ? void 0 : _16.childWiselactatingmotherList) === null || _17 === void 0 ? void 0 : _17.childBasicStatusDto.secondVisitDate,
                });
            }
        });
    }
    /* Disable the form field
    depending on child age */
    disableForm() {
        var _a, _b;
        let dateString = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.childWiselactatingmotherList) === null || _b === void 0 ? void 0 : _b.childAge;
        let y = dateString === null || dateString === void 0 ? void 0 : dateString.indexOf("year");
        let year = parseInt(dateString === null || dateString === void 0 ? void 0 : dateString.slice(0, y - 1));
        let m = dateString === null || dateString === void 0 ? void 0 : dateString.indexOf("r");
        let m1 = dateString === null || dateString === void 0 ? void 0 : dateString.indexOf("month");
        let month = parseInt(dateString === null || dateString === void 0 ? void 0 : dateString.slice(m + 2, m1 - 1));
        if (year <= 0 && month <= 6) {
            this.after6m = true;
            this.after12m = true;
            this.after18m = true;
            this.after24m = true;
        }
        else if (year <= 0 && month >= 6 && month <= 12) {
            this.after6m = false;
            this.after12m = true;
            this.after18m = true;
            this.after24m = true;
            this.childBirthForm.get('muac6month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate6').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
        else if (year >= 1 && year < 2 && month <= 6) {
            this.after6m = false;
            this.after12m = false;
            this.after18m = true;
            this.after24m = true;
            this.childBirthForm.get('muac6month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muac12month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate6').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate12').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
        else if (year >= 1 && year <= 2 && month >= 6 && month <= 12) {
            this.after6m = false;
            this.after12m = false;
            this.after18m = false;
            this.after24m = true;
            this.childBirthForm.get('muac6month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muac12month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muac18month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate6').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate12').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate18').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
        else if (year >= 2) {
            this.after6m = false;
            this.after12m = false;
            this.after18m = false;
            this.after24m = false;
            this.childBirthForm.get('muac6month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muac12month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muac18month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muac24month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate6').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate12').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate18').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate24').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
    }
    createForm() {
        this.childBirthForm = this.fb.group({
            place: [null],
            birthWeight: ['', this.birthWeightRange],
            primaryImmunizationUpto12Completed: [null],
            primaryImmunizationUpto24Completed: [null],
            ebfUpto6Complete: [null],
            ebfUpto12Complete: [null],
            ebfUpto18Complete: [null],
            ebfUpto24Complete: [null],
            muacDate6: [''],
            muacDate12: [''],
            muacDate18: [''],
            muacDate24: [''],
            height6month: ['', this.heightRange],
            height12month: ['', this.heightRange],
            height18month: ['', this.heightRange],
            height24month: ['', this.heightRange],
            weight6month: ['', this.weightRange],
            weight12month: ['', this.weightRange],
            weight18month: ['', this.weightRange],
            weight24month: ['', this.weightRange],
            muac6month: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([this.muacRange])],
            muac12month: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([this.muacRange])],
            muac18month: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([this.muacRange])],
            muac24month: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([this.muacRange])],
            firstVisitDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            secondVisitDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            checkChildDeath: [null],
            deathOfChildDate: [null],
            comment: [''],
        });
    }
    get f() {
        return this.childBirthForm.controls;
    }
    /* Restrict the second date depending on First visit date */
    restrictSecondDate(date) {
        this.firstVisit = moment__WEBPACK_IMPORTED_MODULE_3__(date).add(1, 'days').format('YYYY-MM-DD');
    }
    /* make child death comment required
    depending on checkChildDeath field value */
    checkChildDeath(value) {
        this.childDeath = value;
        if (this.childBirthForm.get('checkChildDeath').value == 'Y') {
            this.childBirthForm.get('comment').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
        else {
            this.childBirthForm.get('comment').clearAsyncValidators();
        }
    }
    /* MUAC range between 1 to 30, validation */
    muacRange(controls) {
        if (controls.value >= 1 && controls.value <= 30 || controls.value == null) {
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
        if (controls.value >= 10 && controls.value <= 180 || controls.value == null) {
            return null;
        }
        return { 'notInHeightRange': true };
    }
    /* Muac record for 6 month min max date set */
    muacRec6MinmaxDate() {
        this.muac6MinDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(6, 'M').format('YYYY-MM-DD');
        let value = moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(12, 'M').format('YYYY-MM-DD');
        if (value > this.today) {
            this.muac6MaxDate = this.today;
        }
        else {
            this.muac6MaxDate = value;
        }
    }
    /* Muac record for 12 month min max date set */
    muacRec12MinmaxDate() {
        this.muac12MinDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(12, 'M').format('YYYY-MM-DD');
        let value = moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(18, 'M').format('YYYY-MM-DD');
        if (value > this.today) {
            this.muac12MaxDate = this.today;
        }
        else {
            this.muac12MaxDate = value;
        }
    }
    /* Muac record for 18 month min max date set */
    muacRec18MinmaxDate() {
        this.muac18MinDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(18, 'M').format('YYYY-MM-DD');
        let value = moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(24, 'M').format('YYYY-MM-DD');
        if (value > this.today) {
            this.muac18MaxDate = this.today;
        }
        else {
            this.muac18MaxDate = value;
        }
    }
    /* Muac record for 24 month min max date set */
    muacRec24MinmaxDate() {
        this.muac24MinDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(24, 'M').format('YYYY-MM-DD');
        this.muac24MaxDate = this.today;
    }
    /* Depending on condition form is Save or Edit */
    onSave() {
        if (!this.childBirthForm.value.firstVisitDate) {
            this.showError('Please Enter First Visit Date');
            return;
        }
        if (!this.childBirthForm.value.secondVisitDate) {
            this.showError('Please Enter Second Visit Date');
            return;
        }
        if (this.after6m == false) {
            if (!this.childBirthForm.value.muacDate6) {
                this.showError('Enter record date for after 6 months');
                return;
            }
            if (!this.childBirthForm.value.muac6month) {
                this.showError('Enter muac value for after 6 months');
                return;
            }
        }
        if (this.after12m == false) {
            if (!this.childBirthForm.value.muacDate6) {
                this.showError('Enter record date for after 6 months');
                return;
            }
            if (!this.childBirthForm.value.muac6month) {
                this.showError('Enter muac value for after 6 months');
                return;
            }
            if (!this.childBirthForm.value.muacDate12) {
                this.showError('Enter record date for after 12 months');
                return;
            }
            if (!this.childBirthForm.value.muac12month) {
                this.showError('Enter muac value for after 12 months');
                return;
            }
        }
        if (this.after18m == false) {
            if (!this.childBirthForm.value.muacDate6) {
                this.showError('Enter record date for after 6 months');
                return;
            }
            if (!this.childBirthForm.value.muac6month) {
                this.showError('Enter muac value for after 6 months');
                return;
            }
            if (!this.childBirthForm.value.muacDate12) {
                this.showError('Enter record date for after 12 months');
                return;
            }
            if (!this.childBirthForm.value.muac12month) {
                this.showError('Enter muac value for after 12 months');
                return;
            }
            if (!this.childBirthForm.value.muacDate18) {
                this.showError('Enter record date for after 18 months');
                return;
            }
            if (!this.childBirthForm.value.muac18month) {
                this.showError('Enter muac value for after 18 months');
                return;
            }
        }
        if (this.after24m == false) {
            if (!this.childBirthForm.value.muacDate6) {
                this.showError('Enter record date for after 6 months');
                return;
            }
            if (!this.childBirthForm.value.muac6month) {
                this.showError('Enter muac value for after 6 months');
                return;
            }
            if (!this.childBirthForm.value.muacDate12) {
                this.showError('Enter record date for after 12 months');
                return;
            }
            if (!this.childBirthForm.value.muac12month) {
                this.showError('Enter muac value for after 12 months');
                return;
            }
            if (!this.childBirthForm.value.muacDate18) {
                this.showError('Enter record date for after 18 months');
                return;
            }
            if (!this.childBirthForm.value.muac18month) {
                this.showError('Enter muac value for after 18 months');
                return;
            }
            if (!this.childBirthForm.value.muacDate24) {
                this.showError('Enter record date for after 24 months');
                return;
            }
            if (!this.childBirthForm.value.muac24month) {
                this.showError('Enter muac value for after 24 months');
                return;
            }
        }
        if (this.childBirthForm.valid) {
            if (this.data.editMode == false) {
                let Dto = {
                    dataAccessDTO: this.httpService.dataAccessDTO,
                    childBasicStatusDto: {
                        childId: this.data.childWiselactatingmotherList.childDetailId,
                        placeOfDelivery: this.childBirthForm.value.place,
                        birthWeight: this.childBirthForm.value.birthWeight,
                        firstVisitDate: this.childBirthForm.value.firstVisitDate,
                        secondVisitDate: this.childBirthForm.value.secondVisitDate,
                        ebfUpto6Complete: this.childBirthForm.value.ebfUpto6Complete,
                        primaryImmunizationUpto12Completed: this.childBirthForm.value.primaryImmunizationUpto12Completed,
                        ebfUpto12Complete: this.childBirthForm.value.ebfUpto12Complete,
                        ebfUpto18Complete: this.childBirthForm.value.ebfUpto18Complete,
                        primaryImmunizationUpto24Completed: this.childBirthForm.value.primaryImmunizationUpto24Completed,
                        ebfUpto24Complete: this.childBirthForm.value.ebfUpto24Complete,
                    },
                    muacDataList: [{
                            muacRegisterId: 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height6month == null ? "0" : this.childBirthForm.value.height6month,
                            weight: this.childBirthForm.value.weight6month == null ? "0" : this.childBirthForm.value.weight6month,
                            muac: this.childBirthForm.value.muac6month == null ? "0" : this.childBirthForm.value.muac6month,
                            active_flag: "A",
                            muacForMonth: "6",
                            muacRecordDate: this.childBirthForm.value.muacDate6
                        },
                        {
                            muacRegisterId: 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height12month == null ? "0" : this.childBirthForm.value.height12month,
                            weight: this.childBirthForm.value.weight12month == null ? "0" : this.childBirthForm.value.weight12month,
                            muac: this.childBirthForm.value.muac12month == null ? "0" : this.childBirthForm.value.muac12month,
                            active_flag: "A",
                            muacForMonth: "12",
                            muacRecordDate: this.childBirthForm.value.muacDate12
                        },
                        {
                            muacRegisterId: 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height18month == null ? "0" : this.childBirthForm.value.height18month,
                            weight: this.childBirthForm.value.weight18month == null ? "0" : this.childBirthForm.value.weight18month,
                            muac: this.childBirthForm.value.muac18month == null ? "0" : this.childBirthForm.value.muac18month,
                            active_flag: "A",
                            muacForMonth: "18",
                            muacRecordDate: this.childBirthForm.value.muacDate18
                        },
                        {
                            muacRegisterId: 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height24month == null ? "0" : this.childBirthForm.value.height24month,
                            weight: this.childBirthForm.value.weight24month == null ? "0" : this.childBirthForm.value.weight24month,
                            muac: this.childBirthForm.value.muac24month == null ? "0" : this.childBirthForm.value.muac24month,
                            active_flag: "A",
                            muacForMonth: "24",
                            muacRecordDate: this.childBirthForm.value.muacDate24
                        }
                    ],
                    deadChildRegisterDto: {
                        deathOfChildDate: this.childBirthForm.value.deathOfChildDate,
                        comment: this.childBirthForm.value.comment ? this.childBirthForm.value.comment : null
                    }
                };
                console.log(Dto, 'reqAdd');
                this.http.post(`${this.httpService.baseURL}lactatingmotherregister/saveOrUpdateLactatingMotherData`, Dto).subscribe((res) => {
                    console.log(res, 'responseAdd');
                    if (res.status == true) {
                        this.showSuccess(res.message);
                        this.dialogRef.close();
                    }
                    else {
                        this.showError(res.message);
                    }
                });
            }
            else {
                let Dto = {
                    dataAccessDTO: this.httpService.dataAccessDTO,
                    childBasicStatusDto: {
                        childId: this.data.childWiselactatingmotherList.childDetailId,
                        placeOfDelivery: this.childBirthForm.value.place,
                        birthWeight: this.childBirthForm.value.birthWeight,
                        firstVisitDate: this.childBirthForm.value.firstVisitDate,
                        secondVisitDate: this.childBirthForm.value.secondVisitDate,
                        ebfUpto6Complete: this.childBirthForm.value.ebfUpto6Complete,
                        primaryImmunizationUpto12Completed: this.childBirthForm.value.primaryImmunizationUpto12Completed,
                        ebfUpto12Complete: this.childBirthForm.value.ebfUpto12Complete,
                        ebfUpto18Complete: this.childBirthForm.value.ebfUpto18Complete,
                        primaryImmunizationUpto24Completed: this.childBirthForm.value.primaryImmunizationUpto24Completed,
                        ebfUpto24Complete: this.childBirthForm.value.ebfUpto24Complete,
                    },
                    muacDataList: [{
                            muacRegisterId: this.muacRegisterId6month ? this.muacRegisterId6month : 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height6month == null ? "0" : this.childBirthForm.value.height6month,
                            weight: this.childBirthForm.value.weight6month == null ? "0" : this.childBirthForm.value.weight6month,
                            muac: this.childBirthForm.value.muac6month == null ? "0" : this.childBirthForm.value.muac6month,
                            active_flag: "A",
                            muacForMonth: "6",
                            muacRecordDate: this.childBirthForm.value.muacDate6
                        },
                        {
                            muacRegisterId: this.muacRegisterId12month ? this.muacRegisterId12month : 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height12month == null ? "0" : this.childBirthForm.value.height12month,
                            weight: this.childBirthForm.value.weight12month == null ? "0" : this.childBirthForm.value.weight12month,
                            muac: this.childBirthForm.value.muac12month == null ? "0" : this.childBirthForm.value.muac12month,
                            active_flag: "A",
                            muacForMonth: "12",
                            muacRecordDate: this.childBirthForm.value.muacDate12
                        },
                        {
                            muacRegisterId: this.muacRegisterId18month ? this.muacRegisterId18month : 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height18month == null ? "0" : this.childBirthForm.value.height18month,
                            weight: this.childBirthForm.value.weight18month == null ? "0" : this.childBirthForm.value.weight18month,
                            muac: this.childBirthForm.value.muac18month == null ? "0" : this.childBirthForm.value.muac18month,
                            active_flag: "A",
                            muacForMonth: "18",
                            muacRecordDate: this.childBirthForm.value.muacDate18
                        },
                        {
                            muacRegisterId: this.muacRegisterId24month ? this.muacRegisterId24month : 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height24month == null ? "0" : this.childBirthForm.value.height24month,
                            weight: this.childBirthForm.value.weight24month == null ? "0" : this.childBirthForm.value.weight24month,
                            muac: this.childBirthForm.value.muac24month == null ? "0" : this.childBirthForm.value.muac24month,
                            active_flag: "A",
                            muacForMonth: "24",
                            muacRecordDate: this.childBirthForm.value.muacDate24
                        }
                    ],
                    deadChildRegisterDto: {
                        deathOfChildDate: this.childBirthForm.value.deathOfChildDate,
                        comment: this.childBirthForm.value.comment ? this.childBirthForm.value.comment : null
                    }
                };
                console.log(Dto, 'reqEdit');
                this.http.post(`${this.httpService.baseURL}lactatingmotherregister/saveOrUpdateLactatingMotherData`, Dto).subscribe((res) => {
                    console.log(res, 'responseedit');
                    if (res.status == true) {
                        this.showSuccess(res.message);
                        this.dialogRef.close();
                    }
                    else {
                        this.showError(res.message);
                    }
                });
            }
        }
    }
    /* Close the dialog pop-up */
    closeDialog() {
        this.dialogRef.close();
    }
    /* Show success message toaster */
    showSuccess(message) {
        this.toaster.success(message, 'Child Information Save', {
            timeOut: 3000,
        });
    }
    /* Show Error message toaster */
    showError(message) {
        this.toaster.error(message, 'Error', {
            timeOut: 3000,
        });
    }
    restrictTypeOfDate() {
        return false;
    }
}
AddLmChildComponent.ɵfac = function AddLmChildComponent_Factory(t) { return new (t || AddLmChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
AddLmChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddLmChildComponent, selectors: [["app-add-lm-child"]], decls: 298, vars: 115, consts: [["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md-4"], ["type", "radio", "value", "Home", "formControlName", "place"], ["type", "radio", "value", "Institution", "formControlName", "place"], [1, "form-group", "col-md"], ["for", "birthWeight"], ["type", "text", "placeholder", "Enter weight", "formControlName", "birthWeight", "maxlength", "5", 1, "form-control", 3, "ngClass", "keypress"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "firstVisitDate"], [1, "text-danger"], ["type", "date", "formControlName", "firstVisitDate", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "min", "max", "ngClass", "change"], ["for", "secondVisitDate"], ["type", "date", "formControlName", "secondVisitDate", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "min", "max", "ngClass"], [3, "disabled", "opened", "closed"], ["type", "radio", "value", "Y", "formControlName", "ebfUpto6Complete"], ["type", "radio", "value", "N", "formControlName", "ebfUpto6Complete"], ["for", "muacDate6"], ["type", "date", "formControlName", "muacDate6", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "height6month"], ["type", "text", "placeholder", "Enter height", "formControlName", "height6month", "maxlength", "7", 1, "form-control", 3, "ngClass", "keypress"], ["for", "weight6month"], ["type", "text", "placeholder", "Enter weight", "formControlName", "weight6month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress"], ["for", "muac6month"], ["type", "text", "placeholder", "Enter MUAC", "formControlName", "muac6month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress"], ["type", "radio", "value", "Y", "formControlName", "primaryImmunizationUpto12Completed"], ["type", "radio", "value", "N", "formControlName", "primaryImmunizationUpto12Completed"], ["type", "radio", "value", "Y", "formControlName", "ebfUpto12Complete"], ["type", "radio", "value", "N", "formControlName", "ebfUpto12Complete"], ["for", "muacDate12"], ["type", "date", "formControlName", "muacDate12", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "height12month"], ["type", "text", "placeholder", "Enter height", "formControlName", "height12month", "maxlength", "7", 1, "form-control", 3, "ngClass", "keypress"], ["for", "weight12month"], ["type", "text", "placeholder", "Enter weight", "formControlName", "weight12month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress"], ["for", "muac12month"], ["type", "text", "placeholder", "Enter MUAC", "formControlName", "muac12month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress"], ["type", "radio", "value", "Y", "formControlName", "ebfUpto18Complete"], ["type", "radio", "value", "N", "formControlName", "ebfUpto18Complete"], ["for", "muacDate18"], ["type", "date", "formControlName", "muacDate18", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "height18month"], ["type", "text", "placeholder", "Enter height", "formControlName", "height18month", "maxlength", "7", 1, "form-control", 3, "ngClass", "keypress"], ["for", "weight18month"], ["type", "text", "placeholder", "Enter weight", "formControlName", "weight18month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress"], ["for", "muac18month"], ["type", "text", "placeholder", "Enter MUAC", "formControlName", "muac18month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress"], ["type", "radio", "value", "Y", "formControlName", "primaryImmunizationUpto24Completed"], ["type", "radio", "value", "N", "formControlName", "primaryImmunizationUpto24Completed"], ["type", "radio", "value", "Y", "formControlName", "ebfUpto24Complete"], ["type", "radio", "value", "N", "formControlName", "ebfUpto24Complete"], ["for", "muacDate24"], ["type", "date", "formControlName", "muacDate24", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "height24month"], ["type", "text", "placeholder", "Enter height", "formControlName", "height24month", "maxlength", "7", 1, "form-control", 3, "ngClass", "keypress"], ["for", "weight24month"], ["type", "text", "placeholder", "Enter weight", "formControlName", "weight24month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress"], ["for", "muac24month"], ["type", "text", "placeholder", "Enter MUAC", "formControlName", "muac24month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress"], [3, "opened", "closed"], [1, "form-group", "col-md-3"], ["for", "checkChildDeath"], ["formControlName", "checkChildDeath", "id", "checkChildDeath", 1, "form-select", 3, "change"], ["value", ""], ["value", "Y"], ["value", "N"], ["class", "form-group col-md", 4, "ngIf"], ["class", "addEditBtn", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "deathOfChildDate"], ["type", "date", "formControlName", "deathOfChildDate", 1, "form-control"], ["for", "comment"], ["type", "text", "formControlName", "comment", 1, "form-control"], [1, "addEditBtn"], ["type", "submit", 1, "btn", "btn-success", 3, "click"]], template: function AddLmChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lactating Mother Child");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddLmChildComponent_Template_i_click_5_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Place of Delivery :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Institution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Birth Weight (kg):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_29_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddLmChildComponent_div_30_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Within 6 month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "First Visit Date:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddLmChildComponent_Template_input_change_44_listener($event) { return ctx.restrictSecondDate($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AddLmChildComponent_div_45_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Second visit Date:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AddLmChildComponent_div_53_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-expansion-panel", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AddLmChildComponent_Template_mat_expansion_panel_opened_54_listener() { return ctx.panelOpenState = true; })("closed", function AddLmChildComponent_Template_mat_expansion_panel_closed_54_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " After 6 months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Exclusive Breast Feeding Complete :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "MUAC Record Date:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AddLmChildComponent_Template_input_keydown_80_listener() { return ctx.restrictTypeOfDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, AddLmChildComponent_div_81_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Height (cm):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_86_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, AddLmChildComponent_div_87_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Weight (kg):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_92_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, AddLmChildComponent_div_93_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "MUAC (cm):\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_100_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, AddLmChildComponent_div_101_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-expansion-panel", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AddLmChildComponent_Template_mat_expansion_panel_opened_102_listener() { return ctx.panelOpenState = true; })("closed", function AddLmChildComponent_Template_mat_expansion_panel_closed_102_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " After 12 months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Primary Immunization completed :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Exclusive Breast Feeding Complete :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "MUAC Record Date:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AddLmChildComponent_Template_input_keydown_144_listener() { return ctx.restrictTypeOfDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, AddLmChildComponent_div_145_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Height (cm):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_150_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, AddLmChildComponent_div_151_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Weight (kg):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_156_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, AddLmChildComponent_div_157_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "MUAC (cm):\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_164_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, AddLmChildComponent_div_165_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-expansion-panel", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AddLmChildComponent_Template_mat_expansion_panel_opened_166_listener() { return ctx.panelOpenState = true; })("closed", function AddLmChildComponent_Template_mat_expansion_panel_closed_166_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " After 18 months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Exclusive Breast Feeding Complete :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "MUAC Record Date:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AddLmChildComponent_Template_input_keydown_192_listener() { return ctx.restrictTypeOfDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](193, AddLmChildComponent_div_193_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Height (cm):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_198_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](199, AddLmChildComponent_div_199_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Weight (kg):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_204_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](205, AddLmChildComponent_div_205_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "MUAC (cm):\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_212_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](213, AddLmChildComponent_div_213_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "mat-expansion-panel", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AddLmChildComponent_Template_mat_expansion_panel_opened_214_listener() { return ctx.panelOpenState = true; })("closed", function AddLmChildComponent_Template_mat_expansion_panel_closed_214_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " After 24 months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Primary Immunization completed :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Exclusive Breast Feeding Complete :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "MUAC Record Date:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AddLmChildComponent_Template_input_keydown_256_listener() { return ctx.restrictTypeOfDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](257, AddLmChildComponent_div_257_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Height (cm):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_262_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](263, AddLmChildComponent_div_263_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Weight (kg):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_268_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](269, AddLmChildComponent_div_269_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "MUAC (cm):\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_276_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](277, AddLmChildComponent_div_277_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "mat-expansion-panel", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AddLmChildComponent_Template_mat_expansion_panel_opened_278_listener() { return ctx.panelOpenState = true; })("closed", function AddLmChildComponent_Template_mat_expansion_panel_closed_278_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " Child Death ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Is child death ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "select", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddLmChildComponent_Template_select_change_286_listener($event) { return ctx.checkChildDeath($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "-- Select --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](293, AddLmChildComponent_div_293_Template, 5, 0, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](294, AddLmChildComponent_div_294_Template, 7, 0, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](297, AddLmChildComponent_div_297_Template, 3, 0, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.childBirthForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](58, _c0, ctx.f.birthWeight.invalid && ctx.f.birthWeight.touched, ctx.f.birthWeight.valid && (ctx.f.birthWeight.dirty || ctx.f.birthWeight.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.birthWeight.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.childDob)("max", ctx.maxFirstVisit)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](61, _c0, ctx.f.firstVisitDate.invalid && ctx.f.firstVisitDate.touched, ctx.f.firstVisitDate.valid && (ctx.f.firstVisitDate.dirty || ctx.f.firstVisitDate.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.firstVisitDate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.firstVisit)("max", ctx.maxFirstVisit)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](64, _c0, ctx.f.secondVisitDate.invalid && ctx.f.secondVisitDate.touched, ctx.f.secondVisitDate.valid && (ctx.f.secondVisitDate.dirty || ctx.f.secondVisitDate.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.secondVisitDate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.after6m);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](67, _c0, ctx.f.muacDate6.invalid && ctx.f.muacDate6.touched, ctx.f.muacDate6.valid && (ctx.f.muacDate6.dirty || ctx.f.muacDate6.touched)))("min", ctx.muac6MinDate)("max", ctx.muac6MaxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muacDate6.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](70, _c0, ctx.f.height6month.invalid && ctx.f.height6month.touched, ctx.f.height6month.valid && (ctx.f.height6month.dirty || ctx.f.height6month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.height6month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](73, _c0, ctx.f.weight6month.invalid && ctx.f.weight6month.touched, ctx.f.weight6month.valid && (ctx.f.weight6month.dirty || ctx.f.weight6month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.weight6month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](76, _c0, ctx.f.muac6month.invalid && ctx.f.muac6month.touched, ctx.f.muac6month.valid && (ctx.f.muac6month.dirty || ctx.f.muac6month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muac6month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.after12m);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](79, _c0, ctx.f.muacDate12.invalid && ctx.f.muacDate12.touched, ctx.f.muacDate12.valid && (ctx.f.muacDate12.dirty || ctx.f.muacDate12.touched)))("min", ctx.muac12MinDate)("max", ctx.muac12MaxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muacDate12.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](82, _c0, ctx.f.height12month.invalid && ctx.f.height12month.touched, ctx.f.height12month.valid && (ctx.f.height12month.dirty || ctx.f.height12month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.height12month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](85, _c0, ctx.f.weight12month.invalid && ctx.f.weight12month.touched, ctx.f.weight12month.valid && (ctx.f.weight12month.dirty || ctx.f.weight12month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.weight12month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](88, _c0, ctx.f.muac12month.invalid && ctx.f.muac12month.touched, ctx.f.muac12month.valid && (ctx.f.muac12month.dirty || ctx.f.muac12month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muac12month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.after18m);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](91, _c0, ctx.f.muacDate18.invalid && ctx.f.muacDate18.touched, ctx.f.muacDate18.valid && (ctx.f.muacDate18.dirty || ctx.f.muacDate18.touched)))("min", ctx.muac18MinDate)("max", ctx.muac18MaxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muacDate18.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](94, _c0, ctx.f.height18month.invalid && ctx.f.height18month.touched, ctx.f.height18month.valid && (ctx.f.height18month.dirty || ctx.f.height18month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.height18month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](97, _c0, ctx.f.weight18month.invalid && ctx.f.weight18month.touched, ctx.f.weight18month.valid && (ctx.f.weight18month.dirty || ctx.f.weight18month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.weight18month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](100, _c0, ctx.f.muac18month.invalid && ctx.f.muac18month.touched, ctx.f.muac18month.valid && (ctx.f.muac18month.dirty || ctx.f.muac18month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muac18month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.after24m);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](103, _c0, ctx.f.muacDate24.invalid && ctx.f.muacDate24.touched, ctx.f.muacDate24.valid && (ctx.f.muacDate24.dirty || ctx.f.muacDate24.touched)))("min", ctx.muac24MinDate)("max", ctx.muac24MaxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muacDate24.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](106, _c0, ctx.f.height24month.invalid && ctx.f.height24month.touched, ctx.f.height24month.valid && (ctx.f.height24month.dirty || ctx.f.height24month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.height24month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](109, _c0, ctx.f.weight24month.invalid && ctx.f.weight24month.touched, ctx.f.weight24month.valid && (ctx.f.weight24month.dirty || ctx.f.weight24month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.weight24month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](112, _c0, ctx.f.muac24month.invalid && ctx.f.muac24month.touched, ctx.f.muac24month.valid && (ctx.f.muac24month.dirty || ctx.f.muac24month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muac24month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.childDeath == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.childDeath == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.viewMode);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\n  .mat-dialog-container {\r\n  padding: 12px 17px;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1sbS1jaGlsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJhZGQtbG0tY2hpbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmRpYWxvZy10aXRsZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTE0cHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMyNzc7XHJcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICMwMDAwO1xyXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgIzAwMDA7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTJweCAxN3B4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddLmChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-lm-child',
                templateUrl: './add-lm-child.component.html',
                styleUrls: ['./add-lm-child.component.css']
            }]
    }], function () { return [{ type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "D/kB":
/*!*************************************************************************!*\
  !*** ./src/app/modules/lactating-mother-register/lm-register.module.ts ***!
  \*************************************************************************/
/*! exports provided: LmRegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmRegisterModule", function() { return LmRegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lm_register_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lm-register-routing.module */ "O/z0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _lm_view_lm_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lm-view/lm-view.component */ "uW4m");
/* harmony import */ var _add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-lm-child/add-lm-child.component */ "+93P");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/loader/loader.module */ "iFG+");












class LmRegisterModule {
}
LmRegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LmRegisterModule });
LmRegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LmRegisterModule_Factory(t) { return new (t || LmRegisterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _lm_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["LmRegisterRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__["LoaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LmRegisterModule, { declarations: [_lm_view_lm_view_component__WEBPACK_IMPORTED_MODULE_4__["LmViewComponent"], _add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_5__["AddLmChildComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _lm_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["LmRegisterRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__["LoaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LmRegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_lm_view_lm_view_component__WEBPACK_IMPORTED_MODULE_4__["LmViewComponent"], _add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_5__["AddLmChildComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _lm_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["LmRegisterRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__["LoaderModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "O/z0":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/lactating-mother-register/lm-register-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LmRegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmRegisterRoutingModule", function() { return LmRegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lm_view_lm_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lm-view/lm-view.component */ "uW4m");





const routes = [{ path: '', component: _lm_view_lm_view_component__WEBPACK_IMPORTED_MODULE_2__["LmViewComponent"] },];
class LmRegisterRoutingModule {
}
LmRegisterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LmRegisterRoutingModule });
LmRegisterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LmRegisterRoutingModule_Factory(t) { return new (t || LmRegisterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LmRegisterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LmRegisterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "SMi9":
/*!********************************************************************!*\
  !*** ./src/app/modules/baseline-survey/baseline-survey.service.ts ***!
  \********************************************************************/
/*! exports provided: BaselineSurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaselineSurveyService", function() { return BaselineSurveyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BaselineSurveyService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    getCasteView(obj) {
        return this.http.post(`${this.baseURL}castemaster/view`, obj);
    }
    getEducationDetails(obj) {
        return this.http.post(`${this.baseURL}educationalqualificationmaster/view`, obj);
    }
    monthlyIncomeDetails(obj) {
        return this.http.post(`${this.baseURL}monthlyincomemaster/view`, obj);
    }
    religionDetails(obj) {
        return this.http.post(`${this.baseURL}religionmaster/view`, obj);
    }
    occupationDetails(obj) {
        return this.http.post(`${this.baseURL}occupationmaster/view`, obj);
    }
    getIdCardDetails(obj) {
        return this.http.post(`${this.baseURL}identitycardtypes/view`, obj);
    }
    saveBaselineSurvey(obj) {
        return this.http.post(`${this.baseURL}baselinesurvey/saveOrUpdate`, obj);
    }
    baselineView(obj) {
        return this.http.post(`${this.baseURL}baselinesurvey/view`, obj);
    }
    baselineViewDetail(obj) {
        return this.http.post(`${this.baseURL}baselinesurvey/view/detail`, obj);
    }
    deleteFamily(obj) {
        return this.http.post(`${this.baseURL}familydetail/saveOrUpdate`, obj);
    }
    viewMoreFamilyDetails(obj) {
        return this.http.post(`${this.baseURL}familydetail/view`, obj);
    }
    baselineSurveyStatus(obj) {
        return this.http.post(`${this.baseURL}baselinesurvey/status`, obj);
    }
    villagesOfBranch(obj) {
        return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj);
    }
    ssVillageWiseList(obj) {
        return this.http.post(`${this.baseURL}swasthyasahayika/villageWiseList`, obj);
    }
    listOfBranchesOfARegion(obj) {
        return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
    }
}
BaselineSurveyService.ɵfac = function BaselineSurveyService_Factory(t) { return new (t || BaselineSurveyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BaselineSurveyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BaselineSurveyService, factory: BaselineSurveyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaselineSurveyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "YwHQ":
/*!***************************************************!*\
  !*** ./src/app/modules/core/http/http.service.ts ***!
  \***************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ "dBge");






class HttpService {
    constructor(http, sidebarService) {
        this.http = http;
        this.sidebarService = sidebarService;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Basic dXNlcjE6c2VjcmV0MQ=='
        });
        this.dataAccessDTO = {
            userId: this.sidebarService.userId,
            userName: this.sidebarService.loginId,
        };
    }
    postRequest(url, body) {
        return this.http.post(this.baseURL + url, body, { headers: this.headers });
    }
    getChildrenRegister(obj) {
        return this.http.post(`${this.baseURL}acr/view`, obj);
    }
    getLactatingMotherRegister(obj) {
        return this.http.post(`${this.baseURL}lactatingmotherregister/getVillageWiseChildDetails`, obj);
    }
    getPregnantWomenList(obj) {
        return this.http.post(`${this.baseURL}pwr/getVillageWisePregnantWomanDetails`, obj);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"] }]; }, null); })();


/***/ }),

/***/ "uW4m":
/*!********************************************************************************!*\
  !*** ./src/app/modules/lactating-mother-register/lm-view/lm-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: LmViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmViewComponent", function() { return LmViewComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-lm-child/add-lm-child.component */ "+93P");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/http/http.service */ "YwHQ");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../baseline-survey/baseline-survey.service */ "SMi9");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/validation.service */ "yjnX");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "G/xV");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");















function LmViewComponent_div_17_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", region_r12.regionName, " ");
} }
function LmViewComponent_div_17_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LmViewComponent_div_17_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LmViewComponent_div_17_div_10_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.f.region.errors.required);
} }
function LmViewComponent_div_17_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", branch_r14.branchName, " ");
} }
function LmViewComponent_div_17_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LmViewComponent_div_17_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LmViewComponent_div_17_div_20_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.f.branch.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function LmViewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LmViewComponent_div_17_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LmViewComponent_div_17_option_9_Template, 2, 1, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LmViewComponent_div_17_div_10_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LmViewComponent_div_17_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.changeBranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LmViewComponent_div_17_option_19_Template, 2, 1, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LmViewComponent_div_17_div_20_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx_r0.f.region.invalid && ctx_r0.f.region.touched, ctx_r0.f.region.valid && (ctx_r0.f.region.dirty || ctx_r0.f.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, ctx_r0.f.branch.invalid && ctx_r0.f.branch.touched, ctx_r0.f.branch.valid && (ctx_r0.f.branch.dirty || ctx_r0.f.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.branch.errors);
} }
function LmViewComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", block_r19.blockName, " ");
} }
function LmViewComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LmViewComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LmViewComponent_div_29_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.block.errors.required);
} }
function LmViewComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gp_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gp_r21.name, " ");
} }
function LmViewComponent_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LmViewComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LmViewComponent_div_39_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.f.gp.errors.required);
} }
function LmViewComponent_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vill_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vill_r23.villageName, " ");
} }
function LmViewComponent_div_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LmViewComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LmViewComponent_div_49_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.f.gram.errors.required);
} }
function LmViewComponent_tr_77_i_18_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LmViewComponent_tr_77_i_18_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.openAddEditLmChild(item_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LmViewComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LmViewComponent_tr_77_i_18_Template, 1, 0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LmViewComponent_tr_77_Template_i_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const item_r25 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.ViewLmChild(item_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r26 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r25.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", item_r25.firstName, " ", item_r25.middleName, " ", item_r25.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r25.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r25.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r25.childAge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r25.muac ? item_r25.muac : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r25.muacIndicatorName == "RED" ? "danger" : item_r25.muacIndicatorName == "GREEN" ? "success" : item_r25.muacIndicatorName == "YELLOW" ? "warning" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.createUpdateMode);
} }
class LmViewComponent {
    constructor(httpService, fb, sidebarService, http, baselineService, dialog, datepipe, validationService) {
        this.httpService = httpService;
        this.fb = fb;
        this.sidebarService = sidebarService;
        this.http = http;
        this.baselineService = baselineService;
        this.dialog = dialog;
        this.datepipe = datepipe;
        this.validationService = validationService;
        this.regionList = [];
        this.branchList = [];
        this.villagesOfBranch = [];
        this.gpDtoList = [];
        this.villageDtoList = [];
        this.ssList = [];
        this.swasthyaSahayika = [];
        this.lactatingmotherregister = [];
        this.loader = false;
    }
    ngDoCheck() {
        this.searchFullscreen = this.validationService.val;
    }
    ngOnInit() {
        var _a, _b, _c;
        this.createForm();
        this.getLactatingMotherList();
        let dataAccessDTO = {
            userId: this.sidebarService.userId,
            userName: this.sidebarService.loginId,
        };
        let Dto = {
            dataAccessDTO: dataAccessDTO,
            branchId: this.sidebarService.branchId
        };
        if (this.sidebarService.RoleDTOName.indexOf('HCO') != -1 || this.sidebarService.RoleDTOName.indexOf('TL') != -1) {
            this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
                if (res.sessionDTO.status == true) {
                    this.villagesOfBranch = res.responseObject;
                    console.log(this.villagesOfBranch, 'villagesOfBranch1');
                }
            });
        }
        this.regionList = this.sidebarService.listOfRegion;
        this.regionBranchHide = this.sidebarService.regionBranchHide;
        if (this.sidebarService.RoleDTOName.indexOf('HCO') != -1 || this.sidebarService.RoleDTOName.indexOf('TL') != -1) {
            this.regionBranchHide = false;
        }
        else {
            this.regionBranchHide = true;
        }
        this.createUpdateMode = ((_c = (_b = (_a = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionShortName == 'Registers')) === null || _a === void 0 ? void 0 : _a.subMenuDetailList.find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 121)) === null || _b === void 0 ? void 0 : _b.accessDetailList.find(accessType => accessType.accessType == 'create')) === null || _c === void 0 ? void 0 : _c.accessType) ? true : false;
    }
    /* on change Region dropdown getting Branch list */
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
        this.baselineService.listOfBranchesOfARegion(req).subscribe((res) => {
            this.branchList = res === null || res === void 0 ? void 0 : res.responseObject;
        }, (error) => {
            this.branchList = null;
        });
        this.locationForm.controls.branch.setValue('');
        this.locationForm.controls.block.setValue('');
        this.locationForm.controls.gp.setValue('');
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.region == '') {
            this.villagesOfBranch = [];
            this.gpDtoList = [];
            this.villageDtoList = [];
        }
    }
    /* on change Branch dropdown getting villagesOfBranch list */
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
        this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
            this.villagesOfBranch = res.responseObject;
            console.log(this.villagesOfBranch, 'villagesOfBranch2');
        });
        this.locationForm.controls.block.setValue('');
        this.locationForm.controls.gp.setValue('');
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.branch == '') {
            this.villagesOfBranch = [];
            this.gpDtoList = [];
            this.villageDtoList = [];
        }
    }
    /* on change Block dropdown getting GP list */
    changeBlock(blockname) {
        var _a;
        this.gpDtoList = (_a = this.villagesOfBranch.find(block => block.blockName == blockname)) === null || _a === void 0 ? void 0 : _a.gpDtoList;
        this.selectedBlock = this.locationForm.get('block').value;
        this.locationForm.controls.gp.setValue('');
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.block == '') {
            this.gpDtoList = [];
            this.villageDtoList = [];
        }
    }
    /* on change GP dropdown getting Village list */
    changeGp(gpName) {
        var _a, _b;
        this.villageDtoList = (_b = (_a = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)) === null || _a === void 0 ? void 0 : _a.gpDtoList.find(gp => gp.name == gpName)) === null || _b === void 0 ? void 0 : _b.villageDtoList;
        this.selectedGp = this.locationForm.get('gp').value;
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.gp == '') {
            this.villageDtoList = [];
        }
    }
    /* on change Village dropdown getting LactatingMother List */
    changeVillage(villagename) {
        var _a, _b, _c;
        this.villageMasterId = (_c = (_b = (_a = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)) === null || _a === void 0 ? void 0 : _a.gpDtoList.find(gp => gp.name == this.selectedGp)) === null || _b === void 0 ? void 0 : _b.villageDtoList.find(vill => vill.villageName == villagename)) === null || _c === void 0 ? void 0 : _c.villageMasterId;
        this.getLactatingMotherList(this.villageMasterId);
        if (this.locationForm.value.gram == '') {
        }
    }
    createForm() {
        this.locationForm = this.fb.group({
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    get f() {
        return this.locationForm.controls;
    }
    /* get the all Lactating Mother List */
    getLactatingMotherList(villageMasterId = null) {
        let req = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            villageMasterId: villageMasterId
        };
        this.loader = false;
        this.httpService.getLactatingMotherRegister(req).subscribe((res) => {
            var _a, _b, _c, _d;
            this.lactatingmotherregister = (_a = res.responseObject) === null || _a === void 0 ? void 0 : _a.childrenBetween0And6Months.concat((_b = res.responseObject) === null || _b === void 0 ? void 0 : _b.childrenBetween6And12Months, (_c = res.responseObject) === null || _c === void 0 ? void 0 : _c.childrenBetween12And18Months, (_d = res.responseObject) === null || _d === void 0 ? void 0 : _d.childrenBetween18And24Months);
            this.loader = true;
        }, error => {
            this.loader = true;
        });
    }
    /* only view the particular Lactating Mother info */
    ViewLmChild(lmList) {
        console.log(lmList);
        const dialogRef = this.dialog.open(_add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_3__["AddLmChildComponent"], {
            width: '1000px',
            height: '550px',
            data: {
                viewMode: true,
                childWiselactatingmotherList: lmList
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    /* First time it save the data,
      After that it is editable */
    openAddEditLmChild(lmList) {
        console.log(lmList);
        let saveForm;
        let Dto = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            childId: lmList.childDetailId,
        };
        this.http.post(`${this.httpService.baseURL}lactatingmotherregister/childWiselactatingmotherMUACList`, Dto).subscribe((res) => {
            if (lmList.childBasicStatusDto.placeOfDelivery == null &&
                lmList.childBasicStatusDto.birthWeight == null &&
                lmList.childBasicStatusDto.firstVisitDate == null &&
                lmList.childBasicStatusDto.secondVisitDate == null) {
                saveForm = true;
            }
            else {
                saveForm = false;
            }
            if (res.responseObject.length == 0 && saveForm) {
                const dialogRef = this.dialog.open(_add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_3__["AddLmChildComponent"], {
                    width: '1000px',
                    height: '550px',
                    data: {
                        editMode: false,
                        childWiselactatingmotherList: lmList
                    }
                });
                dialogRef.afterClosed().subscribe(result => {
                    this.getLactatingMotherList(this.villageMasterId);
                });
            }
            else {
                const dialogRef = this.dialog.open(_add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_3__["AddLmChildComponent"], {
                    width: '1000px',
                    height: '550px',
                    data: {
                        editMode: true,
                        childWiselactatingmotherList: lmList
                    }
                });
                dialogRef.afterClosed().subscribe(result => {
                    this.getLactatingMotherList(this.villageMasterId);
                });
            }
        });
    }
}
LmViewComponent.ɵfac = function LmViewComponent_Factory(t) { return new (t || LmViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_7__["BaselineSurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_9__["ValidationService"])); };
LmViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LmViewComponent, selectors: [["app-lm-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])], decls: 79, vars: 27, consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search lactating info here...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["id", "table_wrapper", 1, "table", "table-striped", 2, "table-layout", "fixed"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [1, "invalid-feedback"], [4, "ngIf"], [1, "fa", "fa-circle", "fa-lg"], [2, "padding", "0px 0px 0px 32px"], ["class", "fas fa-edit", "title", "Save & Edit", 3, "click", 4, "ngIf"], ["title", "View Child", 1, "fa", "fa-eye", "fa-lg", 3, "click"], ["title", "Save & Edit", 1, "fas", "fa-edit", 3, "click"]], template: function LmViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Lactating Mother Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LmViewComponent_Template_input_ngModelChange_13_listener($event) { return ctx.lmrSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LmViewComponent_div_17_Template, 21, 12, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Block :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LmViewComponent_Template_select_change_25_listener($event) { return ctx.changeBlock($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "-- Select Block --");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LmViewComponent_option_28_Template, 2, 1, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LmViewComponent_div_29_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "GP/ Municipality :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LmViewComponent_Template_select_change_35_listener($event) { return ctx.changeGp($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "-- Select GP/ Municipality --");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, LmViewComponent_option_38_Template, 2, 1, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, LmViewComponent_div_39_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Village/ Gram Sansad/ Locality :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LmViewComponent_Template_select_change_45_listener($event) { return ctx.changeVillage($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "-- Select Village --");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, LmViewComponent_option_48_Template, 2, 1, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, LmViewComponent_div_49_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "table", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "SL No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Family No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Mother Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Child Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Child Sex");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Child Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Last MUAC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " collected");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Current Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, LmViewComponent_tr_77_Template, 20, 13, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](78, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lmrSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.locationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c0, ctx.f.block.invalid && ctx.f.block.touched, ctx.f.block.valid && (ctx.f.block.dirty || ctx.f.block.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.block.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](21, _c0, ctx.f.gp.invalid && ctx.f.gp.touched, ctx.f.gp.valid && (ctx.f.gp.dirty || ctx.f.gp.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gpDtoList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.gp.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](24, _c0, ctx.f.gram.invalid && ctx.f.gram.touched, ctx.f.gram.valid && (ctx.f.gram.dirty || ctx.f.gram.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.villageDtoList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.gram.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](78, 15, ctx.lactatingmotherregister, ctx.lmrSearch));
    } }, directives: [_shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipe"]], styles: [".QA_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n}\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 17px 10px;\r\n}\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 330px;\r\n  height: 63%;\r\n}\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 625px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 60%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 474px;\r\n}\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 630px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 140px;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n.fa-eye[_ngcontent-%COMP%]:hover {\r\n  color: #70caf7 !important;\r\n  cursor: pointer;\r\n  font-size: 1.8em;\r\n}\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%] {\r\n  color: #cd0202;\r\n}\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\r\n  color: #24d524;\r\n}\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\r\n  color: #f7cd00;\r\n}\r\ntable.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  overflow-y: scroll;\r\n  visibility: hidden;\r\n}\r\ntable.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  flex: 1 auto;\r\n  display: block;\r\n  color: #ffffff;\r\n}\r\ntable.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  height: auto;\r\n  max-height: 500px;\r\n}\r\ntable.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\ntable.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding: 5px;\r\n    text-align:center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxtLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FBQ1g7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBR0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsYUFBYTtBQUNmO0FBQ0E7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoibG0tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlFBX3RhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLlFBX3RhYmxlIC50YWJsZSB0aGVhZCB0aCB7XHJcbiAgcGFkZGluZzogMTdweCAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyIGJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMzBweDtcclxuICBoZWlnaHQ6IDYzJTtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2MjVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTlweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyIGlucHV0IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0NzRweDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGlucHV0IHtcclxuICB3aWR0aDogNzQlO1xyXG4gIG1hcmdpbi1sZWZ0OiA2MzBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIgLnNlYXJjaF9pbm5lciBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNDBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmZhLWV5ZTpob3ZlciB7XHJcbiAgY29sb3I6ICM3MGNhZjcgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG4uUUFfc2VjdGlvbiAuUUFfdGFibGUgdGJvZHkgLmRhbmdlciB7XHJcbiAgY29sb3I6ICNjZDAyMDI7XHJcbn1cclxuLlFBX3NlY3Rpb24gLlFBX3RhYmxlIHRib2R5IC5zdWNjZXNzIHtcclxuICBjb2xvcjogIzI0ZDUyNDtcclxufVxyXG4uUUFfc2VjdGlvbiAuUUFfdGFibGUgdGJvZHkgLndhcm5pbmcge1xyXG4gIGNvbG9yOiAjZjdjZDAwO1xyXG59XHJcblxyXG5cclxudGFibGUudGFibGUgdGhlYWQgdHI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxudGFibGUudGFibGUgdGhlYWQgdGgge1xyXG4gIGZsZXg6IDEgYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG50YWJsZS50YWJsZSB0Ym9keSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbn1cclxudGFibGUudGFibGUgdGhlYWQgdHIsXHJcbnRhYmxlLnRhYmxlIHRib2R5IHRyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRoZWFkIHRyIHRoLFxyXG50YWJsZS50YWJsZSB0Ym9keSB0ciB0ZCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LmViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-lm-view',
                templateUrl: './lm-view.component.html',
                styleUrls: ['./lm-view.component.css'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]]
            }]
    }], function () { return [{ type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_7__["BaselineSurveyService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"] }, { type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_9__["ValidationService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-lactating-mother-register-lm-register-module.js.map