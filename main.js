(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/circleci/scully-personal-website/src/main.ts */"zUnb");


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
    production: false
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

/***/ "O5fe":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/not-found/not-found.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group mat-align-tabs=\"center\" dynamicHeight (selectedTabChange)=\"tabChanged($event)\">\n    <mat-tab label=\"ABOUT ME\"></mat-tab>\n    <mat-tab label=\"PORTFOLIO\"></mat-tab>\n    <mat-tab label=\"AFTER WORK\"></mat-tab>\n</mat-tab-group>\n<div class=\"bounds\" id=\"not-found\">\n    <div class=\"content\"   >\n        <h1  class=\"header\">\n            <span>#PAGE </span><span>NOT FOUND</span>\n        </h1>\n        <div  class=\"content\" >\n            <div style=\"justify-content: center; height: 100%; margin-top: auto\" >\n                <div class=\"not-found\"></div>\n                <h1 class=\"e404\">404</h1>\n            </div>\n            <a style=\"text-align: center;margin-bottom: auto; margin-top: 20px; font-style: italic; text-decoration: underline; font-size: 20px;\"\n                class=\"main-color\" href=\"/\">Back to homepage</a>\n        </div>\n        <div   class=\"footer\"  >\n            <div class=\"icon-container\" id=\"footer-contact\"  \n                >\n                <div >\n                    <a class=\"gmail\"\n                        href=\"https://mail.google.com/mail/?view=cm&fs=1&to=nhvu.95@gmail.com&su=HOW%20CAN%20I%20HELP%20U%3F\"\n                        target=\"_blank\"></a>\n                </div>\n                <div >\n                    <h3><span>VU HIEU</span><span> NGUYEN</span></h3>\n                    <h3>nhvu.95@gmail.com</h3>\n                </div>\n            </div>\n            <div   style=\"justify-content: flex-end;\"\n                >\n                <div class=\"download\">\n                </div>\n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "OoyU":
/*!*********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "O5fe");
/* harmony import */ var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component.scss */ "yONB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let NotFoundComponent = class NotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    tabChanged(tabChangeEvent) {
        let index = tabChangeEvent.index;
        switch (index) {
            case 0:
                this.router.navigateByUrl('/?index=0');
                break;
            case 1:
                this.router.navigateByUrl('/?index=1');
                break;
            case 2:
                this.router.navigateByUrl('/?index=2');
                break;
        }
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotFoundComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "OoyU");










let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["ScullyLibModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: BlogGuard, MainGuard, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogGuard", function() { return BlogGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainGuard", function() { return MainGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "OoyU");





let BlogGuard = class BlogGuard {
    constructor(router, scully) {
        this.router = router;
        this.scully = scully;
    }
    canActivate(route, state) {
        if (!route.firstChild || Object.keys(route.firstChild.params).length == 0) {
            this.router.navigateByUrl('/404');
            return false;
        }
        else {
            let url = state.url;
            this.scully.allRoutes$.subscribe(routes => {
                if (!routes.map(rout => rout.route).includes(url)) {
                    this.router.navigateByUrl('/404');
                    return false;
                }
            });
        }
        return true;
    }
};
BlogGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"] }
];
BlogGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BlogGuard);

let MainGuard = class MainGuard {
    constructor(router, scully) {
        this.router = router;
        this.scully = scully;
    }
    canActivate(route, state) {
        let url = state.url.replace(/\?.*$/, '');
        this.scully.allRoutes$.subscribe(routes => {
            if (!routes.map(rout => rout.route).includes(url)) {
                this.router.navigateByUrl('/404');
                return false;
            }
        });
        return true;
    }
};
MainGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"] }
];
MainGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MainGuard);

const routes = [
    {
        path: '', loadChildren: () => __webpack_require__.e(/*! import() | main-screen-main-screen-module */ "main-screen-main-screen-module").then(__webpack_require__.bind(null, /*! ./main-screen/main-screen.module */ "+FOH")).then(m => m.MainScreenModule),
        canActivate: [MainGuard]
    },
    {
        path: 'blog', loadChildren: () => __webpack_require__.e(/*! import() | blog-blog-module */ "blog-blog-module").then(__webpack_require__.bind(null, /*! ./blog/blog.module */ "U4+L")).then(m => m.BlogModule),
        canActivate: [BlogGuard]
    },
    {
        path: '**',
        redirectTo: '404'
    },
    {
        path: '404',
        component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })],
        providers: [BlogGuard, MainGuard],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "yONB":
/*!***********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bounds#not-found {\n  background: white;\n  background: linear-gradient(130deg, white 0%, rgba(0, 113, 123, 0.05) 50%, rgba(0, 113, 123, 0.05) 100%);\n  padding: 2rem 5rem !important;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  max-width: 1600px;\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  margin-bottom: 30px;\n}\n.bounds#not-found ::ng-deep h2,\n.bounds#not-found ::ng-deep h3 {\n  margin: 0 !important;\n}\n.bounds#not-found .icon .icon-container div,\n.bounds#not-found .footer .icon-container div {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n.bounds#not-found .footer .icon-container div:last-child {\n  display: flex !important;\n  flex-direction: column !important;\n  align-items: flex-start !important;\n}\n.bounds#not-found .footer .icon-container div:last-child h3 {\n  font-weight: lighter !important;\n  font-size: 24px !important;\n}\n.bounds#not-found .footer .icon-container div:last-child h3:first-child {\n  font-size: 30px !important;\n  font-weight: normal !important;\n}\n.bounds#not-found .footer .icon-container div:last-child h3:first-child span:last-child {\n  font-weight: lighter !important;\n}\n.bounds#not-found .footer > div {\n  margin-top: 1rem !important;\n}\n.bounds#not-found .strong {\n  font-weight: bold !important;\n}\n.bounds#not-found p {\n  text-align: justify;\n  font-weight: normal !important;\n}\n.bounds#not-found .center-item {\n  justify-content: center !important;\n}\n.bounds#not-found .e404 {\n  font-size: 100px !important;\n  margin-bottom: 0px;\n  line-height: 1em;\n  height: 1em;\n}\n.bounds#not-found .not-found {\n  width: 100px;\n  min-width: 100px;\n  height: 100px;\n  min-height: 100px;\n  margin-right: 10px;\n  background-image: url(\"/assets/images/not-found.svg\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n.bounds-xs#not-found {\n  padding: 1rem 2rem !important;\n}\n.bounds-xs#not-found .ava-container .avatar {\n  width: 230px !important;\n  height: 230px !important;\n}\n.bounds-xs#not-found .icon-container > div > div {\n  min-width: 65px !important;\n  width: 65px !important;\n  min-height: 65px !important;\n  height: 65px !important;\n}\n.bounds-xs#not-found .icon-container#footer-contact h3:first-child {\n  font-size: 24px !important;\n}\n.bounds-xs#not-found .icon-container#footer-contact h3:last-child {\n  font-size: 20px !important;\n}\n.bounds-xs#not-found .icon-container#footer-contact > div:first-child {\n  min-width: 65px !important;\n  max-width: 65px !important;\n  min-height: 65px !important;\n  max-height: 65px !important;\n  margin-right: 10px;\n}\n.bounds-xs#not-found .image-container .name#h2 {\n  font-size: 35px !important;\n}\n.bounds-xs#not-found .image-container .role#h3 {\n  font-size: 30px !important;\n}\n.bounds-xs#not-found .introduce {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0VBQ0Esd0dBQUE7RUFNQSw2QkFBQTtFQUNBLDRFQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVNJOztFQUVJLG9CQUFBO0FBUFI7QUFVSTs7RUFFSSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7QUFSUjtBQVVJO0VBQ0ksd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0FBUlI7QUFTUTtFQUNJLCtCQUFBO0VBQ0EsMEJBQUE7QUFQWjtBQVNRO0VBQ0ksMEJBQUE7RUFDQSw4QkFBQTtBQVBaO0FBUVk7RUFDSSwrQkFBQTtBQU5oQjtBQVVJO0VBQ0ksMkJBQUE7QUFSUjtBQVdJO0VBQ0ksNEJBQUE7QUFUUjtBQVdJO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtBQVRSO0FBV0k7RUFDSSxrQ0FBQTtBQVRSO0FBV0k7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBVFI7QUFXSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEscURBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFWUjtBQWNBO0VBQ0ksNkJBQUE7QUFYSjtBQWNRO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtBQVpaO0FBZUk7RUFDSSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQWJSO0FBZUk7RUFDSSwwQkFBQTtBQWJSO0FBZUk7RUFDSSwwQkFBQTtBQWJSO0FBZUk7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBYlI7QUFpQlE7RUFDSSwwQkFBQTtBQWZaO0FBaUJRO0VBQ0ksMEJBQUE7QUFmWjtBQWtCSTtFQUNJLGdCQUFBO0FBaEJSIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvZ2xvYmFsLXZhci5zY3NzXCI7XG5cbi5ib3VuZHMjbm90LWZvdW5kIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxMzBkZWcsXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsXG4gICAgICAgIHJnYmEoMCwgMTEzLCAxMjMsIDAuMDUpIDUwJSxcbiAgICAgICAgcmdiYSgwLCAxMTMsIDEyMywgMC4wNSkgMTAwJVxuICAgICk7XG4gICAgcGFkZGluZzogMnJlbSA1cmVtICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcblxuICAgIG1heC13aWR0aDogMTYwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgIDo6bmctZGVlcCBoMixcbiAgICA6Om5nLWRlZXAgaDMge1xuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaWNvbiAuaWNvbi1jb250YWluZXIgZGl2LFxuICAgIC5mb290ZXIgLmljb24tY29udGFpbmVyIGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZm9vdGVyIC5pY29uLWNvbnRhaW5lciBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaDM6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzcGFuOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvb3RlciA+IGRpdiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc3Ryb25nIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNlbnRlci1pdGVtIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmU0MDQge1xuICAgICAgICBmb250LXNpemU6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgfVxuICAgIC5ub3QtZm91bmQge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbm90LWZvdW5kLnN2Z1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uYm91bmRzLXhzI25vdC1mb3VuZCB7XG4gICAgcGFkZGluZzogMXJlbSAycmVtICFpbXBvcnRhbnQ7XG5cbiAgICAuYXZhLWNvbnRhaW5lciB7XG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDIzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDIzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmljb24tY29udGFpbmVyID4gZGl2ID4gZGl2IHtcbiAgICAgICAgbWluLXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pY29uLWNvbnRhaW5lciNmb290ZXItY29udGFjdCBoMzpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaWNvbi1jb250YWluZXIjZm9vdGVyLWNvbnRhY3QgaDM6bGFzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaWNvbi1jb250YWluZXIjZm9vdGVyLWNvbnRhY3QgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtaW4td2lkdGg6IDY1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWF4LXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIC5uYW1lI2gyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5yb2xlI2gzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pbnRyb2R1Y2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


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