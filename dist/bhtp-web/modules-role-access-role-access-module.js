(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-role-access-role-access-module"],{

/***/ "4KS8":
/*!**************************************************************!*\
  !*** ./src/app/modules/role-access/role-access.component.ts ***!
  \**************************************************************/
/*! exports provided: RoleAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAccessComponent", function() { return RoleAccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_modules_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/http/http.service */ "YwHQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _role_access_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role-access.service */ "vl9a");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RoleAccessComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", role_r3.roleMasterDTO.roleMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r3.roleMasterDTO.roleDescription, " ");
} }
function RoleAccessComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Role selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoleAccessComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoleAccessComponent_div_18_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.role.errors.required);
} }
function RoleAccessComponent_div_19_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Device selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoleAccessComponent_div_19_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoleAccessComponent_div_19_div_17_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.device.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function RoleAccessComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleAccessComponent_div_19_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeMainFunction($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Device Type :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RoleAccessComponent_div_19_Template_select_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changeDevice($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "-- Select device --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Web");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RoleAccessComponent_div_19_div_17_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "snzfdsbdfjhsjhjfh sahnfjhasdfhkafjkfjk safjgfjahsfjhfsjhfsjsf sadfjgfjhJFHJASHFJFH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r5.mainFunctionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.mainFunctionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r2.f.device.invalid && ctx_r2.f.device.touched, ctx_r2.f.device.valid && (ctx_r2.f.device.dirty || ctx_r2.f.device.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.device.errors);
} }
class RoleAccessComponent {
    // subFunctionsDropDown: any = [];
    // selectedSubFunction: string = ''
    // actionTypes: any = [];
    // roleList: RoleMasterDTO[];
    // roleAccessData: RoleFunctionMapDTO[];
    // roleAccessSaveObj: {
    //   dataAccessDTO: DataAccessDTO,
    //   roleFunctionMapDTOList: RoleFunctionMapDTO[];
    // }
    // abcd: string;
    constructor(httpService, route, roleService, fb) {
        this.httpService = httpService;
        this.route = route;
        this.roleService = roleService;
        this.fb = fb;
        this.roleList = [];
        this.roleFunctionMapView = [];
        this.mainFunctionList = [];
        this.webList = [];
        this.mobileList = [];
        this.subFunctionFilterList = [];
        // currentIndex : any = -1
        // main_functions: MainFunctionDTO[];
        // mainFunctionId: any = '';
        // subFunctions: SubFunctionMasterDTO[];
        this.subFunctionList = [];
    }
    ngOnInit() {
        this.createForm();
        // Api call for viewing rolefunctionmapview list
        let objs = { dataAccessDTO: this.httpService.dataAccessDTO };
        this.roleService.rolefunctionmapview(objs).subscribe((res) => {
            this.roleFunctionMapView = res.responseObject;
            console.log(this.roleFunctionMapView, 'roleFunctionMapView');
        });
        this.route.data.subscribe(data => {
            // this.menuData = data;
            console.log(data);
            //   this.roleAccessData = data.roleAcess.responseObject;
            //   console.log(this.roleAccessData);
            //   this.roleList = this.roleAccessData.map(item => item.roleMasterDTO);
            //   this.main_functions = this.roleAccessData[0].mainFunctionDTOList
        });
    }
    createForm() {
        this.roleAccessForm = this.fb.group({
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            device: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    get f() {
        return this.roleAccessForm.controls;
    }
    changeRole(roleId) {
        var _a;
        console.log(roleId);
        this.mainFunctionList = (_a = this.roleFunctionMapView.find(item => item.roleMasterDTO.roleMasterId == roleId)) === null || _a === void 0 ? void 0 : _a.mainFunctionDTOList;
        console.log(this.mainFunctionList, 'mainFunctionList');
        // this.subFunctionList = new Set(this.subFunctions.map(item => item.subFunctionShortName));
        // console.log(this.subFunctionList, 'subFunctionList');
        // this.mainFunctionList.filter((item=> item.))
        // var submasterList = []
        // this.mainFunctionList.filter(it=>{it.})
        // this.mainFunctionList?.forEach((item, i) => {
        //   var ListM = item.subFunctionMasterDTOList.filter(item => item.deviceType === "M")
        //   // console.log(ListM,'ListM');
        //   var li = ListM.filter((v, i, a) => a.findIndex(v2 => (v2.subFunctionShortName === v.subFunctionShortName)) === i);
        //   var ListW = item.subFunctionMasterDTOList.filter(item => item.deviceType === "W")
        //   console.log(li, 'ListW');
        // });
        // submasterList[0].filter(ite =>{ite.deviceType == "M"})
        // console.log(submasterList[0],"tty1");
        // var tt = submasterList.forEach(ii => {
        // })
        // console.log(submasterList,"tty1");
    }
    // setSubFunctionMenu(item) {
    //   console.log(item);
    //   this.subFunctions = item;
    //   this.subFunctionList = new Set(this.subFunctions.map(item => item.subFunctionShortName));
    //   console.log(this.subFunctionList, 'subFunctionList');
    // }
    // changeSubFunction(subFunctionName) {
    //   console.log(subFunctionName);
    //   this.accessType = this.subFunctions.filter(item => item.subFunctionShortName == subFunctionName);
    //   console.log(this.accessType);
    //   //   this.actionTypes = this.subFunctions.filter(item => item.subFunctionShortName === this.selectedSubFunction)
    //   //   console.log(this.actionTypes);
    // }
    // getSubFunctions() {
    //   this.subFunctions = this.roleAccessData[0].mainFunctionDTOList.find(item => item.mainFunctionMasterId === this.mainFunctionId).subFunctionMasterDTOList;
    //   this.subFunctionsDropDown = new Set(this.subFunctions.map(item => item.subFunctionShortName));
    // }
    // createTableRows() {
    //   this.actionTypes = this.subFunctions.filter(item => item.subFunctionShortName === this.selectedSubFunction)
    //   console.log(this.actionTypes);
    // }
    // assignAccess(subFunctionId, roleIndex, event) {
    //   let checked = event.target.checked;
    //   let item = this.roleAccessData[roleIndex].mainFunctionDTOList.find(
    //     item => item.mainFunctionMasterId === this.mainFunctionId
    //   ).subFunctionMasterDTOList.find(item => item.subFunctionMasterId === subFunctionId)
    //   if (checked)
    //     item.roleActiveFlag = 'Y'
    //   else
    //     item.roleActiveFlag = 'N'
    //   // console.log(item);
    //   console.log(this.roleAccessData);
    // }
    // checkStatus(subFunctionId, roleIndex): any {
    //   let flag = this.roleAccessData[roleIndex].mainFunctionDTOList.find(
    //     item => item.mainFunctionMasterId === this.mainFunctionId
    //   ).subFunctionMasterDTOList.find(item => item.subFunctionMasterId === subFunctionId).roleActiveFlag
    //   // console.log(flag);
    //   if (flag === 'Y')
    //     return true
    //   else
    //     return false
    // }
    // save() {
    //   this.roleAccessSaveObj = {
    //     dataAccessDTO: this.httpService.dataAccessDTO,
    //     roleFunctionMapDTOList: this.roleAccessData
    //   };
    //   console.log(this.roleAccessSaveObj);
    //   this.httpService.postRequest(`rolesubfunctionmap/save`, this.roleAccessSaveObj).subscribe((data) => {
    //     console.log(data)
    //   },
    //     (error) => {
    //       console.log(error);
    //     })
    // }
    changeMainFunction(mainFunctionId) {
        var _a;
        var coll = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function (e) {
                // before opening the accordion, you close everything
                for (var j = 0; j < coll.length; j++) {
                    coll[j].classList.remove("active");
                    // coll[j].nextElementSibling.style.maxHeight = null;
                }
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                }
                else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
        // for (i = 0; i < coll.length; i++) {
        //   coll[i].addEventListener("click", function () {
        //     this.classList.toggle("active");
        //     var content = this.nextElementSibling;
        //     if (content.style.maxHeight) {
        //       content.style.maxHeight = null;
        //     } else {
        //       content.style.maxHeight = content.scrollHeight + "px";
        //     }
        //   });
        // }
        console.log(mainFunctionId);
        this.subFunctionList = (_a = this.mainFunctionList.find(item => item.mainFunctionMasterId == mainFunctionId)) === null || _a === void 0 ? void 0 : _a.subFunctionMasterDTOList;
        // this.subFunctionFilterList = new Set(this.subFunctionList.map(item => item.subFunctionShortName))
        console.log(this.subFunctionList, ' this.subFunctionList');
        console.log(this.subFunctionFilterList, 'this.subFunctionFilterList');
        // this.subFunctionList = new Set(this.subFunctions.map(item => item.subFunctionShortName));
        // console.log(this.subFunctionList, 'subFunctionList');
    }
    changeDevice(deviceId) {
        console.log(deviceId);
        // this.roleAccessForm.controls.deviceType.setValue('');
        //   var WData = this.subFunctionList.filter((item) => item.deviceType == 'W');
        //   // this.webList = new Set(WData.map(item => item.subFunctionShortName));
        //   this.webList = WData.filter((v, i, a) => a.findIndex(v2 => (v2.subFunctionShortName === v.subFunctionShortName)) === i);
        //   console.log(this.webList, 'weblist');
        //   var Mdata = this.subFunctionList.filter((item) => item.deviceType == 'M');
        //   this.mobileList = Mdata.filter((v, i, a) => a.findIndex(v2 => (v2.subFunctionShortName === v.subFunctionShortName)) === i);
        //   console.log(this.mobileList, 'this.mobileList');
        //   if (deviceId == 1) {
        //     this.subFunctionFilterList = this.webList;
        //   } else if (deviceId == 2) {
        //     this.subFunctionFilterList = this.mobileList;
        //   }
    }
}
RoleAccessComponent.ɵfac = function RoleAccessComponent_Factory(t) { return new (t || RoleAccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_role_access_service__WEBPACK_IMPORTED_MODULE_4__["RoleAccessService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RoleAccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleAccessComponent, selectors: [["app-role-access"]], decls: 21, vars: 8, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md-4"], ["for", "role"], [1, "text-danger"], ["formControlName", "role", "id", "role", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "row", 4, "ngFor", "ngForOf"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [1, "collapsible", 3, "value", "click"], [1, "content"], [1, "form-group", "col-md-4", 2, "float", "right"], ["for", "device"], ["formControlName", "device", "id", "device", 1, "form-select", 3, "ngClass", "change"], ["value", "1"], ["value", "2"]], template: function RoleAccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Role Menu Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Role :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RoleAccessComponent_Template_select_change_14_listener($event) { return ctx.changeRole($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-- Select Role --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RoleAccessComponent_option_17_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RoleAccessComponent_div_18_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RoleAccessComponent_div_19_Template, 20, 7, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.roleAccessForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.f.role.invalid && ctx.f.role.touched, ctx.f.role.valid && (ctx.f.role.dirty || ctx.f.role.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roleFunctionMapView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.role.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mainFunctionList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["th[_ngcontent-%COMP%] {\r\n    white-space: break-spaces !important;\r\n    padding: 15px !important;\r\n    font-size: 16px !important;\r\n    text-align: center;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:nth-child(1) {\r\n    font-size: 18px !important;\r\n}\r\n\r\n\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n    \r\n    height: 8px;\r\n    background: transparent;\r\n    \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    width: 30px;\r\n    \r\n    height: 30px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: rgb(158, 1, 1);\r\n}\r\n\r\n.collapsible[_ngcontent-%COMP%] {\r\n    background-color: #777;\r\n    color: white;\r\n    cursor: pointer;\r\n    padding: 18px;\r\n    width: 100%;\r\n    border: none;\r\n    text-align: left;\r\n    outline: none;\r\n    font-size: 15px;\r\n  }\r\n\r\n.active[_ngcontent-%COMP%], .collapsible[_ngcontent-%COMP%]:hover {\r\n    background-color: #555;\r\n  }\r\n\r\n.collapsible[_ngcontent-%COMP%]:after {\r\n    content: '\\002B';\r\n    color: white;\r\n    font-weight: bold;\r\n    float: right;\r\n    margin-left: 5px;\r\n  }\r\n\r\n.active[_ngcontent-%COMP%]:after {\r\n    content: \"\\2212\";\r\n  }\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    padding: 0 18px;\r\n    max-height: 0;\r\n    overflow: hidden;\r\n    transition: max-height 0.2s ease-out;\r\n    background-color: #f1f1f1;\r\n  }\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.5rem;\r\n  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGUtYWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7Ozs7OztJQU1JOztBQUVKO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBLGdEQUFnRDs7QUFDaEQ7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLHFCQUFxQjs7RUFFdkIiLCJmaWxlIjoicm9sZS1hY2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoIHtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXMgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogIFxyXG50YWJsZSB0Ym9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59ICAqL1xyXG5cclxudGFibGUgdGhlYWQsIHRib2R5IHRyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLyogT3B0aW9uYWw6IGp1c3QgbWFrZSBzY3JvbGxiYXIgaW52aXNpYmxlICovXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBPcHRpb25hbDogc2hvdyBwb3NpdGlvbiBpbmRpY2F0b3IgaW4gY29sb3VyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1OCwgMSwgMSk7XHJcbn1cclxuXHJcbi5jb2xsYXBzaWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmUsIC5jb2xsYXBzaWJsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gIH1cclxuICBcclxuICAuY29sbGFwc2libGU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ1xcMDAyQic7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXDIyMTJcIjtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMCAxOHB4O1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIFxyXG4gIH1cclxuICBcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleAccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-role-access',
                templateUrl: './role-access.component.html',
                styleUrls: ['./role-access.component.css']
            }]
    }], function () { return [{ type: src_app_modules_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _role_access_service__WEBPACK_IMPORTED_MODULE_4__["RoleAccessService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "GKXY":
/*!*******************************************************************!*\
  !*** ./src/app/modules/role-access/role-access-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RoleAccessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAccessRoutingModule", function() { return RoleAccessRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _role_access_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-access.component */ "4KS8");





const routes = [{ path: '', component: _role_access_component__WEBPACK_IMPORTED_MODULE_2__["RoleAccessComponent"] },];
class RoleAccessRoutingModule {
}
RoleAccessRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoleAccessRoutingModule });
RoleAccessRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoleAccessRoutingModule_Factory(t) { return new (t || RoleAccessRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleAccessRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleAccessRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
        this.testUrl = `http://192.168.149.221:8085/`;
        this.dataAccessDTO = {
            userId: this.sidebarService.userId,
            userName: this.sidebarService.loginId,
        };
        this.dataAccessDTOO = {
            userId: 5,
            userName: 'BK000005'
        };
    }
    postRequest(url, body) {
        return this.http.post(this.testUrl + url, body, { headers: this.headers });
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

/***/ "dmim":
/*!***********************************************************!*\
  !*** ./src/app/modules/role-access/role-access.module.ts ***!
  \***********************************************************/
/*! exports provided: RoleAccessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAccessModule", function() { return RoleAccessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _role_access_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-access-routing.module */ "GKXY");
/* harmony import */ var _role_access_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-access.component */ "4KS8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");








class RoleAccessModule {
}
RoleAccessModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoleAccessModule });
RoleAccessModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoleAccessModule_Factory(t) { return new (t || RoleAccessModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _role_access_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleAccessRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleAccessModule, { declarations: [_role_access_component__WEBPACK_IMPORTED_MODULE_3__["RoleAccessComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _role_access_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleAccessRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleAccessModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_role_access_component__WEBPACK_IMPORTED_MODULE_3__["RoleAccessComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _role_access_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleAccessRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vl9a":
/*!************************************************************!*\
  !*** ./src/app/modules/role-access/role-access.service.ts ***!
  \************************************************************/
/*! exports provided: RoleAccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAccessService", function() { return RoleAccessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class RoleAccessService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    roleList(obj) {
        return this.http.post(`${this.baseURL}rolemaster/list`, obj);
    }
    rolefunctionmapview(obj) {
        return this.http.post(`${this.baseURL}rolemaster/rolefunctionmap/view`, obj);
    }
}
RoleAccessService.ɵfac = function RoleAccessService_Factory(t) { return new (t || RoleAccessService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RoleAccessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoleAccessService, factory: RoleAccessService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleAccessService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-role-access-role-access-module.js.map