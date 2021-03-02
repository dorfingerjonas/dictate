(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jonas\Documents\Projects\dictate\src\main.ts */"zUnb");


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

/***/ "B6Dm":
/*!***********************************************!*\
  !*** ./src/app/speech-recognition.service.ts ***!
  \***********************************************/
/*! exports provided: SpeechRecognitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionService", function() { return SpeechRecognitionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SpeechRecognitionService {
    constructor() {
        this.recoStarted = false;
        this.text = '';
        this.interimResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recognition = new webkitSpeechRecognition();
    }
    // init speech reco
    init() {
        // enable live results
        this.recognition.interimResults = true;
        // set reco lang
        this.recognition.lang = 'de-DE';
        this.recognition.continuous = true;
        // eventlistener for reco results
        this.recognition.addEventListener('result', e => {
            this.text = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
            this.interimResult.emit(this.text);
        });
    }
    // start speech reco
    start() {
        console.log('%ccalled start reco function', 'color: red; font-weight: bold;');
        if (!this.recoStarted) {
            this.recognition.start();
            this.recoStarted = true;
        }
    }
    // stop speech reco
    stop() {
        this.recognition.stop();
        this.recoStarted = false;
    }
}
SpeechRecognitionService.ɵfac = function SpeechRecognitionService_Factory(t) { return new (t || SpeechRecognitionService)(); };
SpeechRecognitionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpeechRecognitionService, factory: SpeechRecognitionService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _speech_recognition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speech-recognition.service */ "B6Dm");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output/output.component */ "z+Vf");
/* harmony import */ var _button_bar_button_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-bar/button-bar.component */ "rc/f");





class AppComponent {
    constructor(speechReco) {
        this.speechReco = speechReco;
        this.title = 'dictate';
        this.content = '';
        this.isContinued = false;
        this.oldValue = '';
    }
    ngOnInit() {
        this.speechReco.init();
        this.speechReco.interimResult.subscribe(result => {
            result = this.formatText(result);
            if (this.isContinued) {
                this.content = this.oldValue + result;
            }
            else {
                this.content = result;
            }
        });
    }
    isContinuedHandler(event) {
        this.isContinued = event;
        if (event) {
            this.oldValue = this.content + ' ';
        }
    }
    reset() {
        this.content = '';
    }
    formatText(text) {
        const placeholders = [
            { regEx: 'Absatz', content: '\n' },
            { regEx: 'absatz', content: '\n' }
        ];
        for (const placeholder of placeholders) {
            while (text.includes(placeholder.regEx)) {
                text = text.replace(placeholder.regEx, placeholder.content);
            }
        }
        return text;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_speech_recognition_service__WEBPACK_IMPORTED_MODULE_1__["SpeechRecognitionService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [[3, "content"], [3, "content", "speechRecoService", "isContinued", "resetHandler"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-output", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-button-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isContinued", function AppComponent_Template_app_button_bar_isContinued_2_listener($event) { return ctx.isContinuedHandler($event); })("resetHandler", function AppComponent_Template_app_button_bar_resetHandler_2_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.content)("speechRecoService", ctx.speechReco);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _output_output_component__WEBPACK_IMPORTED_MODULE_3__["OutputComponent"], _button_bar_button_bar_component__WEBPACK_IMPORTED_MODULE_4__["ButtonBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output/output.component */ "z+Vf");
/* harmony import */ var _button_bar_button_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-bar/button-bar.component */ "rc/f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _output_output_component__WEBPACK_IMPORTED_MODULE_3__["OutputComponent"],
        _button_bar_button_bar_component__WEBPACK_IMPORTED_MODULE_4__["ButtonBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dictate - Convert your voice into text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 25%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--green);\n  color: var(--white);\n  box-shadow: inset 0 0 10px -4px #000000bf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IC00cHggIzAwMDAwMGJmO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "rc/f":
/*!****************************************************!*\
  !*** ./src/app/button-bar/button-bar.component.ts ***!
  \****************************************************/
/*! exports provided: ButtonBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBarComponent", function() { return ButtonBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ButtonBarComponent {
    constructor() {
        this.content = '';
        this.isContinued = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resetHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recoOnceStarted = false;
    }
    ngOnInit() {
    }
    start() {
        if (!this.speechRecoService.recoStarted) {
            this.recoOnceStarted = true;
            this.speechRecoService.start();
        }
    }
    stop() {
        this.speechRecoService.stop();
    }
    reset() {
        this.recoOnceStarted = false;
        this.speechRecoService.stop();
        this.resetHandler.emit();
        this.isContinued.emit(false);
    }
    continue() {
        this.isContinued.emit(true);
        this.speechRecoService.start();
    }
}
ButtonBarComponent.ɵfac = function ButtonBarComponent_Factory(t) { return new (t || ButtonBarComponent)(); };
ButtonBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonBarComponent, selectors: [["app-button-bar"]], inputs: { content: "content", speechRecoService: "speechRecoService" }, outputs: { isContinued: "isContinued", resetHandler: "resetHandler" }, decls: 10, vars: 4, consts: [[1, "green", 3, "disabled", "click"], [1, "red", 3, "disabled", "click"], [1, "green", 3, "click"], [1, "green", 3, "href"]], template: function ButtonBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonBarComponent_Template_button_click_0_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start Speech Recognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonBarComponent_Template_button_click_2_listener() { return ctx.continue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Continue Speech Recognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonBarComponent_Template_button_click_4_listener() { return ctx.stop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stop Speech Recognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonBarComponent_Template_button_click_6_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Open Mail Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.recoOnceStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.speechRecoService.recoStarted && !ctx.recoOnceStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.speechRecoService.recoStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:?body=" + ctx.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 70%;\n  height: 15%;\n  margin-bottom: 5%;\n  padding: 0 10%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 1vw;\n  padding: 10px 15px;\n  border: none;\n  border-radius: 7px;\n  outline: none;\n  text-decoration: none;\n  background: transparent;\n  font-size: 1.2em;\n  cursor: pointer;\n  transition: all 250ms ease-in-out;\n}\n[_nghost-%COMP%]   .green[_ngcontent-%COMP%] {\n  background: var(--green-light);\n  color: var(--green);\n}\n[_nghost-%COMP%]   .green[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: var(--green);\n  color: var(--white);\n}\n[_nghost-%COMP%]   .red[_ngcontent-%COMP%] {\n  background: var(--red-light);\n  color: var(--red);\n}\n[_nghost-%COMP%]   .red[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: var(--red);\n  color: var(--white);\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJ1dHRvbi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBQ0o7QUFFRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0FBRko7QUFLRTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU1FO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBSkoiLCJmaWxlIjoiYnV0dG9uLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogMTUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIHBhZGRpbmc6IDAgMTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJ1dHRvbiwgYSB7XHJcbiAgICBtYXJnaW46IDF2dztcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tbGlnaHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICB9XHJcblxyXG4gIC5ncmVlbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICB9XHJcblxyXG4gIC5yZWQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkLWxpZ2h0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gIH1cclxuXHJcbiAgLnJlZDpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgfVxyXG5cclxuICA6ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "z+Vf":
/*!********************************************!*\
  !*** ./src/app/output/output.component.ts ***!
  \********************************************/
/*! exports provided: OutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputComponent", function() { return OutputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OutputComponent {
    constructor() {
        this.content = '';
    }
    ngOnInit() {
    }
}
OutputComponent.ɵfac = function OutputComponent_Factory(t) { return new (t || OutputComponent)(); };
OutputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputComponent, selectors: [["app-output"]], inputs: { content: "content" }, decls: 1, vars: 2, consts: [["cols", "30", "rows", "10", 3, "value", "readOnly"]], template: function OutputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.content)("readOnly", true);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 60%;\n  min-height: 50%;\n  max-height: 80%;\n  padding: 1vh 1vw;\n  font-size: 100%;\n  resize: vertical;\n  font-family: \"Roboto-R\", sans-serif;\n  outline: none;\n  border: none;\n  border-radius: 7px;\n  box-shadow: var(--shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG91dHB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDRiIsImZpbGUiOiJvdXRwdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtaW4taGVpZ2h0OiA1MCU7XHJcbiAgbWF4LWhlaWdodDogODAlO1xyXG4gIHBhZGRpbmc6IDF2aCAxdnc7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tUicsIHNhbnMtc2VyaWY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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