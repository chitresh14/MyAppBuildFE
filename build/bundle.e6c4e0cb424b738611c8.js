/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = appConfig;


function appConfig($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('*');
  $routeProvider.when('/signin', {
    template: '<main-app-component></main-app-component>'
  }).otherwise('/signin');
}
appConfig.$inject = ['$routeProvider', '$locationProvider'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// 'use strict';
angular.module('mainModule', ['userServiceModule']);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Register mainApp component, along with its associated controller and template.

angular.module('mainModule').component('mainAppComponent', {
  templateUrl: '/src/profileApp/profile_main.html',
  controller: [function mainAppComponentController() {
    var mainAppVm = this;
    mainAppVm.screenHeight = window.screen.height;
  }]
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
 // Register `signUpComponent` component, along with its associated controller and template

/* unused harmony default export */ var _unused_webpack_default_export = (angular.module('mainModule').component('signInComponent', {
  templateUrl: '/src/profileApp/signin.component/signin.component.html',
  controller: ['userService', function signInController(userService) {
    var signInVm = this;
    signInVm.isSignInVisibile = true;
    signInVm.password = null;
    signInVm.email = null;
    signInVm.isValidated = true;

    signInVm.visibleSignInModal = function (isSignInView) {
      signInVm.isSignInVisibile = isSignInView;
    };

    signInVm.loginUser = function () {
      var loginData = {
        "email": signInVm.email,
        "password": signInVm.password
      };
      signInVm.loginDataValidation();
      userService.signInUser(loginData, function (response) {
        if (response && response.data && response.data.code == 201 && response.data.msg) {
          signUpVm.isEmailExist = false;
          signUpVm.isRegisterError = false;
        } else if (response && response.data && response.data.code == 409) {
          signUpVm.isEmailExist = true;
          signUpVm.isRegisterError = false;
        } else {
          signUpVm.isRegisterError = true;
          console.log("Something went wrong. PLease try again later.");
        }
      });
    };

    signInVm.loginDataValidation = function () {
      if (signInVm.email && validateEmail(signInVm.email) && signInVm.password) {
        signInVm.isValidated = true;
      } else {
        signInVm.isValidated = false;
      }
    };

    function validateEmail(mail) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signInVm.email)) {
        return true;
      }

      return false;
    }
  }]
}));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Register `signUpComponent` component, along with its associated controller and template

angular.module('mainModule').component('signUpComponent', {
  templateUrl: '/src/profileApp/signup.component/signup.component.html',
  controller: ['userService', function signUpController(userService) {
    var signUpVm = this;
    signUpVm.email = null;
    signUpVm.username = null;
    signUpVm.confirmPassword = null;
    signUpVm.password = null;
    signUpVm.isEmailExist = false;
    signUpVm.isRegisterError = false;
    var isValidUser = false; // Methode to check password and confirmParswword Match.

    signUpVm.isPasswordMatch = function () {
      if (signUpVm.password === signUpVm.confirmPassword) {
        return true;
      } else {
        return false;
      }
    }; //Method for user validation


    function userValidation() {
      if (signUpVm.email && signUpVm.username && signUpVm.confirmPassword && signUpVm.password) {
        return signUpVm.isPasswordMatch();
      } else {
        return false;
      }
    }

    function retriveUserData() {
      return {
        "email": signUpVm.email,
        "username": signUpVm.username,
        "password": signUpVm.password
      };
    } //registerUser call the service and maintain the session of register user.


    signUpVm.registerUser = function () {
      if (userValidation()) {
        userService.registerUser(retriveUserData(), function (response) {
          if (response && response.data && response.data.code == 201 && response.data.msg) {
            signUpVm.isEmailExist = false;
            signUpVm.isRegisterError = false;
          } else if (response && response.data && response.data.code == 409) {
            signUpVm.isEmailExist = true;
            signUpVm.isRegisterError = false;
          } else {
            signUpVm.isRegisterError = true;
            console.log("Something went wrong. PLease try again later.");
          }
        });
      }
    };
  }]
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var baseUrl = "http://localhost:4000/";

function userService($http) {
  this.registerUser = function (userData, cb) {
    $http.post(baseUrl + 'registerUser', userData).then(function (response) {
      console.log(response);

      if (response && response.data) {
        cb(response);
      } else {
        cb(null);
        console.log("Handle Response Error.");
      }
    }, function (error) {
      if (error) {
        cb(error);
      } else {
        cb(null);
        console.log("Handle Rejection.");
      }
    });
  };

  this.signInUser = function (loginData, cb) {
    $http.get(baseUrl + 'signIn', loginData).then(function (response) {
      console.log(response);

      if (response && response.data) {
        cb(response);
      } else {
        cb(null);
        console.log("Handle Response Error.");
      }
    }, function (error) {
      if (error) {
        cb(error);
      } else {
        cb(null);
        console.log("Handle Rejection.");
      }
    });
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (angular.module('userServiceModule', []).service('userService', ['$http', userService]));

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_services_user_auth_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_profileApp_main_module_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_profileApp_main_module_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_profileApp_main_module_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_route_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_profileApp_signup_component_signup_component_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_profileApp_signup_component_signup_component_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_profileApp_signup_component_signup_component_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_profileApp_signin_component_signin_component_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_profileApp_profile_main_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_profileApp_profile_main_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__src_profileApp_profile_main_js__);
 //***************Custom imports *************************
// Note: import Should be in reverse order of its dependencies i.e Child to Parnet 
//(It should as per the module of angularjs)
// *****************************Services********************************************






 //Define the starting module of application.

angular.module('profileApp', ['ngRoute', 'mainModule', 'userServiceModule']).config(__WEBPACK_IMPORTED_MODULE_2__app_route_js__["a" /* default */]);

/***/ })
/******/ ]);