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
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group mat-align-tabs=\"center\" dynamicHeight (selectedTabChange)=\"tabChanged($event)\">\n    <mat-tab label=\"ABOUT ME\"></mat-tab>\n    <mat-tab label=\"PORTFOLIO\"></mat-tab>\n    <mat-tab label=\"AFTER WORK\"></mat-tab>\n</mat-tab-group>\n<div class=\"bounds\">\n    <div class=\"inner-bounds\">\n        <div class=\"content\">\n            <h1 class=\"header\"><span>#PAGE</span><span>NOT FOUND</span></h1>\n            <div class=\"main-content\">\n                <div class=\"content\">\n                    <div>\n                        <div class=\"not-found\"></div>\n                        <h1 class=\"e404\">404</h1>\n                    </div>\n                    <a class=\"main-color\" href=\"/\">Back to homepage</a>\n                </div>\n            </div>\n            <app-footer></app-footer>\n        </div>\n    </div>\n</div>\n");

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

/***/ "U5vU":
/*!******************************************************!*\
  !*** ./src/app/shared/not-found/not-found.module.ts ***!
  \******************************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.module */ "cNqA");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found.component */ "OoyU");





let NotFoundModule = class NotFoundModule {
};
NotFoundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]],
        imports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"]],
        exports: [_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]],
        providers: [],
        bootstrap: [],
    })
], NotFoundModule);



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
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.module */ "cNqA");
/* harmony import */ var _shared_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/not-found/not-found.module */ "U5vU");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["ScullyLibModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"], _shared_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "cNqA":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "jQpT");



let FooterModule = class FooterModule {
};
FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        imports: [],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        providers: [],
        bootstrap: [],
    })
], FooterModule);



/***/ }),

/***/ "f2YT":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\n    <div id=\"footer-contact\">\n        <div id=\"m-icon\">\n            <a class=\"m-icon gmail pointer\" href=\"https://mail.google.com/mail/?view=cm&fs=1&to=nhvu.95@gmail.com&su=HOW%20CAN%20I%20HELP%20U%3F\" target=\"_blank\"></a>\n        </div>\n        <div id=\"m-contact\" class=\"pointer\">\n            <h3><span class=\"fname\">VU HIEU</span><span class=\"sname\"> NGUYEN</span></h3>\n            <h3 class=\"email\">nhvu.95@gmail.com</h3>\n        </div>\n    </div>\n    <div id=\"footer-download-cv\">\n        <div\n            class=\"download pointer\"\n            onclick=\"window.open(\n                    'https://drive.google.com/file/d/1sNJLiX9THvwkWe3FFBDrOJPMWuLw9ykW/view?usp=sharing',\n                    '_blank'\n                  );\"></div>\n    </div>\n</div>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "f2YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let FooterComponent = class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



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
            let url = state.url.replace(/\?.*/, "");
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
        canActivate: [MainGuard],
        pathMatch: 'full'
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
/* harmony default export */ __webpack_exports__["default"] = (".e404 {\n  font-size: 200px !important;\n  margin-bottom: 0px;\n  line-height: 1em;\n  height: 1em;\n}\n\n.not-found {\n  width: 200px;\n  min-width: 200px;\n  height: 200px;\n  min-height: 200px;\n  background-image: url(\"/assets/images/not-found.svg\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n\n.main-content .content > div {\n  justify-content: center;\n  height: 100%;\n  margin-top: auto;\n  display: flex;\n}\n\n.main-content .content > a {\n  text-align: center;\n  margin-bottom: auto;\n  margin-top: 20px;\n  font-style: italic;\n  text-decoration: underline;\n  font-size: 20px;\n}\n\n@media screen and (max-width: 1279px) {\n  .not-found {\n    width: 10vw;\n    min-width: 30px;\n    height: 10vw;\n    min-height: 30px;\n  }\n\n  .e404 {\n    font-size: 10vw !important;\n    margin-bottom: 0px;\n    line-height: 1em;\n    height: 1em;\n  }\n\n  .main-content {\n    min-height: 70px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUVBLHFEQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBREo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBRU47O0VBQUU7SUFDSSwwQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VBR047O0VBREU7SUFDSSwyQkFBQTtFQUlOO0FBQ0YiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy9nbG9iYWwtdmFyLnNjc3NcIjtcblxuLmU0MDQge1xuICAgIGZvbnQtc2l6ZTogMjAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbn1cbi5ub3QtZm91bmQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9ub3QtZm91bmQuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5tYWluLWNvbnRlbnQgLmNvbnRlbnQgPiBkaXYge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbi1jb250ZW50IC5jb250ZW50ID4gYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgLm5vdC1mb3VuZCB7XG4gICAgICAgIHdpZHRoOiAxMHZ3O1xuICAgICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMTB2dztcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICB9XG4gICAgLmU0MDQge1xuICAgICAgICBmb250LXNpemU6IDEwdncgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */");

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