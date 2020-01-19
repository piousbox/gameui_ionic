(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-navigator-page1-page1-module"],{

/***/ "./src/app/main-navigator/page1/page1.module.ts":
/*!******************************************************!*\
  !*** ./src/app/main-navigator/page1/page1.module.ts ***!
  \******************************************************/
/*! exports provided: Page1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1PageModule", function() { return Page1PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _page1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page1.page */ "./src/app/main-navigator/page1/page1.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _page1_page__WEBPACK_IMPORTED_MODULE_5__["Page1Page"], },
];
var Page1PageModule = /** @class */ (function () {
    function Page1PageModule() {
    }
    Page1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_page1_page__WEBPACK_IMPORTED_MODULE_5__["Page1Page"]]
        })
    ], Page1PageModule);
    return Page1PageModule;
}());



/***/ }),

/***/ "./src/app/main-navigator/page1/page1.page.html":
/*!******************************************************!*\
  !*** ./src/app/main-navigator/page1/page1.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>page1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/main-navigator/page1/page1.page.scss":
/*!******************************************************!*\
  !*** ./src/app/main-navigator/page1/page1.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tbmF2aWdhdG9yL3BhZ2UxL3BhZ2UxLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main-navigator/page1/page1.page.ts":
/*!****************************************************!*\
  !*** ./src/app/main-navigator/page1/page1.page.ts ***!
  \****************************************************/
/*! exports provided: Page1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Page", function() { return Page1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page1Page = /** @class */ (function () {
    function Page1Page() {
    }
    Page1Page.prototype.ngOnInit = function () {
    };
    Page1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page1',
            template: __webpack_require__(/*! ./page1.page.html */ "./src/app/main-navigator/page1/page1.page.html"),
            styles: [__webpack_require__(/*! ./page1.page.scss */ "./src/app/main-navigator/page1/page1.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], Page1Page);
    return Page1Page;
}());



/***/ })

}]);
//# sourceMappingURL=main-navigator-page1-page1-module.js.map