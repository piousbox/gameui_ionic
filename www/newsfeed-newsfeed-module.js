(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsfeed-newsfeed-module"],{

/***/ "./src/app/newsfeed/newsfeed.module.ts":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.module.ts ***!
  \*********************************************/
/*! exports provided: NewsfeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPageModule", function() { return NewsfeedPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _newsfeed_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newsfeed.page */ "./src/app/newsfeed/newsfeed.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _newsfeed_page__WEBPACK_IMPORTED_MODULE_5__["NewsfeedPage"],
    },
];
var NewsfeedPageModule = /** @class */ (function () {
    function NewsfeedPageModule() {
    }
    NewsfeedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_newsfeed_page__WEBPACK_IMPORTED_MODULE_5__["NewsfeedPage"]]
        })
    ], NewsfeedPageModule);
    return NewsfeedPageModule;
}());



/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.html":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"newsitems.length == 0\" >\n  <br /><br /><br />\n  <h1>&nbsp; &nbsp; &nbsp; Loading...</h1>\n  <br /><br /><br />\n</div>\n\n<ion-content *ngIf='newsitems' >\n  <ion-list lines=\"none\" >\n    <ion-item class='item-borderless' *ngFor=\"let n of newsitems\">\n\n      <div padding class='flex-scroll-container' *ngIf=\"n.photos\" >\n        <ion-list lines=\"none\" class='flex-scroll' >\n          <ion-card padding class='medium-cover'>\n            <p><ion-icon slot=\"start\" name='camera'></ion-icon> &nbsp; {{ n.name }} ({{ n.photos.length }})</p>\n            <p>{{ n.created_at }}</p>\n          </ion-card>\n          <ion-item class='flex-scroll-inner' *ngFor=\"let ph of n.photos\">\n\n            <ion-card padding class='medium-photo'>\n              <img [src]=\"ph.small_url\" />\n            </ion-card>\n\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div padding class='flex-scroll-container' *ngIf=\"n.item_type=='video'\" >\n        <ion-list lines=\"none\" class='flex-scroll' >\n          <ion-card padding class='medium-cover'>\n            <p><ion-icon slot=\"start\" name='videocam'></ion-icon> &nbsp; {{ n.name }}</p>\n            <p>{{ n.created_at }}</p>\n          </ion-card>\n          <ion-card padding class='medium-video'>\n            <video src=\"{{ n.url }}\" width=\"100%\" controls ></video>\n          </ion-card>\n        </ion-list>\n      </div>\n\n    </ion-item>\n  </ion-list>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.scss":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.thumb {\n  height: 2rem;\n  float: left; }\n.flex-scroll-container {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  width: 100%;\n  height: 80vh;\n  padding-right: 0;\n  padding: 0;\n  margin-bottom: 15px; }\n/*\n[1]: Make a flex container so all our items align as necessary\n[2]: Prevent items from wrapping\n[3]: Automatic overflow means a scroll bar won’t be present if it isn’t needed\n[4]: Make it smooth scrolling on iOS devices\n[5]: Hide the ugly scrollbars in Edge until the scrollable area is hovered\n[6]: Hide the scroll bar in WebKit browsers\n*/\n.flex-scroll {\n  min-width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  /* [1] */\n  flex-wrap: nowrap;\n  /* [2] */\n  overflow-x: auto;\n  /* [3] */\n  -webkit-overflow-scrolling: touch;\n  /* [4] */\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  /* [5] */\n  padding: 0;\n  margin: 0; }\n.flex-scroll::-webkit-scrollbar {\n  display: none;\n  /* [6] */\n  height: 80vh; }\n.flex-scroll-inner {\n  padding-right: 0;\n  border: 0;\n  margin: auto; }\n.medium-cover {\n  background: #cecece;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-box-flex: 0;\n          flex: 0 0 0;\n  min-width: 16em;\n  height: 100%;\n  margin: 0; }\n.medium-photo {\n  padding: 2vh;\n  max-height: 80vh;\n  min-width: 20em;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid red;\n  /* flex: 0 0 0; */\n  margin: 0; }\n.medium-photo img {\n    margin: auto; }\n.medium-video {\n  background: #cecece;\n  min-height: 100%;\n  height: 100%;\n  min-width: 30em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 0 0 2em; }\n.medium-video video {\n  max-height: 70vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c2ZlZWQvbmV3c2ZlZWQucGFnZS5zY3NzIiwiL1VzZXJzL3Bpb3VzYm94L3Byb2plY3RzL25vZGUuanMvdGdtX2lvbmljL3NyYy9hcHAvbmV3c2ZlZWQvbmV3c2ZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0NqQjtFQUNFLGFBQVk7RUFDWixZQUFXLEVBQ1o7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsV0FBVTtFQUNWLG9CQUFtQixFQUNwQjtBQUVEOzs7Ozs7O0VBT0U7QUFDRjtFQUNFLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLHFCQUFhO0VBQWIsY0FBYTtFQUFFLFNBQVM7RUFDeEIsa0JBQWlCO0VBQUUsU0FBUztFQUM1QixpQkFBZ0I7RUFBRSxTQUFTO0VBQzNCLGtDQUFpQztFQUFFLFNBQVM7RUFDNUMsNkNBQTRDO0VBQUUsU0FBUztFQUV2RCxXQUFVO0VBQ1YsVUFBUyxFQUNWO0FBQ0Q7RUFDRSxjQUFhO0VBQUUsU0FBUztFQUN4QixhQUFZLEVBQ2I7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixVQUFTO0VBQ1QsYUFBWSxFQUNiO0FBS0Q7RUFDRSxvQkFBbUI7RUFDbkIscUJBQWlCO0tBQWpCLGtCQUFpQjtFQUNqQixvQkFBVztVQUFYLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGFBQVk7RUFDWixVQUFTLEVBQ1Y7QUFFRDtFQUNFLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixxQkFBaUI7S0FBakIsa0JBQWlCO0VBQ2pCLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBUyxFQUlWO0FBWEQ7SUFTSSxhQUFZLEVBQ2I7QUFFSDtFQUNFLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGdCQUFlO0VBQ2YscUJBQWE7RUFBYixjQUFhO0VBQ2IseUJBQXVCO1VBQXZCLHdCQUF1QjtFQUN2QiwwQkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLGtCQUFpQixFQUNsQjtBQUdEO0VBQ0UsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbmV3c2ZlZWQvbmV3c2ZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRodW1iIHtcbiAgaGVpZ2h0OiAycmVtO1xuICBmbG9hdDogbGVmdDsgfVxuXG4uZmxleC1zY3JvbGwtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cblxuLypcblsxXTogTWFrZSBhIGZsZXggY29udGFpbmVyIHNvIGFsbCBvdXIgaXRlbXMgYWxpZ24gYXMgbmVjZXNzYXJ5XG5bMl06IFByZXZlbnQgaXRlbXMgZnJvbSB3cmFwcGluZ1xuWzNdOiBBdXRvbWF0aWMgb3ZlcmZsb3cgbWVhbnMgYSBzY3JvbGwgYmFyIHdvbuKAmXQgYmUgcHJlc2VudCBpZiBpdCBpc27igJl0IG5lZWRlZFxuWzRdOiBNYWtlIGl0IHNtb290aCBzY3JvbGxpbmcgb24gaU9TIGRldmljZXNcbls1XTogSGlkZSB0aGUgdWdseSBzY3JvbGxiYXJzIGluIEVkZ2UgdW50aWwgdGhlIHNjcm9sbGFibGUgYXJlYSBpcyBob3ZlcmVkXG5bNl06IEhpZGUgdGhlIHNjcm9sbCBiYXIgaW4gV2ViS2l0IGJyb3dzZXJzXG4qL1xuLmZsZXgtc2Nyb2xsIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIFsxXSAqL1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgLyogWzJdICovXG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIC8qIFszXSAqL1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIC8qIFs0XSAqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgLyogWzVdICovXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDsgfVxuXG4uZmxleC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogWzZdICovXG4gIGhlaWdodDogODB2aDsgfVxuXG4uZmxleC1zY3JvbGwtaW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogYXV0bzsgfVxuXG4ubWVkaXVtLWNvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NlY2VjZTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGZsZXg6IDAgMCAwO1xuICBtaW4td2lkdGg6IDE2ZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwOyB9XG5cbi5tZWRpdW0tcGhvdG8ge1xuICBwYWRkaW5nOiAydmg7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG4gIG1pbi13aWR0aDogMjBlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgLyogZmxleDogMCAwIDA7ICovXG4gIG1hcmdpbjogMDsgfVxuICAubWVkaXVtLXBob3RvIGltZyB7XG4gICAgbWFyZ2luOiBhdXRvOyB9XG5cbi5tZWRpdW0tdmlkZW8ge1xuICBiYWNrZ3JvdW5kOiAjY2VjZWNlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzBlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDAgMmVtOyB9XG5cbi5tZWRpdW0tdmlkZW8gdmlkZW8ge1xuICBtYXgtaGVpZ2h0OiA3MHZoOyB9XG4iLCJcbi50aHVtYiB7XG4gIGhlaWdodDogMnJlbTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mbGV4LXNjcm9sbC1jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLypcblsxXTogTWFrZSBhIGZsZXggY29udGFpbmVyIHNvIGFsbCBvdXIgaXRlbXMgYWxpZ24gYXMgbmVjZXNzYXJ5XG5bMl06IFByZXZlbnQgaXRlbXMgZnJvbSB3cmFwcGluZ1xuWzNdOiBBdXRvbWF0aWMgb3ZlcmZsb3cgbWVhbnMgYSBzY3JvbGwgYmFyIHdvbuKAmXQgYmUgcHJlc2VudCBpZiBpdCBpc27igJl0IG5lZWRlZFxuWzRdOiBNYWtlIGl0IHNtb290aCBzY3JvbGxpbmcgb24gaU9TIGRldmljZXNcbls1XTogSGlkZSB0aGUgdWdseSBzY3JvbGxiYXJzIGluIEVkZ2UgdW50aWwgdGhlIHNjcm9sbGFibGUgYXJlYSBpcyBob3ZlcmVkXG5bNl06IEhpZGUgdGhlIHNjcm9sbCBiYXIgaW4gV2ViS2l0IGJyb3dzZXJzXG4qL1xuLmZsZXgtc2Nyb2xsIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7IC8qIFsxXSAqL1xuICBmbGV4LXdyYXA6IG5vd3JhcDsgLyogWzJdICovXG4gIG92ZXJmbG93LXg6IGF1dG87IC8qIFszXSAqL1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IC8qIFs0XSAqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjsgLyogWzVdICovXG5cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmZsZXgtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7IC8qIFs2XSAqL1xuICBoZWlnaHQ6IDgwdmg7XG59XG4uZmxleC1zY3JvbGwtaW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuXG5cblxuLm1lZGl1bS1jb3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjZWNlY2U7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmbGV4OiAwIDAgMDtcbiAgbWluLXdpZHRoOiAxNmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1lZGl1bS1waG90byB7XG4gIHBhZGRpbmc6IDJ2aDtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgbWluLXdpZHRoOiAyMGVtO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAwIDAgMDsgKi9cbiAgbWFyZ2luOiAwO1xuICBpbWcge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuLm1lZGl1bS12aWRlbyB7XG4gIGJhY2tncm91bmQ6ICNjZWNlY2U7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMCAyZW07XG59XG4ubWVkaXVtLXZpZGVvLWlubmVyIHtcbn1cbi5tZWRpdW0tdmlkZW8gdmlkZW8ge1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.ts":
/*!*******************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.ts ***!
  \*******************************************/
/*! exports provided: NewsfeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPage", function() { return NewsfeedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var NewsfeedPage = /** @class */ (function () {
    function NewsfeedPage(appService, nativeStorage, router, httpClient, toastController) {
        var _this = this;
        this.appService = appService;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.currentUser = null;
        this.newsitems = [];
        this.mainTitle = '';
        appService.setTitle('Newsfeed');
        this.mainTitle = 'Newsfeed';
        this.nativeStorage.getItem('current_user').then(function (data) {
            _this.currentUser = data;
            if ('facebook' == data.type) {
                var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('accessToken', data.accessToken);
                var answer = _this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].newsitemsPath, { params: params });
                answer.subscribe(function (data) {
                    if (data['newsitems']) {
                        _this.newsitems = data['newsitems'];
                    }
                }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                    var toast;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('+++ error from m3 1-:', JSON.stringify(error));
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'The token has expired? Please login.',
                                        duration: 2000
                                    })];
                            case 1:
                                toast = _a.sent();
                                toast.present();
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        }, function (error) { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('+++ newsfeed doesnt have current_user:', error);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'You are not logged in - please login.',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); });
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.ngOnInit();
            }
            // Instance of should be: 
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    NewsfeedPage.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.currentMessage.subscribe(function (message) {
            console.log('+++ new message:', message);
            if (message == _const__WEBPACK_IMPORTED_MODULE_7__["C"].didLogin) {
                _this.render();
            }
        });
    };
    NewsfeedPage.prototype.render = function () {
        var _this = this;
        this.nativeStorage.getItem('current_user').then(function (data) {
            _this.currentUser = data;
            if ('facebook' == data.type) {
                var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('accessToken', data.accessToken);
                var answer = _this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].newsitemsPath, { params: params });
                answer.subscribe(function (data) {
                    if (data['newsitems']) {
                        _this.newsitems = data['newsitems'];
                    }
                }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                    var toast;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('+++ error from m3 1-:', JSON.stringify(error));
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'The token has expired? Please login.',
                                        duration: 2000
                                    })];
                            case 1:
                                toast = _a.sent();
                                toast.present();
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        }, function (error) { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('+++ newsfeed doesnt have current_user:', error);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'You are not logged in - please login.',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    NewsfeedPage.prototype.ionViewDidLoad = function () {
        console.log('+++ newsfeed ionViewDidLoad');
    };
    NewsfeedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsfeed',
            template: __webpack_require__(/*! ./newsfeed.page.html */ "./src/app/newsfeed/newsfeed.page.html"),
            styles: [__webpack_require__(/*! ./newsfeed.page.scss */ "./src/app/newsfeed/newsfeed.page.scss")],
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], NewsfeedPage);
    return NewsfeedPage;
}());

/**
  ionViewDidLoad
  ionViewWillEnter
  ionViewDidEnter
  ionViewWillLeave
  ionViewDidLeave
  ionViewWillUnload
  ionViewCanEnter
*/


/***/ })

}]);
//# sourceMappingURL=newsfeed-newsfeed-module.js.map