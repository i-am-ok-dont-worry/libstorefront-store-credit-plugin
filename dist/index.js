(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LSFPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["LSFPlugin"] = factory();
	else
		root["LSFPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCreditDefaultState = exports.StoreCreditService = exports.StoreCreditDao = exports.StoreCreditPlugin = void 0;
var index_1 = __webpack_require__(/*! ./src/index */ "./src/index.ts");
Object.defineProperty(exports, "StoreCreditPlugin", { enumerable: true, get: function () { return index_1.StoreCreditPlugin; } });
var index_2 = __webpack_require__(/*! ./src/dao/index */ "./src/dao/index.ts");
Object.defineProperty(exports, "StoreCreditDao", { enumerable: true, get: function () { return index_2.StoreCreditDao; } });
var index_3 = __webpack_require__(/*! ./src/service/index */ "./src/service/index.ts");
Object.defineProperty(exports, "StoreCreditService", { enumerable: true, get: function () { return index_3.StoreCreditService; } });
var store_credit_default_1 = __webpack_require__(/*! ./src/store/store-credit.default */ "./src/store/store-credit.default.ts");
Object.defineProperty(exports, "StoreCreditDefaultState", { enumerable: true, get: function () { return store_credit_default_1.StoreCreditDefaultState; } });
__exportStar(__webpack_require__(/*! ./src/types */ "./src/types/index.ts"), exports);


/***/ }),

/***/ "./src/dao/index.ts":
/*!**************************!*\
  !*** ./src/dao/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCreditDao = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var query_string_1 = __importDefault(__webpack_require__(/*! query-string */ "query-string"));
var StoreCreditDao = /** @class */ (function () {
    function StoreCreditDao(taskQueue) {
        this.taskQueue = taskQueue;
    }
    StoreCreditDao.prototype.getStoreCredit = function (_a, storeCode) {
        var customerId = _a.customerId, pageSize = _a.pageSize, currentPage = _a.currentPage, sortBy = _a.sortBy, sortDir = _a.sortDir;
        var query = {
            pageSize: pageSize,
            currentPage: currentPage,
            sortBy: sortBy,
            sortDir: sortDir,
            storeCode: storeCode,
        };
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/' + customerId + '?' + query_string_1.default.stringify(query)) + '&token={{token}}',
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    StoreCreditDao.prototype.getSingleStoreCredit = function (storeCreditId) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/single/' + storeCreditId + '?token={{token}}'),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    StoreCreditDao.prototype.applyCredit = function (amount, cartId) {
        var query = {
            amount: amount,
            cartId: cartId
        };
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/apply?' + query_string_1.default.stringify(query)) + '&token={{token}}',
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    StoreCreditDao.prototype.cancelCredit = function (cartId) {
        var query = {
            cartId: cartId
        };
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/cancel?' + query_string_1.default.stringify(query)) + '&token={{token}}',
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    StoreCreditDao.prototype.getMyStoreCredit = function (storeCode) {
        var query = {
            storeCode: storeCode
        };
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/store-credit/mine?' + query_string_1.default.stringify(query)) + '&token={{token}}',
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    StoreCreditDao = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.TaskQueue)),
        __metadata("design:paramtypes", [Object])
    ], StoreCreditDao);
    return StoreCreditDao;
}());
exports.StoreCreditDao = StoreCreditDao;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCreditPlugin = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ./dao */ "./src/dao/index.ts");
var service_1 = __webpack_require__(/*! ./service */ "./src/service/index.ts");
var store_credit_reducer_1 = __webpack_require__(/*! ./store/store-credit.reducer */ "./src/store/store-credit.reducer.ts");
var store_credit_default_1 = __webpack_require__(/*! ./store/store-credit.default */ "./src/store/store-credit.default.ts");
/**
 * Provides registered customers with a flexible credit system.
 * Lets customers spend their credit balance on product purchase.
 */
exports.StoreCreditPlugin = (function (libstorefront) {
    var onCreditReset = function () { return __awaiter(void 0, void 0, void 0, function () {
        var state, creditSegment, value, service, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    state = libstorefront.getState();
                    creditSegment = state.cart.platformTotalSegments.find(function (segment) { return segment.code === 'amstorecredit'; });
                    if (!(creditSegment && creditSegment.value < 0)) return [3 /*break*/, 3];
                    value = Math.abs(99999999);
                    service = libstorefront.get(service_1.StoreCreditService);
                    return [4 /*yield*/, service.applyCredit(value)];
                case 1:
                    res = _a.sent();
                    debugger;
                    return [4 /*yield*/, libstorefront.CartService.recalculate({ quickSync: true })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    libstorefront.getIOCContainer().bind(dao_1.StoreCreditDao).to(dao_1.StoreCreditDao);
    libstorefront.getIOCContainer().bind(service_1.StoreCreditService).to(service_1.StoreCreditService);
    libstorefront.listenTo(libstorefront_1.HookType.AfterCoreModulesRegistered, function (lsf) {
        lsf.registerModule(libstorefront_1.createLibstorefrontModule('storeCredit', store_credit_reducer_1.storeCreditReducer, store_credit_default_1.StoreCreditDefaultState));
        libstorefront = lsf;
    });
    libstorefront.listenTo(libstorefront_1.HookType.AfterCouponApplied, function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onCreditReset()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    libstorefront.listenTo(libstorefront_1.HookType.AfterCouponRemoved, function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onCreditReset()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCreditService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var store_credit_thunks_1 = __webpack_require__(/*! ../store/store-credit.thunks */ "./src/store/store-credit.thunks.ts");
var StoreCreditService = /** @class */ (function () {
    function StoreCreditService(store) {
        this.store = store;
    }
    /**
     * Returns customer store credit
     * Customer must be authorized to fetch credits
     * @options {SearchCriteriaFilter} Query filter
     * @returns {Promise<StoreCredit>}
     */
    StoreCreditService.prototype.getStoreCredit = function (_a) {
        var _b = _a === void 0 ? {} : _a, sortBy = _b.sortBy, sortDir = _b.sortDir, pageSize = _b.pageSize, currentPage = _b.currentPage;
        return this.store.dispatch(store_credit_thunks_1.StoreCreditThunks.getStoreCredits({ sortBy: sortBy, sortDir: sortDir, pageSize: pageSize, currentPage: currentPage }));
    };
    /**
     * Returns store credit details for user
     * @param {string} storeCreditId
     * @returns {StoreCredit} Store credit
     */
    StoreCreditService.prototype.getSingleStoreCredit = function (storeCreditId) {
        return this.store.dispatch(store_credit_thunks_1.StoreCreditThunks.getSingleStoreCredit(storeCreditId));
    };
    /**
     * Applies selected amount of customer credit to the current cart
     * @param {number} amount
     * @returns {Promise<void>}
     */
    StoreCreditService.prototype.applyCredit = function (amount) {
        return this.store.dispatch(store_credit_thunks_1.StoreCreditThunks.applyStoreCredit(amount));
    };
    /**
     * Cancels customer credit on the current cart
     * @returns {Promise<void>}
     */
    StoreCreditService.prototype.cancelCredit = function () {
        return this.store.dispatch(store_credit_thunks_1.StoreCreditThunks.cancelStoreCredit());
    };
    /**
     * Returns customer store credit
     * @returns {Promise<StoreCredit>}
     */
    StoreCreditService.prototype.getMyStoreCredit = function () {
        return this.store.dispatch(store_credit_thunks_1.StoreCreditThunks.getMyStoreCredit());
    };
    StoreCreditService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.AbstractStore)),
        __metadata("design:paramtypes", [libstorefront_1.AbstractStore])
    ], StoreCreditService);
    return StoreCreditService;
}());
exports.StoreCreditService = StoreCreditService;


/***/ }),

/***/ "./src/store/store-credit.actions.ts":
/*!*******************************************!*\
  !*** ./src/store/store-credit.actions.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCreditActions = void 0;
var StoreCreditActions;
(function (StoreCreditActions) {
    StoreCreditActions.SN_STORE_CREDIT = 'store-credit';
    StoreCreditActions.SET_STORE_CREDIT = StoreCreditActions.SN_STORE_CREDIT + '/SET_CREDIT';
    StoreCreditActions.setStoreCredit = function (storeCredit) { return ({
        type: StoreCreditActions.SET_STORE_CREDIT,
        payload: storeCredit
    }); };
})(StoreCreditActions = exports.StoreCreditActions || (exports.StoreCreditActions = {}));


/***/ }),

/***/ "./src/store/store-credit.default.ts":
/*!*******************************************!*\
  !*** ./src/store/store-credit.default.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCreditDefaultState = void 0;
exports.StoreCreditDefaultState = {
    current: null
};


/***/ }),

/***/ "./src/store/store-credit.reducer.ts":
/*!*******************************************!*\
  !*** ./src/store/store-credit.reducer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeCreditReducer = void 0;
var store_credit_default_1 = __webpack_require__(/*! ./store-credit.default */ "./src/store/store-credit.default.ts");
var store_credit_actions_1 = __webpack_require__(/*! ./store-credit.actions */ "./src/store/store-credit.actions.ts");
var storeCreditReducer = function (state, action) {
    switch (action.type) {
        case store_credit_actions_1.StoreCreditActions.SET_STORE_CREDIT: {
            return __assign(__assign({}, state), { current: action.payload });
        }
        default: return state || store_credit_default_1.StoreCreditDefaultState;
    }
};
exports.storeCreditReducer = storeCreditReducer;


/***/ }),

/***/ "./src/store/store-credit.thunks.ts":
/*!******************************************!*\
  !*** ./src/store/store-credit.thunks.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCreditThunks = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ../dao */ "./src/dao/index.ts");
var store_credit_actions_1 = __webpack_require__(/*! ./store-credit.actions */ "./src/store/store-credit.actions.ts");
var StoreCreditThunks;
(function (StoreCreditThunks) {
    var _this = this;
    StoreCreditThunks.getStoreCredits = function (filter) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var customer, storeCode, customerId, response, items, credit, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    customer = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                    if (!customer || !customer.current) {
                        throw new Error('Cannot fetch store credits for unauthorized user');
                    }
                    customerId = customer.current.id;
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.StoreCreditDao).getStoreCredit(__assign({ customerId: customerId }, filter), storeCode)];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 3];
                    items = response.result.items;
                    credit = items instanceof Array ? items[0] : items;
                    return [4 /*yield*/, dispatch(store_credit_actions_1.StoreCreditActions.setStoreCredit(credit))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, credit];
                case 3: throw new Error('Not found');
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    libstorefront_1.Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e_1.message);
                    throw e_1;
                case 6: return [2 /*return*/];
            }
        });
    }); }; };
    StoreCreditThunks.getSingleStoreCredit = function (storeCreditId) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var customer, response, credit, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    customer = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    if (!customer || !customer.current) {
                        throw new Error('Cannot fetch store credits for unauthorized user');
                    }
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.StoreCreditDao).getSingleStoreCredit(storeCreditId)];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 3];
                    credit = response.result;
                    return [4 /*yield*/, dispatch(store_credit_actions_1.StoreCreditActions.setStoreCredit(credit))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, credit];
                case 3: throw new Error('Not found');
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_2 = _a.sent();
                    libstorefront_1.Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e_2.message);
                    throw e_2;
                case 6: return [2 /*return*/];
            }
        });
    }); }; };
    StoreCreditThunks.applyStoreCredit = function (amount) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var customer, cart, cartId, response, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    customer = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    cart = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().cart;
                    cartId = cart.cartServerToken;
                    if (!cartId) {
                        throw new Error('Cannot apply credit for undefined cart');
                    }
                    if (!customer || !customer.current) {
                        throw new Error('Cannot apply credit for unauthorized user');
                    }
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.StoreCreditDao).applyCredit(amount, cartId)];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 3];
                    return [4 /*yield*/, StoreCreditThunks.getStoreCredits({})];
                case 2:
                    _a.sent();
                    return [2 /*return*/, response.result];
                case 3: throw new Error('Not found');
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_3 = _a.sent();
                    libstorefront_1.Logger.info('Cannot apply store credit: ', 'STORE-CREDIT-PLUGIN', e_3.message);
                    throw e_3;
                case 6: return [2 /*return*/];
            }
        });
    }); }; };
    StoreCreditThunks.cancelStoreCredit = function () { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var customer, cart, cartId, response, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    customer = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    cart = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().cart;
                    cartId = cart.cartServerToken;
                    if (!customer || !customer.current) {
                        throw new Error('Cannot apply credit for unauthorized user');
                    }
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.StoreCreditDao).cancelCredit(cartId)];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 3];
                    return [4 /*yield*/, StoreCreditThunks.getStoreCredits({})];
                case 2:
                    _a.sent();
                    return [2 /*return*/, response.result];
                case 3: throw new Error('Not found');
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_4 = _a.sent();
                    libstorefront_1.Logger.info('Cannot apply store credit: ', 'STORE-CREDIT-PLUGIN', e_4.message);
                    throw e_4;
                case 6: return [2 /*return*/];
            }
        });
    }); }; };
    StoreCreditThunks.getMyStoreCredit = function () { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var customer, storeCode, response, storeCreditDetails, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    customer = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                    if (!customer || !customer.current) {
                        throw new Error('Cannot apply credit for unauthorized user');
                    }
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.StoreCreditDao).getMyStoreCredit(storeCode)];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 3];
                    return [4 /*yield*/, dispatch(StoreCreditThunks.getSingleStoreCredit(response.result.store_credit_id))];
                case 2:
                    storeCreditDetails = _a.sent();
                    if (storeCreditDetails) {
                        return [2 /*return*/, storeCreditDetails];
                    }
                    return [2 /*return*/, response.result];
                case 3: throw new Error('Not found');
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_5 = _a.sent();
                    libstorefront_1.Logger.info('Cannot apply store credit: ', 'STORE-CREDIT-PLUGIN', e_5.message);
                    throw e_5;
                case 6: return [2 /*return*/];
            }
        });
    }); }; };
})(StoreCreditThunks = exports.StoreCreditThunks || (exports.StoreCreditThunks = {}));


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "@grupakmk/libstorefront":
/*!******************************************!*\
  !*** external "@grupakmk/libstorefront" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@grupakmk/libstorefront");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map