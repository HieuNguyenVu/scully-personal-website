(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-screen-main-screen-module"],{

/***/ "+FOH":
/*!***************************************************!*\
  !*** ./src/app/main-screen/main-screen.module.ts ***!
  \***************************************************/
/*! exports provided: MainScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainScreenModule", function() { return MainScreenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _after_work_after_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./after-work/after-work.component */ "ZnMm");
/* harmony import */ var _after_work_afterwork_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./after-work/afterwork-item.component */ "0B5F");
/* harmony import */ var _hello_hello_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hello/hello.component */ "zdOv");
/* harmony import */ var _main_screen_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-screen-routing.module */ "cOjA");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "nMcE");
/* harmony import */ var _portfolio_portfolio_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/portfolio-item.component */ "m5AT");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "JNpy");













let MainScreenModule = class MainScreenModule {
};
MainScreenModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _hello_hello_component__WEBPACK_IMPORTED_MODULE_8__["HelloComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
            _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
            _portfolio_portfolio_item_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioItemComponent"],
            _after_work_after_work_component__WEBPACK_IMPORTED_MODULE_6__["AfterWorkComponent"],
            _after_work_afterwork_item_component__WEBPACK_IMPORTED_MODULE_7__["AfterWorkItemComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_screen_routing_module__WEBPACK_IMPORTED_MODULE_9__["MainRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        providers: [],
    })
], MainScreenModule);



/***/ }),

/***/ "/KT2":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/after-work/after-work.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bounds\">\n  <div class=\"inner-bounds\">\n    <div class=\"content\">\n      <h1 class=\"header\">\n        <span class=\"header-sub-wrapper\"\n          ><span>#AFTER</span><span>WORK</span></span\n        >\n        <mat-tab-group\n          *ngIf=\"currentNavIndex == 2\"\n          #afterwork\n          mat-align-tabs=\"end\"\n          [selectedIndex]=\"2\"\n          style=\"margin-left: auto\"\n        >\n          <mat-tab [disabled]=\"true\" label=\"Tech\"></mat-tab>\n          <mat-tab [disabled]=\"true\" label=\"Non-Tech\"></mat-tab>\n          <mat-tab label=\"All\"></mat-tab>\n        </mat-tab-group>\n      </h1>\n\n      <div class=\"main-content\">\n        <!-- First part -->\n        <div *ngIf=\"projects$ | async as projects\" class=\"first-part\">\n          <div class=\"first-part-column1_1\">\n            <div class=\"first-part-column1\">\n              <div>\n                <app-afterwork-item\n                  [project]=\"projects[1]\"\n                ></app-afterwork-item>\n                <app-afterwork-item\n                  [project]=\"projects[2]\"\n                ></app-afterwork-item>\n              </div>\n              <div class=\"row-note\">\n                <div class=\"note-container\">\n                  <div class=\"overlay\">\n                    <div class=\"note-headline\"></div>\n                    <div class=\"note-wraper\">\n                      <div class=\"note\"></div>\n                    </div>\n                    <div class=\"note-content\">\n                      <p style=\"font-style: italic\" class=\"main-color\">\n                        Hi there!<br />So glad you are here. I write these not\n                        to show my experience, knowledge or the same like that.\n                        I write to tell my stories. Maybe In some post, you will\n                        see a stupid man with a silly doing. But I believe\n                        that's fine cause the mistake makes experience, and the\n                        experience makes a man. You will see me better day by\n                        day, and I hope you enjoy them.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <app-afterwork-item\n                  [project]=\"projects[0]\"\n                  class=\"newest-topic\"\n                ></app-afterwork-item>\n              </div>\n            </div>\n          </div>\n          <div class=\"first-part-column2\">\n            <app-afterwork-item [project]=\"projects[3]\"></app-afterwork-item>\n            <app-afterwork-item [project]=\"projects[4]\"></app-afterwork-item>\n          </div>\n        </div>\n        <!-- Second part -->\n        <ng-container *ngIf=\"projectsMore$ | async as projectsMore\">\n          <ng-container *ngIf=\"projectsMore.length > 0\">\n            <div *ngFor=\"let triple of projectsMore\" class=\"second-part\">\n              <div>\n                <app-afterwork-item [project]=\"triple[0]\"></app-afterwork-item>\n              </div>\n              <div style=\"margin-left: 10px; margin-right: 10px\">\n                <app-afterwork-item [project]=\"triple[1]\"></app-afterwork-item>\n              </div>\n              <div>\n                <app-afterwork-item [project]=\"triple[2]\"></app-afterwork-item>\n              </div>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n      <div class=\"footer\">\n        <div id=\"footer-contact\">\n          <div id=\"m-icon\">\n            <a\n              class=\"m-icon gmail\"\n              href=\"https://mail.google.com/mail/?view=cm&fs=1&to=nhvu.95@gmail.com&su=HOW%20CAN%20I%20HELP%20U%3F\"\n              target=\"_blank\"\n              style=\"cursor: pointer\"\n            ></a>\n          </div>\n          <div id=\"m-contact\" style=\"cursor: pointer\">\n            <h3>\n              <span class=\"fname\">VU HIEU</span\n              ><span class=\"sname\"> NGUYEN</span>\n            </h3>\n            <h3 class=\"email\">nhvu.95@gmail.com</h3>\n          </div>\n        </div>\n        <div id=\"footer-download-cv\">\n          <div\n            class=\"download\"\n            onclick=\"window.open(\n                        'https://drive.google.com/file/d/1sNJLiX9THvwkWe3FFBDrOJPMWuLw9ykW/view?usp=sharing',\n                        '_blank'\n                      );\"\n            style=\"cursor: pointer\"\n          ></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "0B5F":
/*!********************************************************************!*\
  !*** ./src/app/main-screen/after-work/afterwork-item.component.ts ***!
  \********************************************************************/
/*! exports provided: AfterWorkItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterWorkItemComponent", function() { return AfterWorkItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_afterwork_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./afterwork-item.component.html */ "4lT6");
/* harmony import */ var _afterwork_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./afterwork-item.component.scss */ "IVvx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AfterWorkItemComponent = class AfterWorkItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
AfterWorkItemComponent.ctorParameters = () => [];
AfterWorkItemComponent.propDecorators = {
    project: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AfterWorkItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-afterwork-item',
        template: _raw_loader_afterwork_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_afterwork_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AfterWorkItemComponent);



/***/ }),

/***/ "4lT6":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/after-work/afterwork-item.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"project && project.exist\" class=\"topic-container\">\n  <div\n    class=\"topic-image\"\n    style=\"background-image: url('{{ project.image }}');\"\n  ></div>\n  <div class=\"topic\">\n    <h3 class=\"title\">{{ project.title }}</h3>\n    <h3 class=\"tags\">\n      <ng-container *ngIf=\"let tag of project.tags \">\n        <div class=\"tag-item\">{{ tag }}</div>\n      </ng-container>\n    </h3>\n    <p class=\"description\">\n      {{ project.description }}\n    </p>\n    <div class=\"topic-footer\">\n      <div class=\"date\">{{ project.date_start }} - {{ project.date_end }}</div>\n      <div class=\"topic-link\">\n        <a href=\"{{ project.link }}\" target=\"_blank\">Read More</a>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "IVvx":
/*!**********************************************************************!*\
  !*** ./src/app/main-screen/after-work/afterwork-item.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topic-container {\n  background-image: url(\"https://dsm01pap001files.storage.live.com/y4mXsTsvFbJjaI75YXKpHvmb-nSujBipPAea_Chdz3c1R8fBfLkt6ArTJEuIr04uRaqa9LimlJY6Ilu_o2ilys_wC3Xw3O64IAidEgrbU-KiePCgFzlnp2xTCZHqAc84mr-MlctwpsydZryIJX6kZMWSlmX-C5VENaMlsXZ0rMwpDmL-e6kRaszLVs9TR1dVXsT?width=578&height=660&cropmode=none\");\n  background-size: cover;\n  background-position: center;\n  min-height: 280px;\n  margin-bottom: 18px;\n  border: 1px solid #f29e03;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.topic-image {\n  width: 100%;\n  height: 250px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  margin-right: 10px;\n}\n\n.topic {\n  width: calc(100% - 20px);\n  padding: 10px 10px;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.topic .title {\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 1;\n}\n\n.topic .tags {\n  line-height: 1;\n}\n\n.topic .tags .tag-item {\n  display: inline-block;\n  background-color: white;\n}\n\n.topic .description {\n  margin-top: 10px;\n  margin-bottom: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.topic .topic-footer {\n  margin-top: auto;\n  text-align: right;\n}\n\n.topic .topic-footer .topic-link a {\n  color: #00717b !important;\n  margin-right: 10px;\n}\n\n.topic-container-xs {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n.topic-container-xs .topic {\n  padding-right: 10px;\n}\n\n.topic-container-xs .topic .title {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FmdGVyd29yay1pdGVtLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwtdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5U0NFVztFRERYLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENDbkJTO0FEa0JiOztBQUdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURSOztBQUdJO0VBQ0ksY0FBQTtBQURSOztBQUVRO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtBQUFaOztBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFEUjs7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFEUjs7QUFHWTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFEaEI7O0FBT0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBTUk7RUFDSSxtQkFBQTtBQUpSOztBQU1JO0VBQ0ksZUFBQTtBQUpSIiwiZmlsZSI6ImFmdGVyd29yay1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy9nbG9iYWwtdmFyLnNjc3NcIjtcblxuLnRvcGljLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJnX3RvcGljX2ltZztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAyODBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRtYWluLWNvbG9yMjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50b3BpYy1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRvcGljIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ19vdmVybGF5O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG4gICAgLnRhZ3Mge1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgLnRhZy1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgfVxuICAgIC50b3BpYy1mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgLnRvcGljLWxpbmsge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udG9waWMtY29udGFpbmVyLXhzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuXG4gICAgLnRvcGljIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLnRvcGljIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG59IiwiJHJvYm90by1mb250OiBcIlJvYm90b1wiO1xuXG4kbWFpbi1jb2xvcjogcmdiYSgwLCAxMTMsIDEyMyk7XG4kbWFpbi1jb2xvcjI6ICNmMjllMDM7XG4kYmxhY2stY29sb3I6IHJnYmEoNTEsIDUxLCA1MSk7XG4kYmdfdG9waWNfaW1nOiB1cmwoXCJodHRwczovL2RzbTAxcGFwMDAxZmlsZXMuc3RvcmFnZS5saXZlLmNvbS95NG1Yc1RzdkZiSmphSTc1WVhLcEh2bWItblN1akJpcFBBZWFfQ2hkejNjMVI4ZkJmTGt0NkFyVEpFdUlyMDR1UmFxYTlMaW1sSlk2SWx1X28yaWx5c193QzNYdzNPNjRJQWlkRWdyYlUtS2llUENnRnpsbnAyeFRDWkhxQWM4NG1yLU1sY3R3cHN5ZFpyeUlKWDZrWk1XU2xtWC1DNVZFTmFNbHNYWjByTXdwRG1MLWU2a1Jhc3pMVnM5VFIxZFZYc1Q/d2lkdGg9NTc4JmhlaWdodD02NjAmY3JvcG1vZGU9bm9uZVwiKTtcbiRiZ19vdmVybGF5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7Il19 */");

/***/ }),

/***/ "JNpy":
/*!**************************************************************!*\
  !*** ./src/app/main-screen/portfolio/portfolio.component.ts ***!
  \**************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_portfolio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./portfolio.component.html */ "LvIF");
/* harmony import */ var _portfolio_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.component.scss */ "NoYr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _main_screen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main-screen.service */ "KdA0");






let PortfolioComponent = class PortfolioComponent {
    constructor(service) {
        this.service = service;
        this.currentNavIndex = 0;
        this.cache = [];
        this._listProjects$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.listProjects$ = this._listProjects$.asObservable();
    }
    ngOnInit() {
        this.getListItem();
    }
    /**
     * Get List
     * @param type
     */
    getListItem(type = 3) {
        if (this.cache.length === 0) {
            this.service.getProjectList().subscribe((res) => {
                this.cache = res;
                this.resultHandler(res, type);
            });
        }
        else
            this.resultHandler(this.cache, type);
    }
    /**
     * Handle result
     * @param res
     * @param type
     */
    resultHandler(res, type) {
        let list = [];
        if (type != 3) {
            res = res.filter((item) => item.typeIndex == type);
        }
        while (res.length > 0) {
            let chunk = res.splice(0, 2);
            if (chunk.length === 1)
                chunk.push(Object.assign(Object.assign({}, chunk[0]), { exist: false }));
            list.push(chunk);
        }
        this._listProjects$.next(list);
    }
    /**
     * On Tab Change
     * @param tab {tab, index}
     */
    tabChanged(tab) {
        this.getListItem(tab.index);
    }
};
PortfolioComponent.ctorParameters = () => [
    { type: _main_screen_service__WEBPACK_IMPORTED_MODULE_5__["MainScreenService"] }
];
PortfolioComponent.propDecorators = {
    currentNavIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PortfolioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-portfolio',
        template: _raw_loader_portfolio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_portfolio_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PortfolioComponent);



/***/ }),

/***/ "KdA0":
/*!****************************************************!*\
  !*** ./src/app/main-screen/main-screen.service.ts ***!
  \****************************************************/
/*! exports provided: MainScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainScreenService", function() { return MainScreenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let MainScreenService = class MainScreenService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getProjectList() {
        return this.httpClient.get("/assets/configs/portfolio.json");
    }
    getBlogList() {
        return this.httpClient.get("/assets/configs/blogs.json");
    }
};
MainScreenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MainScreenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MainScreenService);



/***/ }),

/***/ "LvIF":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/portfolio/portfolio.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bounds\">\n    <div class=\"inner-bounds\">\n        <div class=\"content\">\n            <h1 class=\"header\">\n                <span class=\"header-sub-wrapper\"><span>#MY</span><span>PORTFOLIO</span></span>\n                <mat-tab-group *ngIf=\"currentNavIndex == 1\" #portfolio mat-align-tabs=\"end\" [selectedIndex]=\"3\" (selectedTabChange)=\"tabChanged($event)\"\n                    style=\"margin-left: auto;\">\n                    <mat-tab label=\"Frontend\"></mat-tab>\n                    <mat-tab label=\"Backend\"></mat-tab>\n                    <mat-tab label=\"Tool & App\"></mat-tab>\n                    <mat-tab label=\"All\"></mat-tab>\n                </mat-tab-group>\n            </h1>\n\n            <div class=\"main-content\">\n                <div class=\"topic-wrapper\">\n                    <div *ngFor=\"let pair of listProjects$ |async\" class=\"topic-container-row\">\n                        <app-portfolio-item [project]=\"pair[0]\" class=\"topic-container-left\"></app-portfolio-item>\n                        <app-portfolio-item [project]=\"pair[1]\" class=\"topic-container-right\"></app-portfolio-item>\n                    </div>\n                </div>\n            </div>\n            <div class=\"footer\">\n                <div id=\"footer-contact\">\n                    <div id=\"m-icon\">\n                        <a class=\"m-icon gmail\"\n                            href=\"https://mail.google.com/mail/?view=cm&fs=1&to=nhvu.95@gmail.com&su=HOW%20CAN%20I%20HELP%20U%3F\"\n                            target=\"_blank\" style=\"cursor:pointer;\"></a>\n                    </div>\n                    <div id=\"m-contact\" style=\"cursor:pointer;\">\n                        <h3><span class=\"fname\">VU HIEU</span><span class=\"sname\"> NGUYEN</span></h3>\n                        <h3 class=\"email\">nhvu.95@gmail.com</h3>\n                    </div>\n                </div>\n                <div id=\"footer-download-cv\">\n                    <div class=\"download\" onclick=\"window.open(\n                        'https://drive.google.com/file/d/1sNJLiX9THvwkWe3FFBDrOJPMWuLw9ykW/view?usp=sharing',\n                        '_blank'\n                      );\" style=\"cursor:pointer;\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "M819":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/main/main.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group mat-align-tabs=\"center\" dynamicHeight (selectedTabChange)=\"tabChanged($event)\" [selectedIndex]=\"defaultSelect\" id=\"mainTab\">\n    <mat-tab label=\"ABOUT ME\"><app-hello></app-hello></mat-tab>\n    <mat-tab label=\"PORTFOLIO\"><app-portfolio [currentNavIndex]=\"navIndex\"></app-portfolio></mat-tab>\n    <mat-tab label=\"AFTER WORK\"><app-after-work [currentNavIndex]=\"navIndex\"></app-after-work></mat-tab>\n  </mat-tab-group>");

/***/ }),

/***/ "NoYr":
/*!****************************************************************!*\
  !*** ./src/app/main-screen/portfolio/portfolio.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topic-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n.topic-wrapper .topic-container-row {\n  display: flex;\n  flex: 1 1 100%;\n  width: 100%;\n}\n.topic-wrapper .topic-container-row app-portfolio-item {\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  max-width: calc(50% - 10px);\n  width: 100%;\n}\n@media screen and (max-width: 1279px) {\n  .bounds .header {\n    flex-direction: column;\n    align-items: center;\n  }\n  .bounds .header mat-tab-group {\n    margin-left: 0px !important;\n  }\n\n  .topic-wrapper .topic-container-row {\n    flex-direction: column;\n  }\n  .topic-wrapper .topic-container-row app-portfolio-item {\n    max-width: unset !important;\n  }\n}\n@media screen and (max-width: 539px) {\n  .bounds .content .header .header-sub-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .bounds .content ::ng-deep .mat-tab-label {\n    padding: 0 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBQ1o7QUFHQTtFQUVRO0lBQ0ksc0JBQUE7SUFDQSxtQkFBQTtFQURWO0VBRVU7SUFDSSwyQkFBQTtFQUFkOztFQU1NO0lBQ0ksc0JBQUE7RUFIVjtFQUlVO0lBQ0ksMkJBQUE7RUFGZDtBQUNGO0FBT0E7RUFHWTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBUGQ7RUFTVTtJQUNJLGVBQUE7RUFQZDtBQUNGIiwiZmlsZSI6InBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvZ2xvYmFsLXZhci5zY3NzXCI7XG4udG9waWMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLnRvcGljLWNvbnRhaW5lci1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFwcC1wb3J0Zm9saW8taXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICAuYm91bmRzIHtcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hdC10YWItZ3JvdXAge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50b3BpYy13cmFwcGVyIHtcbiAgICAgICAgLnRvcGljLWNvbnRhaW5lci1yb3cge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFwcC1wb3J0Zm9saW8taXRlbSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzlweCkge1xuICAgIC5ib3VuZHMge1xuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAuaGVhZGVyIC5oZWFkZXItc3ViLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "XbIb":
/*!******************************************************!*\
  !*** ./src/app/main-screen/main/main.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 539px) {\n  #mainTab ::ng-deep .mat-tab-label {\n    padding: 0 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFUTtJQUNJLGVBQUE7RUFEVjtBQUNGIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDVVNUT00gTUFUIFRBQlxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTM5cHgpIHtcbiAgICAjbWFpblRhYiB7XG4gICAgICAgIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "Z2zd":
/*!******************************************************************!*\
  !*** ./src/app/main-screen/after-work/after-work.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-content {\n  max-height: -webkit-fit-content !important;\n  max-height: -moz-fit-content !important;\n  max-height: fit-content !important;\n  flex-direction: column;\n}\n.main-content .first-part {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 100%;\n}\n.main-content .first-part .first-part-column1_1 {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 100%;\n  width: 100%;\n  max-width: 66.66%;\n  margin-right: 10px;\n}\n.main-content .first-part .first-part-column1 {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 100%;\n}\n.main-content .first-part .first-part-column1 > div {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: calc(50% - 5px);\n}\n.main-content .first-part .first-part-column1 .row-note {\n  margin-left: 10px;\n}\n.main-content .first-part .first-part-column1 .row-note .note-container {\n  min-height: 230px;\n  margin-bottom: 18px;\n  border: 1px solid #f29e03;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  background-image: url(\"https://dsm01pap001files.storage.live.com/y4mXsTsvFbJjaI75YXKpHvmb-nSujBipPAea_Chdz3c1R8fBfLkt6ArTJEuIr04uRaqa9LimlJY6Ilu_o2ilys_wC3Xw3O64IAidEgrbU-KiePCgFzlnp2xTCZHqAc84mr-MlctwpsydZryIJX6kZMWSlmX-C5VENaMlsXZ0rMwpDmL-e6kRaszLVs9TR1dVXsT?width=578&height=660&cropmode=none\");\n  background-size: cover;\n  background-position: center;\n}\n.main-content .first-part .first-part-column1 .row-note .note-container .overlay {\n  display: flex;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.main-content .first-part .first-part-column1 .row-note .note-container .note {\n  width: 70px;\n  min-width: 70px;\n  height: 70px;\n  min-height: 70px;\n}\n.main-content .first-part .first-part-column1 .row-note .note-container .note-headline {\n  height: 100%;\n  width: 10px;\n  background-color: #f29e03;\n}\n.main-content .first-part .first-part-column1 .row-note .note-container .note-content {\n  width: calc(100% - 85px);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.main-content .first-part .first-part-column1 .row-note > app-afterwork-item {\n  height: 100%;\n}\n.main-content .first-part .first-part-column1 .row-note > app-afterwork-item ::ng-deep .topic-image {\n  height: 355px;\n}\n.main-content .first-part .first-part-column1 .row-note > app-afterwork-item ::ng-deep .description {\n  height: 130px;\n}\n.main-content .first-part .first-part-column1 .row-note > app-afterwork-item ::ng-deep .topic-container {\n  min-height: calc(100% - 20px);\n}\n.main-content .first-part .first-part-column1 .row-note > app-afterwork-item ::ng-deep .topic-container .topic .description {\n  -webkit-line-clamp: unset;\n}\n.main-content .first-part .first-part-column2 {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 100%;\n  width: 100%;\n  max-width: calc(33.33% - 7px);\n}\n.main-content .second-part {\n  display: flex;\n  flex: 1 1 100%;\n  flex-direction: row;\n}\n.main-content .second-part > div {\n  min-width: calc(33.33% - 7px);\n  max-width: calc(33.33% - 7px);\n}\n.main-content .topic-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n.main-content .topic-wrapper .topic-container-row {\n  display: flex;\n  flex: 1 1 100%;\n  width: 100%;\n}\n.main-content .topic-wrapper .topic-container-row app-portfolio-item {\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 1279px) {\n  .bounds .header {\n    flex-direction: column;\n    align-items: center;\n  }\n  .bounds .header mat-tab-group {\n    margin-left: 0px !important;\n  }\n  .bounds .main-content .first-part {\n    flex-direction: column;\n    align-items: center;\n  }\n  .bounds .main-content .first-part-column1_1 {\n    max-width: 80%;\n    margin-right: 0px;\n  }\n  .bounds .main-content .first-part-column1 {\n    flex-direction: column-reverse;\n    max-width: 100%;\n  }\n  .bounds .main-content .first-part-column1 > div {\n    max-width: 100%;\n  }\n  .bounds .main-content .first-part-column1 .row-note {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n  .bounds .main-content .first-part-column1 .row-note .note-container {\n    min-height: 160px;\n  }\n  .bounds .main-content .first-part-column2 {\n    max-width: 80%;\n  }\n  .bounds .main-content .second-part {\n    flex-direction: column;\n    width: 100%;\n    max-width: 80%;\n    align-items: center;\n  }\n  .bounds .main-content .second-part > div {\n    margin-left: 0px !important;\n    margin-right: 0px !important;\n    max-width: 100%;\n  }\n\n  .topic-wrapper .topic-container-row {\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 539px) {\n  .bounds .content .main-content .first-part-column1_1 {\n    max-width: 95%;\n  }\n  .bounds .content .main-content .first-part-column1 .row-note .note-container {\n    min-height: 220px;\n  }\n  .bounds .content .main-content .first-part-column1 .row-note .note-container .note-content p {\n    margin-bottom: 0px;\n  }\n  .bounds .content .main-content .first-part-column1 .row-note > app-afterwork-item ::ng-deep .topic-image {\n    height: 250px;\n  }\n  .bounds .content .main-content .first-part-column1 .row-note > app-afterwork-item ::ng-deep .topic-container {\n    min-height: 280px;\n  }\n  .bounds .content .main-content .first-part-column1 .row-note > app-afterwork-item ::ng-deep .topic-container .topic .description {\n    -webkit-line-clamp: 3;\n  }\n  .bounds .content .main-content .first-part-column2,\n.bounds .content .main-content .second-part {\n    max-width: 95%;\n  }\n  .bounds .content .header .header-sub-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .bounds .content ::ng-deep .mat-tab-label {\n    padding: 0 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FmdGVyLXdvcmsuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC12YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDBDQUFBO0VBQUEsdUNBQUE7RUFBQSxrQ0FBQTtFQUNBLHNCQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ047QUFDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDTjtBQUFNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQUVSO0FBQ007RUFDRSxpQkFBQTtBQUNSO0FBQ1E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlTQ2xDSztFRG1DTCxzQkFBQTtFQUNBLDJCQUFBO0FBQ1Y7QUFBVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQ3ZDQztBRHlDYjtBQUNVO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUNVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNaO0FBQ1U7RUFDRSx3QkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQUNaO0FBRVE7RUFDRSxZQUFBO0FBQVY7QUFDVTtFQUNFLGFBQUE7QUFDWjtBQUNVO0VBQ0UsYUFBQTtBQUNaO0FBQ1U7RUFDRSw2QkFBQTtBQUNaO0FBQVk7RUFDRSx5QkFBQTtBQUVkO0FBSUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBRk47QUFLRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUlJO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtBQUZOO0FBTUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU1JO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSk47QUFLTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUhSO0FBU0E7RUFFSTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUFQSjtFQVFJO0lBQ0UsMkJBQUE7RUFOTjtFQVVJO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQVJOO0VBVUk7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7RUFSTjtFQVVJO0lBQ0UsOEJBQUE7SUFDQSxlQUFBO0VBUk47RUFTTTtJQUNFLGVBQUE7RUFQUjtFQVNNO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQVBSO0VBUVE7SUFDRSxpQkFBQTtFQU5WO0VBVUk7SUFDRSxjQUFBO0VBUk47RUFVSTtJQUNFLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQVJOO0VBU007SUFDRSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0EsZUFBQTtFQVBSOztFQWNFO0lBQ0Usc0JBQUE7RUFYSjtBQUNGO0FBZUE7RUFJUTtJQUNFLGNBQUE7RUFoQlI7RUFtQlE7SUFDRSxpQkFBQTtFQWpCVjtFQW1CUTtJQUNFLGtCQUFBO0VBakJWO0VBb0JVO0lBQ0UsYUFBQTtFQWxCWjtFQW9CVTtJQUNFLGlCQUFBO0VBbEJaO0VBbUJZO0lBQ0UscUJBQUE7RUFqQmQ7RUFzQk07O0lBRUUsY0FBQTtFQXBCUjtFQXdCSTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBdEJOO0VBd0JJO0lBQ0UsZUFBQTtFQXRCTjtBQUNGIiwiZmlsZSI6ImFmdGVyLXdvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzL2dsb2JhbC12YXIuc2Nzc1wiO1xuLm1haW4tY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLmZpcnN0LXBhcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAuZmlyc3QtcGFydC1jb2x1bW4xXzEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiA2Ni42NiU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5maXJzdC1wYXJ0LWNvbHVtbjEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XG4gICAgICB9XG5cbiAgICAgIC5yb3ctbm90ZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIC5ub3RlLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMjMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbWFpbi1jb2xvcjI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogJGJnX3RvcGljX2ltZztcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ19vdmVybGF5O1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm90ZSB7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3RlLWhlYWRsaW5lIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyOWUwMztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdGUtY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA+IGFwcC1hZnRlcndvcmstaXRlbSB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIDo6bmctZGVlcCAudG9waWMtaW1hZ2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjpuZy1kZWVwIC5kZXNjcmlwdGlvbntcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIDo6bmctZGVlcCAudG9waWMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICAgICAgLnRvcGljIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogdW5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5maXJzdC1wYXJ0LWNvbHVtbjIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDMzLjMzJSAtIDdweCk7XG4gICAgfVxuICB9XG4gIC5zZWNvbmQtcGFydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgID4gZGl2IHtcbiAgICAgIG1pbi13aWR0aDogY2FsYygzMy4zMyUgLSA3cHgpO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDMzLjMzJSAtIDdweCk7XG4gICAgfVxuICB9XG5cbiAgLnRvcGljLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC50b3BpYy1jb250YWluZXItcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYXBwLXBvcnRmb2xpby1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAuYm91bmRzIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWF0LXRhYi1ncm91cCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICAuZmlyc3QtcGFydCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuZmlyc3QtcGFydC1jb2x1bW4xXzEge1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICB9XG4gICAgICAuZmlyc3QtcGFydC1jb2x1bW4xIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgID4gZGl2IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdy1ub3RlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgIC5ub3RlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5maXJzdC1wYXJ0LWNvbHVtbjIge1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgIH1cbiAgICAgIC5zZWNvbmQtcGFydCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgPiBkaXYge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50b3BpYy13cmFwcGVyIHtcbiAgICAudG9waWMtY29udGFpbmVyLXJvdyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzlweCkge1xuICAuYm91bmRzIHtcbiAgICAuY29udGVudCB7XG4gICAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgLmZpcnN0LXBhcnQtY29sdW1uMV8xIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICAgICAgfVxuICAgICAgICAuZmlyc3QtcGFydC1jb2x1bW4xIHtcbiAgICAgICAgICAucm93LW5vdGUgLm5vdGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucm93LW5vdGUgLm5vdGUtY29udGFpbmVyIC5ub3RlLWNvbnRlbnQgcCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3ctbm90ZSA+IGFwcC1hZnRlcndvcmstaXRlbSB7XG4gICAgICAgICAgICA6Om5nLWRlZXAgLnRvcGljLWltYWdlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDo6bmctZGVlcCAudG9waWMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMjgwcHg7XG4gICAgICAgICAgICAgIC50b3BpYyAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZmlyc3QtcGFydC1jb2x1bW4yLFxuICAgICAgICAuc2Vjb25kLXBhcnQge1xuICAgICAgICAgIG1heC13aWR0aDogOTUlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIgLmhlYWRlci1zdWItd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkcm9ib3RvLWZvbnQ6IFwiUm9ib3RvXCI7XG5cbiRtYWluLWNvbG9yOiByZ2JhKDAsIDExMywgMTIzKTtcbiRtYWluLWNvbG9yMjogI2YyOWUwMztcbiRibGFjay1jb2xvcjogcmdiYSg1MSwgNTEsIDUxKTtcbiRiZ190b3BpY19pbWc6IHVybChcImh0dHBzOi8vZHNtMDFwYXAwMDFmaWxlcy5zdG9yYWdlLmxpdmUuY29tL3k0bVhzVHN2RmJKamFJNzVZWEtwSHZtYi1uU3VqQmlwUEFlYV9DaGR6M2MxUjhmQmZMa3Q2QXJUSkV1SXIwNHVSYXFhOUxpbWxKWTZJbHVfbzJpbHlzX3dDM1h3M082NElBaWRFZ3JiVS1LaWVQQ2dGemxucDJ4VENaSHFBYzg0bXItTWxjdHdwc3lkWnJ5SUpYNmtaTVdTbG1YLUM1VkVOYU1sc1haMHJNd3BEbUwtZTZrUmFzekxWczlUUjFkVlhzVD93aWR0aD01NzgmaGVpZ2h0PTY2MCZjcm9wbW9kZT1ub25lXCIpO1xuJGJnX292ZXJsYXk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTsiXX0= */");

/***/ }),

/***/ "ZnMm":
/*!****************************************************************!*\
  !*** ./src/app/main-screen/after-work/after-work.component.ts ***!
  \****************************************************************/
/*! exports provided: AfterWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterWorkComponent", function() { return AfterWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_after_work_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./after-work.component.html */ "/KT2");
/* harmony import */ var _after_work_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./after-work.component.scss */ "Z2zd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _main_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../main-screen.service */ "KdA0");








let AfterWorkComponent = class AfterWorkComponent {
    constructor(service, scullyService) {
        this.service = service;
        this.scullyService = scullyService;
        this.currentNavIndex = 0;
        this.projects$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        this.projectsMore$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
    }
    ngOnInit() {
        let links$ = this.scullyService.allRoutes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(scullyRoutes => scullyRoutes.filter(scullyRoute => scullyRoute.route.startsWith("/blog"))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
        this.projects$ = links$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(links => links.slice(0, 6)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(links => this.scullyRouteTopProject(links)));
        this.projectsMore$ = links$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(links => links.slice(6)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(links => this.scullyRouteTopProject(links)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(projects => {
            let projs = projects;
            let tripleProj = [];
            while (true) {
                let takeData = projs.splice(0, 3);
                if (takeData.length == 0) {
                    break;
                }
                for (let i = 0; i < 3 - takeData.length; i++) {
                    takeData.push({ exist: false });
                }
                tripleProj.push(takeData);
            }
            return tripleProj;
        }));
    }
    scullyRouteTopProject(scullyRoutes) {
        return scullyRoutes.map(scullyRoute => {
            return {
                title: scullyRoute.title.replace("<br>", " "),
                image: scullyRoute.image,
                description: scullyRoute.description,
                date_start: scullyRoute.date_start,
                date_end: scullyRoute.date_end,
                link: scullyRoute.route,
                exist: scullyRoute.published
            };
        });
    }
};
AfterWorkComponent.ctorParameters = () => [
    { type: _main_screen_service__WEBPACK_IMPORTED_MODULE_7__["MainScreenService"] },
    { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"] }
];
AfterWorkComponent.propDecorators = {
    currentNavIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AfterWorkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-after-work',
        template: _raw_loader_after_work_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_after_work_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AfterWorkComponent);



/***/ }),

/***/ "cGa3":
/*!********************************************************!*\
  !*** ./src/app/main-screen/hello/hello.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bounds .main-content .image-container {\n  display: flex;\n  flex: 1 1 100%;\n  height: 100%;\n  width: 100%;\n  max-width: 30%;\n  flex-direction: column;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n.bounds .main-content .image-container .ava {\n  margin-bottom: 2rem;\n}\n.bounds .main-content .image-container .ava .ava-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.bounds .main-content .image-container .ava .ava-container .avatar {\n  border-radius: 50%;\n  background-color: #c4c4c4;\n  width: 300px;\n  height: 300px;\n  border: 3px solid #00717b;\n  background-image: url(\"https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/139663994_2740155776249913_4875674446048621486_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ftkX2cvVE-wAX_TR7N_&tn=2nvC_Nrx0Gp4vWzc&_nc_ht=scontent.fhan14-2.fna&oh=ee1997af12d081058dc40f6f714fb20f&oe=61542B62\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.bounds .main-content .image-container .name {\n  text-align: center;\n}\n.bounds .main-content .image-container .name .first-name {\n  color: #00717b !important;\n}\n.bounds .main-content .image-container .name h2 {\n  font-weight: 400;\n}\n.bounds .main-content .image-container .name .role {\n  font-weight: 300;\n}\n.bounds .main-content .image-container .icon-container {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 100%;\n  justify-content: center;\n}\n.bounds .main-content .image-container .icon-container > div > div {\n  width: 50px;\n  min-width: 50px;\n  height: 50px;\n  min-height: 50px;\n  margin: 10px;\n}\n@media screen and (max-width: 1279px) {\n  .main-content .image-container {\n    max-width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlbGxvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFIWjtBQUtZO0VBQ0ksbUJBQUE7QUFIaEI7QUFJZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRnBCO0FBR29CO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpU0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFEeEI7QUFNWTtFQVVJLGtCQUFBO0FBYmhCO0FBSWdCO0VBQ0kseUJBQUE7QUFGcEI7QUFJZ0I7RUFDSSxnQkFBQTtBQUZwQjtBQUlnQjtFQUNJLGdCQUFBO0FBRnBCO0FBT1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFMaEI7QUFPZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFMcEI7QUFZQTtFQUVRO0lBQ0ksMEJBQUE7RUFWVjtBQUNGIiwiZmlsZSI6ImhlbGxvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy9nbG9iYWwtdmFyLnNjc3NcIjtcblxuLmJvdW5kcyB7XG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcblxuICAgICAgICAgICAgLmF2YSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICAuYXZhLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk2LjAwMDAwMzUxNjY3NDA0LCAxOTYuMDAwMDAzNTE2Njc0MDQsIDE5Ni4wMDAwMDM1MTY2NzQwNCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJG1haW4tY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3Njb250ZW50LmZoYW4xNC0yLmZuYS5mYmNkbi5uZXQvdi90MS42NDM1LTkvMTM5NjYzOTk0XzI3NDAxNTU3NzYyNDk5MTNfNDg3NTY3NDQ0NjA0ODYyMTQ4Nl9uLmpwZz9fbmNfY2F0PTExMSZjY2I9MS01Jl9uY19zaWQ9MDljYmZlJl9uY19vaGM9ZnRrWDJjdlZFLXdBWF9UUjdOXyZ0bj0ybnZDX05yeDBHcDR2V3pjJl9uY19odD1zY29udGVudC5maGFuMTQtMi5mbmEmb2g9ZWUxOTk3YWYxMmQwODEwNThkYzQwZjZmNzE0ZmIyMGYmb2U9NjE1NDJCNjJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgIC5maXJzdC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJvbGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pY29uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vIFRoZSBpY29uIGJlbGxvdyBhdmF0YXJcbiAgICAgICAgICAgICAgICA+IGRpdiA+IGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIFxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "cOjA":
/*!***********************************************************!*\
  !*** ./src/app/main-screen/main-screen-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "nMcE");




const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] }
];
let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MainRoutingModule);



/***/ }),

/***/ "m5AT":
/*!*******************************************************************!*\
  !*** ./src/app/main-screen/portfolio/portfolio-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: PortfolioItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioItemComponent", function() { return PortfolioItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _portfolio_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio-item.component.scss */ "tsyz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let PortfolioItemComponent = class PortfolioItemComponent {
    constructor() { }
    ngOnInit() { }
};
PortfolioItemComponent.ctorParameters = () => [];
PortfolioItemComponent.propDecorators = {
    project: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PortfolioItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-portfolio-item',
        template: ` <div
    *ngIf="project"
    [ngClass]="
      project.exist
        ? 'topic-container'
        : 'topic-container topic-container-invisible'
    ">
    <div class="overlay">
        <div
          class="topic-image"
          style="background-image: url('{{ project.image }}');"></div>
        <div class="topic">
          <h3 class="title">{{ project.title }}</h3>
          <p class="description">
            {{ project.description }}
          </p>
          <div class="topic-footer">
            <div class="date">
              {{ project.date_start }} - {{ project.date_end }}
            </div>
            <div class="topic-link">
              <a href="{{ project.link }}" target="_blank">Link</a>
              <a href="{{ project.link_source }}" target="_blank">Source</a>
              <a href="{{ project.guide }}" target="_blank">Guide</a>
            </div>
          </div>
        </div>
      </div>
  </div>`,
        styles: [_portfolio_item_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], PortfolioItemComponent);



/***/ }),

/***/ "nMcE":
/*!****************************************************!*\
  !*** ./src/app/main-screen/main/main.component.ts ***!
  \****************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main.component.html */ "M819");
/* harmony import */ var _main_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component.scss */ "XbIb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let MainComponent = class MainComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.navIndex = 0;
        this.defaultSelect = 0;
    }
    ngOnInit() {
        console.log('WINDOW', window);
        let param = this.route.snapshot.queryParams;
        if (param && !isNaN(parseInt(param['index']))) {
            this.defaultSelect = parseInt(param['index']);
            this.router.navigate([], {
                queryParams: {
                    'index': null
                },
                queryParamsHandling: 'merge'
            });
        }
    }
    tabChanged(tabChangeEvent) {
        this.navIndex = tabChangeEvent.index;
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main',
        template: _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MainComponent);



/***/ }),

/***/ "tsyz":
/*!*********************************************************************!*\
  !*** ./src/app/main-screen/portfolio/portfolio-item.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topic-container {\n  background-image: url(\"https://dsm01pap001files.storage.live.com/y4mXsTsvFbJjaI75YXKpHvmb-nSujBipPAea_Chdz3c1R8fBfLkt6ArTJEuIr04uRaqa9LimlJY6Ilu_o2ilys_wC3Xw3O64IAidEgrbU-KiePCgFzlnp2xTCZHqAc84mr-MlctwpsydZryIJX6kZMWSlmX-C5VENaMlsXZ0rMwpDmL-e6kRaszLVs9TR1dVXsT?width=578&height=660&cropmode=none\");\n  background-size: cover;\n  min-height: 170px;\n  margin-bottom: 18px;\n  border: 1px solid #f29e03;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n}\n\n.overlay {\n  display: flex;\n  background-color: rgba(255, 255, 255, 0.4);\n}\n\n.topic-image {\n  width: 250px;\n  height: 170px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-right: 10px;\n  background-position: center;\n}\n\n.topic {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: calc(100%);\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.topic .title {\n  font-size: 30px;\n  font-weight: 500;\n}\n\n.topic .description {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.topic .topic-footer .topic-link a {\n  color: #00717b !important;\n  margin-right: 10px;\n}\n\n.topic-container-invisible {\n  visibility: hidden;\n}\n\n.topic-container-hiden {\n  display: none !important;\n}\n\n.update-next-time {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n}\n\n.update-next-time div {\n  margin: auto;\n}\n\n@media screen and (max-width: 959px) {\n  .topic-container {\n    flex-direction: column;\n  }\n  .topic-container .topic-image {\n    width: 100%;\n  }\n  .topic-container .topic {\n    width: calc(100% - 20px);\n    padding-left: 10px;\n  }\n\n  .topic-container-invisible {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby1pdGVtLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwtdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSx5U0NDYTtFRENiLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7QUFMRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtBQUpGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBRko7O0FBT007RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBTFI7O0FBV0E7RUFDRSxrQkFBQTtBQVJGOztBQVVBO0VBQ0Usd0JBQUE7QUFQRjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQU5GOztBQU9FO0VBQ0UsWUFBQTtBQUxKOztBQVNBO0VBQ0U7SUFDRSxzQkFBQTtFQU5GO0VBT0U7SUFDRSxXQUFBO0VBTEo7RUFPRTtJQUNFLHdCQUFBO0lBQ0Esa0JBQUE7RUFMSjs7RUFRQTtJQUNFLGFBQUE7RUFMRjtBQUNGIiwiZmlsZSI6InBvcnRmb2xpby1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy9nbG9iYWwtdmFyLnNjc3NcIjtcblxuLnRvcGljLWNvbnRhaW5lciB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkbWFpbi1jb2xvciwgJGFscGhhOiAwLjA1KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogJGJnX3RvcGljX2ltZztcbi8vICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gIG1pbi1oZWlnaHQ6IDE3MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAkbWFpbi1jb2xvcjI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgZGlzcGxheTogZmxleDtcbn1cbi5vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IHdoaXRlLCAkYWxwaGE6IDAuNCk7XG59XG4udG9waWMtaW1hZ2Uge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4udG9waWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUpO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgfVxuICAudG9waWMtZm9vdGVyIHtcbiAgICAvLyBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIC50b3BpYy1saW5rIHtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogJG1haW4tY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udG9waWMtY29udGFpbmVyLWludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi50b3BpYy1jb250YWluZXItaGlkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4udXBkYXRlLW5leHQtdGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGl2IHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgLnRvcGljLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAudG9waWMtaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC50b3BpYyB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICB9XG4gIC50b3BpYy1jb250YWluZXItaW52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCIkcm9ib3RvLWZvbnQ6IFwiUm9ib3RvXCI7XG5cbiRtYWluLWNvbG9yOiByZ2JhKDAsIDExMywgMTIzKTtcbiRtYWluLWNvbG9yMjogI2YyOWUwMztcbiRibGFjay1jb2xvcjogcmdiYSg1MSwgNTEsIDUxKTtcbiRiZ190b3BpY19pbWc6IHVybChcImh0dHBzOi8vZHNtMDFwYXAwMDFmaWxlcy5zdG9yYWdlLmxpdmUuY29tL3k0bVhzVHN2RmJKamFJNzVZWEtwSHZtYi1uU3VqQmlwUEFlYV9DaGR6M2MxUjhmQmZMa3Q2QXJUSkV1SXIwNHVSYXFhOUxpbWxKWTZJbHVfbzJpbHlzX3dDM1h3M082NElBaWRFZ3JiVS1LaWVQQ2dGemxucDJ4VENaSHFBYzg0bXItTWxjdHdwc3lkWnJ5SUpYNmtaTVdTbG1YLUM1VkVOYU1sc1haMHJNd3BEbUwtZTZrUmFzekxWczlUUjFkVlhzVD93aWR0aD01NzgmaGVpZ2h0PTY2MCZjcm9wbW9kZT1ub25lXCIpO1xuJGJnX292ZXJsYXk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTsiXX0= */");

/***/ }),

/***/ "v+OB":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/hello/hello.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bounds\">\n  <div class=\"inner-bounds\">\n    <div class=\"content\">\n      <h1 class=\"header\"><span>#ALL</span><span>ABOUT ME</span></h1>\n      <div class=\"main-content\">\n        <div class=\"image-container\">\n          <div class=\"ava\">\n            <div class=\"ava-container\">\n              <div class=\"avatar\"></div>\n            </div>\n          </div>\n          <div class=\"name\">\n            <h2><span class=\"first-name\">VU HIEU </span><span>NGUYEN</span></h2>\n            <h3><span class=\"role\">SOFTWARE ENGINEER</span></h3>\n          </div>\n          <div class=\"icon\">\n            <div class=\"icon-container\">\n              <div></div>\n              <div>\n                <div\n                  class=\"facebook\"\n                  onclick=\"window.open(\n                                    'https://www.facebook.com/raiysaii/',\n                                    '_blank'\n                                  );\"\n                  style=\"cursor: pointer\"\n                ></div>\n              </div>\n              <div>\n                <div\n                  class=\"linkedin\"\n                  onclick=\"window.open(\n                                    'https://www.linkedin.com/in/nhvu95/',\n                                    '_blank'\n                                  );\"\n                  style=\"cursor: pointer\"\n                ></div>\n              </div>\n              <div>\n                <div\n                  class=\"github\"\n                  onclick=\"window.open(\n                                    'https://github.com/HieuNguyenVu',\n                                    '_blank'\n                                  );\"\n                  style=\"cursor: pointer\"\n                ></div>\n              </div>\n              <div>\n                <div\n                  class=\"cclaim\"\n                  onclick=\"window.open(\n                                    'https://www.credly.com/users/hieu-nguyen-vu/badges',\n                                    '_blank'\n                                  );\"\n                ></div>\n              </div>\n              <div></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"introduce\">\n          <p>\n            My name is\n            <span class=\"strong\"\n              ><span class=\"main-color\">Vu Hieu</span\n              ><span> Nguyen</span> </span\n            >, You can call me\n            <span class=\"strong\"><span class=\"main-color\">\"Vue\"</span></span>\n            same as the way you call \"Vue\" in VueJS. I'm a Software Engineer. Up\n            to now, I have done this job for 3 years. I have a bachelor degree\n            in Information Technology, and I also have a certificate of Azure\n            Developer Associate.\n          </p>\n          <p>\n            <span class=\"strong\">In my current team</span>, I work as a key\n            member and a junior team leader. My direct supervisor gave me a\n            chance to demonstrate my qualification. My main responsibility is\n            coding the core feature, building the skeleton of the project,\n            reviewing source code and documents written by members. Sometimes I\n            have to mentor newbies and be in charge of them.\n          </p>\n          <p>\n            <span class=\"strong\">I have a big 'DREAM'</span> to become a piece\n            of a big thing or build it by myself. I don't clear about it. I know\n            that It will be great and make the world become a better place, and\n            I'm still looking for it. A team with a big dream sounds good,\n            right? Frequently, ideas came to my mind, and the first thing I do\n            is make them come true. You can see some of them in my PORTFOLIO, I\n            also public their source code. I did not refactor or beautify almost\n            all of them, but I believe that you still can understand.\n          </p>\n\n          <p>\n            <span class=\"strong itatic main-color\"\n              >\"What is coming will come and we'll meet it when it does\".</span\n            >\n            <br />\n            <span class=\"italic\">- J.K. Rowling -</span>\n          </p>\n          <p>\n            So what I can do right now is try my best, keep learning from the\n            good ones, look what they do, and wait for an opportunity. The\n            opportunity will come for those who are prepared.\n          </p>\n          <p>\n            <span class=\"strong\"> If you ask me about 'GOAL'</span>, my GOAL is\n            to make the dream become true, becoming a piece of a big thing, and\n            make the world become a better place. But I know, to catch my dream.\n            I must climb on the top of the Pyramid. Only on top, I can see the\n            opportunity, and touch on it. This isn't my last target, but It's my\n            first step.\n          </p>\n        </div>\n      </div>\n      <div class=\"footer\">\n        <div id=\"footer-contact\">\n          <div id=\"m-icon\">\n            <a\n              class=\"m-icon gmail\"\n              href=\"https://mail.google.com/mail/?view=cm&fs=1&to=nhvu.95@gmail.com&su=HOW%20CAN%20I%20HELP%20U%3F\"\n              target=\"_blank\"\n              style=\"cursor: pointer\"\n            ></a>\n          </div>\n          <div id=\"m-contact\" style=\"cursor: pointer\">\n            <h3>\n              <span class=\"fname\">VU HIEU</span\n              ><span class=\"sname\"> NGUYEN</span>\n            </h3>\n            <h3 class=\"email\">nhvu.95@gmail.com</h3>\n          </div>\n        </div>\n        <div id=\"footer-download-cv\">\n          <div\n            class=\"download\"\n            onclick=\"window.open(\n                        'https://drive.google.com/file/d/1sNJLiX9THvwkWe3FFBDrOJPMWuLw9ykW/view?usp=sharing',\n                        '_blank'\n                      );\"\n            style=\"cursor: pointer\"\n          ></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "zdOv":
/*!******************************************************!*\
  !*** ./src/app/main-screen/hello/hello.component.ts ***!
  \******************************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_hello_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./hello.component.html */ "v+OB");
/* harmony import */ var _hello_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hello.component.scss */ "cGa3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HelloComponent = class HelloComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelloComponent.ctorParameters = () => [];
HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hello',
        template: _raw_loader_hello_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hello_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HelloComponent);



/***/ }),

/***/ "zkoq":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
  \***************************************************************************/
/*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function() { return MatGridAvatarCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridList", function() { return MatGridList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridListModule", function() { return MatGridListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTile", function() { return MatGridTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function() { return MatGridTileFooterCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function() { return MatGridTileHeaderCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileText", function() { return MatGridTileText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function() { return ɵTileCoordinator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function() { return MAT_GRID_LIST; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * @docs-private
 */



const _c0 = ["*"];
const _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
const _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
const _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n";
class TileCoordinator {
    constructor() {
        /** Index at which the search for the next gap will start. */
        this.columnIndex = 0;
        /** The current row index. */
        this.rowIndex = 0;
    }
    /** Gets the total number of rows occupied by tiles */
    get rowCount() { return this.rowIndex + 1; }
    /**
     * Gets the total span of rows occupied by tiles.
     * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
     */
    get rowspan() {
        const lastRowMax = Math.max(...this.tracker);
        // if any of the tiles has a rowspan that pushes it beyond the total row count,
        // add the difference to the rowcount
        return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
    }
    /**
     * Updates the tile positions.
     * @param numColumns Amount of columns in the grid.
     * @param tiles Tiles to be positioned.
     */
    update(numColumns, tiles) {
        this.columnIndex = 0;
        this.rowIndex = 0;
        this.tracker = new Array(numColumns);
        this.tracker.fill(0, 0, this.tracker.length);
        this.positions = tiles.map(tile => this._trackTile(tile));
    }
    /** Calculates the row and col position of a tile. */
    _trackTile(tile) {
        // Find a gap large enough for this tile.
        const gapStartIndex = this._findMatchingGap(tile.colspan);
        // Place tile in the resulting gap.
        this._markTilePosition(gapStartIndex, tile);
        // The next time we look for a gap, the search will start at columnIndex, which should be
        // immediately after the tile that has just been placed.
        this.columnIndex = gapStartIndex + tile.colspan;
        return new TilePosition(this.rowIndex, gapStartIndex);
    }
    /** Finds the next available space large enough to fit the tile. */
    _findMatchingGap(tileCols) {
        if (tileCols > this.tracker.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: tile with colspan ${tileCols} is wider than ` +
                `grid with cols="${this.tracker.length}".`);
        }
        // Start index is inclusive, end index is exclusive.
        let gapStartIndex = -1;
        let gapEndIndex = -1;
        // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
        do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
            // If there are no more empty spaces in this row at all, move on to the next row.
            if (gapStartIndex == -1) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.
            this.columnIndex = gapStartIndex + 1;
            // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
        } while ((gapEndIndex - gapStartIndex < tileCols) || (gapEndIndex == 0));
        // If we still didn't manage to find a gap, ensure that the index is
        // at least zero so the tile doesn't get pulled out of the grid.
        return Math.max(gapStartIndex, 0);
    }
    /** Move "down" to the next row. */
    _nextRow() {
        this.columnIndex = 0;
        this.rowIndex++;
        // Decrement all spaces by one to reflect moving down one row.
        for (let i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
        }
    }
    /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     */
    _findGapEndIndex(gapStartIndex) {
        for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
                return i;
            }
        }
        // The gap ends with the end of the row.
        return this.tracker.length;
    }
    /** Update the tile tracker to account for the given tile in the given space. */
    _markTilePosition(start, tile) {
        for (let i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
        }
    }
}
/**
 * Simple data structure for tile position (row, col).
 * @docs-private
 */
class TilePosition {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token used to provide a grid list to a tile and to avoid circular imports.
 * @docs-private
 */
const MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatGridTile {
    constructor(_element, _gridList) {
        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
    }
    /** Amount of rows that the grid tile takes up. */
    get rowspan() { return this._rowspan; }
    set rowspan(value) { this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)); }
    /** Amount of columns that the grid tile takes up. */
    get colspan() { return this._colspan; }
    set colspan(value) { this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)); }
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    _setStyle(property, value) {
        this._element.nativeElement.style[property] = value;
    }
}
MatGridTile.ɵfac = function MatGridTile_Factory(t) { return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8)); };
MatGridTile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridTile, selectors: [["mat-grid-tile"]], hostAttrs: [1, "mat-grid-tile"], hostVars: 2, hostBindings: function MatGridTile_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
    } }, inputs: { rowspan: "rowspan", colspan: "colspan" }, exportAs: ["matGridTile"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-figure"]], template: function MatGridTile_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
MatGridTile.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_GRID_LIST,] }] }
];
MatGridTile.propDecorators = {
    rowspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    colspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-tile',
                exportAs: 'matGridTile',
                host: {
                    'class': 'mat-grid-tile',
                    // Ensures that the "rowspan" and "colspan" input value is reflected in
                    // the DOM. This is needed for the grid-tile harness.
                    '[attr.rowspan]': 'rowspan',
                    '[attr.colspan]': 'colspan'
                },
                template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_GRID_LIST]
            }] }]; }, { rowspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class MatGridTileText {
    constructor(_element) {
        this._element = _element;
    }
    ngAfterContentInit() {
        Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
    }
}
MatGridTileText.ɵfac = function MatGridTileText_Factory(t) { return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MatGridTileText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridTileText, selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]], contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
    } }, ngContentSelectors: _c2, decls: 4, vars: 0, consts: [[1, "mat-grid-list-text"]], template: function MatGridTileText_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
MatGridTileText.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
MatGridTileText.propDecorators = {
    _lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], { descendants: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-tile-header, mat-grid-tile-footer',
                template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], { descendants: true }]
        }] }); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridAvatarCssMatStyler {
}
MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) { return new (t || MatGridAvatarCssMatStyler)(); };
MatGridAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridAvatarCssMatStyler, selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], hostAttrs: [1, "mat-grid-avatar"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-grid-avatar], [matGridAvatar]',
                host: { 'class': 'mat-grid-avatar' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridTileHeaderCssMatStyler {
}
MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) { return new (t || MatGridTileHeaderCssMatStyler)(); };
MatGridTileHeaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridTileHeaderCssMatStyler, selectors: [["mat-grid-tile-header"]], hostAttrs: [1, "mat-grid-tile-header"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-grid-tile-header',
                host: { 'class': 'mat-grid-tile-header' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridTileFooterCssMatStyler {
}
MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) { return new (t || MatGridTileFooterCssMatStyler)(); };
MatGridTileFooterCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridTileFooterCssMatStyler, selectors: [["mat-grid-tile-footer"]], hostAttrs: [1, "mat-grid-tile-footer"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-grid-tile-footer',
                host: { 'class': 'mat-grid-tile-footer' }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * RegExp that can be used to check whether a value will
 * be allowed inside a CSS `calc()` expression.
 */
const cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * @docs-private
 */
class TileStyler {
    constructor() {
        this._rows = 0;
        this._rowspan = 0;
    }
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param gutterSize Size of the grid's gutter.
     * @param tracker Instance of the TileCoordinator.
     * @param cols Amount of columns in the grid.
     * @param direction Layout direction of the grid.
     */
    init(gutterSize, tracker, cols, direction) {
        this._gutterSize = normalizeUnits(gutterSize);
        this._rows = tracker.rowCount;
        this._rowspan = tracker.rowspan;
        this._cols = cols;
        this._direction = direction;
    }
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    getBaseTileSize(sizePercent, gutterFraction) {
        // Take the base size percent (as would be if evenly dividing the size between cells),
        // and then subtracting the size of one gutter. However, since there are no gutters on the
        // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
        // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
        // edge evenly among the cells).
        return `(${sizePercent}% - (${this._gutterSize} * ${gutterFraction}))`;
    }
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param offset Number of tiles that have already been rendered in the row/column.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @return Position of the tile as a CSS calc() expression.
     */
    getTilePosition(baseSize, offset) {
        // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
        // row/column (offset).
        return offset === 0 ? '0' : calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
    }
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param span The tile's rowspan or colspan.
     * @return Size of the tile as a CSS calc() expression.
     */
    getTileSize(baseSize, span) {
        return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
    }
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param tile Tile to which to apply the styling.
     * @param rowIndex Index of the tile's row.
     * @param colIndex Index of the tile's column.
     */
    setStyle(tile, rowIndex, colIndex) {
        // Percent of the available horizontal space that one column takes up.
        let percentWidthPerTile = 100 / this._cols;
        // Fraction of the vertical gutter size that each column takes up.
        // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
        let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
        this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    }
    /** Sets the horizontal placement of the tile in the list. */
    setColStyles(tile, colIndex, percentWidth, gutterWidth) {
        // Base horizontal size of a column.
        let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
        // The width and horizontal position of each tile is always calculated the same way, but the
        // height and vertical position depends on the rowMode.
        let side = this._direction === 'rtl' ? 'right' : 'left';
        tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
        tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
    }
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     */
    getGutterSpan() {
        return `${this._gutterSize} * (${this._rowspan} - 1)`;
    }
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param tileHeight Height of the tile.
     */
    getTileSpan(tileHeight) {
        return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
    }
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * @docs-private
     */
    getComputedHeight() { return null; }
}
/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example `<mat-grid-list cols="3" rowHeight="100px">`
 * @docs-private
 */
class FixedTileStyler extends TileStyler {
    constructor(fixedRowHeight) {
        super();
        this.fixedRowHeight = fixedRowHeight;
    }
    init(gutterSize, tracker, cols, direction) {
        super.init(gutterSize, tracker, cols, direction);
        this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
        if (!cssCalcAllowedValue.test(this.fixedRowHeight) &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`);
        }
    }
    setRowStyles(tile, rowIndex) {
        tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return [
            'height', calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)
        ];
    }
    reset(list) {
        list._setListStyle(['height', null]);
        if (list._tiles) {
            list._tiles.forEach(tile => {
                tile._setStyle('top', null);
                tile._setStyle('height', null);
            });
        }
    }
}
/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
 * @docs-private
 */
class RatioTileStyler extends TileStyler {
    constructor(value) {
        super();
        this._parseRatio(value);
    }
    setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
        let percentHeightPerTile = percentWidth / this.rowHeightRatio;
        this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
        // Use padding-top and margin-top to maintain the given aspect ratio, as
        // a percentage-based value for these properties is applied versus the *width* of the
        // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
        tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));
        tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return [
            'paddingBottom', calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)
        ];
    }
    reset(list) {
        list._setListStyle(['paddingBottom', null]);
        list._tiles.forEach(tile => {
            tile._setStyle('marginTop', null);
            tile._setStyle('paddingTop', null);
        });
    }
    _parseRatio(value) {
        const ratioParts = value.split(':');
        if (ratioParts.length !== 2 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: invalid ratio given for row-height: "${value}"`);
        }
        this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
    }
}
/**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
 *
 * @docs-private
 */
class FitTileStyler extends TileStyler {
    setRowStyles(tile, rowIndex) {
        // Percent of the available vertical space that one row takes up.
        let percentHeightPerTile = 100 / this._rowspan;
        // Fraction of the horizontal gutter size that each column takes up.
        let gutterHeightPerTile = (this._rows - 1) / this._rows;
        // Base vertical size of a column.
        let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
        tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
    }
    reset(list) {
        if (list._tiles) {
            list._tiles.forEach(tile => {
                tile._setStyle('top', null);
                tile._setStyle('height', null);
            });
        }
    }
}
/** Wraps a CSS string in a calc function */
function calc(exp) {
    return `calc(${exp})`;
}
/** Appends pixels to a CSS string if no units are given. */
function normalizeUnits(value) {
    return value.match(/([A-Za-z%]+)$/) ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
const MAT_FIT_MODE = 'fit';
class MatGridList {
    constructor(_element, _dir) {
        this._element = _element;
        this._dir = _dir;
        /** The amount of space between tiles. This will be something like '5px' or '2em'. */
        this._gutter = '1px';
    }
    /** Amount of columns in the grid list. */
    get cols() { return this._cols; }
    set cols(value) {
        this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
    }
    /** Size of the grid list's gutter in pixels. */
    get gutterSize() { return this._gutter; }
    set gutterSize(value) { this._gutter = `${value == null ? '' : value}`; }
    /** Set internal representation of row height from the user-provided value. */
    get rowHeight() { return this._rowHeight; }
    set rowHeight(value) {
        const newValue = `${value == null ? '' : value}`;
        if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;
            this._setTileStyler(this._rowHeight);
        }
    }
    ngOnInit() {
        this._checkCols();
        this._checkRowHeight();
    }
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     */
    ngAfterContentChecked() {
        this._layoutTiles();
    }
    /** Throw a friendly error if cols property is missing */
    _checkCols() {
        if (!this.cols && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: must pass in number of columns. ` +
                `Example: <mat-grid-list cols="3">`);
        }
    }
    /** Default to equal width:height if rowHeight property is missing */
    _checkRowHeight() {
        if (!this._rowHeight) {
            this._setTileStyler('1:1');
        }
    }
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    _setTileStyler(rowHeight) {
        if (this._tileStyler) {
            this._tileStyler.reset(this);
        }
        if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
        }
        else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
        }
        else {
            this._tileStyler = new FixedTileStyler(rowHeight);
        }
    }
    /** Computes and applies the size and position for all children grid tiles. */
    _layoutTiles() {
        if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
        }
        const tracker = this._tileCoordinator;
        const tiles = this._tiles.filter(tile => !tile._gridList || tile._gridList === this);
        const direction = this._dir ? this._dir.value : 'ltr';
        this._tileCoordinator.update(this.cols, tiles);
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        tiles.forEach((tile, index) => {
            const pos = tracker.positions[index];
            this._tileStyler.setStyle(tile, pos.row, pos.col);
        });
        this._setListStyle(this._tileStyler.getComputedHeight());
    }
    /** Sets style on the main grid-list element, given the style name and value. */
    _setListStyle(style) {
        if (style) {
            this._element.nativeElement.style[style[0]] = style[1];
        }
    }
}
MatGridList.ɵfac = function MatGridList_Factory(t) { return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8)); };
MatGridList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridList, selectors: [["mat-grid-list"]], contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
    } }, hostAttrs: [1, "mat-grid-list"], hostVars: 1, hostBindings: function MatGridList_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
    } }, inputs: { cols: "cols", gutterSize: "gutterSize", rowHeight: "rowHeight" }, exportAs: ["matGridList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: MAT_GRID_LIST,
                useExisting: MatGridList
            }])], ngContentSelectors: _c0, decls: 2, vars: 0, template: function MatGridList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
MatGridList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
MatGridList.propDecorators = {
    _tiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatGridTile, { descendants: true },] }],
    cols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    gutterSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-list',
                exportAs: 'matGridList',
                template: "<div>\n  <ng-content></ng-content>\n</div>",
                host: {
                    'class': 'mat-grid-list',
                    // Ensures that the "cols" input value is reflected in the DOM. This is
                    // needed for the grid-list harness.
                    '[attr.cols]': 'cols'
                },
                providers: [{
                        provide: MAT_GRID_LIST,
                        useExisting: MatGridList
                    }],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { cols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gutterSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _tiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatGridTile, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatGridListModule {
}
MatGridListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatGridListModule });
MatGridListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatGridListModule_Factory(t) { return new (t || MatGridListModule)(); }, imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, { declarations: function () { return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]; }, exports: function () { return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                exports: [
                    MatGridList,
                    MatGridTile,
                    MatGridTileText,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],
                    MatGridTileHeaderCssMatStyler,
                    MatGridTileFooterCssMatStyler,
                    MatGridAvatarCssMatStyler
                ],
                declarations: [
                    MatGridList,
                    MatGridTile,
                    MatGridTileText,
                    MatGridTileHeaderCssMatStyler,
                    MatGridTileFooterCssMatStyler,
                    MatGridAvatarCssMatStyler
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Privately exported for the grid-list harness.
const ɵTileCoordinator = TileCoordinator;

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=grid-list.js.map

/***/ })

}]);
//# sourceMappingURL=main-screen-main-screen-module.js.map