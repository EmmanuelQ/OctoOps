webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myContainer{\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\t\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"myContainer\">\n\n<!--<div class=\"loading-overlay\" *ngIf=\"loading\">\n    <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n</div>-->\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_angular_material_module__ = __webpack_require__("./src/app/material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stock_stock_component__ = __webpack_require__("./src/app/stock/stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_routing_module__ = __webpack_require__("./src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stock_add_add_component__ = __webpack_require__("./src/app/stock/add/add.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ROUTES = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__stock_stock_component__["a" /* StockComponent */],
            __WEBPACK_IMPORTED_MODULE_11__stock_add_add_component__["a" /* AddComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__material_angular_material_module__["a" /* myAngularMaterialModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_stock_component__ = __webpack_require__("./src/app/stock/stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var homeRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */],
        children: [
            {
                path: 'stock',
                component: __WEBPACK_IMPORTED_MODULE_2__stock_stock_component__["a" /* StockComponent */]
            }
        ]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(homeRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]
        ]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"myContainer\" >\n\t\n\n\t<md-toolbar  class=\"myToolBar\">\n\t <i class=\"material-icons md-36 md-light drawer\" (click)=\"sidenav.toggle()\">reorder</i>\n\n\t <div class=\"profile-btn\">\n\t  \t<i class=\"material-icons md-36 md-light profile-icon\">face</i><p>Profile</p>\n\t  </div>\n\n\t  <div id=\"mySelectionMenu\">\n\t    <p (click)=\"activate('stats')\" (mouseover)=\"mouseOver('stats')\" (mouseleave)=\"remove()\">Stats</p>\n\t  \t<p (click)=\"activate('sales')\" (mouseover)=\"mouseOver('sales')\" (mouseleave)=\"remove()\">Sales</p>\n\t  \t<p (click)=\"activate('stock')\" (mouseover)=\"mouseOver('stock')\" (mouseleave)=\"remove()\">Stock</p>\n\t  \t<div id=\"selectionBar\"></div>\n\n\t  </div>\n\n\t</md-toolbar>\n\t<md-sidenav-container class=\"mainPage\">\n\t\t\n\t\n\t\t<md-sidenav #sidenav mode=\"side\" class=\"sideContent\">\n\t\t\tHello\n\t\t</md-sidenav>\n\t</md-sidenav-container>\n\t<router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myContainer {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #f0f0f1; }\n\n.myToolBar {\n  position: absolute;\n  display: block;\n  width: 100%;\n  z-index: 999;\n  background-color: #ffb7b7;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2); }\n\n.profile-btn {\n  position: absolute;\n  right: 40px; }\n  .profile-btn .profile-icon {\n    position: absolute;\n    right: 80px;\n    padding-right: 10px; }\n  .profile-btn p {\n    display: inline; }\n\n#mySelectionMenu {\n  visibility: hidden; }\n\np {\n  display: inline;\n  padding-right: 25px;\n  color: white;\n  cursor: pointer; }\n\n@media (min-width: 767px) {\n  #mySelectionMenu {\n    position: absolute;\n    visibility: visible;\n    right: 200px; }\n    #mySelectionMenu #selectionBar {\n      position: absolute;\n      background-color: white;\n      border-radius: 4px;\n      height: 5px;\n      width: 50px;\n      right: 25px;\n      opacity: 0.8;\n      transition: right 250ms ease-in-out; } }\n\n.drawer {\n  position: absolute; }\n\n.drawer:hover {\n  cursor: pointer; }\n\n.sideContent {\n  width: 80%; }\n  @media (min-width: 767px) {\n    .sideContent {\n      width: 30%; } }\n  @media (min-width: 992px) {\n    .sideContent {\n      width: 12%; } }\n\n.mainPage {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #f0f0f1; }\n\n#highlight {\n  position: absolute;\n  top: 1px;\n  height: 30px;\n  width: 60px;\n  z-index: -1;\n  border-radius: 4px;\n  right: 176px;\n  background-color: black;\n  opacity: 0.05; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        this.hoverDiv = document.createElement("div");
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.hoverDiv.style.position = "absolute";
        this.hoverDiv.style.top = "1px";
        this.hoverDiv.style.height = "30px";
        this.hoverDiv.style.width = "60px";
        this.hoverDiv.style.zIndex = "-1";
        this.hoverDiv.style.borderRadius = "4px";
        this.hoverDiv.style.backgroundColor = "grey";
        this.hoverDiv.style.opacity = "0.1";
    };
    HomeComponent.prototype.mouseOver = function (selection) {
        document.getElementById("mySelectionMenu").appendChild(this.hoverDiv);
        this.hoverDiv.style.visibility = "visible";
        switch (selection) {
            case "stats":
                this.hoverDiv.style.right = "176px";
                break;
            case "sales":
                this.hoverDiv.style.right = "99px";
                break;
            case "stock":
                this.hoverDiv.style.right = "19px";
                break;
        }
    };
    HomeComponent.prototype.remove = function () {
        this.hoverDiv.style.visibility = "hidden";
    };
    HomeComponent.prototype.activate = function (selection) {
        switch (selection) {
            case "stats":
                document.getElementById("selectionBar").style.right = "181px";
                //this.router.navigate(['home/stats']);
                break;
            case "sales":
                document.getElementById("selectionBar").style.right = "104px";
                break;
            case "stock":
                document.getElementById("selectionBar").style.right = "25px";
                this.remove();
                this.router.navigate(['home/stock']);
                break;
            default:
                // code...
                break;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"myContainer\">\n\t<form class=\"window\" [formGroup]=\"loginForm\" novalidate>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<img src=\"./assets/user.png\" class=\"Login-icon\" height=\"150\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"smspacer\"></div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"input\">\n\t\t\t\t  <input name=\"username\" class=\"inputbox\" formControlName=\"userName\" placeholder=\"Username ...\" required>\n\t\t\t\t  <div class=\"status\">\n\t\t\t\t    <p>Username</p>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"spacer\"></div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"input\">\n\t\t\t\t  <input  name=\"password\" class=\"inputbox\" formControlName=\"password\" placeholder=\"Password ...\"  type=\"password\" required>\n\t\t\t\t  <div class=\"status\">\n\t\t\t\t    <p>Password</p>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"spacer\"></div>\n\t\t<div style=\"height: 10px\"></div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<button name =\"submit\" type=\"Submit\" class=\"enterBtn\" (click)=\"onSubmit()\">Login</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\n  height: 70px; }\n\n.smspacer {\n  height: 40px; }\n\n.window {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 6%;\n  padding-bottom: 2%;\n  width: 95%; }\n  @media (min-width: 992px) {\n    .window {\n      width: 45%; } }\n  .window .Login-icon {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10%; }\n  .window .highlight {\n    width: 100%;\n    border-top: solid #e6e9f0 2px; }\n  .window .selector {\n    margin-top: 6%;\n    margin-left: auto;\n    margin-right: auto;\n    width: 60%; }\n  .window .enterBtn {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 2px;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.19);\n    width: 50%;\n    height: 45px;\n    border: 1px solid #E9E9E9;\n    background-color: #FFFFFF;\n    color: #FFCCCC;\n    font-size: 18pt;\n    font-weight: bold; }\n  .window .enterBtn:hover {\n    background-color: #e6e9f0;\n    opacity: 0.4;\n    cursor: pointer;\n    cursor: hand; }\n  .window .input {\n    position: relative;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 67%; }\n    .window .input .inputbox {\n      position: absolute;\n      border: 1px solid #E9E9E9;\n      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.19);\n      background-color: #e6e9f0;\n      opacity: 0.25;\n      padding: 0px;\n      padding-left: 36%;\n      width: 100%;\n      height: 45px;\n      font-size: 15pt; }\n      @media (min-width: 992px) {\n        .window .input .inputbox {\n          padding-left: 28%;\n          font-size: 12pt; } }\n    .window .input .inputbox:focus {\n      outline-width: 0px;\n      opacity: 0.35; }\n    .window .input .status {\n      position: absolute;\n      background-color: #e6e9f0;\n      text-align: center;\n      font-family: 'Bitter', serif;\n      opacity: 0.2;\n      border: solid #E9E9E9 1px;\n      height: 45px;\n      width: 33%; }\n      @media (min-width: 992px) {\n        .window .input .status {\n          width: 25%; } }\n      .window .input .status p {\n        margin: 12px;\n        margin-left: 6px;\n        color: #636363;\n        font-size: 9pt; }\n        @media (min-width: 992px) {\n          .window .input .status p {\n            margin-top: 12px;\n            font-size: 10pt; } }\n  .window .input {\n    position: relative;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 67%; }\n    .window .input .inputbox {\n      position: absolute;\n      border: 1px solid #E9E9E9;\n      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.19);\n      background-color: #e6e9f0;\n      opacity: 0.25;\n      padding: 0px;\n      padding-left: 36%;\n      width: 100%;\n      height: 45px;\n      font-size: 15pt; }\n      @media (min-width: 992px) {\n        .window .input .inputbox {\n          padding-left: 28%;\n          font-size: 12pt; } }\n    .window .input .inputbox:focus {\n      outline-width: 0px;\n      opacity: 0.35; }\n    .window .input .status {\n      position: absolute;\n      background-color: #e6e9f0;\n      text-align: center;\n      font-family: 'Bitter', serif;\n      opacity: 0.2;\n      border: solid #E9E9E9 1px;\n      height: 45px;\n      width: 33%; }\n      @media (min-width: 992px) {\n        .window .input .status {\n          width: 25%; } }\n      .window .input .status p {\n        margin: 12px;\n        margin-left: 6px;\n        color: #636363;\n        font-size: 9pt; }\n        @media (min-width: 992px) {\n          .window .input .status p {\n            margin-top: 12px;\n            font-size: 10pt; } }\n\n.myContainer {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #FFCCCC !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userauth_service__ = __webpack_require__("./src/app/userauth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(formBuilder, userAuth, router) {
        this.formBuilder = formBuilder;
        this.userAuth = userAuth;
        this.router = router;
        this.loading = false;
        this.createForm();
        this.router.events.subscribe(function (event) {
        });
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var userCred = this.loginForm.value;
        console.log("trying to do some shit");
        this.userAuth.authenticate(userCred.userName, userCred.password)
            .subscribe(function (data) {
            _this.router.navigate(['./home']);
            //console.log(data.email);
        });
    };
    //shows and hides thepsinner when naivation events occur
    LoginComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NavigationStart */]) {
            this.loading = true;
        }
        else if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* NavigationEnd */]) {
            this.loading = false;
        }
        else if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* NavigationCancel */]) {
            this.loading = false;
        }
        else if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* NavigationError */]) {
            this.loading = false;
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__userauth_service__["a" /* UserAuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__userauth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__userauth_service__["a" /* UserAuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/material/angular-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myAngularMaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var myAngularMaterialModule = (function () {
    function myAngularMaterialModule() {
    }
    return myAngularMaterialModule;
}());
myAngularMaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MdSidenavModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MdSidenavModule */]]
    })
], myAngularMaterialModule);

//# sourceMappingURL=angular-material.module.js.map

/***/ }),

/***/ "./src/app/stock/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/stock/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add works!\n</p>\n"

/***/ }),

/***/ "./src/app/stock/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddComponent = (function () {
    function AddComponent() {
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    return AddComponent;
}());
AddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-add',
        template: __webpack_require__("./src/app/stock/add/add.component.html"),
        styles: [__webpack_require__("./src/app/stock/add/add.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddComponent);

//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ "./src/app/stock/stock.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<p>HELLO</p>\n</body>\n"

/***/ }),

/***/ "./src/app/stock/stock.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  top: 64px;\n  background-color: transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/stock/stock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StockComponent = (function () {
    function StockComponent() {
    }
    StockComponent.prototype.ngOnInit = function () {
        console.log("momma we made it");
    };
    return StockComponent;
}());
StockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-stock',
        template: __webpack_require__("./src/app/stock/stock.component.html"),
        styles: [__webpack_require__("./src/app/stock/stock.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StockComponent);

//# sourceMappingURL=stock.component.js.map

/***/ }),

/***/ "./src/app/userauth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserAuthService = (function () {
    function UserAuthService(http) {
        this.http = http;
        this.authUrl = 'userauth';
    }
    UserAuthService.prototype.authenticate = function (username, password) {
        /*let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.authUrl, {username, password}, options)
                        .map(response => response.json());
                        
        */
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ email: "emmanuelq38", password: "pass12" });
    };
    return UserAuthService;
}());
UserAuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserAuthService);

var _a;
//# sourceMappingURL=userauth.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map