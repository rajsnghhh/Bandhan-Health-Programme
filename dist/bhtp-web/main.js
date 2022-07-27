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
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/loader/loader.module */ "iFG+");








class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _core_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_core_component__WEBPACK_IMPORTED_MODULE_3__["CoreComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _core_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_core_component__WEBPACK_IMPORTED_MODULE_3__["CoreComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _core_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"]
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
    // apiUrl: 'http://192.168.149.229:6180/bhp/api/v1/'
    //New Development Server
    // apiUrl: 'http://192.168.149.67:6180/bhp/api/v1/'
    // Test
    // apiUrl: 'http://192.168.149.229:6181/bhp/api/v1/test/'
    // New Test Server
    // apiUrl: 'http://192.168.149.71:6181/bhp/api/v1/test/'
    // Training
    // apiUrl: 'http://bhp-training.bandhan-konnagar.org:6184/bhp/api/v1/training/'
    // Staging
    // apiUrl: 'http://192.168.149.221:6182/bhp/api/v1/staging/'
    // Production
    // apiUrl: 'http://192.168.149.221:6183/bhp/api/v1/prod/'
    // apiUrl: 'http://122.186.245.217:6183/bhp/api/v1/prod/'
    // New Production Server
    apiUrl: 'http://bhp.bandhan-konnagar.org:6183/bhp/api/v1/prod/'
    // Soumen Machine
    // apiUrl: 'http://192.168.153.91:6180/bhp/api/v1/'
    // Chayan Machine
    // apiUrl: 'http://localhost:6180/bhp/api/v1/'
};
/*
 * For easier debugging in development mode, you can import the following filel
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

/***/ "G/xV":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/loader/loader.component.ts ***!
  \***********************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoaderComponent {
    // abc: any;
    // count: any;
    constructor() { }
    ngOnInit() {
        // this.setIntrvl();
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 5, vars: 0, consts: [[1, "overlay"], [1, "LoaderBalls"], [1, "LoaderBalls__item"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(74, 74, 74, 0.8);\r\n  z-index: 9999;\r\n}\r\n.text-white[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  margin-left: 100px;\r\n}\r\n.LoaderBalls[_ngcontent-%COMP%] {\r\n  width: 90px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 20%;\r\n  margin-left: 50%;\r\n}\r\n.LoaderBalls__item[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background: rgb(38, 219, 219);\r\n}\r\n.LoaderBalls__item[_ngcontent-%COMP%]:nth-child(1) {\r\n  animation: bouncing 0.4s alternate infinite\r\n    cubic-bezier(0.6, 0.05, 0.15, 0.95);\r\n}\r\n.LoaderBalls__item[_ngcontent-%COMP%]:nth-child(2) {\r\n  animation: bouncing 0.4s 0.1s alternate infinite\r\n    cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;\r\n}\r\n.LoaderBalls__item[_ngcontent-%COMP%]:nth-child(3) {\r\n  animation: bouncing 0.4s 0.2s alternate infinite\r\n    cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;\r\n}\r\n@keyframes bouncing {\r\n  0% {\r\n    transform: translate3d(0, 10px, 0) scale(1.2, 0.85);\r\n  }\r\n  100% {\r\n    transform: translate3d(0, -20px, 0) scale(0.9, 1.1);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsdUNBQXVDO0VBQ3ZDLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRTt1Q0FDcUM7QUFDdkM7QUFDQTtFQUNFO2lEQUMrQztBQUNqRDtBQUNBO0VBQ0U7aURBQytDO0FBQ2pEO0FBRUE7RUFDRTtJQUNFLG1EQUFtRDtFQUNyRDtFQUNBO0lBQ0UsbURBQW1EO0VBQ3JEO0FBQ0YiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCA3NCwgNzQsIDAuOCk7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG4udGV4dC13aGl0ZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbi5Mb2FkZXJCYWxscyB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG4uTG9hZGVyQmFsbHNfX2l0ZW0ge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDM4LCAyMTksIDIxOSk7XHJcbn1cclxuLkxvYWRlckJhbGxzX19pdGVtOm50aC1jaGlsZCgxKSB7XHJcbiAgYW5pbWF0aW9uOiBib3VuY2luZyAwLjRzIGFsdGVybmF0ZSBpbmZpbml0ZVxyXG4gICAgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNSwgMC4xNSwgMC45NSk7XHJcbn1cclxuLkxvYWRlckJhbGxzX19pdGVtOm50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uOiBib3VuY2luZyAwLjRzIDAuMXMgYWx0ZXJuYXRlIGluZmluaXRlXHJcbiAgICBjdWJpYy1iZXppZXIoMC42LCAwLjA1LCAwLjE1LCAwLjk1KSBiYWNrd2FyZHM7XHJcbn1cclxuLkxvYWRlckJhbGxzX19pdGVtOm50aC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uOiBib3VuY2luZyAwLjRzIDAuMnMgYWx0ZXJuYXRlIGluZmluaXRlXHJcbiAgICBjdWJpYy1iZXppZXIoMC42LCAwLjA1LCAwLjE1LCAwLjk1KSBiYWNrd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgc2NhbGUoMS4yLCAwLjg1KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSBzY2FsZSgwLjksIDEuMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/http/http.service */ "YwHQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar.service */ "dBge");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");









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
    constructor(loginService, httpService, router, sidebarService) {
        this.loginService = loginService;
        this.httpService = httpService;
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
        });
        this.httpService.setDataAccessDto();
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
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"]], styles: [".subMenu[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  padding: 5px 0px;\r\n}\r\n.subMenu[_ngcontent-%COMP%]:hover {\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViTWVudSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuLnN1Yk1lbnU6aG92ZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]]
            }]
    }], function () { return [{ type: src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"] }]; }, { valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
    VillageWiseSSList(obj) {
        return this.http.post(`${this.baseURL}swasthyasahayika/getActiveSwasthyaSahayikaListOfAVillage`, obj);
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
/* harmony import */ var _modules_baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/baseline-survey/baseline-survey.service */ "SMi9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/shared/sidebar/sidebar.component */ "LmRu");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");











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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", ctx_r1.user.responseObject.userdetailDTO.userFirstName, " ", ctx_r1.user.responseObject.userdetailDTO.userMiddleName, " ", ctx_r1.user.responseObject.userdetailDTO.userLastName, " (", ctx_r1.user.responseObject.RoledetailDTO.roleShortName, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Login ID: ", ctx_r1.user.responseObject.userdetailDTO.loginId, " ");
} }
class AppComponent {
    constructor(validationService, accountService, confirmationDialogService, baselineService) {
        this.validationService = validationService;
        this.accountService = accountService;
        this.confirmationDialogService = confirmationDialogService;
        this.baselineService = baselineService;
        this.title = 'bhp-web';
        this.accountService.user.subscribe((x) => { this.user = x; });
        console.log(this.user, 'appComponent');
    }
    fullscreenMethod(data) {
        this.fullscreenData = data;
        this.validationService.val = this.fullscreenData;
    }
    logout() {
        this.confirmationDialogService.confirm('', 'Are you sure you want to log out ?')
            .then(() => {
            this.accountService.logout();
            this.baselineService.timeToTentativeEndDate = '';
        })
            .catch(() => '');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_4__["BaselineSurveyService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 3, consts: [[1, "webaccess"], [4, "ngIf"], [1, "dashboard_part", 3, "ngClass"], ["style", "background-color: #ffff;margin-left: -330px; margin-bottom: 40px; width: 220%;padding-left: 28%;", 4, "ngIf"], [1, "main_content_inner"], [1, "notSupport"], [3, "valueChange"], [2, "background-color", "#ffff", "margin-left", "-330px", "margin-bottom", "40px", "width", "220%", "padding-left", "28%"], [2, "color", "#499", "font-size", "30px", "margin-left", "16px", "padding-right", "34%"], ["mat-button", "", "title", "My Profile", 1, "fas", "fa-user-circle", 2, "font-size", "40px", "color", "#8b4545", 3, "matMenuTriggerFor"], ["menu", "matMenu"], [1, "userMenu"], [1, "userMenu", 2, "background-color", "#499", "padding", "5px 25px"], [2, "color", "#ffff", "font-weight", "500", "font-size", "medium"], [1, "btn", "btn-danger", 2, "padding", "3px", 3, "click"], [1, "fa", "fa-power-off"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_nav_1_Template, 2, 0, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_mat_toolbar_3_Template, 17, 6, "mat-toolbar", 3);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _modules_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"]], styles: [".col-md-3[_ngcontent-%COMP%] {\r\n  max-width: 18%;\r\n}\r\n\r\n.col-md-9[_ngcontent-%COMP%] {\r\n  min-width: 81%;\r\n}\r\n\r\n.userMenu[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width:450px) {\r\n  .webaccess[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .notSupport[_ngcontent-%COMP%]{\r\n    margin-top: 30px; \r\n    color: red;\r\n  }\r\n}\r\n\r\n@media (min-width:450px) {\r\n  .notSupport[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZC0zIHtcclxuICBtYXgtd2lkdGg6IDE4JTtcclxufVxyXG5cclxuLmNvbC1tZC05IHtcclxuICBtaW4td2lkdGg6IDgxJTtcclxufVxyXG5cclxuLnVzZXJNZW51e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo0NTBweCkge1xyXG4gIC53ZWJhY2Nlc3N7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubm90U3VwcG9ydHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7IFxyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjQ1MHB4KSB7XHJcbiAgLm5vdFN1cHBvcnR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _modules_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"] }, { type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _modules_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _modules_baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_4__["BaselineSurveyService"] }]; }, null); })();


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
/* harmony import */ var _modules_core_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/core/http/http.service */ "YwHQ");
/* harmony import */ var _modules_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/shared/confirmation-dialog/confirmation-dialog.service */ "aQtA");










class LoginService {
    constructor(router, httpService, http, confirmationDialogService) {
        this.router = router;
        this.httpService = httpService;
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
                userId: (_b = (_a = user === null || user === void 0 ? void 0 : user.responseObject) === null || _a === void 0 ? void 0 : _a.userdetailDTO) === null || _b === void 0 ? void 0 : _b.userId,
                userName: (_d = (_c = user === null || user === void 0 ? void 0 : user.responseObject) === null || _c === void 0 ? void 0 : _c.userdetailDTO) === null || _d === void 0 ? void 0 : _d.loginId
            };
            localStorage.setItem('dataAccessDTO', JSON.stringify(dataDTO));
            this.httpService.setDataAccessDto();
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
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_modules_core_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_modules_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogService"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _modules_core_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _modules_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogService"] }]; }, null); })();


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
    // dataAccessDTO = {
    //   userId: this.sidebarService.userId,
    //   userName: this.sidebarService.loginId,
    // }
    constructor(http, sidebarService) {
        this.http = http;
        this.sidebarService = sidebarService;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Basic dXNlcjE6c2VjcmV0MQ=='
        });
    }
    setDataAccessDto() {
        let data = JSON.parse(localStorage.getItem('dataAccessDTO'));
        this.dataAccessDTO = Object.assign({}, data);
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
        this.villagesOfBranch = [];
    }
    checkRoledetailDTO() {
        var _a, _b, _c, _d, _e, _f;
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let user = JSON.parse(localStorage.getItem('user'));
        let req = {
            dataAccessDTO: {
                userId: dataAccessDTO.userId,
                userName: dataAccessDTO.userName,
            }
        };
        if (((_c = (_b = (_a = user === null || user === void 0 ? void 0 : user.responseObject) === null || _a === void 0 ? void 0 : _a.RoledetailDTO) === null || _b === void 0 ? void 0 : _b.roleShortName) === null || _c === void 0 ? void 0 : _c.indexOf('HCO')) != -1 ||
            ((_f = (_e = (_d = user === null || user === void 0 ? void 0 : user.responseObject) === null || _d === void 0 ? void 0 : _d.RoledetailDTO) === null || _e === void 0 ? void 0 : _e.roleShortName) === null || _f === void 0 ? void 0 : _f.indexOf('TL')) != -1) {
            return new Promise((resolve, reject) => {
                this.http.post(`${this.baseURL}branch/getListOfBranchesOfUser`, req).subscribe((res) => {
                    var _a, _b, _c, _d;
                    this.branchId = (_a = res === null || res === void 0 ? void 0 : res.responseObject[0]) === null || _a === void 0 ? void 0 : _a.branchId;
                    this.branchName = (_b = res === null || res === void 0 ? void 0 : res.responseObject[0]) === null || _b === void 0 ? void 0 : _b.branchName;
                    this.donorName = (_d = (_c = res === null || res === void 0 ? void 0 : res.responseObject[0]) === null || _c === void 0 ? void 0 : _c.donorMasterDto) === null || _d === void 0 ? void 0 : _d.donorName;
                    resolve({
                        regionBranchHide: false,
                        branchId: this.branchId,
                        dataAccessDTO: req.dataAccessDTO
                    });
                });
            });
        }
        else {
            return new Promise((resolve, reject) => {
                this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, req).subscribe((res) => {
                    this.listOfRegion = res.responseObject;
                    this.regionBranchHide = true;
                    resolve({
                        region: this.listOfRegion,
                        regionBranchHide: this.regionBranchHide
                    });
                });
            });
        }
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

/***/ "iFG+":
/*!********************************************************!*\
  !*** ./src/app/modules/shared/loader/loader.module.ts ***!
  \********************************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.component */ "G/xV");





class LoaderModule {
}
LoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoaderModule });
LoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoaderModule_Factory(t) { return new (t || LoaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoaderModule, { declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]], exports: [_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
                ],
                exports: [_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http/http.service */ "YwHQ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







const _c0 = ["mychart1"];
const _c1 = ["mychart2"];
class CoreComponent {
    constructor(httpService, dialog, http, toaster) {
        this.httpService = httpService;
        this.dialog = dialog;
        this.http = http;
        this.toaster = toaster;
        this.loader = true;
        this.Dto = {
            dataAccessDTO: this.httpService.dataAccessDTO,
        };
    }
    ngOnInit() {
        // this.loader = true;
        this.http.post(`${this.httpService.baseURL}report/getGeographicalOutreach`, this.Dto).subscribe((res) => {
            var _a;
            let donorName = [];
            let block = [];
            let branch = [];
            let district = [];
            let projectMasterId = [];
            let region = [];
            let stateName = [];
            let villageLocality = [];
            (_a = res.responseObject) === null || _a === void 0 ? void 0 : _a.geographicalOutreachList.map(i => {
                donorName.push(i.donorName);
                block.push(i.block);
                branch.push(i.branch);
                district.push(i.district);
                projectMasterId.push(i.projectMasterId);
                region += i.regionId + ',';
                stateName += i.stateName + ',';
                villageLocality.push(i.villageLocality);
            });
            let arr = new Array();
            arr = stateName.slice(0, (stateName.length - 1)).split(",");
            let removeNullState = arr.filter((i) => i != 'null');
            let arr1 = new Array();
            arr1 = region.slice(0, (region.length - 1)).split(",");
            let removeNullRegion = arr1.filter((i) => i != 'null');
            this.totalDonor = [...new Set(donorName)].length;
            this.totalBlock = block.reduce((a, b) => a + b, 0);
            this.totalBranch = branch.reduce((a, b) => a + b, 0);
            this.totalDistrict = district.reduce((a, b) => a + b, 0);
            this.totalProjectMasterId = [...new Set(projectMasterId)].length;
            this.totalRegion = [...new Set(removeNullRegion)].length;
            this.totalStateName = [...new Set(removeNullState)].length;
            this.totalVillageLocality = villageLocality.reduce((a, b) => a + b, 0);
        }, error => {
        });
    }
    ngAfterViewInit() {
        let familyInfoGraphData = JSON.parse(localStorage.getItem('familyChildInfoGraphData'));
        if (familyInfoGraphData == null || familyInfoGraphData.length == 0) {
            this.getChartData();
        }
        else {
            this.doughnutChart(familyInfoGraphData);
            this.barChart(familyInfoGraphData);
            this.loader = true;
        }
    }
    getChartData() {
        this.loader = false;
        this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoProject`, this.Dto).subscribe((res) => {
            let totalFamilyCount = res.responseObject.projectWiseBeneficiaryList.reduce((sum, current) => sum + current.totalFamilyCount, 0);
            let totalPemCumulative = res.responseObject.projectWiseBeneficiaryList.reduce((sum, current) => sum + current.pemCumulative, 0);
            let totalLmCumulative = res.responseObject.projectWiseBeneficiaryList.reduce((sum, current) => sum + current.lmCumulative, 0);
            let totalPwCumulative = res.responseObject.projectWiseBeneficiaryList.reduce((sum, current) => sum + current.pwCumulative, 0);
            let totalBelow5Cumulative = res.responseObject.projectWiseBeneficiaryList.reduce((sum, current) => sum + current.below5Cumulative, 0);
            let totalBelow2Cumulative = res.responseObject.projectWiseBeneficiaryList.reduce((sum, current) => sum + current.below2Cumulative, 0);
            let totalChildPemCumulative = res.responseObject.projectWiseBeneficiaryList.reduce((sum, current) => sum + current.childPemCumulative, 0);
            let totalGirl14To18Cumulative = res.responseObject.projectWiseBeneficiaryList.reduce((sum, current) => sum + current.girl14To18Cumulative, 0);
            let otherFamilyCount = totalFamilyCount - (totalPemCumulative + totalLmCumulative + totalPwCumulative);
            this.percentageFamilyCount = ((otherFamilyCount / totalFamilyCount) * 100).toFixed(2);
            this.percentagePemCumulative = ((totalPemCumulative / totalFamilyCount) * 100).toFixed(2);
            this.percentageLmCumulative = ((totalLmCumulative / totalFamilyCount) * 100).toFixed(2);
            this.percentagePwCumulative = ((totalPwCumulative / totalFamilyCount) * 100).toFixed(2);
            let familyInfoGraphData = [[this.percentageFamilyCount, this.percentagePemCumulative, this.percentageLmCumulative, this.percentagePwCumulative],
                [otherFamilyCount, totalPemCumulative, totalLmCumulative, totalPwCumulative],
                [totalBelow5Cumulative, totalBelow2Cumulative, totalChildPemCumulative, totalGirl14To18Cumulative]];
            localStorage.setItem('familyChildInfoGraphData', JSON.stringify(familyInfoGraphData));
            this.doughnutChart(familyInfoGraphData);
            this.barChart(familyInfoGraphData);
            this.loader = true;
        });
    }
    doughnutChart(value) {
        this.canvas1 = this.mychart1.nativeElement;
        this.ctx1 = this.canvas1.getContext('2d');
        let label = value[0];
        let a = ['Total Family', 'PEM', 'LM', 'PW'];
        let labels = [];
        a.forEach(i => {
            label.forEach(x => {
                if (a.indexOf(i) == label.indexOf(x))
                    labels.push(i + ' ' + x + '%');
            });
        });
        const doughnutdata = {
            labels: labels,
            datasets: [{
                    data: value[1],
                    backgroundColor: [
                        'rgb(75, 192, 192)',
                        'rgb(245, 57, 97)',
                        'rgb(20, 154, 245)',
                        'rgb(255, 189, 32)',
                    ],
                    hoverOffset: 4
                }]
        };
        new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"](this.ctx1, {
            type: 'doughnut',
            data: doughnutdata,
            options: {
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            let label1 = a[tooltipItem.index];
                            return label1 + ' : ' + data.datasets[0].data[tooltipItem.index];
                        }
                    }
                },
            }
        });
    }
    barChart(value) {
        this.canvas2 = this.mychart2.nativeElement;
        this.ctx2 = this.canvas2.getContext('2d');
        const bardata = {
            labels: [''],
            datasets: [{
                    label: `Child Below 5 Years (${value[2][0]})`,
                    yAxisID: '5c',
                    data: [value[2][0]],
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 2
                }, {
                    label: `Child Below 2 Years (${value[2][1]})`,
                    data: [value[2][1]],
                    backgroundColor: "rgba(255, 159, 64, 0.5)",
                    borderColor: 'rgb(255, 159, 64)',
                    borderWidth: 2
                }, {
                    label: `Adolescent Girls (${value[2][3]})`,
                    data: [value[2][3]],
                    backgroundColor: "rgba(54, 162, 235, 0.5)",
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 2
                }, {
                    label: `Child PEM (${value[2][2]})`,
                    yAxisID: 'cp',
                    data: [value[2][2]],
                    backgroundColor: "rgba(255, 205, 86, 0.6)",
                    borderColor: 'rgb(255, 205, 86)',
                    borderWidth: 2,
                    categoryPercentage: 1,
                    barPercentage: 0.7
                }
            ]
        };
        new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"](this.ctx2, {
            type: 'bar',
            data: bardata,
            options: {
                scales: {
                    yAxes: [
                        {
                            id: '5c',
                            type: 'linear',
                            position: 'left',
                            ticks: {
                                min: 0,
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Child Count.'
                            }
                        }, {
                            id: 'cp',
                            type: 'linear',
                            position: 'right',
                            ticks: {
                                min: 0,
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Child PEM Count.'
                            }
                        }
                    ]
                }
            }
        });
    }
    download(chartId, documentName) {
        const canvas = document.getElementById(chartId);
        this.fillCanvasBackgroundWithColor(canvas, 'white');
        canvas.toBlob(function (blob) {
            const url = URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = documentName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 'image/jpeg', 1);
    }
    fillCanvasBackgroundWithColor(canvas, color) {
        const context = canvas.getContext('2d');
        context.save();
        context.globalCompositeOperation = 'destination-over';
        context.fillStyle = color;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.restore();
    }
    refreshChart() {
        localStorage.removeItem('familyChildInfoGraphData');
        this.getChartData();
    }
}
CoreComponent.ɵfac = function CoreComponent_Factory(t) { return new (t || CoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
CoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoreComponent, selectors: [["app-core"]], viewQuery: function CoreComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mychart1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mychart2 = _t.first);
    } }, decls: 96, vars: 10, consts: [[1, "example-card"], [1, "mat-card"], [1, "example-header-image"], [1, "icons"], ["src", "assets/Donate-1.svg", "alt", "Poop Logo", 2, "width", "35px"], [1, "fa", "fa-file-text-o", "fa-2x"], [1, "fas", "fa-code-branch", "fa-2x"], [1, "fa", "fa-map-marker", "fa-2x"], [1, "fa", "fa-university", "fa-2x"], [1, "fa", "fa-building", "fa-2x"], [1, "fa", "fa-cubes", "fa-2x"], ["src", "assets/village.svg", "alt", "Poop Logo", 2, "width", "35px"], [2, "display", "flex", "margin", "10px 30px 5px 10px"], [1, "chartbox"], [2, "margin", "-125px 34%", "margin-top", "20%", 3, "hidden"], ["role", "status", 1, "spinner-grow", "text-danger"], [1, "sr-only"], ["role", "status", 1, "spinner-grow", "text-warning"], ["role", "status", 1, "spinner-grow", "text-info"], ["id", "myChart1"], ["mychart1", ""], [2, "margin", "8px 35%", "color", "black", "font-weight", "400", "font-size", "16px"], [1, "downloadrefreshicon"], ["title", "Download Chart", 1, "fa", "fa-download", "fa-lg", 3, "click"], ["title", "Refresh Chart", 1, "fa", "fa-refresh", "fa-lg", 3, "click"], ["id", "myChart2"], ["mychart2", ""]], template: function CoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "canvas", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Family Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoreComponent_Template_i_click_71_listener() { return ctx.download("myChart1", "Family Information Chart"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoreComponent_Template_i_click_73_listener() { return ctx.refreshChart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "canvas", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Child Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoreComponent_Template_i_click_93_listener() { return ctx.download("myChart2", "Child Information Chart"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoreComponent_Template_i_click_95_listener() { return ctx.refreshChart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Donor : ", ctx.totalDonor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Project : ", ctx.totalProjectMasterId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Branch : ", ctx.totalBranch, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Region : ", ctx.totalRegion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("State : ", ctx.totalStateName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("District : ", ctx.totalDistrict, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Block : ", ctx.totalBlock, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Village : ", ctx.totalVillageLocality, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loader);
    } }, styles: [".example-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n  }\r\n\r\n  .example-header-image[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   width: 250px;\r\n   margin-top: 7px;\r\n  }\r\n\r\n  .icons[_ngcontent-%COMP%]{\r\n    margin: 0 10%;\r\n}\r\n\r\n  .mat-card[_ngcontent-%COMP%] {\r\n    padding: 10px 0px 0px 0px;\r\n    box-shadow: rgba(68, 153, 153, 0.35) 0px 5px 15px;\r\n    width: 20%;\r\n    height: 70px;\r\n    border-radius: 5px;\r\n    border: 1px solid #499;\r\n}\r\n\r\n  .mat-card[_ngcontent-%COMP%]:hover{\r\n  box-shadow: rgba(68, 153, 153, 0.3) 0px 12px 10px, rgba(68, 153, 153, 0.22) 0px 1px 0px;\r\n}\r\n\r\n  h4[_ngcontent-%COMP%] {\r\n  font: 600 15px/37px Roboto,\"Helvetica Neue\", sans-serif;\r\n  letter-spacing: normal;\r\n  margin: 0;\r\n}\r\n\r\n  .downloadrefreshicon[_ngcontent-%COMP%]{\r\n  padding-right: 30px;\r\n  margin-top: -25px;\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n}\r\n\r\n  .chartbox[_ngcontent-%COMP%]{\r\n  width:50%;\r\n}\r\n\r\n  .chartbox[_ngcontent-%COMP%]:hover{\r\n  padding: 5px ;\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 12px 10px, rgba(0, 0, 0, 0.22) 0px 1px 0px;\r\n  transition: 0.4s ease-in-out !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9COztFQUVBO0dBQ0MsYUFBYTtHQUNiLFlBQVk7R0FDWixlQUFlO0VBQ2hCOztFQUNBO0lBQ0UsYUFBYTtBQUNqQjs7RUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpREFBaUQ7SUFDakQsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztFQUNBO0VBQ0UsdUZBQXVGO0FBQ3pGOztFQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0VBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0VBRUE7RUFDRSxTQUFTO0FBQ1g7O0VBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiw2RUFBNkU7RUFDN0UsdUNBQXVDO0FBQ3pDIiwiZmlsZSI6ImNvcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIHdpZHRoOiAyNTBweDtcclxuICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIH1cclxuICAuaWNvbnN7XHJcbiAgICBtYXJnaW46IDAgMTAlO1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoNjgsIDE1MywgMTUzLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ5OTtcclxufVxyXG4ubWF0LWNhcmQ6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogcmdiYSg2OCwgMTUzLCAxNTMsIDAuMykgMHB4IDEycHggMTBweCwgcmdiYSg2OCwgMTUzLCAxNTMsIDAuMjIpIDBweCAxcHggMHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udDogNjAwIDE1cHgvMzdweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZG93bmxvYWRyZWZyZXNoaWNvbntcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcblxyXG4uY2hhcnRib3h7XHJcbiAgd2lkdGg6NTAlO1xyXG59XHJcblxyXG4uY2hhcnRib3g6aG92ZXJ7XHJcbiAgcGFkZGluZzogNXB4IDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxMnB4IDEwcHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDFweCAwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-core',
                templateUrl: './core.component.html',
                styleUrls: ['./core.component.css']
            }]
    }], function () { return [{ type: _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, { mychart1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mychart1']
        }], mychart2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mychart2']
        }] }); })();


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
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | login-account-module */ "login-account-module").then(__webpack_require__.bind(null, /*! ./login/account.module */ "Oqnm")).then(m => m.AccountModule) },
    { path: 'donor', loadChildren: () => Promise.all(/*! import() | modules-donor-donor-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-donor-donor-module")]).then(__webpack_require__.bind(null, /*! ./modules/donor/donor.module */ "aevK")).then(m => m.DonorModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'user', loadChildren: () => __webpack_require__.e(/*! import() | modules-admin-user-admin-user-module */ "modules-admin-user-admin-user-module").then(__webpack_require__.bind(null, /*! ./modules/admin-user/admin-user.module */ "AZ41")).then(m => m.AdminUserModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'user-hh-ss-remap', loadChildren: () => __webpack_require__.e(/*! import() | modules-user-hh-ss-remap-user-hh-ss-remap-module */ "modules-user-hh-ss-remap-user-hh-ss-remap-module").then(__webpack_require__.bind(null, /*! ./modules/user-hh-ss-remap/user-hh-ss-remap.module */ "kLA5")).then(m => m.UserHhSsRemapModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'role-access', loadChildren: () => __webpack_require__.e(/*! import() | modules-role-access-role-access-module */ "modules-role-access-role-access-module").then(__webpack_require__.bind(null, /*! ./modules/role-access/role-access.module */ "dmim")).then(m => m.RoleAccessModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'vertical', loadChildren: () => Promise.all(/*! import() | modules-vertical-vertical-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-vertical-vertical-module")]).then(__webpack_require__.bind(null, /*! ./modules/vertical/vertical.module */ "gCWA")).then(m => m.VerticalModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'sub-vertical', loadChildren: () => Promise.all(/*! import() | modules-sub-vertical-sub-vertical-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-sub-vertical-sub-vertical-module")]).then(__webpack_require__.bind(null, /*! ./modules/sub-vertical/sub-vertical.module */ "3HSj")).then(m => m.SubVerticalModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'project', loadChildren: () => Promise.all(/*! import() | modules-project-project-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-project-project-module")]).then(__webpack_require__.bind(null, /*! ./modules/project/project.module */ "y3uc")).then(m => m.ProjectModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'mou', loadChildren: () => Promise.all(/*! import() | modules-mou-mou-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("common"), __webpack_require__.e("modules-mou-mou-module")]).then(__webpack_require__.bind(null, /*! ./modules/mou/mou.module */ "d3vJ")).then(m => m.MouModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'dynamic-form', loadChildren: () => __webpack_require__.e(/*! import() | modules-dynamic-form-dynamic-form-module */ "modules-dynamic-form-dynamic-form-module").then(__webpack_require__.bind(null, /*! ./modules/dynamic-form/dynamic-form.module */ "+pMV")).then(m => m.DynamicFormModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'region-branch', loadChildren: () => __webpack_require__.e(/*! import() | modules-region-branch-setup-region-branch-setup-module */ "modules-region-branch-setup-region-branch-setup-module").then(__webpack_require__.bind(null, /*! ./modules/region-branch-setup/region-branch-setup.module */ "F9UH")).then(m => m.RegionBranchSetupModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'block', loadChildren: () => __webpack_require__.e(/*! import() | modules-block-setup-block-setup-module */ "modules-block-setup-block-setup-module").then(__webpack_require__.bind(null, /*! ./modules/block-setup/block-setup.module */ "Xf4Q")).then(m => m.BlockSetupModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'gp', loadChildren: () => __webpack_require__.e(/*! import() | modules-gp-setup-gp-setup-module */ "modules-gp-setup-gp-setup-module").then(__webpack_require__.bind(null, /*! ./modules/gp-setup/gp-setup.module */ "tJb9")).then(m => m.GpSetupModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'Baseline-Survey', loadChildren: () => Promise.all(/*! import() | modules-baseline-survey-baseline-survey-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("default~modules-baseline-survey-baseline-survey-module~modules-central-register-central-register-module"), __webpack_require__.e("modules-baseline-survey-baseline-survey-module")]).then(__webpack_require__.bind(null, /*! ./modules/baseline-survey/baseline-survey.module */ "9Oov")).then(m => m.BaselineSurveyModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'central-register', loadChildren: () => Promise.all(/*! import() | modules-central-register-central-register-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("default~modules-baseline-survey-baseline-survey-module~modules-central-register-central-register-module"), __webpack_require__.e("modules-central-register-central-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/central-register/central-register.module */ "qvT1")).then(m => m.CentralRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'children-register', loadChildren: () => Promise.all(/*! import() | modules-children-register-children-register-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-children-register-children-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/children-register/children-register.module */ "43Nq")).then(m => m.ChildrenRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'family-info', loadChildren: () => __webpack_require__.e(/*! import() | modules-family-info-family-info-module */ "modules-family-info-family-info-module").then(__webpack_require__.bind(null, /*! ./modules/family-info/family-info.module */ "lKH6")).then(m => m.FamilyInfoModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'muac-register', loadChildren: () => Promise.all(/*! import() | modules-muac-register-muac-register-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-muac-register-muac-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/muac-register/muac-register.module */ "3y2c")).then(m => m.MuacRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'core', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/core/core.module */ "6ZYd")).then(m => m.CoreModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'pem-register', loadChildren: () => Promise.all(/*! import() | modules-pem-register-pem-register-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-pem-register-pem-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/pem-register/pem-register.module */ "8xsE")).then(m => m.PemRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'acr', loadChildren: () => Promise.all(/*! import() | modules-all-children-register-all-child-register-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("common"), __webpack_require__.e("modules-all-children-register-all-child-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/all-children-register/all-child-register.module */ "gFW8")).then(m => m.AllChildRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'lmr', loadChildren: () => __webpack_require__.e(/*! import() | modules-lactating-mother-register-lm-register-module */ "modules-lactating-mother-register-lm-register-module").then(__webpack_require__.bind(null, /*! ./modules/lactating-mother-register/lm-register.module */ "D/kB")).then(m => m.LmRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'pw-register', loadChildren: () => Promise.all(/*! import() | modules-pregnant-women-register-pw-register-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-pregnant-women-register-pw-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/pregnant-women-register/pw-register.module */ "TWdA")).then(m => m.PwRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'daily-activity-register', loadChildren: () => Promise.all(/*! import() | modules-daily-activity-register-daily-activity-register-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-daily-activity-register-daily-activity-register-module")]).then(__webpack_require__.bind(null, /*! ./modules/daily-activity-register/daily-activity-register.module */ "v3t/")).then(m => m.DailyActivityRegisterModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'village-setup', loadChildren: () => Promise.all(/*! import() | modules-village-setup-village-setup-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-village-setup-village-setup-module")]).then(__webpack_require__.bind(null, /*! ./modules/village-setup/village-setup.module */ "HpoE")).then(m => m.VillageSetupModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ss-setup', loadChildren: () => Promise.all(/*! import() | modules-ss-setup-ss-setup-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-ss-setup-ss-setup-module")]).then(__webpack_require__.bind(null, /*! ./modules/ss-setup/ss-setup.module */ "De8t")).then(m => m.SsSetupModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'privacy_policy', loadChildren: () => __webpack_require__.e(/*! import() | modules-shared-privacy-policy-privacy-policy-module */ "modules-shared-privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null, /*! ./modules/shared/privacy-policy/privacy-policy.module */ "Odxu")).then(m => m.PrivacyPolicyModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'branch-villageMap', loadChildren: () => Promise.all(/*! import() | modules-branch-village-map-branch-village-map-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-branch-village-map-branch-village-map-module")]).then(__webpack_require__.bind(null, /*! ./modules/branch-village-map/branch-village-map.module */ "BZvT")).then(m => m.BranchVillageMapModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'district-setup', loadChildren: () => Promise.all(/*! import() | modules-district-setup-district-setup-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-district-setup-district-setup-module")]).then(__webpack_require__.bind(null, /*! ./modules/district-setup/district-setup.module */ "UC6/")).then(m => m.DistrictSetupModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ss-unmap', loadChildren: () => Promise.all(/*! import() | modules-ss-unmap-ss-unmap-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-ss-unmap-ss-unmap-module")]).then(__webpack_require__.bind(null, /*! ./modules/ss-unmap/ss-unmap.module */ "BTnk")).then(m => m.SsUnmapModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ss-unmap-remap', loadChildren: () => Promise.all(/*! import() | modules-ss-unmap-remap-ss-unmap-remap-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-ss-unmap-remap-ss-unmap-remap-module")]).then(__webpack_require__.bind(null, /*! ./modules/ss-unmap-remap/ss-unmap-remap.module */ "OBPB")).then(m => m.SsUnmapRemapModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'report', loadChildren: () => __webpack_require__.e(/*! import() | modules-reports-report-module */ "modules-reports-report-module").then(__webpack_require__.bind(null, /*! ./modules/reports/report.module */ "P+a1")).then(m => m.ReportModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'remap-user-hh', loadChildren: () => __webpack_require__.e(/*! import() | modules-remap-user-hh-remap-user-hh-module */ "modules-remap-user-hh-remap-user-hh-module").then(__webpack_require__.bind(null, /*! ./modules/remap-user-hh/remap-user-hh.module */ "jjFV")).then(m => m.RemapUserHhModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'remap-user-ss', loadChildren: () => __webpack_require__.e(/*! import() | modules-remap-user-ss-remap-user-ss-module */ "modules-remap-user-ss-remap-user-ss-module").then(__webpack_require__.bind(null, /*! ./modules/remap-user-ss/remap-user-ss.module */ "5riV")).then(m => m.RemapUserSsModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'close-baseline', loadChildren: () => Promise.all(/*! import() | modules-close-baseline-close-baseline-module */[__webpack_require__.e("default~modules-all-children-register-all-child-register-module~modules-baseline-survey-baseline-sur~340fd73e"), __webpack_require__.e("modules-close-baseline-close-baseline-module")]).then(__webpack_require__.bind(null, /*! ./modules/close-baseline/close-baseline.module */ "iWkA")).then(m => m.CloseBaselineModule), canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
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