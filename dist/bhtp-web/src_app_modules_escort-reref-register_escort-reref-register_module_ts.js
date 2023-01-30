"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_escort-reref-register_escort-reref-register_module_ts"],{

/***/ 15016:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/escort-reref-register/escort-reref-register-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscortRerefRegisterRoutingModule": () => (/* binding */ EscortRerefRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _escort_reref_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escort-reref-register.component */ 59123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _escort_reref_register_component__WEBPACK_IMPORTED_MODULE_0__.EscortRerefRegisterComponent
}];
class EscortRerefRegisterRoutingModule {}
EscortRerefRegisterRoutingModule.ɵfac = function EscortRerefRegisterRoutingModule_Factory(t) {
  return new (t || EscortRerefRegisterRoutingModule)();
};
EscortRerefRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: EscortRerefRegisterRoutingModule
});
EscortRerefRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EscortRerefRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 59123:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/escort-reref-register/escort-reref-register.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscortRerefRegisterComponent": () => (/* binding */ EscortRerefRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class EscortRerefRegisterComponent {
  constructor() {}
  ngOnInit() {}
}
EscortRerefRegisterComponent.ɵfac = function EscortRerefRegisterComponent_Factory(t) {
  return new (t || EscortRerefRegisterComponent)();
};
EscortRerefRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EscortRerefRegisterComponent,
  selectors: [["app-escort-reref-register"]],
  decls: 2,
  vars: 0,
  template: function EscortRerefRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "escort-reref-register works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 42493:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/escort-reref-register/escort-reref-register.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscortRerefRegisterModule": () => (/* binding */ EscortRerefRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _escort_reref_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escort-reref-register-routing.module */ 15016);
/* harmony import */ var _escort_reref_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escort-reref-register.component */ 59123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class EscortRerefRegisterModule {}
EscortRerefRegisterModule.ɵfac = function EscortRerefRegisterModule_Factory(t) {
  return new (t || EscortRerefRegisterModule)();
};
EscortRerefRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: EscortRerefRegisterModule
});
EscortRerefRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _escort_reref_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.EscortRerefRegisterRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EscortRerefRegisterModule, {
    declarations: [_escort_reref_register_component__WEBPACK_IMPORTED_MODULE_1__.EscortRerefRegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _escort_reref_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.EscortRerefRegisterRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_escort-reref-register_escort-reref-register_module_ts.js.map