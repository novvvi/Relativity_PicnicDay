(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light justify-content-between\" style=\" background-color: #ffffff;\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"/assets/image/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    Picnic Day\n  </a>\n  <div class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n    <a class=\"nav-item nav-link\" href=\"#\">Mission</a>\n  </div>\n\n\n</nav>\n<div class=\"fullscreen-video-wrap\">\n  <video src=\"https://cdn.kapwing.com/final_5d7add6380c43700133a8f4d_551107.mp4\" autoplay=\"True\" loop=\"True\" muted=\"True\" >\n  </video>\n  <!-- https://streamable.com/oi3l5 -->\n</div>\n\n\n<div class=\"container\">\n  <app-search></app-search>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/result/result.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/result/result.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size: 90px;\"> {{airportInfo?.name}}</p>\r\n\r\n<div class=\"container airport-detail\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-4\">\r\n            <label>Weather</label>\r\n            <div style=\"margin-right: 5px; height: 90%;\" class=\"row detail-box\">\r\n                <img src=\"{{ weatherImg }}\" alt=\"clouds\" />\r\n                <p style=\"width: 100%;text-align: center; font-size: 20px;\">{{resultInfo?.weather}}</p>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-8\">\r\n            <label>Detail</label>\r\n            <div style=\" height: auto; padding-bottom: -10px;\" class=\"row detail-box\">\r\n                <table  class=\"table\">\r\n\r\n                    <tr>\r\n                        <th scope=\"row\">Type</th>\r\n                        <td>{{airportInfo?.type}}</td>\r\n                        <th scope=\"row\">Highest (F')</th>\r\n                        <td>{{resultInfo?.temp_max}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">Location</th>\r\n                        <td>{{airportInfo?.municipality}} , {{airportInfo?.country}}</td>\r\n                        <th scope=\"row\">Lowest (F')</th>\r\n                        <td>{{resultInfo?.temp_min}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th scope=\"row\">Updated</th>\r\n                        <td>{{airportInfo?.updatedAt}}</td>\r\n                        <th scope=\"row\">Speed (MPH)</th>\r\n                        <td>{{resultInfo?.speed}}</td>\r\n                    </tr>\r\n\r\n                </table>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"row \">\r\n                <label style=\"margin-top: 10px;\">Current Landing Direction</label>\r\n                <div style=\"width: 100%\" class=\"detail-box\">\r\n                    <div style=\"display: inline-block;\" *ngFor=\"let d of resultInfo?.directions\">\r\n                        <p class=\"direction\">{{d}}</p>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\r\n    <div class=\"col-md-auto\">\r\n        <img style=\"width: 200px; height: 200px; margin-top: 180px; margin-right: 13%; margin-left: 13%\" src=\"../assets/image/logofront.png\"\r\n            alt=\"Italian Trulli\">\r\n    </div>\r\n</div>\r\n<div class=\"row justify-content-md-center\" style=\"margin-top: 30px;\">\r\n    <div class=\"col col-xs-10  col-sm-10 col-md-8 \">\r\n        <form (ngSubmit)=\"_postSearch()\">\r\n            <div class=\"row search-bar search\">\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 \">\r\n                    <mat-form-field class=\"full-width\">\r\n\r\n                        <input type=\"text\" aria-label=\"Number\" matInput placeholder=\"Search for a airports\"\r\n                            [(ngModel)]=\"searchResult\" [matAutocomplete]=\"auto\" [formControl]=\"control\"\r\n                            (keyup.enter)=\"chooseFirstOption()\" class=\"\">\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let airports of filteredAirports | async\" [value]=\"airports.name\">\r\n                                {{airports.name}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                    <a type=\"submit\"><img style=\" width: 20px; height: 20px;\"\r\n                        src=\"https://img.icons8.com/cotton/64/000000/search--v5.png\"></a>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div style=\"margin-top: 300px\" class=\"col align-self-center header-content\">\r\n    <app-result *ngIf=\"airport_id\" [airportid]=\"airport_id\"></app-result>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullscreen-video-wrap{\r\n    position: absolute;\r\n    top: 60px;\r\n    left:0;\r\n    width:101%;\r\n    height:700px;\r\n    overflow:hidden;\r\n}\r\n\r\n.fullscreen-video-wrap video{\r\n    position: absolute;\r\n    min-height:200px;\r\n    min-width:100%;\r\n}\r\n\r\n.navbar-collapse .collapse .show {\r\n    position: static;\r\n}\r\n\r\n.navbar-nav {\r\n    position: static;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsTUFBTTtJQUNOLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbHNjcmVlbi12aWRlby13cmFwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6MTAxJTtcclxuICAgIGhlaWdodDo3MDBweDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cclxuLmZ1bGxzY3JlZW4tdmlkZW8td3JhcCB2aWRlb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1pbi1oZWlnaHQ6MjAwcHg7XHJcbiAgICBtaW4td2lkdGg6MTAwJTtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZSAuY29sbGFwc2UgLnNob3cge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxufVxyXG5cclxuLm5hdmJhci1uYXYge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ClientApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_h) {
        this._h = _h;
        this.baseUrl = "http://localhost:5000";
    }
    HttpService.prototype.getAll = function () {
        return this._h.get(this.baseUrl + "/api/airports");
    };
    HttpService.prototype.getAirport = function (id) {
        return this._h.get(this.baseUrl + "/api/airports/info/" + id);
    };
    HttpService.prototype.getResult = function (id) {
        return this._h.get(this.baseUrl + "/api/airports/result/" + id);
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/result/result.component.css":
/*!*********************************************!*\
  !*** ./src/app/result/result.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\np {\r\n    display: block;\r\n    margin-bottom: -16px;\r\n}\r\n\r\n\r\n.airport-detail {\r\n    display: block;\r\n    background-color: white;\r\n    border-radius: 25px;\r\n    box-shadow: 5px 5px 20px lightgray;\r\n    padding: 10px 20px 20px 20px;\r\n    margin: 50px 0px;\r\n    height: auto;\r\n    \r\n}\r\n\r\n\r\nlabel {\r\n    font-weight: lighter;\r\n    font-size: 22px;\r\n    margin-bottom: -3px;\r\n\r\n}\r\n\r\n\r\n.table {\r\n    border-bottom: 1px solid rgb(230, 229, 229);\r\n}\r\n\r\n\r\nimg {\r\n    height: 90%;\r\n    width: 100%;\r\n    \r\n}\r\n\r\n\r\n.detail-box {\r\n    border: 1px solid rgb(241, 241, 241);\r\n    border-radius: 10px;\r\n    padding:  10px 10px;\r\n}\r\n\r\n\r\n.direction {\r\n    display: inline-block;\r\n    font-size: 100px;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-weight: 600;\r\n    color: rgb(0, 0, 39);\r\n    margin-left: 25px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7OztBQUdBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsWUFBWTs7QUFFaEI7OztBQUlBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7O0FBRXZCOzs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVzs7QUFFZjs7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJhcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5wIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XHJcbn1cclxuXHJcblxyXG4uYWlycG9ydC1kZXRhaWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIG1hcmdpbjogNTBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcblxyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzAsIDIyOSwgMjI5KTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuLmRldGFpbC1ib3gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MSwgMjQxLCAyNDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6ICAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5kaXJlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMzkpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var ResultComponent = /** @class */ (function () {
    function ResultComponent(_hs) {
        this._hs = _hs;
    }
    ResultComponent.prototype.ngOnChanges = function (changes) {
        var airportid = changes.airportid;
        // console.log('prev value: ', airportid.previousValue);
        // console.log('got name: ', airportid.currentValue);
        this._airportid = airportid.currentValue;
        this._getAirport(this._airportid);
        this._getResult(this._airportid);
    };
    ResultComponent.prototype.ngOnInit = function () {
        this._getAirport(this._airportid);
        this._getResult(this._airportid);
    };
    ResultComponent.prototype._getAirport = function (id) {
        var _this = this;
        var obs = this._hs.getAirport(id);
        obs.subscribe(function (data) {
            _this.airportInfo = data[0];
        });
    };
    ;
    ResultComponent.prototype._getResult = function (id) {
        var _this = this;
        var obs = this._hs.getResult(id);
        obs.subscribe(function (data) {
            _this.resultInfo = data;
            _this.weatherImg = "../../assets/image/weather/" + data.weather + ".png";
        });
    };
    ;
    ResultComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ResultComponent.prototype, "airportid", void 0);
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/index.js!./src/app/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/result/result.component.css")]
        })
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  box-sizing: border-box;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n\r\n.v-header{\r\n  height:100vh;\r\n  display:flex;\r\n  align-items:center;\r\n  color:#fff;\r\n}\r\n\r\n\r\n/* .container{\r\n  max-width:960px;\r\n  padding-left:1rem;\r\n  padding-right:1rem;\r\n  margin:auto;\r\n  text-align:center;\r\n} */\r\n\r\n\r\n.header-content{\r\n  z-index:2;\r\n}\r\n\r\n\r\n.search-bar {\r\n  background-color: white;\r\n  width: 100%;\r\n  height: 75px;\r\n  padding-left: 8%;\r\n  padding-top: 10px;\r\n  margin-left: 1px;\r\n}\r\n\r\n\r\n.box {\r\n  padding-top: 7px;\r\n}\r\n\r\n\r\n.full-width {\r\n  min-width: 30px;\r\n  max-width: 90%;\r\n  width: 100%;\r\n}\r\n\r\n\r\n@media(max-width:960px){\r\n  .container{\r\n    padding-right:3rem;\r\n    padding-left:3rem;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7OztBQUVBOzs7Ozs7R0FNRzs7O0FBRUg7RUFDRSxTQUFTO0FBQ1g7OztBQUlBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztBQUNiOzs7QUFHQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6ImFwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG5cclxuLnYtaGVhZGVye1xyXG4gIGhlaWdodDoxMDB2aDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuXHJcbi8qIC5jb250YWluZXJ7XHJcbiAgbWF4LXdpZHRoOjk2MHB4O1xyXG4gIHBhZGRpbmctbGVmdDoxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6MXJlbTtcclxuICBtYXJnaW46YXV0bztcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufSAqL1xyXG5cclxuLmhlYWRlci1jb250ZW50e1xyXG4gIHotaW5kZXg6MjtcclxufVxyXG5cclxuXHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFweDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTYwcHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjNyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6M3JlbTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var SearchComponent = /** @class */ (function () {
    function SearchComponent(_hs) {
        this._hs = _hs;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._getAirportNames();
        this.filteredAirports = this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filter(value); }));
        this.searchResult;
    };
    SearchComponent.prototype._filter = function (value) {
        var _this = this;
        var avoidKeyword = ["air", "airp", "airpo", "airpor", "airport", "hel", "heli", "helip", "helipo", "helipor", "heliport"];
        var filterValue = this._normalizeValue(value);
        if (!this.airports)
            return [];
        if (this._normalizeValue(value).length < 4 || avoidKeyword.includes(this._normalizeValue(value))) {
            return null;
        }
        else {
            return this.airports.filter(function (airport) { return _this._normalizeValue(airport.name).includes(filterValue); });
        }
    };
    SearchComponent.prototype._normalizeValue = function (value) {
        return value.toLowerCase().replace(/\s/g, '');
    };
    SearchComponent.prototype._getAirportNames = function () {
        var _this = this;
        var obs = this._hs.getAll();
        obs.subscribe(function (data) {
            console.log(typeof data);
            _this.airports = data;
        });
    };
    SearchComponent.prototype.chooseFirstOption = function () {
        this.matAutocomplete.options.first.select();
    };
    // displayFn(state) {
    //   if (!state) return '';
    //   return state.name;
    // }
    SearchComponent.prototype._postSearch = function () {
        var _this = this;
        var id = this.airports.findIndex(function (a) { return a.name === _this.searchResult; });
        if (id == -1) {
            return null;
        }
        else {
            console.log(this.airports[id].airport_id);
            this.airport_id = this.airports[id].airport_id;
        }
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], { static: true })
    ], SearchComponent.prototype, "matAutocomplete", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\noveh\Dropbox\project\picnicDay\PicnicDaySln\src\PicnicDay\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map