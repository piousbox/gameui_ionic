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
        component: _newsfeed_page__WEBPACK_IMPORTED_MODULE_5__["NewsfeedPage"]
    }
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

module.exports = "\n<div *ngIf=\"!newsitems\" >No newsitems</div>\n\n<ion-content *ngIf='newsitems' >\n  <ion-list lines=\"none\" >\n    <ion-item class='item-borderless' *ngFor=\"let n of newsitems\">\n\n      <div padding class='flex-scroll-container' *ngIf=\"n.photos\" >\n        <ion-list lines=\"none\" class='flex-scroll' >\n          <ion-card padding class='medium-cover'>\n            <p><ion-icon slot=\"start\" name='camera'></ion-icon> &nbsp; {{ n.name }} ({{ n.photos.length }})</p>\n            <p>{{ n.created_at }}</p>\n          </ion-card>\n          <ion-item class='flex-scroll-inner' *ngFor=\"let ph of n.photos\">\n\n            <ion-card class='medium-video' padding class='medium-photo'>\n              <img [src]=\"ph.small_url\" />\n            </ion-card>\n\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div padding class='flex-scroll-container' *ngIf=\"n.item_type=='video'\" >\n        <ion-list lines=\"none\" class='flex-scroll' >\n          <ion-card padding class='medium-cover'>\n            <p><ion-icon slot=\"start\" name='videocam'></ion-icon> &nbsp; {{ n.name }}</p>\n            <p>{{ n.created_at }}</p>\n          </ion-card>\n          <ion-card padding class='medium-video'>\n            <video src=\"{{ n.url }}\" width=\"100%\" controls ></video>\n          </ion-card>\n        </ion-list>\n      </div>\n\n    </ion-item>\n  </ion-list>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.scss":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.thumb {\n  height: 2rem;\n  float: left; }\n.flex-scroll-container {\n  overflow: scroll;\n  width: 100%;\n  height: 80vh;\n  padding-right: 0; }\n/*\n[1]: Make a flex container so all our items align as necessary\n[2]: Prevent items from wrapping\n[3]: Automatic overflow means a scroll bar won’t be present if it isn’t needed\n[4]: Make it smooth scrolling on iOS devices\n[5]: Hide the ugly scrollbars in Edge until the scrollable area is hovered\n[6]: Hide the scroll bar in WebKit browsers\n*/\n.flex-scroll {\n  min-width: 100%;\n  display: flex;\n  /* [1] */\n  flex-wrap: nowrap;\n  /* [2] */\n  overflow-x: auto;\n  /* [3] */\n  -webkit-overflow-scrolling: touch;\n  /* [4] */\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  /* [5] */\n  padding: 0;\n  margin: 0; }\n.flex-scroll::-webkit-scrollbar {\n  display: none;\n  /* [6] */\n  height: 100%; }\n.flex-scroll-inner {\n  padding-right: 0;\n  border: 0; }\n.medium-cover {\n  background: #cecece;\n  -o-object-fit: cover;\n     object-fit: cover;\n  flex: 0 0 0;\n  min-width: 16em;\n  height: 100%;\n  margin: 0; }\n.medium-photo {\n  min-height: 100%;\n  min-width: 20em;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid red;\n  flex: 0 0 0; }\n.medium-video {\n  background: #cecece;\n  min-height: 100%;\n  height: 100%;\n  min-width: 30em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 0 2em; }\n.medium-video video {\n  max-height: 70vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c2ZlZWQvbmV3c2ZlZWQucGFnZS5zY3NzIiwiL1VzZXJzL3Bpb3VzYm94L3Byb2plY3RzL25vZGUuanMvdGdtX2lvbmljL3NyYy9hcHAvbmV3c2ZlZWQvbmV3c2ZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0NqQjtFQUNFLGFBQVk7RUFDWixZQUFXLEVBQ1o7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGlCQUFnQixFQUVqQjtBQUVEOzs7Ozs7O0VBT0U7QUFDRjtFQUNFLGdCQUFlO0VBQ2YsY0FBYTtFQUFFLFNBQVM7RUFDeEIsa0JBQWlCO0VBQUUsU0FBUztFQUM1QixpQkFBZ0I7RUFBRSxTQUFTO0VBQzNCLGtDQUFpQztFQUFFLFNBQVM7RUFDNUMsNkNBQTRDO0VBQUUsU0FBUztFQUV2RCxXQUFVO0VBQ1YsVUFBUyxFQUNWO0FBQ0Q7RUFDRSxjQUFhO0VBQUUsU0FBUztFQUN4QixhQUFZLEVBQ2I7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixVQUFTLEVBQ1Y7QUFLRDtFQUNFLG9CQUFtQjtFQUNuQixxQkFBaUI7S0FBakIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGFBQVk7RUFDWixVQUFTLEVBQ1Y7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLHFCQUFpQjtLQUFqQixrQkFBaUI7RUFDakIsc0JBQXFCO0VBQ3JCLFlBQVcsRUFDWjtBQUNEO0VBQ0Usb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osZ0JBQWU7RUFDZixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixrQkFBaUIsRUFDbEI7QUFHRDtFQUNFLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL25ld3NmZWVkL25ld3NmZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50aHVtYiB7XG4gIGhlaWdodDogMnJlbTtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmZsZXgtc2Nyb2xsLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cblxuLypcblsxXTogTWFrZSBhIGZsZXggY29udGFpbmVyIHNvIGFsbCBvdXIgaXRlbXMgYWxpZ24gYXMgbmVjZXNzYXJ5XG5bMl06IFByZXZlbnQgaXRlbXMgZnJvbSB3cmFwcGluZ1xuWzNdOiBBdXRvbWF0aWMgb3ZlcmZsb3cgbWVhbnMgYSBzY3JvbGwgYmFyIHdvbuKAmXQgYmUgcHJlc2VudCBpZiBpdCBpc27igJl0IG5lZWRlZFxuWzRdOiBNYWtlIGl0IHNtb290aCBzY3JvbGxpbmcgb24gaU9TIGRldmljZXNcbls1XTogSGlkZSB0aGUgdWdseSBzY3JvbGxiYXJzIGluIEVkZ2UgdW50aWwgdGhlIHNjcm9sbGFibGUgYXJlYSBpcyBob3ZlcmVkXG5bNl06IEhpZGUgdGhlIHNjcm9sbCBiYXIgaW4gV2ViS2l0IGJyb3dzZXJzXG4qL1xuLmZsZXgtc2Nyb2xsIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBbMV0gKi9cbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIC8qIFsyXSAqL1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAvKiBbM10gKi9cbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAvKiBbNF0gKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG4gIC8qIFs1XSAqL1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7IH1cblxuLmZsZXgtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIFs2XSAqL1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLmZsZXgtc2Nyb2xsLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgYm9yZGVyOiAwOyB9XG5cbi5tZWRpdW0tY292ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2VjZWNlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZmxleDogMCAwIDA7XG4gIG1pbi13aWR0aDogMTZlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7IH1cblxuLm1lZGl1bS1waG90byB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMjBlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgZmxleDogMCAwIDA7IH1cblxuLm1lZGl1bS12aWRlbyB7XG4gIGJhY2tncm91bmQ6ICNjZWNlY2U7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMCAyZW07IH1cblxuLm1lZGl1bS12aWRlbyB2aWRlbyB7XG4gIG1heC1oZWlnaHQ6IDcwdmg7IH1cbiIsIlxuLnRodW1iIHtcbiAgaGVpZ2h0OiAycmVtO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZsZXgtc2Nyb2xsLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG5cbn1cblxuLypcblsxXTogTWFrZSBhIGZsZXggY29udGFpbmVyIHNvIGFsbCBvdXIgaXRlbXMgYWxpZ24gYXMgbmVjZXNzYXJ5XG5bMl06IFByZXZlbnQgaXRlbXMgZnJvbSB3cmFwcGluZ1xuWzNdOiBBdXRvbWF0aWMgb3ZlcmZsb3cgbWVhbnMgYSBzY3JvbGwgYmFyIHdvbuKAmXQgYmUgcHJlc2VudCBpZiBpdCBpc27igJl0IG5lZWRlZFxuWzRdOiBNYWtlIGl0IHNtb290aCBzY3JvbGxpbmcgb24gaU9TIGRldmljZXNcbls1XTogSGlkZSB0aGUgdWdseSBzY3JvbGxiYXJzIGluIEVkZ2UgdW50aWwgdGhlIHNjcm9sbGFibGUgYXJlYSBpcyBob3ZlcmVkXG5bNl06IEhpZGUgdGhlIHNjcm9sbCBiYXIgaW4gV2ViS2l0IGJyb3dzZXJzXG4qL1xuLmZsZXgtc2Nyb2xsIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4OyAvKiBbMV0gKi9cbiAgZmxleC13cmFwOiBub3dyYXA7IC8qIFsyXSAqL1xuICBvdmVyZmxvdy14OiBhdXRvOyAvKiBbM10gKi9cbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyAvKiBbNF0gKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7IC8qIFs1XSAqL1xuXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5mbGV4LXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lOyAvKiBbNl0gKi9cbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZsZXgtc2Nyb2xsLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5cblxuXG4ubWVkaXVtLWNvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NlY2VjZTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGZsZXg6IDAgMCAwO1xuICBtaW4td2lkdGg6IDE2ZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWVkaXVtLXBob3RvIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAyMGVtO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBmbGV4OiAwIDAgMDtcbn1cbi5tZWRpdW0tdmlkZW8ge1xuICBiYWNrZ3JvdW5kOiAjY2VjZWNlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzBlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDAgMmVtO1xufVxuLm1lZGl1bS12aWRlby1pbm5lciB7XG59XG4ubWVkaXVtLXZpZGVvIHZpZGVvIHtcbiAgbWF4LWhlaWdodDogNzB2aDtcbn1cbiJdfQ== */"

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
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsfeedPage = /** @class */ (function () {
    function NewsfeedPage(nativeStorage, appService, router, httpClient) {
        var _this = this;
        this.nativeStorage = nativeStorage;
        this.appService = appService;
        this.router = router;
        this.httpClient = httpClient;
        this.currentUser = null;
        this.newsitems = [];
        this.mainTitle = '';
        // console.log('+++ newsfeed constructor');
        appService.setTitle('Newsfeed');
        this.mainTitle = 'Newsfeed';
        this.nativeStorage.getItem('current_user').then(function (data) {
            _this.currentUser = data;
            // console.log('+++ newsfeed currentUser:', data);
            if ('facebook' == data.type) {
                var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('accessToken', data.accessToken);
                var answer = _this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].newsitemsPath, { params: params });
                answer.subscribe(function (data) {
                    if (data['newsitems']) {
                        _this.newsitems = data['newsitems'];
                    }
                }, function (error) {
                    console.log('+++ error from m3 1-:', JSON.stringify(error));
                });
            }
        }, function (error) {
            console.log('+++ newsfeed doesnt have current_user:', error);
        });
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
        // console.log('+++ newsfeed ngOnInit');
        /* this.platform.ready().then(() => {
          this.appService.setTitle('Account');
        }); */
    };
    NewsfeedPage.prototype.ionViewDidLoad = function () {
        //console.log('+++ newsfeed ionViewDidLoad');
        /* this.nativeStorage.getItem('current_user').then(data => {
          this.currentUser = data;
          console.log('+++ newsfeed:', data);
    
          if ('facebook' == data.type) {
            const params = new HttpParams().set('accessToken', data.accessToken)
            const answer = this.httpClient.get(environment.newsitemsPath, { params: params })
            answer.subscribe(data => {
              console.log('+++ from m3: ', data);
              
              if (data['newsitems']) {
                this.newsitems = data['newsitems'];
              }
            }, error => {
              console.log('+++ error from m3 -+-+:', error)
            });
          }
        }, error => {
          console.log('+++ newsfeed doesnt have current_user:', error);
        }); */
    };
    NewsfeedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsfeed',
            template: __webpack_require__(/*! ./newsfeed.page.html */ "./src/app/newsfeed/newsfeed.page.html"),
            styles: [__webpack_require__(/*! ./newsfeed.page.scss */ "./src/app/newsfeed/newsfeed.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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