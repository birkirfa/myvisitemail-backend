webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"wrapperClassName\">\r\n    <div [ngClass]=\"containerClassName\">\r\n        <app-menu class=\"desktop-menu menu-side-w menu-activated-on-click\" *ngIf=\"isAuth\"></app-menu>\r\n        <app-menu-mobile class=\"menu-mobile menu-activated-on-click color-scheme-dark\" *ngIf=\"isAuth\"></app-menu-mobile>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"display-type\" *ngIf=\"isAuth\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lock_screen_lock_screen_service__ = __webpack_require__("../../../../../src/app/lock-screen/lock-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(userService, renderer, lockScreenService) {
        this.userService = userService;
        this.renderer = renderer;
        this.lockScreenService = lockScreenService;
        this.isAuth = false;
        this.wrapperClasses = {
            auth: 'all-wrapper menu-side with-side-panel',
            notAuth: 'all-wrapper menu-side with-pattern'
        };
        this.containerClasses = {
            auth: 'layout-w',
            notAuth: 'auth-box-w' // wider centered
        };
        this.wrapperClassName = this.wrapperClasses['notAuth'];
        this.containerClassName = this.containerClasses['notAuth'];
        this.subscribe();
    }
    AppComponent.prototype.subscribe = function () {
        var _this = this;
        this.userService.isAuth.subscribe(function (isAuth) {
            if (_this.isAuth !== isAuth) {
                _this.handleChange(isAuth);
            }
        });
        if (this.isAuth) {
            this.lockScreenService.init();
        }
    };
    AppComponent.prototype.handleChange = function (isUserAllowed) {
        isUserAllowed ? this.addClass('auth-wrapper') : this.removeClass('auth-wrapper');
        this.isAuth = isUserAllowed;
        var key = isUserAllowed ? 'auth' : 'notAuth';
        this.wrapperClassName = this.wrapperClasses[key];
        this.containerClassName = this.containerClasses[key];
    };
    AppComponent.prototype.addClass = function (cls) {
        this.renderer.addClass(document.body, cls);
    };
    AppComponent.prototype.removeClass = function (cls) {
        this.renderer.removeClass(document.body, cls);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__lock_screen_lock_screen_service__["a" /* LockScreenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lock_screen_lock_screen_service__["a" /* LockScreenService */]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_menu_module__ = __webpack_require__("../../../../../src/app/menu/menu.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error_error_module__ = __webpack_require__("../../../../../src/app/error/error.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resort_customers_resort_customers_module__ = __webpack_require__("../../../../../src/app/resort-customers/resort-customers.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lock_screen_lock_screen_module__ = __webpack_require__("../../../../../src/app/lock-screen/lock-screen.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_module__ = __webpack_require__("../../../../../src/app/profile/profile.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_10__lock_screen_lock_screen_module__["a" /* LockScreenModule */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_7__menu_menu_module__["a" /* MenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__error_error_module__["a" /* ErrorModule */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_module__["a" /* ProfileModule */],
                __WEBPACK_IMPORTED_MODULE_9__resort_customers_resort_customers_module__["a" /* ResortCustomersModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/core/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_guards_login_guard_service__ = __webpack_require__("../../../../../src/app/core/guards/login-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lock_screen_lock_screen_component__ = __webpack_require__("../../../../../src/app/lock-screen/lock-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_guards_lock_guard_service__ = __webpack_require__("../../../../../src/app/core/guards/lock-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resort_customers_resort_details_email_form_email_form_component__ = __webpack_require__("../../../../../src/app/resort-customers/resort-details/email-form/email-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__resort_customers_add_customer_add_customer_component__ = __webpack_require__("../../../../../src/app/resort-customers/add-customer/add-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__resort_customers_manage_customers_manage_customers_component__ = __webpack_require__("../../../../../src/app/resort-customers/manage-customers/manage-customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__resort_customers_resort_details_resort_details_component__ = __webpack_require__("../../../../../src/app/resort-customers/resort-details/resort-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__core_guards_login_guard_service__["a" /* LoginGuard */]] },
    { path: 'message', component: __WEBPACK_IMPORTED_MODULE_5__error_error_component__["a" /* ErrorComponent */] },
    { path: 'lock', component: __WEBPACK_IMPORTED_MODULE_7__lock_screen_lock_screen_component__["a" /* LockScreenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__core_guards_lock_guard_service__["a" /* LockGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'add-customer', component: __WEBPACK_IMPORTED_MODULE_11__resort_customers_add_customer_add_customer_component__["a" /* AddCustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manage-customers', component: __WEBPACK_IMPORTED_MODULE_12__resort_customers_manage_customers_manage_customers_component__["a" /* ManageCustomersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'resort-details/:resortId', component: __WEBPACK_IMPORTED_MODULE_13__resort_customers_resort_details_resort_details_component__["a" /* ResortDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'resort-details/booked/:resortId', component: __WEBPACK_IMPORTED_MODULE_10__resort_customers_resort_details_email_form_email_form_component__["a" /* EmailFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'resort-details/check-in/:resortId', component: __WEBPACK_IMPORTED_MODULE_10__resort_customers_resort_details_email_form_email_form_component__["a" /* EmailFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'resort-details/check-out/:resortId', component: __WEBPACK_IMPORTED_MODULE_10__resort_customers_resort_details_email_form_email_form_component__["a" /* EmailFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'resort-details/cancellation/:resortId', component: __WEBPACK_IMPORTED_MODULE_10__resort_customers_resort_details_email_form_email_form_component__["a" /* EmailFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards_auth_guard_service__["a" /* AuthGuard */]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/core/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interceptors_auth_interceptor_service__ = __webpack_require__("../../../../../src/app/core/interceptors/auth-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interceptors_api_requests_interceptor_service__ = __webpack_require__("../../../../../src/app/core/interceptors/api-requests-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_login_guard_service__ = __webpack_require__("../../../../../src/app/core/guards/login-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_lock_guard_service__ = __webpack_require__("../../../../../src/app/core/guards/lock-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__guards_lock_guard_service__["a" /* LockGuard */],
                __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_6__guards_login_guard_service__["a" /* LoginGuard */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_4__interceptors_auth_interceptor_service__["a" /* AuthInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_5__interceptors_api_requests_interceptor_service__["a" /* ApiRequestsInterceptor */], multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/guards/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.userService.getUser().isAuth) {
            return true;
        }
        this.router.navigateByUrl('/login');
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/guards/lock-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockGuard = /** @class */ (function () {
    function LockGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LockGuard.prototype.canActivate = function () {
        var user = this.userService.getUser();
        if (!user.isAuth && user.eMail && user.eMail.length > 0) {
            return true;
        }
        this.router.navigateByUrl('/login');
        return false;
    };
    LockGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], LockGuard);
    return LockGuard;
    var _a, _b;
}());

//# sourceMappingURL=lock-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/guards/login-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = /** @class */ (function () {
    function LoginGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function () {
        if (this.userService.getUser().isAuth) {
            this.router.navigateByUrl('/home');
            return false;
        }
        return true;
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], LoginGuard);
    return LoginGuard;
    var _a, _b;
}());

//# sourceMappingURL=login-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/interceptors/api-requests-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiRequestsInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiRequestsInterceptor = /** @class */ (function () {
    function ApiRequestsInterceptor() {
    }
    ApiRequestsInterceptor.prototype.intercept = function (req, next) {
        // adds baseUrl in case of relative paths
        if (req.url.indexOf('http') < 0) {
            req = req.clone({ url: "" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].origin + req.url });
        }
        if (!req.headers.has('Content-Type')) {
            if (req.body && req.body instanceof FormData === false) {
                req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
            }
        }
        if (!req.headers.has('Accept')) {
            req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        }
        if (!req.headers.has('origin')) {
            req = req.clone({ headers: req.headers.set('origin', __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].origin) });
        }
        return next.handle(req);
    };
    ApiRequestsInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApiRequestsInterceptor);
    return ApiRequestsInterceptor;
}());

//# sourceMappingURL=api-requests-interceptor.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/interceptors/auth-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req.clone();
        return next.handle(authReq);
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

//# sourceMappingURL=auth-interceptor.service.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-w\">\r\n    <div class=\"content-i\">\r\n        <div class=\"content-box\">\r\n            <div class=\"big-error-w\">\r\n                <h1>\r\n                    {{ error.status }}\r\n                </h1>\r\n                <h5>\r\n                    {{ error.title }}\r\n                </h5>\r\n                <h4>\r\n                    {{ error.description }}\r\n                </h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/error/error.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_service__ = __webpack_require__("../../../../../src/app/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_common_models__ = __webpack_require__("../../../../../src/app/shared/models/common.models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(componentService) {
        this.componentService = componentService;
        this.error = new __WEBPACK_IMPORTED_MODULE_2__shared_models_common_models__["a" /* AppMessage */]();
    }
    ErrorComponent.prototype.ngOnInit = function () {
        this.error = this.componentService.message;
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__error_service__["a" /* ErrorService */]) === "function" && _a || Object])
    ], ErrorComponent);
    return ErrorComponent;
    var _a;
}());

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_service__ = __webpack_require__("../../../../../src/app/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__error_component__["a" /* ErrorComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__error_component__["a" /* ErrorComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorService */]
            ]
        })
    ], ErrorModule);
    return ErrorModule;
}());

//# sourceMappingURL=error.module.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_common_models__ = __webpack_require__("../../../../../src/app/shared/models/common.models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorService = /** @class */ (function () {
    function ErrorService(router) {
        this.router = router;
    }
    ErrorService.prototype.handleMessage = function (message) {
        this.prepareMessage(message);
        this.logError();
        this.router.navigateByUrl('message');
    };
    ErrorService.prototype.logError = function () {
        console.log('message', this.message);
    };
    ErrorService.prototype.prepareMessage = function (message) {
        if (this.isAppMessage(message)) {
            this.message = message;
            return;
        }
        var appMessage = new __WEBPACK_IMPORTED_MODULE_2__shared_models_common_models__["a" /* AppMessage */]();
        appMessage.status = message.status;
        var err = message.error || message.message;
        if (err.message) {
            err = err.message;
        }
        appMessage.description = err || err.message;
        appMessage.title = message.statusText;
        this.message = appMessage;
    };
    ErrorService.prototype.isAppMessage = function (message) {
        if (message instanceof __WEBPACK_IMPORTED_MODULE_2__shared_models_common_models__["a" /* AppMessage */] || message.title !== undefined) {
            return true;
        }
        return false;
    };
    ErrorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], ErrorService);
    return ErrorService;
    var _a;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"block-header\">\r\n        </div>\r\n\r\n        <!-- Widgets -->\r\n        <div class=\"row clearfix\">\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"info-box bg-bluemaroon hover-expand-effect\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"material-icons\">trending_up</i>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"text\">\r\n\r\n                            New Customers</div>\r\n                        <div class=\"number count-to\" data-from=\"0\" data-to=\"125\" data-speed=\"15\" data-fresh-interval=\"20\">{{ newCustomers }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"info-box bg-bluemaroon hover-expand-effect\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"material-icons\">trending_down</i>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"text\">Customers deleted</div>\r\n                        <div class=\"number count-to\" data-from=\"0\" data-to=\"2\" data-speed=\"1000\" data-fresh-interval=\"20\">{{ deletedCustomers }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"info-box bg-bluemaroon hover-expand-effect\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"material-icons\">message</i>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"text\">E-mails Sent</div>\r\n                        <div class=\"number count-to\" data-from=\"0\" data-to=\"243\" data-speed=\"1000\" data-fresh-interval=\"20\">{{ total.emailsSent }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"info-box bg-bluemaroon hover-expand-effect\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"material-icons\">person_add</i>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"text\">New Bookings</div>\r\n                        <div class=\"number count-to\" data-from=\"0\" data-to=\"1225\" data-speed=\"1000\" data-fresh-interval=\"20\">{{ newBookings }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- #END# Widgets -->\r\n\r\n        <div class=\"row clearfix\">\r\n            <!-- Visitors -->\r\n            <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"body bg-blue\">\r\n                        <div class=\"sparkline\" data-type=\"line\" data-spot-radius=\"4\" data-highlight-spot-color=\"rgb(233, 30, 99)\" data-highlight-line-color=\"#fff\"\r\n                            data-min-spot-color=\"rgb(255,255,255)\" data-max-spot-color=\"rgb(255,255,255)\" data-spot-color=\"rgb(255,255,255)\"\r\n                            data-offset=\"90\" data-width=\"100%\" data-height=\"92px\" data-line-width=\"2\" data-line-color=\"rgba(255,255,255,0.7)\"\r\n                            data-fill-color=\"rgba(0, 188, 212, 0)\">\r\n                            <div class=\"m-b--35 font-bold\">E-mails Sent</div>\r\n                        </div>\r\n                        <ul class=\"dashboard-stat-list\">\r\n                            <li>\r\n                                TODAY\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[0].emailsSent }}</b>\r\n                                    <small>USERS</small>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                YESTERDAY\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[1].emailsSent }}</b>\r\n                                    <small>USERS</small>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                LAST WEEK\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[2].emailsSent }}</b>\r\n                                    <small>USERS</small>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                LAST MONTH\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[3].emailsSent }}</b>\r\n                                    <small>USERS</small>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                LAST YEAR\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[4].emailsSent }}</b>\r\n                                    <small>USERS</small>\r\n                                </span>\r\n                            </li>\r\n                        </ul>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- #END# Visitors -->\r\n\r\n            <!-- Answered Tickets -->\r\n            <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"body bg-blue\">\r\n                        <div class=\"font-bold m-b--35\">CTR </div>\r\n                        <ul class=\"dashboard-stat-list\">\r\n                            <li>\r\n                                TODAY\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[0].ctr * 100 }}%</b>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                YESTERDAY\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[1].ctr * 100 }}%</b>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                LAST WEEK\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[2].ctr * 100 }}%</b>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                LAST MONTH\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[3].ctr * 100 }}%</b>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                LAST YEAR\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[4].ctr * 100 }}%</b>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                ALL\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ total.ctr * 100 }}%</b>\r\n                                </span>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- #END# Answered Tickets -->\r\n\r\n            <!-- Answered Tickets -->\r\n            <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"body bg-blue\">\r\n                        <div class=\"font-bold m-b--35\">Bounce Rate </div>\r\n                        <ul class=\"dashboard-stat-list\">\r\n                            <li>\r\n                                TODAY\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[0].bounceRate * 100 }}%</b>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                YESTERDAY\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[1].bounceRate * 100 }}%</b>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                LAST WEEK\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[2].bounceRate * 100 }}%</b>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                LAST MONTH\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[3].bounceRate * 100 }}%</b>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                LAST YEAR\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ statistics[4].bounceRate * 100 }}%</b>\r\n                                </span>\r\n                            </li>\r\n                            <li>\r\n                                ALL\r\n                                <span class=\"pull-right\">\r\n                                    <b>{{ total.bounceRate * 100 }}%</b>\r\n                                </span>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- #END# Answered Tickets -->\r\n        </div>\r\n\r\n        <!-- Widgets -->\r\n        <div class=\"row clearfix\">\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"info-box bg-bluemaroon hover-expand-effect\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"text\">\r\n\r\n                            South</div>\r\n                        <div class=\"number count-to\" data-from=\"0\" data-to=\"215\" data-speed=\"1115\" data-fresh-interval=\"20\"> {{ south }} </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"info-box bg-bluemaroon hover-expand-effect\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"text\">East</div>\r\n                        <div class=\"number count-to\" data-from=\"0\" data-to=\"43\" data-speed=\"1000\" data-fresh-interval=\"20\">{{ east }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"info-box bg-bluemaroon hover-expand-effect\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"material-icons\">keyboard_arrow_up</i>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"text\">North</div>\r\n                        <div class=\"number count-to\" data-from=\"0\" data-to=\"66\" data-speed=\"1000\" data-fresh-interval=\"20\"> {{ north }} </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"info-box bg-bluemaroon hover-expand-effect\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"material-icons\">keyboard_arrow_left</i>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"text\">West</div>\r\n                        <div class=\"number count-to\" data-from=\"0\" data-to=\"55\" data-speed=\"1000\" data-fresh-interval=\"20\"> {{ west }} </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- #END# Widgets -->\r\n        <!-- Widgets -->\r\n        <div class=\"row clearfix\">\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"info-box bg-bluemaroon hover-expand-effect\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"text\">\r\n\r\n                            Reykjavik</div>\r\n                        <div class=\"number count-to\" data-from=\"0\" data-to=\"421\" data-speed=\"1115\" data-fresh-interval=\"20\"> {{ reykjavik }} </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"info-box bg-bluemaroon hover-expand-effect\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"text\">Reykjanes</div>\r\n                        <div class=\"number count-to\" data-from=\"0\" data-to=\"24\" data-speed=\"1000\" data-fresh-interval=\"20\"> {{ rejkjanes }} </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"info-box bg-bluemaroon hover-expand-effect\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"material-icons\">keyboard_arrow_up</i>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"text\">Westfjords</div>\r\n                        <div class=\"number count-to\" data-from=\"0\" data-to=\"33\" data-speed=\"1000\" data-fresh-interval=\"20\"> {{ westfjords }} </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                <div class=\"info-box bg-bluemaroon hover-expand-effect\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"material-icons\">public</i>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"text\">All</div>\r\n                        <div class=\"number count-to\" data-from=\"0\" data-to=\"764\" data-speed=\"1000\" data-fresh-interval=\"20\"> {{ allCustomers }} </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- #END# Widgets -->\r\n        <div class=\"row clearfix\">\r\n            <!-- Task Info -->\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Navbar ====================================== */\n/*!\r\n * Materialize v0.97.7 (http://materializecss.com)\r\n * Copyright 2014-2015 Materialize\r\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\r\n */\n/* Radio Buttons\r\n   ========================================================================== */\n[type=\"radio\"]:not(:checked),\n[type=\"radio\"]:checked {\n  position: absolute;\n  left: -9999px;\n  opacity: 0; }\n\n[type=\"radio\"]:not(:checked) + label,\n[type=\"radio\"]:checked + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  transition: .28s ease;\n  /* webkit (konqueror) browsers */\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n[type=\"radio\"] + label:before,\n[type=\"radio\"] + label:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 4px;\n  width: 16px;\n  height: 16px;\n  z-index: 0;\n  transition: .28s ease; }\n\n/* Unchecked styles */\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:not(:checked) + label:after,\n[type=\"radio\"]:checked + label:before,\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:before,\n[type=\"radio\"].with-gap:checked + label:after {\n  border-radius: 50%; }\n\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:not(:checked) + label:after {\n  border: 2px solid #5a5a5a; }\n\n[type=\"radio\"]:not(:checked) + label:after {\n  z-index: -1;\n  transform: scale(0); }\n\n/* Checked styles */\n[type=\"radio\"]:checked + label:before {\n  border: 2px solid transparent; }\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:before,\n[type=\"radio\"].with-gap:checked + label:after {\n  border: 2px solid #26a69a; }\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:after {\n  background-color: #26a69a;\n  z-index: 0; }\n\n[type=\"radio\"]:checked + label:after {\n  transform: scale(1.02); }\n\n/* Radio With gap */\n[type=\"radio\"].with-gap:checked + label:after {\n  transform: scale(0.5); }\n\n/* Focused styles */\n[type=\"radio\"].tabbed:focus + label:before {\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1); }\n\n/* Disabled Radio With gap */\n[type=\"radio\"].with-gap:disabled:checked + label:before {\n  border: 2px solid rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"].with-gap:disabled:checked + label:after {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.26); }\n\n/* Disabled style */\n[type=\"radio\"]:disabled:not(:checked) + label:before,\n[type=\"radio\"]:disabled:checked + label:before {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"]:disabled + label {\n  color: rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"]:disabled:not(:checked) + label:before {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"]:disabled:checked + label:after {\n  background-color: rgba(0, 0, 0, 0.26);\n  border-color: #BDBDBD; }\n\n/* Checkboxes\r\n      ========================================================================== */\n/* CUSTOM CSS CHECKBOXES */\nform p {\n  margin-bottom: 10px;\n  text-align: left; }\n\nform p:last-child {\n  margin-bottom: 0; }\n\n/* Remove default checkbox */\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  left: -9999px;\n  opacity: 0; }\n\n[type=\"checkbox\"] {\n  /* checkbox aspect */ }\n\n[type=\"checkbox\"] + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  -webkit-user-select: none;\n  /* webkit (safari, chrome) browsers */\n  -moz-user-select: none;\n  /* mozilla browsers */\n  -khtml-user-select: none;\n  /* webkit (konqueror) browsers */\n  -ms-user-select: none;\n  /* IE10+ */ }\n\n[type=\"checkbox\"] + label:before,\n[type=\"checkbox\"]:not(.filled-in) + label:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  z-index: 0;\n  border: 2px solid #5a5a5a;\n  border-radius: 1px;\n  margin-top: 2px;\n  transition: .2s; }\n\n[type=\"checkbox\"]:not(.filled-in) + label:after {\n  border: 0;\n  transform: scale(0); }\n\n[type=\"checkbox\"]:not(:checked):disabled + label:before {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.26); }\n\n[type=\"checkbox\"].tabbed:focus + label:after {\n  transform: scale(1);\n  border: 0;\n  border-radius: 50%;\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.1); }\n\n[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -5px;\n  width: 12px;\n  height: 22px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #26a69a;\n  border-bottom: 2px solid #26a69a;\n  transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform-origin: 100% 100%; }\n\n[type=\"checkbox\"]:checked:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.26);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.26); }\n\n/* Indeterminate checkbox */\n[type=\"checkbox\"]:indeterminate + label:before {\n  top: -11px;\n  left: -12px;\n  width: 10px;\n  height: 22px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid #26a69a;\n  border-bottom: none;\n  transform: rotate(90deg);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform-origin: 100% 100%; }\n\n[type=\"checkbox\"]:indeterminate:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n[type=\"checkbox\"].filled-in + label:after {\n  border-radius: 2px; }\n\n[type=\"checkbox\"].filled-in + label:before,\n[type=\"checkbox\"].filled-in + label:after {\n  content: '';\n  left: 0;\n  position: absolute;\n  /* .1s delay is for check animation */\n  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  z-index: 1; }\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:before {\n  width: 0;\n  height: 0;\n  border: 3px solid transparent;\n  left: 6px;\n  top: 10px;\n  transform: rotateZ(37deg);\n  transform-origin: 100% 100%; }\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:after {\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 2px solid #5a5a5a;\n  top: 0px;\n  z-index: 0; }\n\n[type=\"checkbox\"].filled-in:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 8px;\n  height: 13px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  transform: rotateZ(37deg);\n  transform-origin: 100% 100%; }\n\n[type=\"checkbox\"].filled-in:checked + label:after {\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0; }\n\n[type=\"checkbox\"].filled-in.tabbed:focus + label:after {\n  border-radius: 2px;\n  border-color: #5a5a5a;\n  background-color: rgba(0, 0, 0, 0.1); }\n\n[type=\"checkbox\"].filled-in.tabbed:checked:focus + label:after {\n  border-radius: 2px;\n  background-color: #26a69a;\n  border-color: #26a69a; }\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:before {\n  background-color: transparent;\n  border: 2px solid transparent; }\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:after {\n  border-color: transparent;\n  background-color: #BDBDBD; }\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:before {\n  background-color: transparent; }\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:after {\n  background-color: #BDBDBD;\n  border-color: #BDBDBD; }\n\n/* Switch\r\n      ========================================================================== */\n.switch,\n.switch * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none; }\n\n.switch label {\n  cursor: pointer; }\n\n.switch label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #84c7c1; }\n\n.switch label input[type=checkbox]:checked + .lever:after {\n  background-color: #26a69a;\n  left: 24px; }\n\n.switch label .lever {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 15px;\n  background-color: #818181;\n  border-radius: 15px;\n  margin-right: 10px;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n  margin: 0 16px; }\n\n.switch label .lever:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 21px;\n  height: 21px;\n  background-color: #F1F1F1;\n  border-radius: 21px;\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n  left: -5px;\n  top: -3px;\n  transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease; }\n\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active::after,\ninput[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(38, 166, 154, 0.1); }\n\ninput[type=checkbox]:not(:disabled) ~ .lever:active:after,\ninput[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.08); }\n\n.switch input[type=checkbox][disabled] + .lever {\n  cursor: default; }\n\n.switch label input[type=checkbox][disabled] + .lever:after,\n.switch label input[type=checkbox][disabled]:checked + .lever:after {\n  background-color: #BDBDBD; }\n\n.navbar {\n  font-family: \"Roboto Slab\", sans-serif;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  background-color: transparent;\n  border-radius: 0;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%; }\n\n.navbar .navbar-brand {\n  color: #336699;\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.navbar-brand {\n  color: #336699; }\n\n.navbar-brand:hover {\n  color: #336699; }\n\n.navbar-brand:active {\n  color: #336699; }\n\n.navbar-brand:focus {\n  color: #336699; }\n\n.navbar .navbar-custom-right-menu {\n  float: right; }\n\n.navbar .navbar-toggle {\n  text-decoration: none;\n  color: #fff;\n  width: 20px;\n  height: 20px;\n  margin-top: -4px;\n  margin-right: 17px; }\n\n.navbar .navbar-toggle:before {\n  content: '\\E8D5';\n  font-family: 'Roboto Slab';\n  font-size: 26px; }\n\n.navbar .navbar-collapse.in {\n  overflow: visible; }\n\n#bg {\n  position: fixed;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  z-index: -1; }\n\n#bg img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  min-width: 50%;\n  min-height: 50%; }\n\n.ls-closed .sidebar {\n  margin-left: -300px; }\n\n.ls-closed section.content {\n  margin-left: 15px; }\n\n.ls-closed .bars:after, .ls-closed .bars:before {\n  font-family: 'Roboto Slab';\n  font-size: 24px;\n  position: absolute;\n  top: 18px;\n  left: 20px;\n  margin-right: 10px;\n  transform: scale(0);\n  transition: all 0.3s; }\n\n.ls-closed .bars:before {\n  content: '\\E5D2';\n  transform: scale(1); }\n\n.ls-closed .bars:after {\n  content: '\\E5C4';\n  transform: scale(0); }\n\n.ls-closed .navbar-brand {\n  margin-left: 30px; }\n\n.overlay-open .bars:before {\n  transform: scale(0); }\n\n.overlay-open .bars:after {\n  transform: scale(1); }\n\n.navbar-header {\n  padding: 10px 7px; }\n\n.navbar-header .bars {\n  float: left;\n  text-decoration: none; }\n\n.navbar-nav > li > a {\n  padding: 7px 7px 2px 7px;\n  margin-top: 17px;\n  margin-left: 5px; }\n\n.navbar-nav .dropdown-menu {\n  margin-top: -40px !important; }\n\n.label-count {\n  position: absolute;\n  top: 2px;\n  right: 6px;\n  font-size: 10px;\n  line-height: 15px;\n  background-color: #000;\n  padding: 0 4px;\n  border-radius: 3px; }\n\n.theme-blue .nav > li > a {\n  color: transparent; }\n\n.theme-blue .nav > li > a:hover {\n  background-color: transparent; }\n\n.theme-blue .nav > li > a:focus {\n  background-color: transparent; }\n\n.nav .open > a {\n  background-color: transparent; }\n\n.nav .open > a:hover {\n  background-color: transparent; }\n\n.nav .open > a:focus {\n  background-color: transparent; }\n\n.bars {\n  color: #fff; }\n\n.sidebar .menu .list li.active {\n  background-color: transparent; }\n\n.theme-blue .sidebar .menu .list li.active > :first-child i, .theme-blue .sidebar .menu .list li.active > :first-child span {\n  color: #336699; }\n\n.sidebar .menu .list .toggled {\n  background-color: transparent; }\n\n.sidebar .menu .list .ml-menu {\n  background-color: transparent; }\n\n.sidebar .legal {\n  background-color: #transparent; }\n\n.theme-blue .sidebar .legal .copyright a {\n  color: #336699 !important; }\n\n.col-red .navbar .navbar-brand,\n.col-red .navbar .navbar-brand:hover,\n.col-red .navbar .navbar-brand:active,\n.col-red .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-red .navbar .nav > li > a:hover,\n.col-red .navbar .nav > li > a:focus,\n.col-red .navbar .nav .open > a,\n.col-red .navbar .nav .open > a:hover,\n.col-red .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-red .navbar .nav > li > a {\n  color: #fff; }\n\n.col-red .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-red .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-pink .navbar .navbar-brand,\n.col-pink .navbar .navbar-brand:hover,\n.col-pink .navbar .navbar-brand:active,\n.col-pink .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-pink .navbar .nav > li > a:hover,\n.col-pink .navbar .nav > li > a:focus,\n.col-pink .navbar .nav .open > a,\n.col-pink .navbar .nav .open > a:hover,\n.col-pink .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-pink .navbar .nav > li > a {\n  color: #fff; }\n\n.col-pink .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-pink .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-purple .navbar .navbar-brand,\n.col-purple .navbar .navbar-brand:hover,\n.col-purple .navbar .navbar-brand:active,\n.col-purple .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-purple .navbar .nav > li > a:hover,\n.col-purple .navbar .nav > li > a:focus,\n.col-purple .navbar .nav .open > a,\n.col-purple .navbar .nav .open > a:hover,\n.col-purple .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-purple .navbar .nav > li > a {\n  color: #fff; }\n\n.col-purple .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-purple .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-deep-purple .navbar .navbar-brand,\n.col-deep-purple .navbar .navbar-brand:hover,\n.col-deep-purple .navbar .navbar-brand:active,\n.col-deep-purple .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-deep-purple .navbar .nav > li > a:hover,\n.col-deep-purple .navbar .nav > li > a:focus,\n.col-deep-purple .navbar .nav .open > a,\n.col-deep-purple .navbar .nav .open > a:hover,\n.col-deep-purple .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-deep-purple .navbar .nav > li > a {\n  color: #fff; }\n\n.col-deep-purple .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-deep-purple .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-indigo .navbar .navbar-brand,\n.col-indigo .navbar .navbar-brand:hover,\n.col-indigo .navbar .navbar-brand:active,\n.col-indigo .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-indigo .navbar .nav > li > a:hover,\n.col-indigo .navbar .nav > li > a:focus,\n.col-indigo .navbar .nav .open > a,\n.col-indigo .navbar .nav .open > a:hover,\n.col-indigo .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-indigo .navbar .nav > li > a {\n  color: #fff; }\n\n.col-indigo .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-indigo .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-blue .navbar .navbar-brand,\n.col-blue .navbar .navbar-brand:hover,\n.col-blue .navbar .navbar-brand:active,\n.col-blue .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-blue .navbar .nav > li > a:hover,\n.col-blue .navbar .nav > li > a:focus,\n.col-blue .navbar .nav .open > a,\n.col-blue .navbar .nav .open > a:hover,\n.col-blue .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-blue .navbar .nav > li > a {\n  color: #fff; }\n\n.col-blue .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-blue .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-light-blue .navbar .navbar-brand,\n.col-light-blue .navbar .navbar-brand:hover,\n.col-light-blue .navbar .navbar-brand:active,\n.col-light-blue .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-light-blue .navbar .nav > li > a:hover,\n.col-light-blue .navbar .nav > li > a:focus,\n.col-light-blue .navbar .nav .open > a,\n.col-light-blue .navbar .nav .open > a:hover,\n.col-light-blue .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-light-blue .navbar .nav > li > a {\n  color: #fff; }\n\n.col-light-blue .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-light-blue .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-cyan .navbar .navbar-brand,\n.col-cyan .navbar .navbar-brand:hover,\n.col-cyan .navbar .navbar-brand:active,\n.col-cyan .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-cyan .navbar .nav > li > a:hover,\n.col-cyan .navbar .nav > li > a:focus,\n.col-cyan .navbar .nav .open > a,\n.col-cyan .navbar .nav .open > a:hover,\n.col-cyan .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-cyan .navbar .nav > li > a {\n  color: #fff; }\n\n.col-cyan .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-cyan .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-teal .navbar .navbar-brand,\n.col-teal .navbar .navbar-brand:hover,\n.col-teal .navbar .navbar-brand:active,\n.col-teal .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-teal .navbar .nav > li > a:hover,\n.col-teal .navbar .nav > li > a:focus,\n.col-teal .navbar .nav .open > a,\n.col-teal .navbar .nav .open > a:hover,\n.col-teal .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-teal .navbar .nav > li > a {\n  color: #fff; }\n\n.col-teal .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-teal .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-green .navbar .navbar-brand,\n.col-green .navbar .navbar-brand:hover,\n.col-green .navbar .navbar-brand:active,\n.col-green .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-green .navbar .nav > li > a:hover,\n.col-green .navbar .nav > li > a:focus,\n.col-green .navbar .nav .open > a,\n.col-green .navbar .nav .open > a:hover,\n.col-green .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-green .navbar .nav > li > a {\n  color: #fff; }\n\n.col-green .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-green .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-light-green .navbar .navbar-brand,\n.col-light-green .navbar .navbar-brand:hover,\n.col-light-green .navbar .navbar-brand:active,\n.col-light-green .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-light-green .navbar .nav > li > a:hover,\n.col-light-green .navbar .nav > li > a:focus,\n.col-light-green .navbar .nav .open > a,\n.col-light-green .navbar .nav .open > a:hover,\n.col-light-green .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-light-green .navbar .nav > li > a {\n  color: #fff; }\n\n.col-light-green .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-light-green .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-lime .navbar .navbar-brand,\n.col-lime .navbar .navbar-brand:hover,\n.col-lime .navbar .navbar-brand:active,\n.col-lime .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-lime .navbar .nav > li > a:hover,\n.col-lime .navbar .nav > li > a:focus,\n.col-lime .navbar .nav .open > a,\n.col-lime .navbar .nav .open > a:hover,\n.col-lime .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-lime .navbar .nav > li > a {\n  color: #fff; }\n\n.col-lime .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-lime .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-yellow .navbar .navbar-brand,\n.col-yellow .navbar .navbar-brand:hover,\n.col-yellow .navbar .navbar-brand:active,\n.col-yellow .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-yellow .navbar .nav > li > a:hover,\n.col-yellow .navbar .nav > li > a:focus,\n.col-yellow .navbar .nav .open > a,\n.col-yellow .navbar .nav .open > a:hover,\n.col-yellow .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-yellow .navbar .nav > li > a {\n  color: #fff; }\n\n.col-yellow .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-yellow .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-amber .navbar .navbar-brand,\n.col-amber .navbar .navbar-brand:hover,\n.col-amber .navbar .navbar-brand:active,\n.col-amber .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-amber .navbar .nav > li > a:hover,\n.col-amber .navbar .nav > li > a:focus,\n.col-amber .navbar .nav .open > a,\n.col-amber .navbar .nav .open > a:hover,\n.col-amber .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-amber .navbar .nav > li > a {\n  color: #fff; }\n\n.col-amber .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-amber .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-orange .navbar .navbar-brand,\n.col-orange .navbar .navbar-brand:hover,\n.col-orange .navbar .navbar-brand:active,\n.col-orange .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-orange .navbar .nav > li > a:hover,\n.col-orange .navbar .nav > li > a:focus,\n.col-orange .navbar .nav .open > a,\n.col-orange .navbar .nav .open > a:hover,\n.col-orange .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-orange .navbar .nav > li > a {\n  color: #fff; }\n\n.col-orange .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-orange .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-deep-orange .navbar .navbar-brand,\n.col-deep-orange .navbar .navbar-brand:hover,\n.col-deep-orange .navbar .navbar-brand:active,\n.col-deep-orange .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-deep-orange .navbar .nav > li > a:hover,\n.col-deep-orange .navbar .nav > li > a:focus,\n.col-deep-orange .navbar .nav .open > a,\n.col-deep-orange .navbar .nav .open > a:hover,\n.col-deep-orange .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-deep-orange .navbar .nav > li > a {\n  color: #fff; }\n\n.col-deep-orange .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-deep-orange .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-brown .navbar .navbar-brand,\n.col-brown .navbar .navbar-brand:hover,\n.col-brown .navbar .navbar-brand:active,\n.col-brown .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-brown .navbar .nav > li > a:hover,\n.col-brown .navbar .nav > li > a:focus,\n.col-brown .navbar .nav .open > a,\n.col-brown .navbar .nav .open > a:hover,\n.col-brown .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-brown .navbar .nav > li > a {\n  color: #fff; }\n\n.col-brown .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-brown .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-grey .navbar .navbar-brand,\n.col-grey .navbar .navbar-brand:hover,\n.col-grey .navbar .navbar-brand:active,\n.col-grey .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-grey .navbar .nav > li > a:hover,\n.col-grey .navbar .nav > li > a:focus,\n.col-grey .navbar .nav .open > a,\n.col-grey .navbar .nav .open > a:hover,\n.col-grey .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-grey .navbar .nav > li > a {\n  color: #fff; }\n\n.col-grey .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-grey .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-blue-grey .navbar .navbar-brand,\n.col-blue-grey .navbar .navbar-brand:hover,\n.col-blue-grey .navbar .navbar-brand:active,\n.col-blue-grey .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-blue-grey .navbar .nav > li > a:hover,\n.col-blue-grey .navbar .nav > li > a:focus,\n.col-blue-grey .navbar .nav .open > a,\n.col-blue-grey .navbar .nav .open > a:hover,\n.col-blue-grey .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-blue-grey .navbar .nav > li > a {\n  color: #fff; }\n\n.col-blue-grey .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-blue-grey .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-black .navbar .navbar-brand,\n.col-black .navbar .navbar-brand:hover,\n.col-black .navbar .navbar-brand:active,\n.col-black .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-black .navbar .nav > li > a:hover,\n.col-black .navbar .nav > li > a:focus,\n.col-black .navbar .nav .open > a,\n.col-black .navbar .nav .open > a:hover,\n.col-black .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-black .navbar .nav > li > a {\n  color: #fff; }\n\n.col-black .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-black .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-white .navbar .navbar-brand,\n.col-white .navbar .navbar-brand:hover,\n.col-white .navbar .navbar-brand:active,\n.col-white .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-white .navbar .nav > li > a:hover,\n.col-white .navbar .nav > li > a:focus,\n.col-white .navbar .nav .open > a,\n.col-white .navbar .nav .open > a:hover,\n.col-white .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-white .navbar .nav > li > a {\n  color: #fff; }\n\n.col-white .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-white .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n/* Material Icons ============================== */\n.material-icons.md-18 {\n  font-size: 18px; }\n\n.material-icons.md-24 {\n  font-size: 24px; }\n\n.material-icons.md-26 {\n  font-size: 26px; }\n\n.material-icons.md-28 {\n  font-size: 28px; }\n\n.material-icons.md-30 {\n  font-size: 30px; }\n\n.material-icons.md-32 {\n  font-size: 32px; }\n\n.material-icons.md-36 {\n  font-size: 36px; }\n\n.material-icons.md-48 {\n  font-size: 48px; }\n\n/* Helpers ===================================== */\n.m-l--125 {\n  margin-left: -125px; }\n\n.m-t--125 {\n  margin-top: -125px; }\n\n.m-r--125 {\n  margin-right: -125px; }\n\n.m-b--125 {\n  margin-bottom: -125px; }\n\n.m-l--120 {\n  margin-left: -120px; }\n\n.m-t--120 {\n  margin-top: -120px; }\n\n.m-r--120 {\n  margin-right: -120px; }\n\n.m-b--120 {\n  margin-bottom: -120px; }\n\n.m-l--115 {\n  margin-left: -115px; }\n\n.m-t--115 {\n  margin-top: -115px; }\n\n.m-r--115 {\n  margin-right: -115px; }\n\n.m-b--115 {\n  margin-bottom: -115px; }\n\n.m-l--110 {\n  margin-left: -110px; }\n\n.m-t--110 {\n  margin-top: -110px; }\n\n.m-r--110 {\n  margin-right: -110px; }\n\n.m-b--110 {\n  margin-bottom: -110px; }\n\n.m-l--105 {\n  margin-left: -105px; }\n\n.m-t--105 {\n  margin-top: -105px; }\n\n.m-r--105 {\n  margin-right: -105px; }\n\n.m-b--105 {\n  margin-bottom: -105px; }\n\n.m-l--100 {\n  margin-left: -100px; }\n\n.m-t--100 {\n  margin-top: -100px; }\n\n.m-r--100 {\n  margin-right: -100px; }\n\n.m-b--100 {\n  margin-bottom: -100px; }\n\n.m-l--95 {\n  margin-left: -95px; }\n\n.m-t--95 {\n  margin-top: -95px; }\n\n.m-r--95 {\n  margin-right: -95px; }\n\n.m-b--95 {\n  margin-bottom: -95px; }\n\n.m-l--90 {\n  margin-left: -90px; }\n\n.m-t--90 {\n  margin-top: -90px; }\n\n.m-r--90 {\n  margin-right: -90px; }\n\n.m-b--90 {\n  margin-bottom: -90px; }\n\n.m-l--85 {\n  margin-left: -85px; }\n\n.m-t--85 {\n  margin-top: -85px; }\n\n.m-r--85 {\n  margin-right: -85px; }\n\n.m-b--85 {\n  margin-bottom: -85px; }\n\n.m-l--80 {\n  margin-left: -80px; }\n\n.m-t--80 {\n  margin-top: -80px; }\n\n.m-r--80 {\n  margin-right: -80px; }\n\n.m-b--80 {\n  margin-bottom: -80px; }\n\n.m-l--75 {\n  margin-left: -75px; }\n\n.m-t--75 {\n  margin-top: -75px; }\n\n.m-r--75 {\n  margin-right: -75px; }\n\n.m-b--75 {\n  margin-bottom: -75px; }\n\n.m-l--70 {\n  margin-left: -70px; }\n\n.m-t--70 {\n  margin-top: -70px; }\n\n.m-r--70 {\n  margin-right: -70px; }\n\n.m-b--70 {\n  margin-bottom: -70px; }\n\n.m-l--65 {\n  margin-left: -65px; }\n\n.m-t--65 {\n  margin-top: -65px; }\n\n.m-r--65 {\n  margin-right: -65px; }\n\n.m-b--65 {\n  margin-bottom: -65px; }\n\n.m-l--60 {\n  margin-left: -60px; }\n\n.m-t--60 {\n  margin-top: -60px; }\n\n.m-r--60 {\n  margin-right: -60px; }\n\n.m-b--60 {\n  margin-bottom: -60px; }\n\n.m-l--55 {\n  margin-left: -55px; }\n\n.m-t--55 {\n  margin-top: -55px; }\n\n.m-r--55 {\n  margin-right: -55px; }\n\n.m-b--55 {\n  margin-bottom: -55px; }\n\n.m-l--50 {\n  margin-left: -50px; }\n\n.m-t--50 {\n  margin-top: -50px; }\n\n.m-r--50 {\n  margin-right: -50px; }\n\n.m-b--50 {\n  margin-bottom: -50px; }\n\n.m-l--45 {\n  margin-left: -45px; }\n\n.m-t--45 {\n  margin-top: -45px; }\n\n.m-r--45 {\n  margin-right: -45px; }\n\n.m-b--45 {\n  margin-bottom: -45px; }\n\n.m-l--40 {\n  margin-left: -40px; }\n\n.m-t--40 {\n  margin-top: -40px; }\n\n.m-r--40 {\n  margin-right: -40px; }\n\n.m-b--40 {\n  margin-bottom: -40px; }\n\n.m-l--35 {\n  margin-left: -35px; }\n\n.m-t--35 {\n  margin-top: -35px; }\n\n.m-r--35 {\n  margin-right: -35px; }\n\n.m-b--35 {\n  margin-bottom: -35px; }\n\n.m-l--30 {\n  margin-left: -30px; }\n\n.m-t--30 {\n  margin-top: -30px; }\n\n.m-r--30 {\n  margin-right: -30px; }\n\n.m-b--30 {\n  margin-bottom: -30px; }\n\n.m-l--25 {\n  margin-left: -25px; }\n\n.m-t--25 {\n  margin-top: -25px; }\n\n.m-r--25 {\n  margin-right: -25px; }\n\n.m-b--25 {\n  margin-bottom: -25px; }\n\n.m-l--20 {\n  margin-left: -20px; }\n\n.m-t--20 {\n  margin-top: -20px; }\n\n.m-r--20 {\n  margin-right: -20px; }\n\n.m-b--20 {\n  margin-bottom: -20px; }\n\n.m-l--15 {\n  margin-left: -15px; }\n\n.m-t--15 {\n  margin-top: -15px; }\n\n.m-r--15 {\n  margin-right: -15px; }\n\n.m-b--15 {\n  margin-bottom: -15px; }\n\n.m-l--10 {\n  margin-left: -10px; }\n\n.m-t--10 {\n  margin-top: -10px; }\n\n.m-r--10 {\n  margin-right: -10px; }\n\n.m-b--10 {\n  margin-bottom: -10px; }\n\n.m-l--5 {\n  margin-left: -5px; }\n\n.m-t--5 {\n  margin-top: -5px; }\n\n.m-r--5 {\n  margin-right: -5px; }\n\n.m-b--5 {\n  margin-bottom: -5px; }\n\n.m-l-0 {\n  margin-left: 0px; }\n\n.m-t-0 {\n  margin-top: 0px; }\n\n.m-r-0 {\n  margin-right: 0px; }\n\n.m-b-0 {\n  margin-bottom: 0px; }\n\n.m-l-5 {\n  margin-left: 5px; }\n\n.m-t-5 {\n  margin-top: 5px; }\n\n.m-r-5 {\n  margin-right: 5px; }\n\n.m-b-5 {\n  margin-bottom: 5px; }\n\n.m-l-10 {\n  margin-left: 10px; }\n\n.m-t-10 {\n  margin-top: 10px; }\n\n.m-r-10 {\n  margin-right: 10px; }\n\n.m-b-10 {\n  margin-bottom: 10px; }\n\n.m-l-15 {\n  margin-left: 15px; }\n\n.m-t-15 {\n  margin-top: 15px; }\n\n.m-r-15 {\n  margin-right: 15px; }\n\n.m-b-15 {\n  margin-bottom: 15px; }\n\n.m-l-20 {\n  margin-left: 20px; }\n\n.m-t-20 {\n  margin-top: 20px; }\n\n.m-r-20 {\n  margin-right: 20px; }\n\n.m-b-20 {\n  margin-bottom: 20px; }\n\n.m-l-25 {\n  margin-left: 25px; }\n\n.m-t-25 {\n  margin-top: 25px; }\n\n.m-r-25 {\n  margin-right: 25px; }\n\n.m-b-25 {\n  margin-bottom: 25px; }\n\n.m-l-30 {\n  margin-left: 30px; }\n\n.m-t-30 {\n  margin-top: 30px; }\n\n.m-r-30 {\n  margin-right: 30px; }\n\n.m-b-30 {\n  margin-bottom: 30px; }\n\n.m-l-35 {\n  margin-left: 35px; }\n\n.m-t-35 {\n  margin-top: 35px; }\n\n.m-r-35 {\n  margin-right: 35px; }\n\n.m-b-35 {\n  margin-bottom: 35px; }\n\n.m-l-40 {\n  margin-left: 40px; }\n\n.m-t-40 {\n  margin-top: 40px; }\n\n.m-r-40 {\n  margin-right: 40px; }\n\n.m-b-40 {\n  margin-bottom: 40px; }\n\n.m-l-45 {\n  margin-left: 45px; }\n\n.m-t-45 {\n  margin-top: 45px; }\n\n.m-r-45 {\n  margin-right: 45px; }\n\n.m-b-45 {\n  margin-bottom: 45px; }\n\n.m-l-50 {\n  margin-left: 50px; }\n\n.m-t-50 {\n  margin-top: 50px; }\n\n.m-r-50 {\n  margin-right: 50px; }\n\n.m-b-50 {\n  margin-bottom: 50px; }\n\n.m-l-55 {\n  margin-left: 55px; }\n\n.m-t-55 {\n  margin-top: 55px; }\n\n.m-r-55 {\n  margin-right: 55px; }\n\n.m-b-55 {\n  margin-bottom: 55px; }\n\n.m-l-60 {\n  margin-left: 60px; }\n\n.m-t-60 {\n  margin-top: 60px; }\n\n.m-r-60 {\n  margin-right: 60px; }\n\n.m-b-60 {\n  margin-bottom: 60px; }\n\n.m-l-65 {\n  margin-left: 65px; }\n\n.m-t-65 {\n  margin-top: 65px; }\n\n.m-r-65 {\n  margin-right: 65px; }\n\n.m-b-65 {\n  margin-bottom: 65px; }\n\n.m-l-70 {\n  margin-left: 70px; }\n\n.m-t-70 {\n  margin-top: 70px; }\n\n.m-r-70 {\n  margin-right: 70px; }\n\n.m-b-70 {\n  margin-bottom: 70px; }\n\n.m-l-75 {\n  margin-left: 75px; }\n\n.m-t-75 {\n  margin-top: 75px; }\n\n.m-r-75 {\n  margin-right: 75px; }\n\n.m-b-75 {\n  margin-bottom: 75px; }\n\n.m-l-80 {\n  margin-left: 80px; }\n\n.m-t-80 {\n  margin-top: 80px; }\n\n.m-r-80 {\n  margin-right: 80px; }\n\n.m-b-80 {\n  margin-bottom: 80px; }\n\n.m-l-85 {\n  margin-left: 85px; }\n\n.m-t-85 {\n  margin-top: 85px; }\n\n.m-r-85 {\n  margin-right: 85px; }\n\n.m-b-85 {\n  margin-bottom: 85px; }\n\n.m-l-90 {\n  margin-left: 90px; }\n\n.m-t-90 {\n  margin-top: 90px; }\n\n.m-r-90 {\n  margin-right: 90px; }\n\n.m-b-90 {\n  margin-bottom: 90px; }\n\n.m-l-95 {\n  margin-left: 95px; }\n\n.m-t-95 {\n  margin-top: 95px; }\n\n.m-r-95 {\n  margin-right: 95px; }\n\n.m-b-95 {\n  margin-bottom: 95px; }\n\n.m-l-100 {\n  margin-left: 100px; }\n\n.m-t-100 {\n  margin-top: 100px; }\n\n.m-r-100 {\n  margin-right: 100px; }\n\n.m-b-100 {\n  margin-bottom: 100px; }\n\n.m-l-105 {\n  margin-left: 105px; }\n\n.m-t-105 {\n  margin-top: 105px; }\n\n.m-r-105 {\n  margin-right: 105px; }\n\n.m-b-105 {\n  margin-bottom: 105px; }\n\n.m-l-110 {\n  margin-left: 110px; }\n\n.m-t-110 {\n  margin-top: 110px; }\n\n.m-r-110 {\n  margin-right: 110px; }\n\n.m-b-110 {\n  margin-bottom: 110px; }\n\n.m-l-115 {\n  margin-left: 115px; }\n\n.m-t-115 {\n  margin-top: 115px; }\n\n.m-r-115 {\n  margin-right: 115px; }\n\n.m-b-115 {\n  margin-bottom: 115px; }\n\n.m-l-120 {\n  margin-left: 120px; }\n\n.m-t-120 {\n  margin-top: 120px; }\n\n.m-r-120 {\n  margin-right: 120px; }\n\n.m-b-120 {\n  margin-bottom: 120px; }\n\n.m-l-125 {\n  margin-left: 125px; }\n\n.m-t-125 {\n  margin-top: 125px; }\n\n.m-r-125 {\n  margin-right: 125px; }\n\n.m-b-125 {\n  margin-bottom: 125px; }\n\n.margin-0 {\n  margin: 0; }\n\n.p-l-0 {\n  padding-left: 0px; }\n\n.p-t-0 {\n  padding-top: 0px; }\n\n.p-r-0 {\n  padding-right: 0px; }\n\n.p-b-0 {\n  padding-bottom: 0px; }\n\n.p-l-5 {\n  padding-left: 5px; }\n\n.p-t-5 {\n  padding-top: 5px; }\n\n.p-r-5 {\n  padding-right: 5px; }\n\n.p-b-5 {\n  padding-bottom: 5px; }\n\n.p-l-10 {\n  padding-left: 10px; }\n\n.p-t-10 {\n  padding-top: 10px; }\n\n.p-r-10 {\n  padding-right: 10px; }\n\n.p-b-10 {\n  padding-bottom: 10px; }\n\n.p-l-15 {\n  padding-left: 15px; }\n\n.p-t-15 {\n  padding-top: 15px; }\n\n.p-r-15 {\n  padding-right: 15px; }\n\n.p-b-15 {\n  padding-bottom: 15px; }\n\n.p-l-20 {\n  padding-left: 20px; }\n\n.p-t-20 {\n  padding-top: 20px; }\n\n.p-r-20 {\n  padding-right: 20px; }\n\n.p-b-20 {\n  padding-bottom: 20px; }\n\n.p-l-25 {\n  padding-left: 25px; }\n\n.p-t-25 {\n  padding-top: 25px; }\n\n.p-r-25 {\n  padding-right: 25px; }\n\n.p-b-25 {\n  padding-bottom: 25px; }\n\n.p-l-30 {\n  padding-left: 30px; }\n\n.p-t-30 {\n  padding-top: 30px; }\n\n.p-r-30 {\n  padding-right: 30px; }\n\n.p-b-30 {\n  padding-bottom: 30px; }\n\n.p-l-35 {\n  padding-left: 35px; }\n\n.p-t-35 {\n  padding-top: 35px; }\n\n.p-r-35 {\n  padding-right: 35px; }\n\n.p-b-35 {\n  padding-bottom: 35px; }\n\n.p-l-40 {\n  padding-left: 40px; }\n\n.p-t-40 {\n  padding-top: 40px; }\n\n.p-r-40 {\n  padding-right: 40px; }\n\n.p-b-40 {\n  padding-bottom: 40px; }\n\n.p-l-45 {\n  padding-left: 45px; }\n\n.p-t-45 {\n  padding-top: 45px; }\n\n.p-r-45 {\n  padding-right: 45px; }\n\n.p-b-45 {\n  padding-bottom: 45px; }\n\n.p-l-50 {\n  padding-left: 50px; }\n\n.p-t-50 {\n  padding-top: 50px; }\n\n.p-r-50 {\n  padding-right: 50px; }\n\n.p-b-50 {\n  padding-bottom: 50px; }\n\n.p-l-55 {\n  padding-left: 55px; }\n\n.p-t-55 {\n  padding-top: 55px; }\n\n.p-r-55 {\n  padding-right: 55px; }\n\n.p-b-55 {\n  padding-bottom: 55px; }\n\n.p-l-60 {\n  padding-left: 60px; }\n\n.p-t-60 {\n  padding-top: 60px; }\n\n.p-r-60 {\n  padding-right: 60px; }\n\n.p-b-60 {\n  padding-bottom: 60px; }\n\n.p-l-65 {\n  padding-left: 65px; }\n\n.p-t-65 {\n  padding-top: 65px; }\n\n.p-r-65 {\n  padding-right: 65px; }\n\n.p-b-65 {\n  padding-bottom: 65px; }\n\n.p-l-70 {\n  padding-left: 70px; }\n\n.p-t-70 {\n  padding-top: 70px; }\n\n.p-r-70 {\n  padding-right: 70px; }\n\n.p-b-70 {\n  padding-bottom: 70px; }\n\n.p-l-75 {\n  padding-left: 75px; }\n\n.p-t-75 {\n  padding-top: 75px; }\n\n.p-r-75 {\n  padding-right: 75px; }\n\n.p-b-75 {\n  padding-bottom: 75px; }\n\n.p-l-80 {\n  padding-left: 80px; }\n\n.p-t-80 {\n  padding-top: 80px; }\n\n.p-r-80 {\n  padding-right: 80px; }\n\n.p-b-80 {\n  padding-bottom: 80px; }\n\n.p-l-85 {\n  padding-left: 85px; }\n\n.p-t-85 {\n  padding-top: 85px; }\n\n.p-r-85 {\n  padding-right: 85px; }\n\n.p-b-85 {\n  padding-bottom: 85px; }\n\n.p-l-90 {\n  padding-left: 90px; }\n\n.p-t-90 {\n  padding-top: 90px; }\n\n.p-r-90 {\n  padding-right: 90px; }\n\n.p-b-90 {\n  padding-bottom: 90px; }\n\n.p-l-95 {\n  padding-left: 95px; }\n\n.p-t-95 {\n  padding-top: 95px; }\n\n.p-r-95 {\n  padding-right: 95px; }\n\n.p-b-95 {\n  padding-bottom: 95px; }\n\n.p-l-100 {\n  padding-left: 100px; }\n\n.p-t-100 {\n  padding-top: 100px; }\n\n.p-r-100 {\n  padding-right: 100px; }\n\n.p-b-100 {\n  padding-bottom: 100px; }\n\n.p-l-105 {\n  padding-left: 105px; }\n\n.p-t-105 {\n  padding-top: 105px; }\n\n.p-r-105 {\n  padding-right: 105px; }\n\n.p-b-105 {\n  padding-bottom: 105px; }\n\n.p-l-110 {\n  padding-left: 110px; }\n\n.p-t-110 {\n  padding-top: 110px; }\n\n.p-r-110 {\n  padding-right: 110px; }\n\n.p-b-110 {\n  padding-bottom: 110px; }\n\n.p-l-115 {\n  padding-left: 115px; }\n\n.p-t-115 {\n  padding-top: 115px; }\n\n.p-r-115 {\n  padding-right: 115px; }\n\n.p-b-115 {\n  padding-bottom: 115px; }\n\n.p-l-120 {\n  padding-left: 120px; }\n\n.p-t-120 {\n  padding-top: 120px; }\n\n.p-r-120 {\n  padding-right: 120px; }\n\n.p-b-120 {\n  padding-bottom: 120px; }\n\n.p-l-125 {\n  padding-left: 125px; }\n\n.p-t-125 {\n  padding-top: 125px; }\n\n.p-r-125 {\n  padding-right: 125px; }\n\n.p-b-125 {\n  padding-bottom: 125px; }\n\n.padding-0 {\n  padding: 0; }\n\n.font-6 {\n  font-size: 6px; }\n\n.font-7 {\n  font-size: 7px; }\n\n.font-8 {\n  font-size: 8px; }\n\n.font-9 {\n  font-size: 9px; }\n\n.font-10 {\n  font-size: 10px; }\n\n.font-11 {\n  font-size: 11px; }\n\n.font-12 {\n  font-size: 12px; }\n\n.font-13 {\n  font-size: 13px; }\n\n.font-14 {\n  font-size: 14px; }\n\n.font-15 {\n  font-size: 15px; }\n\n.font-16 {\n  font-size: 16px; }\n\n.font-17 {\n  font-size: 17px; }\n\n.font-18 {\n  font-size: 18px; }\n\n.font-19 {\n  font-size: 19px; }\n\n.font-20 {\n  font-size: 20px; }\n\n.font-21 {\n  font-size: 21px; }\n\n.font-22 {\n  font-size: 22px; }\n\n.font-23 {\n  font-size: 23px; }\n\n.font-24 {\n  font-size: 24px; }\n\n.font-25 {\n  font-size: 25px; }\n\n.font-26 {\n  font-size: 26px; }\n\n.font-27 {\n  font-size: 27px; }\n\n.font-28 {\n  font-size: 28px; }\n\n.font-29 {\n  font-size: 29px; }\n\n.font-30 {\n  font-size: 30px; }\n\n.font-31 {\n  font-size: 31px; }\n\n.font-32 {\n  font-size: 32px; }\n\n.font-33 {\n  font-size: 33px; }\n\n.font-34 {\n  font-size: 34px; }\n\n.font-35 {\n  font-size: 35px; }\n\n.font-36 {\n  font-size: 36px; }\n\n.font-37 {\n  font-size: 37px; }\n\n.font-38 {\n  font-size: 38px; }\n\n.font-39 {\n  font-size: 39px; }\n\n.font-40 {\n  font-size: 40px; }\n\n.font-41 {\n  font-size: 41px; }\n\n.font-42 {\n  font-size: 42px; }\n\n.font-43 {\n  font-size: 43px; }\n\n.font-44 {\n  font-size: 44px; }\n\n.font-45 {\n  font-size: 45px; }\n\n.font-46 {\n  font-size: 46px; }\n\n.font-47 {\n  font-size: 47px; }\n\n.font-48 {\n  font-size: 48px; }\n\n.font-49 {\n  font-size: 49px; }\n\n.font-50 {\n  font-size: 50px; }\n\n.align-left {\n  text-align: left; }\n\n.align-center {\n  text-align: center; }\n\n.align-right {\n  text-align: right; }\n\n.align-justify {\n  text-align: justify; }\n\n.no-resize {\n  resize: none; }\n\n.font-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n.font-underline {\n  text-decoration: underline; }\n\n.font-line-through {\n  text-decoration: line-through; }\n\n.font-overline {\n  text-decoration: overline; }\n\n.block-header {\n  margin-bottom: 15px; }\n\n.block-header h2 {\n  margin: 0 !important;\n  color: #666 !important;\n  font-weight: normal;\n  font-size: 16px; }\n\n.block-header h2 small {\n  display: block;\n  font-size: 12px;\n  margin-top: 8px;\n  color: #888; }\n\n.block-header h2 small a {\n  font-weight: bold;\n  color: #777; }\n\n.bg-red {\n  background-color: #F44336 !important;\n  color: #fff; }\n\n.bg-red .content .text,\n.bg-red .content .number {\n  color: #fff !important; }\n\n.bg-pink {\n  background-color: #E91E63 !important;\n  color: #fff; }\n\n.bg-pink .content .text,\n.bg-pink .content .number {\n  color: #fff !important; }\n\n.bg-purple {\n  background-color: #9C27B0 !important;\n  color: #fff; }\n\n.bg-purple .content .text,\n.bg-purple .content .number {\n  color: #fff !important; }\n\n.bg-deep-purple {\n  background-color: #673AB7 !important;\n  color: #fff; }\n\n.bg-deep-purple .content .text,\n.bg-deep-purple .content .number {\n  color: #fff !important; }\n\n.bg-indigo {\n  background-color: #3F51B5 !important;\n  color: #fff; }\n\n.bg-indigo .content .text,\n.bg-indigo .content .number {\n  color: #fff !important; }\n\n.bg-blue {\n  background-color: #336699 !important;\n  color: #fff; }\n\n.bg-blue .content .text,\n.bg-blue .content .number {\n  color: #fff !important; }\n\n.bg-bluemaroon {\n  background-color: #008bc5 !important;\n  color: #fff; }\n\n.bg-bluemaroon .content .text,\n.bg-bluemaroon .content .number {\n  color: #fff !important; }\n\n.bg-bluelight {\n  background-color: #73c8e3 !important;\n  color: #fff; }\n\n.bg-bluelight .content .text,\n.bg-bluelight .content .number {\n  color: #fff !important; }\n\n.bg-bluenavy {\n  background-color: #1c3060 !important;\n  color: #fff; }\n\n.bg-bluenavy .content .text,\n.bg-bluenavy .content .number {\n  color: #fff !important; }\n\n.bg-light-blue {\n  background-color: #03A9F4 !important;\n  color: #fff; }\n\n.bg-light-blue .content .text,\n.bg-light-blue .content .number {\n  color: #fff !important; }\n\n.bg-cyan {\n  background-color: #00BCD4 !important;\n  color: #fff; }\n\n.bg-cyan .content .text,\n.bg-cyan .content .number {\n  color: #fff !important; }\n\n.bg-teal {\n  background-color: #009688 !important;\n  color: #fff; }\n\n.bg-teal .content .text,\n.bg-teal .content .number {\n  color: #fff !important; }\n\n.bg-green {\n  background-color: #4CAF50 !important;\n  color: #fff; }\n\n.bg-green .content .text,\n.bg-green .content .number {\n  color: #fff !important; }\n\n.bg-light-green {\n  background-color: #8BC34A !important;\n  color: #fff; }\n\n.bg-light-green .content .text,\n.bg-light-green .content .number {\n  color: #fff !important; }\n\n.bg-lime {\n  background-color: #CDDC39 !important;\n  color: #fff; }\n\n.bg-lime .content .text,\n.bg-lime .content .number {\n  color: #fff !important; }\n\n.bg-yellow {\n  background-color: #ffe821 !important;\n  color: #fff; }\n\n.bg-yellow .content .text,\n.bg-yellow .content .number {\n  color: #fff !important; }\n\n.bg-amber {\n  background-color: #FFC107 !important;\n  color: #fff; }\n\n.bg-amber .content .text,\n.bg-amber .content .number {\n  color: #fff !important; }\n\n.bg-orange {\n  background-color: #FF9800 !important;\n  color: #fff; }\n\n.bg-orange .content .text,\n.bg-orange .content .number {\n  color: #fff !important; }\n\n.bg-deep-orange {\n  background-color: #FF5722 !important;\n  color: #fff; }\n\n.bg-deep-orange .content .text,\n.bg-deep-orange .content .number {\n  color: #fff !important; }\n\n.bg-brown {\n  background-color: #795548 !important;\n  color: #fff; }\n\n.bg-brown .content .text,\n.bg-brown .content .number {\n  color: #fff !important; }\n\n.bg-grey {\n  background-color: #9E9E9E !important;\n  color: #fff; }\n\n.bg-grey .content .text,\n.bg-grey .content .number {\n  color: #fff !important; }\n\n.bg-blue-grey {\n  background-color: #607D8B !important;\n  color: #fff; }\n\n.bg-blue-grey .content .text,\n.bg-blue-grey .content .number {\n  color: #fff !important; }\n\n.bg-black {\n  background-color: #000000 !important;\n  color: #fff; }\n\n.bg-black .content .text,\n.bg-black .content .number {\n  color: #fff !important; }\n\n.bg-white {\n  background-color: #ffffff !important;\n  color: #fff; }\n\n.bg-white .content .text,\n.bg-white .content .number {\n  color: #fff !important; }\n\n.col-red {\n  color: #F44336 !important; }\n\n.col-pink {\n  color: #E91E63 !important; }\n\n.col-purple {\n  color: #9C27B0 !important; }\n\n.col-deep-purple {\n  color: #673AB7 !important; }\n\n.col-indigo {\n  color: #3F51B5 !important; }\n\n.col-blue {\n  color: #336699 !important; }\n\n.col-light-blue {\n  color: #03A9F4 !important; }\n\n.col-cyan {\n  color: #00BCD4 !important; }\n\n.col-teal {\n  color: #009688 !important; }\n\n.col-green {\n  color: #4CAF50 !important; }\n\n.col-light-green {\n  color: #8BC34A !important; }\n\n.col-lime {\n  color: #CDDC39 !important; }\n\n.col-yellow {\n  color: #ffe821 !important; }\n\n.col-amber {\n  color: #FFC107 !important; }\n\n.col-orange {\n  color: #FF9800 !important; }\n\n.col-deep-orange {\n  color: #FF5722 !important; }\n\n.col-brown {\n  color: #795548 !important; }\n\n.col-grey {\n  color: #9E9E9E !important; }\n\n.col-blue-grey {\n  color: #607D8B !important; }\n\n.col-black {\n  color: #000000 !important; }\n\n.col-white {\n  color: #ffffff !important; }\n\n/* Custom Animate ============================== */\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n/* Demo ======================================== */\n.demo-button-sizes .btn {\n  margin-bottom: 5px; }\n\n.icon-button-demo button {\n  margin-right: 5px;\n  margin-bottom: 12px; }\n\n.icon-and-text-button-demo button {\n  margin-right: 5px;\n  margin-bottom: 12px;\n  width: 16.66666666666667%; }\n\n.button-demo ul {\n  padding-left: 0; }\n\n.button-demo ul li {\n  list-style: none;\n  padding-left: 0;\n  display: inline-block;\n  margin-right: 7px; }\n\n.button-demo ul li .btn {\n  display: block;\n  min-width: 175px; }\n\n.button-demo .btn {\n  margin-right: 8px;\n  margin-bottom: 13px;\n  min-width: 120px; }\n\n.demo-button-groups .btn-group {\n  margin-right: 10px; }\n\n.demo-button-toolbar .btn-toolbar {\n  float: left;\n  margin-right: 25px; }\n\n.demo-button-nesting > .btn-group {\n  margin-right: 15px; }\n\n.demo-single-button-dropdowns > .btn-group {\n  margin-right: 10px; }\n\n.demo-splite-button-dropdowns > .btn-group {\n  margin-right: 10px; }\n\n.demo-dropup .dropup {\n  margin-right: 10px; }\n\n.demo-checkbox label,\n.demo-radio-button label {\n  min-width: 150px; }\n\n.demo-knob-chart div {\n  margin-right: 15px; }\n\n.demo-switch .switch {\n  display: inline-block;\n  min-width: 170px; }\n\n.demo-switch .demo-switch-title {\n  min-width: 95px;\n  display: inline-block; }\n\n.demo-color-box {\n  padding: 15px 0;\n  text-align: center;\n  margin-bottom: 20px;\n  border-radius: 3px; }\n\n.demo-color-box .color-name {\n  font-size: 16px;\n  margin-bottom: 5px; }\n\n.demo-color-box .color-code,\n.demo-color-box .color-class-name {\n  font-size: 13px; }\n\n.demo-image-copyright {\n  text-align: right;\n  font-style: italic;\n  font-size: 12px;\n  color: #777;\n  margin: 5px 0 10px 0; }\n\n.demo-image-copyright a {\n  font-weight: bold;\n  color: #555 !important; }\n\n.demo-tagsinput-area {\n  margin-bottom: 50px !important; }\n\n.demo-icon-container .demo-google-material-icon {\n  margin-bottom: 5px;\n  text-align: left; }\n\n.demo-icon-container .demo-google-material-icon .icon-name {\n  position: relative;\n  top: -8px;\n  left: 7px; }\n\n.demo-icon-container .demo-google-material-icon .material-icons {\n  width: 24px; }\n\n.demo-preloader .preloader {\n  margin-right: 10px; }\n\n.irs-demo {\n  margin-bottom: 40px; }\n\n.irs-demo .irs {\n  margin-top: 15px; }\n\n.right-sidebar .nav-tabs + .tab-content {\n  padding: 0; }\n\n.right-sidebar p {\n  margin: 20px 15px 15px 15px;\n  font-weight: bold;\n  text-align: center; }\n\n.right-sidebar #settings .setting-list {\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 20px; }\n\n.right-sidebar #settings .setting-list li {\n  padding: 15px;\n  position: relative;\n  border-top: 1px solid #eee; }\n\n.right-sidebar #settings .setting-list li .switch {\n  position: absolute;\n  top: 15px;\n  right: 5px; }\n\n.demo-choose-skin {\n  list-style: none;\n  padding-left: 0;\n  overflow-y: hidden; }\n\n.demo-choose-skin li {\n  border-bottom: 1px solid #eee;\n  padding: 10px 10px 4px 10px;\n  position: relative;\n  cursor: pointer; }\n\n.demo-choose-skin li.active {\n  background-color: #eee; }\n\n.demo-choose-skin li.active:after {\n  font-family: 'PT Sans';\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  content: '\\E876';\n  font-size: 18px;\n  font-weight: bold; }\n\n.demo-choose-skin li:hover {\n  background-color: #eee; }\n\n.demo-choose-skin li div {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  border-radius: 3px; }\n\n.demo-choose-skin li span {\n  position: relative;\n  bottom: 7px;\n  left: 5px; }\n\n.demo-choose-skin .red {\n  background-color: #F44336; }\n\n.demo-choose-skin .pink {\n  background-color: #E91E63; }\n\n.demo-choose-skin .purple {\n  background-color: #9C27B0; }\n\n.demo-choose-skin .deep-purple {\n  background-color: #673AB7; }\n\n.demo-choose-skin .indigo {\n  background-color: #3F51B5; }\n\n.demo-choose-skin .blue {\n  background-color: #336699; }\n\n.demo-choose-skin .light-blue {\n  background-color: #03A9F4; }\n\n.demo-choose-skin .cyan {\n  background-color: #00BCD4; }\n\n.demo-choose-skin .teal {\n  background-color: #009688; }\n\n.demo-choose-skin .green {\n  background-color: #4CAF50; }\n\n.demo-choose-skin .light-green {\n  background-color: #8BC34A; }\n\n.demo-choose-skin .lime {\n  background-color: #CDDC39; }\n\n.demo-choose-skin .yellow {\n  background-color: #ffe821; }\n\n.demo-choose-skin .amber {\n  background-color: #FFC107; }\n\n.demo-choose-skin .orange {\n  background-color: #FF9800; }\n\n.demo-choose-skin .deep-orange {\n  background-color: #FF5722; }\n\n.demo-choose-skin .brown {\n  background-color: #795548; }\n\n.demo-choose-skin .grey {\n  background-color: #9E9E9E; }\n\n.demo-choose-skin .blue-grey {\n  background-color: #607D8B; }\n\n.demo-choose-skin .black {\n  background-color: #000000; }\n\n.demo-choose-skin .white {\n  background-color: #ffffff; }\n\n/* Materialize Css | Taken from www.materializecss.com */\n/* Media ======================================= */\n@media (max-width: 767px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: 35px;\n    width: 73%; }\n  .navbar .navbar-header {\n    display: inline-block;\n    margin-bottom: -6px;\n    width: calc(100% + 30px); }\n  .navbar .nav > li {\n    display: inline-block; }\n  .navbar .navbar-nav {\n    margin-top: -10px;\n    margin-bottom: 1px;\n    margin-left: -7px; }\n  .navbar .navbar-nav .open .dropdown-menu {\n    background-color: #fff;\n    position: absolute; }\n  .navbar .dropdown-menu {\n    margin-left: -50px; }\n  .navbar .js-right-sidebar {\n    margin-top: 15px; }\n  .dt-buttons {\n    float: none !important;\n    text-align: center;\n    margin-bottom: 15px; }\n  .panel-switch-btn {\n    top: 12px;\n    right: 0 !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: 20px; } }\n\n@media (min-width: 992px) and (max-width: 1169px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: 20px; } }\n\n/* General ===================================== */\nbody {\n  background-color: #fff;\n  transition: all 0.5s;\n  font-family: 'PT Sans', sans-serif; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: bold; }\n\nbutton,\ninput,\nselect,\na {\n  outline: none !important; }\n\n.no-animate {\n  transition-property: none !important;\n  transform: none !important;\n  animation: none !important; }\n\nsection.content {\n  transition: 0.5s; }\n\n/* Dashboard =================================== */\n.dashboard-flot-chart {\n  height: 275px; }\n\n.dashboard-donut-chart {\n  height: 265px; }\n\n.dashboard-line-chart {\n  height: 250px; }\n\n.dashboard-stat-list {\n  list-style: none;\n  padding-left: 0;\n  margin-top: 40px; }\n\n.dashboard-stat-list li {\n  padding: 16px 0 0 0; }\n\n.dashboard-stat-list li small {\n  font-size: 8px; }\n\n.dashboard-task-infos .progress {\n  height: 10px;\n  margin-bottom: 0;\n  position: relative;\n  top: 6px; }\n\n/* Buttons ===================================== */\n.btn:focus {\n  outline: none !important; }\n\n.btn-circle {\n  border: none;\n  outline: none !important;\n  overflow: hidden;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%; }\n\n.btn-circle i {\n  font-size: 18px;\n  position: relative;\n  left: -1px; }\n\n.btn-link {\n  font-weight: bold;\n  color: #333;\n  transition: 0.5s; }\n\n.btn-link:active, .btn-link:focus {\n  text-decoration: none;\n  color: #333; }\n\n.btn-link:hover {\n  text-decoration: none;\n  color: #333;\n  background-color: #ddd; }\n\n.btn-circle-lg {\n  border: none;\n  outline: none !important;\n  overflow: hidden;\n  width: 50px;\n  height: 50px;\n  border-radius: 50% !important; }\n\n.btn-circle-lg i {\n  font-size: 26px !important;\n  position: relative !important;\n  left: 0px !important;\n  top: 6px !important; }\n\n.btn:not(.btn-link):not(.btn-circle) {\n  box-shadow: none;\n  border-radius: 2px;\n  border: none;\n  font-size: 13px;\n  outline: none; }\n\n.btn:not(.btn-link):not(.btn-circle):hover {\n  outline: none; }\n\n.btn:not(.btn-link):not(.btn-circle) i {\n  font-size: 20px;\n  position: relative;\n  top: 3px; }\n\n.btn:not(.btn-link):not(.btn-circle) span {\n  position: relative;\n  top: -2px;\n  margin-left: 3px; }\n\n.btn-warning,\n.btn-warning:hover,\n.btn-warning:active,\n.btn-warning:focus {\n  background-color: #ff9600 !important; }\n\n.btn-danger,\n.btn-danger:hover,\n.btn-danger:active,\n.btn-danger:focus {\n  background-color: #fb483a !important; }\n\n.btn-info,\n.btn-info:hover,\n.btn-info:active,\n.btn-info:focus {\n  background-color: #00b0e4 !important; }\n\n.btn-success,\n.btn-success:hover,\n.btn-success:active,\n.btn-success:focus {\n  background-color: #2b982b !important; }\n\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:focus {\n  background-color: #1f91f3 !important; }\n\n.btn-default,\n.btn-default:hover,\n.btn-default:active,\n.btn-default:focus {\n  background-color: #fff !important; }\n\n.btn-group,\n.btn-group-vertical {\n  box-shadow: none; }\n\n.btn-group .btn,\n.btn-group-vertical .btn {\n  box-shadow: none !important;\n  border-radius: 0; }\n\n.btn-group .btn .caret,\n.btn-group-vertical .btn .caret {\n  position: relative;\n  bottom: 1px; }\n\n.btn-group .btn-group,\n.btn-group-vertical .btn-group {\n  box-shadow: none !important; }\n\n.btn-group .btn + .dropdown-toggle,\n.btn-group-vertical .btn + .dropdown-toggle {\n  border-left: 1px solid rgba(0, 0, 0, 0.08) !important; }\n\n/* Bootstrap Tags Input ======================== */\n.bootstrap-tagsinput {\n  -ms-box-shadow: none !important;\n  box-shadow: none !important;\n  border: none !important; }\n\n/* noUISlider ================================== */\n.noUi-target {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n  position: relative;\n  direction: ltr; }\n\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box; }\n\n.noUi-base {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1; }\n\n.noUi-origin {\n  position: absolute;\n  right: 0;\n  top: 6px;\n  left: 0;\n  bottom: 0; }\n\n.noUi-handle {\n  position: relative;\n  z-index: 1; }\n\n.noUi-stacking .noUi-handle {\n  z-index: 10; }\n\n.noUi-state-tap .noUi-origin {\n  transition: left 0.25s, top 0.25s; }\n\n.noUi-state-drag * {\n  cursor: inherit !important; }\n\n.noUi-base {\n  transform: translate3d(0, 0, 0); }\n\n.noUi-horizontal {\n  height: 18px; }\n\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  left: -17px;\n  top: -6px; }\n\n.noUi-vertical {\n  width: 18px; }\n\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  left: -6px;\n  top: -17px; }\n\n.noUi-background {\n  background: #FAFAFA;\n  box-shadow: none; }\n\n.noUi-connect {\n  background: #3FB8AF;\n  box-shadow: none;\n  transition: background 450ms; }\n\n.noUi-origin {\n  border-radius: 2px; }\n\n.noUi-target {\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: none; }\n\n.noUi-target.noUi-connect {\n  box-shadow: inset none; }\n\n.noUi-dragable {\n  cursor: w-resize; }\n\n.noUi-vertical .noUi-dragable {\n  cursor: n-resize; }\n\n.noUi-handle {\n  border: 1px solid #fff;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: none; }\n\n.noUi-active {\n  box-shadow: inset none; }\n\n.noUi-handle:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px; }\n\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n  left: 17px; }\n\n.noUi-vertical .noUi-handle:before {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px; }\n\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n  top: 17px; }\n\n[disabled].noUi-connect, [disabled] .noUi-connect {\n  background: #B8B8B8; }\n\n[disabled].noUi-origin, [disabled] .noUi-handle {\n  cursor: not-allowed; }\n\n.noUi-target {\n  box-shadow: none;\n  border: none; }\n\n.noUi-base {\n  height: 15px;\n  top: -6px; }\n\n.noUi-background {\n  height: 3px;\n  top: 6px;\n  background-color: #bfbfbf;\n  box-shadow: none; }\n\n.noUi-horizontal {\n  height: 3px; }\n\n.noUi-connect {\n  height: 3px;\n  top: 6px;\n  background-color: #26A69A;\n  box-shadow: none; }\n\n.noUi-horizontal .noUi-handle {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  box-shadow: none;\n  background-color: #26A69A;\n  border: none;\n  left: -5px;\n  top: -6px;\n  transition: width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), height 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), left 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), top 0.2s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.noUi-handle:before, .noUi-handle:after {\n  content: none; }\n\n.noUi-target .noUi-active.noUi-handle {\n  -ms-box-shadow: none;\n  box-shadow: none; }\n\n.noUi-target .range-label {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  top: -17px;\n  left: -2px;\n  background-color: #26A69A;\n  border-radius: 50%;\n  transition: border-radius 0.25s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: scale(0.5) rotate(-45deg);\n  transform-origin: 50% 100%; }\n\n.noUi-target .noUi-active .range-label {\n  border-radius: 15px 15px 15px 0;\n  transform: rotate(-45deg) translate(23px, -25px); }\n\n.range-label span {\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  font-size: 12px;\n  transform: rotate(45deg);\n  opacity: 0;\n  position: absolute;\n  top: 7px;\n  left: -1px;\n  transition: opacity 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.noUi-active .range-label span {\n  opacity: 1; }\n\n/* Multi Select ================================ */\n.ms-container {\n  width: auto !important; }\n\n.ms-container .ms-list {\n  -ms-box-shadow: none !important;\n  box-shadow: none !important;\n  border-radius: 0 !important; }\n\n.ms-container .ms-list.ms-focus {\n  -ms-box-shadow: none !important;\n  box-shadow: none !important; }\n\n.ms-container .ms-selectable,\n.ms-container .ms-selection {\n  min-width: 250px !important; }\n\n.ms-container .ms-selectable li.ms-hover,\n.ms-container .ms-selection li.ms-hover {\n  color: #000000 !important;\n  background-color: #e6e6e6 !important; }\n\n.ms-container .ms-selectable li.ms-elem-selectable,\n.ms-container .ms-selectable li.ms-elem-selection,\n.ms-container .ms-selection li.ms-elem-selectable,\n.ms-container .ms-selection li.ms-elem-selection {\n  padding: 9px 15px 6px 15px !important; }\n\n.ms-container .ms-optgroup-label {\n  padding: 5px 0 0 8px !important; }\n\n/* Card ======================================== */\n.card {\n  background: #fff;\n  min-height: 50px;\n  box-shadow: none;\n  position: relative;\n  margin-bottom: 30px;\n  border-radius: 2px; }\n\n.card .card-inside-title {\n  margin-top: 25px;\n  margin-bottom: 15px;\n  display: block;\n  font-size: 15px;\n  color: #000; }\n\n.card .card-inside-title small {\n  color: #999;\n  display: block;\n  font-size: 11px;\n  margin-top: 5px; }\n\n.card .card-inside-title small a {\n  color: #777;\n  font-weight: bold; }\n\n.card .card-inside-title:first-child {\n  margin-top: 0; }\n\n.card .bg-red,\n.card .bg-pink,\n.card .bg-purple,\n.card .bg-deep-purple,\n.card .bg-indigo,\n.card .bg-blue,\n.card .bg-light-blue,\n.card .bg-cyan,\n.card .bg-teal,\n.card .bg-green,\n.card .bg-light-green,\n.card .bg-lime,\n.card .bg-yellow,\n.card .bg-amber,\n.card .bg-orange,\n.card .bg-deep-orange,\n.card .bg-brown,\n.card .bg-grey,\n.card .bg-blue-grey,\n.card .bg-black {\n  border-bottom: none !important;\n  color: #fff !important; }\n\n.card .bg-red h2, .card .bg-red small, .card .bg-red .material-icons,\n.card .bg-pink h2,\n.card .bg-pink small,\n.card .bg-pink .material-icons,\n.card .bg-purple h2,\n.card .bg-purple small,\n.card .bg-purple .material-icons,\n.card .bg-deep-purple h2,\n.card .bg-deep-purple small,\n.card .bg-deep-purple .material-icons,\n.card .bg-indigo h2,\n.card .bg-indigo small,\n.card .bg-indigo .material-icons,\n.card .bg-blue h2,\n.card .bg-blue small,\n.card .bg-blue .material-icons,\n.card .bg-light-blue h2,\n.card .bg-light-blue small,\n.card .bg-light-blue .material-icons,\n.card .bg-cyan h2,\n.card .bg-cyan small,\n.card .bg-cyan .material-icons,\n.card .bg-teal h2,\n.card .bg-teal small,\n.card .bg-teal .material-icons,\n.card .bg-green h2,\n.card .bg-green small,\n.card .bg-green .material-icons,\n.card .bg-light-green h2,\n.card .bg-light-green small,\n.card .bg-light-green .material-icons,\n.card .bg-lime h2,\n.card .bg-lime small,\n.card .bg-lime .material-icons,\n.card .bg-yellow h2,\n.card .bg-yellow small,\n.card .bg-yellow .material-icons,\n.card .bg-amber h2,\n.card .bg-amber small,\n.card .bg-amber .material-icons,\n.card .bg-orange h2,\n.card .bg-orange small,\n.card .bg-orange .material-icons,\n.card .bg-deep-orange h2,\n.card .bg-deep-orange small,\n.card .bg-deep-orange .material-icons,\n.card .bg-brown h2,\n.card .bg-brown small,\n.card .bg-brown .material-icons,\n.card .bg-grey h2,\n.card .bg-grey small,\n.card .bg-grey .material-icons,\n.card .bg-blue-grey h2,\n.card .bg-blue-grey small,\n.card .bg-blue-grey .material-icons,\n.card .bg-black h2,\n.card .bg-black small,\n.card .bg-black .material-icons {\n  color: #fff !important; }\n\n.card .bg-red .badge,\n.card .bg-pink .badge,\n.card .bg-purple .badge,\n.card .bg-deep-purple .badge,\n.card .bg-indigo .badge,\n.card .bg-blue .badge,\n.card .bg-light-blue .badge,\n.card .bg-cyan .badge,\n.card .bg-teal .badge,\n.card .bg-green .badge,\n.card .bg-light-green .badge,\n.card .bg-lime .badge,\n.card .bg-yellow .badge,\n.card .bg-amber .badge,\n.card .bg-orange .badge,\n.card .bg-deep-orange .badge,\n.card .bg-brown .badge,\n.card .bg-grey .badge,\n.card .bg-blue-grey .badge,\n.card .bg-black .badge {\n  background-color: #fff;\n  color: #555; }\n\n.card .header {\n  color: #555;\n  padding: 20px;\n  position: relative;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.35); }\n\n.card .header .header-dropdown {\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  list-style: none; }\n\n.card .header .header-dropdown .dropdown-menu li {\n  display: block !important; }\n\n.card .header .header-dropdown li {\n  display: inline-block; }\n\n.card .header .header-dropdown i {\n  font-size: 20px;\n  color: #999;\n  transition: all 0.5s; }\n\n.card .header .header-dropdown i:hover {\n  color: #000; }\n\n.card .header h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: normal;\n  color: #111; }\n\n.card .header h2 small {\n  display: block;\n  font-size: 12px;\n  margin-top: 5px;\n  color: #999;\n  line-height: 15px; }\n\n.card .header h2 small a {\n  font-weight: bold;\n  color: #777; }\n\n.card .header .col-xs-12 h2 {\n  margin-top: 5px; }\n\n.card .body {\n  font-size: 14px;\n  color: #555;\n  padding: 20px; }\n\n.card .body .col-xs-1,\n.card .body .col-sm-1,\n.card .body .col-md-1,\n.card .body .col-lg-1 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-2,\n.card .body .col-sm-2,\n.card .body .col-md-2,\n.card .body .col-lg-2 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-3,\n.card .body .col-sm-3,\n.card .body .col-md-3,\n.card .body .col-lg-3 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-4,\n.card .body .col-sm-4,\n.card .body .col-md-4,\n.card .body .col-lg-4 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-5,\n.card .body .col-sm-5,\n.card .body .col-md-5,\n.card .body .col-lg-5 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-6,\n.card .body .col-sm-6,\n.card .body .col-md-6,\n.card .body .col-lg-6 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-7,\n.card .body .col-sm-7,\n.card .body .col-md-7,\n.card .body .col-lg-7 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-8,\n.card .body .col-sm-8,\n.card .body .col-md-8,\n.card .body .col-lg-8 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-9,\n.card .body .col-sm-9,\n.card .body .col-md-9,\n.card .body .col-lg-9 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-10,\n.card .body .col-sm-10,\n.card .body .col-md-10,\n.card .body .col-lg-10 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-11,\n.card .body .col-sm-11,\n.card .body .col-md-11,\n.card .body .col-lg-11 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-12,\n.card .body .col-sm-12,\n.card .body .col-md-12,\n.card .body .col-lg-12 {\n  margin-bottom: 20px; }\n\n/* Infobox ===================================== */\n.info-box {\n  box-shadow: none;\n  height: 80px;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: default;\n  background-color: #fff;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 30px; }\n\n.info-box .icon {\n  display: inline-block;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.12);\n  width: 80px; }\n\n.info-box .icon i {\n  color: #fff;\n  font-size: 50px;\n  line-height: 80px; }\n\n.info-box .icon .chart.chart-bar {\n  height: 100%;\n  line-height: 100px; }\n\n.info-box .icon .chart.chart-bar canvas {\n  vertical-align: baseline !important; }\n\n.info-box .icon .chart.chart-pie {\n  height: 100%;\n  line-height: 123px; }\n\n.info-box .icon .chart.chart-pie canvas {\n  vertical-align: baseline !important; }\n\n.info-box .icon .chart.chart-line {\n  height: 100%;\n  line-height: 115px; }\n\n.info-box .icon .chart.chart-line canvas {\n  vertical-align: baseline !important; }\n\n.info-box .content {\n  display: inline-block;\n  padding: 7px 10px; }\n\n.info-box .content .text {\n  font-size: 13px;\n  margin-top: 11px;\n  color: #555; }\n\n.info-box .content .number {\n  font-weight: normal;\n  font-size: 26px;\n  margin-top: -4px;\n  color: #555; }\n\n.info-box.hover-zoom-effect .icon {\n  overflow: hidden; }\n\n.info-box.hover-zoom-effect .icon i {\n  transition: all 0.3s ease; }\n\n.info-box.hover-zoom-effect:hover .icon i {\n  opacity: 0.4;\n  transform: rotate(-32deg) scale(1.4); }\n\n.info-box.hover-expand-effect:after {\n  background-color: rgba(0, 0, 0, 0.05);\n  content: \".\";\n  position: absolute;\n  left: 80px;\n  top: 0;\n  width: 0;\n  height: 100%;\n  color: transparent;\n  transition: all 0.95s; }\n\n.info-box.hover-expand-effect:hover:after {\n  width: 100%; }\n\n.info-box-2 {\n  box-shadow: none;\n  height: 80px;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: default;\n  background-color: #fff;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 30px; }\n\n.info-box-2 .icon {\n  display: inline-block;\n  text-align: center;\n  width: 80px; }\n\n.info-box-2 .icon i {\n  color: #fff;\n  font-size: 50px;\n  line-height: 80px; }\n\n.info-box-2 .chart.chart-bar {\n  height: 100%;\n  line-height: 105px; }\n\n.info-box-2 .chart.chart-bar canvas {\n  vertical-align: baseline !important; }\n\n.info-box-2 .chart.chart-pie {\n  height: 100%;\n  line-height: 123px; }\n\n.info-box-2 .chart.chart-pie canvas {\n  vertical-align: baseline !important; }\n\n.info-box-2 .chart.chart-line {\n  height: 100%;\n  line-height: 115px; }\n\n.info-box-2 .chart.chart-line canvas {\n  vertical-align: baseline !important; }\n\n.info-box-2 .content {\n  display: inline-block;\n  padding: 7px 10px; }\n\n.info-box-2 .content .text {\n  font-size: 13px;\n  margin-top: 11px;\n  color: #555; }\n\n.info-box-2 .content .number {\n  font-weight: normal;\n  font-size: 26px;\n  margin-top: -4px;\n  color: #555; }\n\n.info-box-2.hover-zoom-effect .icon {\n  overflow: hidden; }\n\n.info-box-2.hover-zoom-effect .icon i {\n  transition: all 0.3s ease; }\n\n.info-box-2.hover-zoom-effect:hover .icon i {\n  opacity: 0.4;\n  transform: rotate(-32deg) scale(1.4); }\n\n.info-box-2.hover-expand-effect:after {\n  background-color: rgba(0, 0, 0, 0.05);\n  content: \".\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 100%;\n  color: transparent;\n  transition: all 0.95s; }\n\n.info-box-2.hover-expand-effect:hover:after {\n  width: 100%; }\n\n.info-box-3 {\n  box-shadow: none;\n  height: 80px;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: default;\n  background-color: #fff;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 30px; }\n\n.info-box-3 .icon {\n  position: absolute;\n  right: 10px;\n  bottom: 2px;\n  text-align: center; }\n\n.info-box-3 .icon i {\n  color: rgba(0, 0, 0, 0.15);\n  font-size: 60px; }\n\n.info-box-3 .chart {\n  margin-right: 5px; }\n\n.info-box-3 .chart.chart-bar {\n  height: 100%;\n  line-height: 50px; }\n\n.info-box-3 .chart.chart-bar canvas {\n  vertical-align: baseline !important; }\n\n.info-box-3 .chart.chart-pie {\n  height: 100%;\n  line-height: 34px; }\n\n.info-box-3 .chart.chart-pie canvas {\n  vertical-align: baseline !important; }\n\n.info-box-3 .chart.chart-line {\n  height: 100%;\n  line-height: 40px; }\n\n.info-box-3 .chart.chart-line canvas {\n  vertical-align: baseline !important; }\n\n.info-box-3 .content {\n  display: inline-block;\n  padding: 7px 16px; }\n\n.info-box-3 .content .text {\n  font-size: 13px;\n  margin-top: 11px;\n  color: #555; }\n\n.info-box-3 .content .number {\n  font-weight: normal;\n  font-size: 26px;\n  margin-top: -4px;\n  color: #555; }\n\n.info-box-3.hover-zoom-effect .icon i {\n  transition: all 0.3s ease; }\n\n.info-box-3.hover-zoom-effect:hover .icon i {\n  opacity: 0.4;\n  transform: rotate(-32deg) scale(1.4); }\n\n.info-box-3.hover-expand-effect:after {\n  background-color: rgba(0, 0, 0, 0.05);\n  content: \".\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 100%;\n  color: transparent;\n  transition: all 0.95s; }\n\n.info-box-3.hover-expand-effect:hover:after {\n  width: 100%; }\n\n.info-box-4 {\n  box-shadow: none;\n  height: 80px;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: default;\n  background-color: #fff;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 30px; }\n\n.info-box-4 .icon {\n  position: absolute;\n  right: 10px;\n  bottom: 2px;\n  text-align: center; }\n\n.info-box-4 .icon i {\n  color: rgba(0, 0, 0, 0.15);\n  font-size: 60px; }\n\n.info-box-4 .chart {\n  margin-right: 5px; }\n\n.info-box-4 .chart.chart-bar {\n  height: 100%;\n  line-height: 50px; }\n\n.info-box-4 .chart.chart-bar canvas {\n  vertical-align: baseline !important; }\n\n.info-box-4 .chart.chart-pie {\n  height: 100%;\n  line-height: 34px; }\n\n.info-box-4 .chart.chart-pie canvas {\n  vertical-align: baseline !important; }\n\n.info-box-4 .chart.chart-line {\n  height: 100%;\n  line-height: 40px; }\n\n.info-box-4 .chart.chart-line canvas {\n  vertical-align: baseline !important; }\n\n.info-box-4 .content {\n  display: inline-block;\n  padding: 7px 16px; }\n\n.info-box-4 .content .text {\n  font-size: 13px;\n  margin-top: 11px;\n  color: #555; }\n\n.info-box-4 .content .number {\n  font-weight: normal;\n  font-size: 26px;\n  margin-top: -4px;\n  color: #555; }\n\n.info-box-4.hover-zoom-effect .icon i {\n  transition: all 0.3s ease; }\n\n.info-box-4.hover-zoom-effect:hover .icon i {\n  opacity: 0.4;\n  transform: rotate(-32deg) scale(1.4); }\n\n.info-box-4.hover-expand-effect:after {\n  background-color: rgba(0, 0, 0, 0.05);\n  content: \".\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 100%;\n  color: transparent;\n  transition: all 0.95s; }\n\n.info-box-4.hover-expand-effect:hover:after {\n  width: 100%; }\n\n/* Alerts ====================================== */\n.alert {\n  border-radius: 0;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  color: #fff !important; }\n\n.alert .alert-link {\n  color: #fff;\n  text-decoration: underline;\n  font-weight: bold; }\n\n.alert-success {\n  background-color: #2b982b; }\n\n.alert-info {\n  background-color: #00b0e4; }\n\n.alert-warning {\n  background-color: #ff9600 !important; }\n\n.alert-danger {\n  background-color: #fb483a !important; }\n\n.alert-dismissible .close {\n  color: #fff;\n  opacity: 1;\n  border: none;\n  text-shadow: none; }\n\n/* Dialogs (SweetAlert) ======================== */\n.sweet-alert {\n  border-radius: 0 !important; }\n\n.sweet-alert p {\n  font-size: 14px !important; }\n\n.sweet-alert .sa-input-error {\n  top: 23px !important;\n  right: 13px !important; }\n\n.sweet-alert h2 {\n  font-size: 18px !important;\n  margin: 0 0 5px 0 !important; }\n\n.sweet-alert button {\n  font-size: 15px !important;\n  border-radius: 0 !important;\n  padding: 5px 20px !important; }\n\n/* Checkbox & Radio ============================ */\n[type=\"checkbox\"] + label {\n  padding-left: 26px;\n  height: 25px;\n  line-height: 21px;\n  font-size: 13px;\n  font-weight: normal; }\n\n[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -2px;\n  width: 11px;\n  height: 19px; }\n\n[type=\"checkbox\"]:checked.chk-col-red + label:before {\n  border-right: 2px solid #F44336;\n  border-bottom: 2px solid #F44336; }\n\n[type=\"checkbox\"]:checked.chk-col-pink + label:before {\n  border-right: 2px solid #E91E63;\n  border-bottom: 2px solid #E91E63; }\n\n[type=\"checkbox\"]:checked.chk-col-purple + label:before {\n  border-right: 2px solid #9C27B0;\n  border-bottom: 2px solid #9C27B0; }\n\n[type=\"checkbox\"]:checked.chk-col-deep-purple + label:before {\n  border-right: 2px solid #673AB7;\n  border-bottom: 2px solid #673AB7; }\n\n[type=\"checkbox\"]:checked.chk-col-indigo + label:before {\n  border-right: 2px solid #3F51B5;\n  border-bottom: 2px solid #3F51B5; }\n\n[type=\"checkbox\"]:checked.chk-col-blue + label:before {\n  border-right: 2px solid #336699;\n  border-bottom: 2px solid #336699; }\n\n[type=\"checkbox\"]:checked.chk-col-light-blue + label:before {\n  border-right: 2px solid #03A9F4;\n  border-bottom: 2px solid #03A9F4; }\n\n[type=\"checkbox\"]:checked.chk-col-cyan + label:before {\n  border-right: 2px solid #00BCD4;\n  border-bottom: 2px solid #00BCD4; }\n\n[type=\"checkbox\"]:checked.chk-col-teal + label:before {\n  border-right: 2px solid #009688;\n  border-bottom: 2px solid #009688; }\n\n[type=\"checkbox\"]:checked.chk-col-green + label:before {\n  border-right: 2px solid #4CAF50;\n  border-bottom: 2px solid #4CAF50; }\n\n[type=\"checkbox\"]:checked.chk-col-light-green + label:before {\n  border-right: 2px solid #8BC34A;\n  border-bottom: 2px solid #8BC34A; }\n\n[type=\"checkbox\"]:checked.chk-col-lime + label:before {\n  border-right: 2px solid #CDDC39;\n  border-bottom: 2px solid #CDDC39; }\n\n[type=\"checkbox\"]:checked.chk-col-yellow + label:before {\n  border-right: 2px solid #ffe821;\n  border-bottom: 2px solid #ffe821; }\n\n[type=\"checkbox\"]:checked.chk-col-amber + label:before {\n  border-right: 2px solid #FFC107;\n  border-bottom: 2px solid #FFC107; }\n\n[type=\"checkbox\"]:checked.chk-col-orange + label:before {\n  border-right: 2px solid #FF9800;\n  border-bottom: 2px solid #FF9800; }\n\n[type=\"checkbox\"]:checked.chk-col-deep-orange + label:before {\n  border-right: 2px solid #FF5722;\n  border-bottom: 2px solid #FF5722; }\n\n[type=\"checkbox\"]:checked.chk-col-brown + label:before {\n  border-right: 2px solid #795548;\n  border-bottom: 2px solid #795548; }\n\n[type=\"checkbox\"]:checked.chk-col-grey + label:before {\n  border-right: 2px solid #9E9E9E;\n  border-bottom: 2px solid #9E9E9E; }\n\n[type=\"checkbox\"]:checked.chk-col-blue-grey + label:before {\n  border-right: 2px solid #607D8B;\n  border-bottom: 2px solid #607D8B; }\n\n[type=\"checkbox\"]:checked.chk-col-black + label:before {\n  border-right: 2px solid #000000;\n  border-bottom: 2px solid #000000; }\n\n[type=\"checkbox\"]:checked.chk-col-white + label:before {\n  border-right: 2px solid #ffffff;\n  border-bottom: 2px solid #ffffff; }\n\n[type=\"checkbox\"].filled-in:checked + label:after {\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0; }\n\n[type=\"checkbox\"].filled-in:checked + label:before {\n  border-right: 2px solid #fff !important;\n  border-bottom: 2px solid #fff !important; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-red + label:after {\n  border: 2px solid #F44336;\n  background-color: #F44336; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-pink + label:after {\n  border: 2px solid #E91E63;\n  background-color: #E91E63; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-purple + label:after {\n  border: 2px solid #9C27B0;\n  background-color: #9C27B0; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-deep-purple + label:after {\n  border: 2px solid #673AB7;\n  background-color: #673AB7; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-indigo + label:after {\n  border: 2px solid #3F51B5;\n  background-color: #3F51B5; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-blue + label:after {\n  border: 2px solid #336699;\n  background-color: #336699; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-light-blue + label:after {\n  border: 2px solid #03A9F4;\n  background-color: #03A9F4; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-cyan + label:after {\n  border: 2px solid #00BCD4;\n  background-color: #00BCD4; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-teal + label:after {\n  border: 2px solid #009688;\n  background-color: #009688; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-green + label:after {\n  border: 2px solid #4CAF50;\n  background-color: #4CAF50; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-light-green + label:after {\n  border: 2px solid #8BC34A;\n  background-color: #8BC34A; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-lime + label:after {\n  border: 2px solid #CDDC39;\n  background-color: #CDDC39; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-yellow + label:after {\n  border: 2px solid #ffe821;\n  background-color: #ffe821; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-amber + label:after {\n  border: 2px solid #FFC107;\n  background-color: #FFC107; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-orange + label:after {\n  border: 2px solid #FF9800;\n  background-color: #FF9800; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-deep-orange + label:after {\n  border: 2px solid #FF5722;\n  background-color: #FF5722; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-brown + label:after {\n  border: 2px solid #795548;\n  background-color: #795548; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-grey + label:after {\n  border: 2px solid #9E9E9E;\n  background-color: #9E9E9E; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-blue-grey + label:after {\n  border: 2px solid #607D8B;\n  background-color: #607D8B; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-black + label:after {\n  border: 2px solid #000000;\n  background-color: #000000; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-white + label:after {\n  border: 2px solid #ffffff;\n  background-color: #ffffff; }\n\n[type=\"radio\"]:not(:checked) + label {\n  padding-left: 26px;\n  height: 25px;\n  line-height: 25px;\n  font-size: 13px;\n  font-weight: normal; }\n\n[type=\"radio\"]:checked + label {\n  padding-left: 26px;\n  height: 25px;\n  line-height: 25px;\n  font-size: 13px;\n  font-weight: normal; }\n\n[type=\"radio\"].radio-col-red:checked + label:after {\n  background-color: #F44336;\n  border-color: #F44336; }\n\n[type=\"radio\"].radio-col-pink:checked + label:after {\n  background-color: #E91E63;\n  border-color: #E91E63; }\n\n[type=\"radio\"].radio-col-purple:checked + label:after {\n  background-color: #9C27B0;\n  border-color: #9C27B0; }\n\n[type=\"radio\"].radio-col-deep-purple:checked + label:after {\n  background-color: #673AB7;\n  border-color: #673AB7; }\n\n[type=\"radio\"].radio-col-indigo:checked + label:after {\n  background-color: #3F51B5;\n  border-color: #3F51B5; }\n\n[type=\"radio\"].radio-col-blue:checked + label:after {\n  background-color: #336699;\n  border-color: #336699; }\n\n[type=\"radio\"].radio-col-light-blue:checked + label:after {\n  background-color: #03A9F4;\n  border-color: #03A9F4; }\n\n[type=\"radio\"].radio-col-cyan:checked + label:after {\n  background-color: #00BCD4;\n  border-color: #00BCD4; }\n\n[type=\"radio\"].radio-col-teal:checked + label:after {\n  background-color: #009688;\n  border-color: #009688; }\n\n[type=\"radio\"].radio-col-green:checked + label:after {\n  background-color: #4CAF50;\n  border-color: #4CAF50; }\n\n[type=\"radio\"].radio-col-light-green:checked + label:after {\n  background-color: #8BC34A;\n  border-color: #8BC34A; }\n\n[type=\"radio\"].radio-col-lime:checked + label:after {\n  background-color: #CDDC39;\n  border-color: #CDDC39; }\n\n[type=\"radio\"].radio-col-yellow:checked + label:after {\n  background-color: #ffe821;\n  border-color: #ffe821; }\n\n[type=\"radio\"].radio-col-amber:checked + label:after {\n  background-color: #FFC107;\n  border-color: #FFC107; }\n\n[type=\"radio\"].radio-col-orange:checked + label:after {\n  background-color: #FF9800;\n  border-color: #FF9800; }\n\n[type=\"radio\"].radio-col-deep-orange:checked + label:after {\n  background-color: #FF5722;\n  border-color: #FF5722; }\n\n[type=\"radio\"].radio-col-brown:checked + label:after {\n  background-color: #795548;\n  border-color: #795548; }\n\n[type=\"radio\"].radio-col-grey:checked + label:after {\n  background-color: #9E9E9E;\n  border-color: #9E9E9E; }\n\n[type=\"radio\"].radio-col-blue-grey:checked + label:after {\n  background-color: #607D8B;\n  border-color: #607D8B; }\n\n[type=\"radio\"].radio-col-black:checked + label:after {\n  background-color: #000000;\n  border-color: #000000; }\n\n[type=\"radio\"].radio-col-white:checked + label:after {\n  background-color: #ffffff;\n  border-color: #ffffff; }\n\n[type=\"radio\"].with-gap.radio-col-red:checked + label:before {\n  border: 2px solid #F44336; }\n\n[type=\"radio\"].with-gap.radio-col-red:checked + label:after {\n  background-color: #F44336;\n  border: 2px solid #F44336; }\n\n[type=\"radio\"].with-gap.radio-col-pink:checked + label:before {\n  border: 2px solid #E91E63; }\n\n[type=\"radio\"].with-gap.radio-col-pink:checked + label:after {\n  background-color: #E91E63;\n  border: 2px solid #E91E63; }\n\n[type=\"radio\"].with-gap.radio-col-purple:checked + label:before {\n  border: 2px solid #9C27B0; }\n\n[type=\"radio\"].with-gap.radio-col-purple:checked + label:after {\n  background-color: #9C27B0;\n  border: 2px solid #9C27B0; }\n\n[type=\"radio\"].with-gap.radio-col-deep-purple:checked + label:before {\n  border: 2px solid #673AB7; }\n\n[type=\"radio\"].with-gap.radio-col-deep-purple:checked + label:after {\n  background-color: #673AB7;\n  border: 2px solid #673AB7; }\n\n[type=\"radio\"].with-gap.radio-col-indigo:checked + label:before {\n  border: 2px solid #3F51B5; }\n\n[type=\"radio\"].with-gap.radio-col-indigo:checked + label:after {\n  background-color: #3F51B5;\n  border: 2px solid #3F51B5; }\n\n[type=\"radio\"].with-gap.radio-col-blue:checked + label:before {\n  border: 2px solid #336699; }\n\n[type=\"radio\"].with-gap.radio-col-blue:checked + label:after {\n  background-color: #336699;\n  border: 2px solid #336699; }\n\n[type=\"radio\"].with-gap.radio-col-light-blue:checked + label:before {\n  border: 2px solid #03A9F4; }\n\n[type=\"radio\"].with-gap.radio-col-light-blue:checked + label:after {\n  background-color: #03A9F4;\n  border: 2px solid #03A9F4; }\n\n[type=\"radio\"].with-gap.radio-col-cyan:checked + label:before {\n  border: 2px solid #00BCD4; }\n\n[type=\"radio\"].with-gap.radio-col-cyan:checked + label:after {\n  background-color: #00BCD4;\n  border: 2px solid #00BCD4; }\n\n[type=\"radio\"].with-gap.radio-col-teal:checked + label:before {\n  border: 2px solid #009688; }\n\n[type=\"radio\"].with-gap.radio-col-teal:checked + label:after {\n  background-color: #009688;\n  border: 2px solid #009688; }\n\n[type=\"radio\"].with-gap.radio-col-green:checked + label:before {\n  border: 2px solid #4CAF50; }\n\n[type=\"radio\"].with-gap.radio-col-green:checked + label:after {\n  background-color: #4CAF50;\n  border: 2px solid #4CAF50; }\n\n[type=\"radio\"].with-gap.radio-col-light-green:checked + label:before {\n  border: 2px solid #8BC34A; }\n\n[type=\"radio\"].with-gap.radio-col-light-green:checked + label:after {\n  background-color: #8BC34A;\n  border: 2px solid #8BC34A; }\n\n[type=\"radio\"].with-gap.radio-col-lime:checked + label:before {\n  border: 2px solid #CDDC39; }\n\n[type=\"radio\"].with-gap.radio-col-lime:checked + label:after {\n  background-color: #CDDC39;\n  border: 2px solid #CDDC39; }\n\n[type=\"radio\"].with-gap.radio-col-yellow:checked + label:before {\n  border: 2px solid #ffe821; }\n\n[type=\"radio\"].with-gap.radio-col-yellow:checked + label:after {\n  background-color: #ffe821;\n  border: 2px solid #ffe821; }\n\n[type=\"radio\"].with-gap.radio-col-amber:checked + label:before {\n  border: 2px solid #FFC107; }\n\n[type=\"radio\"].with-gap.radio-col-amber:checked + label:after {\n  background-color: #FFC107;\n  border: 2px solid #FFC107; }\n\n[type=\"radio\"].with-gap.radio-col-orange:checked + label:before {\n  border: 2px solid #FF9800; }\n\n[type=\"radio\"].with-gap.radio-col-orange:checked + label:after {\n  background-color: #FF9800;\n  border: 2px solid #FF9800; }\n\n[type=\"radio\"].with-gap.radio-col-deep-orange:checked + label:before {\n  border: 2px solid #FF5722; }\n\n[type=\"radio\"].with-gap.radio-col-deep-orange:checked + label:after {\n  background-color: #FF5722;\n  border: 2px solid #FF5722; }\n\n[type=\"radio\"].with-gap.radio-col-brown:checked + label:before {\n  border: 2px solid #795548; }\n\n[type=\"radio\"].with-gap.radio-col-brown:checked + label:after {\n  background-color: #795548;\n  border: 2px solid #795548; }\n\n[type=\"radio\"].with-gap.radio-col-grey:checked + label:before {\n  border: 2px solid #9E9E9E; }\n\n[type=\"radio\"].with-gap.radio-col-grey:checked + label:after {\n  background-color: #9E9E9E;\n  border: 2px solid #9E9E9E; }\n\n[type=\"radio\"].with-gap.radio-col-blue-grey:checked + label:before {\n  border: 2px solid #607D8B; }\n\n[type=\"radio\"].with-gap.radio-col-blue-grey:checked + label:after {\n  background-color: #607D8B;\n  border: 2px solid #607D8B; }\n\n[type=\"radio\"].with-gap.radio-col-black:checked + label:before {\n  border: 2px solid #000000; }\n\n[type=\"radio\"].with-gap.radio-col-black:checked + label:after {\n  background-color: #000000;\n  border: 2px solid #000000; }\n\n[type=\"radio\"].with-gap.radio-col-white:checked + label:before {\n  border: 2px solid #ffffff; }\n\n[type=\"radio\"].with-gap.radio-col-white:checked + label:after {\n  background-color: #ffffff;\n  border: 2px solid #ffffff; }\n\n/* Switch ====================================== */\n.switch label {\n  font-weight: normal;\n  font-size: 13px; }\n\n.switch label .lever {\n  margin: 0 14px; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-red:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-red {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-red:after {\n  background-color: #F44336; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-pink:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-pink {\n  background-color: rgba(233, 30, 99, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-pink:after {\n  background-color: #E91E63; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-purple:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-purple {\n  background-color: rgba(156, 39, 176, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-purple:after {\n  background-color: #9C27B0; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-deep-purple:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-deep-purple {\n  background-color: rgba(103, 58, 183, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-deep-purple:after {\n  background-color: #673AB7; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-indigo:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-indigo {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-indigo:after {\n  background-color: #3F51B5; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-blue:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-blue {\n  background-color: rgba(33, 150, 243, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-blue:after {\n  background-color: #336699; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-light-blue:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-light-blue {\n  background-color: rgba(3, 169, 244, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-light-blue:after {\n  background-color: #03A9F4; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-cyan:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-cyan {\n  background-color: rgba(0, 188, 212, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-cyan:after {\n  background-color: #00BCD4; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-teal:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-teal {\n  background-color: rgba(0, 150, 136, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-teal:after {\n  background-color: #009688; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-green:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-green {\n  background-color: rgba(76, 175, 80, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-green:after {\n  background-color: #4CAF50; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-light-green:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-light-green {\n  background-color: rgba(139, 195, 74, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-light-green:after {\n  background-color: #8BC34A; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-lime:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-lime {\n  background-color: rgba(205, 220, 57, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-lime:after {\n  background-color: #CDDC39; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-yellow:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-yellow {\n  background-color: rgba(255, 232, 33, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-yellow:after {\n  background-color: #ffe821; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-amber:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-amber {\n  background-color: rgba(255, 193, 7, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-amber:after {\n  background-color: #FFC107; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-orange:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-orange {\n  background-color: rgba(255, 152, 0, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-orange:after {\n  background-color: #FF9800; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-deep-orange:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-deep-orange {\n  background-color: rgba(255, 87, 34, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-deep-orange:after {\n  background-color: #FF5722; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-brown:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-brown {\n  background-color: rgba(121, 85, 72, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-brown:after {\n  background-color: #795548; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-grey:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-grey {\n  background-color: rgba(158, 158, 158, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-grey:after {\n  background-color: #9E9E9E; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-blue-grey:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-blue-grey {\n  background-color: rgba(96, 125, 139, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-blue-grey:after {\n  background-color: #607D8B; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-black:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-black {\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-black:after {\n  background-color: #000000; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-white:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-white {\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-white:after {\n  background-color: #ffffff; }\n\n/* DateTime Picker ============================= */\n.dtp div.dtp-date,\n.dtp div.dtp-time {\n  background: #007d72; }\n\n.dtp > .dtp-content > .dtp-date-view > header.dtp-header {\n  background: #009688; }\n\n.dtp .dtp-buttons .dtp-btn-ok {\n  margin-left: 10px; }\n\n.dtp .dtp-buttons .dtp-btn-clear {\n  margin-right: 10px !important; }\n\n.dtp .p10 > a {\n  color: #fff; }\n\n.dtp div.dtp-actual-year {\n  font-size: 1.5em;\n  color: #ffffff; }\n\n.dtp table.dtp-picker-days tr td a.selected {\n  background: #007d72;\n  color: #fff; }\n\n/* Bootstrap Select ============================ */\n.bootstrap-select {\n  box-shadow: none !important;\n  border-bottom: 1px solid #ddd !important;\n  border-radius: 0; }\n\n.bootstrap-select .dropdown-toggle:focus, .bootstrap-select .dropdown-toggle:active {\n  outline: none !important; }\n\n.bootstrap-select .bs-searchbox,\n.bootstrap-select .bs-actionsbox,\n.bootstrap-select .bs-donebutton {\n  padding: 0 0 5px 0;\n  border-bottom: 1px solid #e9e9e9; }\n\n.bootstrap-select .bs-searchbox .form-control,\n.bootstrap-select .bs-actionsbox .form-control,\n.bootstrap-select .bs-donebutton .form-control {\n  border-radius: 0;\n  -ms-box-shadow: none !important;\n  box-shadow: none !important;\n  border: none;\n  margin-left: 30px; }\n\n.bootstrap-select .bs-searchbox {\n  position: relative; }\n\n.bootstrap-select .bs-searchbox:after {\n  content: '\\E8B6';\n  font-family: 'PT Sans';\n  position: absolute;\n  top: 0;\n  left: 10px;\n  font-size: 25px; }\n\n.bootstrap-select ul.dropdown-menu {\n  margin-top: 0 !important; }\n\n.bootstrap-select .dropdown-menu li.selected a {\n  background-color: #eee !important;\n  color: #555 !important; }\n\n.bootstrap-select .dropdown-menu .active a {\n  background-color: transparent;\n  color: #333 !important; }\n\n.bootstrap-select .dropdown-menu .notify {\n  background-color: #F44336 !important;\n  color: #fff !important;\n  border: none !important; }\n\n.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark {\n  margin-top: 9px; }\n\n/* Tooltip & Popovers ========================== */\n.tooltip {\n  font-size: 13px; }\n\n.tooltip .tooltip-inner {\n  border-radius: 0; }\n\n.popover {\n  border-radius: 0;\n  border: 1px solid rgba(0, 0, 0, 0.08); }\n\n.popover .popover-title {\n  font-weight: bold;\n  border-radius: 0;\n  background-color: #e9e9e9;\n  border-bottom: 1px solid #ddd; }\n\n.popover .popover-content {\n  font-size: 13px;\n  color: #777;\n  border-radius: 0; }\n\n/* Nav Tabs ==================================== */\n.nav-tabs {\n  border-bottom: 2px solid #eee; }\n\n.nav-tabs > li {\n  position: relative;\n  top: 3px;\n  left: -2px; }\n\n.nav-tabs > li > a {\n  border: none !important;\n  color: #999 !important;\n  border-radius: 0; }\n\n.nav-tabs > li > a:hover, .nav-tabs > li > a:active, .nav-tabs > li > a:focus {\n  background-color: transparent !important; }\n\n.nav-tabs > li > a:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 0;\n  border-bottom: 2px solid #336699;\n  bottom: 2px;\n  transform: scaleX(0);\n  transition: 0.1s ease-in; }\n\n.nav-tabs > li > a .material-icons {\n  position: relative;\n  top: 7px;\n  margin-bottom: 8px; }\n\n.nav-tabs li.active a {\n  color: #222 !important; }\n\n.nav-tabs li.active a:hover, .nav-tabs li.active a:active, .nav-tabs li.active a:focus {\n  background-color: transparent !important; }\n\n.nav-tabs li.active a:before {\n  transform: scaleX(1); }\n\n.nav-tabs + .tab-content {\n  padding: 15px 0; }\n\n.nav-tabs.tab-col-red > li > a:before {\n  border-bottom: 2px solid #F44336; }\n\n.nav-tabs.tab-col-pink > li > a:before {\n  border-bottom: 2px solid #E91E63; }\n\n.nav-tabs.tab-col-purple > li > a:before {\n  border-bottom: 2px solid #9C27B0; }\n\n.nav-tabs.tab-col-deep-purple > li > a:before {\n  border-bottom: 2px solid #673AB7; }\n\n.nav-tabs.tab-col-indigo > li > a:before {\n  border-bottom: 2px solid #3F51B5; }\n\n.nav-tabs.tab-col-blue > li > a:before {\n  border-bottom: 2px solid #336699; }\n\n.nav-tabs.tab-col-light-blue > li > a:before {\n  border-bottom: 2px solid #03A9F4; }\n\n.nav-tabs.tab-col-cyan > li > a:before {\n  border-bottom: 2px solid #00BCD4; }\n\n.nav-tabs.tab-col-teal > li > a:before {\n  border-bottom: 2px solid #009688; }\n\n.nav-tabs.tab-col-green > li > a:before {\n  border-bottom: 2px solid #4CAF50; }\n\n.nav-tabs.tab-col-light-green > li > a:before {\n  border-bottom: 2px solid #8BC34A; }\n\n.nav-tabs.tab-col-lime > li > a:before {\n  border-bottom: 2px solid #CDDC39; }\n\n.nav-tabs.tab-col-yellow > li > a:before {\n  border-bottom: 2px solid #ffe821; }\n\n.nav-tabs.tab-col-amber > li > a:before {\n  border-bottom: 2px solid #FFC107; }\n\n.nav-tabs.tab-col-orange > li > a:before {\n  border-bottom: 2px solid #FF9800; }\n\n.nav-tabs.tab-col-deep-orange > li > a:before {\n  border-bottom: 2px solid #FF5722; }\n\n.nav-tabs.tab-col-brown > li > a:before {\n  border-bottom: 2px solid #795548; }\n\n.nav-tabs.tab-col-grey > li > a:before {\n  border-bottom: 2px solid #9E9E9E; }\n\n.nav-tabs.tab-col-blue-grey > li > a:before {\n  border-bottom: 2px solid #607D8B; }\n\n.nav-tabs.tab-col-black > li > a:before {\n  border-bottom: 2px solid #000000; }\n\n.nav-tabs.tab-col-white > li > a:before {\n  border-bottom: 2px solid #ffffff; }\n\n/* Thumbnails ================================== */\n.thumbnail {\n  border-radius: 0; }\n\n.thumbnail p:not(button) {\n  color: #999999;\n  font-size: 14px; }\n\n.thumbnail h3 {\n  font-weight: bold;\n  font-size: 17px; }\n\n/* Modals ====================================== */\n.modal .modal-header {\n  border: none;\n  padding: 25px 25px 5px 25px; }\n\n.modal .modal-header .modal-title {\n  font-weight: bold;\n  font-size: 16px; }\n\n.modal .modal-content {\n  border-radius: 0;\n  box-shadow: none;\n  border: none; }\n\n.modal .modal-content .modal-body {\n  color: #777;\n  padding: 15px 25px; }\n\n.modal .modal-footer {\n  border: none; }\n\n.modal-col-red {\n  background-color: #F44336; }\n\n.modal-col-red .modal-body,\n.modal-col-red .modal-title {\n  color: #fff !important; }\n\n.modal-col-red .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-red .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-red .modal-footer .btn-link:hover, .modal-col-red .modal-footer .btn-link:active, .modal-col-red .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-pink {\n  background-color: #E91E63; }\n\n.modal-col-pink .modal-body,\n.modal-col-pink .modal-title {\n  color: #fff !important; }\n\n.modal-col-pink .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-pink .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-pink .modal-footer .btn-link:hover, .modal-col-pink .modal-footer .btn-link:active, .modal-col-pink .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-purple {\n  background-color: #9C27B0; }\n\n.modal-col-purple .modal-body,\n.modal-col-purple .modal-title {\n  color: #fff !important; }\n\n.modal-col-purple .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-purple .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-purple .modal-footer .btn-link:hover, .modal-col-purple .modal-footer .btn-link:active, .modal-col-purple .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-deep-purple {\n  background-color: #673AB7; }\n\n.modal-col-deep-purple .modal-body,\n.modal-col-deep-purple .modal-title {\n  color: #fff !important; }\n\n.modal-col-deep-purple .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-deep-purple .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-deep-purple .modal-footer .btn-link:hover, .modal-col-deep-purple .modal-footer .btn-link:active, .modal-col-deep-purple .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-indigo {\n  background-color: #3F51B5; }\n\n.modal-col-indigo .modal-body,\n.modal-col-indigo .modal-title {\n  color: #fff !important; }\n\n.modal-col-indigo .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-indigo .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-indigo .modal-footer .btn-link:hover, .modal-col-indigo .modal-footer .btn-link:active, .modal-col-indigo .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-blue {\n  background-color: #336699; }\n\n.modal-col-blue .modal-body,\n.modal-col-blue .modal-title {\n  color: #fff !important; }\n\n.modal-col-blue .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-blue .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-blue .modal-footer .btn-link:hover, .modal-col-blue .modal-footer .btn-link:active, .modal-col-blue .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-light-blue {\n  background-color: #03A9F4; }\n\n.modal-col-light-blue .modal-body,\n.modal-col-light-blue .modal-title {\n  color: #fff !important; }\n\n.modal-col-light-blue .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-light-blue .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-light-blue .modal-footer .btn-link:hover, .modal-col-light-blue .modal-footer .btn-link:active, .modal-col-light-blue .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-cyan {\n  background-color: #00BCD4; }\n\n.modal-col-cyan .modal-body,\n.modal-col-cyan .modal-title {\n  color: #fff !important; }\n\n.modal-col-cyan .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-cyan .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-cyan .modal-footer .btn-link:hover, .modal-col-cyan .modal-footer .btn-link:active, .modal-col-cyan .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-teal {\n  background-color: #009688; }\n\n.modal-col-teal .modal-body,\n.modal-col-teal .modal-title {\n  color: #fff !important; }\n\n.modal-col-teal .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-teal .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-teal .modal-footer .btn-link:hover, .modal-col-teal .modal-footer .btn-link:active, .modal-col-teal .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-green {\n  background-color: #4CAF50; }\n\n.modal-col-green .modal-body,\n.modal-col-green .modal-title {\n  color: #fff !important; }\n\n.modal-col-green .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-green .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-green .modal-footer .btn-link:hover, .modal-col-green .modal-footer .btn-link:active, .modal-col-green .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-light-green {\n  background-color: #8BC34A; }\n\n.modal-col-light-green .modal-body,\n.modal-col-light-green .modal-title {\n  color: #fff !important; }\n\n.modal-col-light-green .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-light-green .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-light-green .modal-footer .btn-link:hover, .modal-col-light-green .modal-footer .btn-link:active, .modal-col-light-green .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-lime {\n  background-color: #CDDC39; }\n\n.modal-col-lime .modal-body,\n.modal-col-lime .modal-title {\n  color: #fff !important; }\n\n.modal-col-lime .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-lime .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-lime .modal-footer .btn-link:hover, .modal-col-lime .modal-footer .btn-link:active, .modal-col-lime .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-yellow {\n  background-color: #ffe821; }\n\n.modal-col-yellow .modal-body,\n.modal-col-yellow .modal-title {\n  color: #fff !important; }\n\n.modal-col-yellow .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-yellow .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-yellow .modal-footer .btn-link:hover, .modal-col-yellow .modal-footer .btn-link:active, .modal-col-yellow .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-amber {\n  background-color: #FFC107; }\n\n.modal-col-amber .modal-body,\n.modal-col-amber .modal-title {\n  color: #fff !important; }\n\n.modal-col-amber .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-amber .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-amber .modal-footer .btn-link:hover, .modal-col-amber .modal-footer .btn-link:active, .modal-col-amber .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-orange {\n  background-color: #FF9800; }\n\n.modal-col-orange .modal-body,\n.modal-col-orange .modal-title {\n  color: #fff !important; }\n\n.modal-col-orange .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-orange .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-orange .modal-footer .btn-link:hover, .modal-col-orange .modal-footer .btn-link:active, .modal-col-orange .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-deep-orange {\n  background-color: #FF5722; }\n\n.modal-col-deep-orange .modal-body,\n.modal-col-deep-orange .modal-title {\n  color: #fff !important; }\n\n.modal-col-deep-orange .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-deep-orange .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-deep-orange .modal-footer .btn-link:hover, .modal-col-deep-orange .modal-footer .btn-link:active, .modal-col-deep-orange .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-brown {\n  background-color: #795548; }\n\n.modal-col-brown .modal-body,\n.modal-col-brown .modal-title {\n  color: #fff !important; }\n\n.modal-col-brown .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-brown .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-brown .modal-footer .btn-link:hover, .modal-col-brown .modal-footer .btn-link:active, .modal-col-brown .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-grey {\n  background-color: #9E9E9E; }\n\n.modal-col-grey .modal-body,\n.modal-col-grey .modal-title {\n  color: #fff !important; }\n\n.modal-col-grey .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-grey .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-grey .modal-footer .btn-link:hover, .modal-col-grey .modal-footer .btn-link:active, .modal-col-grey .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-blue-grey {\n  background-color: #607D8B; }\n\n.modal-col-blue-grey .modal-body,\n.modal-col-blue-grey .modal-title {\n  color: #fff !important; }\n\n.modal-col-blue-grey .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-blue-grey .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-blue-grey .modal-footer .btn-link:hover, .modal-col-blue-grey .modal-footer .btn-link:active, .modal-col-blue-grey .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-black {\n  background-color: #000000; }\n\n.modal-col-black .modal-body,\n.modal-col-black .modal-title {\n  color: #fff !important; }\n\n.modal-col-black .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-black .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-black .modal-footer .btn-link:hover, .modal-col-black .modal-footer .btn-link:active, .modal-col-black .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-white {\n  background-color: #ffffff; }\n\n.modal-col-white .modal-body,\n.modal-col-white .modal-title {\n  color: #fff !important; }\n\n.modal-col-white .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-white .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-white .modal-footer .btn-link:hover, .modal-col-white .modal-footer .btn-link:active, .modal-col-white .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n/* Labels ====================================== */\n.label {\n  border-radius: 0; }\n\n.label-primary {\n  background-color: #1f91f3; }\n\n.label-success {\n  background-color: #2b982b; }\n\n.label-info {\n  background-color: #00b0e4; }\n\n.label-warning {\n  background-color: #ff9600; }\n\n.label-danger {\n  background-color: #fb483a; }\n\n/* Collapse ==================================== */\n.collapse .well,\n.collapse.in .well,\n.collapsing .well {\n  border-radius: 0;\n  margin-bottom: 0; }\n\n/* Tables ====================================== */\n.table tbody tr td, .table tbody tr th {\n  padding: 10px;\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee; }\n\n.table tbody tr.primary td, .table tbody tr.primary th {\n  background-color: #1f91f3;\n  color: #fff; }\n\n.table tbody tr.success td, .table tbody tr.success th {\n  background-color: #2b982b;\n  color: #fff; }\n\n.table tbody tr.info td, .table tbody tr.info th {\n  background-color: #00b0e4;\n  color: #fff; }\n\n.table tbody tr.warning td, .table tbody tr.warning th {\n  background-color: #ff9600;\n  color: #fff; }\n\n.table tbody tr.danger td, .table tbody tr.danger th {\n  background-color: #fb483a;\n  color: #fff; }\n\n.table thead tr th {\n  padding: 10px;\n  border-bottom: 1px solid #eee; }\n\n.table-bordered {\n  border-top: 1px solid #eee; }\n\n.table-bordered tbody tr td, .table-bordered tbody tr th {\n  padding: 10px;\n  border: 1px solid #eee; }\n\n.table-bordered thead tr th {\n  padding: 10px;\n  border: 1px solid #eee; }\n\n/* Panel ======================================= */\n.panel-group .panel-col-red {\n  border: 1px solid #F44336; }\n\n.panel-group .panel-col-red .panel-title {\n  background-color: #F44336 !important;\n  color: #fff; }\n\n.panel-group .panel-col-red .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-pink {\n  border: 1px solid #E91E63; }\n\n.panel-group .panel-col-pink .panel-title {\n  background-color: #E91E63 !important;\n  color: #fff; }\n\n.panel-group .panel-col-pink .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-purple {\n  border: 1px solid #9C27B0; }\n\n.panel-group .panel-col-purple .panel-title {\n  background-color: #9C27B0 !important;\n  color: #fff; }\n\n.panel-group .panel-col-purple .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-deep-purple {\n  border: 1px solid #673AB7; }\n\n.panel-group .panel-col-deep-purple .panel-title {\n  background-color: #673AB7 !important;\n  color: #fff; }\n\n.panel-group .panel-col-deep-purple .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-indigo {\n  border: 1px solid #3F51B5; }\n\n.panel-group .panel-col-indigo .panel-title {\n  background-color: #3F51B5 !important;\n  color: #fff; }\n\n.panel-group .panel-col-indigo .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-blue {\n  border: 1px solid #336699; }\n\n.panel-group .panel-col-blue .panel-title {\n  background-color: #336699 !important;\n  color: #fff; }\n\n.panel-group .panel-col-blue .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-light-blue {\n  border: 1px solid #03A9F4; }\n\n.panel-group .panel-col-light-blue .panel-title {\n  background-color: #03A9F4 !important;\n  color: #fff; }\n\n.panel-group .panel-col-light-blue .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-cyan {\n  border: 1px solid #00BCD4; }\n\n.panel-group .panel-col-cyan .panel-title {\n  background-color: #00BCD4 !important;\n  color: #fff; }\n\n.panel-group .panel-col-cyan .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-teal {\n  border: 1px solid #009688; }\n\n.panel-group .panel-col-teal .panel-title {\n  background-color: #009688 !important;\n  color: #fff; }\n\n.panel-group .panel-col-teal .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-green {\n  border: 1px solid #4CAF50; }\n\n.panel-group .panel-col-green .panel-title {\n  background-color: #4CAF50 !important;\n  color: #fff; }\n\n.panel-group .panel-col-green .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-light-green {\n  border: 1px solid #8BC34A; }\n\n.panel-group .panel-col-light-green .panel-title {\n  background-color: #8BC34A !important;\n  color: #fff; }\n\n.panel-group .panel-col-light-green .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-lime {\n  border: 1px solid #CDDC39; }\n\n.panel-group .panel-col-lime .panel-title {\n  background-color: #CDDC39 !important;\n  color: #fff; }\n\n.panel-group .panel-col-lime .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-yellow {\n  border: 1px solid #ffe821; }\n\n.panel-group .panel-col-yellow .panel-title {\n  background-color: #ffe821 !important;\n  color: #fff; }\n\n.panel-group .panel-col-yellow .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-amber {\n  border: 1px solid #FFC107; }\n\n.panel-group .panel-col-amber .panel-title {\n  background-color: #FFC107 !important;\n  color: #fff; }\n\n.panel-group .panel-col-amber .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-orange {\n  border: 1px solid #FF9800; }\n\n.panel-group .panel-col-orange .panel-title {\n  background-color: #FF9800 !important;\n  color: #fff; }\n\n.panel-group .panel-col-orange .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-deep-orange {\n  border: 1px solid #FF5722; }\n\n.panel-group .panel-col-deep-orange .panel-title {\n  background-color: #FF5722 !important;\n  color: #fff; }\n\n.panel-group .panel-col-deep-orange .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-brown {\n  border: 1px solid #795548; }\n\n.panel-group .panel-col-brown .panel-title {\n  background-color: #795548 !important;\n  color: #fff; }\n\n.panel-group .panel-col-brown .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-grey {\n  border: 1px solid #9E9E9E; }\n\n.panel-group .panel-col-grey .panel-title {\n  background-color: #9E9E9E !important;\n  color: #fff; }\n\n.panel-group .panel-col-grey .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-blue-grey {\n  border: 1px solid #607D8B; }\n\n.panel-group .panel-col-blue-grey .panel-title {\n  background-color: #607D8B !important;\n  color: #fff; }\n\n.panel-group .panel-col-blue-grey .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-black {\n  border: 1px solid #000000; }\n\n.panel-group .panel-col-black .panel-title {\n  background-color: #000000 !important;\n  color: #fff; }\n\n.panel-group .panel-col-black .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-white {\n  border: 1px solid #ffffff; }\n\n.panel-group .panel-col-white .panel-title {\n  background-color: #ffffff !important;\n  color: #fff; }\n\n.panel-group .panel-col-white .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel {\n  border-radius: 0; }\n\n.panel-group .panel .panel-title .material-icons {\n  float: left;\n  line-height: 16px;\n  margin-right: 8px; }\n\n.panel-group .panel .panel-heading {\n  padding: 0;\n  border-radius: 0; }\n\n.panel-group .panel .panel-heading a {\n  display: block;\n  padding: 10px 15px; }\n\n.panel-group .panel .panel-heading a:hover, .panel-group .panel .panel-heading a:focus, .panel-group .panel .panel-heading a:active {\n  text-decoration: none; }\n\n.panel-group .panel .panel-body {\n  color: #555; }\n\n.panel-group .panel-primary {\n  border: 1px solid #1f91f3; }\n\n.panel-group .panel-primary .panel-title {\n  background-color: #1f91f3; }\n\n.panel-group .panel-success {\n  border: 1px solid #2b982b; }\n\n.panel-group .panel-success .panel-title {\n  background-color: #2b982b;\n  color: #fff; }\n\n.panel-group .panel-warning {\n  border: 1px solid #ff9600; }\n\n.panel-group .panel-warning .panel-title {\n  background-color: #ff9600;\n  color: #fff; }\n\n.panel-group .panel-danger {\n  border: 1px solid #fb483a; }\n\n.panel-group .panel-danger .panel-title {\n  background-color: #fb483a;\n  color: #fff; }\n\n.full-body .panel-col-red .panel-body {\n  border-top-color: #fff !important;\n  background-color: #F44336;\n  color: #fff; }\n\n.full-body .panel-col-pink .panel-body {\n  border-top-color: #fff !important;\n  background-color: #E91E63;\n  color: #fff; }\n\n.full-body .panel-col-purple .panel-body {\n  border-top-color: #fff !important;\n  background-color: #9C27B0;\n  color: #fff; }\n\n.full-body .panel-col-deep-purple .panel-body {\n  border-top-color: #fff !important;\n  background-color: #673AB7;\n  color: #fff; }\n\n.full-body .panel-col-indigo .panel-body {\n  border-top-color: #fff !important;\n  background-color: #3F51B5;\n  color: #fff; }\n\n.full-body .panel-col-blue .panel-body {\n  border-top-color: #fff !important;\n  background-color: #336699;\n  color: #fff; }\n\n.full-body .panel-col-light-blue .panel-body {\n  border-top-color: #fff !important;\n  background-color: #03A9F4;\n  color: #fff; }\n\n.full-body .panel-col-cyan .panel-body {\n  border-top-color: #fff !important;\n  background-color: #00BCD4;\n  color: #fff; }\n\n.full-body .panel-col-teal .panel-body {\n  border-top-color: #fff !important;\n  background-color: #009688;\n  color: #fff; }\n\n.full-body .panel-col-green .panel-body {\n  border-top-color: #fff !important;\n  background-color: #4CAF50;\n  color: #fff; }\n\n.full-body .panel-col-light-green .panel-body {\n  border-top-color: #fff !important;\n  background-color: #8BC34A;\n  color: #fff; }\n\n.full-body .panel-col-lime .panel-body {\n  border-top-color: #fff !important;\n  background-color: #CDDC39;\n  color: #fff; }\n\n.full-body .panel-col-yellow .panel-body {\n  border-top-color: #fff !important;\n  background-color: #ffe821;\n  color: #fff; }\n\n.full-body .panel-col-amber .panel-body {\n  border-top-color: #fff !important;\n  background-color: #FFC107;\n  color: #fff; }\n\n.full-body .panel-col-orange .panel-body {\n  border-top-color: #fff !important;\n  background-color: #FF9800;\n  color: #fff; }\n\n.full-body .panel-col-deep-orange .panel-body {\n  border-top-color: #fff !important;\n  background-color: #FF5722;\n  color: #fff; }\n\n.full-body .panel-col-brown .panel-body {\n  border-top-color: #fff !important;\n  background-color: #795548;\n  color: #fff; }\n\n.full-body .panel-col-grey .panel-body {\n  border-top-color: #fff !important;\n  background-color: #9E9E9E;\n  color: #fff; }\n\n.full-body .panel-col-blue-grey .panel-body {\n  border-top-color: #fff !important;\n  background-color: #607D8B;\n  color: #fff; }\n\n.full-body .panel-col-black .panel-body {\n  border-top-color: #fff !important;\n  background-color: #000000;\n  color: #fff; }\n\n.full-body .panel-col-white .panel-body {\n  border-top-color: #fff !important;\n  background-color: #ffffff;\n  color: #fff; }\n\n.full-body .panel-primary .panel-body {\n  border-top-color: #fff !important;\n  background-color: #1f91f3;\n  color: #fff; }\n\n.full-body .panel-success .panel-body {\n  border-top-color: #fff !important;\n  background-color: #2b982b;\n  color: #fff; }\n\n.full-body .panel-warning .panel-body {\n  border-top-color: #fff !important;\n  background-color: #ff9600;\n  color: #fff; }\n\n.full-body .panel-danger .panel-body {\n  border-top-color: #fff !important;\n  background-color: #fb483a;\n  color: #fff; }\n\n/* Progress Bars =============================== */\n.progress {\n  border-radius: 0;\n  height: 22px; }\n\n.progress .progress-bar {\n  line-height: 23px;\n  background-color: #1f91f3; }\n\n.progress .progress-bar-success {\n  background-color: #2b982b; }\n\n.progress .progress-bar-info {\n  background-color: #00b0e4; }\n\n.progress .progress-bar-warning {\n  background-color: #ff9600; }\n\n.progress .progress-bar-danger {\n  background-color: #fb483a; }\n\n/* Ion Range Slider ============================ */\n.irs .irs-min,\n.irs .irs-max,\n.irs .irs-from,\n.irs .irs-to,\n.irs .irs-single {\n  border-radius: 0; }\n\n/* Input Group ================================= */\n.input-group {\n  width: 100%;\n  margin-bottom: 20px; }\n\n.input-group .form-line {\n  display: inline-block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  position: relative; }\n\n.input-group .form-line:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: 100%;\n  bottom: -2px;\n  transform: scaleX(0);\n  transition: 0.25s ease-in;\n  border-bottom: 2px solid #1f91f3; }\n\n.input-group .form-line + .input-group-addon {\n  padding-right: 0;\n  padding-left: 10px; }\n\n.input-group .help-info {\n  float: right;\n  font-size: 12px;\n  margin-top: 5px;\n  color: #999; }\n\n.input-group label.error {\n  font-size: 12px;\n  display: block;\n  margin-top: 5px;\n  font-weight: normal;\n  color: #F44336; }\n\n.input-group .form-line.error:after {\n  border-bottom: 2px solid #F44336; }\n\n.input-group .form-line.success:after {\n  border-bottom: 2px solid #4CAF50; }\n\n.input-group .form-line.warning:after {\n  border-bottom: 2px solid #FFC107; }\n\n.input-group .form-line.focused:after {\n  transform: scaleX(1); }\n\n.input-group .form-line.focused .form-label {\n  bottom: 25px;\n  left: 0;\n  font-size: 12px; }\n\n.input-group .input-group-addon {\n  border: none;\n  background-color: transparent;\n  padding-left: 0;\n  font-weight: bold; }\n\n.input-group .input-group-addon .material-icons {\n  font-size: 18px;\n  color: #555; }\n\n.input-group input[type=\"text\"],\n.input-group .form-control {\n  border: none;\n  box-shadow: none;\n  padding-left: 0; }\n\n.input-group .form-control:focus {\n  -ms-box-shadow: none !important;\n  box-shadow: none !important; }\n\n.input-group.input-group-sm .input-group-addon i {\n  font-size: 14px; }\n\n.input-group.input-group-sm .form-control {\n  font-size: 12px; }\n\n.input-group.input-group-lg .input-group-addon i {\n  font-size: 26px; }\n\n.input-group.input-group-lg .form-control {\n  font-size: 18px; }\n\n.form-control-label {\n  text-align: right; }\n\n.form-control-label label {\n  margin-top: 8px; }\n\n.form-horizontal .form-group {\n  margin-bottom: 0; }\n\n.form-group {\n  width: 100%;\n  margin-bottom: 25px; }\n\n.form-group .form-control {\n  width: 100%;\n  border: none;\n  box-shadow: none;\n  border-radius: 0;\n  padding-left: 0; }\n\n.form-group .help-info {\n  float: right;\n  font-size: 12px;\n  margin-top: 5px;\n  color: #999; }\n\n.form-group label.error {\n  font-size: 12px;\n  display: block;\n  margin-top: 5px;\n  font-weight: normal;\n  color: #F44336; }\n\n.form-group .form-line {\n  width: 100%;\n  position: relative;\n  border-bottom: 1px solid #ddd; }\n\n.form-group .form-line:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 0;\n  bottom: -1px;\n  transform: scaleX(0);\n  transition: 0.25s ease-in;\n  border-bottom: 2px solid #1f91f3; }\n\n.form-group .form-line .form-label {\n  font-weight: normal;\n  color: #aaa;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  cursor: text;\n  transition: 0.2s; }\n\n.form-group .form-line.error:after {\n  border-bottom: 2px solid #F44336; }\n\n.form-group .form-line.success:after {\n  border-bottom: 2px solid #4CAF50; }\n\n.form-group .form-line.warning:after {\n  border-bottom: 2px solid #FFC107; }\n\n.form-group .form-line.focused:after {\n  transform: scaleX(1); }\n\n.form-group .form-line.focused .form-label {\n  top: -10px;\n  left: 0;\n  font-size: 12px; }\n\n.form-group-sm .form-label {\n  font-size: 12px; }\n\n.form-group-sm .form-line.focused .form-label {\n  bottom: 20px;\n  font-size: 10px; }\n\n.form-group-lg .form-label {\n  font-size: 18px; }\n\n.form-group-lg .form-line.focused .form-label {\n  bottom: 35px;\n  font-size: 12px; }\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: transparent; }\n\n/* Color Picker ================================ */\n.colorpicker {\n  z-index: 1; }\n\n.colorpicker:before, .colorpicker:after {\n  display: none !important; }\n\n/* Dropzone ==================================== */\n.dropzone {\n  border: 2px solid transparent !important;\n  background-color: #eee !important; }\n\n.dropzone .dz-message .drag-icon-cph .material-icons {\n  font-size: 80px;\n  color: #777; }\n\n.dz-drag-hover {\n  border: 2px dashed #888 !important; }\n\n/* Breadcrumbs ================================= */\n.breadcrumb {\n  border-radius: 0;\n  background-color: transparent;\n  font-size: 13px;\n  margin-bottom: 10px; }\n\n.breadcrumb li a {\n  color: #444;\n  text-decoration: none; }\n\n.breadcrumb li a .material-icons {\n  font-size: 18px;\n  position: relative;\n  top: 4px; }\n\n.breadcrumb li .material-icons {\n  font-size: 18px;\n  position: relative;\n  top: 4px; }\n\n.breadcrumb > li + li:before {\n  content: '>\\A0'; }\n\n.breadcrumb-col-red li a {\n  color: #F44336 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-red {\n  background-color: #F44336 !important; }\n\n.breadcrumb-bg-red li {\n  color: #fff !important; }\n\n.breadcrumb-bg-red li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-red li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-red li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-pink li a {\n  color: #E91E63 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-pink {\n  background-color: #E91E63 !important; }\n\n.breadcrumb-bg-pink li {\n  color: #fff !important; }\n\n.breadcrumb-bg-pink li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-pink li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-pink li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-purple li a {\n  color: #9C27B0 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-purple {\n  background-color: #9C27B0 !important; }\n\n.breadcrumb-bg-purple li {\n  color: #fff !important; }\n\n.breadcrumb-bg-purple li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-purple li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-purple li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-deep-purple li a {\n  color: #673AB7 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-deep-purple {\n  background-color: #673AB7 !important; }\n\n.breadcrumb-bg-deep-purple li {\n  color: #fff !important; }\n\n.breadcrumb-bg-deep-purple li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-deep-purple li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-deep-purple li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-indigo li a {\n  color: #3F51B5 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-indigo {\n  background-color: #3F51B5 !important; }\n\n.breadcrumb-bg-indigo li {\n  color: #fff !important; }\n\n.breadcrumb-bg-indigo li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-indigo li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-indigo li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-blue li a {\n  color: #336699 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-blue {\n  background-color: #336699 !important; }\n\n.breadcrumb-bg-blue li {\n  color: #fff !important; }\n\n.breadcrumb-bg-blue li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-blue li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-blue li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-light-blue li a {\n  color: #03A9F4 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-light-blue {\n  background-color: #03A9F4 !important; }\n\n.breadcrumb-bg-light-blue li {\n  color: #fff !important; }\n\n.breadcrumb-bg-light-blue li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-light-blue li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-light-blue li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-cyan li a {\n  color: #00BCD4 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-cyan {\n  background-color: #00BCD4 !important; }\n\n.breadcrumb-bg-cyan li {\n  color: #fff !important; }\n\n.breadcrumb-bg-cyan li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-cyan li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-cyan li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-teal li a {\n  color: #009688 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-teal {\n  background-color: #009688 !important; }\n\n.breadcrumb-bg-teal li {\n  color: #fff !important; }\n\n.breadcrumb-bg-teal li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-teal li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-teal li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-green li a {\n  color: #4CAF50 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-green {\n  background-color: #4CAF50 !important; }\n\n.breadcrumb-bg-green li {\n  color: #fff !important; }\n\n.breadcrumb-bg-green li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-green li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-green li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-light-green li a {\n  color: #8BC34A !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-light-green {\n  background-color: #8BC34A !important; }\n\n.breadcrumb-bg-light-green li {\n  color: #fff !important; }\n\n.breadcrumb-bg-light-green li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-light-green li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-light-green li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-lime li a {\n  color: #CDDC39 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-lime {\n  background-color: #CDDC39 !important; }\n\n.breadcrumb-bg-lime li {\n  color: #fff !important; }\n\n.breadcrumb-bg-lime li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-lime li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-lime li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-yellow li a {\n  color: #ffe821 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-yellow {\n  background-color: #ffe821 !important; }\n\n.breadcrumb-bg-yellow li {\n  color: #fff !important; }\n\n.breadcrumb-bg-yellow li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-yellow li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-yellow li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-amber li a {\n  color: #FFC107 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-amber {\n  background-color: #FFC107 !important; }\n\n.breadcrumb-bg-amber li {\n  color: #fff !important; }\n\n.breadcrumb-bg-amber li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-amber li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-amber li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-orange li a {\n  color: #FF9800 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-orange {\n  background-color: #FF9800 !important; }\n\n.breadcrumb-bg-orange li {\n  color: #fff !important; }\n\n.breadcrumb-bg-orange li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-orange li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-orange li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-deep-orange li a {\n  color: #FF5722 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-deep-orange {\n  background-color: #FF5722 !important; }\n\n.breadcrumb-bg-deep-orange li {\n  color: #fff !important; }\n\n.breadcrumb-bg-deep-orange li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-deep-orange li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-deep-orange li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-brown li a {\n  color: #795548 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-brown {\n  background-color: #795548 !important; }\n\n.breadcrumb-bg-brown li {\n  color: #fff !important; }\n\n.breadcrumb-bg-brown li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-brown li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-brown li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-grey li a {\n  color: #9E9E9E !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-grey {\n  background-color: #9E9E9E !important; }\n\n.breadcrumb-bg-grey li {\n  color: #fff !important; }\n\n.breadcrumb-bg-grey li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-grey li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-grey li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-blue-grey li a {\n  color: #607D8B !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-blue-grey {\n  background-color: #607D8B !important; }\n\n.breadcrumb-bg-blue-grey li {\n  color: #fff !important; }\n\n.breadcrumb-bg-blue-grey li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-blue-grey li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-blue-grey li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-black li a {\n  color: #000000 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-black {\n  background-color: #000000 !important; }\n\n.breadcrumb-bg-black li {\n  color: #fff !important; }\n\n.breadcrumb-bg-black li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-black li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-black li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-white li a {\n  color: #ffffff !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-white {\n  background-color: #ffffff !important; }\n\n.breadcrumb-bg-white li {\n  color: #fff !important; }\n\n.breadcrumb-bg-white li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-white li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-white li + li:before {\n  color: #fff; }\n\n/* Badge | List Group Item ===================== */\n.badge {\n  border-radius: 2px; }\n\n.list-group-item {\n  border-radius: 0;\n  transition: 0.5s; }\n\n.list-group .active {\n  background-color: #336699;\n  border-color: #336699; }\n\n.list-group .active:hover, .list-group .active:focus, .list-group .active:active {\n  background-color: #336699;\n  border-color: #336699; }\n\n.list-group .active .list-group-item-text {\n  color: #dfe9f1;\n  font-size: 13px; }\n\n.list-group .active .list-group-item-text:hover, .list-group .active .list-group-item-text:active, .list-group .active .list-group-item-text:focus {\n  color: #dfe9f1; }\n\n.list-group .list-group-item.active:hover .list-group-item-text, .list-group .list-group-item.active:focus .list-group-item-text, .list-group .list-group-item.active:active .list-group-item-text {\n  color: #dfe9f1; }\n\n.list-group .list-group-item:first-child, .list-group .list-group-item:last-child {\n  border-radius: 0; }\n\n.list-group .list-group-item .list-group-item-heading {\n  font-weight: bold;\n  font-size: 17px; }\n\n.list-group .list-group-item-success {\n  background-color: #2b982b;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-item-success:hover, .list-group .list-group-item-success:focus {\n  background-color: #2b982b;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .list-group-item-info {\n  background-color: #00b0e4;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-item-info:hover, .list-group .list-group-item-info:focus {\n  background-color: #00b0e4;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .list-group-item-warning {\n  background-color: #ff9600;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-item-warning:hover, .list-group .list-group-item-warning:focus {\n  background-color: #ff9600;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .list-group-item-danger {\n  background-color: #fb483a;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-item-danger:hover, .list-group .list-group-item-danger:focus {\n  background-color: #fb483a;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-red {\n  stroke: #F44336; }\n\n.list-group .list-group-bg-red {\n  background-color: #F44336;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-red:hover, .list-group .list-group-bg-red:focus {\n  background-color: #F44336;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-pink {\n  stroke: #E91E63; }\n\n.list-group .list-group-bg-pink {\n  background-color: #E91E63;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-pink:hover, .list-group .list-group-bg-pink:focus {\n  background-color: #E91E63;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-purple {\n  stroke: #9C27B0; }\n\n.list-group .list-group-bg-purple {\n  background-color: #9C27B0;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-purple:hover, .list-group .list-group-bg-purple:focus {\n  background-color: #9C27B0;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-deep-purple {\n  stroke: #673AB7; }\n\n.list-group .list-group-bg-deep-purple {\n  background-color: #673AB7;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-deep-purple:hover, .list-group .list-group-bg-deep-purple:focus {\n  background-color: #673AB7;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-indigo {\n  stroke: #3F51B5; }\n\n.list-group .list-group-bg-indigo {\n  background-color: #3F51B5;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-indigo:hover, .list-group .list-group-bg-indigo:focus {\n  background-color: #3F51B5;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-blue {\n  stroke: #336699; }\n\n.list-group .list-group-bg-blue {\n  background-color: #336699;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-blue:hover, .list-group .list-group-bg-blue:focus {\n  background-color: #336699;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-light-blue {\n  stroke: #03A9F4; }\n\n.list-group .list-group-bg-light-blue {\n  background-color: #03A9F4;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-light-blue:hover, .list-group .list-group-bg-light-blue:focus {\n  background-color: #03A9F4;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-cyan {\n  stroke: #00BCD4; }\n\n.list-group .list-group-bg-cyan {\n  background-color: #00BCD4;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-cyan:hover, .list-group .list-group-bg-cyan:focus {\n  background-color: #00BCD4;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-teal {\n  stroke: #009688; }\n\n.list-group .list-group-bg-teal {\n  background-color: #009688;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-teal:hover, .list-group .list-group-bg-teal:focus {\n  background-color: #009688;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-green {\n  stroke: #4CAF50; }\n\n.list-group .list-group-bg-green {\n  background-color: #4CAF50;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-green:hover, .list-group .list-group-bg-green:focus {\n  background-color: #4CAF50;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-light-green {\n  stroke: #8BC34A; }\n\n.list-group .list-group-bg-light-green {\n  background-color: #8BC34A;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-light-green:hover, .list-group .list-group-bg-light-green:focus {\n  background-color: #8BC34A;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-lime {\n  stroke: #CDDC39; }\n\n.list-group .list-group-bg-lime {\n  background-color: #CDDC39;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-lime:hover, .list-group .list-group-bg-lime:focus {\n  background-color: #CDDC39;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-yellow {\n  stroke: #ffe821; }\n\n.list-group .list-group-bg-yellow {\n  background-color: #ffe821;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-yellow:hover, .list-group .list-group-bg-yellow:focus {\n  background-color: #ffe821;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-amber {\n  stroke: #FFC107; }\n\n.list-group .list-group-bg-amber {\n  background-color: #FFC107;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-amber:hover, .list-group .list-group-bg-amber:focus {\n  background-color: #FFC107;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-orange {\n  stroke: #FF9800; }\n\n.list-group .list-group-bg-orange {\n  background-color: #FF9800;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-orange:hover, .list-group .list-group-bg-orange:focus {\n  background-color: #FF9800;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-deep-orange {\n  stroke: #FF5722; }\n\n.list-group .list-group-bg-deep-orange {\n  background-color: #FF5722;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-deep-orange:hover, .list-group .list-group-bg-deep-orange:focus {\n  background-color: #FF5722;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-brown {\n  stroke: #795548; }\n\n.list-group .list-group-bg-brown {\n  background-color: #795548;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-brown:hover, .list-group .list-group-bg-brown:focus {\n  background-color: #795548;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-grey {\n  stroke: #9E9E9E; }\n\n.list-group .list-group-bg-grey {\n  background-color: #9E9E9E;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-grey:hover, .list-group .list-group-bg-grey:focus {\n  background-color: #9E9E9E;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-blue-grey {\n  stroke: #607D8B; }\n\n.list-group .list-group-bg-blue-grey {\n  background-color: #607D8B;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-blue-grey:hover, .list-group .list-group-bg-blue-grey:focus {\n  background-color: #607D8B;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-black {\n  stroke: #000000; }\n\n.list-group .list-group-bg-black {\n  background-color: #000000;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-black:hover, .list-group .list-group-bg-black:focus {\n  background-color: #000000;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-white {\n  stroke: #ffffff; }\n\n.list-group .list-group-bg-white {\n  background-color: #ffffff;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-white:hover, .list-group .list-group-bg-white:focus {\n  background-color: #ffffff;\n  color: #fff;\n  opacity: 0.8; }\n\n/* Pagination & Pager ========================== */\n.pager li > a {\n  border-radius: 0;\n  border: none;\n  background-color: transparent;\n  color: #222;\n  font-weight: bold; }\n\n.pager li a:focus,\n.pager li a:active {\n  background-color: transparent; }\n\n.pagination .disabled a,\n.pagination .disabled a:hover,\n.pagination .disabled a:focus,\n.pagination .disabled a:active {\n  color: #bbb; }\n\n.pagination li.active a {\n  background-color: #336699; }\n\n.pagination li {\n  border-radius: 0; }\n\n.pagination li a:focus,\n.pagination li a:active {\n  background-color: transparent;\n  color: #555; }\n\n.pagination > li > a {\n  border: none;\n  font-weight: bold;\n  color: #555; }\n\n.pagination > li:first-child > a,\n.pagination > li:last-child > a {\n  width: auto;\n  height: 32px;\n  border-radius: 0; }\n\n.pagination > li:first-child > a .material-icons,\n.pagination > li:last-child > a .material-icons {\n  position: relative;\n  bottom: 2px; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:last-child > a {\n  width: 28px;\n  height: 28px; }\n\n.pagination-sm > li:first-child > a .material-icons,\n.pagination-sm > li:last-child > a .material-icons {\n  position: relative;\n  top: -1px;\n  left: -6px;\n  font-size: 20px; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:last-child > a {\n  width: 44px;\n  height: 44px; }\n\n.pagination-lg > li:first-child > a .material-icons,\n.pagination-lg > li:last-child > a .material-icons {\n  font-size: 30px;\n  position: relative;\n  top: -3px;\n  left: -10px; }\n\n/* Media Object ================================ */\n.media {\n  margin-bottom: 25px; }\n\n.media .media-body {\n  color: #777;\n  font-size: 13px; }\n\n.media .media-body .media-heading {\n  font-size: 16px;\n  font-weight: bold;\n  color: #333; }\n\n/* Form Wizard ================================= */\n.wizard,\n.tabcontrol {\n  display: block;\n  width: 100%;\n  overflow: hidden; }\n\n.wizard a,\n.tabcontrol a {\n  outline: 0; }\n\n.wizard ul,\n.tabcontrol ul {\n  list-style: none !important;\n  padding: 0;\n  margin: 0; }\n\n.wizard ul > li, .tabcontrol ul > li {\n  display: block;\n  padding: 0; }\n\n/* Accessibility */\n.wizard > .steps .current-info,\n.tabcontrol > .steps .current-info,\n.wizard > .content > .title,\n.tabcontrol > .content > .title {\n  position: absolute;\n  left: -999em; }\n\n.wizard > .steps {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.wizard.vertical > .steps {\n  float: left;\n  width: 30%; }\n\n.wizard.vertical > .steps > ul > li {\n  float: none;\n  width: 100%; }\n\n.wizard.vertical > .content {\n  float: left;\n  margin: 0 0 0.5em 0;\n  width: 70%; }\n\n.wizard.vertical > .actions {\n  float: right;\n  width: 100%; }\n\n.wizard.vertical > .actions > ul > li {\n  margin: 0 0 0 1em; }\n\n.wizard > .steps .number {\n  font-size: 1.429em; }\n\n.wizard > .steps > ul > li {\n  width: 25%;\n  float: left; }\n\n.wizard > .actions > ul > li {\n  float: left; }\n\n.wizard > .steps a {\n  display: block;\n  width: auto;\n  margin: 0 0.5em 0.5em;\n  padding: 1em 1em;\n  text-decoration: none;\n  border-radius: 5px; }\n\n.wizard > .steps a:hover, .wizard > .steps a:active {\n  display: block;\n  width: auto;\n  margin: 0 0.5em 0.5em;\n  padding: 1em 1em;\n  text-decoration: none;\n  border-radius: 5px; }\n\n.wizard > .steps .disabled a {\n  background: #eee;\n  color: #aaa;\n  cursor: default; }\n\n.wizard > .steps .disabled a:hover, .wizard > .steps .disabled a:active {\n  background: #eee;\n  color: #aaa;\n  cursor: default; }\n\n.wizard > .steps .current a {\n  background: #2184be;\n  color: #fff;\n  cursor: default; }\n\n.wizard > .steps .current a:hover, .wizard > .steps .current a:active {\n  background: #2184be;\n  color: #fff;\n  cursor: default; }\n\n.wizard > .steps .done a {\n  background: #9dc8e2;\n  color: #fff; }\n\n.wizard > .steps .done a:hover, .wizard > .steps .done a:active {\n  background: #9dc8e2;\n  color: #fff; }\n\n.wizard > .steps .error a {\n  background: #ff3111;\n  color: #fff; }\n\n.wizard > .steps .error a:hover, .wizard > .steps .error a:active {\n  background: #ff3111;\n  color: #fff; }\n\n.wizard > .content {\n  border: 1px solid #ddd;\n  display: block;\n  margin: 0.5em;\n  min-height: 35em;\n  overflow: hidden;\n  position: relative;\n  width: auto; }\n\n.wizard > .actions {\n  position: relative;\n  display: block;\n  text-align: right;\n  width: 100%; }\n\n.wizard > .actions > ul {\n  display: inline-block;\n  text-align: right; }\n\n.wizard > .actions > ul > li {\n  margin: 0 0.5em; }\n\n.wizard > .actions a {\n  background: #009688;\n  color: #fff;\n  display: block;\n  padding: 0.5em 1em;\n  text-decoration: none;\n  border-radius: 0; }\n\n.wizard > .actions a:hover, .wizard > .actions a:active {\n  background: #009688;\n  color: #fff;\n  display: block;\n  padding: 0.5em 1em;\n  text-decoration: none;\n  border-radius: 0; }\n\n.wizard > .actions .disabled a {\n  background: #eee;\n  color: #aaa; }\n\n.wizard > .actions .disabled a:hover, .wizard > .actions .disabled a:active {\n  background: #eee;\n  color: #aaa; }\n\n.tabcontrol > .steps {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.tabcontrol > .steps > ul {\n  position: relative;\n  margin: 6px 0 0 0;\n  top: 1px;\n  z-index: 1; }\n\n.tabcontrol > .steps > ul > li {\n  float: left;\n  margin: 5px 2px 0 0;\n  padding: 1px;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.tabcontrol > .steps > ul > li:hover {\n  background: #edecec;\n  border: 1px solid #bbb;\n  padding: 0; }\n\n.tabcontrol > .steps > ul > li.current {\n  background: #fff;\n  border: 1px solid #bbb;\n  border-bottom: 0 none;\n  padding: 0 0 1px 0;\n  margin-top: 0; }\n\n.tabcontrol > .steps > ul > li.current > a {\n  padding: 15px 30px 10px 30px; }\n\n.tabcontrol > .steps > ul > li > a {\n  color: #5f5f5f;\n  display: inline-block;\n  border: 0 none;\n  margin: 0;\n  padding: 10px 30px;\n  text-decoration: none; }\n\n.tabcontrol > .steps > ul > li > a:hover {\n  text-decoration: none; }\n\n.tabcontrol > .content {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 35em;\n  overflow: hidden;\n  border-top: 1px solid #bbb;\n  padding-top: 20px; }\n\n.tabcontrol > .content > .body {\n  float: left;\n  position: absolute;\n  width: 95%;\n  height: 95%;\n  padding: 2.5%; }\n\n.tabcontrol > .content > .body ul {\n  list-style: disc !important; }\n\n.tabcontrol > .content > .body ul > li {\n  display: list-item; }\n\n.wizard .content {\n  min-height: 245px;\n  border-radius: 0;\n  overflow-y: auto; }\n\n.wizard .content .body {\n  padding: 15px; }\n\n.wizard .steps a {\n  border-radius: 0;\n  transition: 0.5s; }\n\n.wizard .steps a:active, .wizard .steps a:focus, .wizard .steps a:hover {\n  border-radius: 0; }\n\n.wizard .steps .done a {\n  background-color: rgba(0, 150, 136, 0.6); }\n\n.wizard .steps .done a:hover, .wizard .steps .done a:active, .wizard .steps .done a:focus {\n  background-color: rgba(0, 150, 136, 0.5); }\n\n.wizard .steps .error a {\n  background-color: #F44336 !important; }\n\n.wizard .steps .current a {\n  background-color: #009688; }\n\n.wizard .steps .current a:active, .wizard .steps .current a:focus, .wizard .steps .current a:hover {\n  background-color: #009688; }\n\n/* Waves ======================================= */\n.waves-effect.waves-red .waves-ripple {\n  background: rgba(244, 67, 54, 0.5); }\n\n.waves-effect.waves-pink .waves-ripple {\n  background: rgba(233, 30, 99, 0.5); }\n\n.waves-effect.waves-purple .waves-ripple {\n  background: rgba(156, 39, 176, 0.5); }\n\n.waves-effect.waves-deep-purple .waves-ripple {\n  background: rgba(103, 58, 183, 0.5); }\n\n.waves-effect.waves-indigo .waves-ripple {\n  background: rgba(63, 81, 181, 0.5); }\n\n.waves-effect.waves-blue .waves-ripple {\n  background: rgba(33, 150, 243, 0.5); }\n\n.waves-effect.waves-light-blue .waves-ripple {\n  background: rgba(3, 169, 244, 0.5); }\n\n.waves-effect.waves-cyan .waves-ripple {\n  background: rgba(0, 188, 212, 0.5); }\n\n.waves-effect.waves-teal .waves-ripple {\n  background: rgba(0, 150, 136, 0.5); }\n\n.waves-effect.waves-green .waves-ripple {\n  background: rgba(76, 175, 80, 0.5); }\n\n.waves-effect.waves-light-green .waves-ripple {\n  background: rgba(139, 195, 74, 0.5); }\n\n.waves-effect.waves-lime .waves-ripple {\n  background: rgba(205, 220, 57, 0.5); }\n\n.waves-effect.waves-yellow .waves-ripple {\n  background: rgba(255, 232, 33, 0.5); }\n\n.waves-effect.waves-amber .waves-ripple {\n  background: rgba(255, 193, 7, 0.5); }\n\n.waves-effect.waves-orange .waves-ripple {\n  background: rgba(255, 152, 0, 0.5); }\n\n.waves-effect.waves-deep-orange .waves-ripple {\n  background: rgba(255, 87, 34, 0.5); }\n\n.waves-effect.waves-brown .waves-ripple {\n  background: rgba(121, 85, 72, 0.5); }\n\n.waves-effect.waves-grey .waves-ripple {\n  background: rgba(158, 158, 158, 0.5); }\n\n.waves-effect.waves-blue-grey .waves-ripple {\n  background: rgba(96, 125, 139, 0.5); }\n\n.waves-effect.waves-black .waves-ripple {\n  background: rgba(0, 0, 0, 0.5); }\n\n.waves-effect.waves-white .waves-ripple {\n  background: rgba(255, 255, 255, 0.5); }\n\n/* Page Loader ================================= */\n.page-loader-wrapper {\n  z-index: 99999999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: #eee;\n  overflow: hidden;\n  text-align: center; }\n\n.page-loader-wrapper p {\n  font-size: 13px;\n  margin-top: 10px;\n  font-weight: bold;\n  color: #444; }\n\n.page-loader-wrapper .loader {\n  position: relative;\n  top: calc(50% - 30px); }\n\n/* Preloaders ================================== */\n.md-preloader .pl-red {\n  stroke: #F44336; }\n\n.md-preloader .pl-pink {\n  stroke: #E91E63; }\n\n.md-preloader .pl-purple {\n  stroke: #9C27B0; }\n\n.md-preloader .pl-deep-purple {\n  stroke: #673AB7; }\n\n.md-preloader .pl-indigo {\n  stroke: #3F51B5; }\n\n.md-preloader .pl-blue {\n  stroke: #336699; }\n\n.md-preloader .pl-light-blue {\n  stroke: #03A9F4; }\n\n.md-preloader .pl-cyan {\n  stroke: #00BCD4; }\n\n.md-preloader .pl-teal {\n  stroke: #009688; }\n\n.md-preloader .pl-green {\n  stroke: #4CAF50; }\n\n.md-preloader .pl-light-green {\n  stroke: #8BC34A; }\n\n.md-preloader .pl-lime {\n  stroke: #CDDC39; }\n\n.md-preloader .pl-yellow {\n  stroke: #ffe821; }\n\n.md-preloader .pl-amber {\n  stroke: #FFC107; }\n\n.md-preloader .pl-orange {\n  stroke: #FF9800; }\n\n.md-preloader .pl-deep-orange {\n  stroke: #FF5722; }\n\n.md-preloader .pl-brown {\n  stroke: #795548; }\n\n.md-preloader .pl-grey {\n  stroke: #9E9E9E; }\n\n.md-preloader .pl-blue-grey {\n  stroke: #607D8B; }\n\n.md-preloader .pl-black {\n  stroke: #000000; }\n\n.md-preloader .pl-white {\n  stroke: #ffffff; }\n\n.preloader {\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 50px;\n  animation: container-rotate 1568ms linear infinite; }\n\n.preloader.pl-size-xl {\n  width: 75px;\n  height: 75px; }\n\n.preloader.pl-size-l {\n  width: 60px;\n  height: 60px; }\n\n.preloader.pl-size-md {\n  width: 50px;\n  height: 50px; }\n\n.preloader.pl-size-sm {\n  width: 40px;\n  height: 40px; }\n\n.preloader.pl-size-xs {\n  width: 25px;\n  height: 25px; }\n\n.spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-color: #F44336;\n  -ms-opacity: 1;\n  opacity: 1;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.spinner-layer.pl-red {\n  border-color: #F44336; }\n\n.spinner-layer.pl-pink {\n  border-color: #E91E63; }\n\n.spinner-layer.pl-purple {\n  border-color: #9C27B0; }\n\n.spinner-layer.pl-deep-purple {\n  border-color: #673AB7; }\n\n.spinner-layer.pl-indigo {\n  border-color: #3F51B5; }\n\n.spinner-layer.pl-blue {\n  border-color: #336699; }\n\n.spinner-layer.pl-light-blue {\n  border-color: #03A9F4; }\n\n.spinner-layer.pl-cyan {\n  border-color: #00BCD4; }\n\n.spinner-layer.pl-teal {\n  border-color: #009688; }\n\n.spinner-layer.pl-green {\n  border-color: #4CAF50; }\n\n.spinner-layer.pl-light-green {\n  border-color: #8BC34A; }\n\n.spinner-layer.pl-lime {\n  border-color: #CDDC39; }\n\n.spinner-layer.pl-yellow {\n  border-color: #ffe821; }\n\n.spinner-layer.pl-amber {\n  border-color: #FFC107; }\n\n.spinner-layer.pl-orange {\n  border-color: #FF9800; }\n\n.spinner-layer.pl-deep-orange {\n  border-color: #FF5722; }\n\n.spinner-layer.pl-brown {\n  border-color: #795548; }\n\n.spinner-layer.pl-grey {\n  border-color: #9E9E9E; }\n\n.spinner-layer.pl-blue-grey {\n  border-color: #607D8B; }\n\n.spinner-layer.pl-black {\n  border-color: #000000; }\n\n.spinner-layer.pl-white {\n  border-color: #ffffff; }\n\n.right {\n  float: right !important; }\n\n.gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n\n.gap-patch.circle {\n  width: 1000%;\n  left: -450%; }\n\n.circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n\n.circle-clipper .circle {\n  width: 200%;\n  height: 100%;\n  border-width: 3px;\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent !important;\n  border-radius: 50%;\n  animation: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.circle-clipper.left .circle {\n  left: 0;\n  border-right-color: transparent !important;\n  transform: rotate(129deg);\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.circle-clipper.right .circle {\n  left: -100%;\n  border-left-color: transparent !important;\n  transform: rotate(-129deg);\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n@keyframes container-rotate {\n  to {\n    transform: rotate(360deg); } }\n\n@keyframes fill-unfill-rotate {\n  12.5% {\n    transform: rotate(135deg); }\n  25% {\n    transform: rotate(270deg); }\n  37.5% {\n    transform: rotate(405deg); }\n  50% {\n    transform: rotate(540deg); }\n  62.5% {\n    transform: rotate(675deg); }\n  75% {\n    transform: rotate(810deg); }\n  87.5% {\n    transform: rotate(945deg); }\n  to {\n    transform: rotate(1080deg); } }\n\n@keyframes left-spin {\n  from {\n    transform: rotate(130deg); }\n  50% {\n    transform: rotate(-5deg); }\n  to {\n    transform: rotate(130deg); } }\n\n@keyframes right-spin {\n  from {\n    transform: rotate(-130deg); }\n  50% {\n    transform: rotate(5deg); }\n  to {\n    transform: rotate(-130deg); } }\n\n/* Navbars ===================================== */\n.navbar {\n  font-family: \"Roboto Slab Slab\", serif;\n  border-radius: 0;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%; }\n\n.navbar .navbar-brand {\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.navbar .navbar-custom-right-menu {\n  float: right; }\n\n.navbar .navbar-toggle {\n  text-decoration: none;\n  color: #fff;\n  width: 20px;\n  height: 20px;\n  margin-top: -4px;\n  margin-right: 17px; }\n\n.navbar .navbar-toggle:before {\n  content: '\\E8D5';\n  font-family: 'Roboto Slab';\n  font-size: 26px; }\n\n.navbar .navbar-collapse.in {\n  overflow: visible; }\n\n.ls-closed .sidebar {\n  margin-left: -300px; }\n\n.ls-closed section.content {\n  margin-left: 15px; }\n\n.ls-closed .bars:after, .ls-closed .bars:before {\n  font-family: 'Roboto Slab';\n  font-size: 24px;\n  position: absolute;\n  top: 18px;\n  left: 20px;\n  margin-right: 10px;\n  transform: scale(0);\n  transition: all 0.3s; }\n\n.ls-closed .bars:before {\n  content: '\\E5D2';\n  transform: scale(1); }\n\n.ls-closed .bars:after {\n  content: '\\E5C4';\n  transform: scale(0); }\n\n.ls-closed .navbar-brand {\n  margin-left: 30px; }\n\n.overlay-open .bars:before {\n  transform: scale(0); }\n\n.overlay-open .bars:after {\n  transform: scale(1); }\n\n.navbar-header {\n  padding: 10px 7px; }\n\n.navbar-header .bars {\n  float: left;\n  text-decoration: none; }\n\n.navbar-nav > li > a {\n  padding: 7px 7px 2px 7px;\n  margin-top: 17px;\n  margin-left: 5px; }\n\n.navbar-nav .dropdown-menu {\n  margin-top: -40px !important; }\n\n.label-count {\n  position: absolute;\n  top: 2px;\n  right: 6px;\n  font-size: 10px;\n  line-height: 15px;\n  background-color: #000;\n  padding: 0 4px;\n  border-radius: 3px; }\n\n.col-red .navbar .navbar-brand,\n.col-red .navbar .navbar-brand:hover,\n.col-red .navbar .navbar-brand:active,\n.col-red .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-red .navbar .nav > li > a:hover,\n.col-red .navbar .nav > li > a:focus,\n.col-red .navbar .nav .open > a,\n.col-red .navbar .nav .open > a:hover,\n.col-red .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-red .navbar .nav > li > a {\n  color: #fff; }\n\n.col-red .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-red .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-pink .navbar .navbar-brand,\n.col-pink .navbar .navbar-brand:hover,\n.col-pink .navbar .navbar-brand:active,\n.col-pink .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-pink .navbar .nav > li > a:hover,\n.col-pink .navbar .nav > li > a:focus,\n.col-pink .navbar .nav .open > a,\n.col-pink .navbar .nav .open > a:hover,\n.col-pink .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-pink .navbar .nav > li > a {\n  color: #fff; }\n\n.col-pink .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-pink .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-purple .navbar .navbar-brand,\n.col-purple .navbar .navbar-brand:hover,\n.col-purple .navbar .navbar-brand:active,\n.col-purple .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-purple .navbar .nav > li > a:hover,\n.col-purple .navbar .nav > li > a:focus,\n.col-purple .navbar .nav .open > a,\n.col-purple .navbar .nav .open > a:hover,\n.col-purple .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-purple .navbar .nav > li > a {\n  color: #fff; }\n\n.col-purple .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-purple .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-deep-purple .navbar .navbar-brand,\n.col-deep-purple .navbar .navbar-brand:hover,\n.col-deep-purple .navbar .navbar-brand:active,\n.col-deep-purple .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-deep-purple .navbar .nav > li > a:hover,\n.col-deep-purple .navbar .nav > li > a:focus,\n.col-deep-purple .navbar .nav .open > a,\n.col-deep-purple .navbar .nav .open > a:hover,\n.col-deep-purple .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-deep-purple .navbar .nav > li > a {\n  color: #fff; }\n\n.col-deep-purple .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-deep-purple .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-indigo .navbar .navbar-brand,\n.col-indigo .navbar .navbar-brand:hover,\n.col-indigo .navbar .navbar-brand:active,\n.col-indigo .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-indigo .navbar .nav > li > a:hover,\n.col-indigo .navbar .nav > li > a:focus,\n.col-indigo .navbar .nav .open > a,\n.col-indigo .navbar .nav .open > a:hover,\n.col-indigo .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-indigo .navbar .nav > li > a {\n  color: #fff; }\n\n.col-indigo .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-indigo .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-blue .navbar .navbar-brand,\n.col-blue .navbar .navbar-brand:hover,\n.col-blue .navbar .navbar-brand:active,\n.col-blue .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-blue .navbar .nav > li > a:hover,\n.col-blue .navbar .nav > li > a:focus,\n.col-blue .navbar .nav .open > a,\n.col-blue .navbar .nav .open > a:hover,\n.col-blue .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-blue .navbar .nav > li > a {\n  color: #fff; }\n\n.col-blue .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-blue .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-light-blue .navbar .navbar-brand,\n.col-light-blue .navbar .navbar-brand:hover,\n.col-light-blue .navbar .navbar-brand:active,\n.col-light-blue .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-light-blue .navbar .nav > li > a:hover,\n.col-light-blue .navbar .nav > li > a:focus,\n.col-light-blue .navbar .nav .open > a,\n.col-light-blue .navbar .nav .open > a:hover,\n.col-light-blue .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-light-blue .navbar .nav > li > a {\n  color: #fff; }\n\n.col-light-blue .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-light-blue .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-cyan .navbar .navbar-brand,\n.col-cyan .navbar .navbar-brand:hover,\n.col-cyan .navbar .navbar-brand:active,\n.col-cyan .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-cyan .navbar .nav > li > a:hover,\n.col-cyan .navbar .nav > li > a:focus,\n.col-cyan .navbar .nav .open > a,\n.col-cyan .navbar .nav .open > a:hover,\n.col-cyan .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-cyan .navbar .nav > li > a {\n  color: #fff; }\n\n.col-cyan .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-cyan .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-teal .navbar .navbar-brand,\n.col-teal .navbar .navbar-brand:hover,\n.col-teal .navbar .navbar-brand:active,\n.col-teal .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-teal .navbar .nav > li > a:hover,\n.col-teal .navbar .nav > li > a:focus,\n.col-teal .navbar .nav .open > a,\n.col-teal .navbar .nav .open > a:hover,\n.col-teal .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-teal .navbar .nav > li > a {\n  color: #fff; }\n\n.col-teal .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-teal .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-green .navbar .navbar-brand,\n.col-green .navbar .navbar-brand:hover,\n.col-green .navbar .navbar-brand:active,\n.col-green .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-green .navbar .nav > li > a:hover,\n.col-green .navbar .nav > li > a:focus,\n.col-green .navbar .nav .open > a,\n.col-green .navbar .nav .open > a:hover,\n.col-green .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-green .navbar .nav > li > a {\n  color: #fff; }\n\n.col-green .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-green .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-light-green .navbar .navbar-brand,\n.col-light-green .navbar .navbar-brand:hover,\n.col-light-green .navbar .navbar-brand:active,\n.col-light-green .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-light-green .navbar .nav > li > a:hover,\n.col-light-green .navbar .nav > li > a:focus,\n.col-light-green .navbar .nav .open > a,\n.col-light-green .navbar .nav .open > a:hover,\n.col-light-green .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-light-green .navbar .nav > li > a {\n  color: #fff; }\n\n.col-light-green .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-light-green .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-lime .navbar .navbar-brand,\n.col-lime .navbar .navbar-brand:hover,\n.col-lime .navbar .navbar-brand:active,\n.col-lime .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-lime .navbar .nav > li > a:hover,\n.col-lime .navbar .nav > li > a:focus,\n.col-lime .navbar .nav .open > a,\n.col-lime .navbar .nav .open > a:hover,\n.col-lime .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-lime .navbar .nav > li > a {\n  color: #fff; }\n\n.col-lime .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-lime .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-yellow .navbar .navbar-brand,\n.col-yellow .navbar .navbar-brand:hover,\n.col-yellow .navbar .navbar-brand:active,\n.col-yellow .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-yellow .navbar .nav > li > a:hover,\n.col-yellow .navbar .nav > li > a:focus,\n.col-yellow .navbar .nav .open > a,\n.col-yellow .navbar .nav .open > a:hover,\n.col-yellow .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-yellow .navbar .nav > li > a {\n  color: #fff; }\n\n.col-yellow .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-yellow .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-amber .navbar .navbar-brand,\n.col-amber .navbar .navbar-brand:hover,\n.col-amber .navbar .navbar-brand:active,\n.col-amber .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-amber .navbar .nav > li > a:hover,\n.col-amber .navbar .nav > li > a:focus,\n.col-amber .navbar .nav .open > a,\n.col-amber .navbar .nav .open > a:hover,\n.col-amber .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-amber .navbar .nav > li > a {\n  color: #fff; }\n\n.col-amber .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-amber .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-orange .navbar .navbar-brand,\n.col-orange .navbar .navbar-brand:hover,\n.col-orange .navbar .navbar-brand:active,\n.col-orange .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-orange .navbar .nav > li > a:hover,\n.col-orange .navbar .nav > li > a:focus,\n.col-orange .navbar .nav .open > a,\n.col-orange .navbar .nav .open > a:hover,\n.col-orange .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-orange .navbar .nav > li > a {\n  color: #fff; }\n\n.col-orange .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-orange .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-deep-orange .navbar .navbar-brand,\n.col-deep-orange .navbar .navbar-brand:hover,\n.col-deep-orange .navbar .navbar-brand:active,\n.col-deep-orange .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-deep-orange .navbar .nav > li > a:hover,\n.col-deep-orange .navbar .nav > li > a:focus,\n.col-deep-orange .navbar .nav .open > a,\n.col-deep-orange .navbar .nav .open > a:hover,\n.col-deep-orange .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-deep-orange .navbar .nav > li > a {\n  color: #fff; }\n\n.col-deep-orange .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-deep-orange .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-brown .navbar .navbar-brand,\n.col-brown .navbar .navbar-brand:hover,\n.col-brown .navbar .navbar-brand:active,\n.col-brown .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-brown .navbar .nav > li > a:hover,\n.col-brown .navbar .nav > li > a:focus,\n.col-brown .navbar .nav .open > a,\n.col-brown .navbar .nav .open > a:hover,\n.col-brown .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-brown .navbar .nav > li > a {\n  color: #fff; }\n\n.col-brown .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-brown .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-grey .navbar .navbar-brand,\n.col-grey .navbar .navbar-brand:hover,\n.col-grey .navbar .navbar-brand:active,\n.col-grey .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-grey .navbar .nav > li > a:hover,\n.col-grey .navbar .nav > li > a:focus,\n.col-grey .navbar .nav .open > a,\n.col-grey .navbar .nav .open > a:hover,\n.col-grey .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-grey .navbar .nav > li > a {\n  color: #fff; }\n\n.col-grey .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-grey .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-blue-grey .navbar .navbar-brand,\n.col-blue-grey .navbar .navbar-brand:hover,\n.col-blue-grey .navbar .navbar-brand:active,\n.col-blue-grey .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-blue-grey .navbar .nav > li > a:hover,\n.col-blue-grey .navbar .nav > li > a:focus,\n.col-blue-grey .navbar .nav .open > a,\n.col-blue-grey .navbar .nav .open > a:hover,\n.col-blue-grey .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-blue-grey .navbar .nav > li > a {\n  color: #fff; }\n\n.col-blue-grey .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-blue-grey .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-black .navbar .navbar-brand,\n.col-black .navbar .navbar-brand:hover,\n.col-black .navbar .navbar-brand:active,\n.col-black .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-black .navbar .nav > li > a:hover,\n.col-black .navbar .nav > li > a:focus,\n.col-black .navbar .nav .open > a,\n.col-black .navbar .nav .open > a:hover,\n.col-black .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-black .navbar .nav > li > a {\n  color: #fff; }\n\n.col-black .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-black .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-white .navbar .navbar-brand,\n.col-white .navbar .navbar-brand:hover,\n.col-white .navbar .navbar-brand:active,\n.col-white .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-white .navbar .nav > li > a:hover,\n.col-white .navbar .nav > li > a:focus,\n.col-white .navbar .nav .open > a,\n.col-white .navbar .nav .open > a:hover,\n.col-white .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-white .navbar .nav > li > a {\n  color: #fff; }\n\n.col-white .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-white .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n/* Dropdown Menu =============================== */\n.dropdown-menu {\n  border-radius: 0;\n  margin-top: -35px !important;\n  box-shadow: none;\n  border: none; }\n\n.dropdown-menu .divider {\n  margin: 5px 0; }\n\n.dropdown-menu .header {\n  font-size: 13px;\n  font-weight: bold;\n  min-width: 270px;\n  border-bottom: 1px solid #eee;\n  text-align: center;\n  padding: 4px 0 6px 0; }\n\n.dropdown-menu ul.menu {\n  padding-left: 0; }\n\n.dropdown-menu ul.menu.tasks h4 {\n  color: #333;\n  font-size: 13px;\n  margin: 0 0 8px 0; }\n\n.dropdown-menu ul.menu.tasks h4 small {\n  float: right;\n  margin-top: 6px; }\n\n.dropdown-menu ul.menu.tasks .progress {\n  height: 7px;\n  margin-bottom: 7px; }\n\n.dropdown-menu ul.menu .icon-circle {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: #fff;\n  text-align: center;\n  display: inline-block; }\n\n.dropdown-menu ul.menu .icon-circle i {\n  font-size: 18px;\n  line-height: 36px; }\n\n.dropdown-menu ul.menu li {\n  border-bottom: 1px solid #eee; }\n\n.dropdown-menu ul.menu li:last-child {\n  border-bottom: none; }\n\n.dropdown-menu ul.menu li a {\n  padding: 7px 11px;\n  text-decoration: none;\n  transition: 0.5s; }\n\n.dropdown-menu ul.menu li a:hover {\n  background-color: #e9e9e9; }\n\n.dropdown-menu ul.menu .menu-info {\n  display: inline-block;\n  position: relative;\n  top: 3px;\n  left: 5px; }\n\n.dropdown-menu ul.menu .menu-info h4 {\n  margin: 0;\n  font-size: 13px;\n  color: #333; }\n\n.dropdown-menu ul.menu .menu-info p {\n  margin: 0;\n  font-size: 11px;\n  color: #aaa; }\n\n.dropdown-menu ul.menu .menu-info p .material-icons {\n  font-size: 13px;\n  color: #aaa;\n  position: relative;\n  top: 2px; }\n\n.dropdown-menu .footer a {\n  text-align: center;\n  border-top: 1px solid #eee;\n  padding: 5px 0 5px 0;\n  font-size: 12px;\n  margin-bottom: -5px; }\n\n.dropdown-menu .footer a:hover {\n  background-color: transparent; }\n\n.dropdown-menu > li > a {\n  padding: 7px 18px;\n  color: #666;\n  transition: all 0.5s;\n  font-size: 14px;\n  line-height: 25px; }\n\n.dropdown-menu > li > a:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.dropdown-menu > li > a i.material-icons {\n  float: left;\n  margin-right: 7px;\n  margin-top: 2px;\n  font-size: 20px; }\n\n.dropdown-animated {\n  animation-duration: .3s !important; }\n\n/* Left Sidebar & Overlay ====================== */\n.overlay {\n  position: fixed;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: none;\n  z-index: 10; }\n\n.overlay-open .sidebar {\n  margin-left: 0;\n  z-index: 99999999; }\n\n.sidebar {\n  transition: all 0.5s;\n  font-family: \"Roboto Slab\", sans-serif;\n  background: rgba(255, 255, 255, 0.3);\n  width: 300px;\n  overflow: hidden;\n  display: inline-block;\n  height: calc(100vh - 70px);\n  position: fixed;\n  top: 70px;\n  left: 0;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  z-index: 11 !important; }\n\n.sidebar .legal {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  border-top: 1px solid #eee;\n  padding: 15px;\n  overflow: hidden; }\n\n.sidebar .legal .copyright {\n  font-size: 13px;\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.sidebar .legal .copyright a {\n  font-weight: bold;\n  text-decoration: none; }\n\n.sidebar .legal .version {\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-top: 5px;\n  font-size: 13px; }\n\n.sidebar .user-info {\n  padding: 13px 15px 12px 15px;\n  white-space: nowrap;\n  position: relative;\n  border-bottom: 1px solid #e9e9e9;\n  background-color: #fff;\n  height: 135px; }\n\n.sidebar .user-info .image {\n  margin-right: 12px;\n  display: inline-block; }\n\n.sidebar .user-info .image img {\n  border-radius: 50%;\n  vertical-align: bottom !important; }\n\n.sidebar .user-info .info-container {\n  cursor: default;\n  display: block;\n  position: relative;\n  top: 25px; }\n\n.sidebar .user-info .info-container .name {\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 14px;\n  max-width: 200px;\n  color: #336699; }\n\n.sidebar .user-info .info-container .email {\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 12px;\n  max-width: 200px;\n  color: #336699; }\n\n.sidebar .user-info .info-container .user-helper-dropdown {\n  position: absolute;\n  right: -3px;\n  bottom: -12px;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  cursor: pointer;\n  color: #336699; }\n\n.sidebar .menu {\n  position: relative;\n  overflow-y: auto;\n  height: 90vh; }\n\n.sidebar .menu .list {\n  list-style: none;\n  padding-left: 0; }\n\n.sidebar .menu .list li.active > :first-child span {\n  font-weight: bold; }\n\n.sidebar .menu .list .header {\n  background: rgba(255, 255, 255, 0.3);\n  font-size: 12px;\n  font-weight: 600;\n  padding: 8px 16px; }\n\n.sidebar .menu .list i.material-icons {\n  margin-top: 4px; }\n\n.sidebar .menu .list .menu-toggle:after, .sidebar .menu .list .menu-toggle:before {\n  position: absolute;\n  top: calc(50% - 14px);\n  right: 17px;\n  font-size: 19px;\n  transform: scale(0);\n  transition: all 0.3s; }\n\n.sidebar .menu .list .menu-toggle:before {\n  content: '+';\n  transform: scale(1); }\n\n.sidebar .menu .list .menu-toggle:after {\n  content: '\\2013';\n  transform: scale(0); }\n\n.sidebar .menu .list .menu-toggle.toggled:before {\n  transform: scale(0); }\n\n.sidebar .menu .list .menu-toggle.toggled:after {\n  transform: scale(1); }\n\n.sidebar .menu .list a {\n  color: #747474;\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n  width: 100%;\n  padding: 10px 13px; }\n\n.sidebar .menu .list a:hover, .sidebar .menu .list a:active, .sidebar .menu .list a:focus {\n  text-decoration: none !important; }\n\n.sidebar .menu .list a small {\n  position: absolute;\n  top: calc(50% - 7.5px);\n  right: 15px; }\n\n.sidebar .menu .list a span {\n  margin: 7px 0 7px 12px;\n  color: #333;\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden; }\n\n.sidebar .menu .list .ml-menu {\n  list-style: none;\n  display: none;\n  padding-left: 0; }\n\n.sidebar .menu .list .ml-menu span {\n  font-weight: normal;\n  font-size: 14px;\n  margin: 3px 0 1px 6px; }\n\n.sidebar .menu .list .ml-menu li a {\n  padding-left: 55px;\n  padding-top: 7px;\n  padding-bottom: 7px; }\n\n.sidebar .menu .list .ml-menu li.active a.toggled:not(.menu-toggle) {\n  font-weight: 600;\n  margin-left: 5px; }\n\n.sidebar .menu .list .ml-menu li.active a.toggled:not(.menu-toggle):before {\n  content: '\\E315';\n  font-family: 'PT Sans';\n  position: relative;\n  font-size: 21px;\n  height: 20px;\n  top: -5px;\n  right: 0px; }\n\n.sidebar .menu .list .ml-menu li .ml-menu li a {\n  padding-left: 80px; }\n\n.sidebar .menu .list .ml-menu li .ml-menu .ml-menu li a {\n  padding-left: 95px; }\n\n.right-sidebar {\n  width: 280px;\n  height: calc(100vh - 70px);\n  position: fixed;\n  right: -300px;\n  top: 70px;\n  background: #fdfdfd;\n  z-index: 11 !important;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  overflow: hidden;\n  transition: 0.5s; }\n\n.right-sidebar.open {\n  right: 0; }\n\n.right-sidebar .nav-tabs {\n  font-weight: 600;\n  font-size: 13px;\n  width: 100%;\n  margin-left: 2px; }\n\n.right-sidebar .nav-tabs li {\n  text-align: center; }\n\n.right-sidebar .nav-tabs li > a {\n  margin-right: 0; }\n\n.right-sidebar .nav-tabs li:first-child {\n  width: 45%; }\n\n.right-sidebar .nav-tabs li:last-child {\n  width: 55%; }\n\n/* Bootstrap Notify ============================ */\n.bootstrap-notify-container {\n  max-width: 320px;\n  text-align: center; }\n\n/* Jquery Nestable ============================= */\n.dd-handle {\n  background-color: #f9f9f9 !important; }\n\n.dd-handle:hover {\n  color: #336699; }\n\n.nestable-dark-theme .dd-handle {\n  background: #ccc !important;\n  border: 1px solid #999 !important; }\n\n.dd3-handle {\n  background: #999 !important; }\n\n.dd3-content:hover {\n  color: #336699; }\n\n/* Login Page ================================== */\n.login-page {\n  background-color: #00BCD4;\n  padding-left: 0;\n  max-width: 360px;\n  margin: 5% auto;\n  overflow-x: hidden; }\n\n.login-page .login-box .msg {\n  color: #555;\n  margin-bottom: 30px;\n  text-align: center; }\n\n.login-page .login-box a {\n  font-size: 14px;\n  text-decoration: none;\n  color: #00BCD4; }\n\n.login-page .login-box .logo {\n  margin-bottom: 20px; }\n\n.login-page .login-box .logo a {\n  font-size: 36px;\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #fff; }\n\n.login-page .login-box .logo small {\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  margin-top: -5px; }\n\n/* Sign Up Page ================================ */\n.signup-page {\n  background-color: #00BCD4;\n  padding-left: 0;\n  max-width: 360px;\n  margin: 5% auto;\n  overflow-x: hidden; }\n\n.signup-page .signup-box .msg {\n  color: #555;\n  margin-bottom: 30px;\n  text-align: center; }\n\n.signup-page .signup-box a {\n  font-size: 14px;\n  text-decoration: none;\n  color: #00BCD4; }\n\n.signup-page .signup-box .logo {\n  margin-bottom: 20px; }\n\n.signup-page .signup-box .logo a {\n  font-size: 36px;\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #fff; }\n\n.signup-page .signup-box .logo small {\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  margin-top: -5px; }\n\n/* Forgot Password Page ======================== */\n.fp-page {\n  background-color: #00BCD4;\n  padding-left: 0;\n  max-width: 360px;\n  margin: 5% auto;\n  overflow-x: hidden; }\n\n.fp-page .fp-box .msg {\n  color: #555;\n  margin-bottom: 30px;\n  text-align: center; }\n\n.fp-page .fp-box a {\n  font-size: 14px;\n  text-decoration: none;\n  color: #00BCD4; }\n\n.fp-page .fp-box .logo {\n  margin-bottom: 20px; }\n\n.fp-page .fp-box .logo a {\n  font-size: 36px;\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #fff; }\n\n.fp-page .fp-box .logo small {\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  margin-top: -5px; }\n\n/* 404 Not Found Page ========================== */\n.four-zero-four {\n  width: 100%;\n  text-align: center;\n  margin: 5% auto; }\n\n.four-zero-four .four-zero-four-container .error-code {\n  font-size: 160px; }\n\n.four-zero-four .four-zero-four-container .error-message {\n  font-size: 26px;\n  color: #333;\n  font-weight: bold;\n  margin-top: -40px; }\n\n.four-zero-four .four-zero-four-container .button-place {\n  margin-top: 32px; }\n\n/* 500 Server Error Page ======================= */\n.five-zero-zero {\n  width: 100%;\n  text-align: center;\n  margin: 5% auto; }\n\n.five-zero-zero .five-zero-zero-container .error-code {\n  font-size: 160px; }\n\n.five-zero-zero .five-zero-zero-container .error-message {\n  font-size: 27px;\n  color: #333;\n  font-weight: bold;\n  margin-top: -40px; }\n\n.five-zero-zero .five-zero-zero-container .button-place {\n  margin-top: 32px; }\n\n/* Maps ======================================== */\n/* Google Maps */\n.gmap {\n  width: 100%;\n  height: 400px; }\n\n/* jVector Map */\n.jvector-map {\n  width: 100%;\n  height: 600px; }\n\n/* Charts ====================================== */\n/* Morris */\n.morris-hover.morris-default-style {\n  border-radius: 0; }\n\n/* Flot */\n.flot-chart {\n  width: 100%;\n  height: 320px; }\n\n.panel-switch-btn {\n  position: relative;\n  right: 20px;\n  z-index: 9; }\n\n.panel-switch-btn label {\n  font-weight: bold !important; }\n\n.legendLabel {\n  width: 85px !important;\n  position: relative;\n  left: 3px; }\n\n#multiple_axis_chart .legendLabel {\n  width: 160px !important; }\n\n/* Sparkline */\n.sparkline {\n  text-align: center; }\n\n/* Searchbar =================================== */\n.search-bar {\n  position: fixed;\n  top: -100px;\n  left: 0;\n  z-index: 9999999;\n  width: 100%;\n  transition: 0.25s; }\n\n.search-bar.open {\n  top: 0; }\n\n.search-bar .search-icon {\n  position: absolute;\n  top: 20px;\n  left: 14px; }\n\n.search-bar .search-icon .material-icons {\n  font-size: 32px;\n  color: #999; }\n\n.search-bar .close-search {\n  position: absolute;\n  cursor: pointer;\n  font-size: 30px;\n  top: 16px;\n  right: 18px; }\n\n.search-bar .close-search .material-icons {\n  color: #999;\n  opacity: 1;\n  transition: 0.5s; }\n\n.search-bar .close-search .material-icons:hover {\n  opacity: .5; }\n\n.search-bar input[type=\"text\"] {\n  width: 100%;\n  font-size: 16px;\n  padding: 25px 60px 23px 56px;\n  border: none; }\n\n/* Jquery DataTable ============================ */\n.dataTables_wrapper {\n  position: relative; }\n\n.dataTables_wrapper select {\n  border: none;\n  border-bottom: 1px solid #ddd;\n  border-radius: 0;\n  -ms-box-shadow: none;\n  box-shadow: none; }\n\n.dataTables_wrapper select:active, .dataTables_wrapper select:focus {\n  -ms-box-shadow: none;\n  box-shadow: none; }\n\n.dataTables_wrapper input[type=\"search\"] {\n  border-radius: 0;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  font-size: 12px;\n  border-bottom: 1px solid #ddd; }\n\n.dataTables_wrapper input[type=\"search\"]:focus, .dataTables_wrapper input[type=\"search\"]:active {\n  border-bottom: 2px solid #1f91f3; }\n\n.dataTables_wrapper .dt-buttons {\n  float: left; }\n\n.dataTables_wrapper .dt-buttons a.dt-button {\n  background-color: #607D8B;\n  color: #fff;\n  padding: 7px 12px;\n  margin-right: 5px;\n  text-decoration: none;\n  box-shadow: none;\n  border-radius: 2px;\n  border: none;\n  font-size: 13px;\n  outline: none; }\n\n.dataTables_wrapper .dt-buttons a.dt-button:active {\n  opacity: 0.8; }\n\n.dt-button-info {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 400px;\n  text-align: center;\n  background-color: #fff;\n  border: 2px solid #999;\n  border-radius: 3px;\n  margin-top: -100px;\n  margin-left: -200px;\n  z-index: 21; }\n\n.dt-button-info h2 {\n  color: #777; }\n\n.dt-button-info div {\n  color: #777;\n  margin-bottom: 20px; }\n\nspan.centerImage {\n  text-align: center; }\n\n/* Light Gallery ================================ */\n.lg-outer .lg-thumb-item,\n.lg-outer .lg-toogle-thumb {\n  border-radius: 0 !important; }\n\n/* For Internet Explorer 10 ===================== */\nhtml.ie10 .sidebar .menu .list li {\n  line-height: 30px; }\n\nhtml.ie10 .sidebar .menu .list .ml-menu li.active a:not(.menu-toggle).toggled:before {\n  top: 6px !important;\n  line-height: 20px !important; }\n\nhtml.ie10 .sidebar .user-info .info-container {\n  top: 15px; }\n\nhtml.ie10 .search-bar input[type=\"text\"] {\n  padding: 26px 60px 26px 56px; }\n\nhtml.ie10 .dropdown-menu ul.menu li a {\n  margin-top: -22px; }\n\nhtml.ie10 .bs-searchbox .form-control {\n  width: 90%; }\n\n/* For Internet Explorer 11 ===================== */\nhtml.ie11 .sidebar .menu .list .ml-menu li.active a:not(.menu-toggle).toggled:before {\n  top: 6px !important;\n  line-height: 20px !important; }\n\nhtml.ie11 .sidebar .user-info .info-container {\n  top: 15px; }\n\nhtml.ie11 .search-bar input[type=\"text\"] {\n  padding: 26px 60px 26px 56px; }\n\nhtml.ie11 .dropdown-menu ul.menu li a {\n  margin-top: -22px; }\n\nhtml.ie11 .bs-searchbox .form-control {\n  width: 90%; }\n\n.navbar {\n  font-family: \"Roboto Slab\", sans-serif;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  background-color: transparent;\n  border-radius: 0;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%; }\n\n.navbar .navbar-brand {\n  color: #336699;\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.navbar-brand {\n  color: #336699; }\n\n.navbar-brand:hover {\n  color: #336699; }\n\n.navbar-brand:active {\n  color: #336699; }\n\n.navbar-brand:focus {\n  color: #336699; }\n\n.navbar .navbar-custom-right-menu {\n  float: right; }\n\n.navbar .navbar-toggle {\n  text-decoration: none;\n  color: #fff;\n  width: 20px;\n  height: 20px;\n  margin-top: -4px;\n  margin-right: 17px; }\n\n.navbar .navbar-toggle:before {\n  content: '\\E8D5';\n  font-family: 'Roboto Slab';\n  font-size: 26px; }\n\n.navbar .navbar-collapse.in {\n  overflow: visible; }\n\n#bg {\n  position: fixed;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  z-index: -1; }\n\n#bg img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  min-width: 50%;\n  min-height: 50%; }\n\n.ls-closed .sidebar {\n  margin-left: -300px; }\n\n.ls-closed section.content {\n  margin-left: 15px; }\n\n.ls-closed .bars:after,\n.ls-closed .bars:before {\n  font-family: 'Roboto Slab';\n  font-size: 24px;\n  position: absolute;\n  top: 18px;\n  left: 20px;\n  margin-right: 10px;\n  transform: scale(0);\n  transition: all 0.3s; }\n\n.ls-closed .bars:before {\n  content: '\\E5D2';\n  transform: scale(1); }\n\n.ls-closed .bars:after {\n  content: '\\E5C4';\n  transform: scale(0); }\n\n.ls-closed .navbar-brand {\n  margin-left: 30px; }\n\n.overlay-open .bars:before {\n  transform: scale(0); }\n\n.overlay-open .bars:after {\n  transform: scale(1); }\n\n.navbar-header {\n  padding: 10px 7px; }\n\n.navbar-header .bars {\n  float: left;\n  text-decoration: none; }\n\n.navbar-nav > li > a {\n  padding: 7px 7px 2px 7px;\n  margin-top: 17px;\n  margin-left: 5px; }\n\n.navbar-nav .dropdown-menu {\n  margin-top: -40px !important; }\n\n.label-count {\n  position: absolute;\n  top: 2px;\n  right: 6px;\n  font-size: 10px;\n  line-height: 15px;\n  background-color: #000;\n  padding: 0 4px;\n  border-radius: 3px; }\n\n.theme-blue .nav > li > a {\n  color: transparent; }\n\n.theme-blue .nav > li > a:hover {\n  background-color: transparent; }\n\n.theme-blue .nav > li > a:focus {\n  background-color: transparent; }\n\n.nav .open > a {\n  background-color: transparent; }\n\n.nav .open > a:hover {\n  background-color: transparent; }\n\n.nav .open > a:focus {\n  background-color: transparent; }\n\n.bars {\n  color: #fff; }\n\n.sidebar .menu .list li.active {\n  background-color: transparent; }\n\n.theme-blue .sidebar .menu .list li.active > :first-child i,\n.theme-blue .sidebar .menu .list li.active > :first-child span {\n  color: #336699; }\n\n.sidebar .menu .list .toggled {\n  background-color: transparent; }\n\n.sidebar .menu .list .ml-menu {\n  background-color: transparent; }\n\n.sidebar .legal {\n  background-color: transparent; }\n\n.theme-blue .sidebar .legal .copyright a {\n  color: #336699 !important; }\n\n.col-red .navbar .navbar-brand,\n.col-red .navbar .navbar-brand:hover,\n.col-red .navbar .navbar-brand:active,\n.col-red .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-red .navbar .nav > li > a:hover,\n.col-red .navbar .nav > li > a:focus,\n.col-red .navbar .nav .open > a,\n.col-red .navbar .nav .open > a:hover,\n.col-red .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-red .navbar .nav > li > a {\n  color: #fff; }\n\n.col-red .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-red .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-pink .navbar .navbar-brand,\n.col-pink .navbar .navbar-brand:hover,\n.col-pink .navbar .navbar-brand:active,\n.col-pink .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-pink .navbar .nav > li > a:hover,\n.col-pink .navbar .nav > li > a:focus,\n.col-pink .navbar .nav .open > a,\n.col-pink .navbar .nav .open > a:hover,\n.col-pink .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-pink .navbar .nav > li > a {\n  color: #fff; }\n\n.col-pink .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-pink .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-purple .navbar .navbar-brand,\n.col-purple .navbar .navbar-brand:hover,\n.col-purple .navbar .navbar-brand:active,\n.col-purple .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-purple .navbar .nav > li > a:hover,\n.col-purple .navbar .nav > li > a:focus,\n.col-purple .navbar .nav .open > a,\n.col-purple .navbar .nav .open > a:hover,\n.col-purple .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-purple .navbar .nav > li > a {\n  color: #fff; }\n\n.col-purple .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-purple .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-deep-purple .navbar .navbar-brand,\n.col-deep-purple .navbar .navbar-brand:hover,\n.col-deep-purple .navbar .navbar-brand:active,\n.col-deep-purple .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-deep-purple .navbar .nav > li > a:hover,\n.col-deep-purple .navbar .nav > li > a:focus,\n.col-deep-purple .navbar .nav .open > a,\n.col-deep-purple .navbar .nav .open > a:hover,\n.col-deep-purple .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-deep-purple .navbar .nav > li > a {\n  color: #fff; }\n\n.col-deep-purple .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-deep-purple .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-indigo .navbar .navbar-brand,\n.col-indigo .navbar .navbar-brand:hover,\n.col-indigo .navbar .navbar-brand:active,\n.col-indigo .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-indigo .navbar .nav > li > a:hover,\n.col-indigo .navbar .nav > li > a:focus,\n.col-indigo .navbar .nav .open > a,\n.col-indigo .navbar .nav .open > a:hover,\n.col-indigo .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-indigo .navbar .nav > li > a {\n  color: #fff; }\n\n.col-indigo .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-indigo .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-blue .navbar .navbar-brand,\n.col-blue .navbar .navbar-brand:hover,\n.col-blue .navbar .navbar-brand:active,\n.col-blue .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-blue .navbar .nav > li > a:hover,\n.col-blue .navbar .nav > li > a:focus,\n.col-blue .navbar .nav .open > a,\n.col-blue .navbar .nav .open > a:hover,\n.col-blue .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-blue .navbar .nav > li > a {\n  color: #fff; }\n\n.col-blue .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-blue .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-light-blue .navbar .navbar-brand,\n.col-light-blue .navbar .navbar-brand:hover,\n.col-light-blue .navbar .navbar-brand:active,\n.col-light-blue .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-light-blue .navbar .nav > li > a:hover,\n.col-light-blue .navbar .nav > li > a:focus,\n.col-light-blue .navbar .nav .open > a,\n.col-light-blue .navbar .nav .open > a:hover,\n.col-light-blue .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-light-blue .navbar .nav > li > a {\n  color: #fff; }\n\n.col-light-blue .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-light-blue .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-cyan .navbar .navbar-brand,\n.col-cyan .navbar .navbar-brand:hover,\n.col-cyan .navbar .navbar-brand:active,\n.col-cyan .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-cyan .navbar .nav > li > a:hover,\n.col-cyan .navbar .nav > li > a:focus,\n.col-cyan .navbar .nav .open > a,\n.col-cyan .navbar .nav .open > a:hover,\n.col-cyan .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-cyan .navbar .nav > li > a {\n  color: #fff; }\n\n.col-cyan .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-cyan .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-teal .navbar .navbar-brand,\n.col-teal .navbar .navbar-brand:hover,\n.col-teal .navbar .navbar-brand:active,\n.col-teal .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-teal .navbar .nav > li > a:hover,\n.col-teal .navbar .nav > li > a:focus,\n.col-teal .navbar .nav .open > a,\n.col-teal .navbar .nav .open > a:hover,\n.col-teal .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-teal .navbar .nav > li > a {\n  color: #fff; }\n\n.col-teal .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-teal .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-green .navbar .navbar-brand,\n.col-green .navbar .navbar-brand:hover,\n.col-green .navbar .navbar-brand:active,\n.col-green .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-green .navbar .nav > li > a:hover,\n.col-green .navbar .nav > li > a:focus,\n.col-green .navbar .nav .open > a,\n.col-green .navbar .nav .open > a:hover,\n.col-green .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-green .navbar .nav > li > a {\n  color: #fff; }\n\n.col-green .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-green .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-light-green .navbar .navbar-brand,\n.col-light-green .navbar .navbar-brand:hover,\n.col-light-green .navbar .navbar-brand:active,\n.col-light-green .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-light-green .navbar .nav > li > a:hover,\n.col-light-green .navbar .nav > li > a:focus,\n.col-light-green .navbar .nav .open > a,\n.col-light-green .navbar .nav .open > a:hover,\n.col-light-green .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-light-green .navbar .nav > li > a {\n  color: #fff; }\n\n.col-light-green .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-light-green .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-lime .navbar .navbar-brand,\n.col-lime .navbar .navbar-brand:hover,\n.col-lime .navbar .navbar-brand:active,\n.col-lime .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-lime .navbar .nav > li > a:hover,\n.col-lime .navbar .nav > li > a:focus,\n.col-lime .navbar .nav .open > a,\n.col-lime .navbar .nav .open > a:hover,\n.col-lime .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-lime .navbar .nav > li > a {\n  color: #fff; }\n\n.col-lime .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-lime .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-yellow .navbar .navbar-brand,\n.col-yellow .navbar .navbar-brand:hover,\n.col-yellow .navbar .navbar-brand:active,\n.col-yellow .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-yellow .navbar .nav > li > a:hover,\n.col-yellow .navbar .nav > li > a:focus,\n.col-yellow .navbar .nav .open > a,\n.col-yellow .navbar .nav .open > a:hover,\n.col-yellow .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-yellow .navbar .nav > li > a {\n  color: #fff; }\n\n.col-yellow .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-yellow .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-amber .navbar .navbar-brand,\n.col-amber .navbar .navbar-brand:hover,\n.col-amber .navbar .navbar-brand:active,\n.col-amber .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-amber .navbar .nav > li > a:hover,\n.col-amber .navbar .nav > li > a:focus,\n.col-amber .navbar .nav .open > a,\n.col-amber .navbar .nav .open > a:hover,\n.col-amber .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-amber .navbar .nav > li > a {\n  color: #fff; }\n\n.col-amber .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-amber .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-orange .navbar .navbar-brand,\n.col-orange .navbar .navbar-brand:hover,\n.col-orange .navbar .navbar-brand:active,\n.col-orange .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-orange .navbar .nav > li > a:hover,\n.col-orange .navbar .nav > li > a:focus,\n.col-orange .navbar .nav .open > a,\n.col-orange .navbar .nav .open > a:hover,\n.col-orange .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-orange .navbar .nav > li > a {\n  color: #fff; }\n\n.col-orange .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-orange .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-deep-orange .navbar .navbar-brand,\n.col-deep-orange .navbar .navbar-brand:hover,\n.col-deep-orange .navbar .navbar-brand:active,\n.col-deep-orange .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-deep-orange .navbar .nav > li > a:hover,\n.col-deep-orange .navbar .nav > li > a:focus,\n.col-deep-orange .navbar .nav .open > a,\n.col-deep-orange .navbar .nav .open > a:hover,\n.col-deep-orange .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-deep-orange .navbar .nav > li > a {\n  color: #fff; }\n\n.col-deep-orange .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-deep-orange .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-brown .navbar .navbar-brand,\n.col-brown .navbar .navbar-brand:hover,\n.col-brown .navbar .navbar-brand:active,\n.col-brown .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-brown .navbar .nav > li > a:hover,\n.col-brown .navbar .nav > li > a:focus,\n.col-brown .navbar .nav .open > a,\n.col-brown .navbar .nav .open > a:hover,\n.col-brown .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-brown .navbar .nav > li > a {\n  color: #fff; }\n\n.col-brown .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-brown .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-grey .navbar .navbar-brand,\n.col-grey .navbar .navbar-brand:hover,\n.col-grey .navbar .navbar-brand:active,\n.col-grey .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-grey .navbar .nav > li > a:hover,\n.col-grey .navbar .nav > li > a:focus,\n.col-grey .navbar .nav .open > a,\n.col-grey .navbar .nav .open > a:hover,\n.col-grey .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-grey .navbar .nav > li > a {\n  color: #fff; }\n\n.col-grey .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-grey .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-blue-grey .navbar .navbar-brand,\n.col-blue-grey .navbar .navbar-brand:hover,\n.col-blue-grey .navbar .navbar-brand:active,\n.col-blue-grey .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-blue-grey .navbar .nav > li > a:hover,\n.col-blue-grey .navbar .nav > li > a:focus,\n.col-blue-grey .navbar .nav .open > a,\n.col-blue-grey .navbar .nav .open > a:hover,\n.col-blue-grey .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-blue-grey .navbar .nav > li > a {\n  color: #fff; }\n\n.col-blue-grey .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-blue-grey .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-black .navbar .navbar-brand,\n.col-black .navbar .navbar-brand:hover,\n.col-black .navbar .navbar-brand:active,\n.col-black .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-black .navbar .nav > li > a:hover,\n.col-black .navbar .nav > li > a:focus,\n.col-black .navbar .nav .open > a,\n.col-black .navbar .nav .open > a:hover,\n.col-black .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-black .navbar .nav > li > a {\n  color: #fff; }\n\n.col-black .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-black .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-white .navbar .navbar-brand,\n.col-white .navbar .navbar-brand:hover,\n.col-white .navbar .navbar-brand:active,\n.col-white .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-white .navbar .nav > li > a:hover,\n.col-white .navbar .nav > li > a:focus,\n.col-white .navbar .nav .open > a,\n.col-white .navbar .nav .open > a:hover,\n.col-white .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-white .navbar .nav > li > a {\n  color: #fff; }\n\n.col-white .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-white .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n/* Material Icons ============================== */\n.material-icons.md-18 {\n  font-size: 18px; }\n\n.material-icons.md-24 {\n  font-size: 24px; }\n\n.material-icons.md-26 {\n  font-size: 26px; }\n\n.material-icons.md-28 {\n  font-size: 28px; }\n\n.material-icons.md-30 {\n  font-size: 30px; }\n\n.material-icons.md-32 {\n  font-size: 32px; }\n\n.material-icons.md-36 {\n  font-size: 36px; }\n\n.material-icons.md-48 {\n  font-size: 48px; }\n\n/* Helpers ===================================== */\n.m-l--125 {\n  margin-left: -125px; }\n\n.m-t--125 {\n  margin-top: -125px; }\n\n.m-r--125 {\n  margin-right: -125px; }\n\n.m-b--125 {\n  margin-bottom: -125px; }\n\n.m-l--120 {\n  margin-left: -120px; }\n\n.m-t--120 {\n  margin-top: -120px; }\n\n.m-r--120 {\n  margin-right: -120px; }\n\n.m-b--120 {\n  margin-bottom: -120px; }\n\n.m-l--115 {\n  margin-left: -115px; }\n\n.m-t--115 {\n  margin-top: -115px; }\n\n.m-r--115 {\n  margin-right: -115px; }\n\n.m-b--115 {\n  margin-bottom: -115px; }\n\n.m-l--110 {\n  margin-left: -110px; }\n\n.m-t--110 {\n  margin-top: -110px; }\n\n.m-r--110 {\n  margin-right: -110px; }\n\n.m-b--110 {\n  margin-bottom: -110px; }\n\n.m-l--105 {\n  margin-left: -105px; }\n\n.m-t--105 {\n  margin-top: -105px; }\n\n.m-r--105 {\n  margin-right: -105px; }\n\n.m-b--105 {\n  margin-bottom: -105px; }\n\n.m-l--100 {\n  margin-left: -100px; }\n\n.m-t--100 {\n  margin-top: -100px; }\n\n.m-r--100 {\n  margin-right: -100px; }\n\n.m-b--100 {\n  margin-bottom: -100px; }\n\n.m-l--95 {\n  margin-left: -95px; }\n\n.m-t--95 {\n  margin-top: -95px; }\n\n.m-r--95 {\n  margin-right: -95px; }\n\n.m-b--95 {\n  margin-bottom: -95px; }\n\n.m-l--90 {\n  margin-left: -90px; }\n\n.m-t--90 {\n  margin-top: -90px; }\n\n.m-r--90 {\n  margin-right: -90px; }\n\n.m-b--90 {\n  margin-bottom: -90px; }\n\n.m-l--85 {\n  margin-left: -85px; }\n\n.m-t--85 {\n  margin-top: -85px; }\n\n.m-r--85 {\n  margin-right: -85px; }\n\n.m-b--85 {\n  margin-bottom: -85px; }\n\n.m-l--80 {\n  margin-left: -80px; }\n\n.m-t--80 {\n  margin-top: -80px; }\n\n.m-r--80 {\n  margin-right: -80px; }\n\n.m-b--80 {\n  margin-bottom: -80px; }\n\n.m-l--75 {\n  margin-left: -75px; }\n\n.m-t--75 {\n  margin-top: -75px; }\n\n.m-r--75 {\n  margin-right: -75px; }\n\n.m-b--75 {\n  margin-bottom: -75px; }\n\n.m-l--70 {\n  margin-left: -70px; }\n\n.m-t--70 {\n  margin-top: -70px; }\n\n.m-r--70 {\n  margin-right: -70px; }\n\n.m-b--70 {\n  margin-bottom: -70px; }\n\n.m-l--65 {\n  margin-left: -65px; }\n\n.m-t--65 {\n  margin-top: -65px; }\n\n.m-r--65 {\n  margin-right: -65px; }\n\n.m-b--65 {\n  margin-bottom: -65px; }\n\n.m-l--60 {\n  margin-left: -60px; }\n\n.m-t--60 {\n  margin-top: -60px; }\n\n.m-r--60 {\n  margin-right: -60px; }\n\n.m-b--60 {\n  margin-bottom: -60px; }\n\n.m-l--55 {\n  margin-left: -55px; }\n\n.m-t--55 {\n  margin-top: -55px; }\n\n.m-r--55 {\n  margin-right: -55px; }\n\n.m-b--55 {\n  margin-bottom: -55px; }\n\n.m-l--50 {\n  margin-left: -50px; }\n\n.m-t--50 {\n  margin-top: -50px; }\n\n.m-r--50 {\n  margin-right: -50px; }\n\n.m-b--50 {\n  margin-bottom: -50px; }\n\n.m-l--45 {\n  margin-left: -45px; }\n\n.m-t--45 {\n  margin-top: -45px; }\n\n.m-r--45 {\n  margin-right: -45px; }\n\n.m-b--45 {\n  margin-bottom: -45px; }\n\n.m-l--40 {\n  margin-left: -40px; }\n\n.m-t--40 {\n  margin-top: -40px; }\n\n.m-r--40 {\n  margin-right: -40px; }\n\n.m-b--40 {\n  margin-bottom: -40px; }\n\n.m-l--35 {\n  margin-left: -35px; }\n\n.m-t--35 {\n  margin-top: -35px; }\n\n.m-r--35 {\n  margin-right: -35px; }\n\n.m-b--35 {\n  margin-bottom: -35px; }\n\n.m-l--30 {\n  margin-left: -30px; }\n\n.m-t--30 {\n  margin-top: -30px; }\n\n.m-r--30 {\n  margin-right: -30px; }\n\n.m-b--30 {\n  margin-bottom: -30px; }\n\n.m-l--25 {\n  margin-left: -25px; }\n\n.m-t--25 {\n  margin-top: -25px; }\n\n.m-r--25 {\n  margin-right: -25px; }\n\n.m-b--25 {\n  margin-bottom: -25px; }\n\n.m-l--20 {\n  margin-left: -20px; }\n\n.m-t--20 {\n  margin-top: -20px; }\n\n.m-r--20 {\n  margin-right: -20px; }\n\n.m-b--20 {\n  margin-bottom: -20px; }\n\n.m-l--15 {\n  margin-left: -15px; }\n\n.m-t--15 {\n  margin-top: -15px; }\n\n.m-r--15 {\n  margin-right: -15px; }\n\n.m-b--15 {\n  margin-bottom: -15px; }\n\n.m-l--10 {\n  margin-left: -10px; }\n\n.m-t--10 {\n  margin-top: -10px; }\n\n.m-r--10 {\n  margin-right: -10px; }\n\n.m-b--10 {\n  margin-bottom: -10px; }\n\n.m-l--5 {\n  margin-left: -5px; }\n\n.m-t--5 {\n  margin-top: -5px; }\n\n.m-r--5 {\n  margin-right: -5px; }\n\n.m-b--5 {\n  margin-bottom: -5px; }\n\n.m-l-0 {\n  margin-left: 0px; }\n\n.m-t-0 {\n  margin-top: 0px; }\n\n.m-r-0 {\n  margin-right: 0px; }\n\n.m-b-0 {\n  margin-bottom: 0px; }\n\n.m-l-5 {\n  margin-left: 5px; }\n\n.m-t-5 {\n  margin-top: 5px; }\n\n.m-r-5 {\n  margin-right: 5px; }\n\n.m-b-5 {\n  margin-bottom: 5px; }\n\n.m-l-10 {\n  margin-left: 10px; }\n\n.m-t-10 {\n  margin-top: 10px; }\n\n.m-r-10 {\n  margin-right: 10px; }\n\n.m-b-10 {\n  margin-bottom: 10px; }\n\n.m-l-15 {\n  margin-left: 15px; }\n\n.m-t-15 {\n  margin-top: 15px; }\n\n.m-r-15 {\n  margin-right: 15px; }\n\n.m-b-15 {\n  margin-bottom: 15px; }\n\n.m-l-20 {\n  margin-left: 20px; }\n\n.m-t-20 {\n  margin-top: 20px; }\n\n.m-r-20 {\n  margin-right: 20px; }\n\n.m-b-20 {\n  margin-bottom: 20px; }\n\n.m-l-25 {\n  margin-left: 25px; }\n\n.m-t-25 {\n  margin-top: 25px; }\n\n.m-r-25 {\n  margin-right: 25px; }\n\n.m-b-25 {\n  margin-bottom: 25px; }\n\n.m-l-30 {\n  margin-left: 30px; }\n\n.m-t-30 {\n  margin-top: 30px; }\n\n.m-r-30 {\n  margin-right: 30px; }\n\n.m-b-30 {\n  margin-bottom: 30px; }\n\n.m-l-35 {\n  margin-left: 35px; }\n\n.m-t-35 {\n  margin-top: 35px; }\n\n.m-r-35 {\n  margin-right: 35px; }\n\n.m-b-35 {\n  margin-bottom: 35px; }\n\n.m-l-40 {\n  margin-left: 40px; }\n\n.m-t-40 {\n  margin-top: 40px; }\n\n.m-r-40 {\n  margin-right: 40px; }\n\n.m-b-40 {\n  margin-bottom: 40px; }\n\n.m-l-45 {\n  margin-left: 45px; }\n\n.m-t-45 {\n  margin-top: 45px; }\n\n.m-r-45 {\n  margin-right: 45px; }\n\n.m-b-45 {\n  margin-bottom: 45px; }\n\n.m-l-50 {\n  margin-left: 50px; }\n\n.m-t-50 {\n  margin-top: 50px; }\n\n.m-r-50 {\n  margin-right: 50px; }\n\n.m-b-50 {\n  margin-bottom: 50px; }\n\n.m-l-55 {\n  margin-left: 55px; }\n\n.m-t-55 {\n  margin-top: 55px; }\n\n.m-r-55 {\n  margin-right: 55px; }\n\n.m-b-55 {\n  margin-bottom: 55px; }\n\n.m-l-60 {\n  margin-left: 60px; }\n\n.m-t-60 {\n  margin-top: 60px; }\n\n.m-r-60 {\n  margin-right: 60px; }\n\n.m-b-60 {\n  margin-bottom: 60px; }\n\n.m-l-65 {\n  margin-left: 65px; }\n\n.m-t-65 {\n  margin-top: 65px; }\n\n.m-r-65 {\n  margin-right: 65px; }\n\n.m-b-65 {\n  margin-bottom: 65px; }\n\n.m-l-70 {\n  margin-left: 70px; }\n\n.m-t-70 {\n  margin-top: 70px; }\n\n.m-r-70 {\n  margin-right: 70px; }\n\n.m-b-70 {\n  margin-bottom: 70px; }\n\n.m-l-75 {\n  margin-left: 75px; }\n\n.m-t-75 {\n  margin-top: 75px; }\n\n.m-r-75 {\n  margin-right: 75px; }\n\n.m-b-75 {\n  margin-bottom: 75px; }\n\n.m-l-80 {\n  margin-left: 80px; }\n\n.m-t-80 {\n  margin-top: 80px; }\n\n.m-r-80 {\n  margin-right: 80px; }\n\n.m-b-80 {\n  margin-bottom: 80px; }\n\n.m-l-85 {\n  margin-left: 85px; }\n\n.m-t-85 {\n  margin-top: 85px; }\n\n.m-r-85 {\n  margin-right: 85px; }\n\n.m-b-85 {\n  margin-bottom: 85px; }\n\n.m-l-90 {\n  margin-left: 90px; }\n\n.m-t-90 {\n  margin-top: 90px; }\n\n.m-r-90 {\n  margin-right: 90px; }\n\n.m-b-90 {\n  margin-bottom: 90px; }\n\n.m-l-95 {\n  margin-left: 95px; }\n\n.m-t-95 {\n  margin-top: 95px; }\n\n.m-r-95 {\n  margin-right: 95px; }\n\n.m-b-95 {\n  margin-bottom: 95px; }\n\n.m-l-100 {\n  margin-left: 100px; }\n\n.m-t-100 {\n  margin-top: 100px; }\n\n.m-r-100 {\n  margin-right: 100px; }\n\n.m-b-100 {\n  margin-bottom: 100px; }\n\n.m-l-105 {\n  margin-left: 105px; }\n\n.m-t-105 {\n  margin-top: 105px; }\n\n.m-r-105 {\n  margin-right: 105px; }\n\n.m-b-105 {\n  margin-bottom: 105px; }\n\n.m-l-110 {\n  margin-left: 110px; }\n\n.m-t-110 {\n  margin-top: 110px; }\n\n.m-r-110 {\n  margin-right: 110px; }\n\n.m-b-110 {\n  margin-bottom: 110px; }\n\n.m-l-115 {\n  margin-left: 115px; }\n\n.m-t-115 {\n  margin-top: 115px; }\n\n.m-r-115 {\n  margin-right: 115px; }\n\n.m-b-115 {\n  margin-bottom: 115px; }\n\n.m-l-120 {\n  margin-left: 120px; }\n\n.m-t-120 {\n  margin-top: 120px; }\n\n.m-r-120 {\n  margin-right: 120px; }\n\n.m-b-120 {\n  margin-bottom: 120px; }\n\n.m-l-125 {\n  margin-left: 125px; }\n\n.m-t-125 {\n  margin-top: 125px; }\n\n.m-r-125 {\n  margin-right: 125px; }\n\n.m-b-125 {\n  margin-bottom: 125px; }\n\n.margin-0 {\n  margin: 0; }\n\n.p-l-0 {\n  padding-left: 0px; }\n\n.p-t-0 {\n  padding-top: 0px; }\n\n.p-r-0 {\n  padding-right: 0px; }\n\n.p-b-0 {\n  padding-bottom: 0px; }\n\n.p-l-5 {\n  padding-left: 5px; }\n\n.p-t-5 {\n  padding-top: 5px; }\n\n.p-r-5 {\n  padding-right: 5px; }\n\n.p-b-5 {\n  padding-bottom: 5px; }\n\n.p-l-10 {\n  padding-left: 10px; }\n\n.p-t-10 {\n  padding-top: 10px; }\n\n.p-r-10 {\n  padding-right: 10px; }\n\n.p-b-10 {\n  padding-bottom: 10px; }\n\n.p-l-15 {\n  padding-left: 15px; }\n\n.p-t-15 {\n  padding-top: 15px; }\n\n.p-r-15 {\n  padding-right: 15px; }\n\n.p-b-15 {\n  padding-bottom: 15px; }\n\n.p-l-20 {\n  padding-left: 20px; }\n\n.p-t-20 {\n  padding-top: 20px; }\n\n.p-r-20 {\n  padding-right: 20px; }\n\n.p-b-20 {\n  padding-bottom: 20px; }\n\n.p-l-25 {\n  padding-left: 25px; }\n\n.p-t-25 {\n  padding-top: 25px; }\n\n.p-r-25 {\n  padding-right: 25px; }\n\n.p-b-25 {\n  padding-bottom: 25px; }\n\n.p-l-30 {\n  padding-left: 30px; }\n\n.p-t-30 {\n  padding-top: 30px; }\n\n.p-r-30 {\n  padding-right: 30px; }\n\n.p-b-30 {\n  padding-bottom: 30px; }\n\n.p-l-35 {\n  padding-left: 35px; }\n\n.p-t-35 {\n  padding-top: 35px; }\n\n.p-r-35 {\n  padding-right: 35px; }\n\n.p-b-35 {\n  padding-bottom: 35px; }\n\n.p-l-40 {\n  padding-left: 40px; }\n\n.p-t-40 {\n  padding-top: 40px; }\n\n.p-r-40 {\n  padding-right: 40px; }\n\n.p-b-40 {\n  padding-bottom: 40px; }\n\n.p-l-45 {\n  padding-left: 45px; }\n\n.p-t-45 {\n  padding-top: 45px; }\n\n.p-r-45 {\n  padding-right: 45px; }\n\n.p-b-45 {\n  padding-bottom: 45px; }\n\n.p-l-50 {\n  padding-left: 50px; }\n\n.p-t-50 {\n  padding-top: 50px; }\n\n.p-r-50 {\n  padding-right: 50px; }\n\n.p-b-50 {\n  padding-bottom: 50px; }\n\n.p-l-55 {\n  padding-left: 55px; }\n\n.p-t-55 {\n  padding-top: 55px; }\n\n.p-r-55 {\n  padding-right: 55px; }\n\n.p-b-55 {\n  padding-bottom: 55px; }\n\n.p-l-60 {\n  padding-left: 60px; }\n\n.p-t-60 {\n  padding-top: 60px; }\n\n.p-r-60 {\n  padding-right: 60px; }\n\n.p-b-60 {\n  padding-bottom: 60px; }\n\n.p-l-65 {\n  padding-left: 65px; }\n\n.p-t-65 {\n  padding-top: 65px; }\n\n.p-r-65 {\n  padding-right: 65px; }\n\n.p-b-65 {\n  padding-bottom: 65px; }\n\n.p-l-70 {\n  padding-left: 70px; }\n\n.p-t-70 {\n  padding-top: 70px; }\n\n.p-r-70 {\n  padding-right: 70px; }\n\n.p-b-70 {\n  padding-bottom: 70px; }\n\n.p-l-75 {\n  padding-left: 75px; }\n\n.p-t-75 {\n  padding-top: 75px; }\n\n.p-r-75 {\n  padding-right: 75px; }\n\n.p-b-75 {\n  padding-bottom: 75px; }\n\n.p-l-80 {\n  padding-left: 80px; }\n\n.p-t-80 {\n  padding-top: 80px; }\n\n.p-r-80 {\n  padding-right: 80px; }\n\n.p-b-80 {\n  padding-bottom: 80px; }\n\n.p-l-85 {\n  padding-left: 85px; }\n\n.p-t-85 {\n  padding-top: 85px; }\n\n.p-r-85 {\n  padding-right: 85px; }\n\n.p-b-85 {\n  padding-bottom: 85px; }\n\n.p-l-90 {\n  padding-left: 90px; }\n\n.p-t-90 {\n  padding-top: 90px; }\n\n.p-r-90 {\n  padding-right: 90px; }\n\n.p-b-90 {\n  padding-bottom: 90px; }\n\n.p-l-95 {\n  padding-left: 95px; }\n\n.p-t-95 {\n  padding-top: 95px; }\n\n.p-r-95 {\n  padding-right: 95px; }\n\n.p-b-95 {\n  padding-bottom: 95px; }\n\n.p-l-100 {\n  padding-left: 100px; }\n\n.p-t-100 {\n  padding-top: 100px; }\n\n.p-r-100 {\n  padding-right: 100px; }\n\n.p-b-100 {\n  padding-bottom: 100px; }\n\n.p-l-105 {\n  padding-left: 105px; }\n\n.p-t-105 {\n  padding-top: 105px; }\n\n.p-r-105 {\n  padding-right: 105px; }\n\n.p-b-105 {\n  padding-bottom: 105px; }\n\n.p-l-110 {\n  padding-left: 110px; }\n\n.p-t-110 {\n  padding-top: 110px; }\n\n.p-r-110 {\n  padding-right: 110px; }\n\n.p-b-110 {\n  padding-bottom: 110px; }\n\n.p-l-115 {\n  padding-left: 115px; }\n\n.p-t-115 {\n  padding-top: 115px; }\n\n.p-r-115 {\n  padding-right: 115px; }\n\n.p-b-115 {\n  padding-bottom: 115px; }\n\n.p-l-120 {\n  padding-left: 120px; }\n\n.p-t-120 {\n  padding-top: 120px; }\n\n.p-r-120 {\n  padding-right: 120px; }\n\n.p-b-120 {\n  padding-bottom: 120px; }\n\n.p-l-125 {\n  padding-left: 125px; }\n\n.p-t-125 {\n  padding-top: 125px; }\n\n.p-r-125 {\n  padding-right: 125px; }\n\n.p-b-125 {\n  padding-bottom: 125px; }\n\n.padding-0 {\n  padding: 0; }\n\n.font-6 {\n  font-size: 6px; }\n\n.font-7 {\n  font-size: 7px; }\n\n.font-8 {\n  font-size: 8px; }\n\n.font-9 {\n  font-size: 9px; }\n\n.font-10 {\n  font-size: 10px; }\n\n.font-11 {\n  font-size: 11px; }\n\n.font-12 {\n  font-size: 12px; }\n\n.font-13 {\n  font-size: 13px; }\n\n.font-14 {\n  font-size: 14px; }\n\n.font-15 {\n  font-size: 15px; }\n\n.font-16 {\n  font-size: 16px; }\n\n.font-17 {\n  font-size: 17px; }\n\n.font-18 {\n  font-size: 18px; }\n\n.font-19 {\n  font-size: 19px; }\n\n.font-20 {\n  font-size: 20px; }\n\n.font-21 {\n  font-size: 21px; }\n\n.font-22 {\n  font-size: 22px; }\n\n.font-23 {\n  font-size: 23px; }\n\n.font-24 {\n  font-size: 24px; }\n\n.font-25 {\n  font-size: 25px; }\n\n.font-26 {\n  font-size: 26px; }\n\n.font-27 {\n  font-size: 27px; }\n\n.font-28 {\n  font-size: 28px; }\n\n.font-29 {\n  font-size: 29px; }\n\n.font-30 {\n  font-size: 30px; }\n\n.font-31 {\n  font-size: 31px; }\n\n.font-32 {\n  font-size: 32px; }\n\n.font-33 {\n  font-size: 33px; }\n\n.font-34 {\n  font-size: 34px; }\n\n.font-35 {\n  font-size: 35px; }\n\n.font-36 {\n  font-size: 36px; }\n\n.font-37 {\n  font-size: 37px; }\n\n.font-38 {\n  font-size: 38px; }\n\n.font-39 {\n  font-size: 39px; }\n\n.font-40 {\n  font-size: 40px; }\n\n.font-41 {\n  font-size: 41px; }\n\n.font-42 {\n  font-size: 42px; }\n\n.font-43 {\n  font-size: 43px; }\n\n.font-44 {\n  font-size: 44px; }\n\n.font-45 {\n  font-size: 45px; }\n\n.font-46 {\n  font-size: 46px; }\n\n.font-47 {\n  font-size: 47px; }\n\n.font-48 {\n  font-size: 48px; }\n\n.font-49 {\n  font-size: 49px; }\n\n.font-50 {\n  font-size: 50px; }\n\n.align-left {\n  text-align: left; }\n\n.align-center {\n  text-align: center; }\n\n.align-right {\n  text-align: right; }\n\n.align-justify {\n  text-align: justify; }\n\n.no-resize {\n  resize: none; }\n\n.font-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n.font-underline {\n  text-decoration: underline; }\n\n.font-line-through {\n  text-decoration: line-through; }\n\n.font-overline {\n  text-decoration: overline; }\n\n.block-header {\n  margin-bottom: 15px; }\n\n.block-header h2 {\n  margin: 0 !important;\n  color: #666 !important;\n  font-weight: normal;\n  font-size: 16px; }\n\n.block-header h2 small {\n  display: block;\n  font-size: 12px;\n  margin-top: 8px;\n  color: #888; }\n\n.block-header h2 small a {\n  font-weight: bold;\n  color: #777; }\n\n.bg-red {\n  background-color: #f44336 !important;\n  color: #fff; }\n\n.bg-red .content .text,\n.bg-red .content .number {\n  color: #fff !important; }\n\n.bg-pink {\n  background-color: #e91e63 !important;\n  color: #fff; }\n\n.bg-pink .content .text,\n.bg-pink .content .number {\n  color: #fff !important; }\n\n.bg-purple {\n  background-color: #9c27b0 !important;\n  color: #fff; }\n\n.bg-purple .content .text,\n.bg-purple .content .number {\n  color: #fff !important; }\n\n.bg-deep-purple {\n  background-color: #673ab7 !important;\n  color: #fff; }\n\n.bg-deep-purple .content .text,\n.bg-deep-purple .content .number {\n  color: #fff !important; }\n\n.bg-indigo {\n  background-color: #3f51b5 !important;\n  color: #fff; }\n\n.bg-indigo .content .text,\n.bg-indigo .content .number {\n  color: #fff !important; }\n\n.bg-blue {\n  background-color: #336699 !important;\n  color: #fff; }\n\n.bg-blue .content .text,\n.bg-blue .content .number {\n  color: #fff !important; }\n\n.bg-bluemaroon {\n  background-color: #008bc5 !important;\n  color: #fff; }\n\n.bg-bluemaroon .content .text,\n.bg-bluemaroon .content .number {\n  color: #fff !important; }\n\n.bg-bluelight {\n  background-color: #73c8e3 !important;\n  color: #fff; }\n\n.bg-bluelight .content .text,\n.bg-bluelight .content .number {\n  color: #fff !important; }\n\n.bg-bluenavy {\n  background-color: #1c3060 !important;\n  color: #fff; }\n\n.bg-bluenavy .content .text,\n.bg-bluenavy .content .number {\n  color: #fff !important; }\n\n.bg-light-blue {\n  background-color: #03a9f4 !important;\n  color: #fff; }\n\n.bg-light-blue .content .text,\n.bg-light-blue .content .number {\n  color: #fff !important; }\n\n.bg-cyan {\n  background-color: #00bcd4 !important;\n  color: #fff; }\n\n.bg-cyan .content .text,\n.bg-cyan .content .number {\n  color: #fff !important; }\n\n.bg-teal {\n  background-color: #009688 !important;\n  color: #fff; }\n\n.bg-teal .content .text,\n.bg-teal .content .number {\n  color: #fff !important; }\n\n.bg-green {\n  background-color: #4caf50 !important;\n  color: #fff; }\n\n.bg-green .content .text,\n.bg-green .content .number {\n  color: #fff !important; }\n\n.bg-light-green {\n  background-color: #8bc34a !important;\n  color: #fff; }\n\n.bg-light-green .content .text,\n.bg-light-green .content .number {\n  color: #fff !important; }\n\n.bg-lime {\n  background-color: #cddc39 !important;\n  color: #fff; }\n\n.bg-lime .content .text,\n.bg-lime .content .number {\n  color: #fff !important; }\n\n.bg-yellow {\n  background-color: #ffe821 !important;\n  color: #fff; }\n\n.bg-yellow .content .text,\n.bg-yellow .content .number {\n  color: #fff !important; }\n\n.bg-amber {\n  background-color: #ffc107 !important;\n  color: #fff; }\n\n.bg-amber .content .text,\n.bg-amber .content .number {\n  color: #fff !important; }\n\n.bg-orange {\n  background-color: #ff9800 !important;\n  color: #fff; }\n\n.bg-orange .content .text,\n.bg-orange .content .number {\n  color: #fff !important; }\n\n.bg-deep-orange {\n  background-color: #ff5722 !important;\n  color: #fff; }\n\n.bg-deep-orange .content .text,\n.bg-deep-orange .content .number {\n  color: #fff !important; }\n\n.bg-brown {\n  background-color: #795548 !important;\n  color: #fff; }\n\n.bg-brown .content .text,\n.bg-brown .content .number {\n  color: #fff !important; }\n\n.bg-grey {\n  background-color: #9e9e9e !important;\n  color: #fff; }\n\n.bg-grey .content .text,\n.bg-grey .content .number {\n  color: #fff !important; }\n\n.bg-blue-grey {\n  background-color: #607d8b !important;\n  color: #fff; }\n\n.bg-blue-grey .content .text,\n.bg-blue-grey .content .number {\n  color: #fff !important; }\n\n.bg-black {\n  background-color: #000000 !important;\n  color: #fff; }\n\n.bg-black .content .text,\n.bg-black .content .number {\n  color: #fff !important; }\n\n.bg-white {\n  background-color: #ffffff !important;\n  color: #fff; }\n\n.bg-white .content .text,\n.bg-white .content .number {\n  color: #fff !important; }\n\n.col-red {\n  color: #f44336 !important; }\n\n.col-pink {\n  color: #e91e63 !important; }\n\n.col-purple {\n  color: #9c27b0 !important; }\n\n.col-deep-purple {\n  color: #673ab7 !important; }\n\n.col-indigo {\n  color: #3f51b5 !important; }\n\n.col-blue {\n  color: #336699 !important; }\n\n.col-light-blue {\n  color: #03a9f4 !important; }\n\n.col-cyan {\n  color: #00bcd4 !important; }\n\n.col-teal {\n  color: #009688 !important; }\n\n.col-green {\n  color: #4caf50 !important; }\n\n.col-light-green {\n  color: #8bc34a !important; }\n\n.col-lime {\n  color: #cddc39 !important; }\n\n.col-yellow {\n  color: #ffe821 !important; }\n\n.col-amber {\n  color: #ffc107 !important; }\n\n.col-orange {\n  color: #ff9800 !important; }\n\n.col-deep-orange {\n  color: #ff5722 !important; }\n\n.col-brown {\n  color: #795548 !important; }\n\n.col-grey {\n  color: #9e9e9e !important; }\n\n.col-blue-grey {\n  color: #607d8b !important; }\n\n.col-black {\n  color: #000000 !important; }\n\n.col-white {\n  color: #ffffff !important; }\n\n/* Custom Animate ============================== */\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n/* Demo ======================================== */\n.demo-button-sizes .btn {\n  margin-bottom: 5px; }\n\n.icon-button-demo button {\n  margin-right: 5px;\n  margin-bottom: 12px; }\n\n.icon-and-text-button-demo button {\n  margin-right: 5px;\n  margin-bottom: 12px;\n  width: 16.66666666666667%; }\n\n.button-demo ul {\n  padding-left: 0; }\n\n.button-demo ul li {\n  list-style: none;\n  padding-left: 0;\n  display: inline-block;\n  margin-right: 7px; }\n\n.button-demo ul li .btn {\n  display: block;\n  min-width: 175px; }\n\n.button-demo .btn {\n  margin-right: 8px;\n  margin-bottom: 13px;\n  min-width: 120px; }\n\n.demo-button-groups .btn-group {\n  margin-right: 10px; }\n\n.demo-button-toolbar .btn-toolbar {\n  float: left;\n  margin-right: 25px; }\n\n.demo-button-nesting > .btn-group {\n  margin-right: 15px; }\n\n.demo-single-button-dropdowns > .btn-group {\n  margin-right: 10px; }\n\n.demo-splite-button-dropdowns > .btn-group {\n  margin-right: 10px; }\n\n.demo-dropup .dropup {\n  margin-right: 10px; }\n\n.demo-checkbox label,\n.demo-radio-button label {\n  min-width: 150px; }\n\n.demo-knob-chart div {\n  margin-right: 15px; }\n\n.demo-switch .switch {\n  display: inline-block;\n  min-width: 170px; }\n\n.demo-switch .demo-switch-title {\n  min-width: 95px;\n  display: inline-block; }\n\n.demo-color-box {\n  padding: 15px 0;\n  text-align: center;\n  margin-bottom: 20px;\n  border-radius: 3px; }\n\n.demo-color-box .color-name {\n  font-size: 16px;\n  margin-bottom: 5px; }\n\n.demo-color-box .color-code,\n.demo-color-box .color-class-name {\n  font-size: 13px; }\n\n.demo-image-copyright {\n  text-align: right;\n  font-style: italic;\n  font-size: 12px;\n  color: #777;\n  margin: 5px 0 10px 0; }\n\n.demo-image-copyright a {\n  font-weight: bold;\n  color: #555 !important; }\n\n.demo-tagsinput-area {\n  margin-bottom: 50px !important; }\n\n.demo-icon-container .demo-google-material-icon {\n  margin-bottom: 5px;\n  text-align: left; }\n\n.demo-icon-container .demo-google-material-icon .icon-name {\n  position: relative;\n  top: -8px;\n  left: 7px; }\n\n.demo-icon-container .demo-google-material-icon .material-icons {\n  width: 24px; }\n\n.demo-preloader .preloader {\n  margin-right: 10px; }\n\n.irs-demo {\n  margin-bottom: 40px; }\n\n.irs-demo .irs {\n  margin-top: 15px; }\n\n.right-sidebar .nav-tabs + .tab-content {\n  padding: 0; }\n\n.right-sidebar p {\n  margin: 20px 15px 15px 15px;\n  font-weight: bold;\n  text-align: center; }\n\n.right-sidebar #settings .setting-list {\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 20px; }\n\n.right-sidebar #settings .setting-list li {\n  padding: 15px;\n  position: relative;\n  border-top: 1px solid #eee; }\n\n.right-sidebar #settings .setting-list li .switch {\n  position: absolute;\n  top: 15px;\n  right: 5px; }\n\n.demo-choose-skin {\n  list-style: none;\n  padding-left: 0;\n  overflow-y: hidden; }\n\n.demo-choose-skin li {\n  border-bottom: 1px solid #eee;\n  padding: 10px 10px 4px 10px;\n  position: relative;\n  cursor: pointer; }\n\n.demo-choose-skin li.active {\n  background-color: #eee; }\n\n.demo-choose-skin li.active:after {\n  font-family: 'PT Sans';\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  content: '\\E876';\n  font-size: 18px;\n  font-weight: bold; }\n\n.demo-choose-skin li:hover {\n  background-color: #eee; }\n\n.demo-choose-skin li div {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  border-radius: 3px; }\n\n.demo-choose-skin li span {\n  position: relative;\n  bottom: 7px;\n  left: 5px; }\n\n.demo-choose-skin .red {\n  background-color: #f44336; }\n\n.demo-choose-skin .pink {\n  background-color: #e91e63; }\n\n.demo-choose-skin .purple {\n  background-color: #9c27b0; }\n\n.demo-choose-skin .deep-purple {\n  background-color: #673ab7; }\n\n.demo-choose-skin .indigo {\n  background-color: #3f51b5; }\n\n.demo-choose-skin .blue {\n  background-color: #336699; }\n\n.demo-choose-skin .light-blue {\n  background-color: #03a9f4; }\n\n.demo-choose-skin .cyan {\n  background-color: #00bcd4; }\n\n.demo-choose-skin .teal {\n  background-color: #009688; }\n\n.demo-choose-skin .green {\n  background-color: #4caf50; }\n\n.demo-choose-skin .light-green {\n  background-color: #8bc34a; }\n\n.demo-choose-skin .lime {\n  background-color: #cddc39; }\n\n.demo-choose-skin .yellow {\n  background-color: #ffe821; }\n\n.demo-choose-skin .amber {\n  background-color: #ffc107; }\n\n.demo-choose-skin .orange {\n  background-color: #ff9800; }\n\n.demo-choose-skin .deep-orange {\n  background-color: #ff5722; }\n\n.demo-choose-skin .brown {\n  background-color: #795548; }\n\n.demo-choose-skin .grey {\n  background-color: #9e9e9e; }\n\n.demo-choose-skin .blue-grey {\n  background-color: #607d8b; }\n\n.demo-choose-skin .black {\n  background-color: #000000; }\n\n.demo-choose-skin .white {\n  background-color: #ffffff; }\n\n/* Materialize Css | Taken from www.materializecss.com */\n/* Media ======================================= */\n@media (max-width: 767px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: 35px;\n    width: 73%; }\n  .navbar .navbar-header {\n    display: inline-block;\n    margin-bottom: -6px;\n    width: calc(100% + 30px); }\n  .navbar .nav > li {\n    display: inline-block; }\n  .navbar .navbar-nav {\n    margin-top: -10px;\n    margin-bottom: 1px;\n    margin-left: -7px; }\n  .navbar .navbar-nav .open .dropdown-menu {\n    background-color: #fff;\n    position: absolute; }\n  .navbar .dropdown-menu {\n    margin-left: -50px; }\n  .navbar .js-right-sidebar {\n    margin-top: 15px; }\n  .dt-buttons {\n    float: none !important;\n    text-align: center;\n    margin-bottom: 15px; }\n  .panel-switch-btn {\n    top: 12px;\n    right: 0 !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: 20px; } }\n\n@media (min-width: 992px) and (max-width: 1169px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: 20px; } }\n\n/* General ===================================== */\nbody {\n  background-color: #fff;\n  transition: all 0.5s;\n  font-family: 'PT Sans', sans-serif; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: bold; }\n\nbutton,\ninput,\nselect,\na {\n  outline: none !important; }\n\n.no-animate {\n  transition-property: none !important;\n  transform: none !important;\n  animation: none !important; }\n\nsection.content {\n  transition: 0.5s; }\n\n/* Dashboard =================================== */\n.dashboard-flot-chart {\n  height: 275px; }\n\n.dashboard-donut-chart {\n  height: 265px; }\n\n.dashboard-line-chart {\n  height: 250px; }\n\n.dashboard-stat-list {\n  list-style: none;\n  padding-left: 0;\n  margin-top: 40px; }\n\n.dashboard-stat-list li {\n  padding: 16px 0 0 0; }\n\n.dashboard-stat-list li small {\n  font-size: 8px; }\n\n.dashboard-task-infos .progress {\n  height: 10px;\n  margin-bottom: 0;\n  position: relative;\n  top: 6px; }\n\n/* Buttons ===================================== */\n.btn:focus {\n  outline: none !important; }\n\n.btn-circle {\n  border: none;\n  outline: none !important;\n  overflow: hidden;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%; }\n\n.btn-circle i {\n  font-size: 18px;\n  position: relative;\n  left: -1px; }\n\n.btn-link {\n  font-weight: bold;\n  color: #333;\n  transition: 0.5s; }\n\n.btn-link:active,\n.btn-link:focus {\n  text-decoration: none;\n  color: #333; }\n\n.btn-link:hover {\n  text-decoration: none;\n  color: #333;\n  background-color: #ddd; }\n\n.btn-circle-lg {\n  border: none;\n  outline: none !important;\n  overflow: hidden;\n  width: 50px;\n  height: 50px;\n  border-radius: 50% !important; }\n\n.btn-circle-lg i {\n  font-size: 26px !important;\n  position: relative !important;\n  left: 0px !important;\n  top: 6px !important; }\n\n.btn:not(.btn-link):not(.btn-circle) {\n  box-shadow: none;\n  border-radius: 2px;\n  border: none;\n  font-size: 13px;\n  outline: none; }\n\n.btn:not(.btn-link):not(.btn-circle):hover {\n  outline: none; }\n\n.btn:not(.btn-link):not(.btn-circle) i {\n  font-size: 20px;\n  position: relative;\n  top: 3px; }\n\n.btn:not(.btn-link):not(.btn-circle) span {\n  position: relative;\n  top: -2px;\n  margin-left: 3px; }\n\n.btn-warning,\n.btn-warning:hover,\n.btn-warning:active,\n.btn-warning:focus {\n  background-color: #ff9600 !important; }\n\n.btn-danger,\n.btn-danger:hover,\n.btn-danger:active,\n.btn-danger:focus {\n  background-color: #fb483a !important; }\n\n.btn-info,\n.btn-info:hover,\n.btn-info:active,\n.btn-info:focus {\n  background-color: #00b0e4 !important; }\n\n.btn-success,\n.btn-success:hover,\n.btn-success:active,\n.btn-success:focus {\n  background-color: #2b982b !important; }\n\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:focus {\n  background-color: #1f91f3 !important; }\n\n.btn-default,\n.btn-default:hover,\n.btn-default:active,\n.btn-default:focus {\n  background-color: #fff !important; }\n\n.btn-group,\n.btn-group-vertical {\n  box-shadow: none; }\n\n.btn-group .btn,\n.btn-group-vertical .btn {\n  box-shadow: none !important;\n  border-radius: 0; }\n\n.btn-group .btn .caret,\n.btn-group-vertical .btn .caret {\n  position: relative;\n  bottom: 1px; }\n\n.btn-group .btn-group,\n.btn-group-vertical .btn-group {\n  box-shadow: none !important; }\n\n.btn-group .btn + .dropdown-toggle,\n.btn-group-vertical .btn + .dropdown-toggle {\n  border-left: 1px solid rgba(0, 0, 0, 0.08) !important; }\n\n/* Bootstrap Tags Input ======================== */\n.bootstrap-tagsinput {\n  -ms-box-shadow: none !important;\n  box-shadow: none !important;\n  border: none !important; }\n\n/* noUISlider ================================== */\n.noUi-target {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n  position: relative;\n  direction: ltr; }\n\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box; }\n\n.noUi-base {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1; }\n\n.noUi-origin {\n  position: absolute;\n  right: 0;\n  top: 6px;\n  left: 0;\n  bottom: 0; }\n\n.noUi-handle {\n  position: relative;\n  z-index: 1; }\n\n.noUi-stacking .noUi-handle {\n  z-index: 10; }\n\n.noUi-state-tap .noUi-origin {\n  transition: left 0.25s, top 0.25s; }\n\n.noUi-state-drag * {\n  cursor: inherit !important; }\n\n.noUi-base {\n  transform: translate3d(0, 0, 0); }\n\n.noUi-horizontal {\n  height: 18px; }\n\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  left: -17px;\n  top: -6px; }\n\n.noUi-vertical {\n  width: 18px; }\n\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  left: -6px;\n  top: -17px; }\n\n.noUi-background {\n  background: #fafafa;\n  box-shadow: none; }\n\n.noUi-connect {\n  background: #3fb8af;\n  box-shadow: none;\n  transition: background 450ms; }\n\n.noUi-origin {\n  border-radius: 2px; }\n\n.noUi-target {\n  border-radius: 4px;\n  border: 1px solid #d3d3d3;\n  box-shadow: none; }\n\n.noUi-target.noUi-connect {\n  box-shadow: inset none; }\n\n.noUi-dragable {\n  cursor: w-resize; }\n\n.noUi-vertical .noUi-dragable {\n  cursor: n-resize; }\n\n.noUi-handle {\n  border: 1px solid #fff;\n  border-radius: 3px;\n  background: #fff;\n  cursor: default;\n  box-shadow: none; }\n\n.noUi-active {\n  box-shadow: inset none; }\n\n.noUi-handle:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #e8e7e6;\n  left: 14px;\n  top: 6px; }\n\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #e8e7e6;\n  left: 14px;\n  top: 6px;\n  left: 17px; }\n\n.noUi-vertical .noUi-handle:before {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px; }\n\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n  top: 17px; }\n\n[disabled].noUi-connect,\n[disabled] .noUi-connect {\n  background: #b8b8b8; }\n\n[disabled].noUi-origin,\n[disabled] .noUi-handle {\n  cursor: not-allowed; }\n\n.noUi-target {\n  box-shadow: none;\n  border: none; }\n\n.noUi-base {\n  height: 15px;\n  top: -6px; }\n\n.noUi-background {\n  height: 3px;\n  top: 6px;\n  background-color: #bfbfbf;\n  box-shadow: none; }\n\n.noUi-horizontal {\n  height: 3px; }\n\n.noUi-connect {\n  height: 3px;\n  top: 6px;\n  background-color: #26a69a;\n  box-shadow: none; }\n\n.noUi-horizontal .noUi-handle {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  box-shadow: none;\n  background-color: #26a69a;\n  border: none;\n  left: -5px;\n  top: -6px;\n  transition: width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), height 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), left 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), top 0.2s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.noUi-handle:before,\n.noUi-handle:after {\n  content: none; }\n\n.noUi-target .noUi-active.noUi-handle {\n  -ms-box-shadow: none;\n  box-shadow: none; }\n\n.noUi-target .range-label {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  top: -17px;\n  left: -2px;\n  background-color: #26a69a;\n  border-radius: 50%;\n  transition: border-radius 0.25s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: scale(0.5) rotate(-45deg);\n  transform-origin: 50% 100%; }\n\n.noUi-target .noUi-active .range-label {\n  border-radius: 15px 15px 15px 0;\n  transform: rotate(-45deg) translate(23px, -25px); }\n\n.range-label span {\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  font-size: 12px;\n  transform: rotate(45deg);\n  opacity: 0;\n  position: absolute;\n  top: 7px;\n  left: -1px;\n  transition: opacity 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.noUi-active .range-label span {\n  opacity: 1; }\n\n/* Multi Select ================================ */\n.ms-container {\n  width: auto !important; }\n\n.ms-container .ms-list {\n  -ms-box-shadow: none !important;\n  box-shadow: none !important;\n  border-radius: 0 !important; }\n\n.ms-container .ms-list.ms-focus {\n  -ms-box-shadow: none !important;\n  box-shadow: none !important; }\n\n.ms-container .ms-selectable,\n.ms-container .ms-selection {\n  min-width: 250px !important; }\n\n.ms-container .ms-selectable li.ms-hover,\n.ms-container .ms-selection li.ms-hover {\n  color: #000000 !important;\n  background-color: #e6e6e6 !important; }\n\n.ms-container .ms-selectable li.ms-elem-selectable,\n.ms-container .ms-selectable li.ms-elem-selection,\n.ms-container .ms-selection li.ms-elem-selectable,\n.ms-container .ms-selection li.ms-elem-selection {\n  padding: 9px 15px 6px 15px !important; }\n\n.ms-container .ms-optgroup-label {\n  padding: 5px 0 0 8px !important; }\n\n/* Card ======================================== */\n.card {\n  background: #fff;\n  min-height: 50px;\n  box-shadow: none;\n  position: relative;\n  margin-bottom: 30px;\n  border-radius: 2px; }\n\n.card .card-inside-title {\n  margin-top: 25px;\n  margin-bottom: 15px;\n  display: block;\n  font-size: 15px;\n  color: #000; }\n\n.card .card-inside-title small {\n  color: #999;\n  display: block;\n  font-size: 11px;\n  margin-top: 5px; }\n\n.card .card-inside-title small a {\n  color: #777;\n  font-weight: bold; }\n\n.card .card-inside-title:first-child {\n  margin-top: 0; }\n\n.card .bg-red,\n.card .bg-pink,\n.card .bg-purple,\n.card .bg-deep-purple,\n.card .bg-indigo,\n.card .bg-blue,\n.card .bg-light-blue,\n.card .bg-cyan,\n.card .bg-teal,\n.card .bg-green,\n.card .bg-light-green,\n.card .bg-lime,\n.card .bg-yellow,\n.card .bg-amber,\n.card .bg-orange,\n.card .bg-deep-orange,\n.card .bg-brown,\n.card .bg-grey,\n.card .bg-blue-grey,\n.card .bg-black {\n  border-bottom: none !important;\n  color: #fff !important; }\n\n.card .bg-red h2,\n.card .bg-red small,\n.card .bg-red .material-icons,\n.card .bg-pink h2,\n.card .bg-pink small,\n.card .bg-pink .material-icons,\n.card .bg-purple h2,\n.card .bg-purple small,\n.card .bg-purple .material-icons,\n.card .bg-deep-purple h2,\n.card .bg-deep-purple small,\n.card .bg-deep-purple .material-icons,\n.card .bg-indigo h2,\n.card .bg-indigo small,\n.card .bg-indigo .material-icons,\n.card .bg-blue h2,\n.card .bg-blue small,\n.card .bg-blue .material-icons,\n.card .bg-light-blue h2,\n.card .bg-light-blue small,\n.card .bg-light-blue .material-icons,\n.card .bg-cyan h2,\n.card .bg-cyan small,\n.card .bg-cyan .material-icons,\n.card .bg-teal h2,\n.card .bg-teal small,\n.card .bg-teal .material-icons,\n.card .bg-green h2,\n.card .bg-green small,\n.card .bg-green .material-icons,\n.card .bg-light-green h2,\n.card .bg-light-green small,\n.card .bg-light-green .material-icons,\n.card .bg-lime h2,\n.card .bg-lime small,\n.card .bg-lime .material-icons,\n.card .bg-yellow h2,\n.card .bg-yellow small,\n.card .bg-yellow .material-icons,\n.card .bg-amber h2,\n.card .bg-amber small,\n.card .bg-amber .material-icons,\n.card .bg-orange h2,\n.card .bg-orange small,\n.card .bg-orange .material-icons,\n.card .bg-deep-orange h2,\n.card .bg-deep-orange small,\n.card .bg-deep-orange .material-icons,\n.card .bg-brown h2,\n.card .bg-brown small,\n.card .bg-brown .material-icons,\n.card .bg-grey h2,\n.card .bg-grey small,\n.card .bg-grey .material-icons,\n.card .bg-blue-grey h2,\n.card .bg-blue-grey small,\n.card .bg-blue-grey .material-icons,\n.card .bg-black h2,\n.card .bg-black small,\n.card .bg-black .material-icons {\n  color: #fff !important; }\n\n.card .bg-red .badge,\n.card .bg-pink .badge,\n.card .bg-purple .badge,\n.card .bg-deep-purple .badge,\n.card .bg-indigo .badge,\n.card .bg-blue .badge,\n.card .bg-light-blue .badge,\n.card .bg-cyan .badge,\n.card .bg-teal .badge,\n.card .bg-green .badge,\n.card .bg-light-green .badge,\n.card .bg-lime .badge,\n.card .bg-yellow .badge,\n.card .bg-amber .badge,\n.card .bg-orange .badge,\n.card .bg-deep-orange .badge,\n.card .bg-brown .badge,\n.card .bg-grey .badge,\n.card .bg-blue-grey .badge,\n.card .bg-black .badge {\n  background-color: #fff;\n  color: #555; }\n\n.card .header {\n  color: #555;\n  padding: 20px;\n  position: relative;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.35); }\n\n.card .header .header-dropdown {\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  list-style: none; }\n\n.card .header .header-dropdown .dropdown-menu li {\n  display: block !important; }\n\n.card .header .header-dropdown li {\n  display: inline-block; }\n\n.card .header .header-dropdown i {\n  font-size: 20px;\n  color: #999;\n  transition: all 0.5s; }\n\n.card .header .header-dropdown i:hover {\n  color: #000; }\n\n.card .header h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: normal;\n  color: #111; }\n\n.card .header h2 small {\n  display: block;\n  font-size: 12px;\n  margin-top: 5px;\n  color: #999;\n  line-height: 15px; }\n\n.card .header h2 small a {\n  font-weight: bold;\n  color: #777; }\n\n.card .header .col-xs-12 h2 {\n  margin-top: 5px; }\n\n.card .body {\n  font-size: 14px;\n  color: #555;\n  padding: 20px; }\n\n.card .body .col-xs-1,\n.card .body .col-sm-1,\n.card .body .col-md-1,\n.card .body .col-lg-1 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-2,\n.card .body .col-sm-2,\n.card .body .col-md-2,\n.card .body .col-lg-2 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-3,\n.card .body .col-sm-3,\n.card .body .col-md-3,\n.card .body .col-lg-3 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-4,\n.card .body .col-sm-4,\n.card .body .col-md-4,\n.card .body .col-lg-4 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-5,\n.card .body .col-sm-5,\n.card .body .col-md-5,\n.card .body .col-lg-5 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-6,\n.card .body .col-sm-6,\n.card .body .col-md-6,\n.card .body .col-lg-6 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-7,\n.card .body .col-sm-7,\n.card .body .col-md-7,\n.card .body .col-lg-7 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-8,\n.card .body .col-sm-8,\n.card .body .col-md-8,\n.card .body .col-lg-8 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-9,\n.card .body .col-sm-9,\n.card .body .col-md-9,\n.card .body .col-lg-9 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-10,\n.card .body .col-sm-10,\n.card .body .col-md-10,\n.card .body .col-lg-10 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-11,\n.card .body .col-sm-11,\n.card .body .col-md-11,\n.card .body .col-lg-11 {\n  margin-bottom: 20px; }\n\n.card .body .col-xs-12,\n.card .body .col-sm-12,\n.card .body .col-md-12,\n.card .body .col-lg-12 {\n  margin-bottom: 20px; }\n\n/* Infobox ===================================== */\n.info-box {\n  box-shadow: none;\n  height: 80px;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: default;\n  background-color: #fff;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 30px; }\n\n.info-box .icon {\n  display: inline-block;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.12);\n  width: 80px; }\n\n.info-box .icon i {\n  color: #fff;\n  font-size: 50px;\n  line-height: 80px; }\n\n.info-box .icon .chart.chart-bar {\n  height: 100%;\n  line-height: 100px; }\n\n.info-box .icon .chart.chart-bar canvas {\n  vertical-align: baseline !important; }\n\n.info-box .icon .chart.chart-pie {\n  height: 100%;\n  line-height: 123px; }\n\n.info-box .icon .chart.chart-pie canvas {\n  vertical-align: baseline !important; }\n\n.info-box .icon .chart.chart-line {\n  height: 100%;\n  line-height: 115px; }\n\n.info-box .icon .chart.chart-line canvas {\n  vertical-align: baseline !important; }\n\n.info-box .content {\n  display: inline-block;\n  padding: 7px 10px; }\n\n.info-box .content .text {\n  font-size: 13px;\n  margin-top: 11px;\n  color: #555; }\n\n.info-box .content .number {\n  font-weight: normal;\n  font-size: 26px;\n  margin-top: -4px;\n  color: #555; }\n\n.info-box.hover-zoom-effect .icon {\n  overflow: hidden; }\n\n.info-box.hover-zoom-effect .icon i {\n  transition: all 0.3s ease; }\n\n.info-box.hover-zoom-effect:hover .icon i {\n  opacity: 0.4;\n  transform: rotate(-32deg) scale(1.4); }\n\n.info-box.hover-expand-effect:after {\n  background-color: rgba(0, 0, 0, 0.05);\n  content: \".\";\n  position: absolute;\n  left: 80px;\n  top: 0;\n  width: 0;\n  height: 100%;\n  color: transparent;\n  transition: all 0.95s; }\n\n.info-box.hover-expand-effect:hover:after {\n  width: 100%; }\n\n.info-box-2 {\n  box-shadow: none;\n  height: 80px;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: default;\n  background-color: #fff;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 30px; }\n\n.info-box-2 .icon {\n  display: inline-block;\n  text-align: center;\n  width: 80px; }\n\n.info-box-2 .icon i {\n  color: #fff;\n  font-size: 50px;\n  line-height: 80px; }\n\n.info-box-2 .chart.chart-bar {\n  height: 100%;\n  line-height: 105px; }\n\n.info-box-2 .chart.chart-bar canvas {\n  vertical-align: baseline !important; }\n\n.info-box-2 .chart.chart-pie {\n  height: 100%;\n  line-height: 123px; }\n\n.info-box-2 .chart.chart-pie canvas {\n  vertical-align: baseline !important; }\n\n.info-box-2 .chart.chart-line {\n  height: 100%;\n  line-height: 115px; }\n\n.info-box-2 .chart.chart-line canvas {\n  vertical-align: baseline !important; }\n\n.info-box-2 .content {\n  display: inline-block;\n  padding: 7px 10px; }\n\n.info-box-2 .content .text {\n  font-size: 13px;\n  margin-top: 11px;\n  color: #555; }\n\n.info-box-2 .content .number {\n  font-weight: normal;\n  font-size: 26px;\n  margin-top: -4px;\n  color: #555; }\n\n.info-box-2.hover-zoom-effect .icon {\n  overflow: hidden; }\n\n.info-box-2.hover-zoom-effect .icon i {\n  transition: all 0.3s ease; }\n\n.info-box-2.hover-zoom-effect:hover .icon i {\n  opacity: 0.4;\n  transform: rotate(-32deg) scale(1.4); }\n\n.info-box-2.hover-expand-effect:after {\n  background-color: rgba(0, 0, 0, 0.05);\n  content: \".\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 100%;\n  color: transparent;\n  transition: all 0.95s; }\n\n.info-box-2.hover-expand-effect:hover:after {\n  width: 100%; }\n\n.info-box-3 {\n  box-shadow: none;\n  height: 80px;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: default;\n  background-color: #fff;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 30px; }\n\n.info-box-3 .icon {\n  position: absolute;\n  right: 10px;\n  bottom: 2px;\n  text-align: center; }\n\n.info-box-3 .icon i {\n  color: rgba(0, 0, 0, 0.15);\n  font-size: 60px; }\n\n.info-box-3 .chart {\n  margin-right: 5px; }\n\n.info-box-3 .chart.chart-bar {\n  height: 100%;\n  line-height: 50px; }\n\n.info-box-3 .chart.chart-bar canvas {\n  vertical-align: baseline !important; }\n\n.info-box-3 .chart.chart-pie {\n  height: 100%;\n  line-height: 34px; }\n\n.info-box-3 .chart.chart-pie canvas {\n  vertical-align: baseline !important; }\n\n.info-box-3 .chart.chart-line {\n  height: 100%;\n  line-height: 40px; }\n\n.info-box-3 .chart.chart-line canvas {\n  vertical-align: baseline !important; }\n\n.info-box-3 .content {\n  display: inline-block;\n  padding: 7px 16px; }\n\n.info-box-3 .content .text {\n  font-size: 13px;\n  margin-top: 11px;\n  color: #555; }\n\n.info-box-3 .content .number {\n  font-weight: normal;\n  font-size: 26px;\n  margin-top: -4px;\n  color: #555; }\n\n.info-box-3.hover-zoom-effect .icon i {\n  transition: all 0.3s ease; }\n\n.info-box-3.hover-zoom-effect:hover .icon i {\n  opacity: 0.4;\n  transform: rotate(-32deg) scale(1.4); }\n\n.info-box-3.hover-expand-effect:after {\n  background-color: rgba(0, 0, 0, 0.05);\n  content: \".\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 100%;\n  color: transparent;\n  transition: all 0.95s; }\n\n.info-box-3.hover-expand-effect:hover:after {\n  width: 100%; }\n\n.info-box-4 {\n  box-shadow: none;\n  height: 80px;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: default;\n  background-color: #fff;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 30px; }\n\n.info-box-4 .icon {\n  position: absolute;\n  right: 10px;\n  bottom: 2px;\n  text-align: center; }\n\n.info-box-4 .icon i {\n  color: rgba(0, 0, 0, 0.15);\n  font-size: 60px; }\n\n.info-box-4 .chart {\n  margin-right: 5px; }\n\n.info-box-4 .chart.chart-bar {\n  height: 100%;\n  line-height: 50px; }\n\n.info-box-4 .chart.chart-bar canvas {\n  vertical-align: baseline !important; }\n\n.info-box-4 .chart.chart-pie {\n  height: 100%;\n  line-height: 34px; }\n\n.info-box-4 .chart.chart-pie canvas {\n  vertical-align: baseline !important; }\n\n.info-box-4 .chart.chart-line {\n  height: 100%;\n  line-height: 40px; }\n\n.info-box-4 .chart.chart-line canvas {\n  vertical-align: baseline !important; }\n\n.info-box-4 .content {\n  display: inline-block;\n  padding: 7px 16px; }\n\n.info-box-4 .content .text {\n  font-size: 13px;\n  margin-top: 11px;\n  color: #555; }\n\n.info-box-4 .content .number {\n  font-weight: normal;\n  font-size: 26px;\n  margin-top: -4px;\n  color: #555; }\n\n.info-box-4.hover-zoom-effect .icon i {\n  transition: all 0.3s ease; }\n\n.info-box-4.hover-zoom-effect:hover .icon i {\n  opacity: 0.4;\n  transform: rotate(-32deg) scale(1.4); }\n\n.info-box-4.hover-expand-effect:after {\n  background-color: rgba(0, 0, 0, 0.05);\n  content: \".\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 100%;\n  color: transparent;\n  transition: all 0.95s; }\n\n.info-box-4.hover-expand-effect:hover:after {\n  width: 100%; }\n\n/* Alerts ====================================== */\n.alert {\n  border-radius: 0;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  color: #fff !important; }\n\n.alert .alert-link {\n  color: #fff;\n  text-decoration: underline;\n  font-weight: bold; }\n\n.alert-success {\n  background-color: #2b982b; }\n\n.alert-info {\n  background-color: #00b0e4; }\n\n.alert-warning {\n  background-color: #ff9600 !important; }\n\n.alert-danger {\n  background-color: #fb483a !important; }\n\n.alert-dismissible .close {\n  color: #fff;\n  opacity: 1;\n  border: none;\n  text-shadow: none; }\n\n/* Dialogs (SweetAlert) ======================== */\n.sweet-alert {\n  border-radius: 0 !important; }\n\n.sweet-alert p {\n  font-size: 14px !important; }\n\n.sweet-alert .sa-input-error {\n  top: 23px !important;\n  right: 13px !important; }\n\n.sweet-alert h2 {\n  font-size: 18px !important;\n  margin: 0 0 5px 0 !important; }\n\n.sweet-alert button {\n  font-size: 15px !important;\n  border-radius: 0 !important;\n  padding: 5px 20px !important; }\n\n/* Checkbox & Radio ============================ */\n[type=\"checkbox\"] + label {\n  padding-left: 26px;\n  height: 25px;\n  line-height: 21px;\n  font-size: 13px;\n  font-weight: normal; }\n\n[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -2px;\n  width: 11px;\n  height: 19px; }\n\n[type=\"checkbox\"]:checked.chk-col-red + label:before {\n  border-right: 2px solid #f44336;\n  border-bottom: 2px solid #f44336; }\n\n[type=\"checkbox\"]:checked.chk-col-pink + label:before {\n  border-right: 2px solid #e91e63;\n  border-bottom: 2px solid #e91e63; }\n\n[type=\"checkbox\"]:checked.chk-col-purple + label:before {\n  border-right: 2px solid #9c27b0;\n  border-bottom: 2px solid #9c27b0; }\n\n[type=\"checkbox\"]:checked.chk-col-deep-purple + label:before {\n  border-right: 2px solid #673ab7;\n  border-bottom: 2px solid #673ab7; }\n\n[type=\"checkbox\"]:checked.chk-col-indigo + label:before {\n  border-right: 2px solid #3f51b5;\n  border-bottom: 2px solid #3f51b5; }\n\n[type=\"checkbox\"]:checked.chk-col-blue + label:before {\n  border-right: 2px solid #336699;\n  border-bottom: 2px solid #336699; }\n\n[type=\"checkbox\"]:checked.chk-col-light-blue + label:before {\n  border-right: 2px solid #03a9f4;\n  border-bottom: 2px solid #03a9f4; }\n\n[type=\"checkbox\"]:checked.chk-col-cyan + label:before {\n  border-right: 2px solid #00bcd4;\n  border-bottom: 2px solid #00bcd4; }\n\n[type=\"checkbox\"]:checked.chk-col-teal + label:before {\n  border-right: 2px solid #009688;\n  border-bottom: 2px solid #009688; }\n\n[type=\"checkbox\"]:checked.chk-col-green + label:before {\n  border-right: 2px solid #4caf50;\n  border-bottom: 2px solid #4caf50; }\n\n[type=\"checkbox\"]:checked.chk-col-light-green + label:before {\n  border-right: 2px solid #8bc34a;\n  border-bottom: 2px solid #8bc34a; }\n\n[type=\"checkbox\"]:checked.chk-col-lime + label:before {\n  border-right: 2px solid #cddc39;\n  border-bottom: 2px solid #cddc39; }\n\n[type=\"checkbox\"]:checked.chk-col-yellow + label:before {\n  border-right: 2px solid #ffe821;\n  border-bottom: 2px solid #ffe821; }\n\n[type=\"checkbox\"]:checked.chk-col-amber + label:before {\n  border-right: 2px solid #ffc107;\n  border-bottom: 2px solid #ffc107; }\n\n[type=\"checkbox\"]:checked.chk-col-orange + label:before {\n  border-right: 2px solid #ff9800;\n  border-bottom: 2px solid #ff9800; }\n\n[type=\"checkbox\"]:checked.chk-col-deep-orange + label:before {\n  border-right: 2px solid #ff5722;\n  border-bottom: 2px solid #ff5722; }\n\n[type=\"checkbox\"]:checked.chk-col-brown + label:before {\n  border-right: 2px solid #795548;\n  border-bottom: 2px solid #795548; }\n\n[type=\"checkbox\"]:checked.chk-col-grey + label:before {\n  border-right: 2px solid #9e9e9e;\n  border-bottom: 2px solid #9e9e9e; }\n\n[type=\"checkbox\"]:checked.chk-col-blue-grey + label:before {\n  border-right: 2px solid #607d8b;\n  border-bottom: 2px solid #607d8b; }\n\n[type=\"checkbox\"]:checked.chk-col-black + label:before {\n  border-right: 2px solid #000000;\n  border-bottom: 2px solid #000000; }\n\n[type=\"checkbox\"]:checked.chk-col-white + label:before {\n  border-right: 2px solid #ffffff;\n  border-bottom: 2px solid #ffffff; }\n\n[type=\"checkbox\"].filled-in:checked + label:after {\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0; }\n\n[type=\"checkbox\"].filled-in:checked + label:before {\n  border-right: 2px solid #fff !important;\n  border-bottom: 2px solid #fff !important; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-red + label:after {\n  border: 2px solid #f44336;\n  background-color: #f44336; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-pink + label:after {\n  border: 2px solid #e91e63;\n  background-color: #e91e63; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-purple + label:after {\n  border: 2px solid #9c27b0;\n  background-color: #9c27b0; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-deep-purple + label:after {\n  border: 2px solid #673ab7;\n  background-color: #673ab7; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-indigo + label:after {\n  border: 2px solid #3f51b5;\n  background-color: #3f51b5; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-blue + label:after {\n  border: 2px solid #336699;\n  background-color: #336699; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-light-blue + label:after {\n  border: 2px solid #03a9f4;\n  background-color: #03a9f4; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-cyan + label:after {\n  border: 2px solid #00bcd4;\n  background-color: #00bcd4; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-teal + label:after {\n  border: 2px solid #009688;\n  background-color: #009688; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-green + label:after {\n  border: 2px solid #4caf50;\n  background-color: #4caf50; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-light-green + label:after {\n  border: 2px solid #8bc34a;\n  background-color: #8bc34a; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-lime + label:after {\n  border: 2px solid #cddc39;\n  background-color: #cddc39; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-yellow + label:after {\n  border: 2px solid #ffe821;\n  background-color: #ffe821; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-amber + label:after {\n  border: 2px solid #ffc107;\n  background-color: #ffc107; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-orange + label:after {\n  border: 2px solid #ff9800;\n  background-color: #ff9800; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-deep-orange + label:after {\n  border: 2px solid #ff5722;\n  background-color: #ff5722; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-brown + label:after {\n  border: 2px solid #795548;\n  background-color: #795548; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-grey + label:after {\n  border: 2px solid #9e9e9e;\n  background-color: #9e9e9e; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-blue-grey + label:after {\n  border: 2px solid #607d8b;\n  background-color: #607d8b; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-black + label:after {\n  border: 2px solid #000000;\n  background-color: #000000; }\n\n[type=\"checkbox\"].filled-in:checked.chk-col-white + label:after {\n  border: 2px solid #ffffff;\n  background-color: #ffffff; }\n\n[type=\"radio\"]:not(:checked) + label {\n  padding-left: 26px;\n  height: 25px;\n  line-height: 25px;\n  font-size: 13px;\n  font-weight: normal; }\n\n[type=\"radio\"]:checked + label {\n  padding-left: 26px;\n  height: 25px;\n  line-height: 25px;\n  font-size: 13px;\n  font-weight: normal; }\n\n[type=\"radio\"].radio-col-red:checked + label:after {\n  background-color: #f44336;\n  border-color: #f44336; }\n\n[type=\"radio\"].radio-col-pink:checked + label:after {\n  background-color: #e91e63;\n  border-color: #e91e63; }\n\n[type=\"radio\"].radio-col-purple:checked + label:after {\n  background-color: #9c27b0;\n  border-color: #9c27b0; }\n\n[type=\"radio\"].radio-col-deep-purple:checked + label:after {\n  background-color: #673ab7;\n  border-color: #673ab7; }\n\n[type=\"radio\"].radio-col-indigo:checked + label:after {\n  background-color: #3f51b5;\n  border-color: #3f51b5; }\n\n[type=\"radio\"].radio-col-blue:checked + label:after {\n  background-color: #336699;\n  border-color: #336699; }\n\n[type=\"radio\"].radio-col-light-blue:checked + label:after {\n  background-color: #03a9f4;\n  border-color: #03a9f4; }\n\n[type=\"radio\"].radio-col-cyan:checked + label:after {\n  background-color: #00bcd4;\n  border-color: #00bcd4; }\n\n[type=\"radio\"].radio-col-teal:checked + label:after {\n  background-color: #009688;\n  border-color: #009688; }\n\n[type=\"radio\"].radio-col-green:checked + label:after {\n  background-color: #4caf50;\n  border-color: #4caf50; }\n\n[type=\"radio\"].radio-col-light-green:checked + label:after {\n  background-color: #8bc34a;\n  border-color: #8bc34a; }\n\n[type=\"radio\"].radio-col-lime:checked + label:after {\n  background-color: #cddc39;\n  border-color: #cddc39; }\n\n[type=\"radio\"].radio-col-yellow:checked + label:after {\n  background-color: #ffe821;\n  border-color: #ffe821; }\n\n[type=\"radio\"].radio-col-amber:checked + label:after {\n  background-color: #ffc107;\n  border-color: #ffc107; }\n\n[type=\"radio\"].radio-col-orange:checked + label:after {\n  background-color: #ff9800;\n  border-color: #ff9800; }\n\n[type=\"radio\"].radio-col-deep-orange:checked + label:after {\n  background-color: #ff5722;\n  border-color: #ff5722; }\n\n[type=\"radio\"].radio-col-brown:checked + label:after {\n  background-color: #795548;\n  border-color: #795548; }\n\n[type=\"radio\"].radio-col-grey:checked + label:after {\n  background-color: #9e9e9e;\n  border-color: #9e9e9e; }\n\n[type=\"radio\"].radio-col-blue-grey:checked + label:after {\n  background-color: #607d8b;\n  border-color: #607d8b; }\n\n[type=\"radio\"].radio-col-black:checked + label:after {\n  background-color: #000000;\n  border-color: #000000; }\n\n[type=\"radio\"].radio-col-white:checked + label:after {\n  background-color: #ffffff;\n  border-color: #ffffff; }\n\n[type=\"radio\"].with-gap.radio-col-red:checked + label:before {\n  border: 2px solid #f44336; }\n\n[type=\"radio\"].with-gap.radio-col-red:checked + label:after {\n  background-color: #f44336;\n  border: 2px solid #f44336; }\n\n[type=\"radio\"].with-gap.radio-col-pink:checked + label:before {\n  border: 2px solid #e91e63; }\n\n[type=\"radio\"].with-gap.radio-col-pink:checked + label:after {\n  background-color: #e91e63;\n  border: 2px solid #e91e63; }\n\n[type=\"radio\"].with-gap.radio-col-purple:checked + label:before {\n  border: 2px solid #9c27b0; }\n\n[type=\"radio\"].with-gap.radio-col-purple:checked + label:after {\n  background-color: #9c27b0;\n  border: 2px solid #9c27b0; }\n\n[type=\"radio\"].with-gap.radio-col-deep-purple:checked + label:before {\n  border: 2px solid #673ab7; }\n\n[type=\"radio\"].with-gap.radio-col-deep-purple:checked + label:after {\n  background-color: #673ab7;\n  border: 2px solid #673ab7; }\n\n[type=\"radio\"].with-gap.radio-col-indigo:checked + label:before {\n  border: 2px solid #3f51b5; }\n\n[type=\"radio\"].with-gap.radio-col-indigo:checked + label:after {\n  background-color: #3f51b5;\n  border: 2px solid #3f51b5; }\n\n[type=\"radio\"].with-gap.radio-col-blue:checked + label:before {\n  border: 2px solid #336699; }\n\n[type=\"radio\"].with-gap.radio-col-blue:checked + label:after {\n  background-color: #336699;\n  border: 2px solid #336699; }\n\n[type=\"radio\"].with-gap.radio-col-light-blue:checked + label:before {\n  border: 2px solid #03a9f4; }\n\n[type=\"radio\"].with-gap.radio-col-light-blue:checked + label:after {\n  background-color: #03a9f4;\n  border: 2px solid #03a9f4; }\n\n[type=\"radio\"].with-gap.radio-col-cyan:checked + label:before {\n  border: 2px solid #00bcd4; }\n\n[type=\"radio\"].with-gap.radio-col-cyan:checked + label:after {\n  background-color: #00bcd4;\n  border: 2px solid #00bcd4; }\n\n[type=\"radio\"].with-gap.radio-col-teal:checked + label:before {\n  border: 2px solid #009688; }\n\n[type=\"radio\"].with-gap.radio-col-teal:checked + label:after {\n  background-color: #009688;\n  border: 2px solid #009688; }\n\n[type=\"radio\"].with-gap.radio-col-green:checked + label:before {\n  border: 2px solid #4caf50; }\n\n[type=\"radio\"].with-gap.radio-col-green:checked + label:after {\n  background-color: #4caf50;\n  border: 2px solid #4caf50; }\n\n[type=\"radio\"].with-gap.radio-col-light-green:checked + label:before {\n  border: 2px solid #8bc34a; }\n\n[type=\"radio\"].with-gap.radio-col-light-green:checked + label:after {\n  background-color: #8bc34a;\n  border: 2px solid #8bc34a; }\n\n[type=\"radio\"].with-gap.radio-col-lime:checked + label:before {\n  border: 2px solid #cddc39; }\n\n[type=\"radio\"].with-gap.radio-col-lime:checked + label:after {\n  background-color: #cddc39;\n  border: 2px solid #cddc39; }\n\n[type=\"radio\"].with-gap.radio-col-yellow:checked + label:before {\n  border: 2px solid #ffe821; }\n\n[type=\"radio\"].with-gap.radio-col-yellow:checked + label:after {\n  background-color: #ffe821;\n  border: 2px solid #ffe821; }\n\n[type=\"radio\"].with-gap.radio-col-amber:checked + label:before {\n  border: 2px solid #ffc107; }\n\n[type=\"radio\"].with-gap.radio-col-amber:checked + label:after {\n  background-color: #ffc107;\n  border: 2px solid #ffc107; }\n\n[type=\"radio\"].with-gap.radio-col-orange:checked + label:before {\n  border: 2px solid #ff9800; }\n\n[type=\"radio\"].with-gap.radio-col-orange:checked + label:after {\n  background-color: #ff9800;\n  border: 2px solid #ff9800; }\n\n[type=\"radio\"].with-gap.radio-col-deep-orange:checked + label:before {\n  border: 2px solid #ff5722; }\n\n[type=\"radio\"].with-gap.radio-col-deep-orange:checked + label:after {\n  background-color: #ff5722;\n  border: 2px solid #ff5722; }\n\n[type=\"radio\"].with-gap.radio-col-brown:checked + label:before {\n  border: 2px solid #795548; }\n\n[type=\"radio\"].with-gap.radio-col-brown:checked + label:after {\n  background-color: #795548;\n  border: 2px solid #795548; }\n\n[type=\"radio\"].with-gap.radio-col-grey:checked + label:before {\n  border: 2px solid #9e9e9e; }\n\n[type=\"radio\"].with-gap.radio-col-grey:checked + label:after {\n  background-color: #9e9e9e;\n  border: 2px solid #9e9e9e; }\n\n[type=\"radio\"].with-gap.radio-col-blue-grey:checked + label:before {\n  border: 2px solid #607d8b; }\n\n[type=\"radio\"].with-gap.radio-col-blue-grey:checked + label:after {\n  background-color: #607d8b;\n  border: 2px solid #607d8b; }\n\n[type=\"radio\"].with-gap.radio-col-black:checked + label:before {\n  border: 2px solid #000000; }\n\n[type=\"radio\"].with-gap.radio-col-black:checked + label:after {\n  background-color: #000000;\n  border: 2px solid #000000; }\n\n[type=\"radio\"].with-gap.radio-col-white:checked + label:before {\n  border: 2px solid #ffffff; }\n\n[type=\"radio\"].with-gap.radio-col-white:checked + label:after {\n  background-color: #ffffff;\n  border: 2px solid #ffffff; }\n\n/* Switch ====================================== */\n.switch label {\n  font-weight: normal;\n  font-size: 13px; }\n\n.switch label .lever {\n  margin: 0 14px; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-red:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-red {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-red:after {\n  background-color: #f44336; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-pink:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-pink {\n  background-color: rgba(233, 30, 99, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-pink:after {\n  background-color: #e91e63; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-purple:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-purple {\n  background-color: rgba(156, 39, 176, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-purple:after {\n  background-color: #9c27b0; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-deep-purple:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-deep-purple {\n  background-color: rgba(103, 58, 183, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-deep-purple:after {\n  background-color: #673ab7; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-indigo:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-indigo {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-indigo:after {\n  background-color: #3f51b5; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-blue:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-blue {\n  background-color: rgba(33, 150, 243, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-blue:after {\n  background-color: #336699; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-light-blue:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-light-blue {\n  background-color: rgba(3, 169, 244, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-light-blue:after {\n  background-color: #03a9f4; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-cyan:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-cyan {\n  background-color: rgba(0, 188, 212, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-cyan:after {\n  background-color: #00bcd4; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-teal:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-teal {\n  background-color: rgba(0, 150, 136, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-teal:after {\n  background-color: #009688; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-green:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-green {\n  background-color: rgba(76, 175, 80, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-green:after {\n  background-color: #4caf50; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-light-green:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-light-green {\n  background-color: rgba(139, 195, 74, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-light-green:after {\n  background-color: #8bc34a; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-lime:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-lime {\n  background-color: rgba(205, 220, 57, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-lime:after {\n  background-color: #cddc39; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-yellow:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-yellow {\n  background-color: rgba(255, 232, 33, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-yellow:after {\n  background-color: #ffe821; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-amber:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-amber {\n  background-color: rgba(255, 193, 7, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-amber:after {\n  background-color: #ffc107; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-orange:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-orange {\n  background-color: rgba(255, 152, 0, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-orange:after {\n  background-color: #ff9800; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-deep-orange:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-deep-orange {\n  background-color: rgba(255, 87, 34, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-deep-orange:after {\n  background-color: #ff5722; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-brown:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-brown {\n  background-color: rgba(121, 85, 72, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-brown:after {\n  background-color: #795548; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-grey:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-grey {\n  background-color: rgba(158, 158, 158, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-grey:after {\n  background-color: #9e9e9e; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-blue-grey:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-blue-grey {\n  background-color: rgba(96, 125, 139, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-blue-grey:after {\n  background-color: #607d8b; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-black:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-black {\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-black:after {\n  background-color: #000000; }\n\n.switch label input[type=checkbox]:checked:not(:disabled) ~ .lever.switch-col-white:active:after {\n  box-shadow: none; }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-white {\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.switch label input[type=checkbox]:checked + .lever.switch-col-white:after {\n  background-color: #ffffff; }\n\n/* DateTime Picker ============================= */\n.dtp div.dtp-date,\n.dtp div.dtp-time {\n  background: #007d72; }\n\n.dtp > .dtp-content > .dtp-date-view > header.dtp-header {\n  background: #009688; }\n\n.dtp .dtp-buttons .dtp-btn-ok {\n  margin-left: 10px; }\n\n.dtp .dtp-buttons .dtp-btn-clear {\n  margin-right: 10px !important; }\n\n.dtp .p10 > a {\n  color: #fff; }\n\n.dtp div.dtp-actual-year {\n  font-size: 1.5em;\n  color: #ffffff; }\n\n.dtp table.dtp-picker-days tr td a.selected {\n  background: #007d72;\n  color: #fff; }\n\n/* Bootstrap Select ============================ */\n.bootstrap-select {\n  box-shadow: none !important;\n  border-bottom: 1px solid #ddd !important;\n  border-radius: 0; }\n\n.bootstrap-select .dropdown-toggle:focus,\n.bootstrap-select .dropdown-toggle:active {\n  outline: none !important; }\n\n.bootstrap-select .bs-searchbox,\n.bootstrap-select .bs-actionsbox,\n.bootstrap-select .bs-donebutton {\n  padding: 0 0 5px 0;\n  border-bottom: 1px solid #e9e9e9; }\n\n.bootstrap-select .bs-searchbox .form-control,\n.bootstrap-select .bs-actionsbox .form-control,\n.bootstrap-select .bs-donebutton .form-control {\n  border-radius: 0;\n  -ms-box-shadow: none !important;\n  box-shadow: none !important;\n  border: none;\n  margin-left: 30px; }\n\n.bootstrap-select .bs-searchbox {\n  position: relative; }\n\n.bootstrap-select .bs-searchbox:after {\n  content: '\\E8B6';\n  font-family: 'PT Sans';\n  position: absolute;\n  top: 0;\n  left: 10px;\n  font-size: 25px; }\n\n.bootstrap-select ul.dropdown-menu {\n  margin-top: 0 !important; }\n\n.bootstrap-select .dropdown-menu li.selected a {\n  background-color: #eee !important;\n  color: #555 !important; }\n\n.bootstrap-select .dropdown-menu .active a {\n  background-color: transparent;\n  color: #333 !important; }\n\n.bootstrap-select .dropdown-menu .notify {\n  background-color: #f44336 !important;\n  color: #fff !important;\n  border: none !important; }\n\n.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark {\n  margin-top: 9px; }\n\n/* Tooltip & Popovers ========================== */\n.tooltip {\n  font-size: 13px; }\n\n.tooltip .tooltip-inner {\n  border-radius: 0; }\n\n.popover {\n  border-radius: 0;\n  border: 1px solid rgba(0, 0, 0, 0.08); }\n\n.popover .popover-title {\n  font-weight: bold;\n  border-radius: 0;\n  background-color: #e9e9e9;\n  border-bottom: 1px solid #ddd; }\n\n.popover .popover-content {\n  font-size: 13px;\n  color: #777;\n  border-radius: 0; }\n\n/* Nav Tabs ==================================== */\n.nav-tabs {\n  border-bottom: 2px solid #eee; }\n\n.nav-tabs > li {\n  position: relative;\n  top: 3px;\n  left: -2px; }\n\n.nav-tabs > li > a {\n  border: none !important;\n  color: #999 !important;\n  border-radius: 0; }\n\n.nav-tabs > li > a:hover,\n.nav-tabs > li > a:active,\n.nav-tabs > li > a:focus {\n  background-color: transparent !important; }\n\n.nav-tabs > li > a:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 0;\n  border-bottom: 2px solid #336699;\n  bottom: 2px;\n  transform: scaleX(0);\n  transition: 0.1s ease-in; }\n\n.nav-tabs > li > a .material-icons {\n  position: relative;\n  top: 7px;\n  margin-bottom: 8px; }\n\n.nav-tabs li.active a {\n  color: #222 !important; }\n\n.nav-tabs li.active a:hover,\n.nav-tabs li.active a:active,\n.nav-tabs li.active a:focus {\n  background-color: transparent !important; }\n\n.nav-tabs li.active a:before {\n  transform: scaleX(1); }\n\n.nav-tabs + .tab-content {\n  padding: 15px 0; }\n\n.nav-tabs.tab-col-red > li > a:before {\n  border-bottom: 2px solid #f44336; }\n\n.nav-tabs.tab-col-pink > li > a:before {\n  border-bottom: 2px solid #e91e63; }\n\n.nav-tabs.tab-col-purple > li > a:before {\n  border-bottom: 2px solid #9c27b0; }\n\n.nav-tabs.tab-col-deep-purple > li > a:before {\n  border-bottom: 2px solid #673ab7; }\n\n.nav-tabs.tab-col-indigo > li > a:before {\n  border-bottom: 2px solid #3f51b5; }\n\n.nav-tabs.tab-col-blue > li > a:before {\n  border-bottom: 2px solid #336699; }\n\n.nav-tabs.tab-col-light-blue > li > a:before {\n  border-bottom: 2px solid #03a9f4; }\n\n.nav-tabs.tab-col-cyan > li > a:before {\n  border-bottom: 2px solid #00bcd4; }\n\n.nav-tabs.tab-col-teal > li > a:before {\n  border-bottom: 2px solid #009688; }\n\n.nav-tabs.tab-col-green > li > a:before {\n  border-bottom: 2px solid #4caf50; }\n\n.nav-tabs.tab-col-light-green > li > a:before {\n  border-bottom: 2px solid #8bc34a; }\n\n.nav-tabs.tab-col-lime > li > a:before {\n  border-bottom: 2px solid #cddc39; }\n\n.nav-tabs.tab-col-yellow > li > a:before {\n  border-bottom: 2px solid #ffe821; }\n\n.nav-tabs.tab-col-amber > li > a:before {\n  border-bottom: 2px solid #ffc107; }\n\n.nav-tabs.tab-col-orange > li > a:before {\n  border-bottom: 2px solid #ff9800; }\n\n.nav-tabs.tab-col-deep-orange > li > a:before {\n  border-bottom: 2px solid #ff5722; }\n\n.nav-tabs.tab-col-brown > li > a:before {\n  border-bottom: 2px solid #795548; }\n\n.nav-tabs.tab-col-grey > li > a:before {\n  border-bottom: 2px solid #9e9e9e; }\n\n.nav-tabs.tab-col-blue-grey > li > a:before {\n  border-bottom: 2px solid #607d8b; }\n\n.nav-tabs.tab-col-black > li > a:before {\n  border-bottom: 2px solid #000000; }\n\n.nav-tabs.tab-col-white > li > a:before {\n  border-bottom: 2px solid #ffffff; }\n\n/* Thumbnails ================================== */\n.thumbnail {\n  border-radius: 0; }\n\n.thumbnail p:not(button) {\n  color: #999999;\n  font-size: 14px; }\n\n.thumbnail h3 {\n  font-weight: bold;\n  font-size: 17px; }\n\n/* Modals ====================================== */\n.modal .modal-header {\n  border: none;\n  padding: 25px 25px 5px 25px; }\n\n.modal .modal-header .modal-title {\n  font-weight: bold;\n  font-size: 16px; }\n\n.modal .modal-content {\n  border-radius: 0;\n  box-shadow: none;\n  border: none; }\n\n.modal .modal-content .modal-body {\n  color: #777;\n  padding: 15px 25px; }\n\n.modal .modal-footer {\n  border: none; }\n\n.modal-col-red {\n  background-color: #f44336; }\n\n.modal-col-red .modal-body,\n.modal-col-red .modal-title {\n  color: #fff !important; }\n\n.modal-col-red .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-red .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-red .modal-footer .btn-link:hover,\n.modal-col-red .modal-footer .btn-link:active,\n.modal-col-red .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-pink {\n  background-color: #e91e63; }\n\n.modal-col-pink .modal-body,\n.modal-col-pink .modal-title {\n  color: #fff !important; }\n\n.modal-col-pink .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-pink .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-pink .modal-footer .btn-link:hover,\n.modal-col-pink .modal-footer .btn-link:active,\n.modal-col-pink .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-purple {\n  background-color: #9c27b0; }\n\n.modal-col-purple .modal-body,\n.modal-col-purple .modal-title {\n  color: #fff !important; }\n\n.modal-col-purple .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-purple .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-purple .modal-footer .btn-link:hover,\n.modal-col-purple .modal-footer .btn-link:active,\n.modal-col-purple .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-deep-purple {\n  background-color: #673ab7; }\n\n.modal-col-deep-purple .modal-body,\n.modal-col-deep-purple .modal-title {\n  color: #fff !important; }\n\n.modal-col-deep-purple .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-deep-purple .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-deep-purple .modal-footer .btn-link:hover,\n.modal-col-deep-purple .modal-footer .btn-link:active,\n.modal-col-deep-purple .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-indigo {\n  background-color: #3f51b5; }\n\n.modal-col-indigo .modal-body,\n.modal-col-indigo .modal-title {\n  color: #fff !important; }\n\n.modal-col-indigo .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-indigo .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-indigo .modal-footer .btn-link:hover,\n.modal-col-indigo .modal-footer .btn-link:active,\n.modal-col-indigo .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-blue {\n  background-color: #336699; }\n\n.modal-col-blue .modal-body,\n.modal-col-blue .modal-title {\n  color: #fff !important; }\n\n.modal-col-blue .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-blue .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-blue .modal-footer .btn-link:hover,\n.modal-col-blue .modal-footer .btn-link:active,\n.modal-col-blue .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-light-blue {\n  background-color: #03a9f4; }\n\n.modal-col-light-blue .modal-body,\n.modal-col-light-blue .modal-title {\n  color: #fff !important; }\n\n.modal-col-light-blue .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-light-blue .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-light-blue .modal-footer .btn-link:hover,\n.modal-col-light-blue .modal-footer .btn-link:active,\n.modal-col-light-blue .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-cyan {\n  background-color: #00bcd4; }\n\n.modal-col-cyan .modal-body,\n.modal-col-cyan .modal-title {\n  color: #fff !important; }\n\n.modal-col-cyan .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-cyan .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-cyan .modal-footer .btn-link:hover,\n.modal-col-cyan .modal-footer .btn-link:active,\n.modal-col-cyan .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-teal {\n  background-color: #009688; }\n\n.modal-col-teal .modal-body,\n.modal-col-teal .modal-title {\n  color: #fff !important; }\n\n.modal-col-teal .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-teal .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-teal .modal-footer .btn-link:hover,\n.modal-col-teal .modal-footer .btn-link:active,\n.modal-col-teal .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-green {\n  background-color: #4caf50; }\n\n.modal-col-green .modal-body,\n.modal-col-green .modal-title {\n  color: #fff !important; }\n\n.modal-col-green .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-green .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-green .modal-footer .btn-link:hover,\n.modal-col-green .modal-footer .btn-link:active,\n.modal-col-green .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-light-green {\n  background-color: #8bc34a; }\n\n.modal-col-light-green .modal-body,\n.modal-col-light-green .modal-title {\n  color: #fff !important; }\n\n.modal-col-light-green .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-light-green .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-light-green .modal-footer .btn-link:hover,\n.modal-col-light-green .modal-footer .btn-link:active,\n.modal-col-light-green .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-lime {\n  background-color: #cddc39; }\n\n.modal-col-lime .modal-body,\n.modal-col-lime .modal-title {\n  color: #fff !important; }\n\n.modal-col-lime .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-lime .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-lime .modal-footer .btn-link:hover,\n.modal-col-lime .modal-footer .btn-link:active,\n.modal-col-lime .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-yellow {\n  background-color: #ffe821; }\n\n.modal-col-yellow .modal-body,\n.modal-col-yellow .modal-title {\n  color: #fff !important; }\n\n.modal-col-yellow .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-yellow .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-yellow .modal-footer .btn-link:hover,\n.modal-col-yellow .modal-footer .btn-link:active,\n.modal-col-yellow .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-amber {\n  background-color: #ffc107; }\n\n.modal-col-amber .modal-body,\n.modal-col-amber .modal-title {\n  color: #fff !important; }\n\n.modal-col-amber .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-amber .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-amber .modal-footer .btn-link:hover,\n.modal-col-amber .modal-footer .btn-link:active,\n.modal-col-amber .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-orange {\n  background-color: #ff9800; }\n\n.modal-col-orange .modal-body,\n.modal-col-orange .modal-title {\n  color: #fff !important; }\n\n.modal-col-orange .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-orange .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-orange .modal-footer .btn-link:hover,\n.modal-col-orange .modal-footer .btn-link:active,\n.modal-col-orange .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-deep-orange {\n  background-color: #ff5722; }\n\n.modal-col-deep-orange .modal-body,\n.modal-col-deep-orange .modal-title {\n  color: #fff !important; }\n\n.modal-col-deep-orange .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-deep-orange .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-deep-orange .modal-footer .btn-link:hover,\n.modal-col-deep-orange .modal-footer .btn-link:active,\n.modal-col-deep-orange .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-brown {\n  background-color: #795548; }\n\n.modal-col-brown .modal-body,\n.modal-col-brown .modal-title {\n  color: #fff !important; }\n\n.modal-col-brown .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-brown .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-brown .modal-footer .btn-link:hover,\n.modal-col-brown .modal-footer .btn-link:active,\n.modal-col-brown .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-grey {\n  background-color: #9e9e9e; }\n\n.modal-col-grey .modal-body,\n.modal-col-grey .modal-title {\n  color: #fff !important; }\n\n.modal-col-grey .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-grey .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-grey .modal-footer .btn-link:hover,\n.modal-col-grey .modal-footer .btn-link:active,\n.modal-col-grey .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-blue-grey {\n  background-color: #607d8b; }\n\n.modal-col-blue-grey .modal-body,\n.modal-col-blue-grey .modal-title {\n  color: #fff !important; }\n\n.modal-col-blue-grey .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-blue-grey .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-blue-grey .modal-footer .btn-link:hover,\n.modal-col-blue-grey .modal-footer .btn-link:active,\n.modal-col-blue-grey .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-black {\n  background-color: #000000; }\n\n.modal-col-black .modal-body,\n.modal-col-black .modal-title {\n  color: #fff !important; }\n\n.modal-col-black .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-black .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-black .modal-footer .btn-link:hover,\n.modal-col-black .modal-footer .btn-link:active,\n.modal-col-black .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-white {\n  background-color: #ffffff; }\n\n.modal-col-white .modal-body,\n.modal-col-white .modal-title {\n  color: #fff !important; }\n\n.modal-col-white .modal-footer {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.modal-col-white .modal-footer .btn-link {\n  color: #fff !important; }\n\n.modal-col-white .modal-footer .btn-link:hover,\n.modal-col-white .modal-footer .btn-link:active,\n.modal-col-white .modal-footer .btn-link:focus {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n/* Labels ====================================== */\n.label {\n  border-radius: 0; }\n\n.label-primary {\n  background-color: #1f91f3; }\n\n.label-success {\n  background-color: #2b982b; }\n\n.label-info {\n  background-color: #00b0e4; }\n\n.label-warning {\n  background-color: #ff9600; }\n\n.label-danger {\n  background-color: #fb483a; }\n\n/* Collapse ==================================== */\n.collapse .well,\n.collapse.in .well,\n.collapsing .well {\n  border-radius: 0;\n  margin-bottom: 0; }\n\n/* Tables ====================================== */\n.table tbody tr td,\n.table tbody tr th {\n  padding: 10px;\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee; }\n\n.table tbody tr.primary td,\n.table tbody tr.primary th {\n  background-color: #1f91f3;\n  color: #fff; }\n\n.table tbody tr.success td,\n.table tbody tr.success th {\n  background-color: #2b982b;\n  color: #fff; }\n\n.table tbody tr.info td,\n.table tbody tr.info th {\n  background-color: #00b0e4;\n  color: #fff; }\n\n.table tbody tr.warning td,\n.table tbody tr.warning th {\n  background-color: #ff9600;\n  color: #fff; }\n\n.table tbody tr.danger td,\n.table tbody tr.danger th {\n  background-color: #fb483a;\n  color: #fff; }\n\n.table thead tr th {\n  padding: 10px;\n  border-bottom: 1px solid #eee; }\n\n.table-bordered {\n  border-top: 1px solid #eee; }\n\n.table-bordered tbody tr td,\n.table-bordered tbody tr th {\n  padding: 10px;\n  border: 1px solid #eee; }\n\n.table-bordered thead tr th {\n  padding: 10px;\n  border: 1px solid #eee; }\n\n/* Panel ======================================= */\n.panel-group .panel-col-red {\n  border: 1px solid #f44336; }\n\n.panel-group .panel-col-red .panel-title {\n  background-color: #f44336 !important;\n  color: #fff; }\n\n.panel-group .panel-col-red .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-pink {\n  border: 1px solid #e91e63; }\n\n.panel-group .panel-col-pink .panel-title {\n  background-color: #e91e63 !important;\n  color: #fff; }\n\n.panel-group .panel-col-pink .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-purple {\n  border: 1px solid #9c27b0; }\n\n.panel-group .panel-col-purple .panel-title {\n  background-color: #9c27b0 !important;\n  color: #fff; }\n\n.panel-group .panel-col-purple .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-deep-purple {\n  border: 1px solid #673ab7; }\n\n.panel-group .panel-col-deep-purple .panel-title {\n  background-color: #673ab7 !important;\n  color: #fff; }\n\n.panel-group .panel-col-deep-purple .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-indigo {\n  border: 1px solid #3f51b5; }\n\n.panel-group .panel-col-indigo .panel-title {\n  background-color: #3f51b5 !important;\n  color: #fff; }\n\n.panel-group .panel-col-indigo .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-blue {\n  border: 1px solid #336699; }\n\n.panel-group .panel-col-blue .panel-title {\n  background-color: #336699 !important;\n  color: #fff; }\n\n.panel-group .panel-col-blue .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-light-blue {\n  border: 1px solid #03a9f4; }\n\n.panel-group .panel-col-light-blue .panel-title {\n  background-color: #03a9f4 !important;\n  color: #fff; }\n\n.panel-group .panel-col-light-blue .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-cyan {\n  border: 1px solid #00bcd4; }\n\n.panel-group .panel-col-cyan .panel-title {\n  background-color: #00bcd4 !important;\n  color: #fff; }\n\n.panel-group .panel-col-cyan .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-teal {\n  border: 1px solid #009688; }\n\n.panel-group .panel-col-teal .panel-title {\n  background-color: #009688 !important;\n  color: #fff; }\n\n.panel-group .panel-col-teal .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-green {\n  border: 1px solid #4caf50; }\n\n.panel-group .panel-col-green .panel-title {\n  background-color: #4caf50 !important;\n  color: #fff; }\n\n.panel-group .panel-col-green .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-light-green {\n  border: 1px solid #8bc34a; }\n\n.panel-group .panel-col-light-green .panel-title {\n  background-color: #8bc34a !important;\n  color: #fff; }\n\n.panel-group .panel-col-light-green .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-lime {\n  border: 1px solid #cddc39; }\n\n.panel-group .panel-col-lime .panel-title {\n  background-color: #cddc39 !important;\n  color: #fff; }\n\n.panel-group .panel-col-lime .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-yellow {\n  border: 1px solid #ffe821; }\n\n.panel-group .panel-col-yellow .panel-title {\n  background-color: #ffe821 !important;\n  color: #fff; }\n\n.panel-group .panel-col-yellow .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-amber {\n  border: 1px solid #ffc107; }\n\n.panel-group .panel-col-amber .panel-title {\n  background-color: #ffc107 !important;\n  color: #fff; }\n\n.panel-group .panel-col-amber .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-orange {\n  border: 1px solid #ff9800; }\n\n.panel-group .panel-col-orange .panel-title {\n  background-color: #ff9800 !important;\n  color: #fff; }\n\n.panel-group .panel-col-orange .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-deep-orange {\n  border: 1px solid #ff5722; }\n\n.panel-group .panel-col-deep-orange .panel-title {\n  background-color: #ff5722 !important;\n  color: #fff; }\n\n.panel-group .panel-col-deep-orange .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-brown {\n  border: 1px solid #795548; }\n\n.panel-group .panel-col-brown .panel-title {\n  background-color: #795548 !important;\n  color: #fff; }\n\n.panel-group .panel-col-brown .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-grey {\n  border: 1px solid #9e9e9e; }\n\n.panel-group .panel-col-grey .panel-title {\n  background-color: #9e9e9e !important;\n  color: #fff; }\n\n.panel-group .panel-col-grey .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-blue-grey {\n  border: 1px solid #607d8b; }\n\n.panel-group .panel-col-blue-grey .panel-title {\n  background-color: #607d8b !important;\n  color: #fff; }\n\n.panel-group .panel-col-blue-grey .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-black {\n  border: 1px solid #000000; }\n\n.panel-group .panel-col-black .panel-title {\n  background-color: #000000 !important;\n  color: #fff; }\n\n.panel-group .panel-col-black .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel-col-white {\n  border: 1px solid #ffffff; }\n\n.panel-group .panel-col-white .panel-title {\n  background-color: #ffffff !important;\n  color: #fff; }\n\n.panel-group .panel-col-white .panel-body {\n  border-top-color: transparent !important; }\n\n.panel-group .panel {\n  border-radius: 0; }\n\n.panel-group .panel .panel-title .material-icons {\n  float: left;\n  line-height: 16px;\n  margin-right: 8px; }\n\n.panel-group .panel .panel-heading {\n  padding: 0;\n  border-radius: 0; }\n\n.panel-group .panel .panel-heading a {\n  display: block;\n  padding: 10px 15px; }\n\n.panel-group .panel .panel-heading a:hover,\n.panel-group .panel .panel-heading a:focus,\n.panel-group .panel .panel-heading a:active {\n  text-decoration: none; }\n\n.panel-group .panel .panel-body {\n  color: #555; }\n\n.panel-group .panel-primary {\n  border: 1px solid #1f91f3; }\n\n.panel-group .panel-primary .panel-title {\n  background-color: #1f91f3; }\n\n.panel-group .panel-success {\n  border: 1px solid #2b982b; }\n\n.panel-group .panel-success .panel-title {\n  background-color: #2b982b;\n  color: #fff; }\n\n.panel-group .panel-warning {\n  border: 1px solid #ff9600; }\n\n.panel-group .panel-warning .panel-title {\n  background-color: #ff9600;\n  color: #fff; }\n\n.panel-group .panel-danger {\n  border: 1px solid #fb483a; }\n\n.panel-group .panel-danger .panel-title {\n  background-color: #fb483a;\n  color: #fff; }\n\n.full-body .panel-col-red .panel-body {\n  border-top-color: #fff !important;\n  background-color: #f44336;\n  color: #fff; }\n\n.full-body .panel-col-pink .panel-body {\n  border-top-color: #fff !important;\n  background-color: #e91e63;\n  color: #fff; }\n\n.full-body .panel-col-purple .panel-body {\n  border-top-color: #fff !important;\n  background-color: #9c27b0;\n  color: #fff; }\n\n.full-body .panel-col-deep-purple .panel-body {\n  border-top-color: #fff !important;\n  background-color: #673ab7;\n  color: #fff; }\n\n.full-body .panel-col-indigo .panel-body {\n  border-top-color: #fff !important;\n  background-color: #3f51b5;\n  color: #fff; }\n\n.full-body .panel-col-blue .panel-body {\n  border-top-color: #fff !important;\n  background-color: #336699;\n  color: #fff; }\n\n.full-body .panel-col-light-blue .panel-body {\n  border-top-color: #fff !important;\n  background-color: #03a9f4;\n  color: #fff; }\n\n.full-body .panel-col-cyan .panel-body {\n  border-top-color: #fff !important;\n  background-color: #00bcd4;\n  color: #fff; }\n\n.full-body .panel-col-teal .panel-body {\n  border-top-color: #fff !important;\n  background-color: #009688;\n  color: #fff; }\n\n.full-body .panel-col-green .panel-body {\n  border-top-color: #fff !important;\n  background-color: #4caf50;\n  color: #fff; }\n\n.full-body .panel-col-light-green .panel-body {\n  border-top-color: #fff !important;\n  background-color: #8bc34a;\n  color: #fff; }\n\n.full-body .panel-col-lime .panel-body {\n  border-top-color: #fff !important;\n  background-color: #cddc39;\n  color: #fff; }\n\n.full-body .panel-col-yellow .panel-body {\n  border-top-color: #fff !important;\n  background-color: #ffe821;\n  color: #fff; }\n\n.full-body .panel-col-amber .panel-body {\n  border-top-color: #fff !important;\n  background-color: #ffc107;\n  color: #fff; }\n\n.full-body .panel-col-orange .panel-body {\n  border-top-color: #fff !important;\n  background-color: #ff9800;\n  color: #fff; }\n\n.full-body .panel-col-deep-orange .panel-body {\n  border-top-color: #fff !important;\n  background-color: #ff5722;\n  color: #fff; }\n\n.full-body .panel-col-brown .panel-body {\n  border-top-color: #fff !important;\n  background-color: #795548;\n  color: #fff; }\n\n.full-body .panel-col-grey .panel-body {\n  border-top-color: #fff !important;\n  background-color: #9e9e9e;\n  color: #fff; }\n\n.full-body .panel-col-blue-grey .panel-body {\n  border-top-color: #fff !important;\n  background-color: #607d8b;\n  color: #fff; }\n\n.full-body .panel-col-black .panel-body {\n  border-top-color: #fff !important;\n  background-color: #000000;\n  color: #fff; }\n\n.full-body .panel-col-white .panel-body {\n  border-top-color: #fff !important;\n  background-color: #ffffff;\n  color: #fff; }\n\n.full-body .panel-primary .panel-body {\n  border-top-color: #fff !important;\n  background-color: #1f91f3;\n  color: #fff; }\n\n.full-body .panel-success .panel-body {\n  border-top-color: #fff !important;\n  background-color: #2b982b;\n  color: #fff; }\n\n.full-body .panel-warning .panel-body {\n  border-top-color: #fff !important;\n  background-color: #ff9600;\n  color: #fff; }\n\n.full-body .panel-danger .panel-body {\n  border-top-color: #fff !important;\n  background-color: #fb483a;\n  color: #fff; }\n\n/* Progress Bars =============================== */\n.progress {\n  border-radius: 0;\n  height: 22px; }\n\n.progress .progress-bar {\n  line-height: 23px;\n  background-color: #1f91f3; }\n\n.progress .progress-bar-success {\n  background-color: #2b982b; }\n\n.progress .progress-bar-info {\n  background-color: #00b0e4; }\n\n.progress .progress-bar-warning {\n  background-color: #ff9600; }\n\n.progress .progress-bar-danger {\n  background-color: #fb483a; }\n\n/* Ion Range Slider ============================ */\n.irs .irs-min,\n.irs .irs-max,\n.irs .irs-from,\n.irs .irs-to,\n.irs .irs-single {\n  border-radius: 0; }\n\n/* Input Group ================================= */\n.input-group {\n  width: 100%;\n  margin-bottom: 20px; }\n\n.input-group .form-line {\n  display: inline-block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  position: relative; }\n\n.input-group .form-line:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: 100%;\n  bottom: -2px;\n  transform: scaleX(0);\n  transition: 0.25s ease-in;\n  border-bottom: 2px solid #1f91f3; }\n\n.input-group .form-line + .input-group-addon {\n  padding-right: 0;\n  padding-left: 10px; }\n\n.input-group .help-info {\n  float: right;\n  font-size: 12px;\n  margin-top: 5px;\n  color: #999; }\n\n.input-group label.error {\n  font-size: 12px;\n  display: block;\n  margin-top: 5px;\n  font-weight: normal;\n  color: #f44336; }\n\n.input-group .form-line.error:after {\n  border-bottom: 2px solid #f44336; }\n\n.input-group .form-line.success:after {\n  border-bottom: 2px solid #4caf50; }\n\n.input-group .form-line.warning:after {\n  border-bottom: 2px solid #ffc107; }\n\n.input-group .form-line.focused:after {\n  transform: scaleX(1); }\n\n.input-group .form-line.focused .form-label {\n  bottom: 25px;\n  left: 0;\n  font-size: 12px; }\n\n.input-group .input-group-addon {\n  border: none;\n  background-color: transparent;\n  padding-left: 0;\n  font-weight: bold; }\n\n.input-group .input-group-addon .material-icons {\n  font-size: 18px;\n  color: #555; }\n\n.input-group input[type=\"text\"],\n.input-group .form-control {\n  border: none;\n  box-shadow: none;\n  padding-left: 0; }\n\n.input-group .form-control:focus {\n  -ms-box-shadow: none !important;\n  box-shadow: none !important; }\n\n.input-group.input-group-sm .input-group-addon i {\n  font-size: 14px; }\n\n.input-group.input-group-sm .form-control {\n  font-size: 12px; }\n\n.input-group.input-group-lg .input-group-addon i {\n  font-size: 26px; }\n\n.input-group.input-group-lg .form-control {\n  font-size: 18px; }\n\n.form-control-label {\n  text-align: right; }\n\n.form-control-label label {\n  margin-top: 8px; }\n\n.form-horizontal .form-group {\n  margin-bottom: 0; }\n\n.form-group {\n  width: 100%;\n  margin-bottom: 25px; }\n\n.form-group .form-control {\n  width: 100%;\n  border: none;\n  box-shadow: none;\n  border-radius: 0;\n  padding-left: 0; }\n\n.form-group .help-info {\n  float: right;\n  font-size: 12px;\n  margin-top: 5px;\n  color: #999; }\n\n.form-group label.error {\n  font-size: 12px;\n  display: block;\n  margin-top: 5px;\n  font-weight: normal;\n  color: #f44336; }\n\n.form-group .form-line {\n  width: 100%;\n  position: relative;\n  border-bottom: 1px solid #ddd; }\n\n.form-group .form-line:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 0;\n  bottom: -1px;\n  transform: scaleX(0);\n  transition: 0.25s ease-in;\n  border-bottom: 2px solid #1f91f3; }\n\n.form-group .form-line .form-label {\n  font-weight: normal;\n  color: #aaa;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  cursor: text;\n  transition: 0.2s; }\n\n.form-group .form-line.error:after {\n  border-bottom: 2px solid #f44336; }\n\n.form-group .form-line.success:after {\n  border-bottom: 2px solid #4caf50; }\n\n.form-group .form-line.warning:after {\n  border-bottom: 2px solid #ffc107; }\n\n.form-group .form-line.focused:after {\n  transform: scaleX(1); }\n\n.form-group .form-line.focused .form-label {\n  top: -10px;\n  left: 0;\n  font-size: 12px; }\n\n.form-group-sm .form-label {\n  font-size: 12px; }\n\n.form-group-sm .form-line.focused .form-label {\n  bottom: 20px;\n  font-size: 10px; }\n\n.form-group-lg .form-label {\n  font-size: 18px; }\n\n.form-group-lg .form-line.focused .form-label {\n  bottom: 35px;\n  font-size: 12px; }\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: transparent; }\n\n/* Color Picker ================================ */\n.colorpicker {\n  z-index: 1; }\n\n.colorpicker:before,\n.colorpicker:after {\n  display: none !important; }\n\n/* Dropzone ==================================== */\n.dropzone {\n  border: 2px solid transparent !important;\n  background-color: #eee !important; }\n\n.dropzone .dz-message .drag-icon-cph .material-icons {\n  font-size: 80px;\n  color: #777; }\n\n.dz-drag-hover {\n  border: 2px dashed #888 !important; }\n\n/* Breadcrumbs ================================= */\n.breadcrumb {\n  border-radius: 0;\n  background-color: transparent;\n  font-size: 13px;\n  margin-bottom: 10px; }\n\n.breadcrumb li a {\n  color: #444;\n  text-decoration: none; }\n\n.breadcrumb li a .material-icons {\n  font-size: 18px;\n  position: relative;\n  top: 4px; }\n\n.breadcrumb li .material-icons {\n  font-size: 18px;\n  position: relative;\n  top: 4px; }\n\n.breadcrumb > li + li:before {\n  content: '>\\A0'; }\n\n.breadcrumb-col-red li a {\n  color: #f44336 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-red {\n  background-color: #f44336 !important; }\n\n.breadcrumb-bg-red li {\n  color: #fff !important; }\n\n.breadcrumb-bg-red li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-red li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-red li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-pink li a {\n  color: #e91e63 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-pink {\n  background-color: #e91e63 !important; }\n\n.breadcrumb-bg-pink li {\n  color: #fff !important; }\n\n.breadcrumb-bg-pink li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-pink li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-pink li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-purple li a {\n  color: #9c27b0 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-purple {\n  background-color: #9c27b0 !important; }\n\n.breadcrumb-bg-purple li {\n  color: #fff !important; }\n\n.breadcrumb-bg-purple li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-purple li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-purple li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-deep-purple li a {\n  color: #673ab7 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-deep-purple {\n  background-color: #673ab7 !important; }\n\n.breadcrumb-bg-deep-purple li {\n  color: #fff !important; }\n\n.breadcrumb-bg-deep-purple li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-deep-purple li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-deep-purple li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-indigo li a {\n  color: #3f51b5 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-indigo {\n  background-color: #3f51b5 !important; }\n\n.breadcrumb-bg-indigo li {\n  color: #fff !important; }\n\n.breadcrumb-bg-indigo li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-indigo li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-indigo li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-blue li a {\n  color: #336699 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-blue {\n  background-color: #336699 !important; }\n\n.breadcrumb-bg-blue li {\n  color: #fff !important; }\n\n.breadcrumb-bg-blue li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-blue li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-blue li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-light-blue li a {\n  color: #03a9f4 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-light-blue {\n  background-color: #03a9f4 !important; }\n\n.breadcrumb-bg-light-blue li {\n  color: #fff !important; }\n\n.breadcrumb-bg-light-blue li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-light-blue li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-light-blue li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-cyan li a {\n  color: #00bcd4 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-cyan {\n  background-color: #00bcd4 !important; }\n\n.breadcrumb-bg-cyan li {\n  color: #fff !important; }\n\n.breadcrumb-bg-cyan li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-cyan li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-cyan li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-teal li a {\n  color: #009688 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-teal {\n  background-color: #009688 !important; }\n\n.breadcrumb-bg-teal li {\n  color: #fff !important; }\n\n.breadcrumb-bg-teal li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-teal li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-teal li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-green li a {\n  color: #4caf50 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-green {\n  background-color: #4caf50 !important; }\n\n.breadcrumb-bg-green li {\n  color: #fff !important; }\n\n.breadcrumb-bg-green li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-green li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-green li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-light-green li a {\n  color: #8bc34a !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-light-green {\n  background-color: #8bc34a !important; }\n\n.breadcrumb-bg-light-green li {\n  color: #fff !important; }\n\n.breadcrumb-bg-light-green li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-light-green li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-light-green li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-lime li a {\n  color: #cddc39 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-lime {\n  background-color: #cddc39 !important; }\n\n.breadcrumb-bg-lime li {\n  color: #fff !important; }\n\n.breadcrumb-bg-lime li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-lime li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-lime li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-yellow li a {\n  color: #ffe821 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-yellow {\n  background-color: #ffe821 !important; }\n\n.breadcrumb-bg-yellow li {\n  color: #fff !important; }\n\n.breadcrumb-bg-yellow li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-yellow li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-yellow li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-amber li a {\n  color: #ffc107 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-amber {\n  background-color: #ffc107 !important; }\n\n.breadcrumb-bg-amber li {\n  color: #fff !important; }\n\n.breadcrumb-bg-amber li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-amber li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-amber li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-orange li a {\n  color: #ff9800 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-orange {\n  background-color: #ff9800 !important; }\n\n.breadcrumb-bg-orange li {\n  color: #fff !important; }\n\n.breadcrumb-bg-orange li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-orange li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-orange li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-deep-orange li a {\n  color: #ff5722 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-deep-orange {\n  background-color: #ff5722 !important; }\n\n.breadcrumb-bg-deep-orange li {\n  color: #fff !important; }\n\n.breadcrumb-bg-deep-orange li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-deep-orange li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-deep-orange li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-brown li a {\n  color: #795548 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-brown {\n  background-color: #795548 !important; }\n\n.breadcrumb-bg-brown li {\n  color: #fff !important; }\n\n.breadcrumb-bg-brown li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-brown li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-brown li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-grey li a {\n  color: #9e9e9e !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-grey {\n  background-color: #9e9e9e !important; }\n\n.breadcrumb-bg-grey li {\n  color: #fff !important; }\n\n.breadcrumb-bg-grey li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-grey li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-grey li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-blue-grey li a {\n  color: #607d8b !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-blue-grey {\n  background-color: #607d8b !important; }\n\n.breadcrumb-bg-blue-grey li {\n  color: #fff !important; }\n\n.breadcrumb-bg-blue-grey li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-blue-grey li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-blue-grey li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-black li a {\n  color: #000000 !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-black {\n  background-color: #000000 !important; }\n\n.breadcrumb-bg-black li {\n  color: #fff !important; }\n\n.breadcrumb-bg-black li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-black li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-black li + li:before {\n  color: #fff; }\n\n.breadcrumb-col-white li a {\n  color: #ffffff !important;\n  font-weight: bold; }\n\n.breadcrumb-bg-white {\n  background-color: #ffffff !important; }\n\n.breadcrumb-bg-white li {\n  color: #fff !important; }\n\n.breadcrumb-bg-white li a {\n  color: #fff;\n  font-weight: bold; }\n\n.breadcrumb-bg-white li a .material-icons {\n  padding-bottom: 8px; }\n\n.breadcrumb-bg-white li + li:before {\n  color: #fff; }\n\n/* Badge | List Group Item ===================== */\n.badge {\n  border-radius: 2px; }\n\n.list-group-item {\n  border-radius: 0;\n  transition: 0.5s; }\n\n.list-group .active {\n  background-color: #336699;\n  border-color: #336699; }\n\n.list-group .active:hover,\n.list-group .active:focus,\n.list-group .active:active {\n  background-color: #336699;\n  border-color: #336699; }\n\n.list-group .active .list-group-item-text {\n  color: #dfe9f1;\n  font-size: 13px; }\n\n.list-group .active .list-group-item-text:hover,\n.list-group .active .list-group-item-text:active,\n.list-group .active .list-group-item-text:focus {\n  color: #dfe9f1; }\n\n.list-group .list-group-item.active:hover .list-group-item-text,\n.list-group .list-group-item.active:focus .list-group-item-text,\n.list-group .list-group-item.active:active .list-group-item-text {\n  color: #dfe9f1; }\n\n.list-group .list-group-item:first-child,\n.list-group .list-group-item:last-child {\n  border-radius: 0; }\n\n.list-group .list-group-item .list-group-item-heading {\n  font-weight: bold;\n  font-size: 17px; }\n\n.list-group .list-group-item-success {\n  background-color: #2b982b;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-item-success:hover,\n.list-group .list-group-item-success:focus {\n  background-color: #2b982b;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .list-group-item-info {\n  background-color: #00b0e4;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-item-info:hover,\n.list-group .list-group-item-info:focus {\n  background-color: #00b0e4;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .list-group-item-warning {\n  background-color: #ff9600;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-item-warning:hover,\n.list-group .list-group-item-warning:focus {\n  background-color: #ff9600;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .list-group-item-danger {\n  background-color: #fb483a;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-item-danger:hover,\n.list-group .list-group-item-danger:focus {\n  background-color: #fb483a;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-red {\n  stroke: #f44336; }\n\n.list-group .list-group-bg-red {\n  background-color: #f44336;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-red:hover,\n.list-group .list-group-bg-red:focus {\n  background-color: #f44336;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-pink {\n  stroke: #e91e63; }\n\n.list-group .list-group-bg-pink {\n  background-color: #e91e63;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-pink:hover,\n.list-group .list-group-bg-pink:focus {\n  background-color: #e91e63;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-purple {\n  stroke: #9c27b0; }\n\n.list-group .list-group-bg-purple {\n  background-color: #9c27b0;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-purple:hover,\n.list-group .list-group-bg-purple:focus {\n  background-color: #9c27b0;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-deep-purple {\n  stroke: #673ab7; }\n\n.list-group .list-group-bg-deep-purple {\n  background-color: #673ab7;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-deep-purple:hover,\n.list-group .list-group-bg-deep-purple:focus {\n  background-color: #673ab7;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-indigo {\n  stroke: #3f51b5; }\n\n.list-group .list-group-bg-indigo {\n  background-color: #3f51b5;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-indigo:hover,\n.list-group .list-group-bg-indigo:focus {\n  background-color: #3f51b5;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-blue {\n  stroke: #336699; }\n\n.list-group .list-group-bg-blue {\n  background-color: #336699;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-blue:hover,\n.list-group .list-group-bg-blue:focus {\n  background-color: #336699;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-light-blue {\n  stroke: #03a9f4; }\n\n.list-group .list-group-bg-light-blue {\n  background-color: #03a9f4;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-light-blue:hover,\n.list-group .list-group-bg-light-blue:focus {\n  background-color: #03a9f4;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-cyan {\n  stroke: #00bcd4; }\n\n.list-group .list-group-bg-cyan {\n  background-color: #00bcd4;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-cyan:hover,\n.list-group .list-group-bg-cyan:focus {\n  background-color: #00bcd4;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-teal {\n  stroke: #009688; }\n\n.list-group .list-group-bg-teal {\n  background-color: #009688;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-teal:hover,\n.list-group .list-group-bg-teal:focus {\n  background-color: #009688;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-green {\n  stroke: #4caf50; }\n\n.list-group .list-group-bg-green {\n  background-color: #4caf50;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-green:hover,\n.list-group .list-group-bg-green:focus {\n  background-color: #4caf50;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-light-green {\n  stroke: #8bc34a; }\n\n.list-group .list-group-bg-light-green {\n  background-color: #8bc34a;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-light-green:hover,\n.list-group .list-group-bg-light-green:focus {\n  background-color: #8bc34a;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-lime {\n  stroke: #cddc39; }\n\n.list-group .list-group-bg-lime {\n  background-color: #cddc39;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-lime:hover,\n.list-group .list-group-bg-lime:focus {\n  background-color: #cddc39;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-yellow {\n  stroke: #ffe821; }\n\n.list-group .list-group-bg-yellow {\n  background-color: #ffe821;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-yellow:hover,\n.list-group .list-group-bg-yellow:focus {\n  background-color: #ffe821;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-amber {\n  stroke: #ffc107; }\n\n.list-group .list-group-bg-amber {\n  background-color: #ffc107;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-amber:hover,\n.list-group .list-group-bg-amber:focus {\n  background-color: #ffc107;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-orange {\n  stroke: #ff9800; }\n\n.list-group .list-group-bg-orange {\n  background-color: #ff9800;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-orange:hover,\n.list-group .list-group-bg-orange:focus {\n  background-color: #ff9800;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-deep-orange {\n  stroke: #ff5722; }\n\n.list-group .list-group-bg-deep-orange {\n  background-color: #ff5722;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-deep-orange:hover,\n.list-group .list-group-bg-deep-orange:focus {\n  background-color: #ff5722;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-brown {\n  stroke: #795548; }\n\n.list-group .list-group-bg-brown {\n  background-color: #795548;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-brown:hover,\n.list-group .list-group-bg-brown:focus {\n  background-color: #795548;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-grey {\n  stroke: #9e9e9e; }\n\n.list-group .list-group-bg-grey {\n  background-color: #9e9e9e;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-grey:hover,\n.list-group .list-group-bg-grey:focus {\n  background-color: #9e9e9e;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-blue-grey {\n  stroke: #607d8b; }\n\n.list-group .list-group-bg-blue-grey {\n  background-color: #607d8b;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-blue-grey:hover,\n.list-group .list-group-bg-blue-grey:focus {\n  background-color: #607d8b;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-black {\n  stroke: #000000; }\n\n.list-group .list-group-bg-black {\n  background-color: #000000;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-black:hover,\n.list-group .list-group-bg-black:focus {\n  background-color: #000000;\n  color: #fff;\n  opacity: 0.8; }\n\n.list-group .pl-white {\n  stroke: #ffffff; }\n\n.list-group .list-group-bg-white {\n  background-color: #ffffff;\n  border: none;\n  color: #fff; }\n\n.list-group .list-group-bg-white:hover,\n.list-group .list-group-bg-white:focus {\n  background-color: #ffffff;\n  color: #fff;\n  opacity: 0.8; }\n\n/* Pagination & Pager ========================== */\n.pager li > a {\n  border-radius: 0;\n  border: none;\n  background-color: transparent;\n  color: #222;\n  font-weight: bold; }\n\n.pager li a:focus,\n.pager li a:active {\n  background-color: transparent; }\n\n.pagination .disabled a,\n.pagination .disabled a:hover,\n.pagination .disabled a:focus,\n.pagination .disabled a:active {\n  color: #bbb; }\n\n.pagination li.active a {\n  background-color: #336699; }\n\n.pagination li {\n  border-radius: 0; }\n\n.pagination li a:focus,\n.pagination li a:active {\n  background-color: transparent;\n  color: #555; }\n\n.pagination > li > a {\n  border: none;\n  font-weight: bold;\n  color: #555; }\n\n.pagination > li:first-child > a,\n.pagination > li:last-child > a {\n  width: auto;\n  height: 32px;\n  border-radius: 0; }\n\n.pagination > li:first-child > a .material-icons,\n.pagination > li:last-child > a .material-icons {\n  position: relative;\n  bottom: 2px; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:last-child > a {\n  width: 28px;\n  height: 28px; }\n\n.pagination-sm > li:first-child > a .material-icons,\n.pagination-sm > li:last-child > a .material-icons {\n  position: relative;\n  top: -1px;\n  left: -6px;\n  font-size: 20px; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:last-child > a {\n  width: 44px;\n  height: 44px; }\n\n.pagination-lg > li:first-child > a .material-icons,\n.pagination-lg > li:last-child > a .material-icons {\n  font-size: 30px;\n  position: relative;\n  top: -3px;\n  left: -10px; }\n\n/* Media Object ================================ */\n.media {\n  margin-bottom: 25px; }\n\n.media .media-body {\n  color: #777;\n  font-size: 13px; }\n\n.media .media-body .media-heading {\n  font-size: 16px;\n  font-weight: bold;\n  color: #333; }\n\n/* Form Wizard ================================= */\n.wizard,\n.tabcontrol {\n  display: block;\n  width: 100%;\n  overflow: hidden; }\n\n.wizard a,\n.tabcontrol a {\n  outline: 0; }\n\n.wizard ul,\n.tabcontrol ul {\n  list-style: none !important;\n  padding: 0;\n  margin: 0; }\n\n.wizard ul > li,\n.tabcontrol ul > li {\n  display: block;\n  padding: 0; }\n\n/* Accessibility */\n.wizard > .steps .current-info,\n.tabcontrol > .steps .current-info,\n.wizard > .content > .title,\n.tabcontrol > .content > .title {\n  position: absolute;\n  left: -999em; }\n\n.wizard > .steps {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.wizard.vertical > .steps {\n  float: left;\n  width: 30%; }\n\n.wizard.vertical > .steps > ul > li {\n  float: none;\n  width: 100%; }\n\n.wizard.vertical > .content {\n  float: left;\n  margin: 0 0 0.5em 0;\n  width: 70%; }\n\n.wizard.vertical > .actions {\n  float: right;\n  width: 100%; }\n\n.wizard.vertical > .actions > ul > li {\n  margin: 0 0 0 1em; }\n\n.wizard > .steps .number {\n  font-size: 1.429em; }\n\n.wizard > .steps > ul > li {\n  width: 25%;\n  float: left; }\n\n.wizard > .actions > ul > li {\n  float: left; }\n\n.wizard > .steps a {\n  display: block;\n  width: auto;\n  margin: 0 0.5em 0.5em;\n  padding: 1em 1em;\n  text-decoration: none;\n  border-radius: 5px; }\n\n.wizard > .steps a:hover,\n.wizard > .steps a:active {\n  display: block;\n  width: auto;\n  margin: 0 0.5em 0.5em;\n  padding: 1em 1em;\n  text-decoration: none;\n  border-radius: 5px; }\n\n.wizard > .steps .disabled a {\n  background: #eee;\n  color: #aaa;\n  cursor: default; }\n\n.wizard > .steps .disabled a:hover,\n.wizard > .steps .disabled a:active {\n  background: #eee;\n  color: #aaa;\n  cursor: default; }\n\n.wizard > .steps .current a {\n  background: #2184be;\n  color: #fff;\n  cursor: default; }\n\n.wizard > .steps .current a:hover,\n.wizard > .steps .current a:active {\n  background: #2184be;\n  color: #fff;\n  cursor: default; }\n\n.wizard > .steps .done a {\n  background: #9dc8e2;\n  color: #fff; }\n\n.wizard > .steps .done a:hover,\n.wizard > .steps .done a:active {\n  background: #9dc8e2;\n  color: #fff; }\n\n.wizard > .steps .error a {\n  background: #ff3111;\n  color: #fff; }\n\n.wizard > .steps .error a:hover,\n.wizard > .steps .error a:active {\n  background: #ff3111;\n  color: #fff; }\n\n.wizard > .content {\n  border: 1px solid #ddd;\n  display: block;\n  margin: 0.5em;\n  min-height: 35em;\n  overflow: hidden;\n  position: relative;\n  width: auto; }\n\n.wizard > .actions {\n  position: relative;\n  display: block;\n  text-align: right;\n  width: 100%; }\n\n.wizard > .actions > ul {\n  display: inline-block;\n  text-align: right; }\n\n.wizard > .actions > ul > li {\n  margin: 0 0.5em; }\n\n.wizard > .actions a {\n  background: #009688;\n  color: #fff;\n  display: block;\n  padding: 0.5em 1em;\n  text-decoration: none;\n  border-radius: 0; }\n\n.wizard > .actions a:hover,\n.wizard > .actions a:active {\n  background: #009688;\n  color: #fff;\n  display: block;\n  padding: 0.5em 1em;\n  text-decoration: none;\n  border-radius: 0; }\n\n.wizard > .actions .disabled a {\n  background: #eee;\n  color: #aaa; }\n\n.wizard > .actions .disabled a:hover,\n.wizard > .actions .disabled a:active {\n  background: #eee;\n  color: #aaa; }\n\n.tabcontrol > .steps {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.tabcontrol > .steps > ul {\n  position: relative;\n  margin: 6px 0 0 0;\n  top: 1px;\n  z-index: 1; }\n\n.tabcontrol > .steps > ul > li {\n  float: left;\n  margin: 5px 2px 0 0;\n  padding: 1px;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.tabcontrol > .steps > ul > li:hover {\n  background: #edecec;\n  border: 1px solid #bbb;\n  padding: 0; }\n\n.tabcontrol > .steps > ul > li.current {\n  background: #fff;\n  border: 1px solid #bbb;\n  border-bottom: 0 none;\n  padding: 0 0 1px 0;\n  margin-top: 0; }\n\n.tabcontrol > .steps > ul > li.current > a {\n  padding: 15px 30px 10px 30px; }\n\n.tabcontrol > .steps > ul > li > a {\n  color: #5f5f5f;\n  display: inline-block;\n  border: 0 none;\n  margin: 0;\n  padding: 10px 30px;\n  text-decoration: none; }\n\n.tabcontrol > .steps > ul > li > a:hover {\n  text-decoration: none; }\n\n.tabcontrol > .content {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 35em;\n  overflow: hidden;\n  border-top: 1px solid #bbb;\n  padding-top: 20px; }\n\n.tabcontrol > .content > .body {\n  float: left;\n  position: absolute;\n  width: 95%;\n  height: 95%;\n  padding: 2.5%; }\n\n.tabcontrol > .content > .body ul {\n  list-style: disc !important; }\n\n.tabcontrol > .content > .body ul > li {\n  display: list-item; }\n\n.wizard .content {\n  min-height: 245px;\n  border-radius: 0;\n  overflow-y: auto; }\n\n.wizard .content .body {\n  padding: 15px; }\n\n.wizard .steps a {\n  border-radius: 0;\n  transition: 0.5s; }\n\n.wizard .steps a:active,\n.wizard .steps a:focus,\n.wizard .steps a:hover {\n  border-radius: 0; }\n\n.wizard .steps .done a {\n  background-color: rgba(0, 150, 136, 0.6); }\n\n.wizard .steps .done a:hover,\n.wizard .steps .done a:active,\n.wizard .steps .done a:focus {\n  background-color: rgba(0, 150, 136, 0.5); }\n\n.wizard .steps .error a {\n  background-color: #f44336 !important; }\n\n.wizard .steps .current a {\n  background-color: #009688; }\n\n.wizard .steps .current a:active,\n.wizard .steps .current a:focus,\n.wizard .steps .current a:hover {\n  background-color: #009688; }\n\n/* Waves ======================================= */\n.waves-effect.waves-red .waves-ripple {\n  background: rgba(244, 67, 54, 0.5); }\n\n.waves-effect.waves-pink .waves-ripple {\n  background: rgba(233, 30, 99, 0.5); }\n\n.waves-effect.waves-purple .waves-ripple {\n  background: rgba(156, 39, 176, 0.5); }\n\n.waves-effect.waves-deep-purple .waves-ripple {\n  background: rgba(103, 58, 183, 0.5); }\n\n.waves-effect.waves-indigo .waves-ripple {\n  background: rgba(63, 81, 181, 0.5); }\n\n.waves-effect.waves-blue .waves-ripple {\n  background: rgba(33, 150, 243, 0.5); }\n\n.waves-effect.waves-light-blue .waves-ripple {\n  background: rgba(3, 169, 244, 0.5); }\n\n.waves-effect.waves-cyan .waves-ripple {\n  background: rgba(0, 188, 212, 0.5); }\n\n.waves-effect.waves-teal .waves-ripple {\n  background: rgba(0, 150, 136, 0.5); }\n\n.waves-effect.waves-green .waves-ripple {\n  background: rgba(76, 175, 80, 0.5); }\n\n.waves-effect.waves-light-green .waves-ripple {\n  background: rgba(139, 195, 74, 0.5); }\n\n.waves-effect.waves-lime .waves-ripple {\n  background: rgba(205, 220, 57, 0.5); }\n\n.waves-effect.waves-yellow .waves-ripple {\n  background: rgba(255, 232, 33, 0.5); }\n\n.waves-effect.waves-amber .waves-ripple {\n  background: rgba(255, 193, 7, 0.5); }\n\n.waves-effect.waves-orange .waves-ripple {\n  background: rgba(255, 152, 0, 0.5); }\n\n.waves-effect.waves-deep-orange .waves-ripple {\n  background: rgba(255, 87, 34, 0.5); }\n\n.waves-effect.waves-brown .waves-ripple {\n  background: rgba(121, 85, 72, 0.5); }\n\n.waves-effect.waves-grey .waves-ripple {\n  background: rgba(158, 158, 158, 0.5); }\n\n.waves-effect.waves-blue-grey .waves-ripple {\n  background: rgba(96, 125, 139, 0.5); }\n\n.waves-effect.waves-black .waves-ripple {\n  background: rgba(0, 0, 0, 0.5); }\n\n.waves-effect.waves-white .waves-ripple {\n  background: rgba(255, 255, 255, 0.5); }\n\n/* Page Loader ================================= */\n.page-loader-wrapper {\n  z-index: 99999999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: #eee;\n  overflow: hidden;\n  text-align: center; }\n\n.page-loader-wrapper p {\n  font-size: 13px;\n  margin-top: 10px;\n  font-weight: bold;\n  color: #444; }\n\n.page-loader-wrapper .loader {\n  position: relative;\n  top: calc(50% - 30px); }\n\n/* Preloaders ================================== */\n.md-preloader .pl-red {\n  stroke: #f44336; }\n\n.md-preloader .pl-pink {\n  stroke: #e91e63; }\n\n.md-preloader .pl-purple {\n  stroke: #9c27b0; }\n\n.md-preloader .pl-deep-purple {\n  stroke: #673ab7; }\n\n.md-preloader .pl-indigo {\n  stroke: #3f51b5; }\n\n.md-preloader .pl-blue {\n  stroke: #336699; }\n\n.md-preloader .pl-light-blue {\n  stroke: #03a9f4; }\n\n.md-preloader .pl-cyan {\n  stroke: #00bcd4; }\n\n.md-preloader .pl-teal {\n  stroke: #009688; }\n\n.md-preloader .pl-green {\n  stroke: #4caf50; }\n\n.md-preloader .pl-light-green {\n  stroke: #8bc34a; }\n\n.md-preloader .pl-lime {\n  stroke: #cddc39; }\n\n.md-preloader .pl-yellow {\n  stroke: #ffe821; }\n\n.md-preloader .pl-amber {\n  stroke: #ffc107; }\n\n.md-preloader .pl-orange {\n  stroke: #ff9800; }\n\n.md-preloader .pl-deep-orange {\n  stroke: #ff5722; }\n\n.md-preloader .pl-brown {\n  stroke: #795548; }\n\n.md-preloader .pl-grey {\n  stroke: #9e9e9e; }\n\n.md-preloader .pl-blue-grey {\n  stroke: #607d8b; }\n\n.md-preloader .pl-black {\n  stroke: #000000; }\n\n.md-preloader .pl-white {\n  stroke: #ffffff; }\n\n.preloader {\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 50px;\n  animation: container-rotate 1568ms linear infinite; }\n\n.preloader.pl-size-xl {\n  width: 75px;\n  height: 75px; }\n\n.preloader.pl-size-l {\n  width: 60px;\n  height: 60px; }\n\n.preloader.pl-size-md {\n  width: 50px;\n  height: 50px; }\n\n.preloader.pl-size-sm {\n  width: 40px;\n  height: 40px; }\n\n.preloader.pl-size-xs {\n  width: 25px;\n  height: 25px; }\n\n.spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-color: #f44336;\n  -ms-opacity: 1;\n  opacity: 1;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.spinner-layer.pl-red {\n  border-color: #f44336; }\n\n.spinner-layer.pl-pink {\n  border-color: #e91e63; }\n\n.spinner-layer.pl-purple {\n  border-color: #9c27b0; }\n\n.spinner-layer.pl-deep-purple {\n  border-color: #673ab7; }\n\n.spinner-layer.pl-indigo {\n  border-color: #3f51b5; }\n\n.spinner-layer.pl-blue {\n  border-color: #336699; }\n\n.spinner-layer.pl-light-blue {\n  border-color: #03a9f4; }\n\n.spinner-layer.pl-cyan {\n  border-color: #00bcd4; }\n\n.spinner-layer.pl-teal {\n  border-color: #009688; }\n\n.spinner-layer.pl-green {\n  border-color: #4caf50; }\n\n.spinner-layer.pl-light-green {\n  border-color: #8bc34a; }\n\n.spinner-layer.pl-lime {\n  border-color: #cddc39; }\n\n.spinner-layer.pl-yellow {\n  border-color: #ffe821; }\n\n.spinner-layer.pl-amber {\n  border-color: #ffc107; }\n\n.spinner-layer.pl-orange {\n  border-color: #ff9800; }\n\n.spinner-layer.pl-deep-orange {\n  border-color: #ff5722; }\n\n.spinner-layer.pl-brown {\n  border-color: #795548; }\n\n.spinner-layer.pl-grey {\n  border-color: #9e9e9e; }\n\n.spinner-layer.pl-blue-grey {\n  border-color: #607d8b; }\n\n.spinner-layer.pl-black {\n  border-color: #000000; }\n\n.spinner-layer.pl-white {\n  border-color: #ffffff; }\n\n.right {\n  float: right !important; }\n\n.gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n\n.gap-patch.circle {\n  width: 1000%;\n  left: -450%; }\n\n.circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n\n.circle-clipper .circle {\n  width: 200%;\n  height: 100%;\n  border-width: 3px;\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent !important;\n  border-radius: 50%;\n  animation: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.circle-clipper.left .circle {\n  left: 0;\n  border-right-color: transparent !important;\n  transform: rotate(129deg);\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.circle-clipper.right .circle {\n  left: -100%;\n  border-left-color: transparent !important;\n  transform: rotate(-129deg);\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n@keyframes container-rotate {\n  to {\n    transform: rotate(360deg); } }\n\n@keyframes fill-unfill-rotate {\n  12.5% {\n    transform: rotate(135deg); }\n  25% {\n    transform: rotate(270deg); }\n  37.5% {\n    transform: rotate(405deg); }\n  50% {\n    transform: rotate(540deg); }\n  62.5% {\n    transform: rotate(675deg); }\n  75% {\n    transform: rotate(810deg); }\n  87.5% {\n    transform: rotate(945deg); }\n  to {\n    transform: rotate(1080deg); } }\n\n@keyframes left-spin {\n  from {\n    transform: rotate(130deg); }\n  50% {\n    transform: rotate(-5deg); }\n  to {\n    transform: rotate(130deg); } }\n\n@keyframes right-spin {\n  from {\n    transform: rotate(-130deg); }\n  50% {\n    transform: rotate(5deg); }\n  to {\n    transform: rotate(-130deg); } }\n\n/* Navbars ===================================== */\n.navbar {\n  font-family: \"Roboto Slab Slab\", serif;\n  border-radius: 0;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 12;\n  width: 100%; }\n\n.navbar .navbar-brand {\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.navbar .navbar-custom-right-menu {\n  float: right; }\n\n.navbar .navbar-toggle {\n  text-decoration: none;\n  color: #fff;\n  width: 20px;\n  height: 20px;\n  margin-top: -4px;\n  margin-right: 17px; }\n\n.navbar .navbar-toggle:before {\n  content: '\\E8D5';\n  font-family: 'Roboto Slab';\n  font-size: 26px; }\n\n.navbar .navbar-collapse.in {\n  overflow: visible; }\n\n.ls-closed .sidebar {\n  margin-left: -300px; }\n\n.ls-closed section.content {\n  margin-left: 15px; }\n\n.ls-closed .bars:after,\n.ls-closed .bars:before {\n  font-family: 'Roboto Slab';\n  font-size: 24px;\n  position: absolute;\n  top: 18px;\n  left: 20px;\n  margin-right: 10px;\n  transform: scale(0);\n  transition: all 0.3s; }\n\n.ls-closed .bars:before {\n  content: '\\E5D2';\n  transform: scale(1); }\n\n.ls-closed .bars:after {\n  content: '\\E5C4';\n  transform: scale(0); }\n\n.ls-closed .navbar-brand {\n  margin-left: 30px; }\n\n.overlay-open .bars:before {\n  transform: scale(0); }\n\n.overlay-open .bars:after {\n  transform: scale(1); }\n\n.navbar-header {\n  padding: 10px 7px; }\n\n.navbar-header .bars {\n  float: left;\n  text-decoration: none; }\n\n.navbar-nav > li > a {\n  padding: 7px 7px 2px 7px;\n  margin-top: 17px;\n  margin-left: 5px; }\n\n.navbar-nav .dropdown-menu {\n  margin-top: -40px !important; }\n\n.label-count {\n  position: absolute;\n  top: 2px;\n  right: 6px;\n  font-size: 10px;\n  line-height: 15px;\n  background-color: #000;\n  padding: 0 4px;\n  border-radius: 3px; }\n\n.col-red .navbar .navbar-brand,\n.col-red .navbar .navbar-brand:hover,\n.col-red .navbar .navbar-brand:active,\n.col-red .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-red .navbar .nav > li > a:hover,\n.col-red .navbar .nav > li > a:focus,\n.col-red .navbar .nav .open > a,\n.col-red .navbar .nav .open > a:hover,\n.col-red .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-red .navbar .nav > li > a {\n  color: #fff; }\n\n.col-red .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-red .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-pink .navbar .navbar-brand,\n.col-pink .navbar .navbar-brand:hover,\n.col-pink .navbar .navbar-brand:active,\n.col-pink .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-pink .navbar .nav > li > a:hover,\n.col-pink .navbar .nav > li > a:focus,\n.col-pink .navbar .nav .open > a,\n.col-pink .navbar .nav .open > a:hover,\n.col-pink .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-pink .navbar .nav > li > a {\n  color: #fff; }\n\n.col-pink .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-pink .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-purple .navbar .navbar-brand,\n.col-purple .navbar .navbar-brand:hover,\n.col-purple .navbar .navbar-brand:active,\n.col-purple .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-purple .navbar .nav > li > a:hover,\n.col-purple .navbar .nav > li > a:focus,\n.col-purple .navbar .nav .open > a,\n.col-purple .navbar .nav .open > a:hover,\n.col-purple .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-purple .navbar .nav > li > a {\n  color: #fff; }\n\n.col-purple .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-purple .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-deep-purple .navbar .navbar-brand,\n.col-deep-purple .navbar .navbar-brand:hover,\n.col-deep-purple .navbar .navbar-brand:active,\n.col-deep-purple .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-deep-purple .navbar .nav > li > a:hover,\n.col-deep-purple .navbar .nav > li > a:focus,\n.col-deep-purple .navbar .nav .open > a,\n.col-deep-purple .navbar .nav .open > a:hover,\n.col-deep-purple .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-deep-purple .navbar .nav > li > a {\n  color: #fff; }\n\n.col-deep-purple .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-deep-purple .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-indigo .navbar .navbar-brand,\n.col-indigo .navbar .navbar-brand:hover,\n.col-indigo .navbar .navbar-brand:active,\n.col-indigo .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-indigo .navbar .nav > li > a:hover,\n.col-indigo .navbar .nav > li > a:focus,\n.col-indigo .navbar .nav .open > a,\n.col-indigo .navbar .nav .open > a:hover,\n.col-indigo .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-indigo .navbar .nav > li > a {\n  color: #fff; }\n\n.col-indigo .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-indigo .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-blue .navbar .navbar-brand,\n.col-blue .navbar .navbar-brand:hover,\n.col-blue .navbar .navbar-brand:active,\n.col-blue .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-blue .navbar .nav > li > a:hover,\n.col-blue .navbar .nav > li > a:focus,\n.col-blue .navbar .nav .open > a,\n.col-blue .navbar .nav .open > a:hover,\n.col-blue .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-blue .navbar .nav > li > a {\n  color: #fff; }\n\n.col-blue .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-blue .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-light-blue .navbar .navbar-brand,\n.col-light-blue .navbar .navbar-brand:hover,\n.col-light-blue .navbar .navbar-brand:active,\n.col-light-blue .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-light-blue .navbar .nav > li > a:hover,\n.col-light-blue .navbar .nav > li > a:focus,\n.col-light-blue .navbar .nav .open > a,\n.col-light-blue .navbar .nav .open > a:hover,\n.col-light-blue .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-light-blue .navbar .nav > li > a {\n  color: #fff; }\n\n.col-light-blue .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-light-blue .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-cyan .navbar .navbar-brand,\n.col-cyan .navbar .navbar-brand:hover,\n.col-cyan .navbar .navbar-brand:active,\n.col-cyan .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-cyan .navbar .nav > li > a:hover,\n.col-cyan .navbar .nav > li > a:focus,\n.col-cyan .navbar .nav .open > a,\n.col-cyan .navbar .nav .open > a:hover,\n.col-cyan .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-cyan .navbar .nav > li > a {\n  color: #fff; }\n\n.col-cyan .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-cyan .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-teal .navbar .navbar-brand,\n.col-teal .navbar .navbar-brand:hover,\n.col-teal .navbar .navbar-brand:active,\n.col-teal .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-teal .navbar .nav > li > a:hover,\n.col-teal .navbar .nav > li > a:focus,\n.col-teal .navbar .nav .open > a,\n.col-teal .navbar .nav .open > a:hover,\n.col-teal .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-teal .navbar .nav > li > a {\n  color: #fff; }\n\n.col-teal .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-teal .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-green .navbar .navbar-brand,\n.col-green .navbar .navbar-brand:hover,\n.col-green .navbar .navbar-brand:active,\n.col-green .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-green .navbar .nav > li > a:hover,\n.col-green .navbar .nav > li > a:focus,\n.col-green .navbar .nav .open > a,\n.col-green .navbar .nav .open > a:hover,\n.col-green .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-green .navbar .nav > li > a {\n  color: #fff; }\n\n.col-green .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-green .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-light-green .navbar .navbar-brand,\n.col-light-green .navbar .navbar-brand:hover,\n.col-light-green .navbar .navbar-brand:active,\n.col-light-green .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-light-green .navbar .nav > li > a:hover,\n.col-light-green .navbar .nav > li > a:focus,\n.col-light-green .navbar .nav .open > a,\n.col-light-green .navbar .nav .open > a:hover,\n.col-light-green .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-light-green .navbar .nav > li > a {\n  color: #fff; }\n\n.col-light-green .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-light-green .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-lime .navbar .navbar-brand,\n.col-lime .navbar .navbar-brand:hover,\n.col-lime .navbar .navbar-brand:active,\n.col-lime .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-lime .navbar .nav > li > a:hover,\n.col-lime .navbar .nav > li > a:focus,\n.col-lime .navbar .nav .open > a,\n.col-lime .navbar .nav .open > a:hover,\n.col-lime .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-lime .navbar .nav > li > a {\n  color: #fff; }\n\n.col-lime .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-lime .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-yellow .navbar .navbar-brand,\n.col-yellow .navbar .navbar-brand:hover,\n.col-yellow .navbar .navbar-brand:active,\n.col-yellow .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-yellow .navbar .nav > li > a:hover,\n.col-yellow .navbar .nav > li > a:focus,\n.col-yellow .navbar .nav .open > a,\n.col-yellow .navbar .nav .open > a:hover,\n.col-yellow .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-yellow .navbar .nav > li > a {\n  color: #fff; }\n\n.col-yellow .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-yellow .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-amber .navbar .navbar-brand,\n.col-amber .navbar .navbar-brand:hover,\n.col-amber .navbar .navbar-brand:active,\n.col-amber .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-amber .navbar .nav > li > a:hover,\n.col-amber .navbar .nav > li > a:focus,\n.col-amber .navbar .nav .open > a,\n.col-amber .navbar .nav .open > a:hover,\n.col-amber .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-amber .navbar .nav > li > a {\n  color: #fff; }\n\n.col-amber .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-amber .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-orange .navbar .navbar-brand,\n.col-orange .navbar .navbar-brand:hover,\n.col-orange .navbar .navbar-brand:active,\n.col-orange .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-orange .navbar .nav > li > a:hover,\n.col-orange .navbar .nav > li > a:focus,\n.col-orange .navbar .nav .open > a,\n.col-orange .navbar .nav .open > a:hover,\n.col-orange .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-orange .navbar .nav > li > a {\n  color: #fff; }\n\n.col-orange .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-orange .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-deep-orange .navbar .navbar-brand,\n.col-deep-orange .navbar .navbar-brand:hover,\n.col-deep-orange .navbar .navbar-brand:active,\n.col-deep-orange .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-deep-orange .navbar .nav > li > a:hover,\n.col-deep-orange .navbar .nav > li > a:focus,\n.col-deep-orange .navbar .nav .open > a,\n.col-deep-orange .navbar .nav .open > a:hover,\n.col-deep-orange .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-deep-orange .navbar .nav > li > a {\n  color: #fff; }\n\n.col-deep-orange .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-deep-orange .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-brown .navbar .navbar-brand,\n.col-brown .navbar .navbar-brand:hover,\n.col-brown .navbar .navbar-brand:active,\n.col-brown .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-brown .navbar .nav > li > a:hover,\n.col-brown .navbar .nav > li > a:focus,\n.col-brown .navbar .nav .open > a,\n.col-brown .navbar .nav .open > a:hover,\n.col-brown .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-brown .navbar .nav > li > a {\n  color: #fff; }\n\n.col-brown .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-brown .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-grey .navbar .navbar-brand,\n.col-grey .navbar .navbar-brand:hover,\n.col-grey .navbar .navbar-brand:active,\n.col-grey .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-grey .navbar .nav > li > a:hover,\n.col-grey .navbar .nav > li > a:focus,\n.col-grey .navbar .nav .open > a,\n.col-grey .navbar .nav .open > a:hover,\n.col-grey .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-grey .navbar .nav > li > a {\n  color: #fff; }\n\n.col-grey .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-grey .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-blue-grey .navbar .navbar-brand,\n.col-blue-grey .navbar .navbar-brand:hover,\n.col-blue-grey .navbar .navbar-brand:active,\n.col-blue-grey .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-blue-grey .navbar .nav > li > a:hover,\n.col-blue-grey .navbar .nav > li > a:focus,\n.col-blue-grey .navbar .nav .open > a,\n.col-blue-grey .navbar .nav .open > a:hover,\n.col-blue-grey .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-blue-grey .navbar .nav > li > a {\n  color: #fff; }\n\n.col-blue-grey .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-blue-grey .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-black .navbar .navbar-brand,\n.col-black .navbar .navbar-brand:hover,\n.col-black .navbar .navbar-brand:active,\n.col-black .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-black .navbar .nav > li > a:hover,\n.col-black .navbar .nav > li > a:focus,\n.col-black .navbar .nav .open > a,\n.col-black .navbar .nav .open > a:hover,\n.col-black .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-black .navbar .nav > li > a {\n  color: #fff; }\n\n.col-black .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-black .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.col-white .navbar .navbar-brand,\n.col-white .navbar .navbar-brand:hover,\n.col-white .navbar .navbar-brand:active,\n.col-white .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.col-white .navbar .nav > li > a:hover,\n.col-white .navbar .nav > li > a:focus,\n.col-white .navbar .nav .open > a,\n.col-white .navbar .nav .open > a:hover,\n.col-white .navbar .nav .open > a:focus {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.col-white .navbar .nav > li > a {\n  color: #fff; }\n\n.col-white .navbar .bars {\n  float: left;\n  padding: 10px 20px;\n  font-size: 22px;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: -10px;\n  margin-top: 4px; }\n\n.col-white .navbar .bars:hover {\n  background-color: rgba(0, 0, 0, 0.08); }\n\n/* Dropdown Menu =============================== */\n.dropdown-menu {\n  border-radius: 0;\n  margin-top: -35px !important;\n  box-shadow: none;\n  border: none; }\n\n.dropdown-menu .divider {\n  margin: 5px 0; }\n\n.dropdown-menu .header {\n  font-size: 13px;\n  font-weight: bold;\n  min-width: 270px;\n  border-bottom: 1px solid #eee;\n  text-align: center;\n  padding: 4px 0 6px 0; }\n\n.dropdown-menu ul.menu {\n  padding-left: 0; }\n\n.dropdown-menu ul.menu.tasks h4 {\n  color: #333;\n  font-size: 13px;\n  margin: 0 0 8px 0; }\n\n.dropdown-menu ul.menu.tasks h4 small {\n  float: right;\n  margin-top: 6px; }\n\n.dropdown-menu ul.menu.tasks .progress {\n  height: 7px;\n  margin-bottom: 7px; }\n\n.dropdown-menu ul.menu .icon-circle {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: #fff;\n  text-align: center;\n  display: inline-block; }\n\n.dropdown-menu ul.menu .icon-circle i {\n  font-size: 18px;\n  line-height: 36px; }\n\n.dropdown-menu ul.menu li {\n  border-bottom: 1px solid #eee; }\n\n.dropdown-menu ul.menu li:last-child {\n  border-bottom: none; }\n\n.dropdown-menu ul.menu li a {\n  padding: 7px 11px;\n  text-decoration: none;\n  transition: 0.5s; }\n\n.dropdown-menu ul.menu li a:hover {\n  background-color: #e9e9e9; }\n\n.dropdown-menu ul.menu .menu-info {\n  display: inline-block;\n  position: relative;\n  top: 3px;\n  left: 5px; }\n\n.dropdown-menu ul.menu .menu-info h4 {\n  margin: 0;\n  font-size: 13px;\n  color: #333; }\n\n.dropdown-menu ul.menu .menu-info p {\n  margin: 0;\n  font-size: 11px;\n  color: #aaa; }\n\n.dropdown-menu ul.menu .menu-info p .material-icons {\n  font-size: 13px;\n  color: #aaa;\n  position: relative;\n  top: 2px; }\n\n.dropdown-menu .footer a {\n  text-align: center;\n  border-top: 1px solid #eee;\n  padding: 5px 0 5px 0;\n  font-size: 12px;\n  margin-bottom: -5px; }\n\n.dropdown-menu .footer a:hover {\n  background-color: transparent; }\n\n.dropdown-menu > li > a {\n  padding: 7px 18px;\n  color: #666;\n  transition: all 0.5s;\n  font-size: 14px;\n  line-height: 25px; }\n\n.dropdown-menu > li > a:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.dropdown-menu > li > a i.material-icons {\n  float: left;\n  margin-right: 7px;\n  margin-top: 2px;\n  font-size: 20px; }\n\n.dropdown-animated {\n  animation-duration: .3s !important; }\n\n/* Left Sidebar & Overlay ====================== */\n.overlay {\n  position: fixed;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: none;\n  z-index: 10; }\n\n.overlay-open .sidebar {\n  margin-left: 0;\n  z-index: 99999999; }\n\n.sidebar {\n  transition: all 0.5s;\n  font-family: \"Roboto Slab\", sans-serif;\n  background: rgba(255, 255, 255, 0.3);\n  width: 300px;\n  overflow: hidden;\n  display: inline-block;\n  height: calc(100vh - 70px);\n  position: fixed;\n  top: 70px;\n  left: 0;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  z-index: 11 !important; }\n\n.sidebar .legal {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  border-top: 1px solid #eee;\n  padding: 15px;\n  overflow: hidden; }\n\n.sidebar .legal .copyright {\n  font-size: 13px;\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.sidebar .legal .copyright a {\n  font-weight: bold;\n  text-decoration: none; }\n\n.sidebar .legal .version {\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-top: 5px;\n  font-size: 13px; }\n\n.sidebar .user-info {\n  padding: 13px 15px 12px 15px;\n  white-space: nowrap;\n  position: relative;\n  border-bottom: 1px solid #e9e9e9;\n  background: #fff;\n  height: 135px; }\n\n.sidebar .user-info .image {\n  margin-right: 12px;\n  display: inline-block; }\n\n.sidebar .user-info .image img {\n  border-radius: 50%;\n  vertical-align: bottom !important; }\n\n.sidebar .user-info .info-container {\n  cursor: default;\n  display: block;\n  position: relative;\n  top: 25px; }\n\n.sidebar .user-info .info-container .name {\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 14px;\n  max-width: 200px;\n  color: #336699; }\n\n.sidebar .user-info .info-container .email {\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 12px;\n  max-width: 200px;\n  color: #336699; }\n\n.sidebar .user-info .info-container .user-helper-dropdown {\n  position: absolute;\n  right: -3px;\n  bottom: -12px;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  cursor: pointer;\n  color: #336699; }\n\n.sidebar .menu {\n  position: relative;\n  overflow-y: auto;\n  height: 90vh; }\n\n.sidebar .menu .list {\n  list-style: none;\n  padding-left: 0; }\n\n.sidebar .menu .list li.active > :first-child span {\n  font-weight: bold; }\n\n.sidebar .menu .list .header {\n  background: rgba(255, 255, 255, 0.3);\n  font-size: 12px;\n  font-weight: 600;\n  padding: 8px 16px; }\n\n.sidebar .menu .list i.material-icons {\n  margin-top: 4px; }\n\n.sidebar .menu .list .menu-toggle:after,\n.sidebar .menu .list .menu-toggle:before {\n  position: absolute;\n  top: calc(50% - 14px);\n  right: 17px;\n  font-size: 19px;\n  transform: scale(0);\n  transition: all 0.3s; }\n\n.sidebar .menu .list .menu-toggle:before {\n  content: '+';\n  transform: scale(1); }\n\n.sidebar .menu .list .menu-toggle:after {\n  content: '\\2013';\n  transform: scale(0); }\n\n.sidebar .menu .list .menu-toggle.toggled:before {\n  transform: scale(0); }\n\n.sidebar .menu .list .menu-toggle.toggled:after {\n  transform: scale(1); }\n\n.sidebar .menu .list a {\n  color: #747474;\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n  width: 100%;\n  padding: 10px 13px; }\n\n.sidebar .menu .list a:hover,\n.sidebar .menu .list a:active,\n.sidebar .menu .list a:focus {\n  text-decoration: none !important; }\n\n.sidebar .menu .list a small {\n  position: absolute;\n  top: calc(50% - 7.5px);\n  right: 15px; }\n\n.sidebar .menu .list a span {\n  margin: 7px 0 7px 12px;\n  color: #333;\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden; }\n\n.sidebar .menu .list .ml-menu {\n  list-style: none;\n  display: none;\n  padding-left: 0; }\n\n.sidebar .menu .list .ml-menu span {\n  font-weight: normal;\n  font-size: 14px;\n  margin: 3px 0 1px 6px; }\n\n.sidebar .menu .list .ml-menu li a {\n  padding-left: 55px;\n  padding-top: 7px;\n  padding-bottom: 7px; }\n\n.sidebar .menu .list .ml-menu li.active a.toggled:not(.menu-toggle) {\n  font-weight: 600;\n  margin-left: 5px; }\n\n.sidebar .menu .list .ml-menu li.active a.toggled:not(.menu-toggle):before {\n  content: '\\E315';\n  font-family: 'PT Sans';\n  position: relative;\n  font-size: 21px;\n  height: 20px;\n  top: -5px;\n  right: 0px; }\n\n.sidebar .menu .list .ml-menu li .ml-menu li a {\n  padding-left: 80px; }\n\n.sidebar .menu .list .ml-menu li .ml-menu .ml-menu li a {\n  padding-left: 95px; }\n\n.right-sidebar {\n  width: 280px;\n  height: calc(100vh - 70px);\n  position: fixed;\n  right: -300px;\n  top: 70px;\n  background: #fdfdfd;\n  z-index: 11 !important;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  overflow: hidden;\n  transition: 0.5s; }\n\n.right-sidebar.open {\n  right: 0; }\n\n.right-sidebar .nav-tabs {\n  font-weight: 600;\n  font-size: 13px;\n  width: 100%;\n  margin-left: 2px; }\n\n.right-sidebar .nav-tabs li {\n  text-align: center; }\n\n.right-sidebar .nav-tabs li > a {\n  margin-right: 0; }\n\n.right-sidebar .nav-tabs li:first-child {\n  width: 45%; }\n\n.right-sidebar .nav-tabs li:last-child {\n  width: 55%; }\n\n/* Bootstrap Notify ============================ */\n.bootstrap-notify-container {\n  max-width: 320px;\n  text-align: center; }\n\n/* Jquery Nestable ============================= */\n.dd-handle {\n  background-color: #f9f9f9 !important; }\n\n.dd-handle:hover {\n  color: #336699; }\n\n.nestable-dark-theme .dd-handle {\n  background: #ccc !important;\n  border: 1px solid #999 !important; }\n\n.dd3-handle {\n  background: #999 !important; }\n\n.dd3-content:hover {\n  color: #336699; }\n\n/* Login Page ================================== */\n.login-page {\n  background-color: #00bcd4;\n  padding-left: 0;\n  max-width: 360px;\n  margin: 5% auto;\n  overflow-x: hidden; }\n\n.login-page .login-box .msg {\n  color: #555;\n  margin-bottom: 30px;\n  text-align: center; }\n\n.login-page .login-box a {\n  font-size: 14px;\n  text-decoration: none;\n  color: #00bcd4; }\n\n.login-page .login-box .logo {\n  margin-bottom: 20px; }\n\n.login-page .login-box .logo a {\n  font-size: 36px;\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  text-decoration: none; }\n\n.login-page .login-box .logo small {\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  margin-top: -5px; }\n\n/* Sign Up Page ================================ */\n.signup-page {\n  background-color: #00bcd4;\n  padding-left: 0;\n  max-width: 360px;\n  margin: 5% auto;\n  overflow-x: hidden; }\n\n.signup-page .signup-box .msg {\n  color: #555;\n  margin-bottom: 30px;\n  text-align: center; }\n\n.signup-page .signup-box a {\n  font-size: 14px;\n  text-decoration: none;\n  color: #00bcd4; }\n\n.signup-page .signup-box .logo {\n  margin-bottom: 20px; }\n\n.signup-page .signup-box .logo a {\n  font-size: 36px;\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #fff; }\n\n.signup-page .signup-box .logo small {\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  margin-top: -5px; }\n\n/* Forgot Password Page ======================== */\n.fp-page {\n  background-color: #00bcd4;\n  padding-left: 0;\n  max-width: 360px;\n  margin: 5% auto;\n  overflow-x: hidden; }\n\n.fp-page .fp-box .msg {\n  color: #555;\n  margin-bottom: 30px;\n  text-align: center; }\n\n.fp-page .fp-box a {\n  font-size: 14px;\n  text-decoration: none;\n  color: #00bcd4; }\n\n.fp-page .fp-box .logo {\n  margin-bottom: 20px; }\n\n.fp-page .fp-box .logo a {\n  font-size: 36px;\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #fff; }\n\n.fp-page .fp-box .logo small {\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  margin-top: -5px; }\n\n/* 404 Not Found Page ========================== */\n.four-zero-four {\n  width: 100%;\n  text-align: center;\n  margin: 5% auto; }\n\n.four-zero-four .four-zero-four-container .error-code {\n  font-size: 160px; }\n\n.four-zero-four .four-zero-four-container .error-message {\n  font-size: 26px;\n  color: #333;\n  font-weight: bold;\n  margin-top: -40px; }\n\n.four-zero-four .four-zero-four-container .button-place {\n  margin-top: 32px; }\n\n/* 500 Server Error Page ======================= */\n.five-zero-zero {\n  width: 100%;\n  text-align: center;\n  margin: 5% auto; }\n\n.five-zero-zero .five-zero-zero-container .error-code {\n  font-size: 160px; }\n\n.five-zero-zero .five-zero-zero-container .error-message {\n  font-size: 27px;\n  color: #333;\n  font-weight: bold;\n  margin-top: -40px; }\n\n.five-zero-zero .five-zero-zero-container .button-place {\n  margin-top: 32px; }\n\n/* Maps ======================================== */\n/* Google Maps */\n.gmap {\n  width: 100%;\n  height: 400px; }\n\n/* jVector Map */\n.jvector-map {\n  width: 100%;\n  height: 600px; }\n\n/* Charts ====================================== */\n/* Morris */\n.morris-hover.morris-default-style {\n  border-radius: 0; }\n\n/* Flot */\n.flot-chart {\n  width: 100%;\n  height: 320px; }\n\n.panel-switch-btn {\n  position: relative;\n  right: 20px;\n  z-index: 9; }\n\n.panel-switch-btn label {\n  font-weight: bold !important; }\n\n.legendLabel {\n  width: 85px !important;\n  position: relative;\n  left: 3px; }\n\n#multiple_axis_chart .legendLabel {\n  width: 160px !important; }\n\n/* Sparkline */\n.sparkline {\n  text-align: center; }\n\n/* Searchbar =================================== */\n.search-bar {\n  position: fixed;\n  top: -100px;\n  left: 0;\n  z-index: 9999999;\n  width: 100%;\n  transition: 0.25s; }\n\n.search-bar.open {\n  top: 0; }\n\n.search-bar .search-icon {\n  position: absolute;\n  top: 20px;\n  left: 14px; }\n\n.search-bar .search-icon .material-icons {\n  font-size: 32px;\n  color: #999; }\n\n.search-bar .close-search {\n  position: absolute;\n  cursor: pointer;\n  font-size: 30px;\n  top: 16px;\n  right: 18px; }\n\n.search-bar .close-search .material-icons {\n  color: #999;\n  opacity: 1;\n  transition: 0.5s; }\n\n.search-bar .close-search .material-icons:hover {\n  opacity: .5; }\n\n.search-bar input[type=\"text\"] {\n  width: 100%;\n  font-size: 16px;\n  padding: 25px 60px 23px 56px;\n  border: none; }\n\n/* Jquery DataTable ============================ */\n.dataTables_wrapper {\n  position: relative; }\n\n.dataTables_wrapper select {\n  border: none;\n  border-bottom: 1px solid #ddd;\n  border-radius: 0;\n  -ms-box-shadow: none;\n  box-shadow: none; }\n\n.dataTables_wrapper select:active,\n.dataTables_wrapper select:focus {\n  -ms-box-shadow: none;\n  box-shadow: none; }\n\n.dataTables_wrapper input[type=\"search\"] {\n  border-radius: 0;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  font-size: 12px;\n  border-bottom: 1px solid #ddd; }\n\n.dataTables_wrapper input[type=\"search\"]:focus,\n.dataTables_wrapper input[type=\"search\"]:active {\n  border-bottom: 2px solid #1f91f3; }\n\n.dataTables_wrapper .dt-buttons {\n  float: left; }\n\n.dataTables_wrapper .dt-buttons a.dt-button {\n  background-color: #607d8b;\n  color: #fff;\n  padding: 7px 12px;\n  margin-right: 5px;\n  text-decoration: none;\n  box-shadow: none;\n  border-radius: 2px;\n  border: none;\n  font-size: 13px;\n  outline: none; }\n\n.dataTables_wrapper .dt-buttons a.dt-button:active {\n  opacity: 0.8; }\n\n.dt-button-info {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 400px;\n  text-align: center;\n  background-color: #fff;\n  border: 2px solid #999;\n  border-radius: 3px;\n  margin-top: -100px;\n  margin-left: -200px;\n  z-index: 21; }\n\n.dt-button-info h2 {\n  color: #777; }\n\n.dt-button-info div {\n  color: #777;\n  margin-bottom: 20px; }\n\nspan.centerImage {\n  text-align: center; }\n\n/* Light Gallery ================================ */\n.lg-outer .lg-thumb-item,\n.lg-outer .lg-toogle-thumb {\n  border-radius: 0 !important; }\n\n/* For Internet Explorer 10 ===================== */\nhtml.ie10 .sidebar .menu .list li {\n  line-height: 30px; }\n\nhtml.ie10 .sidebar .menu .list .ml-menu li.active a:not(.menu-toggle).toggled:before {\n  top: 6px !important;\n  line-height: 20px !important; }\n\nhtml.ie10 .sidebar .user-info .info-container {\n  top: 15px; }\n\nhtml.ie10 .search-bar input[type=\"text\"] {\n  padding: 26px 60px 26px 56px; }\n\nhtml.ie10 .dropdown-menu ul.menu li a {\n  margin-top: -22px; }\n\nhtml.ie10 .bs-searchbox .form-control {\n  width: 90%; }\n\n/* For Internet Explorer 11 ===================== */\nhtml.ie11 .sidebar .menu .list .ml-menu li.active a:not(.menu-toggle).toggled:before {\n  top: 6px !important;\n  line-height: 20px !important; }\n\nhtml.ie11 .sidebar .user-info .info-container {\n  top: 15px; }\n\nhtml.ie11 .search-bar input[type=\"text\"] {\n  padding: 26px 60px 26px 56px; }\n\nhtml.ie11 .dropdown-menu ul.menu li a {\n  margin-top: -22px; }\n\nhtml.ie11 .bs-searchbox .form-control {\n  width: 90%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_error_service__ = __webpack_require__("../../../../../src/app/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_manage_customers_service__ = __webpack_require__("../../../../../src/app/shared/services/manage-customers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(componentService, errorService, customerService) {
        this.componentService = componentService;
        this.errorService = errorService;
        this.customerService = customerService;
        this.statistics = [];
        this.title = 'HOME';
        this.total = {
            ctr: 0,
            bounceRate: 0,
            emailsSent: 0
        };
        this.newBookings = 0;
        for (var i = 0; i < 5; i++) {
            this.statistics[i] = {
                emailsSent: 0,
                ctr: 0,
                numberOf: 0,
                bounceRate: 0,
            };
        }
        this.intervalIds = [];
        this.south = 0;
        this.east = 0;
        this.north = 0;
        this.west = 0;
        this.reykjavik = 0;
        this.rejkjanes = 0;
        this.westfjords = 0;
        this.allCustomers = 0;
        this.newCustomers = 0;
        this.deletedCustomers = 0;
    }
    HomeComponent.prototype.clearReports = function () {
        this.total = {
            ctr: 0,
            bounceRate: 0,
            emailsSent: 0
        };
        for (var i = 0; i < 5; i++) {
            this.statistics[i] = {
                emailsSent: 0,
                ctr: 0,
                numberOf: 0,
                bounceRate: 0,
            };
        }
    };
    HomeComponent.prototype.getConditionArray = function () {
        var thisDay = new Date();
        var toDate = new Date();
        thisDay.setMinutes(1);
        thisDay.setHours(0);
        toDate.setMinutes(59);
        toDate.setHours(23);
        return [
            thisDay.getTime(),
            new Date().setDate(thisDay.getDate() - 1),
            new Date().setDate(thisDay.getDate() - 7),
            new Date().setDate(thisDay.getDate() - 30),
            new Date().setDate(thisDay.getDate() - 365),
            toDate.getTime()
        ];
    };
    HomeComponent.prototype.filterReports = function (dataSet) {
        this.clearReports();
        var conditions = this.getConditionArray();
        for (var index in dataSet) {
            if (dataSet.hasOwnProperty(index)) {
                var report = dataSet[index];
                var sent = new Date(report['send_time']);
                this.total.emailsSent += report['emails_sent'];
                if ((conditions[0] <= sent.getTime()) && (sent.getTime() <= conditions[5])) {
                    this.statistics[0]['emailsSent'] += report['emails_sent'];
                    this.statistics[0]['ctr'] += report['clicks']['click_rate'];
                    this.statistics[0]['bounceRate'] +=
                        report['bounces']['soft_bounces'] +
                            report['bounces']['hard_bounces'] +
                            report['bounces']['syntax_errors'];
                    this.statistics[0]['numberOf']++;
                }
                if ((conditions[1] <= sent.getTime()) && (sent.getTime() <= conditions[5])) {
                    this.statistics[1]['emailsSent'] += report['emails_sent'];
                    this.statistics[1]['ctr'] += report['clicks']['click_rate'];
                    this.statistics[1]['bounceRate'] +=
                        report['bounces']['soft_bounces'] +
                            report['bounces']['hard_bounces'] +
                            report['bounces']['syntax_errors'];
                    this.statistics[1]['numberOf']++;
                }
                if ((conditions[2] <= sent.getTime()) && (sent.getTime() <= conditions[5])) {
                    this.statistics[2]['emailsSent'] += report['emails_sent'];
                    this.statistics[2]['ctr'] += report['clicks']['click_rate'];
                    this.statistics[2]['bounceRate'] +=
                        report['bounces']['soft_bounces'] +
                            report['bounces']['hard_bounces'] +
                            report['bounces']['syntax_errors'];
                    this.statistics[2]['numberOf']++;
                }
                if ((conditions[3] <= sent.getTime()) && (sent.getTime() <= conditions[5])) {
                    this.statistics[3]['emailsSent'] += report['emails_sent'];
                    this.statistics[3]['ctr'] += report['clicks']['click_rate'];
                    this.statistics[3]['bounceRate'] +=
                        report['bounces']['soft_bounces'] +
                            report['bounces']['hard_bounces'] +
                            report['bounces']['syntax_errors'];
                    this.statistics[3]['numberOf']++;
                }
                if ((conditions[3] <= sent.getTime()) && (sent.getTime() <= conditions[5])) {
                    this.statistics[4]['emailsSent'] += report['emails_sent'];
                    this.statistics[4]['ctr'] += report['clicks']['click_rate'];
                    this.statistics[4]['bounceRate'] +=
                        report['bounces']['soft_bounces'] +
                            report['bounces']['hard_bounces'] +
                            report['bounces']['syntax_errors'];
                    this.statistics[4]['numberOf']++;
                }
            }
        }
        for (var i = 0; i < 5; i++) {
            if (this.statistics[i]['numberOf'] > 0) {
                this.total.ctr += this.statistics[i]['ctr'] = this.statistics[i]['ctr'] / this.statistics[i]['numberOf'];
                this.total.bounceRate += this.statistics[i]['bounceRate'] =
                    this.statistics[i]['bounceRate'] / this.total.emailsSent;
            }
        }
        this.total.ctr = this.total.ctr / 5;
        this.total.bounceRate = this.total.bounceRate / 5;
    };
    HomeComponent.prototype.getReportData = function () {
        var _this = this;
        this.componentService.getData()
            .then(function (data) {
            _this.filterReports(data);
        })
            .catch(function (error) {
            _this.errorService.handleMessage(error);
        });
    };
    HomeComponent.prototype.filterBookings = function (dataSet) {
        this.newBookings = 0;
        var condition = new Date().setDate(new Date().getDate() - 7);
        for (var key in dataSet) {
            var booking = dataSet[key];
            if (booking.creationDate >= condition) {
                this.newBookings++;
            }
        }
    };
    HomeComponent.prototype.filterCustomers = function (dataSet) {
        this.clearBookings();
        this.allCustomers = dataSet.length;
        var condition = new Date().setDate(new Date().getDate() - 7);
        for (var index in dataSet) {
            var data = dataSet[index];
            if (data.metadata && data.metadata.creationDate &&
                condition <= data.metadata.creationDate) {
                this.newCustomers++;
            }
            switch (data.area) {
                case 'South':
                    this.south++;
                    break;
                case 'West':
                    this.west++;
                    break;
                case 'North':
                    this.north++;
                    break;
                case 'East':
                    this.east++;
                    break;
                case 'Reykjavík':
                    this.reykjavik++;
                    break;
                case 'Reykjanes':
                    this.rejkjanes++;
                    break;
                case 'Westfjords':
                    this.westfjords++;
                    break;
            }
        }
    };
    HomeComponent.prototype.clearBookings = function () {
        this.south = 0;
        this.east = 0;
        this.north = 0;
        this.west = 0;
        this.reykjavik = 0;
        this.rejkjanes = 0;
        this.westfjords = 0;
    };
    HomeComponent.prototype.getBookings = function () {
        var _this = this;
        this.componentService.getBookings()
            .then(function (data) {
            _this.filterBookings(data.results);
        })
            .catch(function (err) {
            _this.errorService.handleMessage(err);
        });
    };
    HomeComponent.prototype.getResorts = function () {
        var _this = this;
        this.customerService.getResortCustomers()
            .then(function (data) {
            _this.filterCustomers(data);
        })
            .catch(function (error) {
            _this.errorService.handleMessage(error);
        });
        this.customerService.getDeletedCustomer()
            .then(function (data) {
            _this.deletedCustomers = data.length;
        })
            .catch(function (error) {
            _this.errorService.handleMessage(error);
        });
    };
    ;
    HomeComponent.prototype.ngOnInit = function () {
        this.getReportData();
        this.getResorts();
        this.getBookings();
        this.intervalIds[0] = window.setInterval(this.getReportData, 120000, this);
        this.intervalIds[1] = window.setInterval(this.getResorts, 120000, this);
        this.intervalIds[2] = window.setInterval(this.getBookings, 120000, this);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.intervalIds; _i < _a.length; _i++) {
            var id = _a[_i];
            window.clearInterval(id);
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__error_error_service__["a" /* ErrorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_manage_customers_service__["a" /* ManageCustomersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_manage_customers_service__["a" /* ManageCustomersService */]) === "function" && _c || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.get('mailchimp/report').toPromise()
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject(error); });
            // resolve({});
        });
    };
    HomeService.prototype.getBookings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.get('bokun/bookings').toPromise()
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject(error); });
        });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], HomeService);
    return HomeService;
    var _a;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ "../../../../../src/app/lock-screen/lock-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-box-w wider centered\">\r\n    <div class=\"logo-w\">\r\n        <a href=\"index.html\">\r\n            <img alt=\"\" src=\"assets/img/logo-big.png\">\r\n        </a>\r\n    </div>\r\n    <h5 class=\"auth-header\">\r\n        Welcome Back\r\n    </h5>\r\n    <div class=\"logged-user-w\">\r\n        <div class=\"avatar-w\">\r\n            <img alt=\"\" [src]=\"user.avatarId\">\r\n        </div>\r\n        <div class=\"logged-user-name\">\r\n                {{ (user.firstName || '') }} {{ (user.lastName || '') }}\r\n        </div>\r\n        <div class=\"logged-user-role\">\r\n               Locked {{ user.isAdmin ? '(Administrator)' : '(User)' }}\r\n        </div>\r\n    </div>\r\n    <form (ngSubmit)=\"unlockUser(password.value)\">\r\n        <div class=\"form-group\">\r\n            <label for=\"\">Enter your password to access your account</label>\r\n            <input class=\"form-control\" placeholder=\"Enter your password\" type=\"password\"\r\n            #password required />\r\n            <div class=\"pre-icon os-icon os-icon-fingerprint\"></div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"errorMessage\">\r\n                <label class=\"form-control alert-danger text-center\">{{ errorMessage }}</label>\r\n            </div>\r\n        <div class=\"buttons-w\">\r\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Log me in\" />\r\n            <a class=\"btn btn-link\" (click)=\"relogUser()\">Login as different user</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lock-screen/lock-screen.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lock-screen/lock-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lock_screen_service__ = __webpack_require__("../../../../../src/app/lock-screen/lock-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_user_models__ = __webpack_require__("../../../../../src/app/shared/models/user.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LockScreenComponent = /** @class */ (function () {
    function LockScreenComponent(componentService, userService) {
        this.componentService = componentService;
        this.userService = userService;
        this.isLocked = true;
        this.errorMessage = '';
    }
    LockScreenComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getUser();
    };
    LockScreenComponent.prototype.unlockUser = function (password) {
        var _this = this;
        this.user.password = password;
        this.componentService.unlockScreen(this.user)
            .then(function (user) {
            var prevUrl = _this.userService.unlockUser(user);
            _this.componentService.navigateToPrevious(prevUrl);
        })
            .catch(function (error) {
            _this.errorMessage = error.error;
        });
    };
    LockScreenComponent.prototype.relogUser = function () {
        this.userService.setUser(new __WEBPACK_IMPORTED_MODULE_2__shared_models_user_models__["a" /* User */]());
        this.componentService.navigateToLogin();
    };
    LockScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-lock-screen',
            template: __webpack_require__("../../../../../src/app/lock-screen/lock-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lock-screen/lock-screen.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__lock_screen_service__["a" /* LockScreenService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lock_screen_service__["a" /* LockScreenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lock_screen_service__["a" /* LockScreenService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object])
    ], LockScreenComponent);
    return LockScreenComponent;
    var _a, _b;
}());

//# sourceMappingURL=lock-screen.component.js.map

/***/ }),

/***/ "../../../../../src/app/lock-screen/lock-screen.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockScreenModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lock_screen_component__ = __webpack_require__("../../../../../src/app/lock-screen/lock-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lock_screen_service__ = __webpack_require__("../../../../../src/app/lock-screen/lock-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LockScreenModule = /** @class */ (function () {
    function LockScreenModule() {
    }
    LockScreenModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__lock_screen_component__["a" /* LockScreenComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__lock_screen_component__["a" /* LockScreenComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__lock_screen_service__["a" /* LockScreenService */]
            ]
        })
    ], LockScreenModule);
    return LockScreenModule;
}());

//# sourceMappingURL=lock-screen.module.js.map

/***/ }),

/***/ "../../../../../src/app/lock-screen/lock-screen.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockScreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LockScreenService = /** @class */ (function () {
    function LockScreenService(userService, loginService, router) {
        this.userService = userService;
        this.loginService = loginService;
        this.router = router;
        this.listener = this.resetTimer.bind(this);
        this.lockAfter = 1800000;
    }
    LockScreenService.prototype.init = function () {
        if (!this.timer) {
            this.initialize();
        }
    };
    LockScreenService.prototype.lockScreen = function () {
        if (this.userService.getUser().isAuth && !this.userService.isLocked) {
            this.userService.lockUser(this.router.url);
            this.dispose();
            this.router.navigateByUrl('lock');
        }
    };
    LockScreenService.prototype.unlockScreen = function (user) {
        if (this.userService.isLocked) {
            return this.loginService.login(user);
        }
    };
    LockScreenService.prototype.navigateToLogin = function () {
        this.router.navigateByUrl('login');
    };
    LockScreenService.prototype.navigateToPrevious = function (prevUrl) {
        this.initialize();
        this.router.navigate([prevUrl]);
    };
    LockScreenService.prototype.initialize = function () {
        window.addEventListener('load', this.listener);
        window.addEventListener('mousemove', this.listener);
        window.addEventListener('click', this.listener);
        window.addEventListener('scroll', this.listener);
        window.addEventListener('keypress', this.listener);
        this.setTimer();
    };
    LockScreenService.prototype.dispose = function () {
        clearTimeout(this.timer);
        window.removeEventListener('load', this.listener);
        window.removeEventListener('mousemove', this.listener);
        window.removeEventListener('click', this.listener);
        window.removeEventListener('scroll', this.listener);
        window.removeEventListener('keypress', this.listener);
    };
    LockScreenService.prototype.setTimer = function () {
        var _this = this;
        this.timer = setTimeout(function () {
            _this.lockScreen();
        }, this.lockAfter);
    };
    LockScreenService.prototype.resetTimer = function () {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
            this.setTimer();
        }
    };
    LockScreenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], LockScreenService);
    return LockScreenService;
    var _a, _b, _c;
}());

//# sourceMappingURL=lock-screen.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"all-wrapper menu-side with-pattern\">\r\n    <div class=\"auth-box-w\">\r\n        <div class=\"logo-w\">\r\n            <a routerLink=\"home\">\r\n                <img alt=\"\" src=\"assets/img/logo-big.png\">\r\n            </a>\r\n        </div>\r\n        <h4 class=\"auth-header\">\r\n            Login Form\r\n        </h4>\r\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Username</label>\r\n                <input class=\"form-control\" placeholder=\"Enter your username\" type=\"text\" [(ngModel)]=\"credentials.eMail\" name=\"userName\"\r\n                    required>\r\n                <div class=\"pre-icon os-icon os-icon-user-male-circle\"></div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Password</label>\r\n                <input class=\"form-control\" placeholder=\"Enter your password\" type=\"password\" [(ngModel)]=\"credentials.password\" name=\"password\"\r\n                    required>\r\n                <div class=\"pre-icon os-icon os-icon-fingerprint\"></div>\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"errorMessage\">\r\n                <label class=\"form-control alert-danger text-center\">{{ errorMessage }}</label>\r\n            </div>\r\n            <div class=\"buttons-w\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.form.valid\">\r\n                    Log me in\r\n                </button>\r\n                <div class=\"form-check-inline\">\r\n                    <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\">Remember Me</label>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42a948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user_models__ = __webpack_require__("../../../../../src/app/shared/models/user.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_utilities__ = __webpack_require__("../../../../../src/app/shared/shared.utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lock_screen_lock_screen_service__ = __webpack_require__("../../../../../src/app/lock-screen/lock-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(componentService, userService, router, lockScreen) {
        this.componentService = componentService;
        this.userService = userService;
        this.router = router;
        this.lockScreen = lockScreen;
        this.credentials = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user_models__["a" /* User */]();
        this.errorMessage = '';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.componentService.login(this.credentials)
            .then(function (result) {
            if (result && Object(__WEBPACK_IMPORTED_MODULE_4__shared_shared_utilities__["c" /* isUser */])(result)) {
                _this.handleSuccessfulLogin(result);
            }
            else {
                _this.handleUnsuccessfulLogin();
            }
        })
            .catch(function (error) {
            _this.handleUnsuccessfulLogin(Object(__WEBPACK_IMPORTED_MODULE_4__shared_shared_utilities__["a" /* getErrorMessage */])(error));
        });
    };
    LoginComponent.prototype.handleSuccessfulLogin = function (user) {
        this.errorMessage = '';
        user.isAuth = true;
        this.userService.setUser(user);
        this.lockScreen.init();
        this.router.navigateByUrl('/home');
    };
    LoginComponent.prototype.handleUnsuccessfulLogin = function (errorMsg) {
        // todo: handle properly
        this.errorMessage = errorMsg || 'Login failed';
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__lock_screen_lock_screen_service__["a" /* LockScreenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__lock_screen_lock_screen_service__["a" /* LockScreenService */]) === "function" && _d || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (credentials) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http
                .post('user/login', {
                eMail: credentials.eMail,
                password: credentials.password
            })
                .toPromise()
                .then(function (response) {
                resolve(response);
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu-mobile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mm-logo-buttons-w\">\r\n    <a class=\"mm-logo\" routerLink=\"home\">\r\n        <img src=\"assets/img/logo.png\">\r\n        <span>Ferðavefir</span>\r\n    </a>\r\n    <div class=\"mm-buttons\">\r\n        <div class=\"content-panel-open\">\r\n            <div class=\"os-icon os-icon-grid-circles\"></div>\r\n        </div>\r\n        <div class=\"mobile-menu-trigger\">\r\n            <div class=\"os-icon os-icon-hamburger-menu-1\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"menu-and-user\">\r\n    <div class=\"logged-user-w\">\r\n        <div class=\"avatar-w\">\r\n            <img alt=\"\" [src]=\"user.avatarId\">\r\n        </div>\r\n        <div class=\"logged-user-info-w\">\r\n            <div class=\"logged-user-name\">\r\n                {{ (user.firstName || '') }} {{ (user.lastName || '') }}\r\n            </div>\r\n            <div class=\"logged-user-role\">\r\n                {{ !user.isAuth ? 'Guest' : user.isAdmin ? 'Administrator' : 'User' }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <app-menu-navigation></app-menu-navigation>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu-mobile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuMobileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_user_models__ = __webpack_require__("../../../../../src/app/shared/models/user.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuMobileComponent = /** @class */ (function () {
    function MenuMobileComponent(el, userService) {
        this.el = el;
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__shared_models_user_models__["a" /* User */]();
        this.isAuth = true;
    }
    MenuMobileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuth.subscribe(function (isAuth) {
            _this.isAuth = isAuth;
            _this.user = _this.userService.getUser();
        });
    };
    MenuMobileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-menu-mobile',
            template: __webpack_require__("../../../../../src/app/menu/menu-mobile.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object])
    ], MenuMobileComponent);
    return MenuMobileComponent;
    var _a, _b;
}());

//# sourceMappingURL=menu-mobile.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-w\">\r\n    <a class=\"logo\" routerLink=\"home\">\r\n        <img src=\"assets/img/logo.png\">\r\n        <span>Ferðavefir</span>\r\n    </a>\r\n</div>\r\n<div class=\"menu-and-user\">\r\n    <div class=\"logged-user-w\">\r\n        <div class=\"logged-user-i\">\r\n            <div class=\"avatar-w\">\r\n                <img alt=\"\" [src]=\"user.avatarId\">\r\n            </div>\r\n            <div class=\"logged-user-info-w\">\r\n                <div class=\"logged-user-name\">\r\n                    {{ (user.firstName || '') }} {{ (user.lastName || '') }}\r\n                </div>\r\n                <div class=\"logged-user-role\">\r\n                    {{ !user.isAuth ? 'Guest' : user.isAdmin ? 'Administrator' : 'User' }}\r\n                </div>\r\n            </div>\r\n            <div class=\"logged-user-menu\">\r\n                <app-menu-user-panel></app-menu-user-panel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-menu-navigation></app-menu-navigation>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_user_models__ = __webpack_require__("../../../../../src/app/shared/models/user.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(el, userService) {
        this.el = el;
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__shared_models_user_models__["a" /* User */]();
        this.isAuth = true;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuth.subscribe(function (isAuth) {
            _this.isAuth = isAuth;
            _this.user = _this.userService.getUser();
        });
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_navigation_module__ = __webpack_require__("../../../../../src/app/menu/navigation/navigation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_panel_user_panel_module__ = __webpack_require__("../../../../../src/app/menu/user-panel/user-panel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_mobile_component__ = __webpack_require__("../../../../../src/app/menu/menu-mobile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__menu_mobile_component__["a" /* MenuMobileComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__menu_mobile_component__["a" /* MenuMobileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__user_panel_user_panel_module__["a" /* MenuUserPanelModule */],
                __WEBPACK_IMPORTED_MODULE_3__navigation_navigation_module__["a" /* MenuNavigationModule */]
            ],
            providers: []
        })
    ], MenuModule);
    return MenuModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ "../../../../../src/app/menu/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"main-menu\">\r\n    <li class=\"\">\r\n        <a routerLink=\"home\">\r\n            <div class=\"icon-w\">\r\n                <div class=\"os-icon os-icon-window-content\"></div>\r\n            </div>\r\n            <span>Home</span>\r\n        </a>\r\n        <ul class=\"sub-menu\">\r\n\r\n        </ul>\r\n    </li>\r\n\r\n    <li class=\"has-sub-menu\" (click)=\"openSubMenu(menu)\" #menu>\r\n        <a>\r\n            <div class=\"icon-w\">\r\n                <div class=\"os-icon os-icon-grid-squares\"></div>\r\n            </div>\r\n            <span>Customers</span>\r\n        </a>\r\n        <ul class=\"sub-menu\">\r\n            <li>\r\n                <a routerLink=\"add-customer\">Add Customer</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"manage-customers\">Manage Customers</a>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".has-sub-menu {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.openSubMenu = function (menuElement) {
        if (menuElement.className.indexOf('active') > -1) {
            menuElement.className = menuElement.className.replace('active', '').trim();
        }
        else {
            menuElement.className += ' active';
        }
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-menu-navigation',
            template: __webpack_require__("../../../../../src/app/menu/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuNavigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_component__ = __webpack_require__("../../../../../src/app/menu/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuNavigationModule = /** @class */ (function () {
    function MenuNavigationModule() {
    }
    MenuNavigationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__navigation_component__["a" /* NavigationComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__navigation_component__["a" /* NavigationComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
            ],
            providers: []
        })
    ], MenuNavigationModule);
    return MenuNavigationModule;
}());

//# sourceMappingURL=navigation.module.js.map

/***/ }),

/***/ "../../../../../src/app/menu/user-panel/user-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logged-user-avatar-info\">\r\n    <div class=\"avatar-w\">\r\n      <img alt=\"\" [src]=\"user.avatarId\">\r\n    </div>\r\n    <div class=\"logged-user-info-w\">\r\n      <div class=\"logged-user-name\">\r\n        {{ (user.firstName || '') }} {{ (user.lastName || '') }}\r\n      </div>\r\n      <div class=\"logged-user-role\">\r\n        {{ !user.isAuth ? 'Guest' : user.isAdmin ? 'Administrator' : 'User' }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bg-icon\">\r\n    <i class=\"os-icon os-icon-wallet-loaded\"></i>\r\n  </div>\r\n  <ul>\r\n    <li>\r\n      <a (click)=\"profileDetail()\"><i class=\"os-icon os-icon-user-male-circle2\"></i><span>Profile Details</span></a>\r\n    </li>\r\n    <li>\r\n      <a (click)=\"logOut()\"><i class=\"os-icon os-icon-signs-11\"></i><span>Logout</span></a>\r\n    </li>\r\n  </ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu/user-panel/user-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/user-panel/user-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_panel_service__ = __webpack_require__("../../../../../src/app/menu/user-panel/user-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_user_models__ = __webpack_require__("../../../../../src/app/shared/models/user.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserPanelComponent = /** @class */ (function () {
    function UserPanelComponent(componentService, userService, router) {
        this.componentService = componentService;
        this.userService = userService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__shared_models_user_models__["a" /* User */]();
    }
    UserPanelComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserPanelComponent.prototype.profileDetail = function () {
        this.router.navigateByUrl('/profile');
    };
    UserPanelComponent.prototype.logOut = function () {
        this.userService.setUser(new __WEBPACK_IMPORTED_MODULE_2__shared_models_user_models__["a" /* User */]());
        this.router.navigateByUrl('/login');
    };
    UserPanelComponent.prototype.getUser = function () {
        this.user = this.userService.getUser();
    };
    UserPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-menu-user-panel',
            template: __webpack_require__("../../../../../src/app/menu/user-panel/user-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/user-panel/user-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_panel_service__["a" /* UserPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_panel_service__["a" /* UserPanelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], UserPanelComponent);
    return UserPanelComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=user-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/user-panel/user-panel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuUserPanelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_panel_component__ = __webpack_require__("../../../../../src/app/menu/user-panel/user-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_panel_service__ = __webpack_require__("../../../../../src/app/menu/user-panel/user-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MenuUserPanelModule = /** @class */ (function () {
    function MenuUserPanelModule() {
    }
    MenuUserPanelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__user_panel_component__["a" /* UserPanelComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__user_panel_component__["a" /* UserPanelComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__user_panel_service__["a" /* UserPanelService */]
            ]
        })
    ], MenuUserPanelModule);
    return MenuUserPanelModule;
}());

//# sourceMappingURL=user-panel.module.js.map

/***/ }),

/***/ "../../../../../src/app/menu/user-panel/user-panel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPanelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserPanelService = /** @class */ (function () {
    function UserPanelService(http) {
        this.http = http;
    }
    UserPanelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], UserPanelService);
    return UserPanelService;
    var _a;
}());

//# sourceMappingURL=user-panel.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"content-w\">\r\n        <div class=\"content-i\">\r\n            <div class=\"content-box\">\r\n                <div class=\"element-wrapper\">\r\n                    <div class=\"element-box\">\r\n                        <h5 class=\"form-header\">\r\n                            Profile\r\n                        </h5>\r\n                        <br>\r\n                        <br>\r\n                        <h6>To be designed...</h6>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_error_service__ = __webpack_require__("../../../../../src/app/error/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(componentService, errorService) {
        var _this = this;
        this.componentService = componentService;
        this.errorService = errorService;
        this.componentService
            .getData()
            .then(function (result) {
        })
            .catch(function (error) {
            _this.errorService.handleMessage(error);
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__error_error_service__["a" /* ErrorService */]) === "function" && _b || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__profile_component__["a" /* ProfileComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__profile_component__["a" /* ProfileComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getData = function () {
        return new Promise(function (resolve, reject) {
            resolve({});
        });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], ProfileService);
    return ProfileService;
    var _a;
}());

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/resort-customers/add-customer/add-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-w\">\r\n    <div class=\"content-i\">\r\n        <div class=\"content-box\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"element-wrapper\">\r\n                        <div class=\"element-box\">\r\n                            <form id=\"formValidate\" #customerForm=\"ngForm\" (ngSubmit)=\"addCustomer()\">\r\n                                <div class=\"element-info\">\r\n                                    <div class=\"element-info-with-icon\">\r\n                                        <div class=\"element-info-icon\">\r\n                                            <div class=\"os-icon os-icon-wallet-loaded\"></div>\r\n                                        </div>\r\n                                        <div class=\"element-info-text\">\r\n                                            <h5 class=\"element-inner-header\">\r\n                                                Add Customer\r\n                                            </h5>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <fieldset class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\">\r\n                                                    <h5>Detail info</h5>\r\n                                                </label>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\">\r\n                                                    <h5>Profile background</h5>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\">Name</label>\r\n                                                <input type=\"text\" class=\"form-control\" data-error=\"Please input your Name\" placeholder=\"Name\" required=\"required\" [(ngModel)]=\"customer.contact.name\"\r\n                                                    name=\"name\">\r\n                                                <div class=\"help-block form-text with-errors form-control-feedback\"></div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\"> Email</label>\r\n                                                <input type=\"text\" class=\"form-control\" data-error=\"Please input your Email\" placeholder=\"Email\" required=\"required\" [(ngModel)]=\"customer.contact.email\"\r\n                                                    name=\"email\">\r\n                                                <div class=\"help-block form-text with-errors form-control-feedback\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <app-image-upload></app-image-upload>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\"> Phone</label>\r\n                                                <input class=\"form-control\" data-error=\"Please input your Phone\" placeholder=\"Phone\" required=\"required\" type=\"text\" [(ngModel)]=\"customer.contact.phone\"\r\n                                                    name=\"phone\">\r\n                                                <div class=\"help-block form-text with-errors form-control-feedback\"></div>\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"\"> Type</label>\r\n                                                    <select class=\"form-control\" required=\"required\" [(ngModel)]=\"customer.type\" name=\"type\">\r\n                                                        <option *ngFor=\"let type of types\">\r\n                                                            {{ type }}\r\n                                                        </option>\r\n                                                    </select>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\">Rooms</label>\r\n                                                <input type=\"number\" min=\"0\" class=\"form-control\" data-error=\"Please put in Rooms\" placeholder=\"Rooms\" required=\"required\"\r\n                                                    [(ngModel)]=\"customer.rooms\" name=\"rooms\" oninput=\"validity.valid||(value='');\">\r\n                                                <div class=\"help-block form-text with-errors form-control-feedback\"></div>\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"\"> Address</label>\r\n                                                    <input type=\"text\" class=\"form-control\" data-error=\"Please put in Address\" placeholder=\"Address\" required=\"required\"\r\n                                                        [(ngModel)]=\"customer.contact.address\" name=\"address\">\r\n                                                    <div class=\"help-block form-text with-errors form-control-feedback\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"\"> Area</label>\r\n                                        <select class=\"form-control\" required=\"required\" [(ngModel)]=\"customer.area\" name=\"area\" placeholder=\"Select Area\">\r\n                                            <option *ngFor=\"let area of areas\">\r\n                                                {{ area }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\">Bokun access key</label>\r\n                                                <input type=\"text\" class=\"form-control password-toggle\" data-error=\"Please input your access key\" placeholder=\"Access key\" required=\"required\"\r\n                                                       [(ngModel)]=\"customer.APIAccess.bokun.accessKey\" name=\"access-key\">\r\n                                                <div class=\"help-block form-text with-errors form-control-feedback\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\"> Bokun secret key</label>\r\n                                                <input type=\"text\" class=\"form-control password-toggle\" data-error=\"Please input your secret key\" placeholder=\"Secret key\" required=\"required\"\r\n                                                       [(ngModel)]=\"customer.APIAccess.bokun.secretKey\" name=\"secret-key\">\r\n                                                <div class=\"help-block form-text with-errors form-control-feedback\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </fieldset>\r\n\r\n                                <div class=\"form-buttons-w\">\r\n                                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!customerForm.form.valid\">Submit</button>\r\n\r\n                                    <div class=\"form-group form-error-msg\" *ngIf=\"errorMessage\">\r\n                                        <label class=\"form-control alert-danger text-center\">{{ errorMessage }}</label>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/resort-customers/add-customer/add-customer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-error-msg {\n  width: calc(100% - 80px);\n  display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resort-customers/add-customer/add-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resort_customers_models__ = __webpack_require__("../../../../../src/app/resort-customers/resort-customers.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_error_service__ = __webpack_require__("../../../../../src/app/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_customer_service__ = __webpack_require__("../../../../../src/app/resort-customers/add-customer/add-customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_image_upload_image_upload_component__ = __webpack_require__("../../../../../src/app/shared/image-upload/image-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_utilities__ = __webpack_require__("../../../../../src/app/shared/shared.utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_file_service__ = __webpack_require__("../../../../../src/app/shared/services/file-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(componentService, errorService, fileService) {
        this.componentService = componentService;
        this.errorService = errorService;
        this.fileService = fileService;
        this.createUser();
        this.areas = [
            'South',
            'West',
            'North',
            'East',
            'Westfjords',
            'Reykjavík',
            'Reykjanes'
        ];
        this.types = [
            'Hotel',
            //'Guesthouse',
            'Apartment',
            'Tour operator'
        ];
        this.errorMessage = '';
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
    };
    AddCustomerComponent.prototype.addCustomer = function () {
        var _this = this;
        if (this.isValid()) {
            if (this.fileUpload.fileObject) {
                this.fileService.sendFile(this.fileUpload.fileObject)
                    .then(function (result) {
                    _this.customer.backgroundId = result.id;
                    _this.saveCustomer();
                })
                    .catch(function (error) {
                    _this.errorService.handleMessage(error);
                });
            }
            else {
                this.saveCustomer();
            }
        }
    };
    AddCustomerComponent.prototype.saveCustomer = function () {
        var _this = this;
        this.componentService.addCustomer(this.customer)
            .then(function (r) {
            _this.errorService.handleMessage({
                status: 200,
                title: 'Success',
                description: 'New resort customer created'
            });
            _this.errorMessage = '';
            _this.createUser();
            _this.fileUpload.reset();
        })
            .catch(function (error) {
            _this.errorService.handleMessage(error);
        });
    };
    AddCustomerComponent.prototype.isValid = function () {
        this.errorMessage = '';
        if (this.customer.type === 'Select type') {
            this.errorMessage = 'Please select proper type';
            return false;
        }
        if (this.customer.area === 'Select area') {
            this.errorMessage = 'Please select proper area';
            return false;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__shared_shared_utilities__["b" /* isNumeric */])(this.customer.rooms) || this.customer.rooms < 1) {
            this.errorMessage = 'Rooms has to be an integer number higher than 0';
            return false;
        }
        return true;
    };
    AddCustomerComponent.prototype.createUser = function () {
        this.customer = new __WEBPACK_IMPORTED_MODULE_1__resort_customers_models__["a" /* ResortCustomer */]();
        this.customer.type = 'Select type';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__shared_image_upload_image_upload_component__["a" /* ImageUploadComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_image_upload_image_upload_component__["a" /* ImageUploadComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_image_upload_image_upload_component__["a" /* ImageUploadComponent */]) === "function" && _a || Object)
    ], AddCustomerComponent.prototype, "fileUpload", void 0);
    AddCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-add-customer',
            template: __webpack_require__("../../../../../src/app/resort-customers/add-customer/add-customer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/resort-customers/add-customer/add-customer.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__add_customer_service__["a" /* AddCustomersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__add_customer_service__["a" /* AddCustomersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__error_error_service__["a" /* ErrorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_file_service__["a" /* FileService */]) === "function" && _d || Object])
    ], AddCustomerComponent);
    return AddCustomerComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=add-customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/resort-customers/add-customer/add-customer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_customer_component__ = __webpack_require__("../../../../../src/app/resort-customers/add-customer/add-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_customer_service__ = __webpack_require__("../../../../../src/app/resort-customers/add-customer/add-customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_manage_customers_service__ = __webpack_require__("../../../../../src/app/shared/services/manage-customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resort_details_resort_details_service__ = __webpack_require__("../../../../../src/app/resort-customers/resort-details/resort-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AddCustomerModule = /** @class */ (function () {
    function AddCustomerModule() {
    }
    AddCustomerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__add_customer_component__["a" /* AddCustomerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__add_customer_component__["a" /* AddCustomerComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__add_customer_service__["a" /* AddCustomersService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_services_manage_customers_service__["a" /* ManageCustomersService */],
                __WEBPACK_IMPORTED_MODULE_6__resort_details_resort_details_service__["a" /* ResortDetailsService */]
            ]
        })
    ], AddCustomerModule);
    return AddCustomerModule;
}());

//# sourceMappingURL=add-customer.module.js.map

/***/ }),

/***/ "../../../../../src/app/resort-customers/add-customer/add-customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddCustomersService = /** @class */ (function () {
    function AddCustomersService(http) {
        this.http = http;
    }
    AddCustomersService.prototype.addCustomer = function (customer) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var obj = customer.getPostObject();
            _this.http.post('resort-customer/', obj).toPromise()
                .then(resolve)
                .catch(reject);
        });
    };
    AddCustomersService.prototype.editCustomer = function (customer) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    AddCustomersService.prototype.removeCustomer = function (customer) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    AddCustomersService.prototype.getCustomer = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    AddCustomersService.prototype.getAreas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.mockAreas());
        });
    };
    AddCustomersService.prototype.mockAreas = function () {
        return [
            'North',
            'South',
            'East',
            'West'
        ];
    };
    AddCustomersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], AddCustomersService);
    return AddCustomersService;
    var _a;
}());

//# sourceMappingURL=add-customer.service.js.map

/***/ }),

/***/ "../../../../../src/app/resort-customers/manage-customers/manage-customers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-w\">\r\n    <div class=\"content-i\">\r\n        <div class=\"content-box\">\r\n            <div class=\"element-wrapper\">\r\n                <div class=\"element-box\">\r\n                    <h5 class=\"form-header\">\r\n                        Manage Customers\r\n                    </h5>\r\n                    <div class=\"table-responsive\">\r\n                        <div id=\"dataTable1_wrapper\" class=\"dataTables_wrapper container-fluid dt-bootstrap4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12 col-md-6\">\r\n                                    <div class=\"dataTables_length\" id=\"dataTable1_length\">\r\n                                        <label>Show\r\n                                            <select name=\"dataTable1_length\" aria-controls=\"dataTable1\" class=\"form-control form-control-sm\" #aggregation (change)=\"changeAggregation(aggregation.value)\">\r\n                                                <option value=\"10\">10</option>\r\n                                                <option value=\"25\">25</option>\r\n                                                <option value=\"50\">50</option>\r\n                                                <option value=\"100\">100</option>\r\n                                            </select> entries</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-12 col-md-6\">\r\n                                    <div id=\"dataTable1_filter\" class=\"dataTables_filter\">\r\n                                        <label>Search:\r\n                                            <input type=\"search\" class=\"form-control form-control-sm\" placeholder=\"\" aria-controls=\"dataTable1\"\r\n                                                #searchInput (change)=\"search(searchInput.value)\">\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <table id=\"dataTable1\" width=\"100%\" class=\"table table-striped table-lightfont dataTable\" role=\"grid\" aria-describedby=\"dataTable1_info\"\r\n                                        style=\"width: 100%;\">\r\n                                        <thead>\r\n                                            <tr role=\"row\">\r\n                                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"dataTable1\" rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-sort=\"ascending\" aria-label=\"Name: activate to sort column descending\"\r\n                                                    style=\"width: 206.6px;\" #colHeader1 (click)=\"sortBy('contact', colHeader1)\">Name</th>\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"dataTable1\" rowspan=\"1\"\r\n                                                    colspan=\"1\" aria-label=\"Type: activate to sort column ascending\" style=\"width: 105.6px;\"\r\n                                                    #colHeader2 (click)=\"sortBy('',colHeader2)\">Type</th>\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"dataTable1\"\r\n                                                    rowspan=\"1\" colspan=\"1\" aria-label=\"Email: activate to sort column ascending\"\r\n                                                    style=\"width: 183.6px;\" #colHeader3 (click)=\"sortBy('contact', colHeader3)\">Email</th>\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"dataTable1\" rowspan=\"1\"\r\n                                                    colspan=\"1\" aria-label=\"Rooms: activate to sort column ascending\" style=\"width: 80.6px;\"\r\n                                                    #colHeader4 (click)=\"sortBy('', colHeader4)\">Rooms</th>\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"dataTable1\" rowspan=\"1\"\r\n                                                    colspan=\"1\" aria-label=\"Last Sent: activate to sort column ascending\" style=\"width: 108.6px;\"\r\n                                                    #colHeader5 (click)=\"sortBy('', colHeader5)\">Last Sent</th>\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"dataTable1\"\r\n                                                    rowspan=\"1\" colspan=\"1\" aria-label=\"Invoice: activate to sort column ascending\"\r\n                                                    style=\"width: 91.6px;\" #colHeader6 (click)=\"sortBy('', colHeader6)\">Invoice</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tfoot>\r\n                                            <tr>\r\n                                                <th rowspan=\"1\" colspan=\"1\">Name</th>\r\n                                                <th rowspan=\"1\" colspan=\"1\">Type</th>\r\n                                                <th rowspan=\"1\" colspan=\"1\">Email</th>\r\n                                                <th rowspan=\"1\" colspan=\"1\">Rooms</th>\r\n                                                <th rowspan=\"1\" colspan=\"1\">Last Sent</th>\r\n                                                <th rowspan=\"1\" colspan=\"1\">Invoice</th>\r\n                                            </tr>\r\n                                        </tfoot>\r\n                                        <tbody>\r\n                                            <tr role=\"row\" *ngFor=\"let customer of customers; let index=index; let odd=odd; let even=even;\" [ngClass]=\"{ odd: odd, even: even }\">\r\n                                                <td class=\"sorting_1\">\r\n                                                    <a routerLink=\"/resort-details/{{customer._id}}\">\r\n                                                        {{ customer.contact.name }}\r\n                                                    </a>\r\n                                                </td>\r\n                                                <td>{{ customer.type }}</td>\r\n                                                <td>{{ customer.contact.email }}</td>\r\n                                                <td>{{ customer.rooms }}</td>\r\n                                                <td>{{ customer.lastSent | date: 'dd/MM/yyyy H:mm' }}</td>\r\n                                                <td>{{ customer.invoice }}</td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"pages.length > 0\">\r\n                                <div class=\"col-sm-12 col-md-5\">\r\n                                    <div class=\"dataTables_info\" id=\"dataTable1_info\" role=\"status\" aria-live=\"polite\">\r\n                                        Showing {{ activePage * maxPerPage - (maxPerPage - 1) }} to {{ activePage * maxPerPage }} of {{ totalCount }} entries\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-12 col-md-7\">\r\n                                    <div class=\"dataTables_paginate paging_simple_numbers\" id=\"dataTable1_paginate\">\r\n                                        <ul class=\"pagination\">\r\n                                            <li class=\"paginate_button page-item previous\" id=\"dataTable1_previous\" [class.disabled]=\"activePage === 1\" (click)=\"openPrev()\">\r\n                                                <a aria-controls=\"dataTable1\" data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a>\r\n                                            </li>\r\n                                            <li class=\"paginate_button page-item\" *ngFor=\"let page of pages\" (click)=\"openPage(page.pageNo)\" [class.active]=\"page.pageNo === activePage\">\r\n                                                <a aria-controls=\"dataTable1\" tabindex=\"0\" class=\"page-link\">\r\n                                                    {{ page.pageNo }}\r\n                                                </a>\r\n                                            </li>\r\n                                            <li class=\"paginate_button page-item next\" id=\"dataTable1_next\" [class.disabled]=\"pages.length > 0 ? activePage === pages[pages.length-1].pageNo : false\"\r\n                                                (click)=\"openNext()\">\r\n                                                <a aria-controls=\"dataTable1\" data-dt-idx=\"7\" tabindex=\"0\" class=\"page-link\">Next</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/resort-customers/manage-customers/manage-customers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".paginate_button {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resort-customers/manage-customers/manage-customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageCustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_common_models__ = __webpack_require__("../../../../../src/app/shared/models/common.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_error_service__ = __webpack_require__("../../../../../src/app/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_manage_customers_service__ = __webpack_require__("../../../../../src/app/shared/services/manage-customers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageCustomersComponent = /** @class */ (function () {
    function ManageCustomersComponent(componentService, errorService) {
        this.componentService = componentService;
        this.errorService = errorService;
        this.customers = [];
        this.activePage = 1;
        this.maxPerPage = 10;
        this.totalCount = 0;
        this.pages = [];
        this.sortTypes = {
            sorting: 'sorting_asc',
            sorting_asc: 'sorting_desc',
            sorting_desc: 'sorting_asc',
        };
    }
    ManageCustomersComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    ManageCustomersComponent.prototype.getCustomers = function () {
        var _this = this;
        this.componentService.getResortCustomers()
            .then(function (customers) {
            _this.allCustomers = customers;
            _this.totalCount = customers.length;
            _this.tempCustomers = null;
            _this.tempSearch = null;
            _this.tempSorting = null;
            _this.buildDataGrid();
        })
            .catch(function (error) {
            _this.errorService.handleMessage(error);
        });
    };
    ManageCustomersComponent.prototype.search = function (searchInput) {
        this.tempSearch = searchInput.toUpperCase();
        this.buildDataGrid();
    };
    ManageCustomersComponent.prototype.sortBy = function (nested, sortHeader) {
        var sortType = sortHeader.className;
        this.resetSorting(sortHeader);
        sortType = this.sortTypes[sortType];
        var by = [sortHeader.textContent.toLowerCase()];
        by = nested ? nested.split('.').concat(by) : by;
        this.tempSorting = { type: sortType, by: by };
        this.buildDataGrid();
        sortHeader.className = sortType;
    };
    ManageCustomersComponent.prototype.changeAggregation = function (entriesNo) {
        this.maxPerPage = parseInt(entriesNo, 10);
        this.buildDataGrid();
    };
    ManageCustomersComponent.prototype.openPage = function (pageNo) {
        this.activePage = parseInt(pageNo, 10);
        this.buildDataGrid();
    };
    ManageCustomersComponent.prototype.openNext = function () {
        if (this.activePage < this.pages.length) {
            this.activePage++;
            this.buildDataGrid();
        }
    };
    ManageCustomersComponent.prototype.openPrev = function () {
        if (this.activePage > 1) {
            this.activePage--;
            this.buildDataGrid();
        }
    };
    ManageCustomersComponent.prototype.buildDataGrid = function () {
        this.tempCustomers = this.allCustomers;
        this.searchCustomers(this.tempSearch);
        this.sortCustomers(this.tempSorting);
        this.calculatePages();
        this.takeCustomers();
        this.tempCustomers = null;
    };
    ManageCustomersComponent.prototype.sortCustomers = function (sort) {
        if (sort) {
            var type_1 = sort.type;
            var by_1 = sort.by;
            var sorted = this.tempCustomers.sort(function (a, b) {
                var valA = a[by_1[0]];
                var valB = b[by_1[0]];
                for (var i = 1; i < by_1.length; i++) {
                    valA = valA[by_1[i]];
                    valB = valB[by_1[i]];
                }
                if (type_1 === 'sorting_asc') {
                    if (valA > valB) {
                        return 1;
                    }
                    else if (valA < valB) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
                else {
                    if (valA > valB) {
                        return -1;
                    }
                    else if (valA < valB) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            });
            this.tempCustomers = sorted;
        }
    };
    ManageCustomersComponent.prototype.resetSorting = function (sortHeader) {
        for (var i = 0; i < sortHeader.parentElement.children.length; i++) {
            var child = sortHeader.parentElement.children[i];
            child.className = 'sorting';
        }
    };
    ManageCustomersComponent.prototype.searchCustomers = function (searchText) {
        var _this = this;
        if (searchText) {
            var founded_1 = [];
            var toSearch = this.prepareTextSearch();
            toSearch.forEach(function (key, index) {
                if (key.includes(searchText)) {
                    founded_1.push(_this.tempCustomers[index]);
                }
            });
            this.tempCustomers = founded_1;
        }
    };
    ManageCustomersComponent.prototype.prepareTextSearch = function () {
        var _this = this;
        return this.allCustomers.map(function (customer) { return _this.convertToStringKey(customer); });
    };
    ManageCustomersComponent.prototype.convertToStringKey = function (customer) {
        var key = customer.contact.name + " " + customer.contact.email + " " + customer.type + " " + customer.rooms + "\n         " + customer.invoice + " " + customer.lastSent;
        return key.toUpperCase();
    };
    ManageCustomersComponent.prototype.takeCustomers = function () {
        var from = this.activePage * this.maxPerPage - this.maxPerPage;
        var to = this.activePage * this.maxPerPage;
        this.customers = this.tempCustomers.slice(from, to);
    };
    ManageCustomersComponent.prototype.calculatePages = function () {
        this.pages = [];
        var pageCount = Math.ceil(this.tempCustomers.length / this.maxPerPage);
        if (pageCount > 1) {
            for (var i = 1; i <= pageCount; i++) {
                var page = new __WEBPACK_IMPORTED_MODULE_1__shared_models_common_models__["d" /* Page */](i);
                this.pages.push(page);
            }
        }
    };
    ManageCustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-manage-customers',
            template: __webpack_require__("../../../../../src/app/resort-customers/manage-customers/manage-customers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/resort-customers/manage-customers/manage-customers.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_manage_customers_service__["a" /* ManageCustomersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_manage_customers_service__["a" /* ManageCustomersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__error_error_service__["a" /* ErrorService */]) === "function" && _b || Object])
    ], ManageCustomersComponent);
    return ManageCustomersComponent;
    var _a, _b;
}());

//# sourceMappingURL=manage-customers.component.js.map

/***/ }),

/***/ "../../../../../src/app/resort-customers/manage-customers/manage-customers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageCustomerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_customers_component__ = __webpack_require__("../../../../../src/app/resort-customers/manage-customers/manage-customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_manage_customers_service__ = __webpack_require__("../../../../../src/app/shared/services/manage-customers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ManageCustomerModule = /** @class */ (function () {
    function ManageCustomerModule() {
    }
    ManageCustomerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__manage_customers_component__["a" /* ManageCustomersComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__manage_customers_component__["a" /* ManageCustomersComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__shared_services_manage_customers_service__["a" /* ManageCustomersService */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]
            ]
        })
    ], ManageCustomerModule);
    return ManageCustomerModule;
}());

//# sourceMappingURL=manage-customers.module.js.map

/***/ }),

/***/ "../../../../../src/app/resort-customers/resort-customers.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomerContact */
/* unused harmony export Metadata */
/* unused harmony export BokunAPIAccess */
/* unused harmony export APIAccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResortCustomer; });
var CustomerContact = /** @class */ (function () {
    function CustomerContact() {
        this.address = '';
        this.email = '';
        this.name = '';
        this.phone = '';
    }
    return CustomerContact;
}());

var Metadata = /** @class */ (function () {
    function Metadata() {
        this.creationDate = new Date().getTime();
        this.updateDate = new Date().getTime();
    }
    return Metadata;
}());

var BokunAPIAccess = /** @class */ (function () {
    function BokunAPIAccess() {
        this.accessKey = '';
        this.secretKey = '';
    }
    return BokunAPIAccess;
}());

var APIAccess = /** @class */ (function () {
    function APIAccess() {
        this.bokun = new BokunAPIAccess();
    }
    return APIAccess;
}());

var ResortCustomer = /** @class */ (function () {
    function ResortCustomer() {
        this._id = '';
        this.contact = new CustomerContact();
        this.type = '';
        this.area = '';
        this.rooms = 0;
        this.lastSent = new Date();
        this.invoice = 0;
        this.reports = [];
        this.metadata = new Metadata();
        this.APIAccess = new APIAccess();
        this.booked = { toUse: false };
        this['check-in'] = { toUse: false };
        this['check-out'] = { toUse: false };
        this.cancellation = { toUse: false };
    }
    ResortCustomer.prototype.getPostObject = function () {
        return {
            contact: this.contact,
            type: this.type,
            area: this.area,
            rooms: this.rooms,
            invoice: this.invoice,
            backgroundId: this.backgroundId,
            APIAccess: this.APIAccess
        };
    };
    return ResortCustomer;
}());

//# sourceMappingURL=resort-customers.models.js.map

/***/ }),

/***/ "../../../../../src/app/resort-customers/resort-customers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResortCustomersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_customer_add_customer_module__ = __webpack_require__("../../../../../src/app/resort-customers/add-customer/add-customer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_customers_manage_customers_module__ = __webpack_require__("../../../../../src/app/resort-customers/manage-customers/manage-customers.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resort_details_resort_details_module__ = __webpack_require__("../../../../../src/app/resort-customers/resort-details/resort-details.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ResortCustomersModule = /** @class */ (function () {
    function ResortCustomersModule() {
    }
    ResortCustomersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [],
            exports: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__add_customer_add_customer_module__["a" /* AddCustomerModule */],
                __WEBPACK_IMPORTED_MODULE_2__manage_customers_manage_customers_module__["a" /* ManageCustomerModule */],
                __WEBPACK_IMPORTED_MODULE_3__resort_details_resort_details_module__["a" /* ResortDetailsModule */]
            ],
            providers: []
        })
    ], ResortCustomersModule);
    return ResortCustomersModule;
}());

//# sourceMappingURL=resort-customers.module.js.map

/***/ }),

/***/ "../../../../../src/app/resort-customers/resort-details/email-form/email-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-w\">\r\n    <div class=\"content-i\">\r\n        <div class=\"content-box\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"element-wrapper\">\r\n                        <form id=\"formValidate\" novalidate=\"true\" #emailForm=\"ngForm\" (ngSubmit)=\"save()\">\r\n                            <div class=\"element-box\">\r\n                                <fieldset class=\"form-group\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"\">Subject</label>\r\n                                        <input type=\"text\" class=\"form-control\" data-error=\"Please Email subject\"\r\n                                               placeholder=\"Subject\" required=\"required\" [(ngModel)]=\"subject\" name=\"name\">\r\n                                        <div class=\"help-block form-text with-errors form-control-feedback\"></div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <textarea class=\"form-control\" rows=\"20\" [(ngModel)]=\"messageHTML\" name=\"message\"></textarea>\r\n                                    </div>\r\n                                </fieldset>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <label for=\"\">E-mail</label>\r\n                                            <input class=\"form-control\" style=\"margin-bottom: 10px;\" data-error=\"Please insert correct E-mail\" [(ngModel)]=\"emails\"\r\n                                                placeholder=\"Test E-mail\" name=\"emails\">\r\n                                        </div>\r\n                                        <div class=\"col-sm-5\">\r\n                                            <button class=\"mr-2 mb-2 btn btn-outline-primary\" type=\"button\" (click)=\"sendTest()\">Send</button>\r\n                                            <button class=\"mr-2 mb-2 btn btn-outline-primary\" type=\"button\" (click)=\"clearCampaigns()\">Clear test campaigns</button>\r\n                                        </div>\r\n                                        <div class=\"col-sm-7\">\r\n                                            <span>{{ resultMsg }}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-buttons-w\">\r\n                                <button class=\"btn btn-primary\" type=\"submit\"> Submit</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/resort-customers/resort-details/email-form/email-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resort_details_service__ = __webpack_require__("../../../../../src/app/resort-customers/resort-details/resort-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_error_service__ = __webpack_require__("../../../../../src/app/error/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailFormComponent = /** @class */ (function () {
    function EmailFormComponent(componentService, route, router, errorService) {
        this.componentService = componentService;
        this.route = route;
        this.router = router;
        this.errorService = errorService;
        this.resultMsg = '';
        this.messageHTML = '';
        this.address = '';
        this.emails = '';
    }
    EmailFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.url.subscribe(function (url) {
            _this.actionName = url[1].path;
            _this.resortId = url[2].path;
        });
        this.componentService.getResort(this.resortId).then(function (result) {
            _this.resort = result;
            if (!_this.resort[_this.actionName]) {
                _this.resort[_this.actionName] = {};
            }
            else if (_this.resort[_this.actionName].html) {
                _this.messageHTML = _this.resort[_this.actionName].html;
                _this.subject = _this.resort[_this.actionName].subject || 'Newsletter subject';
            }
            else {
                _this.resort[_this.actionName] = {
                    html: '',
                    subject: ''
                };
            }
        }).catch(function (error) {
            _this.errorService.handleMessage(error);
        });
    };
    EmailFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EmailFormComponent.prototype.save = function () {
        var _this = this;
        this.resultMsg = '';
        this.resort[this.actionName].html = this.messageHTML;
        this.resort[this.actionName].subject = this.subject;
        this.componentService.updateResort(this.resort)
            .then(function (result) {
            _this.errorService.handleMessage({
                status: 200,
                title: 'Success',
                description: 'Resort has been updated'
            });
        })
            .catch(function (error) {
            _this.errorService.handleMessage(error);
        });
    };
    EmailFormComponent.prototype.clearCampaigns = function () {
        var _this = this;
        this.componentService.clearCampaigns(this.resort[this.actionName].templateId)
            .then(function (result) {
            _this.resultMsg = 'Cleared test campaigns.';
        })
            .catch(function (error) {
            _this.errorService.handleMessage(error);
        });
    };
    EmailFormComponent.prototype.sendTest = function () {
        var _this = this;
        this.resultMsg = '';
        var data = {
            template: {
                name: this.actionName,
                html: this.messageHTML,
                folder_id: this.resort.templateFolderId // folder_id
            },
            subject: this.subject
        };
        this.componentService.sendTestEmail(this.emails.split(';'), {
            templateId: this.resort[this.actionName].templateId,
            data: data
        })
            .then(function (result) {
            _this.resultMsg = result.message;
        })
            .catch(function (error) {
            _this.errorService.handleMessage(error);
        });
    };
    EmailFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-email-form',
            template: __webpack_require__("../../../../../src/app/resort-customers/resort-details/email-form/email-form.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__resort_details_service__["a" /* ResortDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resort_details_service__["a" /* ResortDetailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__error_error_service__["a" /* ErrorService */]) === "function" && _d || Object])
    ], EmailFormComponent);
    return EmailFormComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=email-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/resort-customers/resort-details/email-form/email-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_form_component__ = __webpack_require__("../../../../../src/app/resort-customers/resort-details/email-form/email-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resort_details_service__ = __webpack_require__("../../../../../src/app/resort-customers/resort-details/resort-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EmailFormModule = /** @class */ (function () {
    function EmailFormModule() {
    }
    EmailFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__email_form_component__["a" /* EmailFormComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__email_form_component__["a" /* EmailFormComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__resort_details_service__["a" /* ResortDetailsService */]
            ]
        })
    ], EmailFormModule);
    return EmailFormModule;
}());

//# sourceMappingURL=email-form.module.js.map

/***/ }),

/***/ "../../../../../src/app/resort-customers/resort-details/resort-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-w\">\r\n    <div class=\"content-i\">\r\n        <div class=\"content-box\">\r\n            <div class=\"element-wrapper\">\r\n                <div class=\"user-profile\">\r\n                    <div class=\"up-head-w\" [ngStyle]=\"resortStyle\">\r\n                        <div class=\"up-main-info\">\r\n                            <h1 class=\"up-header\">\r\n                                {{ resort.contact.name }}\r\n                            </h1>\r\n                        </div>\r\n                        <svg class=\"decor\" width=\"842px\" height=\"219px\" viewBox=\"0 0 842 219\" preserveAspectRatio=\"xMaxYMax meet\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                            xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                            <g transform=\"translate(-381.000000, -362.000000)\" fill=\"#FFFFFF\">\r\n                                <path class=\"decor-path\" d=\"M1223,362 L1223,581 L381,581 C868.912802,575.666667 1149.57947,502.666667 1223,362 Z\"></path>\r\n                            </g>\r\n                        </svg>\r\n                    </div>\r\n                    <form #detailsForm=\"ngForm\" (ngSubmit)=\"updateCustomer()\">\r\n                        <div class=\"up-contents\">\r\n                            <h5 class=\"element-header\">\r\n                                User Information\r\n                            </h5>\r\n                            <div>\r\n                                <h6>Name : {{ resort.contact.name }}</h6>\r\n                                <h6>Email : {{ resort.contact.email }}</h6>\r\n                                <h6>Phone : {{ resort.contact.phone }}</h6>\r\n                            </div>\r\n                            <!--<div style=\"padding:20px 20px\">This is just a dummy line. There has to be something related to below checkboxes. Please tick below.This-->\r\n                                <!--is just a dummy line.This is just a dummy line.This is just a dummy line.</div>-->\r\n                            <div>\r\n\r\n                                <div>\r\n                                    <label class=\"form-check-label\">\r\n                                        <input type=\"checkbox\" name=\"booked\" [(ngModel)]=\"resort.booked.toUse\"\r\n                                           (change)=\"checkTemplate(resort.booked.toUse, 'booked')\" class=\"form-check-input\">\r\n                                        <a routerLink=\"/resort-details/booked/{{resortId}}\">\r\n                                            <h6>When Booked</h6>\r\n                                        </a>\r\n                                    </label>\r\n                                </div>\r\n                                <div>\r\n                                    <label class=\"form-check-label\">\r\n                                        <input type=\"checkbox\" name=\"check-in\" [(ngModel)]=\"resort['check-in'].toUse\"\r\n                                           (change)=\"checkTemplate(resort['check-in'].toUse, 'check-in')\" class=\"form-check-input\">\r\n                                        <a routerLink=\"/resort-details/check-in/{{resortId}}\">\r\n                                            <h6>3 days before Check In</h6>\r\n                                        </a>\r\n                                    </label>\r\n                                </div>\r\n                                <div>\r\n                                    <label class=\"form-check-label\">\r\n                                        <input type=\"checkbox\" name=\"check-out\" [(ngModel)]=\"resort['check-out'].toUse\"\r\n                                           (change)=\"checkTemplate(resort['check-out'].toUse, 'check-out')\" class=\"form-check-input\">\r\n                                        <a routerLink=\"/resort-details/check-out/{{resortId}}\">\r\n                                            <h6>3 days after Check Out</h6>\r\n                                        </a>\r\n                                    </label>\r\n                                </div>\r\n                                <div>\r\n                                    <label class=\"form-check-label\">\r\n                                        <input type=\"checkbox\" name=\"cancellation\" [(ngModel)]=\"resort.cancellation.toUse\"\r\n                                           (change)=\"checkTemplate(resort.cancellation.toUse, 'cancellation')\" class=\"form-check-input\">\r\n                                        <a routerLink=\"/resort-details/cancellation/{{resortId}}\">\r\n                                            <h6>Cancellation</h6>\r\n                                        </a>\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-buttons-w\">\r\n                                <button class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"up-contents\">\r\n                            <h5 class=\"element-header\">\r\n                                Profile Statistics\r\n                            </h5>\r\n                            <div class=\"row m-b\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6 b-r b-b\">\r\n                                            <div class=\"el-tablo centered padded\">\r\n                                                <div class=\"value\">\r\n                                                    {{ resort.emailsSent }}\r\n                                                </div>\r\n                                                <div class=\"label\">\r\n                                                    E-mails Sent\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6 b-b b-r\">\r\n                                            <div class=\"el-tablo centered padded\">\r\n                                                <div class=\"value\">\r\n                                                    {{ resort.emailsOpened }}\r\n                                                </div>\r\n                                                <div class=\"label\">\r\n                                                    Opened E-mails\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6 b-r\">\r\n                                            <div class=\"el-tablo centered padded\">\r\n                                                <div class=\"value\">\r\n                                                    {{ resort.bounceRate | percent }}\r\n                                                </div>\r\n                                                <div class=\"label\">\r\n                                                    Bounce Rate\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6 b-r\">\r\n                                            <div class=\"el-tablo centered padded\">\r\n                                                <div class=\"value\">\r\n                                                    {{ resort.cancellations }}\r\n                                                </div>\r\n                                                <div class=\"label\">\r\n                                                    Cancellations\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"padded\">\r\n                                        <div class=\"element-info-with-icon smaller\">\r\n                                            <div class=\"element-info-icon\">\r\n                                                <div class=\"os-icon os-icon-bar-chart-stats-up\"></div>\r\n                                            </div>\r\n                                            <div class=\"element-info-text\">\r\n                                                <h5 class=\"element-inner-header\">\r\n                                                    Monthly E-mails\r\n                                                </h5>\r\n                                                <div class=\"element-inner-desc\">\r\n                                                    Calculated every month\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"el-chart-w\">\r\n                                            <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\r\n                                            <canvas height=\"200\" id=\"liteLineChart\" width=\"463\" style=\"display: block; width: 463px; height: 200px;\"></canvas>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"os-tabs-w\">\r\n                                <div class=\"os-tabs-controls\">\r\n                                    <ul class=\"nav nav-tabs bigger\">\r\n                                        <li class=\"nav-item\">\r\n                                        </li>\r\n                                    </ul>\r\n                                    <ul class=\"nav nav-pills smaller hidden-sm-down\">\r\n                                        <li class=\"nav-item\">\r\n                                            <a class=\"nav-link\" data-toggle=\"tab\" (click)=\"changeChartTimespan(1)\"\r\n                                            [class.active]=\"chartTimespan === 1\">Today</a>\r\n                                        </li>\r\n                                        <li class=\"nav-item\">\r\n                                            <a class=\"nav-link\" data-toggle=\"tab\" (click)=\"changeChartTimespan(7)\"\r\n                                            [class.active]=\"chartTimespan === 7\">7 Days</a>\r\n                                        </li>\r\n                                        <li class=\"nav-item\">\r\n                                            <a class=\"nav-link\" data-toggle=\"tab\" (click)=\"changeChartTimespan(14)\"\r\n                                            [class.active]=\"chartTimespan === 14\">14 Days</a>\r\n                                        </li>\r\n                                        <li class=\"nav-item\">\r\n                                            <a class=\"nav-link\" data-toggle=\"tab\" (click)=\"changeChartTimespan(0)\"\r\n                                            [class.active]=\"chartTimespan === 0\">Last Month</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"tab-content\">\r\n                                    <div class=\"tab-pane active\" id=\"tab_sales\">\r\n                                        <div class=\"el-tablo\">\r\n                                            <div class=\"label\">\r\n                                                Last Week\r\n                                            </div>\r\n                                            <div class=\"value\">\r\n                                                {{ resort.lastWeek }}\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"el-chart-w\">\r\n                                            <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\r\n                                            <canvas height=\"271\" id=\"lineChart\" width=\"1084\" style=\"display: block; width: 1084px; height: 271px;\"></canvas>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"tab-pane\" id=\"tab_conversion\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/resort-customers/resort-details/resort-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResortDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resort_details_service__ = __webpack_require__("../../../../../src/app/resort-customers/resort-details/resort-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resort_customers_models__ = __webpack_require__("../../../../../src/app/resort-customers/resort-customers.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_error_service__ = __webpack_require__("../../../../../src/app/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_common_models__ = __webpack_require__("../../../../../src/app/shared/models/common.models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResortDetailsComponent = /** @class */ (function () {
    function ResortDetailsComponent(componentService, route, errorService) {
        this.componentService = componentService;
        this.route = route;
        this.errorService = errorService;
        this.chartTimespan = 7;
        this.resortStyle = '';
        this.resort = new __WEBPACK_IMPORTED_MODULE_4__resort_customers_models__["a" /* ResortCustomer */]();
    }
    ResortDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.resortId = params['resortId'];
            _this.componentService.getResort(_this.resortId)
                .then(_this.handleSuccess.bind(_this))
                .catch(function (error) { return _this.errorService.handleMessage(error); });
        });
    };
    ResortDetailsComponent.prototype.updateCustomer = function () {
        var _this = this;
        console.log(this.resort);
        this.componentService.updateResort(this.resort)
            .then(function (r) {
            _this.errorService.handleMessage({
                status: 200,
                title: 'Success',
                description: 'The resort has been updated'
            });
        })
            .catch(function (error) {
            _this.errorService.handleMessage(error);
        });
    };
    ResortDetailsComponent.prototype.checkTemplate = function (val, template) {
        this.resort[template].toUse = val;
    };
    ResortDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ResortDetailsComponent.prototype.changeChartTimespan = function (timespan) {
        this.chartTimespan = timespan;
        this.prepareLineChart();
    };
    ResortDetailsComponent.prototype.handleSuccess = function (result) {
        if (result && result.contact && result.contact.name) {
            this.resort = result;
            // this.resort.
            if (result.backgroundId) {
                this.resortStyle = { 'background-image': 'url(' + result.backgroundId + ')' };
            }
            this.setUsage();
        }
        else {
            this.errorService.handleMessage(new __WEBPACK_IMPORTED_MODULE_6__shared_models_common_models__["a" /* AppMessage */](404, 'Customer Not Found', 'Data for selected customer is corrupted or missing!'));
        }
    };
    ResortDetailsComponent.prototype.getMailStatistics = function (email) {
        var _this = this;
        this.componentService.getMailchimpStatistics(email) // (this.resort.id)
            .then(function (result) {
            // now customer has a list of all the reports
            // with the specified email sorted from earliest to latest
            // reports are of type IMailchimpReportData
            _this.resort.reports = result;
            _this.prepareLitleLineChart();
            _this.prepareLineChart();
        })
            .catch(function (error) { return _this.errorService.handleMessage(error); });
    };
    ResortDetailsComponent.prototype.setUsage = function () {
        if (!this.resort.booked.toUse)
            this.resort.booked.toUse = false;
        if (!this.resort['check-in'])
            this.resort['check-in'].toUse = false;
        if (!this.resort['check-out'].toUse)
            this.resort['check-out'].toUse = false;
        if (!this.resort.cancellation.toUse)
            this.resort.cancellation.toUse = false;
    };
    ResortDetailsComponent.prototype.prepareLitleLineChart = function () {
        if (this.littleLineChart) {
            this.littleLineChart.destroy();
        }
        var littleLineChart = document.querySelector('#liteLineChart');
        var liteLineGradient = littleLineChart.getContext('2d').createLinearGradient(0, 0, 0, 200);
        liteLineGradient.addColorStop(0, 'rgba(30,22,170,0.08)');
        liteLineGradient.addColorStop(1, 'rgba(30,22,170,0)');
        // line chart data
        var liteLineData = {
            labels: ['January 1', 'January 5', 'January 10', 'January 15', 'January 20', 'January 25'],
            datasets: [{
                    label: 'Sold',
                    fill: true,
                    lineTension: 0.4,
                    backgroundColor: liteLineGradient,
                    borderColor: '#8f1cad',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#fff',
                    pointBackgroundColor: '#2a2f37',
                    pointBorderWidth: 2,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: '#FC2055',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 5,
                    data: [13, 28, 19, 24, 43, 49],
                    spanGaps: false
                }]
        };
        // line chart init
        this.littleLineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](littleLineChart, {
            type: 'line',
            data: liteLineData,
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [],
                    yAxes: []
                }
            }
        });
    };
    ResortDetailsComponent.prototype.upadateLittleLineChart = function () {
    };
    ResortDetailsComponent.prototype.getDaysOfMonth = function () {
        var today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    };
    ResortDetailsComponent.prototype.prepareLineChart = function () {
        if (this.lineChart) {
            this.lineChart.destroy();
        }
        var lineChart = document.querySelector('#lineChart');
        var randLineData = [];
        var randLabels = [];
        var points = this.chartTimespan === 0 ? this.getDaysOfMonth() :
            this.chartTimespan === 1 ? 24 :
                this.chartTimespan;
        for (var i = 1; i <= points; i++) {
            randLineData.push(Math.floor(Math.random() * 100));
            var label = i.toString();
            if (this.chartTimespan === 1) {
                label += 'h';
            }
            randLabels.push(label);
        }
        // line chart data
        var lineData = {
            labels: randLabels,
            datasets: [{
                    label: 'Visitors Graph',
                    fill: false,
                    lineTension: 0,
                    backgroundColor: '#fff',
                    borderColor: '#6896f9',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#fff',
                    pointBackgroundColor: '#2a2f37',
                    pointBorderWidth: 3,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: '#FC2055',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 3,
                    pointRadius: 6,
                    pointHitRadius: 10,
                    data: randLineData,
                    spanGaps: false
                }]
        };
        // line chart init
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](lineChart, {
            type: 'line',
            data: lineData,
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [],
                    yAxes: [{
                            display: false
                        }]
                }
            }
        });
    };
    ResortDetailsComponent.prototype.upadateLineChart = function () {
        var randLineData = [];
        var randLabels = [];
        var points = this.chartTimespan === 0 ? this.getDaysOfMonth() :
            this.chartTimespan === 1 ? 24 :
                this.chartTimespan;
        for (var i = 1; i <= points; i++) {
            randLineData.push(Math.floor(Math.random() * 100));
            var label = i.toString();
            if (this.chartTimespan === 1) {
                label += 'h';
            }
            randLabels.push(label);
        }
    };
    ResortDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-resort-details',
            template: __webpack_require__("../../../../../src/app/resort-customers/resort-details/resort-details.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__resort_details_service__["a" /* ResortDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__resort_details_service__["a" /* ResortDetailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__error_error_service__["a" /* ErrorService */]) === "function" && _c || Object])
    ], ResortDetailsComponent);
    return ResortDetailsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=resort-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/resort-customers/resort-details/resort-details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResortDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resort_details_component__ = __webpack_require__("../../../../../src/app/resort-customers/resort-details/resort-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resort_details_service__ = __webpack_require__("../../../../../src/app/resort-customers/resort-details/resort-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_form_email_form_module__ = __webpack_require__("../../../../../src/app/resort-customers/resort-details/email-form/email-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ResortDetailsModule = /** @class */ (function () {
    function ResortDetailsModule() {
    }
    ResortDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__resort_details_component__["a" /* ResortDetailsComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__resort_details_component__["a" /* ResortDetailsComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__email_form_email_form_module__["a" /* EmailFormModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__resort_details_service__["a" /* ResortDetailsService */]
            ]
        })
    ], ResortDetailsModule);
    return ResortDetailsModule;
}());

//# sourceMappingURL=resort-details.module.js.map

/***/ }),

/***/ "../../../../../src/app/resort-customers/resort-details/resort-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResortDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResortDetailsService = /** @class */ (function () {
    function ResortDetailsService(http) {
        this.http = http;
    }
    ResortDetailsService.prototype.getResort = function (resortId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.get('resort-customer/detail/' + resortId).toPromise()
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject(error); });
        });
    };
    ResortDetailsService.prototype.getMailchimpStatistics = function (customerEmail) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.get('resort-customer/reports/' + customerEmail).toPromise() // todo: change to proper endpoint
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject(error); });
        });
    };
    ResortDetailsService.prototype.updateResort = function (resort) {
        var _this = this;
        delete resort.backgroundId;
        return new Promise(function (resolve, reject) {
            return _this.http.put('resort-customer/' + resort._id, resort).toPromise() // todo: change to proper endpoint
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject(error); });
        });
    };
    ResortDetailsService.prototype.saveBookedTemplate = function (mail) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ResortDetailsService.prototype.saveCheckInTemplate = function (mail) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ResortDetailsService.prototype.saveCheckOutTemplate = function (mail) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ResortDetailsService.prototype.saveCancellationTemplate = function (mail) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ResortDetailsService.prototype.sendTestEmail = function (mail, templateData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('mailchimp/test', {
                emails: mail,
                templateData: templateData
            }).toPromise() // todo: change to proper endpoint
                .then(function (response) {
                resolve(response);
            })
                .catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
    };
    ResortDetailsService.prototype.clearCampaigns = function (templateId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('mailchimp/test/' + templateId)
                .toPromise() // todo: change to proper endpoint
                .then(function (response) {
                resolve(response);
            })
                .catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
    };
    ResortDetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], ResortDetailsService);
    return ResortDetailsService;
    var _a;
}());

//# sourceMappingURL=resort-details.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isOpened\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/dialog/dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_service__ = __webpack_require__("../../../../../src/app/shared/dialog/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(componentService) {
        this.componentService = componentService;
        this.isOpened = false;
        this.subscribe();
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.subscribe = function () {
        var _this = this;
        this.componentService.isOpened.subscribe(function (isOpened) {
            _this.isOpened = isOpened;
        });
    };
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/shared/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/dialog/dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dialog_service__["a" /* DialogService */]) === "function" && _a || Object])
    ], DialogComponent);
    return DialogComponent;
    var _a;
}());

//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dialog/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogService = /** @class */ (function () {
    function DialogService() {
        this.isOpened = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    DialogService.prototype.open = function () {
        this.isOpened.next(true);
    };
    DialogService.prototype.close = function () {
        this.isOpened.next(false);
    };
    DialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DialogService);
    return DialogService;
}());

//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/image-upload/image-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropzone\">\r\n    <label for=\"drop-input\" class=\"drop-content\">\r\n        <div class=\"drop-text\" *ngIf=\"errorMsg === '' && src === ''\">\r\n                {{ mainText }} <br/>\r\n            <div class=\"drop-tooltip\">{{ tooltipText }}</div>\r\n        </div>\r\n        <div class=\"drop-text drop-error\" *ngIf=\"errorMsg !== ''\">\r\n                {{ errorMsg }} <br/>\r\n                <div class=\"drop-tooltip\">(Click once again to upload new file)</div>\r\n        </div>\r\n        <img class=\"drop-preview\" [src]=\"src\" *ngIf=\"src !== ''\" />\r\n    </label>\r\n    <input id=\"drop-input\" name=\"drop-input\" type=\"file\" class=\"drop-input\" (change)=\"onChange(fileInput)\" #fileInput />\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/image-upload/image-upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropzone {\n  box-sizing: border-box;\n  min-height: 150px;\n  background: white;\n  padding: 20px 20px;\n  border: 2px dashed #047bf8;\n  cursor: pointer;\n  position: relative; }\n  .dropzone.drag-hover {\n    border-style: solid; }\n  .dropzone .drop-input {\n    visibility: hidden;\n    opacity: 0; }\n  .dropzone .drop-content {\n    display: block;\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n    .dropzone .drop-content .drop-preview {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 0; }\n    .dropzone .drop-content .drop-text {\n      position: absolute;\n      z-index: 1;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      text-align: center;\n      font-size: 16px;\n      margin-bottom: 0.5rem;\n      font-family: 'Roboto Slab', serif;\n      font-weight: 500;\n      line-height: 1.1;\n      color: #334152;\n      background-color: white;\n      padding: 5px; }\n      .dropzone .drop-content .drop-text.drop-error {\n        color: red; }\n      .dropzone .drop-content .drop-text .drop-tooltip {\n        margin-top: 4px;\n        color: #aaa;\n        font-weight: 300;\n        font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/image-upload/image-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_common_models__ = __webpack_require__("../../../../../src/app/shared/models/common.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_upload_models__ = __webpack_require__("../../../../../src/app/shared/image-upload/image-upload.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_upload_models___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__image_upload_models__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utilities__ = __webpack_require__("../../../../../src/app/shared/shared.utilities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent() {
        this.validation = {
            size: 5 * 1024 * 1024,
            width: 1920,
            height: 1080
        };
        this.reset();
        this.mainText = 'Click to upload.';
        this.tooltipText = "(Max size " + Math.round(this.validation.size / (1024 * 1024)) + "MB\n        and resolution " + this.validation.width + "*" + this.validation.height + ")";
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
    };
    ImageUploadComponent.prototype.reset = function () {
        this.errorMsg = '';
        this.src = '';
        this.fileObject = null;
    };
    ImageUploadComponent.prototype.onChange = function (fileInput) {
        var _this = this;
        this.errorMsg = "";
        if (fileInput.files && fileInput.files.length > 0) {
            var file_1 = fileInput.files[0];
            if (file_1.size > this.validation.size) {
                this.errorMsg = "File is to big! Maximum size allowed is " + Math.round(this.validation.size / (1024 * 1024)) + "MB";
                return;
            }
            var reader_1 = new FileReader();
            reader_1.onloadend = function (data) {
                _this.src = reader_1.result;
                _this.getDimensions(_this.src)
                    .then(function (dim) {
                    if (dim.width > _this.validation.width) {
                        _this.src = '';
                        _this.errorMsg = "Image is too wide! Maximum width allowed is " + _this.validation.width + "px";
                        return;
                    }
                    if (dim.height > _this.validation.height) {
                        _this.src = '';
                        _this.errorMsg = "Image is too high! Maximum height allowed is " + _this.validation.height + "px";
                        return;
                    }
                    _this.fileObject = new __WEBPACK_IMPORTED_MODULE_1__models_common_models__["b" /* FileObject */](_this.src, __WEBPACK_IMPORTED_MODULE_1__models_common_models__["c" /* FileType */].Image, file_1.type);
                })
                    .catch(function (error) {
                    _this.errorMsg = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utilities__["a" /* getErrorMessage */])(error);
                });
            };
            reader_1.readAsDataURL(file_1);
        }
        else if (this.fileObject === null) {
            this.errorMsg = "File was not selected!";
        }
    };
    ImageUploadComponent.prototype.getDimensions = function (imgSrc) {
        return new Promise(function (resolve, reject) {
            try {
                var img_1 = new Image();
                img_1.onload = function () {
                    resolve({
                        width: img_1.width,
                        height: img_1.height
                    });
                };
                img_1.src = imgSrc;
            }
            catch (error) {
                reject(error);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__image_upload_models__["IImageValidation"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__image_upload_models__["IImageValidation"]) === "function" && _a || Object)
    ], ImageUploadComponent.prototype, "validation", void 0);
    ImageUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-image-upload',
            template: __webpack_require__("../../../../../src/app/shared/image-upload/image-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/image-upload/image-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageUploadComponent);
    return ImageUploadComponent;
    var _a;
}());

//# sourceMappingURL=image-upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/image-upload/image-upload.models.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=image-upload.models.js.map

/***/ }),

/***/ "../../../../../src/app/shared/image-upload/image-upload.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUploadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_upload_component__ = __webpack_require__("../../../../../src/app/shared/image-upload/image-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImageUploadModule = /** @class */ (function () {
    function ImageUploadModule() {
    }
    ImageUploadModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__image_upload_component__["a" /* ImageUploadComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__image_upload_component__["a" /* ImageUploadComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: []
        })
    ], ImageUploadModule);
    return ImageUploadModule;
}());

//# sourceMappingURL=image-upload.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/common.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FileObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Page; });
var AppMessage = /** @class */ (function () {
    function AppMessage(_status, _title, _description) {
        this.status = _status;
        this.title = _title;
        this.description = _description;
    }
    return AppMessage;
}());

var FileType;
(function (FileType) {
    FileType[FileType["UserAvatar"] = 0] = "UserAvatar";
    FileType[FileType["Image"] = 1] = "Image";
    FileType[FileType["Video"] = 2] = "Video";
    FileType[FileType["Document"] = 3] = "Document";
    FileType[FileType["Other"] = 4] = "Other";
})(FileType || (FileType = {}));
var FileObject = /** @class */ (function () {
    function FileObject(file, fileType, contentType) {
        if (fileType === void 0) { fileType = FileType.Other; }
        if (contentType === void 0) { contentType = 'application/json'; }
        this.file = file;
        this.fileType = fileType;
        this.contentType = contentType;
        this._id = null;
    }
    return FileObject;
}());

var Page = /** @class */ (function () {
    function Page(pageNo) {
        this.pageNo = pageNo;
    }
    return Page;
}());

//# sourceMappingURL=common.models.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/user.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.isAuth = false;
        this.isAdmin = false;
    }
    return User;
}());

//# sourceMappingURL=user.models.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/file-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileService = /** @class */ (function () {
    function FileService(http) {
        this.http = http;
    }
    FileService.prototype.getFile = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var endpoint = "file" + (id ? '/' + id : '');
            _this.http.get(endpoint)
                .toPromise()
                .then(function (file) { return resolve(file); })
                .catch(function (error) { return reject(error); });
        });
    };
    FileService.prototype.sendFile = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            formData.append('file', file.file);
            formData.append('contentType', file.contentType);
            formData.append('fileType', file.fileType.toString());
            _this.http.post('file', formData)
                .toPromise()
                .then(function (result) { return resolve(result); })
                .catch(function (error) { return reject(error); });
        });
    };
    FileService.prototype.updateFile = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            formData.append('id', file.id);
            formData.append('file', file.file);
            formData.append('contentType', file.contentType);
            formData.append('fileType', file.fileType.toString());
            _this.http.put('file', formData)
                .toPromise()
                .then(function (result) { return resolve(result); })
                .catch(function (error) { return reject(error); });
        });
    };
    FileService.prototype.deleteFile = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete("file/" + id)
                .toPromise()
                .then(function (file) { return resolve(file); })
                .catch(function (error) { return reject(error); });
        });
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], FileService);
    return FileService;
    var _a;
}());

//# sourceMappingURL=file-service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/manage-customers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageCustomersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageCustomersService = /** @class */ (function () {
    function ManageCustomersService(http) {
        this.http = http;
    }
    ManageCustomersService.prototype.getResortCustomers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.get('resort-customer/all').toPromise()
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject(error); });
        });
    };
    ManageCustomersService.prototype.getDeletedCustomer = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.get('resort-customer/removed').toPromise()
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject(error); });
        });
    };
    ManageCustomersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], ManageCustomersService);
    return ManageCustomersService;
    var _a;
}());

//# sourceMappingURL=manage-customers.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/user-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_models__ = __webpack_require__("../../../../../src/app/shared/models/user.models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.isLocked = false;
        this.isAuth = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.setUser();
    }
    UserService.prototype.setUser = function (user) {
        if (!user) {
            var fromCookie = this.getCookie('user');
            try {
                user = fromCookie ? JSON.parse(fromCookie) : new __WEBPACK_IMPORTED_MODULE_3__models_user_models__["a" /* User */]();
            }
            catch (error) {
                user = new __WEBPACK_IMPORTED_MODULE_3__models_user_models__["a" /* User */]();
            }
            user.avatarId = this.getFromLocalStorage('avatar');
        }
        if (!user.avatarId) {
            // in case of no avatar we are using default one
            user.avatarId = 'assets/img/default_avatar.jpg';
        }
        delete user.password;
        this.user = user;
        this.deleteCookie('user');
        this.saveToLocalStorage('avatar', this.user.avatarId);
        var forCookie = Object.assign({}, this.user);
        delete forCookie.avatarId;
        this.setCookie('user', forCookie, 1);
        this.isAuth.next(user.isAuth);
    };
    UserService.prototype.getUser = function () {
        if (!this.user.avatarId || this.user.avatarId === 'undefined') {
            this.user.avatarId = this.getFromLocalStorage('avatar');
        }
        return this.user;
    };
    UserService.prototype.lockUser = function (lockedFromUrl) {
        this.lockedFromUrl = lockedFromUrl;
        this.user.password = '';
        this.user.isAuth = false;
        this.isLocked = true;
        this.isAuth.next(false);
    };
    UserService.prototype.unlockUser = function (user) {
        this.user.isAuth = true;
        this.isLocked = false;
        this.isAuth.next(true);
        return this.lockedFromUrl;
    };
    UserService.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        var cookie = cname + '=' + JSON.stringify(cvalue) + ';' + expires + ';path=/';
        document.cookie = cookie;
    };
    UserService.prototype.getCookie = function (cname) {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    };
    UserService.prototype.deleteCookie = function (cname) {
        this.setCookie(cname, '', 0);
    };
    UserService.prototype.saveToLocalStorage = function (key, value) {
        if (value && value !== 'undefined') {
            if (typeof value === 'string') {
                localStorage.setItem(key, value);
            }
            else {
                localStorage.setItem(key, JSON.stringify(value));
            }
        }
    };
    UserService.prototype.getFromLocalStorage = function (key) {
        var itemStr = localStorage.getItem(key);
        if (itemStr) {
            try {
                return JSON.parse(itemStr);
            }
            catch (error) {
                return itemStr;
            }
        }
    };
    UserService.prototype.deleteFromLocalStorage = function (key) {
        localStorage.removeItem(key);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/shared/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_file_service__ = __webpack_require__("../../../../../src/app/shared/services/file-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_upload_image_upload_module__ = __webpack_require__("../../../../../src/app/shared/image-upload/image-upload.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dialog_dialog_component__["a" /* DialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_6__image_upload_image_upload_module__["a" /* ImageUploadModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_file_service__["a" /* FileService */],
                __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.utilities.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = isUser;
/* harmony export (immutable) */ __webpack_exports__["b"] = isNumeric;
/* unused harmony export convertToFileObject */
/* harmony export (immutable) */ __webpack_exports__["a"] = getErrorMessage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user_models__ = __webpack_require__("../../../../../src/app/shared/models/user.models.ts");

function isUser(obj) {
    if (obj && (obj instanceof __WEBPACK_IMPORTED_MODULE_0__models_user_models__["a" /* User */] || obj.eMail !== undefined)) {
        return true;
    }
    return false;
}
function isNumeric(obj) {
    return !isNaN(parseFloat(obj)) && isFinite(obj);
}
function convertToFileObject(input, type, mimeType) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        if (!input.files || input.files.length === 0) {
            return reject('No files selected!');
        }
        var file = input.files[0];
        reader.onerror = function (error) {
            return reject(error);
        };
        reader.onload = function (readerResult) {
            var parsedFile = readerResult.target['result'];
            var toUpload = {
                _id: null,
                id: '',
                file: parsedFile,
                contentType: mimeType || file.type,
                fileType: type
            };
            return resolve(toUpload);
        };
        reader.readAsDataURL(file);
    });
}
function getErrorMessage(error) {
    if (error) {
        if (error.error) {
            if (error.error.message || error.error.description || error.error.statusText) {
                return error.error.message || error.error.description || error.error.statusText;
            }
            return error.error;
        }
        if (error.message || error.description || error.statusText) {
            return error.message || error.description || error.statusText;
        }
        return error;
    }
    return 'Unknown error';
}
//# sourceMappingURL=shared.utilities.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    origin: 'https://myvisitemail.herokuapp.com/',
    // baseUrl: 'http://194.181.46.30/mongo/',
    bokunUrl: 'https://bokun.github.io/',
    mailChimpUrl: 'https://us6.api.mailchimp.com/3.0/' // todo: set proper url
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map