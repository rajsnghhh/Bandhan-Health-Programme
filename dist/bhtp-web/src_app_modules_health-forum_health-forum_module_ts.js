"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_health-forum_health-forum_module_ts"],{

/***/ 69385:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum-angular-mat-modal/health-forum-angular-mat-modal.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthForumAngularMatModalComponent": () => (/* binding */ HealthForumAngularMatModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);




function HealthForumAngularMatModalComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.villageName);
  }
}
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
HealthForumAngularMatModalComponent.ɵfac = function HealthForumAngularMatModalComponent_Factory(t) {
  return new (t || HealthForumAngularMatModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
};
HealthForumAngularMatModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HealthForumAngularMatModalComponent,
  selectors: [["app-health-forum-angular-mat-modal"]],
  decls: 15,
  vars: 1,
  consts: [["mat-dialog-content", ""], [1, "fas", "fa-times", 2, "float", "right", 3, "click"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header_fixed", 2, "text-align", "center"], [2, "width", "8%"], [2, "width", "30%"], [4, "ngFor", "ngForOf"]],
  template: function HealthForumAngularMatModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HealthForumAngularMatModalComponent_Template_i_click_1_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "table", 5)(7, "thead", 6)(8, "tr")(9, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sl. No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Village Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HealthForumAngularMatModalComponent_tr_14_Template, 5, 2, "tr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.villLists);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n  background-color: #499;\r\n  color: #FFFFFF;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 165px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 6px;\r\n}\r\n\r\n  .mat-dialog-container {\r\n  padding: 12px 17px;\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9oZWFsdGgtZm9ydW0vaGVhbHRoLWZvcnVtLWFuZ3VsYXItbWF0LW1vZGFsL2hlYWx0aC1mb3J1bS1hbmd1bGFyLW1hdC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI2hlYWRlcl9maXhlZCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbn1cclxuXHJcbnRhYmxlIHRib2R5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDE2NXB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG50YWJsZSB0aGVhZCwgdGJvZHkgdHIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbi5RQV90YWJsZSAudGFibGUgdGJvZHkgdGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEycHggMTdweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3741:
/*!*********************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthForumRoutingModule": () => (/* binding */ HealthForumRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _health_forum_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-forum.component */ 91699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _health_forum_component__WEBPACK_IMPORTED_MODULE_0__.HealthForumComponent
}];
class HealthForumRoutingModule {}
HealthForumRoutingModule.ɵfac = function HealthForumRoutingModule_Factory(t) {
  return new (t || HealthForumRoutingModule)();
};
HealthForumRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: HealthForumRoutingModule
});
HealthForumRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HealthForumRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 91699:
/*!****************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthForumComponent": () => (/* binding */ HealthForumComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-forum-angular-mat-modal/health-forum-angular-mat-modal.component */ 69385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _health_forum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health-forum.service */ 71727);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/sidebar/health-forum-search.pipe */ 14357);





















function HealthForumComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36)(1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_div_17_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](69);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.createHealthForum(_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function HealthForumComponent_div_19_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", region_r21.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", region_r21.regionName, " ");
  }
}
function HealthForumComponent_div_19_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_div_19_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_div_19_div_10_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r18.l.region.errors.required);
  }
}
function HealthForumComponent_div_19_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", branch_r23.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", branch_r23.branchName, " ");
  }
}
function HealthForumComponent_div_19_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_div_19_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_div_19_div_20_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r20.l.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function HealthForumComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "div", 39)(2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_div_19_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, HealthForumComponent_div_19_option_9_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, HealthForumComponent_div_19_div_10_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 39)(12, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_div_19_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r27.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, HealthForumComponent_div_19_option_19_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, HealthForumComponent_div_19_div_20_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](6, _c0, ctx_r2.l.region.invalid && ctx_r2.l.region.touched, ctx_r2.l.region.valid && (ctx_r2.l.region.dirty || ctx_r2.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](9, _c0, ctx_r2.l.branch.invalid && ctx_r2.l.branch.touched, ctx_r2.l.branch.valid && (ctx_r2.l.branch.dirty || ctx_r2.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.l.branch.errors);
  }
}
function HealthForumComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_60_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_td_20_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r37);
      const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](65);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.viewHFEventDetails(_r5, health_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_60_i_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_i_26_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r40);
      const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](69);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r39.editHealthForum(_r9, health_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_60_i_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_i_27_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r44);
      const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r42.deleteHealthForum(health_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_60_i_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_i_28_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);
      const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r45.approveHealthForum(health_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_60_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_i_29_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r50);
      const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r48.approveARescheduleHealthForum(health_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_60_i_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_i_30_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r52);
      const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](73);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r51.rescheduleHealthForum(_r13, health_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 26)(12, "div", 51)(13, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 53)(16, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_60_Template_td_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r55);
      const health_r28 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r54.openDialog(health_r28.villageList));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, HealthForumComponent_tr_60_td_20_Template, 2, 0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, HealthForumComponent_tr_60_i_26_Template, 1, 0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, HealthForumComponent_tr_60_i_27_Template, 1, 0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, HealthForumComponent_tr_60_i_28_Template, 1, 0, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, HealthForumComponent_tr_60_i_29_Template, 1, 0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, HealthForumComponent_tr_60_i_30_Template, 1, 0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const health_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", i_r29 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", health_r28.scheduleDetails.date.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", health_r28.rescheduleDetails ? health_r28.rescheduleDetails.rescheduleToDate.split("-").reverse().join("-") : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", health_r28.staffFirstName, " ", health_r28.staffLastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](health_r28.ssName ? health_r28.ssName : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" * ", health_r28.topicDetails.topicName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.eventViewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](health_r28.forumFamilyPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](health_r28.forumAdolescentGirlPresent + health_r28.forumFamilyHeadPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.deleteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.approveMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.rescheduleApprovalMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.rescheduleMode);
  }
}
function HealthForumComponent_ng_template_64_i_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_64_i_6_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](71);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r58.createHFEvents(_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_64_tr_49_li_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const disease_r65 = ctx.$implicit;
    const i_r66 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", i_r66 + 1, ". ", disease_r65.diseasesName, " ");
  }
}
function HealthForumComponent_ng_template_64_tr_49_i_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_64_tr_49_i_28_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r68);
      const event_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](71);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r67.editHFEvents(_r11, event_r60));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_64_tr_49_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_64_tr_49_i_29_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const event_r60 = ctx_r71.$implicit;
      const i_r61 = ctx_r71.index;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r70.deleteHFEvent(event_r60, i_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_64_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 74)(6, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_64_tr_49_Template_span_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r74);
      const event_r60 = restoredCtx.$implicit;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](67);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r73.viewFamilyAttendedDetails(_r7, event_r60));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td", 74)(18, "div", 51)(19, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, HealthForumComponent_ng_template_64_tr_49_li_22_Template, 2, 2, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, HealthForumComponent_ng_template_64_tr_49_i_28_Template, 1, 0, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, HealthForumComponent_ng_template_64_tr_49_i_29_Template, 1, 0, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r60 = ctx.$implicit;
    const i_r61 = ctx.index;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r61 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](event_r60.createdOn.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("(", event_r60.forumEventFamilyPresent, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", event_r60.forumEventFamilyHeadPresent + event_r60.forumEventAdolescentGirlPresent, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](event_r60.eventConductedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r57.viewForumList.topicDetails.topicName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", event_r60.seasonalDiseaseDiscussedList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", event_r60.startHour.toString().length > 1 ? event_r60.startHour : "0" + event_r60.startHour, ":", event_r60.startMinute.toString().length > 1 ? event_r60.startMinute : "0" + event_r60.startMinute, " ", event_r60.startAmOrPm, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", event_r60.endHour.toString().length > 1 ? event_r60.endHour : "0" + event_r60.endHour, ":", event_r60.endMinute.toString().length > 1 ? event_r60.endMinute : "0" + event_r60.endMinute, " ", event_r60.endAmOrPm, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r57.eventUpdateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r57.eventDeleteMode);
  }
}
function HealthForumComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 67)(1, "div", 68)(2, "div", 69)(3, "h3", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Event Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HealthForumComponent_ng_template_64_i_6_Template, 1, 0, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 69)(8, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_64_Template_span_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r75.viewHFEventModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 73)(11, "div", 18)(12, "div", 18)(13, "div", 19)(14, "div", 20)(15, "table", 21)(16, "thead")(17, "tr")(18, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Family View/");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Attended");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Attended");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Conducted By");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Topic Discussed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Seasonal Disease");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Discussed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "tbody", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, HealthForumComponent_ng_template_64_tr_49_Template, 30, 15, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.eventCreateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r6.viewEventList);
  }
}
function HealthForumComponent_ng_template_66_tbody_32_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fam_r80 = ctx.$implicit;
    const fami_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](fam_r80.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("", fam_r80.familyFirstName, " ", fam_r80.familyMiddleName, " ", fam_r80.familyLastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](fami_r78.villageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolateV"]([" ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren == "Y" ? "PEM, LM, PW, 2-5 yr" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren == "Y" ? "PEM, LM, 2-5 yr" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren.includes("N") ? "PEM" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren.includes("N") ? "" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren == "Y" ? "LM, PW, 2-5 yr" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren.includes("N") ? "PW" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren.includes("N") ? "LM" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren == "Y" ? "PEM, PW, 2-5 yr" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren.includes("N") ? "PEM, LM, PW" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren.includes("N") ? "PEM, LM" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren == "Y" ? "PW, 2-5 yr" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren == "Y" ? "2-5 yr" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren.includes("N") ? "LM, PW" : "", " ", fam_r80.hasChildPresentInPem.includes("N") && fam_r80.presentInLactatingMother == "Y" && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren == "Y" ? "LM, 2-5 yr" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman == "Y" && fam_r80.has2to5yearsOldChildren.includes("N") ? "PEM, PW" : "", " ", fam_r80.hasChildPresentInPem == "Y" && fam_r80.presentInLactatingMother.includes("N") && fam_r80.presentInPregnantWoman.includes("N") && fam_r80.has2to5yearsOldChildren == "Y" ? "PEM, 2-5 yr" : "", " "]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](fam_r80.family_head_present);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](fam_r80.hasAdolescentGirlChildren);
  }
}
function HealthForumComponent_ng_template_66_tbody_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_66_tbody_32_tr_1_Template, 13, 23, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fami_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", fami_r78.familyList);
  }
}
function HealthForumComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 67)(1, "div", 68)(2, "div", 69)(3, "h3", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Family Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 69)(6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_66_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r83.viewFamilyModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 73)(9, "div", 18)(10, "div", 18)(11, "div", 19)(12, "div", 20)(13, "table", 21)(14, "thead")(15, "tr")(16, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Family No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Family Head Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Status Of Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Family Head");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Adolescent Girl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, HealthForumComponent_ng_template_66_tbody_32_Template, 2, 1, "tbody", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r8.familyDetails);
  }
}
function HealthForumComponent_ng_template_68_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h2", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Create Health Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_68_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h2", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Edit Health Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_68_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_68_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_16_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r87.c.date.errors.required);
  }
}
function HealthForumComponent_ng_template_68_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const staff_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", staff_r101.staffId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", staff_r101.staffFisrtName, " ", staff_r101.staffMiddleName, " ", staff_r101.staffLastName, " ");
  }
}
function HealthForumComponent_ng_template_68_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Staff Name selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_68_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_26_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r89.c.staffName.errors.required);
  }
}
function HealthForumComponent_ng_template_68_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ss_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", ss_r103.ssId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ss_r103.ssName, " ");
  }
}
function HealthForumComponent_ng_template_68_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Area selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_68_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_40_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r91.c.areaList.errors.required);
  }
}
function HealthForumComponent_ng_template_68_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const topic_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", topic_r105.ss_training_event_topic_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", topic_r105.ss_training_event_topic_name, " ");
  }
}
function HealthForumComponent_ng_template_68_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Topic selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_68_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_50_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r93.c.topic.errors.required);
  }
}
function HealthForumComponent_ng_template_68_div_63_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No. of Event Proposed is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_68_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_63_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r94.c.event.errors.required);
  }
}
function HealthForumComponent_ng_template_68_option_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hours_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", hours_r108.hourValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", hours_r108.hourName, " ");
  }
}
function HealthForumComponent_ng_template_68_div_75_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Select Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_68_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_75_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r96.c.hour.errors.required);
  }
}
function HealthForumComponent_ng_template_68_option_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const minutes_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", minutes_r111.minuteValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", minutes_r111.minuteName, " ");
  }
}
function HealthForumComponent_ng_template_68_div_81_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Select Minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_68_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_81_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r98.c.minute.errors.required);
  }
}
function HealthForumComponent_ng_template_68_div_90_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Select Meridiem");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_68_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_68_div_90_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r99.c.meridiem.errors.required);
  }
}
function HealthForumComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 85)(1, "div", 68)(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HealthForumComponent_ng_template_68_h2_3_Template, 2, 0, "h2", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HealthForumComponent_ng_template_68_h2_4_Template, 2, 0, "h2", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 69)(6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_68_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r115.createHFModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 87)(9, "form", 16)(10, "div", 39)(11, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Date :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown", function HealthForumComponent_ng_template_68_Template_input_keydown_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r117.restrictTypeOfDate());
    })("change", function HealthForumComponent_ng_template_68_Template_input_change_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r118.changeDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HealthForumComponent_ng_template_68_div_16_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 39)(18, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Staff Name :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_68_Template_select_change_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r119.changeStaff($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "-- Select Staff Name --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, HealthForumComponent_ng_template_68_option_25_Template, 2, 4, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, HealthForumComponent_ng_template_68_div_26_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 39)(28, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "SS Name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_68_Template_select_change_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116);
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r120.changeSS($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "-- Select SS Name --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, HealthForumComponent_ng_template_68_option_33_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 39)(35, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Select Multiple Area :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "ng-multiselect-dropdown", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onSelect", function HealthForumComponent_ng_template_68_Template_ng_multiselect_dropdown_onSelect_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r121.onItemSelect($event));
    })("onSelectAll", function HealthForumComponent_ng_template_68_Template_ng_multiselect_dropdown_onSelectAll_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r122.onSelectAll($event));
    })("onDeSelect", function HealthForumComponent_ng_template_68_Template_ng_multiselect_dropdown_onDeSelect_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116);
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r123.onItemDeSelect($event));
    })("onDeSelectAll", function HealthForumComponent_ng_template_68_Template_ng_multiselect_dropdown_onDeSelectAll_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r124.onItemDeSelectAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, HealthForumComponent_ng_template_68_div_40_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 39)(42, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Topic :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "select", 97)(47, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "-- Select Topic --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, HealthForumComponent_ng_template_68_option_49_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, HealthForumComponent_ng_template_68_div_50_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 39)(52, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "No. of Event Proposed :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "select", 99)(57, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "-- Select Event--");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, HealthForumComponent_ng_template_68_div_63_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 39)(65, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "Schedule Start Time :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 103)(70, "div", 69)(71, "select", 104)(72, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "-- HH --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](74, HealthForumComponent_ng_template_68_option_74_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](75, HealthForumComponent_ng_template_68_div_75_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 69)(77, "select", 105)(78, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "-- MM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](80, HealthForumComponent_ng_template_68_option_80_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](81, HealthForumComponent_ng_template_68_div_81_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "div", 69)(83, "select", 106)(84, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, "-- AM/PM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](90, HealthForumComponent_ng_template_68_div_90_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "div", 109)(92, "div", 2)(93, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_68_Template_button_click_93_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r125.HfSaveOrUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx_r10.editHFDetails == null ? null : ctx_r10.editHFDetails.healthForumMasterId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.editHFDetails == null ? null : ctx_r10.editHFDetails.healthForumMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r10.createHFForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", ctx_r10.minDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](28, _c0, ctx_r10.c.date.invalid && ctx_r10.c.date.touched, ctx_r10.c.date.valid && (ctx_r10.c.date.dirty || ctx_r10.c.date.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.date.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](31, _c0, ctx_r10.c.staffName.invalid && ctx_r10.c.staffName.touched, ctx_r10.c.staffName.valid && (ctx_r10.c.staffName.dirty || ctx_r10.c.staffName.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.staffList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.staffName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.SSList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("settings", ctx_r10.dropdownSettings)("data", ctx_r10.areaList)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](34, _c0, ctx_r10.c.areaList.invalid && ctx_r10.c.areaList.touched, ctx_r10.c.areaList.valid && (ctx_r10.c.areaList.dirty || ctx_r10.c.areaList.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.areaList.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](37, _c0, ctx_r10.c.topic.invalid && ctx_r10.c.topic.touched, ctx_r10.c.topic.valid && (ctx_r10.c.topic.dirty || ctx_r10.c.topic.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.topicList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.topic.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](40, _c0, ctx_r10.c.event.invalid && ctx_r10.c.event.touched, ctx_r10.c.event.valid && (ctx_r10.c.event.dirty || ctx_r10.c.event.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.event.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](43, _c0, ctx_r10.c.hour.invalid && ctx_r10.c.hour.touched, ctx_r10.c.hour.valid && (ctx_r10.c.hour.dirty || ctx_r10.c.hour.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.hourList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.hour.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](46, _c0, ctx_r10.c.minute.invalid && ctx_r10.c.minute.touched, ctx_r10.c.minute.valid && (ctx_r10.c.minute.dirty || ctx_r10.c.minute.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.minuteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.minute.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](49, _c0, ctx_r10.c.meridiem.invalid && ctx_r10.c.meridiem.touched, ctx_r10.c.meridiem.valid && (ctx_r10.c.meridiem.dirty || ctx_r10.c.meridiem.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.meridiem.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r10.saveIsDisabled());
  }
}
function HealthForumComponent_ng_template_70_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h2", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Create Health Forum Event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_70_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h2", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Edit Health Forum Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_70_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hours_r137 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", hours_r137.hourValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", hours_r137.hourName, " ");
  }
}
function HealthForumComponent_ng_template_70_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const minutes_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", minutes_r139.minuteValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", minutes_r139.minuteName, " ");
  }
}
function HealthForumComponent_ng_template_70_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hours_r141 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", hours_r141.hourValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", hours_r141.hourName, " ");
  }
}
function HealthForumComponent_ng_template_70_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const minutes_r143 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", minutes_r143.minuteValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", minutes_r143.minuteName, " ");
  }
}
function HealthForumComponent_ng_template_70_div_92_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Select event conduction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_70_div_92_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_70_div_92_div_12_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r145.e.eventConduction.errors.required);
  }
}
function HealthForumComponent_ng_template_70_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 123)(1, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Event Conducted By :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "select", 162)(6, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "option", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "option", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, HealthForumComponent_ng_template_70_div_92_div_12_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](2, _c0, ctx_r132.e.eventConduction.invalid && ctx_r132.e.eventConduction.touched, ctx_r132.e.eventConduction.valid && (ctx_r132.e.eventConduction.dirty || ctx_r132.e.eventConduction.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r132.e.eventConduction.errors);
  }
}
function HealthForumComponent_ng_template_70_div_93_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Select event conduction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_70_div_93_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_70_div_93_div_12_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r147.e.eventConduction.errors.required);
  }
}
function HealthForumComponent_ng_template_70_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 123)(1, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Event Conducted By :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "select", 165)(6, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "option", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "option", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, HealthForumComponent_ng_template_70_div_93_div_12_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](2, _c0, ctx_r133.e.eventConduction.invalid && ctx_r133.e.eventConduction.touched, ctx_r133.e.eventConduction.valid && (ctx_r133.e.eventConduction.dirty || ctx_r133.e.eventConduction.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r133.e.eventConduction.errors);
  }
}
function HealthForumComponent_ng_template_70_tr_111_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_70_tr_111_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const i_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
      const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r153.removeNewVisitor(i_r150));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_70_tr_111_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 172)(1, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Deleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return {
    standalone: true
  };
};
function HealthForumComponent_ng_template_70_tr_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keypress", function HealthForumComponent_ng_template_70_tr_111_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r157);
      const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r156.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function HealthForumComponent_ng_template_70_tr_111_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r157);
      const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r158.validationService.titleCase($event));
    })("ngModelChange", function HealthForumComponent_ng_template_70_tr_111_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r157);
      const i_r150 = restoredCtx.index;
      const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r159.visitorDetails.visitorInfo[i_r150].visitorName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td")(4, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keypress", function HealthForumComponent_ng_template_70_tr_111_Template_input_keypress_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r157);
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r160.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function HealthForumComponent_ng_template_70_tr_111_Template_input_keypress_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r157);
      const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r161.validationService.titleCase($event));
    })("ngModelChange", function HealthForumComponent_ng_template_70_tr_111_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r157);
      const i_r150 = restoredCtx.index;
      const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r162.visitorDetails.visitorInfo[i_r150].visitorDesignation = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HealthForumComponent_ng_template_70_tr_111_button_6_Template, 2, 0, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, HealthForumComponent_ng_template_70_tr_111_button_7_Template, 3, 0, "button", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r150 = ctx.index;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](6, _c1))("ngModel", ctx_r134.visitorDetails.visitorInfo[i_r150].visitorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](7, _c1))("ngModel", ctx_r134.visitorDetails.visitorInfo[i_r150].visitorDesignation);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r134.visitorDetails.visitorInfo[i_r150].active_flag != "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r134.visitorDetails.visitorInfo[i_r150].active_flag == "D");
  }
}
function HealthForumComponent_ng_template_70_div_172_tr_15_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_div_172_tr_15_input_6_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r170);
      const disease_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r168.selectMultipleDisease($event, disease_r164));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_70_div_172_tr_15_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_div_172_tr_15_input_7_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r173);
      const disease_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r171.selectMultipleDisease($event, disease_r164));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_70_div_172_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HealthForumComponent_ng_template_70_div_172_tr_15_input_6_Template, 1, 0, "input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, HealthForumComponent_ng_template_70_div_172_tr_15_input_7_Template, 1, 0, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const disease_r164 = ctx.$implicit;
    const i_r165 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r165 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](disease_r164.diseaseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", disease_r164.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", disease_r164.isChecked == false);
  }
}
function HealthForumComponent_ng_template_70_div_172_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "fieldset", 174)(2, "legend", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Seasonal Disease Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 137)(5, "table", 176)(6, "thead", 139)(7, "tr", 76)(8, "th", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "tbody", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, HealthForumComponent_ng_template_70_div_172_tr_15_Template, 8, 4, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r135.eventDiseaseList);
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const vill_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", vill_r174.villageName, " ");
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_input_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_input_22_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r189);
      const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const vill_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r187.changefamilyHeadPresent($event, fami_r180, vill_r174));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const int_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", int_r181);
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_input_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_input_23_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const vill_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r192.changefamilyHeadPresent($event, fami_r180, vill_r174));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const int_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", int_r181);
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r201);
      const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const vill_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r199.changefamilyHeadPresent($event, fami_r180, vill_r174));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const int_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", int_r181);
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_input_3_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r206);
      const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const vill_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r204.changefamilyHeadPresent($event, fami_r180, vill_r174));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const int_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", int_r181);
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_input_2_Template, 1, 1, "input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_input_3_Template, 1, 1, "input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r180.radioCheck == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r180.radioCheck != "N");
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r214);
      const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const vill_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r212.changefamilyHeadPresent($event, fami_r180, vill_r174));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const int_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", int_r181);
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_input_3_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r219);
      const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const vill_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r217.changefamilyHeadPresent($event, fami_r180, vill_r174));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const int_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", int_r181);
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_input_2_Template, 1, 1, "input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_input_3_Template, 1, 1, "input", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r180.radioCheck == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r180.radioCheck != "N");
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_input_1_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r232);
      const adol_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r230.selectAdolescent($event, adol_r224, fami_r180));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r236 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r236);
      const adol_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r234.selectAdolescent($event, adol_r224, fami_r180));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_input_1_Template, 1, 0, "input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_input_2_Template, 1, 0, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const adol_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", adol_r224.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", adol_r224.isChecked != true);
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r243 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_input_1_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r243);
      const adol_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r241.selectAdolescent($event, adol_r224, fami_r180));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r247);
      const adol_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r245.selectAdolescent($event, adol_r224, fami_r180));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_input_1_Template, 1, 0, "input", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_input_2_Template, 1, 0, "input", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const adol_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", adol_r224.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", adol_r224.isChecked != true);
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_7_Template, 3, 2, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_td_8_Template, 3, 2, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const adol_r224 = ctx.$implicit;
    const ide_r225 = ctx.index;
    const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ide_r225 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", adol_r224.childName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", adol_r224.age, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r180.radioCheck != "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r180.radioCheck == "NA");
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "fieldset", 175)(2, "legend", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Adolescent Girl Attended ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 137)(5, "table", 176)(6, "thead", 139)(7, "tr", 76)(8, "th", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "tbody", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_tr_17_Template, 9, 5, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const fami_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", fami_r180.adolescentGilrChildren);
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 187)(1, "div", 122)(2, "div", 2)(3, "div", 188)(4, "h4", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 156)(7, "h4", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 189)(10, "i", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r253);
      const fami_r180 = restoredCtx.$implicit;
      const int_r181 = restoredCtx.index;
      const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r252.unselectFamily(fami_r180, int_r181));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 2)(12, "div", 188)(13, "h4", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 191)(16, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " Family Head Present :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 192)(21, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_input_22_Template, 1, 1, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_input_23_Template, 1, 1, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_26_Template, 6, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_27_Template, 6, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_div_28_Template, 18, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fami_r180 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Family No. : ", fami_r180.familyNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("Name : ", fami_r180.firstName, "", fami_r180.middleName, " ", fami_r180.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Status : ", fami_r180.setStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r180.radioCheck == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r180.radioCheck != "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r180.adolescentGilrChildren.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r180.adolescentGilrChildren.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r180.adolescentGilrChildren.length > 0);
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_div_0_Template, 29, 10, "div", 186);
  }
  if (rf & 2) {
    const i_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r177.eventFamList[i_r175]);
  }
}
function HealthForumComponent_ng_template_70_mat_tab_188_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_1_Template, 1, 1, "ng-template", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HealthForumComponent_ng_template_70_mat_tab_188_ng_template_2_Template, 1, 1, "ng-template", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 112)(1, "div", 68)(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HealthForumComponent_ng_template_70_h2_3_Template, 2, 0, "h2", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HealthForumComponent_ng_template_70_h2_4_Template, 2, 0, "h2", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 69)(6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_70_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r256);
      const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r255.editHFEventModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 113)(9, "form", 16)(10, "div", 2)(11, "div", 69)(12, "div", 2)(13, "div", 103)(14, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Start Time :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "select", 115)(20, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "-- HH --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, HealthForumComponent_ng_template_70_option_22_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "select", 116)(24, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "-- MM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, HealthForumComponent_ng_template_70_option_26_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "select", 117)(28, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "-- AM/PM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 2)(35, "div", 103)(36, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "\u00A0\u00A0End Time :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "select", 118)(42, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "-- HH --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, HealthForumComponent_ng_template_70_option_44_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "select", 119)(46, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "-- MM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, HealthForumComponent_ng_template_70_option_48_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "select", 120)(50, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "-- AM/PM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 2)(57, "div", 121)(58, "div", 122)(59, "div", 2)(60, "div", 123)(61, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, " Staff Present :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div", 125)(69, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_input_change_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r256);
      const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r257.staffPresentorNot($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 125)(73, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_input_change_73_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r256);
      const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r258.staffPresentorNot($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 123)(77, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, " SS Present :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](81, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](83, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 125)(85, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_input_change_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r256);
      const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r259.ssPresentorNot($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "div", 125)(89, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_input_change_89_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r256);
      const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r260.ssPresentorNot($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](92, HealthForumComponent_ng_template_70_div_92_Template, 13, 5, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](93, HealthForumComponent_ng_template_70_div_93_Template, 13, 5, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "div", 39)(95, "div", 133)(96, "div", 134)(97, "h4", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "Visitor Details :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_70_Template_i_click_99_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r256);
      const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r261.addMoreVisitor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "div", 137)(101, "table", 138)(102, "thead", 139)(103, "tr", 76)(104, "th", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](105, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "th", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](107, "Designation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "th", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "tbody", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](111, HealthForumComponent_ng_template_70_tr_111_Template, 8, 8, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "div", 2)(113, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](114, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](115, "div", 2)(116, "div", 144)(117, "div", 122)(118, "h4", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, "Discussion Topic :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "div", 2)(121, "div", 145)(122, "label", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](123, " Recap Last Month's Topic :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](125, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "div", 147)(129, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](130, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](132, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](133, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](134, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](135, "input", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](136, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](137, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](138, "div", 2)(139, "div", 145)(140, "label", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](141, " Discussion on This Month's Topic :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](143, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "div", 147)(147, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](148, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](149, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](150, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](152, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](153, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](155, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "div", 2)(157, "div", 145)(158, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](159, " Any Discussion on Seasonal Diseases :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](160, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](161, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "div", 147)(163, "div", 125)(164, "input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_input_change_164_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r256);
      const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r262.changeseasonalDiscussion($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](165, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](166, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_input_change_169_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r256);
      const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r263.changeseasonalDiscussion($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](171, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](172, HealthForumComponent_ng_template_70_div_172_Template, 16, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](173, "div", 143)(174, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](175, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](176, "div", 156)(177, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](178, "View Family List By :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "select", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_70_Template_select_change_179_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r256);
      const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r264.viewFilterByFamilyList($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](180, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](181, "-- All Family --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](182, "option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](183, "Selected Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](185, "Unselected Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](186, "div", 2)(187, "mat-tab-group", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectedTabChange", function HealthForumComponent_ng_template_70_Template_mat_tab_group_selectedTabChange_187_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r256);
      const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r265.tabChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](188, HealthForumComponent_ng_template_70_mat_tab_188_Template, 3, 0, "mat-tab", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](189, "div", 109)(190, "div", 2)(191, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_70_Template_button_click_191_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r256);
      const ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r266.saveEditHFEvent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](192, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx_r12.editHF_eventDetails == null ? null : ctx_r12.editHF_eventDetails.healthForumEventId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.editHF_eventDetails == null ? null : ctx_r12.editHF_eventDetails.healthForumEventId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r12.createEditHFEventForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.hourList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.minuteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.hourList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.minuteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" (", ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.staffFirstName, " ", ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.staffLastName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" (", (ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.ssName) ? ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.ssName : "No SS Present", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r12.createEditHFEventForm.value.ssPresent && !ctx_r12.createEditHFEventForm.value.staffPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.createEditHFEventForm.value.ssPresent || ctx_r12.createEditHFEventForm.value.staffPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.visitorDetails.visitorInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("(", (ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.lastMonthHfTopicName) ? ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.lastMonthHfTopicName : "-", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("(", (ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.topicName) ? ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.topicName : "-", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.createEditHFEventForm.value.seasonalDiscussion == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.eventVillList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r12.saveEditHFEventDisabled());
  }
}
function HealthForumComponent_ng_template_72_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_72_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_72_div_16_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r267.r.date.errors.required);
  }
}
function HealthForumComponent_ng_template_72_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Comment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_72_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_72_div_24_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r268.r.comment.errors.required);
  }
}
function HealthForumComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r272 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 213)(1, "div", 68)(2, "div", 69)(3, "h3", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Reschedule Health Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 69)(6, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_72_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r272);
      const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r271.rescheduleHFModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 215)(9, "form", 16)(10, "div", 39)(11, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Date :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown", function HealthForumComponent_ng_template_72_Template_input_keydown_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r272);
      const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r273.restrictTypeOfDate());
    })("change", function HealthForumComponent_ng_template_72_Template_input_change_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r272);
      const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r274.changeDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HealthForumComponent_ng_template_72_div_16_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 39)(18, "label", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Comments :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "textarea", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, HealthForumComponent_ng_template_72_div_24_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 109)(26, "div", 2)(27, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_72_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r272);
      const ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r275.saveRescheduled());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r14.rescheduleHFForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", ctx_r14.setDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](7, _c0, ctx_r14.r.date.invalid && ctx_r14.r.date.touched, ctx_r14.r.date.valid && (ctx_r14.r.date.dirty || ctx_r14.r.date.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.r.date.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](10, _c0, ctx_r14.r.comment.invalid && ctx_r14.r.comment.touched, ctx_r14.r.comment.valid && (ctx_r14.r.comment.dirty || ctx_r14.r.comment.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.r.comment.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r14.rescheduleSave());
  }
}
const _c2 = function (a0, a1, a2) {
  return {
    staffFirstName: a0,
    staffLastName: a1,
    ssName: a2
  };
};
const _c3 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
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
      visitorInfo: []
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
    this.healthForumForms();
    this.sidebarService.checkRoledetailDTO().then(res => {
      this.lowerRankbranchId = res.branchId;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.loader = true;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userName,
            userName: dataAccessDTO.userId
          },
          branchId: this.lowerRankbranchId
        };
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe(res => {
          if (res.sessionDTO.status == true) {
            this.loader = true;
            this.villagesOfBranch = res.responseObject;
          }
        });
        this.changeBranch(this.lowerRankbranchId);
      }
    });
    this.regionBranchHide = this.sidebarService.regionBranchHide;
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/health-forum']) : this.router.navigate(['/error']);
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    this.approveMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'approve')?.accessType ? true : false;
    this.rescheduleMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'reschedule')?.accessType ? true : false;
    this.rescheduleApprovalMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'reschedule approval')?.accessType ? true : false;
    this.eventViewMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'event view')?.accessType ? true : false;
    this.eventCreateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'event create')?.accessType ? true : false;
    this.eventUpdateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'event update')?.accessType ? true : false;
    this.eventDeleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'event delete')?.accessType ? true : false;
  }
  healthForumForms() {
    this.healthForumForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
    });
  }
  get l() {
    return this.healthForumForm.controls;
  }
  changeRegion(regionId) {
    console.log(regionId, 'regionId');
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    this.healthForumService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res?.responseObject;
      console.log(this.branchList, 'this.branchList');
    });
    this.healthForumForm.controls.branch.setValue('');
    this.viewHealthForumsOfBranch = [];
  }
  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    this.branchId = branchId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId
    };
    this.loader = false;
    this.healthForumService.viewHealthForumsOfABranch(req).subscribe(res => {
      this.viewHealthForumsOfBranch = res?.responseObject;
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
      windowClass: 'HFeventDetails'
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
    } else {
      let obj = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        healthForumEventId: event.healthForumEventId,
        healthForumMasterId: this.viewForumList.healthForumMasterId
      };
      this.healthForumService.viewHealthForumsOfAEvent(obj).subscribe(res => {
        console.log(res.responseObject);
        this.familyDetails = res.responseObject?.villageWiseFamilyList;
        console.log(this.familyDetails, 'this.familyDetails');
      });
      this.modalContent = '';
      this.viewFamilyDetailModal = this.modalService.open(ViewFamilyDetails, {
        windowClass: 'ViewFamilyDetails'
      });
    }
  }
  viewFamilyModalDismiss() {
    this.viewFamilyDetailModal.close();
  }
  hourLists() {
    for (let i = 1; i <= 12; i++) {
      if (i < 10) {
        this.hourList.push({
          hourName: '0' + i,
          hourValue: '0' + i
        });
      } else {
        this.hourList.push({
          hourName: i,
          hourValue: i
        });
      }
      // console.log(this.hourList);
    }
  }

  minuteLists() {
    for (let i = 0; i <= 59; i++) {
      if (i < 10) {
        this.minuteList.push({
          minuteName: '0' + i,
          minuteValue: '0' + i
        });
      } else {
        this.minuteList.push({
          minuteName: i,
          minuteValue: i
        });
      }
      // console.log(this.minuteList);
    }
  }

  getAllStaffAndTheirSSOfABranch() {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId
    };
    this.healthForumService.getAllStaffAndTheirSSOfABranch(req).subscribe(res => {
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
      allowSearchFilter: true
    };
    this.createHFForms();
    if (this.editHFDetails.healthForumMasterId) {
      setTimeout(() => {
        this.modalContent = '';
        this.createHFModal = this.modalService.open(createHF, {
          windowClass: 'createHF'
        });
        this.loader = true;
      }, 1500);
    } else {
      this.modalContent = '';
      this.createHFModal = this.modalService.open(createHF, {
        windowClass: 'createHF'
      });
    }
    let dateString = new Date();
    this.minDate = moment__WEBPACK_IMPORTED_MODULE_0__(dateString).add(1, "days").format("YYYY-MM-DD");
    this.hourLists();
    this.minuteLists();
    this.getAllStaffAndTheirSSOfABranch();
  }
  changeDate() {
    this.getTopicListAndAreasOfStaffAndOrSS();
    if (!this.editHFDetails?.healthForumMasterId) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }
    // if (this.createHFForm.value.staffName) {
    //   this.getTopicListAndAreasOfStaffAndOrSS();
    // }
    if (this.editHFDetails?.scheduleDetails?.date != this.createHFForm.value.date) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }
  }
  changeStaff(staffId) {
    console.log(staffId, 'staffId');
    if (!this.editHFDetails?.healthForumMasterId) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
      this.createHFForm.controls.ssName.setValue('');
    }
    if (this.editHFDetails?.staffDetails?.staffId != this.createHFForm.value.staffName) {
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
    this.SSList = this.staffList.find(item => item.staffId == staffId)?.ssList;
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
    console.log(ssId, 'ssId');
    this.getTopicListAndAreasOfStaffAndOrSS();
    if (!this.editHFDetails?.healthForumMasterId) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }
    if (this.editHFDetails?.ssDetails?.ssId != this.createHFForm.value.ssName) {
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
    this.areaList = [];
    if (!this.createHFForm.value.ssName) {
      this.createHFForm.controls.ssName.setValue('');
    }
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumDate: this.createHFForm?.value.date,
      staffMasterId: this.createHFForm?.value.staffName,
      ssId: this.createHFForm?.value.ssName ? this.createHFForm?.value.ssName : ''
    };
    this.healthForumService.getTopicListAndAreasOfStaffAndOrSS(req).subscribe(res => {
      console.log(res.responseObject);
      this.topicList = res.responseObject?.allTopics;
      console.log(this.topicList, ' this.topicList');
      this.areaList = res.responseObject?.villageDetails;
      this.areaList = this.areaList?.map(({
        isChecked = false,
        ...rest
      }) => ({
        isChecked,
        ...rest
      }));
      console.log(this.areaList, 'areaList');
    });
  }
  onItemSelect(areaList) {
    this.areaList.filter(list => list.villageMasterId == areaList?.villageMasterId).forEach(x => {
      x.isChecked = true;
    });
    console.log(this.areaList);
  }
  onItemDeSelect(areaList) {
    this.areaList.filter(list => list.villageMasterId == areaList?.villageMasterId).forEach(x => {
      x.isChecked = false;
    });
    console.log(this.areaList);
  }
  onSelectAll() {
    this.areaList.forEach(x => {
      x.isChecked = true;
    });
    console.log(this.areaList);
  }
  onItemDeSelectAll() {
    this.areaList.forEach(x => {
      x.isChecked = false;
    });
    console.log(this.areaList);
  }
  createHFForms() {
    this.editHFDetailsTime = [];
    if (this.editHFDetails?.healthForumMasterId) {
      var text = this.editHFDetails?.scheduleDetails?.time;
      text.trim().replace(" ", ":").trim().split(":").forEach(e => {
        if (e.length < 2) {
          this.editHFDetailsTime.push("0" + e);
        } else {
          this.editHFDetailsTime.push(e);
        }
        console.log(this.editHFDetailsTime);
      });
      console.log(this.editHFDetails.villageList);
      this.editHFDetails.villageList = this.editHFDetails.villageList.map(({
        villageId: villageMasterId,
        ...rest
      }) => ({
        villageMasterId,
        ...rest
      }));
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
        date: [this.editHFDetails.scheduleDetails.date, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        staffName: [this.editHFDetails.staffDetails.staffId, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        ssName: [this.editHFDetails.ssDetails.ssId ? this.editHFDetails.ssDetails.ssId : ''],
        areaList: [this.editHFDetails.villageList ? this.editHFDetails.villageList : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        hour: [this.editHFDetailsTime[0], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        minute: [this.editHFDetailsTime[1], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        meridiem: [this.editHFDetailsTime[2], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        topic: [this.editHFDetails.topicDetails.topicId, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        event: [this.editHFDetails.noOfEventProposed, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
      });
      // console.log(this.editHFDetails.topicDetails.topicId);
      this.createHFForm.markAllAsTouched();
      // this.getAllStaffAndTheirSSOfABranch();
      setTimeout(() => {
        this.changeStaff(this.editHFDetails.staffDetails.staffId);
      }, 500);
    } else {
      this.createHFForm = this.fb.group({
        date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        staffName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        ssName: [''],
        areaList: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        hour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        minute: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        meridiem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        event: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
      });
    }
  }
  saveIsDisabled() {
    let flag = true;
    if (!this.createHFForm.value.date) {
      flag = false;
    } else if (!this.createHFForm.value.staffName) {
      flag = false;
    } else if (!this.createHFForm.value.areaList) {
      flag = false;
    } else if (!this.createHFForm.value.topic) {
      flag = false;
    } else if (!this.createHFForm.value.event) {
      flag = false;
    } else if (!this.createHFForm.value.hour) {
      flag = false;
    } else if (!this.createHFForm.value.minute) {
      flag = false;
    } else if (!this.createHFForm.value.meridiem) {
      flag = false;
    }
    return flag;
  }
  HfSaveOrUpdate() {
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
      healthForumMasterId: this.editHFDetails?.healthForumMasterId ? this.editHFDetails?.healthForumMasterId : 0,
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
    this.healthForumService.HFSaveOrUpdate(saveObj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.branchId || this.lowerRankbranchId);
        this.createHFModalDismiss();
      } else {
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
    var ID = this.editHFDetails?.healthForumMasterId;
    if (ID) {
      this.editHFDetails = '';
      ID = 0;
      this.createHFModal.close();
      // this.editVill = []
    } else {
      this.createHFModal.close();
      // this.editVill = []
    }
  }

  deleteHealthForum(health) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this forum ?').then(() => this.delete(health)).catch(() => '');
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
    this.healthForumService.HFSaveOrUpdate(delObj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.branchId || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    });
  }
  approveHealthForum(health) {
    console.log(health);
    if (health.approvalStatus == 'A') {
      this.showError('Forum is already approved');
      return;
    } else {
      let appObj = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        healthForumMasterId: health.healthForumMasterId,
        isApproved: false
      };
      this.healthForumService.HFApprove(appObj).subscribe(res => {
        console.log(res);
        if (res.status == true) {
          this.showSuccess('Approved Successfully');
          this.changeBranch(this.branchId || this.lowerRankbranchId);
        } else {
          this.showError(res.message);
        }
      });
    }
  }
  showSuccess(message) {
    this.toaster.success(message, 'Health Forum', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Health Forum', {
      timeOut: 3000
    });
  }
  restrictTypeOfDate() {
    return false;
  }
  openDialog(health) {
    this.dialog.open(_health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_1__.HealthForumAngularMatModalComponent, {
      width: '400px',
      height: '250px',
      data: {
        villLists: health
      }
    });
  }
  createHFEvents(createEditHFEvent) {
    this.visitorDetails.visitorInfo = [];
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
    this.healthForumService.HForumEventPrerequisite(HFPrerequisite).subscribe(res => {
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
      this.eventDiseaseList = this.eventDiseaseList?.map(({
        isChecked = false,
        ...rest
      }) => ({
        isChecked,
        ...rest
      }));
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
        healthForumMasterId: this.viewForumList.healthForumMasterId
      };
      this.loader = false;
      this.healthForumService.getListOfFamsOfAVillForHFEvent(famReq).subscribe(res => {
        this.eventFamList = res.responseObject;
        this.setFamList = res.responseObject;
        this.loader = true;
        // console.log(this.eventVillList, 'eventVillList22');
        console.log(this.eventFamList, 'eventFamList');
        this.eventFamList?.forEach(x => {
          // console.log(x);
          x.familyList = x.familyList?.map(({
            setStatus = '',
            radioCheck = 'NA',
            villageId = '',
            adolGirl = [],
            health_forum_event_family_map_id = 0,
            ...rest
          }) => ({
            setStatus,
            radioCheck,
            villageId,
            adolGirl,
            health_forum_event_family_map_id,
            ...rest
          }));
          this.setData(x.familyList);
        });
        this.eventFamList = [];
        this.eventVillList.forEach(item => {
          this.eventFamList.push(res.responseObject?.find(items => items.villageId == item.villageId)?.familyList ? res.responseObject?.find(items => items.villageId == item.villageId)?.familyList : []);
        });
        // console.log(this.eventFamList);
        this.eventFamList.forEach(item => {
          item.forEach(items => {
            items.adolescentGilrChildren = items.adolescentGilrChildren?.map(({
              isChecked = false,
              health_forum_event_child_map_id = 0,
              ...rest
            }) => ({
              isChecked,
              health_forum_event_child_map_id,
              ...rest
            }));
            // console.log(items.adolescentGilrChildren);
          });
        });
      });
    });

    if (this.editHF_eventDetails?.healthForumEventId) {
      setTimeout(() => {
        this.createEditHFEventForms(this.editHF_eventDetails);
        this.modalContent = '';
        this.editHFEventModal = this.modalService.open(createEditHFEvent, {
          windowClass: 'createEditHFEvent'
        });
      }, 2000);
    }
    if (!this.editHF_eventDetails?.healthForumEventId && this.viewForumList.approvalStatus == 'A') {
      this.createEditHFEventForms(this.editHF_eventDetails);
      this.modalContent = '';
      this.editHFEventModal = this.modalService.open(createEditHFEvent, {
        windowClass: 'createEditHFEvent'
      });
    } else if (!this.editHF_eventDetails?.healthForumEventId && this.viewForumList.approvalStatus != 'A') {
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
      this.statusList.push({
        status: x.has2to5yearsoldChildren,
        set: "2-5 yr"
      }, {
        status: x.hasAdolescentGirlChildren,
        set: "14-18 yr"
      }, {
        status: x.hasChildPresentInPem,
        set: "PEM"
      }, {
        status: x.presentInLactatingMother,
        set: "LM"
      }, {
        status: x.presentInPregnantWoman,
        set: "PW"
      });
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
      } else {
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
        } else {
          this.visitorDetails.visitorInfo.splice(i, 1);
        }
      } else {
        this.visitorDetails.visitorInfo.splice(i, 1);
      }
    } else {
      this.visitorDetails.visitorInfo.splice(i, 1);
    }
    console.log(this.visitorDetails.visitorInfo);
  }
  editHFEventModalDismiss() {
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
    var ID = this.editHF_eventDetails?.healthForumEventId;
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
    } else {
      this.editHFEventModal.close();
      this.visitorDetails.visitorInfo = [];
    }
  }
  createEditHFEventForms(editHF_eventDetails) {
    if (this.editHF_eventDetails?.healthForumEventId) {
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
      this.healthForumService.viewHealthForumsOfAEvent(moreEventDetailsobj).subscribe(res => {
        this.moreEventDetails = res.responseObject;
        // console.log(this.moreEventDetails, 'this.moreEventDetails');
        this.setmoreEventDetails(this.moreEventDetails, editHF_eventDetails);
      });
    } else {
      this.createEditHFEventForm = this.fb.group({
        startHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        startMin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        startMeridiem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        endHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        endMin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        endMeridiem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        staffPresent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        ssPresent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        eventConduction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        lastMonTopic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        thisMonTopic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        seasonalDiscussion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
      });
      this.createEditHFEventForm.markAllAsTouched();
    }
  }
  unselectFamily(fami, int) {
    fami.radioCheck = 'NA';
    fami.adolescentGilrChildren.forEach(z => {
      console.log(z);
      z.active_flag = "D";
      z.isChecked = false;
    });
    fami.adolGirl = [];
    fami.adolescentGilrChildren.filter(x => x.active_flag == "D").forEach(z => {
      var t = [];
      z.age.split(/[year,month,days]+/).forEach(x => {
        t.push(x);
        this.year = t[0];
        this.month = t[1];
        this.day = t[2];
      });
      console.log(this.year, this.month, this.day);
      fami.adolGirl.push({
        health_forum_event_child_map_id: z.health_forum_event_child_map_id,
        childId: z.childDetailId,
        active_flag: 'D',
        latestMuac: z.latestMuac,
        ageYears: this.year.trim(),
        ageMonths: this.month.trim(),
        ageDays: this.day.trim(),
        latestMuacRegisterId: z.latestMuacRegisterId,
        present_status: z.presentInPem,
        isChecked: z.isChecked
      });
    });
    console.log(fami);
  }
  setmoreEventDetails(data, editHF_eventDetails) {
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
                m.adolescentGilrChildren.filter(x => x.isChecked).forEach(z => {
                  var t = [];
                  z.age.split(/[year,month,days]+/).forEach(x => {
                    t.push(x);
                    this.year = t[0];
                    this.month = t[1];
                    this.day = t[2];
                  });
                  console.log(this.year, this.month, this.day);
                  m.adolGirl.push({
                    health_forum_event_child_map_id: z.health_forum_event_child_map_id,
                    childId: z.childDetailId,
                    active_flag: 'A',
                    latestMuac: z.latestMuac,
                    ageYears: this.year.trim(),
                    ageMonths: this.month.trim(),
                    ageDays: this.day.trim(),
                    latestMuacRegisterId: z.latestMuacRegisterId,
                    present_status: z.presentInPem,
                    isChecked: z.isChecked
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
        visitorDesignation: x.visitorDesignation,
        visitorName: x.visitorName,
        health_forum_event_visitor_map_id: x.health_forum_event_visitor_map_id,
        active_flag: 'A'
      });
    });
    this.diseaseListID = [];
    data.seasonalDiseaseDiscussedList.forEach(x => {
      this.eventDiseaseList.filter(v => v.diseaseId == x.diseaseId).forEach(z => {
        z.isChecked = true;
        this.diseaseListID.push({
          health_forum_event_season_diseases_map_id: x.health_forum_event_season_diseases_map_id,
          diseaseId: z.diseaseId,
          active_flag: 'A'
        });
        console.log(this.diseaseListID);
      });
    });
    console.log(this.eventDiseaseList, 'eventDiseaseList');
    this.editStartHour = this.editHF_eventDetails?.startHour;
    this.editStartHour = this.editStartHour.toString();
    this.editStartMin = this.editHF_eventDetails?.startMinute;
    this.editStartMin = this.editStartMin.toString();
    this.editEndHour = this.editHF_eventDetails?.endHour;
    this.editEndHour = this.editEndHour.toString();
    this.editEndMin = this.editHF_eventDetails?.endMinute;
    this.editEndMin = this.editEndMin.toString();
    if (this.editStartHour.length < 2) {
      this.editStartHour = '0' + this.editStartHour;
      // console.log(this.editStartHour, 'this.editStartHour');
    } else {
      this.editStartHour = this.editHF_eventDetails?.startHour;
    }
    if (this.editStartMin.length < 2) {
      this.editStartMin = '0' + this.editStartMin;
      // console.log(this.editStartMin, 'this.editStartMin');
    } else {
      this.editStartMin = this.editHF_eventDetails?.startMinute;
    }
    if (this.editEndHour.length < 2) {
      this.editEndHour = '0' + this.editEndHour;
      // console.log(this.editEndHour, 'this.editEndHour');
    } else {
      this.editEndHour = this.editHF_eventDetails?.endHour;
    }
    if (this.editEndMin.length < 2) {
      this.editEndMin = '0' + this.editEndMin;
      // console.log(this.editEndMin, 'this.editEndMin');
    } else {
      this.editEndMin = this.editHF_eventDetails?.endMinute;
    }
    this.createEditHFEventForm = this.fb.group({
      startHour: [this.editStartHour ? this.editStartHour : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      startMin: [this.editStartMin ? this.editStartMin : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      startMeridiem: [editHF_eventDetails.startAmOrPm ? editHF_eventDetails.startAmOrPm : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      endHour: [this.editEndHour ? this.editEndHour : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      endMin: [this.editEndMin ? this.editEndMin : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      endMeridiem: [editHF_eventDetails.endAmOrPm ? editHF_eventDetails.endAmOrPm : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      staffPresent: [data?.wasStaffPresent ? data?.wasStaffPresent : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      ssPresent: [data?.wasSsPresent ? data?.wasSsPresent : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      eventConduction: [data?.conductedByStaffOrSS ? data?.conductedByStaffOrSS : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      lastMonTopic: [data?.recapLastMonthTopic ? data?.recapLastMonthTopic : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      thisMonTopic: [data?.discussionOnThisMonthTopic ? data?.discussionOnThisMonthTopic : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      seasonalDiscussion: [data?.discussionOnAnySeasonalDisease ? data?.discussionOnAnySeasonalDisease : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
    });
    this.createEditHFEventForm.markAllAsTouched();
  }
  selectMultipleDisease(e, disease) {
    this.diseaseListID = [];
    console.log(e.target.checked, disease);
    if (e.target.checked == true) {
      disease.isChecked = true;
    } else {
      disease.isChecked = false;
    }
    console.log(this.moreEventDetails);
    if (!this.moreEventDetails) {
      this.eventDiseaseList.forEach(x => {
        if (x.isChecked == true) {
          console.log(x.diseaseId);
          this.diseaseListID.push({
            health_forum_event_season_diseases_map_id: 0,
            diseaseId: x.diseaseId,
            active_flag: 'A'
          });
          console.log(this.diseaseListID);
        }
      });
    } else {
      this.eventDiseaseList.forEach(e => {
        if (this.moreEventDetails.seasonalDiseaseDiscussedList.length != 0) {
          if (this.moreEventDetails.seasonalDiseaseDiscussedList.filter(v => v.diseaseId == e.diseaseId).length == 0) {
            if (e.isChecked == true) {
              console.log(e.diseaseId);
              this.diseaseListID.push({
                health_forum_event_season_diseases_map_id: 0,
                diseaseId: e.diseaseId,
                active_flag: 'A'
              });
              console.log(this.diseaseListID);
            }
          } else {
            this.moreEventDetails.seasonalDiseaseDiscussedList.filter(v => v.diseaseId == e.diseaseId).forEach(r => {
              if (e.isChecked == true) {
                this.diseaseListID.push({
                  health_forum_event_season_diseases_map_id: r.health_forum_event_season_diseases_map_id,
                  diseaseId: r.diseaseId,
                  active_flag: 'A'
                });
              } else {
                this.diseaseListID.push({
                  health_forum_event_season_diseases_map_id: r.health_forum_event_season_diseases_map_id,
                  diseaseId: r.diseaseId,
                  active_flag: 'D'
                });
              }
            });
          }
        } else {
          if (e.isChecked == true) {
            console.log(e.diseaseId);
            this.diseaseListID.push({
              health_forum_event_season_diseases_map_id: 0,
              diseaseId: e.diseaseId,
              active_flag: 'A'
            });
            console.log(this.diseaseListID);
          }
        }
      });
    }
    console.log(this.eventDiseaseList);
    console.log(this.diseaseListID);
  }
  selectAdolescent(e, adolescent, fami) {
    console.log(fami);
    if (e.target.checked == true) {
      adolescent.isChecked = true;
      console.log(adolescent);
    } else {
      adolescent.isChecked = false;
      console.log(adolescent);
    }
    console.log(this.eventFamList);
    fami.adolGirl = [];
    fami.adolescentGilrChildren.filter(x => x.isChecked).forEach(z => {
      var t = [];
      z.age.split(/[year,month,days]+/).forEach(x => {
        t.push(x);
        this.year = t[0];
        this.month = t[1];
        this.day = t[2];
      });
      console.log(this.year, this.month, this.day);
      fami.adolGirl.push({
        health_forum_event_child_map_id: z.health_forum_event_child_map_id,
        childId: z.childDetailId,
        active_flag: 'A',
        latestMuac: z.latestMuac,
        ageYears: this.year.trim(),
        ageMonths: this.month.trim(),
        ageDays: this.day.trim(),
        latestMuacRegisterId: z.latestMuacRegisterId,
        present_status: z.presentInPem,
        isChecked: z.isChecked
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
        if (y.radioCheck != 'NA') this.familyHeadPresentLenChk.push(y);
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
    } else if (e == 'unselectedFam') {
      var notSel = [];
      this.setFamList.forEach(x => {
        console.log(x);
        notSel.push(x.familyList.filter(x => x.radioCheck == 'NA'));
      });
      this.eventFamList = notSel;
      console.log(this.eventFamList);
    } else {
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
    } else if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'Y') {
      this.createEditHFEventForm.controls.eventConduction.setValue('SS');
    } else if (this.createEditHFEventForm.value.staffPresent == 'Y' && this.createEditHFEventForm.value.ssPresent == 'Y') {
      this.createEditHFEventForm.controls.eventConduction.setValue('');
    } else if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'N') {
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
    } else if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'Y') {
      this.createEditHFEventForm.controls.eventConduction.setValue('SS');
    } else if (this.createEditHFEventForm.value.staffPresent == 'Y' && this.createEditHFEventForm.value.ssPresent == 'Y') {
      this.createEditHFEventForm.controls.eventConduction.setValue('');
    } else if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'N') {
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
            if (x.adolGirl.filter(e => e.isChecked == true).length == 0) {
              i++;
              if (i == 1) {
                this.showError('Minimum one adolescent selection is required as family head is present');
                return;
              } else {
                return;
              }
            } else {
              this.familyListData.push({
                health_forum_event_family_map_id: x.health_forum_event_family_map_id,
                familyId: x.familyDetailId,
                villageId: x.villageId,
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
          } else {
            this.familyListData.push({
              health_forum_event_family_map_id: x.health_forum_event_family_map_id,
              familyId: x.familyDetailId,
              villageId: x.villageId,
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
        } else {
          if (x.health_forum_event_family_map_id != 0) {
            this.familyListData.push({
              health_forum_event_family_map_id: x.health_forum_event_family_map_id,
              familyId: x.familyDetailId,
              villageId: x.villageId,
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
          if (x.adolGirl.filter(e => e.isChecked == true).length == 0) {
            ch.push({
              isChecked: false
            });
          } else {
            tt.push(x.adolGirl);
            ch.push({
              isChecked: true
            });
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
    // this.setmoreEventDetails(this.moreEventDetails, editHF_eventDetails);
    var tt = [];
    this.visitorDetails.visitorInfo.forEach(x => {
      if (x.visitorName == "") {
        tt.push();
      } else {
        tt.push(x);
      }
    });
    if (this.moreEventDetails?.seasonalDiseaseDiscussedList) {
      if (this.createEditHFEventForm.value.seasonalDiscussion == 'N') {
        this.diseaseListID.forEach(f => {
          this.moreEventDetails?.seasonalDiseaseDiscussedList.filter(x => x.diseaseId == f.diseaseId).forEach(z => {
            f.active_flag = 'D';
          });
        });
      }
    }
    console.log(tt);
    let savEditReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumEventId: this.moreEventDetails?.healthForumEventId ? this.moreEventDetails?.healthForumEventId : 0,
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
    this.healthForumService.saveOrUpdateHealthForumEvent(savEditReq).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.editHFEventModalDismiss();
        this.viewHFEventModalDismiss();
        this.changeBranch(this.branchId || this.lowerRankbranchId);
      } else {
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
    } else if (!this.createEditHFEventForm.value.startMin) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.startMeridiem) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.endHour) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.endMin) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.endMeridiem) {
      flag = false;
    } else if (this.createEditHFEventForm.value.staffPresent != 'Y' && this.createEditHFEventForm.value.ssPresent != 'Y') {
      flag = false;
    } else if (!this.createEditHFEventForm.value.eventConduction) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.lastMonTopic) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.thisMonTopic) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.seasonalDiscussion) {
      flag = false;
    } else if (this.createEditHFEventForm.value.seasonalDiscussion == 'Y') {
      if (this.diseaseListID.filter(x => x.active_flag == 'A').length < 1) {
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
    var arr = [];
    if (this.editHF_eventDetails?.healthForumEventId) {
      console.log('id');
      this.moreEventDetails.seasonalDiseaseDiscussedList.forEach(a => {
        this.eventDiseaseList.filter(y => y.diseaseId == a.diseaseId).forEach(z => {
          arr.push({
            health_forum_event_season_diseases_map_id: a.health_forum_event_season_diseases_map_id,
            diseaseId: z.diseaseId,
            active_flag: 'A'
          });
          console.log(z);
        });
      });
      // this.eventDiseaseList.forEach(x => {
      //   console.log(x);
      //   console.log(this.moreEventDetails.seasonalDiseaseDiscussedList);
      //   console.log(this.moreEventDetails.seasonalDiseaseDiscussedList.filter(y => y.diseaseId == x.diseaseId));
      //   // .forEach(z =>{
      //   // arr.push(z);
      //   // console.log(z);
      //   // })
      // })
    }

    console.log(this.eventDiseaseList);
    this.eventDiseaseList.forEach(x => {
      if (x.isChecked == true) {
        console.log(x.isChecked = false);
      }
    });
    console.log(this.eventDiseaseList);
    setTimeout(() => {
      console.log(arr);
      this.diseaseListID = arr;
      console.log(this.diseaseListID);
    }, 500);
  }
  tabChanged(tabChangeEvent) {
    this.index = tabChangeEvent.index;
  }
  deleteHFEvent(event, i) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this event ?').then(() => this.delete_event(event, i)).catch(() => '');
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
      endTimeAmOrPm: event.endAmOrPm
      // wasStaffPresent: event.staffPresent,
      // staffId: this.HForumEventPrerequisite.staffId,
      // wasSsPresent: this.createEditHFEventForm.value.ssPresent,
      // ssId: this.HForumEventPrerequisite.ssId,
      // conductedByStaffOrSS: this.createEditHFEventForm.value.eventConduction,
      // recapLastMonthTopic: this.createEditHFEventForm.value.lastMonTopic,
      // discussionOnThisMonthTopic: this.createEditHFEventForm.value.thisMonTopic,
      // discussionOnAnySeasonalDisease: this.createEditHFEventForm.value.seasonalDiscussion,
      // seasonalDiseaseDiscussedList: event.seasonalDiseaseDiscussedList,
      // visitorDetailsList: tt.length == 0 ? [] : this.visitorDetails.visitorInfo,
      // familyList: this.familyListData
    };

    console.log(delReq, 'delReq');
    this.healthForumService.saveOrUpdateHealthForumEvent(delReq).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.viewEventList.splice(i, 1);
        // this.editHFEventModalDismiss();
        // this.changeBranch(this.branchId || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    });
  }
  rescheduleHealthForum(rescheduleHF, health) {
    this.rescheduleData = health;
    console.log(this.rescheduleData);
    if (this.rescheduleData.eventList.length < 2) {
      this.setDate = moment__WEBPACK_IMPORTED_MODULE_0__().format("YYYY-MM-DD");
      this.modalContent = '';
      this.rescheduleHFModal = this.modalService.open(rescheduleHF, {
        windowClass: 'rescheduleHF'
      });
      this.rescheduleHFForms();
    } else {
      this.showError('HF cannot be rescheduled');
      return;
    }
  }
  rescheduleHFModalDismiss() {
    this.rescheduleHFModal.close();
  }
  rescheduleHFForms() {
    this.rescheduleHFForm = this.fb.group({
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
    });
  }
  get r() {
    return this.rescheduleHFForm.controls;
  }
  rescheduleSave() {
    let flag = true;
    if (!this.rescheduleHFForm.value.date) {
      flag = false;
    } else if (!this.rescheduleHFForm.value.comment) {
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
      } else {
        tt.push(e);
      }
      console.log(tt);
    });
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumMasterId: this.rescheduleData.healthForumMasterId,
      date: this.rescheduleHFForm.value.date,
      scheduleStartHour: tt[0],
      scheduleStartMinute: tt[1],
      amOrPm: tt[2],
      comment: this.rescheduleHFForm.value.comment
    };
    this.healthForumService.rescheduleHealthForum(req).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.rescheduleHFModal.close();
        this.changeBranch(this.branchId || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    });
  }
  approveARescheduleHealthForum(health) {
    console.log(health);
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumMasterId: health.healthForumMasterId
    };
    this.healthForumService.approveARescheduleHealthForum(req).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
      } else {
        this.showError(res.message);
      }
    });
  }
}
HealthForumComponent.ɵfac = function HealthForumComponent_Factory(t) {
  return new (t || HealthForumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_health_forum_service__WEBPACK_IMPORTED_MODULE_4__.HealthForumService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_5__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__.ConfirmationDialogService));
};
HealthForumComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: HealthForumComponent,
  selectors: [["app-health-forum"]],
  decls: 74,
  vars: 21,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "search by staff or ss name ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "width", "4%"], [2, "width", "12%"], [2, "width", "19%"], [2, "width", "22%"], [2, "width", "8%"], ["style", "width: 8%;", 4, "ngIf"], [2, "width", "11%"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["HFeventDetails", ""], ["ViewFamilyDetails", ""], ["createHF", ""], ["createEditHFEvent", ""], ["rescheduleHF", ""], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], ["title", "Create Health Forum", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#a8d7d7", "font-size", "30px", "margin-top", "5px"], ["title", "Create Health Forum", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "30px", "margin-top", "5px", 3, "click"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [1, "popover__wrapper"], [1, "popover__title", 2, "color", "#0d6efd"], [1, "popover__content"], [2, "word-wrap", "break-word", "text-align", "left"], [1, "btn-link", 2, "width", "8%", "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], ["class", " btn-link", "style", "width: 8%; color:#0d6efd; text-decoration: none; cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "fas fa-edit", "title", "Edit Health Forum", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Health Forum", 3, "click", 4, "ngIf"], ["class", "fas fa-check-circle", "title", "Approve Health Forum", 3, "click", 4, "ngIf"], ["class", "fas fa-check-circle", "title", "Approve Reschedule Health Forum", 3, "click", 4, "ngIf"], ["class", "fas fa-calendar", "title", "Reschedule Health Forum", 3, "click", 4, "ngIf"], ["title", "Edit Health Forum", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Health Forum", 1, "fas", "fa-trash", 3, "click"], ["title", "Approve Health Forum", 1, "fas", "fa-check-circle", 3, "click"], ["title", "Approve Reschedule Health Forum", 1, "fas", "fa-check-circle", 3, "click"], ["title", "Reschedule Health Forum", 1, "fas", "fa-calendar", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], ["class", "fas fa-plus-circle", "style", "cursor: pointer; color: #499; font-size: 25px; margin-top: -39px;margin-left: -239px;", "title", "Create Health Forum Event", 3, "click", 4, "ngIf"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-25px", 3, "click"], [1, "modal-body"], [2, "width", "10%"], [2, "width", "15%"], [2, "text-align", "center"], ["title", "Create Health Forum Event", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "25px", "margin-top", "-39px", "margin-left", "-239px", 3, "click"], [1, "btn-link", 2, "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], ["style", "word-wrap: break-word; text-align: left;", 4, "ngFor", "ngForOf"], ["class", "fas fa-edit", "title", "Edit Health Forum Event", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Health Forum Event", 3, "click", 4, "ngIf"], ["title", "Edit Health Forum Event", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Health Forum Event", 1, "fas", "fa-trash", 3, "click"], [2, "width", "13%"], [1, "modal-contents"], ["class", "dialog-title", 4, "ngIf"], [1, "modal-body", 2, "height", "40vh", "overflow-y", "auto"], ["for", "date"], ["type", "date", "formControlName", "date", 1, "form-control", 3, "min", "ngClass", "keydown", "change"], ["for", "staffName"], ["formControlName", "staffName", "id", "staffName", 1, "form-select", 3, "ngClass", "change"], ["for", "ssName"], ["formControlName", "ssName", "id", "ssName", 1, "form-select", 3, "change"], ["for", "area"], ["placeholder", "-- Select Area(s) --", "formControlName", "areaList", 1, "form-control", "dropdown-multiselect__caret", 3, "settings", "data", "ngClass", "onSelect", "onSelectAll", "onDeSelect", "onDeSelectAll"], ["for", "topic"], ["formControlName", "topic", "id", "topic", 1, "form-select", 3, "ngClass"], ["for", "event"], ["formControlName", "event", "id", "event", 1, "form-select", 3, "ngClass"], ["value", "1"], ["value", "2"], ["for", "startTime"], [1, "input-group", "input-group-sm", "mb-3"], ["id", "inputGroup-sizing-sm", "formControlName", "hour", "id", "hour", 1, "form-select", 2, "width", "9rem", 3, "ngClass"], ["id", "inputGroup-sizing-sm", "formControlName", "minute", "id", "minute", 1, "form-select", 2, "width", "9rem", 3, "ngClass"], ["id", "inputGroup-sizing-sm", "formControlName", "meridiem", "id", "meridiem", 1, "form-select", 2, "width", "9rem", 3, "ngClass"], ["value", "AM"], ["value", "PM"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "dialog-title"], [1, "modal-conten"], [1, "modal-body", 2, "height", "62vh", "overflow-y", "auto"], ["for", ""], ["id", "inputGroup-sizing-sm", "formControlName", "startHour", "id", "startHour", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "startMin", "id", "startMin", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "startMeridiem", "id", "startMeridiem", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "endHour", "id", "endHour", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "endMin", "id", "endMin", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "endMeridiem", "id", "endMeridiem", 1, "input-group-text", 2, "width", "24%"], [1, "card", 2, "width", "540px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "150px", "margin-left", "15px"], [1, "card-body"], [1, "form-group", "col-md", 2, "margin-top", "15px"], ["for", "staffPresent"], [1, "form-check-inline"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "staffPresent", 1, "form-check-input", 3, "change"], ["for", "", 1, "form-check-label"], ["type", "radio", "id", "no", "value", "N", "formControlName", "staffPresent", 1, "form-check-input", 3, "change"], ["for", "ssPresent"], ["type", "radio", "id", "yess", "value", "Y", "formControlName", "ssPresent", 1, "form-check-input", 3, "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "ssPresent", 1, "form-check-input", 3, "change"], ["class", "form-group col-md", "style", "margin-top: 15px;", 4, "ngIf"], [1, "card", 2, "width", "690px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "240px", "margin-left", "-75px"], [1, "card-body", 2, "height", "40vh"], [1, "card-title"], ["id", "circle", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "float", "right", "margin-top", "-45px", 3, "click"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table"], ["id", "header_fixed"], [2, "width", "10rem"], [2, "width", "3rem"], ["id", "tbody", 2, "text-align", "center"], [1, "form-group", "col-md-6"], [1, "card", 2, "width", "540px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "auto", "margin-left", "15px"], [1, "form-group", "col-md-8"], ["for", "lastMonTopic"], [1, "form-group", "col-md-4"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "lastMonTopic", 1, "form-check-input"], ["type", "radio", "id", "no", "value", "N", "formControlName", "lastMonTopic", 1, "form-check-input"], ["for", "thisMonTopic"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "thisMonTopic", 1, "form-check-input"], ["type", "radio", "id", "no", "value", "N", "formControlName", "thisMonTopic", 1, "form-check-input"], ["for", "seasonalDiscussion"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "seasonalDiscussion", 1, "form-check-input", 3, "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "seasonalDiscussion", 1, "form-check-input", 3, "change"], [1, "col-md-6"], [1, "form-select", 3, "change"], ["value", "selectedFam"], ["value", "unselectedFam"], ["animationDuration", "500ms", 3, "selectedTabChange"], ["for", "eventConduction"], ["formControlName", "eventConduction", "disabled", "", "id", "eventConduction", 1, "form-select", 3, "ngClass"], ["value", "STAFF"], ["value", "SS"], ["formControlName", "eventConduction", "id", "eventConduction", 1, "form-select", 3, "ngClass"], ["type", "text", "maxlength", "20", "placeholder", "e.g. xyz", 1, "form-control", 2, "width", "16rem", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange"], ["type", "text", "maxlength", "20", "placeholder", "e.g. Engineer", 1, "form-control", 2, "width", "16rem", "margin-left", "75px", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange"], ["type", "button", "class", "btn btn-remove", "style", "width: 2rem;", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-remove", "style", "width: 2rem;", 4, "ngIf"], ["type", "button", 1, "btn", "btn-remove", 2, "width", "2rem", 3, "click"], [1, "fas", "fa-minus-circle", 2, "color", "red !important", "font-size", "20px", "margin-left", "65px"], ["type", "button", 1, "btn", "btn-remove", 2, "width", "2rem"], [1, "fas", 2, "color", "#f57676 !important", "font-size", "20px", "margin-left", "45px"], [1, "scheduler-border", 2, "height", "190px"], [1, "scheduler-border"], ["id", "table_wrapper", 1, "table", "table-striped"], [2, "width", "5%"], [2, "width", "25%"], ["id", "tbodyDisease", 2, "text-align", "center"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["mat-tab-label", "", "style", "margin-left: 5px;"], ["matTabContent", ""], ["class", "card", "style", "width: 670px;background: whitesmoke; border: none;border-radius: 14px;height: auto; margin-bottom:10px", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "670px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "auto", "margin-bottom", "10px"], [1, "col-md-5"], [1, "col-md-1"], ["title", "Unselect Family Head Present", 1, "fas", "fa-trash", 3, "click"], [1, "col-md-4"], [1, "col-md-3"], ["class", "form-check-input", "type", "radio", "id", "yes", "value", "Y", "checked", "", 3, "name", "change", 4, "ngIf"], ["class", "form-check-input", "type", "radio", "id", "yes", "value", "Y", 3, "name", "change", 4, "ngIf"], ["class", "form-check-inline", 4, "ngIf"], ["type", "radio", "id", "yes", "value", "Y", "checked", "", 1, "form-check-input", 3, "name", "change"], ["type", "radio", "id", "yes", "value", "Y", 1, "form-check-input", 3, "name", "change"], ["class", "form-check-input", "type", "radio", "id", "famHeadNo", "value", "N", "disabled", "", 3, "name", "change", 4, "ngIf"], ["type", "radio", "id", "famHeadNo", "value", "N", "disabled", "", 1, "form-check-input", 3, "name", "change"], ["class", "form-check-input", "type", "radio", "id", "famHeadNo", "value", "N", "checked", "", 3, "name", "change", 4, "ngIf"], ["class", "form-check-input", "type", "radio", "id", "famHeadNo", "value", "N", 3, "name", "change", 4, "ngIf"], ["type", "radio", "id", "famHeadNo", "value", "N", "checked", "", 1, "form-check-input", 3, "name", "change"], ["type", "radio", "id", "famHeadNo", "value", "N", 1, "form-check-input", 3, "name", "change"], [2, "width", "2%"], [2, "width", "31%"], [2, "width", "7%"], ["id", "tbodyy", 2, "text-align", "center"], ["style", "width: 7%;", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", "disabled", "", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "disabled", "", 3, "change", 4, "ngIf"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", "disabled", "", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "disabled", "", 1, "form-check-input", 3, "change"], [1, "modal-HF"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-18px", 3, "click"], [1, "modal-body", 2, "height", "35vh", "overflow-y", "auto"], ["for", "comment"], ["rows", "4", "cols", "50", "formControlName", "comment", 1, "form-control", 2, "resize", "none", "height", "5em", 3, "ngClass"]],
  template: function HealthForumComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Health Forum");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "form", 10)(12, "div", 11)(13, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function HealthForumComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.registerSearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HealthForumComponent_div_16_Template, 2, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, HealthForumComponent_div_17_Template, 2, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "form", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, HealthForumComponent_div_19_Template, 21, 12, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 18)(21, "div", 19)(22, "div", 20)(23, "table", 21)(24, "thead")(25, "tr")(26, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Sl.");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Rescheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Staff Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "SS Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Topic");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Village");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](46, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "List");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, HealthForumComponent_th_48_Template, 4, 0, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Total Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "Attended");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Total Member");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Attended");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](60, HealthForumComponent_tr_60_Template, 31, 15, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](61, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](62, "healthForumFilter");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "pagination-controls", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function HealthForumComponent_Template_pagination_controls_pageChange_63_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function HealthForumComponent_Template_pagination_controls_pageBoundsCorrection_63_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, HealthForumComponent_ng_template_64_Template, 50, 2, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, HealthForumComponent_ng_template_66_Template, 33, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](68, HealthForumComponent_ng_template_68_Template, 95, 52, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](70, HealthForumComponent_ng_template_70_Template, 193, 18, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](72, HealthForumComponent_ng_template_72_Template, 29, 13, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.registerSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.healthForumForm.value.branch || !ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.healthForumForm.value.branch && ctx.createMode || ctx.lowerRankbranchId && ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.healthForumForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.eventViewMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](61, 9, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](62, 12, ctx.viewHealthForumsOfBranch, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](15, _c2, ctx.registerSearch, ctx.registerSearch, ctx.registerSearch)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](19, _c3, ctx.p)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__.MultiSelectComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationControlsComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabContent, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginatePipe, _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_9__.healthForumFilterPipe],
  styles: [".popover__wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translate(0, -20px);\r\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\r\n}\r\n\r\n.popover__title[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #499;\r\n  text-align: center;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 200px !important;\r\n  transform: translate(0, 15px) !important;\r\n  background-color: white;\r\n  color: #828BB2;\r\n  box-shadow: 3px 4px 5px 3px rgba(117, 111, 117, 1);\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: \"\";\r\n  left: calc(10% - 10px);\r\n  top: -10px;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #bfbfbf transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  border: 0px solid transparent;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  background: #499;\r\n  padding: 12px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  width: 1080px;\r\n  margin-left: -275px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-HF[_ngcontent-%COMP%] {\r\n  height: 360px;\r\n  width: 498px;\r\n}\r\n\r\n.modal-contents[_ngcontent-%COMP%] {\r\n  height: 450px;\r\n  width: 490px;\r\n}\r\n\r\n.modal-conten[_ngcontent-%COMP%] {\r\n  height: 570px;\r\n  width: 1300px;\r\n  margin-left: -400px;\r\n  background: white;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 4px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child) > [_ngcontent-%COMP%]:last-child > *[_ngcontent-%COMP%] {\r\n  border-bottom-color: white;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 390px;\r\n  margin-top: -8px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 690px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 55%;\r\n  margin-left: 600px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 57%;\r\n  margin-left: 770px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 200px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 74px;\r\n  margin-bottom: 11px;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n  margin-left: -15px;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\nng-multiselect-dropdown[_ngcontent-%COMP%] {\r\n  padding: 0px !important;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 198px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n.fa-check-circle[_ngcontent-%COMP%]:hover {\r\n  color: darkgreen !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.fa-calendar[_ngcontent-%COMP%]:hover {\r\n  color: midnightblue !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\r\n  margin-left: 2px;\r\n  border-top-left-radius: 7px;\r\n  border-bottom-left-radius: 7px;\r\n  border-top-right-radius: 7px;\r\n  border-bottom-right-radius: 7px;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]:not(.has-validation) > .dropdown-toggle[_ngcontent-%COMP%]:nth-last-child(n+3), .input-group[_ngcontent-%COMP%]:not(.has-validation) > [_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {\r\n  border-top-right-radius: 7px;\r\n  border-bottom-right-radius: 7px;\r\n  border-top-left-radius: 7px;\r\n  border-bottom-left-radius: 7px;\r\n}\r\n\r\n#circle[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: static;\r\n  top: 0;\r\n  z-index: 999;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\n#tbody[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 120px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#tbodyy[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 65px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n  padding: 4px;\r\n}\r\n\r\n#tbodyDisease[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 116px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n  .mat-tab-header {\r\n  margin-left: -75px;\r\n}\r\n\r\n\r\n\r\n  .mat-tab-body-wrapper {\r\n  position: relative;\r\n  overflow-y: auto;\r\n  height: 280px;\r\n  display: flex;\r\n  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);\r\n  margin-left: -75px;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: -12px 0 1.5em 0 !important;\r\n  height: 140px;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 200px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9oZWFsdGgtZm9ydW0vaGVhbHRoLWZvcnVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlEQUF5RDtFQUN6RCx5QkFBeUI7RUFDekIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBOzs7O0dBSUc7O0FBRUg7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7OztHQUlHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVEQUF1RDtFQUN2RCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwwQkFBMEI7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wb3Zlcl9fd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wb3BvdmVyX193cmFwcGVyOmhvdmVyIC5wb3BvdmVyX19jb250ZW50IHtcclxuICB6LWluZGV4OiAxMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTIwcHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjc1LCAtMC4wMiwgMC4yLCAwLjk3KTtcclxufVxyXG5cclxuLnBvcG92ZXJfX3RpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICM0OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5wb3BvdmVyX19jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTVweCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzgyOEJCMjtcclxuICBib3gtc2hhZG93OiAzcHggNHB4IDVweCAzcHggcmdiYSgxMTcsIDExMSwgMTE3LCAxKTtcclxufVxyXG5cclxuLnBvcG92ZXJfX2NvbnRlbnQgbGkge1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fY29udGVudDpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGxlZnQ6IGNhbGMoMTAlIC0gMTBweCk7XHJcbiAgdG9wOiAtMTBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNiZmJmYmYgdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi5RQV90YWJsZSAudGFibGUgdGhlYWQgdGgge1xyXG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxN3B4IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQ6ICM0OTk7XHJcbiAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgaGVpZ2h0OiA0MzBweDtcclxuICB3aWR0aDogMTA4MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjc1cHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm1vZGFsLUhGIHtcclxuICBoZWlnaHQ6IDM2MHB4O1xyXG4gIHdpZHRoOiA0OThweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnRzIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIHdpZHRoOiA0OTBweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbiB7XHJcbiAgaGVpZ2h0OiA1NzBweDtcclxuICB3aWR0aDogMTMwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5RQV90YWJsZSAudGFibGUgdGJvZHkgdGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbiN0YWJsZV93cmFwcGVyIC50YWJsZSB0Ym9keSB0ZCB7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4udGFibGU+Om5vdCg6bGFzdC1jaGlsZCk+Omxhc3QtY2hpbGQ+KiB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXIgYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDM5MHB4O1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogNjkwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgd2lkdGg6IDU1JTtcclxuICBtYXJnaW4tbGVmdDogNjAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gaW5wdXQge1xyXG4gIHdpZHRoOiA1NyU7XHJcbiAgbWFyZ2luLWxlZnQ6IDc3MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIgLnNlYXJjaF9pbm5lciBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTE0cHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMyNzc7XHJcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICMwMDAwO1xyXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgIzAwMDA7XHJcbn1cclxuXHJcbm5nLW11bHRpc2VsZWN0LWRyb3Bkb3duIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAxOThweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZhLWNoZWNrLWNpcmNsZTpob3ZlciB7XHJcbiAgY29sb3I6IGRhcmtncmVlbiAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uZmEtY2FsZW5kYXI6aG92ZXIge1xyXG4gIGNvbG9yOiBtaWRuaWdodGJsdWUgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwPjpub3QoOmZpcnN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLW1lbnUpOm5vdCgudmFsaWQtdG9vbHRpcCk6bm90KC52YWxpZC1mZWVkYmFjayk6bm90KC5pbnZhbGlkLXRvb2x0aXApOm5vdCguaW52YWxpZC1mZWVkYmFjaykge1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cDpub3QoLmhhcy12YWxpZGF0aW9uKT4uZHJvcGRvd24tdG9nZ2xlOm50aC1sYXN0LWNoaWxkKG4rMyksXHJcbi5pbnB1dC1ncm91cDpub3QoLmhhcy12YWxpZGF0aW9uKT46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSk6bm90KC5kcm9wZG93bi1tZW51KSB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbiNjaXJjbGUge1xyXG4gIGNvbG9yOiAjM2U3NzU4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4vKiAuZmEtbWludXMtY2lyY2xlIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xyXG59ICovXHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxN3B4IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4jaGVhZGVyX2ZpeGVkIHtcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG59XHJcblxyXG4jdGJvZHkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbiN0Ym9keXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogNjVweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbiN0Ym9keURpc2Vhc2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTE2cHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbnRhYmxlIHRoZWFkLFxyXG50Ym9keSB0ciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWhlYWRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xyXG59XHJcblxyXG4vKiA6Om5nLWRlZXAubWF0LXRhYi1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDU1cHg7XHJcbn0gKi9cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGhlaWdodDogMjgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNzVweDtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAtMTJweCAwIDEuNWVtIDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 71093:
/*!*************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthForumModule": () => (/* binding */ HealthForumModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _health_forum_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-forum-routing.module */ 3741);
/* harmony import */ var _health_forum_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-forum.component */ 91699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sidebar/health-forum-search.pipe */ 14357);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health-forum-angular-mat-modal/health-forum-angular-mat-modal.component */ 69385);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);














class HealthForumModule {}
HealthForumModule.ɵfac = function HealthForumModule_Factory(t) {
  return new (t || HealthForumModule)();
};
HealthForumModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: HealthForumModule
});
HealthForumModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _health_forum_routing_module__WEBPACK_IMPORTED_MODULE_0__.HealthForumRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.NgMultiSelectDropDownModule.forRoot(), ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HealthForumModule, {
    declarations: [_health_forum_component__WEBPACK_IMPORTED_MODULE_1__.HealthForumComponent, _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_3__.healthForumFilterPipe, _health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_6__.HealthForumAngularMatModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _health_forum_routing_module__WEBPACK_IMPORTED_MODULE_0__.HealthForumRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.NgMultiSelectDropDownModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule]
  });
})();

/***/ }),

/***/ 71727:
/*!**************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthForumService": () => (/* binding */ HealthForumService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class HealthForumService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
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
HealthForumService.ɵfac = function HealthForumService_Factory(t) {
  return new (t || HealthForumService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
HealthForumService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: HealthForumService,
  factory: HealthForumService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 14357:
/*!********************************************************************!*\
  !*** ./src/app/modules/shared/sidebar/health-forum-search.pipe.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "healthForumFilterPipe": () => (/* binding */ healthForumFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

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
        return items.filter(item => filterKeys.reduce((x, keyName) => x && new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "", true));
      } else {
        return items.filter(item => {
          return filterKeys.some(keyName => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
          });
        });
      }
    }
  }
}
healthForumFilterPipe.ɵfac = function healthForumFilterPipe_Factory(t) {
  return new (t || healthForumFilterPipe)();
};
healthForumFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "healthForumFilter",
  type: healthForumFilterPipe,
  pure: true
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_health-forum_health-forum_module_ts.js.map