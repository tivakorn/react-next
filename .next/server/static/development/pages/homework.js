module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/homework.js":
/*!***************************!*\
  !*** ./pages/homework.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_ReadDataHomework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/ReadDataHomework */ "./src/components/ReadDataHomework.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HomeWork = props => {
  const {
    0: fristName,
    1: setFristName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: lastName,
    1: setLastName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const show = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.showReducer);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const handleDispath = () => {
    const data = {
      fristName: fristName,
      lastName: lastName
    };
    dispatch({
      type: 'ADD_DATA',
      data: data
    });
    dispatch({
      type: 'SHOW',
      show: true
    });
  };

  const dispatchDontShow = () => {
    dispatch({
      type: 'SHOW',
      show: false
    });
  };

  return __jsx("div", null, __jsx("div", null, __jsx("div", {
    className: "nes-container with-title"
  }, __jsx("p", {
    className: "title"
  }, "Please input data"), __jsx("div", {
    className: "nes-field"
  }, __jsx("label", {
    className: "name_field"
  }, "Your Fristname"), __jsx("input", {
    type: "text",
    className: "nes-input",
    value: fristName,
    onChange: e => setFristName(e.target.value)
  }), __jsx("label", {
    className: "name_field"
  }, "Your Lastname"), __jsx("input", {
    type: "text",
    className: "nes-input",
    value: lastName,
    onChange: e => setLastName(e.target.value)
  })), __jsx("br", null), __jsx("button", {
    className: "nes-btn is-error is-centered",
    onClick: handleDispath
  }, "Dispatch"), __jsx("button", {
    className: "nes-btn is-error is-centered",
    onClick: dispatchDontShow
  }, "Don't Show")), __jsx("br", null), __jsx("div", {
    className: "nes-container with-title"
  }, __jsx("p", {
    className: "title"
  }, "List member"), __jsx("ul", {
    className: "nes-list is-disc"
  }, show === true ? __jsx(_src_components_ReadDataHomework__WEBPACK_IMPORTED_MODULE_2__["default"], null) : ''))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeWork);

/***/ }),

/***/ "./src/components/ReadDataHomework.js":
/*!********************************************!*\
  !*** ./src/components/ReadDataHomework.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ReactDataHomework = props => {
  const renderList = () => {
    const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.dataStore);
    return state.map((item, key) => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: key
      }, __jsx("li", null, key + 1, ") My name is ", item.fristName, " ", item.lastName));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderList());
};

/* harmony default export */ __webpack_exports__["default"] = (ReactDataHomework);

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/homework.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tivakorn/react-next/pages/homework.js */"./pages/homework.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=homework.js.map