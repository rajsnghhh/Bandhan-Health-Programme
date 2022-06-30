(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/FZ1":
/*!*****************************************************!*\
  !*** ./src/app/modules/core/core-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.component */ "sItR");





const routes = [
    { path: '', component: _core_component__WEBPACK_IMPORTED_MODULE_2__["CoreComponent"] }
];
class CoreRoutingModule {
}
CoreRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreRoutingModule });
CoreRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreRoutingModule_Factory(t) { return new (t || CoreRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\BHP_WEB\src\main.ts */"zUnb");


/***/ }),

/***/ "6ZYd":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core-routing.module */ "/FZ1");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core.component */ "sItR");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "wWDU");






class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _core_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_core_component__WEBPACK_IMPORTED_MODULE_3__["CoreComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _core_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_core_component__WEBPACK_IMPORTED_MODULE_3__["CoreComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _core_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiUrl: window.location.protocol + '//' + window.location.hostname + ':6176/',
    // Local
    // apiUrl: 'http://192.168.153.56:6180/bhp/api/v1/'
    // Development 
    apiUrl: 'http://192.168.149.229:6180/bhp/api/v1/'
    // Test
    // apiUrl: 'http://192.168.149.229:6181/bhp/api/v1/test/'
    // Staging
    // apiUrl: 'http://192.168.149.221:6182/bhp/api/v1/staging/'
    // Production
    // apiUrl: 'http://192.168.149.221:6183/bhp/api/v1/prod/'
    // apiUrl: 'http://122.186.245.217:6183/bhp/api/v1/prod/'
    // Soumen Machine
    // apiUrl: 'http://192.168.153.91:6180/bhp/api/v1/'
    // Chayan Machine
    // apiUrl: 'http://localhost:6180/bhp/api/v1/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FpXt":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.component */ "IZ0i");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "LmRu");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-routing.module */ "vY5A");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "V8h6");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");













class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_shared_component__WEBPACK_IMPORTED_MODULE_2__["SharedComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"]], exports: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_shared_component__WEBPACK_IMPORTED_MODULE_2__["SharedComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"]
                ],
                exports: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "IZ0i":
/*!****************************************************!*\
  !*** ./src/app/modules/shared/shared.component.ts ***!
  \****************************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SharedComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharedComponent.ɵfac = function SharedComponent_Factory(t) { return new (t || SharedComponent)(); };
SharedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedComponent, selectors: [["app-shared"]], decls: 2, vars: 0, template: function SharedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shared works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shared',
                templateUrl: './shared.component.html',
                styleUrls: ['./shared.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LmRu":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/sidebar/sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login/login.service */ "XNvx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.service */ "dBge");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");








function SidebarComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_5_mat_expansion_panel_6_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_5_mat_expansion_panel_6_ul_5_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const submenu_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.subMenuClick(submenu_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const submenu_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](submenu_r7.subFunctionShortName);
} }
function SidebarComponent_div_5_mat_expansion_panel_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function SidebarComponent_div_5_mat_expansion_panel_6_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.panelOpenState = true; })("closed", function SidebarComponent_div_5_mat_expansion_panel_6_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.panelOpenState = false; })("click", function SidebarComponent_div_5_mat_expansion_panel_6_Template_mat_expansion_panel_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r5 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.menuClick(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_div_5_mat_expansion_panel_6_ul_5_Template, 3, 1, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r4.functionShortName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.subMenuList);
} }
const _c0 = function () { return ["/core"]; };
function SidebarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_div_5_mat_expansion_panel_6_Template, 6, 2, "mat-expansion-panel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.menuList);
} }
const _c1 = function (a0) { return { "hidden": a0 }; };
class SidebarComponent {
    constructor(loginService, router, sidebarService) {
        this.loginService = loginService;
        this.router = router;
        this.sidebarService = sidebarService;
        this.hide = true;
        this.hideSideNav = false;
        this.fullscreen = false;
        this.panelOpenState = false;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.loginService.user.subscribe(res => {
            var _a, _b, _c, _d, _e, _f;
            console.log(res);
            this.sidebarService.loginId = (_b = (_a = res === null || res === void 0 ? void 0 : res.responseObject) === null || _a === void 0 ? void 0 : _a.userdetailDTO) === null || _b === void 0 ? void 0 : _b.loginId;
            this.sidebarService.userId = (_d = (_c = res === null || res === void 0 ? void 0 : res.responseObject) === null || _c === void 0 ? void 0 : _c.userdetailDTO) === null || _d === void 0 ? void 0 : _d.userId;
            this.sidebarService.RoleDTOName = (_f = (_e = res === null || res === void 0 ? void 0 : res.responseObject) === null || _e === void 0 ? void 0 : _e.RoledetailDTO) === null || _f === void 0 ? void 0 : _f.roleShortName;
            this.menuList = res === null || res === void 0 ? void 0 : res.responseObject.menuDetailList;
            this.sidebarService.subMenuList = this.menuList;
            console.log(this.menuList, 'menuList');
            this.checkRoledetailDTO();
        });
    }
    checkRoledetailDTO() {
        var _a, _b, _c, _d;
        let req = {
            dataAccessDTO: {
                userId: this.sidebarService.userId,
                userName: this.sidebarService.loginId,
            }
        };
        if (((_b = (_a = this.sidebarService) === null || _a === void 0 ? void 0 : _a.RoleDTOName) === null || _b === void 0 ? void 0 : _b.indexOf('HCO')) != -1 || ((_d = (_c = this.sidebarService) === null || _c === void 0 ? void 0 : _c.RoleDTOName) === null || _d === void 0 ? void 0 : _d.indexOf('TL')) != -1) {
            this.sidebarService.listOfBranchesOfUser(req).subscribe((res) => {
                var _a, _b, _c, _d;
                this.sidebarService.branchId = (_a = res === null || res === void 0 ? void 0 : res.responseObject[0]) === null || _a === void 0 ? void 0 : _a.branchId;
                this.sidebarService.branchName = (_b = res === null || res === void 0 ? void 0 : res.responseObject[0]) === null || _b === void 0 ? void 0 : _b.branchName;
                this.sidebarService.donorName = (_d = (_c = res === null || res === void 0 ? void 0 : res.responseObject[0]) === null || _c === void 0 ? void 0 : _c.donorMasterDto) === null || _d === void 0 ? void 0 : _d.donorName;
            });
            this.sidebarService.regionBranchHide = false;
        }
        else {
            this.sidebarService.listOfRegionsOfUser(req).subscribe((res) => {
                this.sidebarService.listOfRegion = res.responseObject;
            });
            this.sidebarService.regionBranchHide = true;
        }
    }
    menuClick(i) {
        // console.log(i);
        this.subMenuList = this.menuList[i].subMenuDetailList;
        console.log(this.sidebarService.subMenuList);
    }
    subMenuClick(submenu) {
        var routeId = submenu.subFunctionMasterId;
        console.log(routeId);
        console.log(submenu.subFunctionShortName);
        if (routeId == 1 || routeId == 2 || routeId == 3 || routeId == 4) {
            this.router.navigate(['/user']);
        }
        if (routeId == 5 || routeId == 6 || routeId == 7 || routeId == 8) {
            this.router.navigate(['/role-access']);
        }
        if (routeId == 9 || routeId == 10 || routeId == 11 || routeId == 12) {
            this.router.navigate(['/vertical']);
        }
        if (routeId == 13 || routeId == 14 || routeId == 15 || routeId == 16) {
            this.router.navigate(['/sub-vertical']);
        }
        if (routeId == 17 || routeId == 18 || routeId == 19 || routeId == 20) {
            this.router.navigate(['/donor']);
        }
        if (routeId == 21 || routeId == 22 || routeId == 23 || routeId == 24) {
            this.router.navigate(['/project']);
        }
        if (routeId == 25 || routeId == 26 || routeId == 27 || routeId == 28) {
            this.router.navigate(['/mou']);
        }
        if (routeId == 29 || routeId == 30 || routeId == 31 || routeId == 32) {
            this.router.navigate(['/region-branch']);
        }
        if (routeId == 37 || routeId == 38 || routeId == 39 || routeId == 40) {
            this.router.navigate(['/block']);
        }
        if (routeId == 41 || routeId == 42 || routeId == 43 || routeId == 44) {
            this.router.navigate(['/gp']);
        }
        if (routeId == 49 || routeId == 50 || routeId == 51 || routeId == 52) {
            this.router.navigate(['/village-setup']);
        }
        if (routeId == 57 || routeId == 58 || routeId == 59 || routeId == 60) {
            this.router.navigate(['/branch-villageMap']);
        }
        if (routeId == 65 || routeId == 66 || routeId == 67 || routeId == 68) {
            this.router.navigate(['/Baseline-Survey/create']);
        }
        if (routeId == 73 || routeId == 74 || routeId == 75 || routeId == 76) {
            this.router.navigate(['/Baseline-Survey/view']);
        }
        if (routeId == 81 || routeId == 82 || routeId == 83 || routeId == 84) {
            this.router.navigate(['/children-register/create']);
        }
        if (routeId == 89 || routeId == 90 || routeId == 91 || routeId == 92) {
            this.router.navigate(['/central-register/view']);
        }
        if (routeId == 97 || routeId == 98 || routeId == 99 || routeId == 100) {
            this.router.navigate(['/muac-register/create']);
        }
        if (routeId == 113 || routeId == 114 || routeId == 115 || routeId == 116) {
            this.router.navigate(['/pem-register/create']);
        }
        if (routeId == 121 || routeId == 122 || routeId == 123 || routeId == 124) {
            this.router.navigate(['/lmr']);
        }
        if (routeId == 105 || routeId == 106 || routeId == 107 || routeId == 108) {
            this.router.navigate(['/acr']);
        }
        if (routeId == 129 || routeId == 130 || routeId == 131 || routeId == 132) {
            this.router.navigate(['/pw-register']);
        }
        if (routeId == 137 || routeId == 138 || routeId == 139 || routeId == 140) {
            this.router.navigate(['/daily-activity-register']);
        }
        if (routeId == 177 || routeId == 178 || routeId == 179 || routeId == 180) {
            this.router.navigate(['/ss-setup']);
        }
        if (routeId == 185 || routeId == 189) {
            this.router.navigate(['/user-hh-ss-remap']);
        }
        if (routeId == 186 || routeId == 187 || routeId == 188 || routeId == 189) {
            this.router.navigate(['/district-setup']);
        }
        if (routeId == 161 || routeId == 162 || routeId == 163 || routeId == 164) {
            this.router.navigate(['/report/geographicalReport']);
        }
        if (routeId == 195 || routeId == 196 || routeId == 197 || routeId == 198) {
            this.router.navigate(['/report/beneficiaryInfo']);
        }
        if (routeId == 194) {
            this.router.navigate(['/ss-unmap']);
        }
        if (routeId == 203) {
            this.router.navigate(['/ss-unmap-remap']);
        }
        if (routeId == 204) {
            this.router.navigate(['/user-hh-ss-remap']);
        }
        if (routeId == 205) {
            this.router.navigate(['/remap-user-hh']);
        }
        if (routeId == 206) {
            this.router.navigate(['/remap-user-ss']);
        }
        if (routeId == 207) {
            this.router.navigate(['/close-baseline']);
        }
    }
    ngAfterViewInit() {
        let a = document.querySelectorAll(".card-header");
        for (let i = 0; i < a.length; i++) {
            a[i].style.padding = 0;
        }
    }
    hideSideBar() {
        this.hideSideNav = !this.hideSideNav;
        this.hide = !this.hide;
        this.fullscreen = !this.fullscreen;
        this.valueChange.emit(this.fullscreen);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]])], decls: 6, vars: 6, consts: [[1, "sidebar", 3, "ngClass"], [1, "d-flex", "justify-content-end", 2, "margin-top", "5px", "margin-right", "10px", "z-index", "99999"], [2, "background-color", "#499", "border", "1.5px solid #499", "color", "#ffffff", "border-radius", "3px", "z-index", "999", 3, "click"], [4, "ngIf"], [1, "fas", "fa-angle-double-right", "fa-2x", 2, "margin", "0px auto"], [1, "fas", "fa-angle-double-left", "fa-2x", 2, "display", "flex", "margin", "0px auto"], [1, "logo", "d-flex", "justify-content-start", 2, "width", "110%", "margin", "-45px -3px 0px -4px"], ["src", "assets/bk_logo.png", "alt", "", 3, "routerLink"], [1, "matacco", 2, "margin-top", "-15px"], [3, "opened", "closed", "click", 4, "ngFor", "ngForOf"], [3, "opened", "closed", "click"], [2, "background-color", "#499"], [2, "color", "#ffffff"], [2, "margin", "8px 0px -10px 14px"], [4, "ngFor", "ngForOf"], [1, "subMenu", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_2_listener() { return ctx.hideSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_span_3_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_span_4_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_div_5_Template, 7, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.hideSideNav));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hide);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"]], styles: [".subMenu[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  padding: 5px 0px;\r\n}\r\n.subMenu[_ngcontent-%COMP%]:hover {\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViTWVudSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuLnN1Yk1lbnU6aG92ZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]]
            }]
    }], function () { return [{ type: src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"] }]; }, { valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/shared/services/validation.service */ "yjnX");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.service */ "XNvx");
/* harmony import */ var _modules_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/shared/confirmation-dialog/confirmation-dialog.service */ "aQtA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/shared/sidebar/sidebar.component */ "LmRu");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");










function AppComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-sidebar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AppComponent_nav_1_Template_app_sidebar_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.fullscreenMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_mat_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bandhan Health Program ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Welcome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_mat_toolbar_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r1.user.responseObject.userdetailDTO.userFirstName, " ", ctx_r1.user.responseObject.userdetailDTO.userMiddleName, " ", ctx_r1.user.responseObject.userdetailDTO.userLastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Role : ", ctx_r1.user.responseObject.RoledetailDTO.roleShortName, "");
} }
class AppComponent {
    constructor(validationService, accountService, confirmationDialogService) {
        this.validationService = validationService;
        this.accountService = accountService;
        this.confirmationDialogService = confirmationDialogService;
        this.title = 'bhp-web';
        this.accountService.user.subscribe((x) => { this.user = x; });
        // console.log(this.user, 'appComponent')
    }
    fullscreenMethod(data) {
        this.fullscreenData = data;
        this.validationService.val = this.fullscreenData;
    }
    logout() {
        this.confirmationDialogService.confirm('', 'Are you sure you want to log out ?')
            .then(() => this.accountService.logout())
            .catch(() => '');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 3, consts: [[1, "webaccess"], [4, "ngIf"], [1, "dashboard_part", 3, "ngClass"], ["style", "background-color: #ffff;margin-left: -330px; margin-bottom: 40px; width: 220%;padding-left: 28%;", 4, "ngIf"], [1, "main_content_inner"], [1, "notSupport"], [3, "valueChange"], [2, "background-color", "#ffff", "margin-left", "-330px", "margin-bottom", "40px", "width", "220%", "padding-left", "28%"], [2, "color", "#499", "font-size", "30px", "margin-left", "16px", "padding-right", "34%"], ["mat-button", "", "title", "My Profile", 1, "fas", "fa-user-circle", 2, "font-size", "40px", "color", "#8b4545", 3, "matMenuTriggerFor"], ["menu", "matMenu"], [1, "userMenu"], [1, "userMenu", 2, "background-color", "#499", "padding", "5px 25px"], [2, "color", "#ffff", "font-weight", "500", "font-size", "medium"], [1, "btn", "btn-danger", 2, "padding", "3px", 3, "click"], [1, "fa", "fa-power-off"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_nav_1_Template, 2, 0, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_mat_toolbar_3_Template, 17, 5, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "**Not Supported In This Browser Or Change Settings**");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.fullscreenData ? "footer_part_fullscreen main_content_fullscreen " : "main_content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _modules_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"]], styles: [".col-md-3[_ngcontent-%COMP%] {\r\n  max-width: 18%;\r\n}\r\n\r\n.col-md-9[_ngcontent-%COMP%] {\r\n  min-width: 81%;\r\n}\r\n\r\n.userMenu[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width:1350px) {\r\n  .webaccess[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .notSupport[_ngcontent-%COMP%]{\r\n    margin-top: 30px; \r\n    color: red;\r\n  }\r\n}\r\n\r\n@media (min-width:1350px) {\r\n  .notSupport[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZC0zIHtcclxuICBtYXgtd2lkdGg6IDE4JTtcclxufVxyXG5cclxuLmNvbC1tZC05IHtcclxuICBtaW4td2lkdGg6IDgxJTtcclxufVxyXG5cclxuLnVzZXJNZW51e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxMzUwcHgpIHtcclxuICAud2ViYWNjZXNze1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm5vdFN1cHBvcnR7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyBcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDoxMzUwcHgpIHtcclxuICAubm90U3VwcG9ydHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _modules_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"] }, { type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _modules_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }]; }, null); })();


/***/ }),

/***/ "V8h6":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/shared/confirmation-dialog/confirmation-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class ConfirmationDialogComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    decline() {
        this.activeModal.dismiss();
    }
    accept() {
        this.activeModal.close(true);
    }
    dismiss() {
        this.activeModal.dismiss();
    }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], inputs: { title: "title", message: "message", btnOkText: "btnOkText", btnCancelText: "btnCancelText" }, decls: 8, vars: 3, consts: [[1, "modal-body", 2, "text-decoration-line", "none"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-right", "5px", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_4_listener() { return ctx.decline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_6_listener() { return ctx.accept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnCancelText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnOkText);
    } }, styles: [".modal-footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-shrink: 0;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    padding: 0.75rem;\r\n    border-top: 1px solid #dee2e6;\r\n    border-bottom-right-radius: calc(0.3rem - 1px);\r\n    border-bottom-left-radius: calc(0.3rem - 1px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qiw4Q0FBOEM7SUFDOUMsNkNBQTZDO0FBQ2pEIiwiZmlsZSI6ImNvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogY2FsYygwLjNyZW0gLSAxcHgpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogY2FsYygwLjNyZW0gLSAxcHgpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmation-dialog',
                templateUrl: './confirmation-dialog.component.html',
                styleUrls: ['./confirmation-dialog.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnOkText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnCancelText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "VQQV":
/*!*************************************!*\
  !*** ./src/app/login/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "XNvx");




// import { AccountService } from '../_services';
class AuthGuard {
    constructor(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    canActivate(route, state) {
        const user = this.accountService.userValue;
        if (user) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "XNvx":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/shared/confirmation-dialog/confirmation-dialog.service */ "aQtA");









class LoginService {
    constructor(router, http, confirmationDialogService) {
        this.router = router;
        this.http = http;
        this.confirmationDialogService = confirmationDialogService;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    get userValue() {
        return this.userSubject.value;
    }
    login(username, password) {
        let requestBody = {
            deviceType: "W",
            loginId: username,
            password: password
        };
        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Private-Network": "true",
            "Access-Control-Allow-Origin": "true",
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](headerDict),
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/user/login`, requestBody, requestOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            var _a, _b, _c, _d;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            let dataDTO = {
                userId: (_b = (_a = user === null || user === void 0 ? void 0 : user.responseObject) === null || _a === void 0 ? void 0 : _a.userdetailDTO) === null || _b === void 0 ? void 0 : _b.loginId,
                userName: (_d = (_c = user === null || user === void 0 ? void 0 : user.responseObject) === null || _c === void 0 ? void 0 : _c.userdetailDTO) === null || _d === void 0 ? void 0 : _d.userId
            };
            localStorage.setItem('dataAccessDTO', JSON.stringify(dataDTO));
            this.userSubject.next(user);
            console.log("**********************", user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.clear();
        this.userSubject.next(null);
        this.router.navigate(['/']);
    }
    reset(password) {
        var _a;
        let requestBody = {
            userId: (_a = this.userFirstTime) === null || _a === void 0 ? void 0 : _a.responseObject.userdetailDTO.userId,
            newPassword: password
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}user/resetPassword`, requestBody);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_modules_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogService"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _modules_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/shared/shared.module */ "FpXt");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/core/core.module */ "6ZYd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _modules_core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"].forRoot(),
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__["Ng2SearchPipeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _modules_core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__["Ng2SearchPipeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _modules_core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"].forRoot(),
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__["Ng2SearchPipeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aQtA":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/confirmation-dialog/confirmation-dialog.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ConfirmationDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogService", function() { return ConfirmationDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation-dialog.component */ "V8h6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




class ConfirmationDialogService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    confirm(title, message, btnOkText = 'OK', btnCancelText = 'Cancel', dialogSize = 'sm') {
        const modalRef = this.modalService.open(_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"], { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    }
}
ConfirmationDialogService.ɵfac = function ConfirmationDialogService_Factory(t) { return new (t || ConfirmationDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
ConfirmationDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfirmationDialogService, factory: ConfirmationDialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "dBge":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/sidebar/sidebar.service.ts ***!
  \***********************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SidebarService {
    constructor(http) {
        this.http = http;
        this.listOfRegion = [];
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.subMenuList = [];
    }
    //HCO ** TL
    listOfBranchesOfUser(obj) {
        return this.http.post(`${this.baseURL}branch/getListOfBranchesOfUser`, obj);
    }
    //Other Higher level
    listOfRegionsOfUser(obj) {
        return this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, obj);
    }
}
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sItR":
/*!************************************************!*\
  !*** ./src/app/modules/core/core.component.ts ***!
  \************************************************/
/*! exports provided: CoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponent", function() { return CoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CoreComponent {
    constructor() { }
    ngOnInit() {
    }
}
CoreComponent.ɵfac = function CoreComponent_Factory(t) { return new (t || CoreComponent)(); };
CoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoreComponent, selectors: [["app-core"]], decls: 3, vars: 0, consts: [["src", "assets/core_image.jpg", "alt", "", 2, "width", "80vw", "height", "80vh"]], template: function CoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The goal of Bandhan Health Program is to create health awareness among mothers and adolescent girls, to ensure easy accessibility to health services available at the government and non government level in a sustainable level. In addition, Bandhan Health Program works to reduce health expenditure of poor families, as well as to develop health entrepreneurs/volunteers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-core',
                templateUrl: './core.component.html',
                styleUrls: ['./core.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/auth.guard */ "VQQV");





const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() | login-account-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("login-account-module")]).then(__webpack_require__.bind(null, /*! ./login/account.module */ "Oqnm")).then(m => m.AccountModule) },
    { path: 'donor', loadChildren: () => Promise.all(/*! import() | modules-donor-donor-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-donor-donor-module")]).then(__webpack_require__.bind(null, /*! ./modules/donor/donor.module */ "aevK")).then(m => m.DonorModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'user', loadChildren: () => Promise.all(/*! import() | modules-admin-user-admin-user-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("modules-admin-user-admin-user-module")]).then(__webpack_require__.bind(null, /*! ./modules/admin-user/admin-user.module */ "AZ41")).then(m => m.AdminUserModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'user-hh-ss-remap', loadChildren: () => Promise.all(/*! import() | modules-user-hh-ss-remap-user-hh-ss-remap-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("modules-user-hh-ss-remap-user-hh-ss-remap-module")]).then(__webpack_require__.bind(null, /*! ./modules/user-hh-ss-remap/user-hh-ss-remap.module */ "kLA5")).then(m => m.UserHhSsRemapModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'role-access', loadChildren: () => Promise.all(/*! import() | modules-role-access-role-access-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("modules-role-access-role-access-module")]).then(__webpack_require__.bind(null, /*! ./modules/role-access/role-access.module */ "dmim")).then(m => m.RoleAccessModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'vertical', loadChildren: () => Promise.all(/*! import() | modules-vertical-vertical-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-vertical-vertical-module")]).then(__webpack_require__.bind(null, /*! ./modules/vertical/vertical.module */ "gCWA")).then(m => m.VerticalModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'sub-vertical', loadChildren: () => Promise.all(/*! import() | modules-sub-vertical-sub-vertical-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-sub-vertical-sub-vertical-module")]).then(__webpack_require__.bind(null, /*! ./modules/sub-vertical/sub-vertical.module */ "3HSj")).then(m => m.SubVerticalModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'project', loadChildren: () => Promise.all(/*! import() | modules-project-project-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-project-project-module")]).then(__webpack_require__.bind(null, /*! ./modules/project/project.module */ "y3uc")).then(m => m.ProjectModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'mou', loadChildren: () => Promise.all(/*! import() | modules-mou-mou-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("common"), __webpack_require__.e("modules-mou-mou-module")]).then(__webpack_require__.bind(null, /*! ./modules/mou/mou.module */ "d3vJ")).then(m => m.MouModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'dynamic-form', loadChildren: () => __webpack_require__.e(/*! import() | modules-dynamic-form-dynamic-form-module */ "modules-dynamic-form-dynamic-form-module").then(__webpack_require__.bind(null, /*! ./modules/dynamic-form/dynamic-form.module */ "+pMV")).then(m => m.DynamicFormModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'region-branch', loadChildren: () => Promise.all(/*! import() | modules-region-branch-setup-region-branch-setup-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("modules-region-branch-setup-region-branch-setup-module")]).then(__webpack_require__.bind(null, /*! ./modules/region-branch-setup/region-branch-setup.module */ "F9UH")).then(m => m.RegionBranchSetupModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'block', loadChildren: () => Promise.all(/*! import() | modules-block-setup-block-setup-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("modules-block-setup-block-setup-module")]).then(__webpack_require__.bind(null, /*! ./modules/block-setup/block-setup.module */ "Xf4Q")).then(m => m.BlockSetupModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'gp', loadChildren: () => Promise.all(/*! import() | modules-gp-setup-gp-setup-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("modules-gp-setup-gp-setup-module")]).then(__webpack_require__.bind(null, /*! ./modules/gp-setup/gp-setup.module */ "tJb9")).then(m => m.GpSetupModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'Baseline-Survey', loadChildren: () => Promise.all(/*! import() | modules-baseline-survey-baseline-survey-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("default~modules-baseline-survey-baseline-survey-module~modules-central-register-central-register-module"), __webpack_require__.e("modules-baseline-survey-baseline-survey-module")]).then(__webpack_require__.bind(null, /*! ./modules/baseline-survey/baseline-survey.module */ "9Oov")).then(m => m.BaselineSurveyModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'central-register', loadChildren: () => Promise.all(/*! import() | modules-central-register-central-register-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("default~modules-baseline-survey-baseline-survey-module~modules-central-register-central-register-module"), __webpack_require__.e("modules-central-register-central-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/central-register/central-register.module */ "qvT1")).then(m => m.CentralRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'children-register', loadChildren: () => Promise.all(/*! import() | modules-children-register-children-register-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-children-register-children-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/children-register/children-register.module */ "43Nq")).then(m => m.ChildrenRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'family-info', loadChildren: () => __webpack_require__.e(/*! import() | modules-family-info-family-info-module */ "modules-family-info-family-info-module").then(__webpack_require__.bind(null, /*! ./modules/family-info/family-info.module */ "lKH6")).then(m => m.FamilyInfoModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'muac-register', loadChildren: () => Promise.all(/*! import() | modules-muac-register-muac-register-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-lactating-mother-register-lm~60dd5f73"), __webpack_require__.e("common"), __webpack_require__.e("modules-muac-register-muac-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/muac-register/muac-register.module */ "3y2c")).then(m => m.MuacRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'core', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/core/core.module */ "6ZYd")).then(m => m.CoreModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'pem-register', loadChildren: () => Promise.all(/*! import() | modules-pem-register-pem-register-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-pem-register-pem-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/pem-register/pem-register.module */ "8xsE")).then(m => m.PemRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'acr', loadChildren: () => Promise.all(/*! import() | modules-all-children-register-all-child-register-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-lactating-mother-register-lm~60dd5f73"), __webpack_require__.e("common"), __webpack_require__.e("modules-all-children-register-all-child-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/all-children-register/all-child-register.module */ "gFW8")).then(m => m.AllChildRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'lmr', loadChildren: () => Promise.all(/*! import() | modules-lactating-mother-register-lm-register-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-lactating-mother-register-lm~60dd5f73"), __webpack_require__.e("modules-lactating-mother-register-lm-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/lactating-mother-register/lm-register.module */ "D/kB")).then(m => m.LmRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'pw-register', loadChildren: () => Promise.all(/*! import() | modules-pregnant-women-register-pw-register-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-lactating-mother-register-lm~60dd5f73"), __webpack_require__.e("modules-pregnant-women-register-pw-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/pregnant-women-register/pw-register.module */ "TWdA")).then(m => m.PwRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'daily-activity-register', loadChildren: () => Promise.all(/*! import() | modules-daily-activity-register-daily-activity-register-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-daily-activity-register-daily-activity-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/daily-activity-register/daily-activity-register.module */ "v3t/")).then(m => m.DailyActivityRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'village-setup', loadChildren: () => Promise.all(/*! import() | modules-village-setup-village-setup-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-village-setup-village-setup-module")]).then(__webpack_require__.bind(null, /*! ./modules/village-setup/village-setup.module */ "HpoE")).then(m => m.VillageSetupModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ss-setup', loadChildren: () => Promise.all(/*! import() | modules-ss-setup-ss-setup-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-ss-setup-ss-setup-module")]).then(__webpack_require__.bind(null, /*! ./modules/ss-setup/ss-setup.module */ "De8t")).then(m => m.SsSetupModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'privacy_policy', loadChildren: () => __webpack_require__.e(/*! import() | modules-shared-privacy-policy-privacy-policy-module */ "modules-shared-privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null, /*! ./modules/shared/privacy-policy/privacy-policy.module */ "Odxu")).then(m => m.PrivacyPolicyModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'branch-villageMap', loadChildren: () => Promise.all(/*! import() | modules-branch-village-map-branch-village-map-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-branch-village-map-branch-village-map-module")]).then(__webpack_require__.bind(null, /*! ./modules/branch-village-map/branch-village-map.module */ "BZvT")).then(m => m.BranchVillageMapModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'district-setup', loadChildren: () => Promise.all(/*! import() | modules-district-setup-district-setup-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-district-setup-district-setup-module")]).then(__webpack_require__.bind(null, /*! ./modules/district-setup/district-setup.module */ "UC6/")).then(m => m.DistrictSetupModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ss-unmap', loadChildren: () => Promise.all(/*! import() | modules-ss-unmap-ss-unmap-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-ss-unmap-ss-unmap-module")]).then(__webpack_require__.bind(null, /*! ./modules/ss-unmap/ss-unmap.module */ "BTnk")).then(m => m.SsUnmapModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ss-unmap-remap', loadChildren: () => Promise.all(/*! import() | modules-ss-unmap-remap-ss-unmap-remap-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-ss-unmap-remap-ss-unmap-remap-module")]).then(__webpack_require__.bind(null, /*! ./modules/ss-unmap-remap/ss-unmap-remap.module */ "OBPB")).then(m => m.SsUnmapRemapModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'report', loadChildren: () => Promise.all(/*! import() | modules-reports-report-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("modules-reports-report-module")]).then(__webpack_require__.bind(null, /*! ./modules/reports/report.module */ "P+a1")).then(m => m.ReportModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'remap-user-hh', loadChildren: () => Promise.all(/*! import() | modules-remap-user-hh-remap-user-hh-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("modules-remap-user-hh-remap-user-hh-module")]).then(__webpack_require__.bind(null, /*! ./modules/remap-user-hh/remap-user-hh.module */ "jjFV")).then(m => m.RemapUserHhModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'remap-user-ss', loadChildren: () => Promise.all(/*! import() | modules-remap-user-ss-remap-user-ss-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("modules-remap-user-ss-remap-user-ss-module")]).then(__webpack_require__.bind(null, /*! ./modules/remap-user-ss/remap-user-ss.module */ "5riV")).then(m => m.RemapUserSsModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'close-baseline', loadChildren: () => Promise.all(/*! import() | modules-close-baseline-close-baseline-module */[__webpack_require__.e("default~login-account-module~modules-admin-user-admin-user-module~modules-all-children-register-all-~d1aa2282"), __webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-close-baseline-close-baseline-module")]).then(__webpack_require__.bind(null, /*! ./modules/close-baseline/close-baseline.module */ "iWkA")).then(m => m.CloseBaselineModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wWDU":
/*!***************************************************************!*\
  !*** ./src/app/modules/core/dashboard/dashboard.component.ts ***!
  \***************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 0, vars: 0, template: function DashboardComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yjnX":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/services/validation.service.ts ***!
  \***************************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ValidationService {
    constructor() { }
    nameValidation(event) {
        const charCode = event.keyCode;
        if (charCode == 32 ||
            charCode == 45 ||
            charCode == 44 ||
            (charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122) ||
            charCode == 39 ||
            charCode == 46) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    onlyChars(event) {
        const charCode = event.keyCode;
        if ((charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    charnum(event) {
        const charCode = event.keyCode;
        if ((charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122) ||
            (charCode >= 48 && charCode <= 57)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    allCaps(event) {
        event.target.value = event.target.value.toUpperCase();
    }
    firstCaps(string) {
        let stringArr = string.split(' ');
        stringArr = stringArr.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
        return stringArr.join(' ');
    }
    onlyAlphabets(event) {
        const charCode = event.keyCode;
        if ((charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    onlyInteger(event) {
        const charCode = event.keyCode;
        if (charCode >= 48 && charCode <= 57) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    onlyIntegerAndAlphabet(event) {
        const charCode = event.keyCode;
        if ((charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    onlyIntegerAndDecimal(event) {
        const charCode = event.keyCode;
        if ((charCode >= 48 && charCode <= 57) || charCode == 46) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    onlyAlphabetsAndSpace(event) {
        const charCode = event.keyCode;
        if ((charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122) || charCode == 32) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    titleCase(event) {
        if (event.target.value) {
            event.target.value = this.firstCaps(event.target.value);
        }
    }
    onlyIntegerAndSpace(event) {
        const charCode = event.keyCode;
        if ((charCode >= 48 && charCode <= 57) || charCode == 32) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    onlyIntegerAndDot(event) {
        const charCode = event.keyCode;
        if ((charCode >= 48 && charCode <= 57) || charCode == 46) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    camelize(str) {
        let value = str.toLowerCase();
        return value.replace(/^(\w)|\s(\w)/g, function (match, index) {
            if (+match === 0)
                return " ";
            if (index === 0)
                return match.toUpperCase();
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }
}
ValidationService.ɵfac = function ValidationService_Factory(t) { return new (t || ValidationService)(); };
ValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidationService, factory: ValidationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map