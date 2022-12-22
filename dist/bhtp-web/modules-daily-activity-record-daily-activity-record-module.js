(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-daily-activity-record-daily-activity-record-module"],{

/***/ "Amo9":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/daily-activity-record/daily-activity-record-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DailyActivityRecordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyActivityRecordRoutingModule", function() { return DailyActivityRecordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _daily_activity_record_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily-activity-record.component */ "hy9M");





const routes = [{ path: '', component: _daily_activity_record_component__WEBPACK_IMPORTED_MODULE_2__["DailyActivityRecordComponent"] }];
class DailyActivityRecordRoutingModule {
}
DailyActivityRecordRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DailyActivityRecordRoutingModule });
DailyActivityRecordRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DailyActivityRecordRoutingModule_Factory(t) { return new (t || DailyActivityRecordRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DailyActivityRecordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyActivityRecordRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Iab2":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "RkE6":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/daily-activity-record/daily-activity-record.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DailyActivityRecordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyActivityRecordModule", function() { return DailyActivityRecordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _daily_activity_record_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily-activity-record-routing.module */ "Amo9");
/* harmony import */ var _daily_activity_record_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./daily-activity-record.component */ "hy9M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class DailyActivityRecordModule {
}
DailyActivityRecordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DailyActivityRecordModule });
DailyActivityRecordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DailyActivityRecordModule_Factory(t) { return new (t || DailyActivityRecordModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _daily_activity_record_routing_module__WEBPACK_IMPORTED_MODULE_2__["DailyActivityRecordRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DailyActivityRecordModule, { declarations: [_daily_activity_record_component__WEBPACK_IMPORTED_MODULE_3__["DailyActivityRecordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _daily_activity_record_routing_module__WEBPACK_IMPORTED_MODULE_2__["DailyActivityRecordRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyActivityRecordModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_daily_activity_record_component__WEBPACK_IMPORTED_MODULE_3__["DailyActivityRecordComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _daily_activity_record_routing_module__WEBPACK_IMPORTED_MODULE_2__["DailyActivityRecordRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "hy9M":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/daily-activity-record/daily-activity-record.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DailyActivityRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyActivityRecordComponent", function() { return DailyActivityRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/http/http.service */ "YwHQ");
/* harmony import */ var _daily_activity_record_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./daily-activity-record.service */ "u6hH");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");













function DailyActivityRecordComponent_div_12_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", region_r12.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", region_r12.regionName, " ");
} }
function DailyActivityRecordComponent_div_12_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRecordComponent_div_12_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRecordComponent_div_12_div_10_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.l.region.errors.required);
} }
function DailyActivityRecordComponent_div_12_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRecordComponent_div_12_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", branch_r14.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r14.branchName, " ");
} }
function DailyActivityRecordComponent_div_12_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRecordComponent_div_12_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRecordComponent_div_12_div_21_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.l.branch.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function DailyActivityRecordComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DailyActivityRecordComponent_div_12_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DailyActivityRecordComponent_div_12_option_9_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DailyActivityRecordComponent_div_12_div_10_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DailyActivityRecordComponent_div_12_Template_select_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeBranch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DailyActivityRecordComponent_div_12_option_19_Template, 2, 0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DailyActivityRecordComponent_div_12_option_20_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DailyActivityRecordComponent_div_12_div_21_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r0.l.region.invalid && ctx_r0.l.region.touched, ctx_r0.l.region.valid && (ctx_r0.l.region.dirty || ctx_r0.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx_r0.l.branch.invalid && ctx_r0.l.branch.touched, ctx_r0.l.branch.valid && (ctx_r0.l.branch.dirty || ctx_r0.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.darForm.value.region);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.l.branch.errors);
} }
function DailyActivityRecordComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "From Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRecordComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRecordComponent_div_20_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.l.fromDate.errors.required);
} }
function DailyActivityRecordComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "To Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRecordComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRecordComponent_div_27_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.l.toDate.errors.required);
} }
function DailyActivityRecordComponent_div_32_tr_111_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ss_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ss_r29.ss_name, " ");
} }
function DailyActivityRecordComponent_div_32_tr_111_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRecordComponent_div_32_tr_111_div_33_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r24.followUpSSDetails);
} }
function DailyActivityRecordComponent_div_32_tr_111_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No SS Mapped ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRecordComponent_div_32_tr_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DailyActivityRecordComponent_div_32_tr_111_div_33_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DailyActivityRecordComponent_div_32_tr_111_div_34_Template, 3, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r24.date.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.totalFamilyVisited);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.pwCounsellingFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.lmCounsellingFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.lmChildrenCounselling);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.pemCounsellingFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.redChildrenCounselling);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.yellowChildrenCounselling);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r24.generalFamilyCounselling2to5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r24.generalFamilyCounsellingAdolescent, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.generalFamilyOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.targetFamiliesVisitedWithSS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r24.generalFamiliesVisitedWithSS, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.ssFollowUpAnsweredVisited);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.followUpSSDetails.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.followUpSSDetails.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r24.escortingFamilyToHealthCareCenter, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r24.materialDistributedToFamilies, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r24.refresherTrainingCompletedOnDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r24.refresherTrainingCompletedBySS, " ");
} }
function DailyActivityRecordComponent_div_32_tr_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cumulative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dar_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dar_r31.totalFamilyVisitedSum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dar_r31.pwCounsellingFamilySum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dar_r31.lmCounsellingFamilySum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dar_r31.pemCounsellingFamilySum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dar_r31.generalFamilyCounselling2to5Sum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dar_r31.generalFamilyCounsellingAdolescentSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dar_r31.generalFamilyOtherSum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dar_r31.targetFamiliesVisitedWithSSSum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dar_r31.generalFamiliesVisitedWithSSSum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dar_r31.escortingFamilyToHealthCareCenterSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dar_r31.materialDistributedToFamiliesSum, " ");
} }
function DailyActivityRecordComponent_div_32_tr_113_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ss_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ss_r38.ss_name, " ");
} }
function DailyActivityRecordComponent_div_32_tr_113_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRecordComponent_div_32_tr_113_div_48_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dar_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", dar_r33.followUpSSDetailsUnique);
} }
function DailyActivityRecordComponent_div_32_tr_113_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No SS Mapped ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRecordComponent_div_32_tr_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Unique");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DailyActivityRecordComponent_div_32_tr_113_div_48_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DailyActivityRecordComponent_div_32_tr_113_div_49_Template, 3, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dar_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dar_r33.totalFamilyVisitedUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dar_r33.pwCounsellingFamilyUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dar_r33.lmCounsellingFamilyUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dar_r33.lmChildrenCounsellingUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dar_r33.pemCounsellingFamilyUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dar_r33.redChildrenCounsellingUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dar_r33.yellowChildrenCounsellingUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dar_r33.generalFamilyCounselling2to5Unique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dar_r33.generalFamilyCounsellingAdolescentUnique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dar_r33.generalFamilyOtherUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dar_r33.targetFamiliesVisitedWithSSUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dar_r33.generalFamiliesVisitedWithSSUnique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dar_r33.ssFollowUpAnsweredVisitedUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (dar_r33.followUpSSDetailsUnique == null ? null : dar_r33.followUpSSDetailsUnique.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (dar_r33.followUpSSDetailsUnique == null ? null : dar_r33.followUpSSDetailsUnique.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dar_r33.escortingFamilyToHealthCareCenterUnique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dar_r33.materialDistributedToFamiliesUnique, "");
} }
function DailyActivityRecordComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "PW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "LM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "LM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "PEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "RED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "YELLOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "(2-5yr)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Adolescent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "(14-18yr)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "With");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "With");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Answered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Escorted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Families");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "HCC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Distributed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Families ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Refreshers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Refreshers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Training ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, DailyActivityRecordComponent_div_32_tr_111_Template, 43, 20, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, DailyActivityRecordComponent_div_32_tr_112_Template, 58, 11, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, DailyActivityRecordComponent_div_32_tr_113_Template, 62, 17, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.dateWiseStaffDarDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.darListByStaffID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.darListByStaffID);
} }
function DailyActivityRecordComponent_div_33_tr_115_div_66_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ss_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ss_r46.ss_name, " ");
} }
function DailyActivityRecordComponent_div_33_tr_115_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRecordComponent_div_33_tr_115_div_66_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r41.followUpSSDetailsUnique);
} }
function DailyActivityRecordComponent_div_33_tr_115_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No SS Mapped ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRecordComponent_div_33_tr_115_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyActivityRecordComponent_div_33_tr_115_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const item_r41 = ctx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return ctx_r48.staffClickDateWiseRecords(item_r41, _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cum.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Unique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, DailyActivityRecordComponent_div_33_tr_115_div_66_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, DailyActivityRecordComponent_div_33_tr_115_div_67_Template, 3, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.staffName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.totalFamilyVisitedSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.totalFamilyVisitedUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.pwCounsellingFamilySum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.pwCounsellingFamilyUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.lmCounsellingFamilySum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.lmCounsellingFamilyUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.lmChildrenCounsellingUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.pemCounsellingFamilySum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.pemCounsellingFamilyUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.redChildrenCounsellingUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.yellowChildrenCounsellingUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.generalFamilyCounselling2to5Sum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.generalFamilyCounselling2to5Unique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.generalFamilyCounsellingAdolescentSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.generalFamilyCounsellingAdolescentUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.generalFamilyOtherSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.generalFamilyOtherUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.targetFamiliesVisitedWithSSSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.targetFamiliesVisitedWithSSUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.generalFamiliesVisitedWithSSSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.generalFamiliesVisitedWithSSUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.ssFollowUpAnsweredVisitedUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r41.followUpSSDetailsUnique.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r41.followUpSSDetailsUnique.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.escortingFamilyToHealthCareCenterSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.escortingFamilyToHealthCareCenterUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.materialDistributedToFamiliesSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.materialDistributedToFamiliesUnique, " ");
} }
function DailyActivityRecordComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "PW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "LM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "LM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "PEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "RED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "YELLOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "(2-5yr)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Adolescent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "(14-18yr)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "With");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "With");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Answered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Escorted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Families");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "HCC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Distributed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Families ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Refreshers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Refreshers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, DailyActivityRecordComponent_div_33_tr_115_Template, 84, 29, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.viewDARByRegionBranch);
} }
function DailyActivityRecordComponent_ng_template_34_tr_121_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ss_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ss_r58.ss_name, " ");
} }
function DailyActivityRecordComponent_ng_template_34_tr_121_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRecordComponent_ng_template_34_tr_121_div_33_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r53.followUpSSDetails);
} }
function DailyActivityRecordComponent_ng_template_34_tr_121_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No SS Mapped ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRecordComponent_ng_template_34_tr_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DailyActivityRecordComponent_ng_template_34_tr_121_div_33_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DailyActivityRecordComponent_ng_template_34_tr_121_div_34_Template, 3, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r53.date.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53.totalFamilyVisited);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53.pwCounsellingFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53.lmCounsellingFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53.lmChildrenCounselling);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53.pemCounsellingFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53.redChildrenCounselling);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53.yellowChildrenCounselling);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r53.generalFamilyCounselling2to5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r53.generalFamilyCounsellingAdolescent, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53.generalFamilyOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53.targetFamiliesVisitedWithSS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r53.generalFamiliesVisitedWithSS, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53.ssFollowUpAnsweredVisited);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r53.followUpSSDetails.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r53.followUpSSDetails.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r53.escortingFamilyToHealthCareCenter, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r53.materialDistributedToFamilies, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r53.refresherTrainingCompletedOnDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r53.refresherTrainingCompletedBySS, " ");
} }
function DailyActivityRecordComponent_ng_template_34_div_227_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ss_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ss_r61.ss_name, " ");
} }
function DailyActivityRecordComponent_ng_template_34_div_227_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityRecordComponent_ng_template_34_div_227_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r51.cumUniqueOnStaffClick.followUpSSDetailsUnique);
} }
function DailyActivityRecordComponent_ng_template_34_div_228_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No SS Mapped ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DailyActivityRecordComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Staff Date Wise Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyActivityRecordComponent_ng_template_34_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.staffDateWiseRecordsModalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "PW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "LM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "LM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "PEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "RED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "YELLOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "(2-5yr)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Adolescent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "(14-18yr)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "With");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "With");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Answered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Escorted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Families");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "HCC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Distributed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Families ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Refreshers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Refreshers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, DailyActivityRecordComponent_ng_template_34_tr_121_Template, 43, 20, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Cumulative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Unique");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](227, DailyActivityRecordComponent_ng_template_34_div_227_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](228, DailyActivityRecordComponent_ng_template_34_div_228_Template, 3, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.dateWiseStaffDarDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.totalFamilyVisitedSum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.pwCounsellingFamilySum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.lmCounsellingFamilySum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.pemCounsellingFamilySum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.generalFamilyCounselling2to5Sum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.generalFamilyCounsellingAdolescentSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.generalFamilyOtherSum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.targetFamiliesVisitedWithSSSum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.generalFamiliesVisitedWithSSSum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.escortingFamilyToHealthCareCenterSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.materialDistributedToFamiliesSum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.totalFamilyVisitedUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.pwCounsellingFamilyUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.lmCounsellingFamilyUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.lmChildrenCounsellingUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.pemCounsellingFamilyUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.redChildrenCounsellingUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.yellowChildrenCounsellingUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.generalFamilyCounselling2to5Unique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.generalFamilyCounsellingAdolescentUnique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.generalFamilyOtherUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.targetFamiliesVisitedWithSSUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.generalFamiliesVisitedWithSSUnique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.ssFollowUpAnsweredVisitedUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.cumUniqueOnStaffClick.followUpSSDetailsUnique.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.cumUniqueOnStaffClick.followUpSSDetailsUnique.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.escortingFamilyToHealthCareCenterUnique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.materialDistributedToFamiliesUnique, "");
} }
class DailyActivityRecordComponent {
    constructor(fb, sidebarService, http, httpService, dailyActRecord, toaster, modalService, config) {
        this.fb = fb;
        this.sidebarService = sidebarService;
        this.http = http;
        this.httpService = httpService;
        this.dailyActRecord = dailyActRecord;
        this.toaster = toaster;
        this.modalService = modalService;
        this.regionList = [];
        this.branchList = [];
        this.villagesOfBranch = [];
        this.darListByStaffID = [];
        this.darListByBranchID = [];
        this.darListByRegionID = [];
        this.dateWiseStaffDarDetails = [];
        this.viewDARByRegionBranch = [];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        var _a, _b;
        let roleAccessDTO = JSON.parse(localStorage.getItem('user'));
        this.roleAccess = (_b = (_a = roleAccessDTO.responseObject) === null || _a === void 0 ? void 0 : _a.RoledetailDTO) === null || _b === void 0 ? void 0 : _b.roleShortName;
        console.log(this.roleAccess);
        this.darForms();
        this.sidebarService.checkRoledetailDTO().then((res) => {
            this.lowerRankbranchId = res.branchId;
            if (res.regionBranchHide) {
                this.regionList = res.region;
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
                // let Dato = {
                //   dataAccessDTO: this.httpService.dataAccessDTO,
                //   branchId: res.branchId
                // }
                // this.dailyActRecord.HcoITLListOfBranch(Dato).subscribe((res: any) => {
                //   this.HcoITLList = res.responseObject;
                //   console.log(this.HcoITLList, 'HcoITLList');
                // });
            }
        });
        this.regionBranchHide = this.sidebarService.regionBranchHide;
    }
    darForms() {
        this.darForm = this.fb.group({
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // hco: ['', Validators.required],
            fromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get l() {
        return this.darForm.controls;
    }
    changeRegion(regionId) {
        console.log(regionId, 'regionId');
        let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };
        this.dailyActRecord.listOfBranchesOfARegion(req).subscribe((res) => {
            this.branchList = res === null || res === void 0 ? void 0 : res.responseObject;
        });
        this.darForm.controls.branch.setValue('');
    }
    changeBranch() {
        this.viewDARByRegionBranch = [];
    }
    fromDateExpectToDate(e) {
        this.dateWiseStaffDarDetails = [];
        this.darListByStaffID = [];
        this.viewDARByRegionBranch = [];
        this.darForm.controls.toDate.setValue('');
        if (e.target.value == '') {
            this.darForm.controls.toDate.setValue('');
        }
        console.log(e.target.value);
        this.minToDate = e.target.value;
        this.maxToDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.addMonths(3, new Date(e.target.value))).format('YYYY-MM-DD');
        console.log(this.maxToDate, ' this.maxToDate');
    }
    addMonths(numOfMonths, date = new Date()) {
        date.setMonth(date.getMonth() + numOfMonths);
        return date;
    }
    toDateChange() {
        this.dateWiseStaffDarDetails = [];
        this.darListByStaffID = [];
        this.viewDARByRegionBranch = [];
        if (!this.darForm.value.fromDate) {
            this.showError('Please Select From Date');
            this.darForm.controls.toDate.setValue('');
        }
    }
    fetchReport() {
        let item = this.darForm.value;
        if (this.roleAccess == 'HCO') {
            this.viewDailyRecordByStaffId();
        }
        else {
            if (item.branch == 'allBranches') {
                this.viewDailyRecordByRegionId();
            }
            if (item.branch != 'allBranches') {
                this.viewDailyRecordByBranchId();
            }
        }
    }
    downloadExcelReport() {
        let item = this.darForm.value;
        if (this.roleAccess == 'HCO') {
            this.recordDownloadExcelByStaffId();
        }
        else {
            if (item.branch == 'allBranches') {
                this.recordDownloadExcelByRegionId();
            }
            if (item.branch != 'allBranches') {
                this.recordDownloadExcelByBranchId();
            }
        }
    }
    viewDailyRecordByStaffId() {
        let obj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            darFromDate: this.darForm.value.fromDate,
            darToDate: this.darForm.value.toDate,
            staffMasterId: this.httpService.dataAccessDTO.userId
        };
        console.log(obj);
        this.dailyActRecord.recordViewByStaffId(obj).subscribe((res) => {
            var _a, _b;
            this.darListByStaffID = res.responseObject;
            this.dateWiseStaffDarDetails = (_a = res.responseObject[0]) === null || _a === void 0 ? void 0 : _a.dateWiseStaffDarDetails;
            console.log(this.darListByStaffID, 'darListByStaffID');
            console.log(this.dateWiseStaffDarDetails, 'this.dateWiseStaffDarDetails');
            if (((_b = this.darListByStaffID) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                this.showError('Sorry, no data was found !');
            }
            if (res.status == false) {
                this.showError(res.message);
            }
        });
    }
    recordDownloadExcelByStaffId() {
        let obj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            darFromDate: this.darForm.value.fromDate,
            darToDate: this.darForm.value.toDate,
            staffMasterId: this.httpService.dataAccessDTO.userId
        };
        console.log(obj);
        this.dailyActRecord.recordDownloadExcelByStaffId(obj).subscribe((response, fileName) => {
            // console.log(response.body.byteLength == 0);
            if (response.body.byteLength == 0) {
                this.showError('Sorry, no data was found !');
            }
            else {
                const blob = new Blob([response.body], { type: response.headers.get('content-type') });
                fileName = fileName || response.headers.get('content-type').split(';')[1].split('=')[1];
                const file = new File([blob], fileName, { type: response.headers.get('content-type') });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(file);
            }
        });
    }
    viewDailyRecordByBranchId() {
        let obj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            darFromDate: this.darForm.value.fromDate,
            darToDate: this.darForm.value.toDate,
            branchMasterId: this.darForm.value.branch ? this.darForm.value.branch : this.lowerRankbranchId
        };
        console.log(obj);
        this.dailyActRecord.recordViewByBranchId(obj).subscribe((res) => {
            var _a;
            this.darListByBranchID = res.responseObject;
            this.viewDARByRegionBranch = res.responseObject;
            console.log(this.darListByBranchID, 'darListByBranchID');
            console.log(this.viewDARByRegionBranch, 'viewDARByBranch');
            if (((_a = this.darListByBranchID) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                this.showError('Sorry, no data was found !');
            }
            if (res.status == false) {
                this.showError(res.message);
            }
        });
    }
    recordDownloadExcelByBranchId() {
        let obj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            darFromDate: this.darForm.value.fromDate,
            darToDate: this.darForm.value.toDate,
            branchMasterId: this.darForm.value.branch ? this.darForm.value.branch : this.lowerRankbranchId
        };
        console.log(obj);
        this.dailyActRecord.recordDownloadExcelByBranchId(obj).subscribe((response, fileName) => {
            if (response.body.byteLength == 0) {
                this.showError('Sorry, no data was found !');
            }
            else {
                const blob = new Blob([response.body], { type: response.headers.get('content-type') });
                fileName = fileName || response.headers.get('content-type').split(';')[1].split('=')[1];
                const file = new File([blob], fileName, { type: response.headers.get('content-type') });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(file);
            }
        });
    }
    viewDailyRecordByRegionId() {
        let obj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            darFromDate: this.darForm.value.fromDate,
            darToDate: this.darForm.value.toDate,
            regionMasterId: this.darForm.value.region
        };
        console.log(obj);
        this.dailyActRecord.recordViewByRegionId(obj).subscribe((res) => {
            var _a;
            this.darListByRegionID = res.responseObject;
            this.viewDARByRegionBranch = res.responseObject;
            console.log(this.viewDARByRegionBranch, 'viewDARByRegion');
            console.log(this.darListByRegionID);
            if (((_a = this.darListByRegionID) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                this.showError('Sorry, no data was found !');
            }
            if (res.status == false) {
                this.showError(res.message);
            }
        });
    }
    recordDownloadExcelByRegionId() {
        let obj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            darFromDate: this.darForm.value.fromDate,
            darToDate: this.darForm.value.toDate,
            regionMasterId: this.darForm.value.region
        };
        console.log(obj);
        this.dailyActRecord.recordDownloadExcelByRegionId(obj).subscribe((response, fileName) => {
            if (response.body.byteLength == 0) {
                this.showError('Sorry, no data was found !');
            }
            else {
                const blob = new Blob([response.body], { type: response.headers.get('content-type') });
                fileName = fileName || response.headers.get('content-type').split(';')[1].split('=')[1];
                const file = new File([blob], fileName, { type: response.headers.get('content-type') });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(file);
            }
        });
    }
    disabledFetchReport() {
        let flag = true;
        if (this.roleAccess.includes('HCO')) {
            if (!this.darForm.value.toDate) {
                flag = false;
            }
        }
        else {
            if (!this.darForm.value.region || !this.darForm.value.branch || !this.darForm.value.toDate) {
                flag = false;
            }
        }
        return flag;
    }
    staffClickDateWiseRecords(item, staffDateWiseRecords) {
        this.dateWiseStaffDarDetails = item.dateWiseStaffDarDetails;
        this.cumUniqueOnStaffClick = item;
        console.log(this.dateWiseStaffDarDetails, '  this.dateWiseStaffDarDetails ');
        console.log(this.cumUniqueOnStaffClick, ' this.cumUniqueOnStaffClick ');
        this.modalContent = '';
        this.dateWiseStaffDarDetailsModal = this.modalService.open(staffDateWiseRecords, {
            windowClass: 'staffDateWiseRecords',
        });
    }
    staffDateWiseRecordsModalDismiss() {
        this.dateWiseStaffDarDetailsModal.close();
    }
    showSuccess(message) {
        this.toaster.success(message, 'Daily-Activity Record', {
            timeOut: 3000,
        });
    }
    showError(message) {
        this.toaster.error(message, 'Daily-Activity Record', {
            timeOut: 3000,
        });
    }
    restrictTypeOfDate() {
        return false;
    }
}
DailyActivityRecordComponent.ɵfac = function DailyActivityRecordComponent_Factory(t) { return new (t || DailyActivityRecordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_daily_activity_record_service__WEBPACK_IMPORTED_MODULE_7__["DailyActivityRecordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalConfig"])); };
DailyActivityRecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DailyActivityRecordComponent, selectors: [["app-daily-activity-record"]], decls: 36, vars: 18, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "page-title"], [1, "form-group", "col-md"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 2, "float", "right", "margin-right", "8px", "margin-top", "-55px", 3, "disabled", "click"], [1, "fas", "fa-solid", "fa-file-excel"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], ["for", "fromDate"], [1, "text-danger"], ["type", "date", "formControlName", "fromDate", 1, "form-control", 3, "ngClass", "keydown", "change"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "toDate"], ["type", "date", "formControlName", "toDate", 1, "form-control", 3, "ngClass", "min", "max", "keydown", "change"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "float", "right", "margin-right", "-22px", 3, "disabled", "click"], ["class", "white_box_tittle list_header", 4, "ngIf"], ["staffDateWiseRecords", ""], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], ["value", "allBranches", 4, "ngIf"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], ["value", "allBranches"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "font-size", "13px", "width", "16%"], [2, "font-size", "13px", "width", "8%"], [2, "font-size", "13px", "width", "9%"], [2, "font-size", "13px", "width", "12%"], [2, "font-size", "13px", "width", "11%"], [2, "font-size", "13px", "width", "13%"], [4, "ngFor", "ngForOf"], [1, "popover__wrapper"], [1, "popover__title"], ["class", "popover__content", 4, "ngIf"], [1, "popover__content"], ["class", "card-header", 4, "ngFor", "ngForOf"], [1, "card-header"], [2, "color", "#666666", "font-size", "13px", "width", "16%"], [2, "color", "#666666", "font-size", "13px", "width", "8%"], [2, "color", "#666666", "font-size", "13px", "width", "9%"], [2, "color", "#666666", "font-size", "13px", "width", "12%"], [2, "color", "#666666", "font-size", "13px", "width", "11%"], [2, "color", "#666666", "font-size", "13px", "width", "13%"], [2, "font-size", "13px", "width", "10%"], [2, "font-size", "13px", "width", "14%"], [1, "btn-link", 2, "font-size", "13px", "width", "13%", "word-wrap", "break-word", "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-25px", 3, "click"], [1, "modal-body"], [2, "color", "#666666", "font-size", "13px", "width", "10%"]], template: function DailyActivityRecordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Daily Activity Record");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyActivityRecordComponent_Template_button_click_8_listener() { return ctx.downloadExcelReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Download Excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DailyActivityRecordComponent_div_12_Template, 22, 13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "From Date :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DailyActivityRecordComponent_Template_input_keydown_19_listener() { return ctx.restrictTypeOfDate(); })("change", function DailyActivityRecordComponent_Template_input_change_19_listener($event) { return ctx.fromDateExpectToDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DailyActivityRecordComponent_div_20_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "To Date :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DailyActivityRecordComponent_Template_input_keydown_26_listener() { return ctx.restrictTypeOfDate(); })("change", function DailyActivityRecordComponent_Template_input_change_26_listener() { return ctx.toDateChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DailyActivityRecordComponent_div_27_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyActivityRecordComponent_Template_button_click_30_listener() { return ctx.fetchReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Fetch Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DailyActivityRecordComponent_div_32_Template, 114, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DailyActivityRecordComponent_div_33_Template, 116, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DailyActivityRecordComponent_ng_template_34_Template, 241, 29, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.disabledFetchReport());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.darForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, ctx.l.fromDate.invalid && ctx.l.fromDate.touched, ctx.l.fromDate.valid && (ctx.l.fromDate.dirty || ctx.l.fromDate.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.l.fromDate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, ctx.l.toDate.invalid && ctx.l.toDate.touched, ctx.l.toDate.valid && (ctx.l.toDate.dirty || ctx.l.toDate.touched)))("min", ctx.minToDate)("max", ctx.maxToDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.l.toDate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.disabledFetchReport());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roleAccess == "HCO" && (ctx.dateWiseStaffDarDetails == null ? null : ctx.dateWiseStaffDarDetails.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roleAccess != "HCO" && ((ctx.darListByBranchID == null ? null : ctx.darListByBranchID.length) > 0 || (ctx.darListByRegionID == null ? null : ctx.darListByRegionID.length) > 0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 200px;\r\n  overflow: scroll;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  width: 1266px;\r\n  margin-left: -360px;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  border: 0px solid transparent;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0.5px solid rgb(255, 255, 255);\r\n  background: #499;\r\n  padding: 12px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 4px;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translate(0, -20px);\r\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\r\n}\r\n\r\n.popover__title[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #499;\r\n  text-align: center;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 200px !important;\r\n  transform: translate(0, 15px) !important;\r\n  background-color: white;\r\n  color: #828BB2;\r\n  box-shadow: 3px 4px 5px 3px rgba(117, 111, 117, 1);\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: \"\";\r\n  left: calc(10% - 10px);\r\n  top: -10px;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #bfbfbf transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #499;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhaWx5LWFjdGl2aXR5LXJlY29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseURBQXlEO0VBQ3pELHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImRhaWx5LWFjdGl2aXR5LXJlY29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbn1cclxuXHJcbnRhYmxlIHRib2R5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbnRhYmxlIHRoZWFkLCB0Ym9keSB0ciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgd2lkdGg6IDEyNjZweDtcclxuICBtYXJnaW4tbGVmdDogLTM2MHB4O1xyXG59XHJcblxyXG4uUUFfdGFibGUgLnRhYmxlIHRoZWFkIHRoIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLlFBX3RhYmxlIC50YWJsZSB0Ym9keSB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLnBvcG92ZXJfX3dyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fd3JhcHBlcjpob3ZlciAucG9wb3Zlcl9fY29udGVudCB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgLTAuMDIsIDAuMiwgMC45Nyk7XHJcbn1cclxuXHJcbi5wb3BvdmVyX190aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fY29udGVudCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDE1cHgpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICM4MjhCQjI7XHJcbiAgYm94LXNoYWRvdzogM3B4IDRweCA1cHggM3B4IHJnYmEoMTE3LCAxMTEsIDExNywgMSk7XHJcbn1cclxuXHJcbi5wb3BvdmVyX19jb250ZW50IGxpIHtcclxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxufVxyXG5cclxuLnBvcG92ZXJfX2NvbnRlbnQ6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBsZWZ0OiBjYWxjKDEwJSAtIDEwcHgpO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYmZiZmJmIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyActivityRecordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daily-activity-record',
                templateUrl: './daily-activity-record.component.html',
                styleUrls: ['./daily-activity-record.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _daily_activity_record_service__WEBPACK_IMPORTED_MODULE_7__["DailyActivityRecordService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalConfig"] }]; }, null); })();


/***/ }),

/***/ "u6hH":
/*!********************************************************************************!*\
  !*** ./src/app/modules/daily-activity-record/daily-activity-record.service.ts ***!
  \********************************************************************************/
/*! exports provided: DailyActivityRecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyActivityRecordService", function() { return DailyActivityRecordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class DailyActivityRecordService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    listOfBranchesOfARegion(obj) {
        return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
    }
    HcoITLListOfBranch(obj) {
        return this.http.post(`${this.baseURL}branch/getListOfActiveHcoITL`, obj);
    }
    recordViewByStaffId(obj) {
        return this.http.post(`${this.baseURL}dailyActivityRecord/viewByStaffId`, obj);
    }
    recordViewByBranchId(obj) {
        return this.http.post(`${this.baseURL}dailyActivityRecord/viewByBranchId`, obj);
    }
    recordViewByRegionId(obj) {
        return this.http.post(`${this.baseURL}dailyActivityRecord/viewByRegionId`, obj);
    }
    recordDownloadExcelByStaffId(obj) {
        return this.http.post(`${this.baseURL}dailyActivityRecord/viewByStaffIdExcel`, obj, {
            observe: 'response',
            responseType: "arraybuffer",
        });
    }
    recordDownloadExcelByBranchId(obj) {
        return this.http.post(`${this.baseURL}dailyActivityRecord/viewByBranchIdExcel`, obj, {
            observe: 'response',
            responseType: "arraybuffer",
        });
    }
    recordDownloadExcelByRegionId(obj) {
        return this.http.post(`${this.baseURL}dailyActivityRecord/viewByRegionIdExcel`, obj, {
            observe: 'response',
            responseType: "arraybuffer",
        });
    }
}
DailyActivityRecordService.ɵfac = function DailyActivityRecordService_Factory(t) { return new (t || DailyActivityRecordService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DailyActivityRecordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DailyActivityRecordService, factory: DailyActivityRecordService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyActivityRecordService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-daily-activity-record-daily-activity-record-module.js.map