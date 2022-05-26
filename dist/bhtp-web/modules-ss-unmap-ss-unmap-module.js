(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ss-unmap-ss-unmap-module"],{

/***/ "BTnk":
/*!*****************************************************!*\
  !*** ./src/app/modules/ss-unmap/ss-unmap.module.ts ***!
  \*****************************************************/
/*! exports provided: SsUnmapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsUnmapModule", function() { return SsUnmapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ss_unmap_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ss-unmap-routing.module */ "ShW+");
/* harmony import */ var _ss_unmap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ss-unmap.component */ "GI++");





class SsUnmapModule {
}
SsUnmapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SsUnmapModule });
SsUnmapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SsUnmapModule_Factory(t) { return new (t || SsUnmapModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ss_unmap_routing_module__WEBPACK_IMPORTED_MODULE_2__["SsUnmapRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SsUnmapModule, { declarations: [_ss_unmap_component__WEBPACK_IMPORTED_MODULE_3__["SsUnmapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ss_unmap_routing_module__WEBPACK_IMPORTED_MODULE_2__["SsUnmapRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SsUnmapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ss_unmap_component__WEBPACK_IMPORTED_MODULE_3__["SsUnmapComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ss_unmap_routing_module__WEBPACK_IMPORTED_MODULE_2__["SsUnmapRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "GI++":
/*!********************************************************!*\
  !*** ./src/app/modules/ss-unmap/ss-unmap.component.ts ***!
  \********************************************************/
/*! exports provided: SsUnmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsUnmapComponent", function() { return SsUnmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SsUnmapComponent {
    constructor() { }
    ngOnInit() {
    }
}
SsUnmapComponent.ɵfac = function SsUnmapComponent_Factory(t) { return new (t || SsUnmapComponent)(); };
SsUnmapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SsUnmapComponent, selectors: [["app-ss-unmap"]], decls: 2, vars: 0, template: function SsUnmapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ss-unmap works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcy11bm1hcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SsUnmapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ss-unmap',
                templateUrl: './ss-unmap.component.html',
                styleUrls: ['./ss-unmap.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ShW+":
/*!*************************************************************!*\
  !*** ./src/app/modules/ss-unmap/ss-unmap-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SsUnmapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsUnmapRoutingModule", function() { return SsUnmapRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ss_unmap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ss-unmap.component */ "GI++");





const routes = [{ path: '', component: _ss_unmap_component__WEBPACK_IMPORTED_MODULE_2__["SsUnmapComponent"] }];
class SsUnmapRoutingModule {
}
SsUnmapRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SsUnmapRoutingModule });
SsUnmapRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SsUnmapRoutingModule_Factory(t) { return new (t || SsUnmapRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SsUnmapRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SsUnmapRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-ss-unmap-ss-unmap-module.js.map