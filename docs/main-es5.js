(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<app-domestic-panel *ngIf = \"paging.currentPanel =='domestics' \"></app-domestic-panel>\r\n<app-wild-panel *ngIf = \"paging.currentPanel =='wilds' \"></app-wild-panel>\r\n<app-bird-panel *ngIf = \"paging.currentPanel =='birds' \"></app-bird-panel>\r\n<!-- <router-outlet></router-outlet> -->\r\n\r\n\r\n<app-paginator (moveItemEvent) =\"changeItem($event)\"></app-paginator>\r\n\r\n<app-footer></app-footer>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/bird-card/bird-card.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/bird-card/bird-card.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>bird-card works!</p> -->\r\n<div>\r\n        <h3>{{ birdService.currentBird.name }}</h3>\r\n        <div>size: {{ birdService.currentBird.size }}</div>\r\n        <div>lifeSpan: {{ birdService.currentBird.lifeSpan }}</div>\r\n        <div>habitat: {{ birdService.currentBird.habitat }}</div>\r\n        <img [src]=\"birdService.currentBird.img\" alt=\"\">\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/domestic-card/domestic-card.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/domestic-card/domestic-card.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>domestic-card works!</p> -->\r\n<div>\r\n        <h3>{{domesticService.currentDomestic.name }}</h3>\r\n        <div>size: {{ domesticService.currentDomestic.size }}</div>\r\n        <div>lifeSpan: {{ domesticService.currentDomestic.lifeSpan }}</div>\r\n        <div>habitat: {{ domesticService.currentDomestic.habitat }}</div>\r\n        <img [src]=\"domesticService.currentDomestic.img\" alt=\"\">\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n        <h3>{{ wildService.currentWild.name }}</h3>\r\n        <div>size: {{ wildService.currentWild.weight }}</div>\r\n        \r\n        <img [src]=\"wildService.currentWild.src\" alt=\"\">\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>footer works!</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"bg-header\">\r\n    <div class=\"logo\">\r\n        <img src=\"http://www.avratech.org.il/wp-content/uploads/2015/11/avratech_logo.png\"/>\r\n    </div>\r\n\r\n    <app-nav></app-nav>\r\n\r\n    <div class=\"logon-user\">\r\n        hello ariel\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nav/nav.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nav/nav.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <ul class=\"nav-ul\">\r\n        <li (click) = \"navTo('domestics')\">Domestic </li>\r\n        <li (click) = \"navTo('wilds')\">Wild </li>\r\n        <li (click) = \"navTo('birds')\">Birds </li>\r\n        <!-- <li> <a routerLink=\"/birds\" routerLinkActive=\"active\">Bird</a></li>\r\n        <li> <a routerLink=\"/wilds\" routerLinkActive=\"active\">wild</a></li>\r\n        <li> <a routerLink=\"/domestics\" routerLinkActive=\"active\">Domestic</a></li> -->\r\n    </ul>\r\n    \r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/page-not-found/page-not-found.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/page-not-found/page-not-found.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>paginator works!</p> -->\r\n<div class=\"flex\">\r\n\r\n    <div (click) = \"moveItem(-1)\"> \r\n        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ371gz6_a8DhyDICFTFYY53W7rjjcr0Z0vpk9uHn-vJHy4WBmZcA&s\"/>\r\n    </div>\r\n    <div (click) = \"moveItem(1)\">\r\n        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnoYWeF7b3vFkDFMKq98SvncogP7hS_iuBKsyJD3toVv9AG730&s\"/>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/bird-panel/bird-panel.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/bird-panel/bird-panel.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Welcome to the birds observatory</h1>\r\n\r\n<div class=\"flex\">\r\n    <div>\r\n        <h2>our birds list</h2>\r\n        <ul>\r\n            <li *ngFor = \"let bird of birdService.birds\">\r\n                <!-- <span (click)=\"navBird(bird.name)\">  -->\r\n                    {{bird.name}}\r\n                <!-- </span> -->\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n    <div>\r\n        <app-bird-card></app-bird-card>\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/domestic-panel/domestic-panel.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/domestic-panel/domestic-panel.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Welcome to the Farm</h1>\r\n\r\n<div class=\"flex\">\r\n    <div>\r\n        <h2>our Farm list</h2>\r\n        <ul>\r\n            <li *ngFor = \"let domestic of domesticService.domestics\">{{domestic.name}}</li>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n    <div>\r\n        <app-domestic-card></app-domestic-card>\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wild-panel/wild-panel.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wild-panel/wild-panel.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Welcome to the Safari</h1>\r\n\r\n<div class=\"flex\">\r\n    <div>\r\n        <h2>our wilds list</h2>\r\n        <ul>\r\n            <li *ngFor = \"let wild of wildService.wilds\">{{wild.name}}</li>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n    <div>\r\n        <app-wild-card></app-wild-card>\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_paging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/paging.service */ "./src/app/services/paging.service.ts");
            /* harmony import */ var _services_bird_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/bird.service */ "./src/app/services/bird.service.ts");
            /* harmony import */ var _services_domestic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/domestic.service */ "./src/app/services/domestic.service.ts");
            /* harmony import */ var _services_wild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/wild.service */ "./src/app/services/wild.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(paging, birdService, domesticService, wildService) {
                    this.paging = paging;
                    this.birdService = birdService;
                    this.domesticService = domesticService;
                    this.wildService = wildService;
                    this.title = "Avrazoo";
                    if ("serviceWorker" in navigator) {
                        window.addEventListener("load", function () {
                            navigator.serviceWorker
                                .register("service-worker.js")
                                .then(function (registration) {
                                console.log("Service Worker is registered", registration);
                            })
                                .catch(function (err) {
                                console.error("Registration failed:", err);
                            });
                        });
                    }
                }
                AppComponent.prototype.changeItem = function (ev) {
                    // switch(window.location.pathname.substring(1,)){
                    switch (this.paging.currentPanel) {
                        case "birds":
                            if (this.birdService.currentIndex == 0 && ev == -1)
                                this.birdService.currentIndex = 4;
                            else {
                                this.birdService.currentIndex =
                                    (ev + this.birdService.currentIndex) % 5;
                                this.birdService.currentBird = this.birdService.birds[this.birdService.currentIndex];
                            }
                            break;
                        case "wilds":
                            if (this.wildService.currentIndex == 0 && ev == -1)
                                this.wildService.currentIndex = 4;
                            else {
                                this.wildService.currentIndex =
                                    (ev + this.wildService.currentIndex) % 5;
                                this.wildService.currentWild = this.wildService.wilds[this.wildService.currentIndex];
                            }
                            break;
                        case "domestics":
                            if (this.domesticService.currentIndex == 0 && ev == -1)
                                this.domesticService.currentIndex = 4;
                            else {
                                this.domesticService.currentIndex =
                                    (ev + this.domesticService.currentIndex) % 5;
                                this.domesticService.currentDomestic = this.domesticService.domestics[this.domesticService.currentIndex];
                            }
                            break;
                    }
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_paging_service__WEBPACK_IMPORTED_MODULE_2__["PagingService"] },
                { type: _services_bird_service__WEBPACK_IMPORTED_MODULE_3__["BirdService"] },
                { type: _services_domestic_service__WEBPACK_IMPORTED_MODULE_4__["DomesticService"] },
                { type: _services_wild_service__WEBPACK_IMPORTED_MODULE_5__["WildService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-root",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _comps_general_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/general/header/header.component */ "./src/app/comps/general/header/header.component.ts");
            /* harmony import */ var _comps_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/general/nav/nav.component */ "./src/app/comps/general/nav/nav.component.ts");
            /* harmony import */ var _comps_general_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/general/paginator/paginator.component */ "./src/app/comps/general/paginator/paginator.component.ts");
            /* harmony import */ var _comps_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/general/footer/footer.component */ "./src/app/comps/general/footer/footer.component.ts");
            /* harmony import */ var _comps_panels_domestic_panel_domestic_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/panels/domestic-panel/domestic-panel.component */ "./src/app/comps/panels/domestic-panel/domestic-panel.component.ts");
            /* harmony import */ var _comps_panels_wild_panel_wild_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/panels/wild-panel/wild-panel.component */ "./src/app/comps/panels/wild-panel/wild-panel.component.ts");
            /* harmony import */ var _comps_panels_bird_panel_bird_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/panels/bird-panel/bird-panel.component */ "./src/app/comps/panels/bird-panel/bird-panel.component.ts");
            /* harmony import */ var _comps_cards_bird_card_bird_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/cards/bird-card/bird-card.component */ "./src/app/comps/cards/bird-card/bird-card.component.ts");
            /* harmony import */ var _comps_cards_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/cards/wild-card/wild-card.component */ "./src/app/comps/cards/wild-card/wild-card.component.ts");
            /* harmony import */ var _comps_cards_domestic_card_domestic_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/cards/domestic-card/domestic-card.component */ "./src/app/comps/cards/domestic-card/domestic-card.component.ts");
            /* harmony import */ var _comps_general_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comps/general/page-not-found/page-not-found.component */ "./src/app/comps/general/page-not-found/page-not-found.component.ts");
            // const appRoutes: Routes = [
            //   { path: 'birds', component: BirdPanelComponent },
            //   { path: 'wilds', component: WildPanelComponent },
            //   { path: 'domestics', component: DomesticPanelComponent,  },
            //   { path: '',
            //     redirectTo: '/birds',
            //     pathMatch: 'full'
            //   }, { path: '**', component: PageNotFoundComponent} 
            // ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _comps_general_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                        _comps_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                        _comps_general_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_7__["PaginatorComponent"],
                        _comps_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                        _comps_panels_domestic_panel_domestic_panel_component__WEBPACK_IMPORTED_MODULE_9__["DomesticPanelComponent"],
                        _comps_panels_wild_panel_wild_panel_component__WEBPACK_IMPORTED_MODULE_10__["WildPanelComponent"],
                        _comps_panels_bird_panel_bird_panel_component__WEBPACK_IMPORTED_MODULE_11__["BirdPanelComponent"],
                        _comps_cards_bird_card_bird_card_component__WEBPACK_IMPORTED_MODULE_12__["BirdCardComponent"],
                        _comps_cards_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_13__["WildCardComponent"],
                        _comps_cards_domestic_card_domestic_card_component__WEBPACK_IMPORTED_MODULE_14__["DomesticCardComponent"],
                        _comps_general_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                        // , RouterModule.forRoot( appRoutes )
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/comps/cards/bird-card/bird-card.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/comps/cards/bird-card/bird-card.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img{    max-height: 100px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvYmlyZC1jYXJkL2JpcmQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsaUJBQWlCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jYXJkcy9iaXJkLWNhcmQvYmlyZC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7ICAgIG1heC1oZWlnaHQ6IDEwMHB4O30iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/comps/cards/bird-card/bird-card.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/comps/cards/bird-card/bird-card.component.ts ***!
          \**************************************************************/
        /*! exports provided: BirdCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdCardComponent", function () { return BirdCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_bird_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/bird.service */ "./src/app/services/bird.service.ts");
            var BirdCardComponent = /** @class */ (function () {
                function BirdCardComponent(birdService) {
                    this.birdService = birdService;
                }
                BirdCardComponent.prototype.ngOnInit = function () {
                };
                return BirdCardComponent;
            }());
            BirdCardComponent.ctorParameters = function () { return [
                { type: _services_bird_service__WEBPACK_IMPORTED_MODULE_2__["BirdService"] }
            ]; };
            BirdCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bird-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bird-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/bird-card/bird-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bird-card.component.css */ "./src/app/comps/cards/bird-card/bird-card.component.css")).default]
                })
            ], BirdCardComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/cards/domestic-card/domestic-card.component.css": 
        /*!***********************************************************************!*\
          !*** ./src/app/comps/cards/domestic-card/domestic-card.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img{    max-height: 100px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvZG9tZXN0aWMtY2FyZC9kb21lc3RpYy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxpQkFBaUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NhcmRzL2RvbWVzdGljLWNhcmQvZG9tZXN0aWMtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1neyAgICBtYXgtaGVpZ2h0OiAxMDBweDt9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/comps/cards/domestic-card/domestic-card.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/comps/cards/domestic-card/domestic-card.component.ts ***!
          \**********************************************************************/
        /*! exports provided: DomesticCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomesticCardComponent", function () { return DomesticCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_domestic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/domestic.service */ "./src/app/services/domestic.service.ts");
            var DomesticCardComponent = /** @class */ (function () {
                function DomesticCardComponent(domesticService) {
                    this.domesticService = domesticService;
                }
                DomesticCardComponent.prototype.ngOnInit = function () {
                };
                return DomesticCardComponent;
            }());
            DomesticCardComponent.ctorParameters = function () { return [
                { type: _services_domestic_service__WEBPACK_IMPORTED_MODULE_2__["DomesticService"] }
            ]; };
            DomesticCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-domestic-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./domestic-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/domestic-card/domestic-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./domestic-card.component.css */ "./src/app/comps/cards/domestic-card/domestic-card.component.css")).default]
                })
            ], DomesticCardComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/cards/wild-card/wild-card.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/comps/cards/wild-card/wild-card.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img{    max-height: 100px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvd2lsZC1jYXJkL3dpbGQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsaUJBQWlCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jYXJkcy93aWxkLWNhcmQvd2lsZC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7ICAgIG1heC1oZWlnaHQ6IDEwMHB4O30iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/comps/cards/wild-card/wild-card.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/comps/cards/wild-card/wild-card.component.ts ***!
          \**************************************************************/
        /*! exports provided: WildCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildCardComponent", function () { return WildCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_wild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/wild.service */ "./src/app/services/wild.service.ts");
            var WildCardComponent = /** @class */ (function () {
                function WildCardComponent(wildService) {
                    this.wildService = wildService;
                }
                WildCardComponent.prototype.ngOnInit = function () {
                };
                return WildCardComponent;
            }());
            WildCardComponent.ctorParameters = function () { return [
                { type: _services_wild_service__WEBPACK_IMPORTED_MODULE_2__["WildService"] }
            ]; };
            WildCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-wild-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wild-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wild-card.component.css */ "./src/app/comps/cards/wild-card/wild-card.component.css")).default]
                })
            ], WildCardComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/general/footer/footer.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/comps/general/footer/footer.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dlbmVyYWwvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/comps/general/footer/footer.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/comps/general/footer/footer.component.ts ***!
          \**********************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/comps/general/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/general/header/header.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/comps/general/header/header.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bg-header { \r\n    background: darkgreen;\r\n    display: flex; \r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.logo{width: 25%;}\r\n\r\n.logo > img {width: 100%;}\r\n\r\napp-nav {\r\n    display: block;\r\n    width: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUEsTUFBTSxVQUFVLENBQUM7O0FBQ2pCLGFBQWEsV0FBVyxDQUFDOztBQUd6QjtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9nZW5lcmFsL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1oZWFkZXIgeyBcclxuICAgIGJhY2tncm91bmQ6IGRhcmtncmVlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nb3t3aWR0aDogMjUlO31cclxuLmxvZ28gPiBpbWcge3dpZHRoOiAxMDAlO31cclxuXHJcblxyXG5hcHAtbmF2IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/comps/general/header/header.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/comps/general/header/header.component.ts ***!
          \**********************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/comps/general/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/general/nav/nav.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/comps/general/nav/nav.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".nav-ul{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 50%;\r\n}\r\n\r\nli:hover {\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\nli {\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUNBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2VuZXJhbC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxubGk6aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5saSB7XHJcbiAgICBcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/comps/general/nav/nav.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/comps/general/nav/nav.component.ts ***!
          \****************************************************/
        /*! exports provided: NavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function () { return NavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_paging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/paging.service */ "./src/app/services/paging.service.ts");
            var NavComponent = /** @class */ (function () {
                function NavComponent(pagingSvc) {
                    this.pagingSvc = pagingSvc;
                    this.navTo('birds');
                }
                NavComponent.prototype.ngOnInit = function () {
                };
                NavComponent.prototype.navTo = function (pagename) {
                    this.pagingSvc.currentPanel = pagename;
                };
                return NavComponent;
            }());
            NavComponent.ctorParameters = function () { return [
                { type: _services_paging_service__WEBPACK_IMPORTED_MODULE_2__["PagingService"] }
            ]; };
            NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nav/nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/comps/general/nav/nav.component.css")).default]
                })
            ], NavComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/general/page-not-found/page-not-found.component.css": 
        /*!***************************************************************************!*\
          !*** ./src/app/comps/general/page-not-found/page-not-found.component.css ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dlbmVyYWwvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/comps/general/page-not-found/page-not-found.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/comps/general/page-not-found/page-not-found.component.ts ***!
          \**************************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/comps/general/page-not-found/page-not-found.component.css")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/general/paginator/paginator.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/comps/general/paginator/paginator.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img{width: 10vw;}\r\n\r\n.flex{\r\n    width: 30vw;\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxXQUFXLENBQUM7O0FBRWhCO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9nZW5lcmFsL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3t3aWR0aDogMTB2dzt9XHJcblxyXG4uZmxleHtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/comps/general/paginator/paginator.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/comps/general/paginator/paginator.component.ts ***!
          \****************************************************************/
        /*! exports provided: PaginatorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function () { return PaginatorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_bird_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/bird.service */ "./src/app/services/bird.service.ts");
            var PaginatorComponent = /** @class */ (function () {
                function PaginatorComponent(birdService) {
                    this.birdService = birdService;
                    this.moveItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                PaginatorComponent.prototype.ngOnInit = function () {
                };
                PaginatorComponent.prototype.moveItem = function (changeIndex) {
                    this.moveItemEvent.emit(changeIndex);
                };
                return PaginatorComponent;
            }());
            PaginatorComponent.ctorParameters = function () { return [
                { type: _services_bird_service__WEBPACK_IMPORTED_MODULE_2__["BirdService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PaginatorComponent.prototype, "moveItemEvent", void 0);
            PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-paginator',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paginator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paginator.component.css */ "./src/app/comps/general/paginator/paginator.component.css")).default]
                })
            ], PaginatorComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/panels/bird-panel/bird-panel.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/comps/panels/bird-panel/bird-panel.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BhbmVscy9iaXJkLXBhbmVsL2JpcmQtcGFuZWwuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/comps/panels/bird-panel/bird-panel.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/comps/panels/bird-panel/bird-panel.component.ts ***!
          \*****************************************************************/
        /*! exports provided: BirdPanelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdPanelComponent", function () { return BirdPanelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_bird_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/bird.service */ "./src/app/services/bird.service.ts");
            var BirdPanelComponent = /** @class */ (function () {
                function BirdPanelComponent(birdService) {
                    this.birdService = birdService;
                }
                BirdPanelComponent.prototype.ngOnInit = function () {
                };
                return BirdPanelComponent;
            }());
            BirdPanelComponent.ctorParameters = function () { return [
                { type: _services_bird_service__WEBPACK_IMPORTED_MODULE_2__["BirdService"] }
            ]; };
            BirdPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bird-panel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bird-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/bird-panel/bird-panel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bird-panel.component.css */ "./src/app/comps/panels/bird-panel/bird-panel.component.css")).default]
                })
            ], BirdPanelComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/panels/domestic-panel/domestic-panel.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/comps/panels/domestic-panel/domestic-panel.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BhbmVscy9kb21lc3RpYy1wYW5lbC9kb21lc3RpYy1wYW5lbC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/comps/panels/domestic-panel/domestic-panel.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/comps/panels/domestic-panel/domestic-panel.component.ts ***!
          \*************************************************************************/
        /*! exports provided: DomesticPanelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomesticPanelComponent", function () { return DomesticPanelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_domestic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/domestic.service */ "./src/app/services/domestic.service.ts");
            var DomesticPanelComponent = /** @class */ (function () {
                function DomesticPanelComponent(domesticService) {
                    this.domesticService = domesticService;
                }
                DomesticPanelComponent.prototype.ngOnInit = function () {
                };
                return DomesticPanelComponent;
            }());
            DomesticPanelComponent.ctorParameters = function () { return [
                { type: _services_domestic_service__WEBPACK_IMPORTED_MODULE_2__["DomesticService"] }
            ]; };
            DomesticPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-domestic-panel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./domestic-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/domestic-panel/domestic-panel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./domestic-panel.component.css */ "./src/app/comps/panels/domestic-panel/domestic-panel.component.css")).default]
                })
            ], DomesticPanelComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/panels/wild-panel/wild-panel.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/comps/panels/wild-panel/wild-panel.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BhbmVscy93aWxkLXBhbmVsL3dpbGQtcGFuZWwuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/comps/panels/wild-panel/wild-panel.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/comps/panels/wild-panel/wild-panel.component.ts ***!
          \*****************************************************************/
        /*! exports provided: WildPanelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildPanelComponent", function () { return WildPanelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_wild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/wild.service */ "./src/app/services/wild.service.ts");
            var WildPanelComponent = /** @class */ (function () {
                function WildPanelComponent(wildService) {
                    this.wildService = wildService;
                }
                WildPanelComponent.prototype.ngOnInit = function () {
                };
                return WildPanelComponent;
            }());
            WildPanelComponent.ctorParameters = function () { return [
                { type: _services_wild_service__WEBPACK_IMPORTED_MODULE_2__["WildService"] }
            ]; };
            WildPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-wild-panel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wild-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wild-panel/wild-panel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wild-panel.component.css */ "./src/app/comps/panels/wild-panel/wild-panel.component.css")).default]
                })
            ], WildPanelComponent);
            /***/ 
        }),
        /***/ "./src/app/services/bird.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/bird.service.ts ***!
          \******************************************/
        /*! exports provided: BirdService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdService", function () { return BirdService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BirdService = /** @class */ (function () {
                function BirdService() {
                    this.birds = [
                        { name: 'blue-tail', size: 'small', lifeSpan: '15y', habitat: 'africa', img: 'data:image/jpeg;base64,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' },
                        { name: 'long-tail', size: 'small', lifeSpan: '1y', habitat: 'holand', img: 'https://media.mnn.com/assets/images/2015/08/long-tailed-widowbird.jpg.653x0_q80_crop-smart.jpg' },
                        { name: 'blue-mouth', size: 'medium', lifeSpan: '5y', habitat: 'china', img: 'data:image/jpeg;base64,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' },
                        { name: 'pink-beak', size: 'large', lifeSpan: '115y', habitat: 'africa', img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFRUXFRUVFRUVFRcXFRYVFRcXFxYVFRUYHSggGB0lHRYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFS0dHR0rLS0tLi0tLS0tLSstKysrLS0rKy0tLS0rLS0tKy0tLS0tKy0tLS0rKy0rLS0tLSstK//AABEIAQMAwwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABIEAABAwIDBQUEBgcFBwUAAAABAAIRAyEEEjEFBkFRYRMicZGhB4GxwSMyQlLR8BQzYnKCkuEkorLC8QhDU2Nzs8MVJXSDo//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAkEQEBAAIDAQABBAMBAAAAAAAAAQIRAyExEkEEBTJRImFxE//aAAwDAQACEQMRAD8A4/KpNalKk1wWcCbWqeRJpRMyoAupqDm2RyVEkJBWDEixTJTFyQNlShSDki4JAwCeEwcnzoBoTwmzp86YRISyp8yfOkCDU+VIPT509hEhMBdSL1EvQFPadISHNGYkCQYEEWmeOk6eKyK9OpnhwykgMBMiJgXHHUrsKGAfVw9V9Nmc0rkZSZY4ZamW0OLRBjW+hXFYirUNyS6L63jieov1S003uK9SkcwAAiSAeYn+nqt7ZeFytki/A/0/OqxaIPcBI1M6OFwCdLaX6ELq32azjLQfU/glfT8loMJJZklTHQXbKTaqpZk4ekppMrIgqrOY9Ezp7C4aqgaqq5+qgX9UthYNVRNZVcyYv6pbNbFVN2yp5+qi56AvdsmNZUO06pZ04F7tlLtlnhyc1EBd7VSFVZ/aJxU6oJodqnFVUBUU+0SC52qgaqrF6gaiA732a4KvVrOfTLDTDSyq11Qgua8XysbMnkXACVy2/wBsTsMQ9rbwScv3GuaSdTpYnwI8FZ3T2zVpVOxpvhtVwa+wk2IF9eOmiW9VNzs1V7iXGSXEkgm/PQkwOV1cvSsY5fA0yHtBNvrEdTIy9dFvYtmTK2Se4CPeTosylAc0xMEE21kGfETB8lpbYfBpzxptiPF1j+eIUT1eXgAekqucJ1TNW7RLtECU0o0nayKqkK6qSmRoLZxCgcQqhCg4pGt9uomuqZKg56WjXTiFDt1Rc9ae7GxauNxNPDUfrPOuoa0Xc93QC/Ww4pyFtd2DsnEYyqKWHpuqOOsaNH3nuNmjqV6vsT2LjKDi8Q4OMEsoBoy9O0qA5v5QvRN193MPs+gKNBscXvP1qj4u95+A0AsFnb576U8CwOLcxMgcgRGp4aj8layLwwud+YoM9k+zAILKp6mq4eggLG2v7HcK6ewxFWk4g5WvDajLdAGu/vFB2H7Xm163ZZBdwaHA92SYBE3IJjgDdae+O80MpkSHB5sOMscInXUg+5LeM7rp4f0XJy8mOE/LzTeD2Z7RwrXPDG16bb5qBzOgcTTIDvKYXEisvdNgbexAaLP4amfig707k4faQdUptGHxWoeBFOqeVVotJ++L6TIEI+ccv41r+q/buXgt328TFdS7dB2jgalCq+jWaWVGHK9p4H5iIIPEEFDas9POW+2TdqgAJJ6DW2BV/tNH/qs/xBb+8h+gb3g4l9SR3s7Q0NIOkXMj3rnd2BOLoD/mt1W/vG0tAadB16x3Z6GPemcc1h6ZdxN9bm0wQSeMyfJE2gHUy1hcXdwPEk8S4Wn90eQ5K7RohoggAm1oINwD3gYNzH4Kjt+RVaDwpMHq4/NTPVXqK4rJkIEJKkJJJpSRpBEpSmTIMiVBxUihuQA3ILiiuCC5OGgXL3H/AGcdkWxOMIFy3D0zF7d+rfkZpfyrwyF9R+xfAGhsjD5tahfV9z3HL/dDVUDuXtHFc9vRsShjKRpVWW4ObEg8/wA8ls1qyoVsT0Wkn9qxtl3Hn+xPZthsK7tO0c4yCGgRoZbJJOluSw94sTTZXeKoccpimw92JAJqOIN5mAPxXoWPx4E9F51tnAVsRiHlkZSBmc4CzuMe6FnyedR6f7dzY48u+S9Sf8Dw+2WF0gOHKXk+q1K++FHDMz1HGfstBJe49B8zZYu0tmsw2GrV3kvdTYMo0bncWsZIGozObPQHxXluJxTqry95knyHIAcAsJhbd+Oz9b+48Pz88c3f9t3ezeirtCsKtVrG5W5GBoGYMmQHP1eRe50kwsgIDQjNWr5+3d2nKYlIqLghO29uW+k3FMqVahaaZzU2Bpd2j7gNkWaBrJ9y6fbuNALgwkZpa4gC8d4AOPAuDNBJ9647dRs42gOdSPNrhK6Ta9FzS7QwRlEQCCQb80Vph4y8M8EjUwQOlzczwVDeQDt7X+jZ8+a1KLTnk9AfdGnSAs3eVoFcAaCmz4uUT08/GaEykAkrZpwmRcqfKnpAKRCNkTZUtACFEhWMqGQjRqrwgPCuPCA4JmA1kr7F3ZZTGDw7aRBpijTaxw0c1rQA4dDE+9eB+x3c2jjq7qmIh1KjB7Gb1Hm4zgXFMW/eMDQOC+j6TA0AAAAAAACAANABwCZs7E0je8LExrn6NBd4fiurewcVVrZRwWkuw4DE4aqdWx4qpVY5giF2+IDVlYnCh2qm4xX04reHYlfF4GvToNzVO44M4vDHhxa39qBI55Y4rxM0iDBEGSCDYgjUEcF9SYKmKZsuG9r25jarHbRw7Ye0TimAfXb/AMYAfab9rmL6i6+U14u1qMAogIoCnSbUYTFqLCaEy209zac4/DDT6Tjp9Vy7TaRAlwgkSCCNNInxsuT3Jo5sfh2ji99+UUnmV1u1KDiTzvPEwLGB/EVOTXjvTkNn4V7ar3OdMuGUSTAJm8xFjCFvIZrNP/Kp8Z+8tCm/vi+voYj3aKvvBTDnNqtLSI7Mw6Ycwk+4EO9Cpnp3xkBqSmAkqZpBOknVoNCZSKiUjQchuRChPSALkJFcuh9nWyP0raWFpES3tBUfyyUgahB6HKG/xJyG979lW6/6BgWB7YrVYq1uYc4d2mf3WwPHNzXYOdCZzoVWtUVSKKtWWfiKyVessyvXT2Cr11WNZBqV1XfWU3JWl8YhWsLi+BggiCDcEGxBHIhYXao9GrBRMi08U352CMFjKlBv6u1Sj/0nyWj3EOb/AALDaF6l7ZMIHU8NiBq176Duoe3tGeRZU/mXl6Kzy9OAkkEiUJb+4tOcY0/cp1Xze3cLeHV4XS7WxGXNOhm2a8QTJienosn2e4Yl1erIEMbTEkavOYzfSGDzV7bVTiepi/OBb3H0U1th4x+xkBwBjQc+7AuOCzNpu7wb91seZLreYWlQq5njSfD88VmbTP0z/EDyaAonp5eK6SmAkrZmTFOmVJJMSkSoygGKE9FKGUjAcvTfYFQBx1apH1MMY8X1GD4NK80cvXP9n6n3sa79igPWqfwThx7FVqqlWqoj6kqhiaiuqAxFZZ1eoiVn3VLEuWdqpAKr0Fz01UoUrK1pIKHo7HKm0o1MpylYyvaIM2zqn7FSi8fz9n8KhXkEL2Dfg/2Cv/8AV/3qa8hhaRhn6inITp4TQ6zdPFhtB7GU8tSe/UDiHPzE5RBsAASLdVHaVQ5bgHUyTmcbWkk/Dqm3IaSa4EfVZIteSbAeV/BWtu4ENJizRlF9Li0Hz8ipraeM7ZovJEWta/T5LJx/62p++Vq4EwQ25MjLfQWiDw8Fk439bUn77vipgy8iISTgJKkbDUZSJTKkEkkkgzFQKIhuKAE9ew+wUxSxp60fhVXjzl6p7Cqx/trOGSg71qgoi49VFSWyqOJqq3Tp5aQ5mT5kkekLHxb0ZVeuwH1rqlXqSSpVXqq9yxyyazEznqMqBTrParE2orUEKbSqlRpk79P/ALBW8aQ//Vi8phen7/PjBO61KQ8jm/yrzELbHxz5+kApAJwnIVbQ6PcaplqVXHhSB/vtHzV7a+IMSTOoAgQTBEkc4NjwsVmbmn6SraZpERpfO2Fa2nWyy2AdOVpBmLdFNa43pW2Y0mLAAmPQH3LGxLYqPHJzvitfAYruBpsGukGNCdZPLRZWNg1XkGQXEg8CDeUoMvEAEk4CSaFWU6FmSDlRCykh51IPQEihuKlKi5IBOXonsQxGXGVqf/Ew5Pvp1GR6OK89JXT+zPGdltPDGYD3OpHr2jHNaPe8s9E4uPoTaJgRyC5nFvW/tZ+q5vFuU51thFKq5BJT1HIJcua1tIclSlDzJNKUAzUQIQKmCtMUWOV9pOIilRp8XVHP9zG5f/J6LgQug3/xufFZAZFJgZ/G7vP+LB7lzoK3njlz9ECkoApSmh0e5zJdWN7UuHV4/BH2hIdzEAiW8SDJ52v4qxuLRilXqgtdmLKWS9tbu4AHN6IO0SYlo4OIg+EXHQe+SorbGdMPK4y1ttNDFpjTQ3gqviBD3CZgx5CFp4WjeTJvMTYRzIWTiDNR5/ad8USlYIElFqSZMyU8pgFMNTSTQiAJgFNBGhMQppQmYRCubEflxOHdMRiKBnlFVhlVnKIqlnfGre8PFtx6whUfT219SudxRW5tCqHAOGjgHDwIkfFYWKWXJXTxxm11XLlYrquWrGt5iiXKVNRyKbGpQrBmoWPxraNN9V2jGzHM8B7zA96JPBcDv1toVHjDsPcYZefvPFgPBsn3+C2xjDkuo5mtWc9znuMuc4ucepMlIBRCI0LZy06Jh6Qc4NLg2TBcZgDmQ0E+QUApMdBkIJ0uz61LDE0hneH/AFnnKA10EAtbP1epM34pbVE/swDMOEOm4JE3GnDig0X1XBp7umYPIBfcQJ56cuKJtWuCGmJ+yXfa1kGfRR+W34Q2XTAbPG4PTT4j4rn3XcfE/FdLg3MY0PJsc0OEw4gt7t+USRrdc2NT4lELKiApJw1JNDNAUkTC4d9R2Smxz3nRrGlzv5WyV1uyPZvjqsGoKeHaeNZ4D459m2/uOVVotWuRCkBpzNgOJPIBepYD2d4OkJrVKmIdE5WkUaR5CGkvPiHjRbdKthsKR2FKjQmzsjB2kC36z6/HUk8OqFzCvLdn7pY6vBp4WrH3ngUm+OaqWgjwlaWK3Eq0QDXxGHpg8i6oBGoJgDNBBgE2m9l2eI3sEXuYiflcmfNcztzb5rtyEEiZuBIIMiI05yls/iSB0vZ054Bbi6FxLTlqQRzkNsPPRBx/s0xVMj6bDEHSX1Wz0g0lPA7eq06YYHGBNibX9fXitfD74FoAfnMhwJhuhmBBnme9qJMaAI3D+XZ4LHsGHpU6lRgqMo021L93M1oa4hx1bIN0DEkHQg+BB8ua88q7ffpM6TJeZgRJEDm7VDp7fJH4EiI63mxPBRlqtcMvl2dD6R+WQL3PL+qvYjCNYLG7TD8x56EQNFwFXbVoaR3hBmdY8dbA/khdVhsc7E5okF2GZUjWC5xAnp3SlMMfHbwZY5y7aDqEcPA8D4IVRuUEngJ8lze7G8FT9RVce8QGTeHgQdfzqsylvLVcSwuJY5xbePtQQ0E960xPhdR/5d9Mc88Y0t49sPp0XOpBxJMZw0ltNvFziBDek8SvOQRrPvn5r0fZmNzHM3NTi2t+skQtDF4mgGtxRpUjVD8gqCm0OMfWJIF9frETfXVaY9IvDOW/45PK2qYXpe3Nz6GKBxGHf2VZ4LjTsaL3AXEAB1NzrGbgkmwuV5qRC0cvLxZcd7OE6iE6GTqalcCnhy2wFMe4kCfUFUdouzOkQAYkAGJPiTOqVZrm0qQMj6MEE9SYQ3vzC+vCONvIf1Wdne20vWkcBWAOV12kgweDpiYWawK/TpnK4z9Vp+Fh8FQYqiasN/OidM1JCXtLtu4egzJh6dOkwjSkGsYDI4AAe830XO7Q3oBJuDHKJN+XztquPqVnu7xP9BPpxVKpjaY1dmPJonxk6FT9Wt9yN/E7wPcZBiOFiPfZUamKqvmZ/PHosertU6U2BvU3PloFTq1nv+s4noTby0TkqLnG1WrU2nvPBPJsO/w29yrv2jT4Nceth81lgJ0/lP3WidqtH+7P80fJQO1m8WEdQ6/w8VnuCE5HxDmddTu5hv0yqaVExUDHPAecstEAgOEye9pa08kfG7s4inZ1KoBxc0Zm9O82QFnez15G0sLHGo5p/jpvb8wvcsQy6jKa8a4XfrwWrhjwIPSfSy6LcnEPbUqMeXS+k1jJPBjjDRB/a00Xo2MwFOoR2jGvjTM0H4rEw27LGPc8tGktykiCDLTA8BbSyiZ10ccmN+tvORjjTxBqAXbVe5odIEhxiVRpd1wknLILhxtFwPcOWi0t5sdSp4mrTpMJa1xa7MdX3zkW0n5qizaFEiHNcNOo9PwWnf8ATmystva7gXhwuSCSSTrJJmD7/wDVW8biS1jWfYAMubeS4mXObw+zoTos/CMbUJay5gmATIA4kawjVaTR+sJhs9QY/PojfZYy6dPu3tE9lSdNg7LJNuIHSZjzSxmJwj6jzUwlB17vyZXEix7zIdMqvslwZhQ9mUtBzNJFswd3deRGi5iq57XAEgkzcwddZ8ZRL26v1Ge8MZXSfo+zHs7PsTSObN2jajy8aDLNTNLdLEGJMQp4HYmBp1DUp4mrLR3A4Uy4ONptHw4rlnkiIJmfgLH4K6xwIE6iBAjhcnqnbI4pA9t9oarmPfngkh2aQbSIM8up1WbTrEAtdPQq5i8sEiLWAIN8wIkcoVHs7X14eaN7LTWrPZ2T8gdGQA5onNxgjhdYzFr0W5qdQDXI6wPGJ/ylY1NKDJYCSTRZOqJRq1HvMuJPw8kmtUmBEAVaRsPKpZUWE8IAQYnyooCYhA2A5qG5qsOQXIONncO20cH/APIp/H/Ve/bRZD3DqvANyGu/9QwmXX9IpeQeJ9JX0Htf9Y5Tl41472zi1MxzWnM8gNFyTyF1Mhea+1bbV24Vh079SDz+q0qMZ21yy6cNvBixXxVes3R9V7m+BJgqm1qQCmAtXLaPs/EOo1G1GatM9CNC09CCQtDeHaTcQ9rmU8jQOJlzidSTysAAswBEAS1PT+7rX4adbuYBjM0uq1nvyzMU6YDL8pcPRZ2HxDmXGU+IlRhKEaFzt0t08a25c0zyEQRxubj1RqNek4xJaTpIMSs2EiEriJnWli6E/VcPlbqVVp05NzbS2tv6q/s1odRNhLXRPQ3HxKc0ieAFuB+Pko3rprrfaWz4DxyNj4Gx+KyHUi1xafskjyMK+x5afA6IW0m/SF33g10+Ig+oKqIyBASThJUhTARAoBTCpKQUlEFPKAdMUiU0pBB6CUZ6CUG7r2MbN7XaTKhEtoU31Z/aI7No/vuP8K9f2m6ahXH+wvBhmGrVuNSpln9mmLDzc5dViHS5x6pZdRtxqW0MUKVJ9U6MaXeQXz7tDGOrVX1XmXPcXHpPD3CB7l7vvG+MJiXHQUX+sQvAGoxLkqbQptUQphUyTaFMJgEkEkmKQKSQMUkiolAbO7hP0rRfugx4GD8UZr73GnU+VtFU3dce0cOdN3oQUSrUN725rLKdt8L0DU1JmOnrxSx2Ic5rGkQAXEczOX0/FBqXMTKni2w2n/F/lsqicgUkwTqkKLHokqqHKYcqQsAp5QA9TDkGJKcFDlOCgE5CIRXIRQb3P2LH/wBvd0qVPkfn6LdJ1XBexLbjGmrg3uh1SalKftENGdo6gMzRyzcl3bhDo6pZ/htg5f2l44UsA9n2qrmsHhMn0XiwXae1La/bYkUmmW0RBHDOdfGBF+q4wIjPO9phSCgFIFNIgKkFAFSlBHSKaUxKQOVAlIlMSkGpu3VIrgATma5ptMAiZHI218VYxohxAJ+QVbYG0GUXOLxOZuUHlJElW8VWBJ5aiyjJth4DVqNygBsEWMcdIuVDFj6Jp5PI8xI+CZxHpxPHw4qbXZ6FQXluV3lYx7ksTyUQU6C16S0Y7Z4KlmQA5SBVJGzKbXIAKmHJgcOUsyrhyfMkY+ZRKHnThyDWMDjX0ajKtJxY9hlrhqDEfAke9dA7f3Hn/fCYInI3MZ4zGq5eUyQ2JVqlxLnEkkkknUk6kqIUZSlAECeUOUsyZCgqUoQKfMgJylKHKeUBKUxKYlRzJA5K36Zz0Wv1Oh8RZc45y19368h9M/vD4H5KMvGnH6hiakgyL9OSsbBrND8rvqu7rvA2QzRacxc/LGgjvH3Kp2b2Q+LRI5wola2OsduZR4YxscO5p01ukuIxGMqOcSCQOWvqnWu2elAKaZJUxTYpNSSQDSlKdJAIlSSSTNKUkkkgZJJJMyBTpJJEcJwnSQCTEpJIBSolMkkESrewXkV2RxkHwgpJIvisf5Re2prPX8Vo7IeX0XB1wGW6X6JJLKOj8qlGg2PqjU/EpJJJG//Z' },
                        { name: 'flamingo', size: 'extra large', lifeSpan: '5m', habitat: 'africa', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDR_vthK0yMiuGjiYI7Q7ydbsMOIEdlqIJhE8hVALtCN36Q-ETQ&s' },
                    ];
                    this.currentIndex = 0;
                    this.currentBird = this.birds[this.currentIndex];
                }
                return BirdService;
            }());
            BirdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BirdService);
            /***/ 
        }),
        /***/ "./src/app/services/domestic.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/domestic.service.ts ***!
          \**********************************************/
        /*! exports provided: DomesticService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomesticService", function () { return DomesticService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DomesticService = /** @class */ (function () {
                function DomesticService() {
                    this.domestics = [
                        { name: 'cow', size: 'large', lifeSpan: '15y', habitat: 'India', img: 'data:image/jpeg;base64,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' },
                        { name: 'goat', size: 'medium', lifeSpan: '5y', habitat: 'Cashmere', img: 'data:image/jpeg;base64,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' },
                        { name: 'dog', size: 'small', lifeSpan: '10y', habitat: 'USA', img: 'data:image/jpeg;base64,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' },
                        { name: 'cat', size: 'tiny', lifeSpan: '11y', habitat: 'France', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4MrxE4bZ1_PjJ8qweepU05OUMPPCEUYcFAkKaELsgC90uVF5GQ&s' },
                        { name: 'horse', size: 'large', lifeSpan: '5y', habitat: 'Eygpt', img: 'data:image/jpeg;base64,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' },
                    ];
                    this.currentIndex = 0;
                    this.currentDomestic = this.domestics[this.currentIndex];
                }
                return DomesticService;
            }());
            DomesticService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DomesticService);
            /***/ 
        }),
        /***/ "./src/app/services/paging.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/paging.service.ts ***!
          \********************************************/
        /*! exports provided: PagingService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingService", function () { return PagingService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PagingService = /** @class */ (function () {
                function PagingService() {
                    this.currentPanel = 'birds';
                }
                return PagingService;
            }());
            PagingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PagingService);
            /***/ 
        }),
        /***/ "./src/app/services/wild.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/wild.service.ts ***!
          \******************************************/
        /*! exports provided: WildService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildService", function () { return WildService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var WildService = /** @class */ (function () {
                function WildService(http) {
                    var _this = this;
                    this.http = http;
                    this.wilds = [];
                    this.currentIndex = 0;
                    console.log("construct WildService");
                    http.get('https://raw.githubusercontent.com/TobiasComp/zoo/master/src/assets/wilds.json')
                        .subscribe(function (data) {
                        _this.wilds = data;
                        _this.currentWild = _this.wilds[0];
                    });
                }
                return WildService;
            }());
            WildService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            WildService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], WildService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Tuvia\Documents\Tuvi\Computers\Angular\FinalZoo\zoo\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map