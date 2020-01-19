(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CitiesComponent-cities-module"],{

/***/ "./src/app/CitiesComponent/CitiesIndex.page.html":
/*!*******************************************************!*\
  !*** ./src/app/CitiesComponent/CitiesIndex.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  Cities index\n  <ul>\n    <li>\n      <ion-item button (click)=\"navigate('/en/cities/travel-to/Chicago')\">\n      <ion-icon slot=\"start\" name='person'></ion-icon><ion-label>Chicago</ion-label></ion-item>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/CitiesComponent/CitiesIndex.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/CitiesComponent/CitiesIndex.page.ts ***!
  \*****************************************************/
/*! exports provided: CitiesIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesIndexPage", function() { return CitiesIndexPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CitiesIndexPage = /** @class */ (function () {
    function CitiesIndexPage(nativeStorage, appService, router, httpClient) {
        this.nativeStorage = nativeStorage;
        this.appService = appService;
        this.router = router;
        this.httpClient = httpClient;
    }
    CitiesIndexPage.prototype.navigate = function (where) {
        this.router.navigate([where]);
    };
    CitiesIndexPage.prototype.ngOnInit = function () { };
    CitiesIndexPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cities-index',
            template: __webpack_require__(/*! ./CitiesIndex.page.html */ "./src/app/CitiesComponent/CitiesIndex.page.html"),
        }),
        __metadata("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CitiesIndexPage);
    return CitiesIndexPage;
}());



/***/ }),

/***/ "./src/app/CitiesComponent/CitiesShow.page.html":
/*!******************************************************!*\
  !*** ./src/app/CitiesComponent/CitiesShow.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  City page! {{ cityName }}\n</div>\n"

/***/ }),

/***/ "./src/app/CitiesComponent/CitiesShow.page.ts":
/*!****************************************************!*\
  !*** ./src/app/CitiesComponent/CitiesShow.page.ts ***!
  \****************************************************/
/*! exports provided: CitiesShowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesShowPage", function() { return CitiesShowPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CitiesShowPage = /** @class */ (function () {
    function CitiesShowPage(nativeStorage, appService, route, router, httpClient) {
        this.nativeStorage = nativeStorage;
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this.cityName = '<No City>';
    }
    CitiesShowPage.prototype.ngOnInit = function () {
        // this.cityName = this.route.snapshot.paramMap.get('city_name');
    };
    CitiesShowPage.prototype.navigate = function (where) { };
    CitiesShowPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cities-show',
            template: __webpack_require__(/*! ./CitiesShow.page.html */ "./src/app/CitiesComponent/CitiesShow.page.html"),
        }),
        __metadata("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CitiesShowPage);
    return CitiesShowPage;
}());



/***/ }),

/***/ "./src/app/CitiesComponent/cities.module.ts":
/*!**************************************************!*\
  !*** ./src/app/CitiesComponent/cities.module.ts ***!
  \**************************************************/
/*! exports provided: CitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesModule", function() { return CitiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _CitiesIndex_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CitiesIndex.page */ "./src/app/CitiesComponent/CitiesIndex.page.ts");
/* harmony import */ var _CitiesShow_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CitiesShow.page */ "./src/app/CitiesComponent/CitiesShow.page.ts");
/* harmony import */ var _comp2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp2 */ "./src/app/CitiesComponent/comp2.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _CitiesIndex_page__WEBPACK_IMPORTED_MODULE_5__["CitiesIndexPage"], },
    { path: 'travel-to/:city_name', component: _CitiesShow_page__WEBPACK_IMPORTED_MODULE_6__["CitiesShowPage"], },
];
var CitiesModule = /** @class */ (function () {
    function CitiesModule() {
    }
    CitiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_CitiesIndex_page__WEBPACK_IMPORTED_MODULE_5__["CitiesIndexPage"], _CitiesShow_page__WEBPACK_IMPORTED_MODULE_6__["CitiesShowPage"], _comp2__WEBPACK_IMPORTED_MODULE_7__["CitiesComponent2"]]
        })
    ], CitiesModule);
    return CitiesModule;
}());



/***/ }),

/***/ "./src/app/CitiesComponent/comp2.ts":
/*!******************************************!*\
  !*** ./src/app/CitiesComponent/comp2.ts ***!
  \******************************************/
/*! exports provided: CitiesComponent2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesComponent2", function() { return CitiesComponent2; });
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

var CitiesComponent2 = /** @class */ (function () {
    function CitiesComponent2() {
    }
    CitiesComponent2.prototype.ngOnInit = function () { };
    CitiesComponent2.prototype.navigate = function (where) { };
    CitiesComponent2 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./CitiesIndex.page.html */ "./src/app/CitiesComponent/CitiesIndex.page.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CitiesComponent2);
    return CitiesComponent2;
}());



/***/ })

}]);
//# sourceMappingURL=CitiesComponent-cities-module.js.map