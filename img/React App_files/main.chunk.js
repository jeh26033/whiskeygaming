(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/HueControl/HueControl.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/HueControl/HueControl.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hue-control {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 500px;\n  padding-bottom: 2em;\n  padding-top: 2em;\n}\n\n.hue-control__input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 1px solid gray;\n  border-radius: 5px;\n  display: block;\n  margin-bottom: 1em;\n  margin-top: .5em;\n  padding: 1em;\n}\n\n.emphasis {\n  color: gray;\n  font-size: .8em;\n}\n\n.hue-control li {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1em;\n  padding-bottom: 1em;\n}\n\n.hue-control li:not(:last-child) {\n  border-bottom: 1px solid black;\n}\n\n.hue-control button,\n.hue-control input[type=\"submit\"] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #000;\n  border-radius: 5px;\n  border-width: 0;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: bold;\n  opacity: .8;\n  padding: 1em 2em;\n  -webkit-transition: opacity .2s ease-in-out;\n  transition: opacity .2s ease-in-out;\n}\n\n.hue-control button:hover,\n.hue-control input[type=\"submit\"]:hover {\n  opacity: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n/* Reset */\n\nhtml, body, h1, h2, h3, h4, h5, ol, ul {\n    margin: 0;\n}\n\nbody {\n    background-color: #fff;\n    color: #000;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 16px;\n}\n\nimg {\n    border: none;\n}\n\nli {\n    list-style-type: none;\n}\n\nol, ul {\n    padding: 0;\n}\n\n* {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n}\n\n/* Core */\n\n.background-shift {\n    height: 100vh;\n    opacity: 1;\n    overflow: hidden;\n    position: absolute;\n    -webkit-transition: all 1.2s ease;\n    transition: all 1.2s ease;\n    width: 100vw;\n    z-index: -1;\n    background: url(" + escape(__webpack_require__(/*! ./img/CES_bg_img.jpg */ "./src/img/CES_bg_img.jpg")) + ");\n    background-size: cover;\n}\n\n.background-shift_image {\n    background-repeat: no-repeat;\n    background-size: 100%;\n    display: block;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    -webkit-transition: all 0.6s ease;\n    transition: all 0.6s ease;\n    width: 100%;\n}\n\n.footer {\n    display: none;\n    padding: 0 20px 18px 20px;\n}\n\n.hide {\n    opacity: 0;\n}\n\n.lesson_click-navigation {\n    bottom: 48px;\n    color: #333;\n    font-size: 14px;\n    line-height: 20px;\n    position: absolute;\n    right: 80px;\n}\n\n.lesson_click-navigation-button {\n    background-color: #333;\n    border-radius: 100%;\n    display: inline-block;\n    height: 68px;\n    vertical-align: middle;\n    width: 68px;\n}\n\n.lesson_click-navigation-button-icon {\n    left: 50%;\n    position: relative;\n    top: calc(50% - 4px);\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n}\n\n.lesson_click-navigation-button-icon.backward {\n    left: calc(50% - 1px);\n}\n\n.lesson_click-navigation-button-icon.forward {\n    left: calc(50% + 1px);\n}\n\n.lesson_click-navigation-indicator {\n    display: inline-block;\n    padding: 0 28px;\n    text-align: center;\n    vertical-align: middle;\n}\n\n.page {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n\n.page_background-pattern {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 448px;\n}\n\n.page_click-navigation {\n    bottom: 48px;\n    color: #fff;\n    font-size: 14px;\n    left: 80px;\n    line-height: 20px;\n    position: absolute;\n    -webkit-transition: all 0.6s ease;\n    transition: all 0.6s ease;\n}\n\n.page_click-navigation-button {\n    background-color: #fff;\n    border-radius: 100%;\n    display: inline-block;\n    height: 68px;\n    vertical-align: middle;\n    width: 68px;\n}\n\n.page_click-navigation-button-icon {\n    left: 50%;\n    position: relative;\n    top: calc(50% - 4px);\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n}\n\n.page_click-navigation-button-icon.backward {\n    left: calc(50% - 1px);\n}\n\n.page_click-navigation-button-icon.forward {\n    left: calc(50% + 1px);\n}\n\n.page_click-navigation-indicator {\n    display: inline-block;\n    padding: 0 28px;\n    text-align: center;\n    vertical-align: middle;\n}\n\n.page_content {\n    color: #333;\n    margin: 0 auto;\n    padding-top: 80px;\n    position: relative;\n    max-width: 864px;\n    z-index: 1;\n}\n\n.page_content-key {\n    font-size: 14px;\n    line-height: 18px;\n}\n\n.page_content-media {\n    display: inline-block;\n    height: 428px;\n    vertical-align: top;\n    width: 588px;\n}\n\n.page_content-summary {\n    display: inline-block;\n    margin-left: 40px;\n    max-width: 236px;\n    vertical-align: top;\n}\n\n.page_content-summary-description {\n    display: block;\n    font-size: 16px;\n    line-height: 26px;\n    margin-top: 20px;\n}\n\n.page_content-summary-title {\n    font-size: 21px;\n    font-weight: 600;\n    line-height: 30px;\n    margin-top: 8px;\n}\n\n.page_exit {\n    background-color: rgba(23, 25, 26, .98);\n    bottom: 0;\n    color: #fff;\n    display: inline-block;\n    font-size: 18px;\n    font-weight: 700;\n    height: 100px;\n    left: 0;\n    line-height: 28px;\n    min-width: 228px;\n    padding: 0 40px;\n    position: absolute;\n}\n\n.page_exit-value {\n    display: block;\n    left: 50%;\n    position: relative;\n    text-align: center;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n}\n\n.page_navigation {\n    padding: 28px 40px 0;\n    position: relative;\n    -webkit-transition: all 0.6s ease;\n    transition: all 0.6s ease;\n}\n\n.page_navigation-li {\n    color: #777;\n    display: inline-block;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 26px;\n    margin-left: 28px;\n}\n\n.page_navigation-li:first-child {\n    margin-left: 0;\n}\n\n.page_navigation-li.active {\n    color: #333;\n}\n\n.page_navigation-li.active::after {\n    background-color: #333;\n    content: \"\";\n    display: block;\n    height: 2px;\n    margin-top: 8px;\n    width: 100%;\n}\n\n.page_submit {\n    //background-color: rgba(23, 25, 26, .98);\n    background-color: #5299D1;\n    bottom: 40px;\n    color: #fff;\n    display: inline-block;\n    font-size: 18px;\n    font-weight: 700;\n    height: 100px;\n    line-height: 28px;\n    min-width: 250px;\n    padding: 0 40px;\n    position: absolute;\n    right: 40px;\n    -webkit-transition: all 0.6s ease;\n    transition: all 0.6s ease;\n    text-decoration: none;\n}\n\n.page_submit--icon {\n    margin-left: 15px;\n}\n\n.page_submit-value {\n    display: block;\n    left: 50%;\n    position: relative;\n    text-align: center;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    margin-left: 16px;\n}\n\n.page_summary {\n    //background-color: rgba(78, 84, 87, 1);\n    background-color: #173060;\n    bottom: 0;\n    color: #fff;\n    height: 60vh;\n    min-height: 500px;\n    padding: 40px 38px;\n    position: absolute;\n    right: 80px;\n    -webkit-transition: all 0.6s ease;\n    transition: all 0.6s ease;\n    width: 370px;\n}\n\n.page_summary-description {\n    display: block;\n    font-size: 16px;\n    line-height: 26px;\n    margin-top: 20px;\n}\n\n.page_summary-description_container {\n    text-align: center;\n    padding-top: 30px;\n}\n\n.page_summary-description_container {\n\n}\n\n.page_summary-label {\n    display: block;\n    font-size: 14px;\n    line-height: 18px;\n}\n\n.page_summary-title {\n    font-size: 21px;\n    font-weight: 600;\n    line-height: 30px;\n    margin-top: 8px;\n}\n\n.page_title {\n    color: #fff;\n    display: inline-block;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 26px;\n    padding: 28px 40px 0;\n    position: relative;\n    z-index: 1;\n}\n\n.page_title::after {\n    background-color: #fff;\n    content: \"\";\n    display: block;\n    height: 2px;\n    margin-top: 8px;\n    width: 100%;\n}\n\n/* iPad */\n\n@media only screen and (min-width: 768px)  {\n    /* */\n}\n\n#bridgeScanElement {\n  z-index:100;\n}\n\n.button {\n\tcolor: #70E2FF;\n\tcursor: pointer;\n\tpadding: 2px 10px 5px 10px;\n\tborder: 1px solid white;\n\tborder-radius: 5px;\n\tbackground-color: #101010;\n  margin-top: 10px;\n}\n\n.app-background {\n  position: fixed;\n  z-index: -1;\n}\n\n.label {\n  display: inline-block;\n}\n\n.color-button {\n  display: inline-block;\n  cursor: pointer;\n  padding: 2px 10px 5px 10px;\n  border: 1px solid white;\n  border-radius: 5px;\n  background-color: #101010;\n  margin: 10px;\n  z-index: 100;\n}\n\n#toggle {\n  display: inline-block;\n  min-width: 200px;\n}\n\n#red-button {\n  background-color: red;\n}\n\n#blue-button {\n  background-color: blue;\n}\n\n#white-button {\n  background-color: white;\n  color: black;\n}\n\n.main--lesson {\n    background-color: black;\n    width: 100vw;\n    height: 100vh;\n}\n\n.lesson--sidebar {\n    background: #4E5157;\n    padding: 20px;\n    height: 100vh;\n    width: 30%;\n    position: relative;\n    background: url(" + escape(__webpack_require__(/*! ./img/sidebar-img.jpg */ "./src/img/sidebar-img.jpg")) + ");\n    background-size: cover;\n}\n\n.lesson--sidebar h3 {\n    color: #fff;\n    border-bottom: 1px solid rgba(255, 255, 255, .2);\n    padding: 0 0 5px 0;\n    font-weight: 600;\n    font-size: 1rem;\n    display: inline-block;\n}\n\n.end--lesson {\n    position: absolute;\n    bottom: 0;\n    background: #000;\n    color: #fff;\n    text-align: center;\n    text-decoration: none;\n    font-size: 18px;\n    font-weight: 700;\n    height: auto;\n    min-width: 250px;\n    left: 0;\n    padding: 30px 0 25px 0;\n}\n\n.lesson--nav {\n    position: absolute;\n    width: 248px;\n    height: 88px;\n    left: 1060px;\n    top: 888px;\n    z-index: 1000;\n    opacity: 0;\n    -webkit-transition: opacity .5s ease-in-out;\n    transition: opacity .5s ease-in-out;\n}\n\n.lesson--nav.visible {\n    opacity: 1;\n    -webkit-transition: opacity .5s ease-in-out;\n    transition: opacity .5s ease-in-out;\n}\n\n.lesson--nav-link {\n    text-decoration: none;\n}\n\n.lesson--nav-link span {\n    display: block;\n    text-align: center;\n    color: #000;\n    line-height: normal;\n    font-size: 28px;\n    text-align: center;\n    text-decoration: none;\n    margin: 28px auto;\n    font-weight: 600;\n}\n\n.lesson--nav-link {\n    height: 100%;\n    width: 100%;\n    background: white;\n    border-radius: 7px;\n    display: inline-block;\n}\n\n.lesson--nav-link img {\n    margin: 43px 0 0 31px;\n}\n\n.lesson--nav-link--back {\n    margin-right: 40px;\n    background: rgba(0, 0, 0, .25);\n}\n\n.lesson--nav-link--back img {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n\n.end--lesson img {\n    margin-left: 5px;\n}\n\n.video--content {\n    display: none;\n    position: absolute;\n    top: 128px;\n    left: 0;\n    z-index: 995;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    width: 1366px;\n    height: 767.44px;\n    -webkit-transition: all .3s ease-in-out;\n    transition: all .3s ease-in-out;\n}\n\n.video--content h2 {\n    font-weight: 300;\n    margin-top: 5px;\n}\n\n.video--content.shrink {\n    top: 40px;\n    left: 35px;\n    width: 380px;\n    -webkit-transition: all .3s ease-in-out;\n    transition: all .3s ease-in-out;\n}\n\n.video--content.shrink .video--control {\n    width: 90px;\n    height: 90px;\n    right: 30px;\n    bottom: -30px;\n}\n\n.video--player video {\n    width: 100%;\n    background: #000;\n}\n\n.video--player {\n    \n}\n\n.video--instructions {\n    padding: 150px 40px;\n    text-align: center;\n    width: 70%;\n    float: right;\n    text-align: left;\n    opacity: 0;\n    height: 10px;\n    overflow: hidden;\n    -webkit-transition: all 1.25s ease;\n    transition: all 1.25s ease;\n}\n\n.video--instructions.visible {\n    opacity: 1;\n    height: auto;\n    -webkit-transition: all 1.25s ease;\n    transition: all 1.25s ease;\n}\n\n.video--instructions h2 {\n    font-size: 2.5rem;\n    margin-bottom: 1.25rem;\n    margin-bottom: 2.5rem;\n}\n\n.video--instructions h3 {\n    font-size: 1.6rem;\n    line-height: 2.25rem;\n    font-weight: 500;\n    max-width: 800px;\n}\n\n.video--instructions h4 {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n}\n\n.video--instructions .bold {\n    font-weight: 500;\n}\n\n.video--instructions p {\n    font-size: 1.25rem;\n    color: #444;\n}\n\n.box--controls {\n    //border: 1px solid #f4f4f4;\n    z-index: 999;\n    position: fixed;\n    margin: 70px auto;\n    width: auto;\n    left: 413px;\n    display: inline-block;\n    box-shadow: 0 0px 20px 0px rgba(50, 50, 50, .05);\n}\n\n/*.box--controls-btn {\n    display: inline-block;\n    background: #222;\n    color: #fff;\n    font-size: 1.25rem;\n    padding: 1.5rem 4.5rem;\n    margin: 0 2rem 0 0;\n    text-transform: uppercase;\n}*/\n\n.box--controls-btn {\n    background: #f4f4f4;\n    border: 1px solid #e4e4e4;\n    border-radius: 50%;\n    display: inline-block;\n    height: 150px;\n    width: 150px;\n    margin: 0 30px 0 0;\n    text-align: center;\n    padding: 20px;\n    font-size: 1.2rem;\n    color: #555;\n}\n\n.box--controls-btn img {\n    display: block;\n    margin: 0 auto 5px auto;\n    width: 70px;\n    opacity: .1;\n}\n\n.video--instructions--final {\n    text-align: left;\n    max-width: 700px;\n}\n\n.video--instructions--final p {\n    font-size: 1.15rem;\n    line-height: 1.4rem;\n}\n\n.video--instructions h4 {\n    font-weight: 200;\n    color: #333;\n}\n\n.video--instructions h4 span {\n    font-weight: 500;\n}\n\n.instructions--block {\n    display: block;\n    float: left;\n    width: 100%;\n}\n\n.instructions--left {\n    float: left;\n    width: 25%;\n}\n\n.instructions--right {\n    float: left;\n    width: 75%;\n    padding-top: 30px;\n}\n\n.video--control {\n    position: absolute;\n    height: 38px;\n    width: 30px;\n    left: 58px;\n    top: 810px;\n    color: white;\n    font-size: 38px;\n}\n\n.playButton::after {\n    content: \"\\25BA\";\n}\n\n.pauseButton::after {\n    content: \"\\25BA\";\n}\n\n.video--control span {\n    display: none;\n}\n.video--control img {\n    opacity: .9;\n}\n\n.video--control.play img {\n    padding-left: 5px;\n}\n\n.video--control.pause img {\n    width: 40px;\n}\n\n\n.page--selection {\n    text-align: center;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    height: 100vh;\n}\n\n#scene--selection--container {\n    position: fixed;\n    top: 170px;\n    left: 307px;\n    z-index: 999;\n}\n\n.scene--selection {\n    z-index: 999;\n    background: black;\n    border-radius: 7px;\n    top: 70px;\n    left: 327px;\n    border: 2px solid white;\n    color: #fff;\n    text-decoration: none;\n    height: 88px;\n    width: 224px;\n    display: inline-block;\n    font-size: 28px;\n    padding: 24px 0;\n    text-align: center;\n    margin-right: 40px;\n}\n\n#Night {\n    left: 543px;\n}\n\n#Colored {\n    left: 791px;\n}\n\n.os--selection {\n    z-index: 999;\n    position: absolute;\n    background: black;\n    border-radius: 7px;\n    top: 70px;\n    left: 395px;\n    border: 2px solid white;\n    color: #fff;\n    text-decoration: none;\n    height: 88px;\n    width: 248px;\n    display: inline-block;\n    font-size: 28px;\n    padding: 24px 0;\n    text-align: center;\n}\n\n.os--selection--container {\n    display: none;\n}\n\n.os--selection--container.visible {\n    display: inline-block;\n}\n\n#android--select {\n    left: 723px;\n}\n\n.feedback--survey {\n    margin: 3.5rem 0 0 0;\n    display: block;\n}\n\n.feedback--survey-btn {\n    display: inline-block;\n    text-align: center;\n    background: #ccc;\n    padding-top: 22px;\n    margin: 0 20px 0 0;\n    border-radius: 50%;\n    height: 80px;\n    width: 80px;\n    font-size: 1.75rem;\n    text-decoration: none;\n    color: #333;\n}\n\n.feedback--no-thanks {\n    color: #aaa;\n    font-size: 1.25rem;\n    margin-top: 3.5rem;\n    display: inline-block;\n}\n\n.logo {\n\n}\n\n.main--content-container {\n    z-index: 1;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    background: rgba(30, 30, 30, .65);\n    padding: 4%;\n}\n\n.main--content {\n    color: #fff;\n    margin: 230px 0 0 60px;\n    width: 30%;\n}\n\n.main--content h1 {\n    margin-bottom: 5px;\n}\n\n.main--content h3 {\n    font-weight: 100;\n    font-size: .9rem;\n    margin-bottom: 1.5rem;\n}\n\n.main--content p {\n    font-size: 1.1rem;\n    margin-bottom: 2.5rem;\n}\n\n.main--content .lesson--nav-link {\n    width: 220px;\n    padding: 20px 10px;\n    color: #000;\n    font-weight: 500;\n    font-size: 1.5rem;\n    text-align: center;\n}\n\n.main--content .lesson--nav-link img {\n    margin: 0 20px 0 0;\n}\n\n\n#landingVideo {\n    position: fixed;\n    right: 0; \n    bottom: 0;\n    min-width: 100%; \n    min-height: 100%;\n    width: auto; \n    height: auto;\n    z-index: -100;\n}", ""]);

// exports


/***/ }),

/***/ "./src/components/App/App.js":
/*!***********************************!*\
  !*** ./src/components/App/App.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/lesson--arrow.svg */ "./src/img/lesson--arrow.svg");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_asurion_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/asurion.svg */ "./src/img/asurion.svg");
/* harmony import */ var _img_asurion_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_asurion_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/lesson--circle.png */ "./src/img/lesson--circle.png");
/* harmony import */ var _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_landing_bg_webm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/landing-bg.webm */ "./src/img/landing-bg.webm");
/* harmony import */ var _img_landing_bg_webm__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_landing_bg_webm__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_icon_play_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/icon-play.svg */ "./src/img/icon-play.svg");
/* harmony import */ var _img_icon_play_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_icon_play_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_vid_placeholder_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/vid-placeholder.png */ "./src/img/vid-placeholder.png");
/* harmony import */ var _img_vid_placeholder_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_vid_placeholder_png__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/App/App.js";

 // import logo from '../../logo.svg';
// import bg_img from '../../img/CES_bg_img.jpg';


 // import close_x from '../../img/lesson--close.svg';



 // import modesGif from '../../img/MODES.gif';

 // import HueControl from '../HueControl/HueControl';
//import Core from './core.js';
//import Core from './core.js';

var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "main",
        role: "main",
        "data-ref": "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "main--content-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_asurion_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "main--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Manual Exposure"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "An Asurion learning series"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Low light settings. High light settings. Learn how to capture the perfect image, no  matter the lighting scenario."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "lesson--nav-link",
        to: "/lesson/1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        height: "25",
        src: _img_icon_play_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), "Play"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
        id: "landingVideo",
        autoPlay: true,
        loop: true,
        muted: true,
        "plays-inline": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
        src: _img_landing_bg_webm__WEBPACK_IMPORTED_MODULE_10___default.a,
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/HueControl/HueControl.css":
/*!**************************************************!*\
  !*** ./src/components/HueControl/HueControl.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./HueControl.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/HueControl/HueControl.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./HueControl.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/HueControl/HueControl.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./HueControl.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/HueControl/HueControl.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/HueControl/HueControl.js":
/*!*************************************************!*\
  !*** ./src/components/HueControl/HueControl.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _HueControl_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HueControl.css */ "./src/components/HueControl/HueControl.css");
/* harmony import */ var _HueControl_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_HueControl_css__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/HueControl/HueControl.js";
//
// See /api-calls docs for how to create, update, and recall scenes
//
// Helpful scenes doc: https://stackoverflow.com/questions/18274632/how-to-create-scenes-with-the-philips-hue-api/18375201
//
// colorloop
// dim = a1
// normal = relax
// verbal cue = bright
// scene 1 = relax, scene 2 = arctic aurora, scene 3 = a2 ("nightlife")



var HueControl =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HueControl, _Component);

  function HueControl(props) {
    var _this;

    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HueControl);

    _this = Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HueControl).call(this, props));
    _this.state = {
      value: '',
      on: '',
      hue: '',
      sat: '',
      bri: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleHueChange = _this.handleHueChange.bind(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleSatChange = _this.handleSatChange.bind(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleBriChange = _this.handleBriChange.bind(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))); // this.handleOnChange = this.handleOnChange.bind(this)

    return _this;
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HueControl, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "handleHueChange",
    value: function handleHueChange(e) {
      var hueVal = parseInt(e.target.value, 10);
      this.setState({
        hue: hueVal
      });
    }
  }, {
    key: "handleSatChange",
    value: function handleSatChange(e) {
      var satVal = parseInt(e.target.value, 10);
      this.setState({
        sat: satVal
      });
    }
  }, {
    key: "handleBriChange",
    value: function handleBriChange(e) {
      var briVal = parseInt(e.target.value, 10);
      this.setState({
        bri: briVal
      });
    } // handleOnChange(e) {
    //   this.setState({ on: e.target.value })
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "hue-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Scenes"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "transitionTime",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Transition time ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("em", {
        className: "emphasis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "(applied to a scene when you modify it - leave blank to keep the transition as-is)")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "hue-control__input",
        id: "transitionTime",
        type: "number",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, Object.keys(this.props.state.scenesObject).map(function (sceneId, sceneIndex) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: sceneIndex,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, _this2.props.state.scenesObject[sceneId].name, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          style: {
            backgroundColor: 'red',
            marginRight: '1em'
          },
          onClick: function onClick() {
            return _this2.props.modifyScene(sceneId, _this2.state.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, "MODIFY SCENE"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          style: {
            backgroundColor: 'blue'
          },
          onClick: function onClick() {
            return _this2.props.modifySceneLightsOnState(sceneId, _this2.state.hue, _this2.state.sat, _this2.state.bri);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "MODIFY SCENE LIGHTS STATE"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          style: {
            backgroundColor: 'green'
          },
          onClick: function onClick() {
            return _this2.props.recallScene(sceneId);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "Recall scene")));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Reachable Lights:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Hue (0-65000)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        onChange: this.handleHueChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Sat (0-254)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        onChange: this.handleSatChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Bri (0-254)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        onChange: this.handleBriChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, this.props.state.lightsArray.map(function (light, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, light.state.reachable && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.props.toggleLight(index, !light.state.on, _this2.state.hue, _this2.state.sat, _this2.state.bri);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "Name: ", light.name)));
      })));
    }
  }]);

  return HueControl;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HueControl);

/***/ }),

/***/ "./src/components/Lesson/Lesson-home-android.js":
/*!******************************************************!*\
  !*** ./src/components/Lesson/Lesson-home-android.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/lesson--arrow.svg */ "./src/img/lesson--arrow.svg");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/lesson--circle.png */ "./src/img/lesson--circle.png");
/* harmony import */ var _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Lesson/Lesson-home-android.js";

 // import logo from '../../logo.svg';
// import bg_img from '../../img/CES_bg_img.jpg';

 // import close_x from '../../img/lesson--close.svg';

 // import vid1 from '../../img/CESPhotobooth_part1_v1.mp4';
// import modesGif from '../../img/MODES.gif';
// import vidPlaceholder from '../../img/vid-placeholder.png';
// import HueControl from '../HueControl/HueControl';
//import Core from './core.js';

var LessonHomeAndroid =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LessonHomeAndroid, _Component);

  function LessonHomeAndroid() {
    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LessonHomeAndroid);

    return Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LessonHomeAndroid).apply(this, arguments));
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LessonHomeAndroid, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "site_header",
        role: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "main",
        role: "main",
        "data-ref": "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "background-shift",
        "data-ref": "background-shift",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "page",
        "data-ref": "page",
        lesson: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "page_summary",
        "data-ref": "lesson-summary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "page_summary-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Android lesson"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "page_summary-title",
        "data-ref": "lesson-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Great photo fundamentals"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "page_summary-description",
        "data-ref": "lesson-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Work with one of our experts, Iris, and learn how to take better photos with your iPhone."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "page_summary-description_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "page_summary-description_img",
        height: "190",
        src: _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "page_submit",
        to: "/lesson/1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "page_submit-value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Start Lesson", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "page_submit--icon",
        height: "13",
        width: "17",
        src: _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        role: "contentinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "footer_copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "\xA9 Classes App")));
    }
  }]);

  return LessonHomeAndroid;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LessonHomeAndroid);

/***/ }),

/***/ "./src/components/Lesson/Lesson-home-ios.js":
/*!**************************************************!*\
  !*** ./src/components/Lesson/Lesson-home-ios.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/lesson--arrow.svg */ "./src/img/lesson--arrow.svg");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/lesson--circle.png */ "./src/img/lesson--circle.png");
/* harmony import */ var _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Lesson/Lesson-home-ios.js";

 // import logo from '../../logo.svg';
// import bg_img from '../../img/CES_bg_img.jpg';

 // import close_x from '../../img/lesson--close.svg';

 // import vid1 from '../../img/CESPhotobooth_part1_v1.mp4';
// import modesGif from '../../img/MODES.gif';
// import vidPlaceholder from '../../img/vid-placeholder.png';
// import HueControl from '../HueControl/HueControl';
//import Core from './core.js';

var LessonHomeIos =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LessonHomeIos, _Component);

  function LessonHomeIos() {
    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LessonHomeIos);

    return Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LessonHomeIos).apply(this, arguments));
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LessonHomeIos, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "main",
        role: "main",
        "data-ref": "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "background-shift",
        "data-ref": "background-shift",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "page--selection",
        "data-ref": "page",
        lesson: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "os--selection",
        to: "/lesson/1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "iOS"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "os--selection",
        to: "/lesson/1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Android"))));
    }
  }]);

  return LessonHomeIos;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LessonHomeIos);

/***/ }),

/***/ "./src/components/Lesson/Lesson-ios.js":
/*!*********************************************!*\
  !*** ./src/components/Lesson/Lesson-ios.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/lesson--arrow.svg */ "./src/img/lesson--arrow.svg");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/lesson--close.svg */ "./src/img/lesson--close.svg");
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vid_2_Scene_webm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../vid/2-Scene.webm */ "./src/vid/2-Scene.webm");
/* harmony import */ var _vid_2_Scene_webm__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vid_2_Scene_webm__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_play_icon_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/play-icon.svg */ "./src/img/play-icon.svg");
/* harmony import */ var _img_play_icon_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_play_icon_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/pause-icon.svg */ "./src/img/pause-icon.svg");
/* harmony import */ var _img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/placeholder-1.png */ "./src/img/placeholder-1.png");
/* harmony import */ var _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/lightbulb--on.svg */ "./src/img/lightbulb--on.svg");
/* harmony import */ var _img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../scenes */ "./src/scenes.js");
/* harmony import */ var _videoPlayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./videoPlayer.js */ "./src/components/Lesson/videoPlayer.js");





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Lesson/Lesson-ios.js";

 // import logo from '../../logo.svg';
// import bg_img from '../../img/CES_bg_img.jpg';


 // import bg_circle from '../../img/lesson--circle.png';

 //import thisVideo from '../../img/CES_The Box_iOS_PortraitMode.mp4';
// import modesGif from '../../img/MODES.gif';



 // import bulbOff from '../../img/lightbulb--off.svg';

 // import HueControl from '../HueControl/HueControl';
//import Core from './core.js';




var Lesson =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Lesson, _Component);

  function Lesson() {
    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lesson);

    return Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Lesson).apply(this, arguments));
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lesson, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "site_header",
        role: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "main--lesson",
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "os--selection--container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/lesson/ios/2",
        className: "os--selection",
        id: "ios--select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Apple")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/lesson/android/2",
        className: "os--selection",
        id: "android--select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Samsung"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_videoPlayer_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        recallScene: this.props.recallScene,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
        id: "video",
        poster: _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
        src: _vid_2_Scene_webm__WEBPACK_IMPORTED_MODULE_9___default.a,
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "lesson--nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        role: "contentinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "footer_copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\xA9 Classes App")));
    }
  }]);

  return Lesson;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Lesson);

/***/ }),

/***/ "./src/components/Lesson/Lesson2-android.js":
/*!**************************************************!*\
  !*** ./src/components/Lesson/Lesson2-android.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/lesson--arrow.svg */ "./src/img/lesson--arrow.svg");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/lesson--close.svg */ "./src/img/lesson--close.svg");
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/lesson--circle.png */ "./src/img/lesson--circle.png");
/* harmony import */ var _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_CESPhotobooth_part2_v1_mp4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/CESPhotobooth_part2_v1.mp4 */ "./src/img/CESPhotobooth_part2_v1.mp4");
/* harmony import */ var _img_CESPhotobooth_part2_v1_mp4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_CESPhotobooth_part2_v1_mp4__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/EXPOSURE.gif */ "./src/img/EXPOSURE.gif");
/* harmony import */ var _img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_vid_placeholder2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/vid-placeholder2.png */ "./src/img/vid-placeholder2.png");
/* harmony import */ var _img_vid_placeholder2_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_vid_placeholder2_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _HueControl_HueControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../HueControl/HueControl */ "./src/components/HueControl/HueControl.js");
/* harmony import */ var _videoPlayer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./videoPlayer.js */ "./src/components/Lesson/videoPlayer.js");





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Lesson/Lesson2-android.js";








 //import Core from './core.js';



var Lesson2android =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Lesson2android, _Component);

  function Lesson2android() {
    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lesson2android);

    return Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Lesson2android).apply(this, arguments));
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lesson2android, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "site_header",
        role: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "main--lesson",
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "os--selection--container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), " //this is just here to accomodate the generalized video player functions, it should remain empty", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_videoPlayer_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        recallScene: this.props.recallScene,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
        id: "video",
        poster: _img_vid_placeholder2_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
        src: _img_CESPhotobooth_part2_v1_mp4__WEBPACK_IMPORTED_MODULE_10___default.a,
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "lesson--nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "lesson--nav-link",
        to: "/lesson/android/3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Next")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        role: "contentinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "footer_copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "\xA9 Classes App")));
    }
  }]);

  return Lesson2android;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Lesson2android);

/***/ }),

/***/ "./src/components/Lesson/Lesson2-ios.js":
/*!**********************************************!*\
  !*** ./src/components/Lesson/Lesson2-ios.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/lesson--arrow.svg */ "./src/img/lesson--arrow.svg");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/lesson--close.svg */ "./src/img/lesson--close.svg");
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vid_3_Scene_iOS_webm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../vid/3-Scene-iOS.webm */ "./src/vid/3-Scene-iOS.webm");
/* harmony import */ var _vid_3_Scene_iOS_webm__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vid_3_Scene_iOS_webm__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/PortraitMode2.gif */ "./src/img/PortraitMode2.gif");
/* harmony import */ var _img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_play_icon_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/play-icon.svg */ "./src/img/play-icon.svg");
/* harmony import */ var _img_play_icon_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_play_icon_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/pause-icon.svg */ "./src/img/pause-icon.svg");
/* harmony import */ var _img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/placeholder-1.png */ "./src/img/placeholder-1.png");
/* harmony import */ var _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/lightbulb--on.svg */ "./src/img/lightbulb--on.svg");
/* harmony import */ var _img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../scenes */ "./src/scenes.js");
/* harmony import */ var _videoPlayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./videoPlayer.js */ "./src/components/Lesson/videoPlayer.js");





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Lesson/Lesson2-ios.js";



 // import bg_circle from '../../img/lesson--circle.png';

 // import exposureGif from '../../img/EXPOSURE.gif';




 // import bulbOff from '../../img/lightbulb--off.svg';

 // import HueControl from '../HueControl/HueControl';
//import Core from './core.js';




var Lesson2ios =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Lesson2ios, _Component);

  function Lesson2ios() {
    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lesson2ios);

    return Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Lesson2ios).apply(this, arguments));
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lesson2ios, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "site_header",
        role: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "main--lesson",
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "os--selection--container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), " //this is just here to accomodate the generalized video player functions, it should remain empty", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_videoPlayer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        recallScene: this.props.recallScene,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
        id: "video",
        poster: _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
        src: _vid_3_Scene_iOS_webm__WEBPACK_IMPORTED_MODULE_9___default.a,
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "lesson--nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "lesson--nav-link",
        to: "/lesson/ios/3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Next")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        role: "contentinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "footer_copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "\xA9 Classes App")));
    }
  }]);

  return Lesson2ios;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Lesson2ios);

/***/ }),

/***/ "./src/components/Lesson/Lesson3-android.js":
/*!**************************************************!*\
  !*** ./src/components/Lesson/Lesson3-android.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/lesson--arrow.svg */ "./src/img/lesson--arrow.svg");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/lesson--close.svg */ "./src/img/lesson--close.svg");
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/lesson--circle.png */ "./src/img/lesson--circle.png");
/* harmony import */ var _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_CESPhotobooth_part3_v1_mp4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/CESPhotobooth_part3_v1.mp4 */ "./src/img/CESPhotobooth_part3_v1.mp4");
/* harmony import */ var _img_CESPhotobooth_part3_v1_mp4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_CESPhotobooth_part3_v1_mp4__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_FOCUS_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/FOCUS.gif */ "./src/img/FOCUS.gif");
/* harmony import */ var _img_FOCUS_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_FOCUS_gif__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_vid_placeholder3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/vid-placeholder3.png */ "./src/img/vid-placeholder3.png");
/* harmony import */ var _img_vid_placeholder3_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_vid_placeholder3_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _HueControl_HueControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../HueControl/HueControl */ "./src/components/HueControl/HueControl.js");





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Lesson/Lesson3-android.js";








 //import Core from './core.js';

var Lesson3 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Lesson3, _Component);

  function Lesson3() {
    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lesson3);

    return Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Lesson3).apply(this, arguments));
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lesson3, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "site_header",
        role: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "main--lesson",
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
        controls: true,
        poster: _img_vid_placeholder3_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
        src: _img_CESPhotobooth_part3_v1_mp4__WEBPACK_IMPORTED_MODULE_10___default.a,
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--instructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_FOCUS_gif__WEBPACK_IMPORTED_MODULE_11___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Part 3 | ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Focus")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "lesson--sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Lesson 1"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "end--lesson",
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "End Lesson ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
        width: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "lesson--nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "lesson--nav-link lesson--nav-link--back",
        to: "/lesson/2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        height: "20",
        width: "40",
        src: _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Prev")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "lesson--nav-link",
        to: "/lesson/4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        height: "20",
        width: "40",
        src: _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Next")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        role: "contentinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "footer_copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "\xA9 Classes App")));
    }
  }]);

  return Lesson3;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Lesson3);

/***/ }),

/***/ "./src/components/Lesson/Lesson3-ios.js":
/*!**********************************************!*\
  !*** ./src/components/Lesson/Lesson3-ios.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/lesson--arrow.svg */ "./src/img/lesson--arrow.svg");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/lesson--close.svg */ "./src/img/lesson--close.svg");
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vid_4_Scene_iOS_webm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../vid/4-Scene-iOS.webm */ "./src/vid/4-Scene-iOS.webm");
/* harmony import */ var _vid_4_Scene_iOS_webm__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vid_4_Scene_iOS_webm__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/EXPOSURE.gif */ "./src/img/EXPOSURE.gif");
/* harmony import */ var _img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/PortraitMode2.gif */ "./src/img/PortraitMode2.gif");
/* harmony import */ var _img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_play_icon_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/play-icon.svg */ "./src/img/play-icon.svg");
/* harmony import */ var _img_play_icon_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_play_icon_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/pause-icon.svg */ "./src/img/pause-icon.svg");
/* harmony import */ var _img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/placeholder-1.png */ "./src/img/placeholder-1.png");
/* harmony import */ var _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_lightbulb_off_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/lightbulb--off.svg */ "./src/img/lightbulb--off.svg");
/* harmony import */ var _img_lightbulb_off_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_lightbulb_off_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../img/lightbulb--on.svg */ "./src/img/lightbulb--on.svg");
/* harmony import */ var _img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../scenes */ "./src/scenes.js");
/* harmony import */ var _videoPlayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./videoPlayer.js */ "./src/components/Lesson/videoPlayer.js");





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Lesson/Lesson3-ios.js";



 // import bg_circle from '../../img/lesson--circle.png';
// import vid3 from '../../img/CESPhotobooth_part3_v1.mp4';
// import focusGif from '../../img/FOCUS.gif';
// import vidPlaceholder from '../../img/vid-placeholder3.png';








 // import HueControl from '../HueControl/HueControl';
//import Core from './core.js';


 // class PlayButton extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "Play",
//       icon: playIcon
//     }
//   }
//   handleClick = () => {
//     // var playButton = document.getElementById("play-pause");
//     var video = document.getElementById("video");
//     video.onended = function() {
//       document.querySelector('.video--content').classList.add('shrink');
//       document.querySelector('.lesson--nav').classList.add('visible');
//       document.querySelector('.video--instructions').classList.add('visible');
//     }
//     if (video.paused === true) {
//         // Play the video
//         video.play();
//         this.setState({ title: "pause", icon: pauseIcon });
//         this.props.recallScene(scenes.colorloop);
//         // Update the button text to 'Pause'
//         //playButton.innerHTML = "Pause";
//       } else {
//         // Pause the video
//         video.pause();
//         this.setState({ title: "play", icon: playIcon });
//         this.props.recallScene(scenes.one);
//         // Update the button text to 'Play'
//         //playButton.innerHTML = "Play";
//       }
//   }
//   render() {
//     return (
//       // eslint-disable-next-line
//       <a class={'video--control ' + this.state.title} onClick={this.handleClick}>
//         <span>{this.state.title}</span>
//         <img height="60" src={this.state.icon} alt="" />
//       </a>
//     );
//   }
// }

var Lesson3ios =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Lesson3ios, _Component);

  function Lesson3ios() {
    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lesson3ios);

    return Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Lesson3ios).apply(this, arguments));
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lesson3ios, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "site_header",
        role: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "main--lesson",
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "os--selection--container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), " //this is just here to accomodate the generalized video player functions, it should remain empty", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_videoPlayer_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
        recallScene: this.props.recallScene,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
        id: "video",
        poster: _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
        src: _vid_4_Scene_iOS_webm__WEBPACK_IMPORTED_MODULE_9___default.a,
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "lesson--nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "lesson--nav-link",
        to: "/lesson/ios/4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Next")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        role: "contentinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "footer_copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\xA9 Classes App")));
    }
  }]);

  return Lesson3ios;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Lesson3ios);

/***/ }),

/***/ "./src/components/Lesson/Lesson4-android.js":
/*!**************************************************!*\
  !*** ./src/components/Lesson/Lesson4-android.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/lesson--arrow.svg */ "./src/img/lesson--arrow.svg");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/lesson--close.svg */ "./src/img/lesson--close.svg");
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/lesson--circle.png */ "./src/img/lesson--circle.png");
/* harmony import */ var _img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_circle_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_CESPhotobooth_part4_v1_mp4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/CESPhotobooth_part4_v1.mp4 */ "./src/img/CESPhotobooth_part4_v1.mp4");
/* harmony import */ var _img_CESPhotobooth_part4_v1_mp4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_CESPhotobooth_part4_v1_mp4__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_vid_placeholder4_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/vid-placeholder4.png */ "./src/img/vid-placeholder4.png");
/* harmony import */ var _img_vid_placeholder4_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_vid_placeholder4_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _HueControl_HueControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../HueControl/HueControl */ "./src/components/HueControl/HueControl.js");





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Lesson/Lesson4-android.js";







 //import Core from './core.js';

var Lesson4 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Lesson4, _Component);

  function Lesson4() {
    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lesson4);

    return Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Lesson4).apply(this, arguments));
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lesson4, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "site_header",
        role: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "main--lesson",
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
        controls: true,
        poster: _img_vid_placeholder4_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
        src: _img_CESPhotobooth_part4_v1_mp4__WEBPACK_IMPORTED_MODULE_10___default.a,
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--instructions video--instructions--final",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Part 4 | ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Wrap up")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Our Tech Experts are here to help you get the most out of your technology"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "We hope you learned some new tips and tricks to take better photos with your iPhone."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Go back to the home screen for more lessons"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "lesson--sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Lesson 1"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "end--lesson",
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "End Lesson ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
        width: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "lesson--nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "lesson--nav-link lesson--nav-link--back",
        to: "/lesson/3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        height: "20",
        width: "40",
        src: _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Prev")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "lesson--nav-link",
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        height: "20",
        width: "40",
        src: _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Home")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        role: "contentinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "footer_copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\xA9 Classes App")));
    }
  }]);

  return Lesson4;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Lesson4);

/***/ }),

/***/ "./src/components/Lesson/Lesson4-ios.js":
/*!**********************************************!*\
  !*** ./src/components/Lesson/Lesson4-ios.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/lesson--arrow.svg */ "./src/img/lesson--arrow.svg");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/lesson--close.svg */ "./src/img/lesson--close.svg");
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_CES_The_Box_iOS_PortraitMode_compressed_mp4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/CES_The Box_iOS_PortraitMode--compressed.mp4 */ "./src/img/CES_The Box_iOS_PortraitMode--compressed.mp4");
/* harmony import */ var _img_CES_The_Box_iOS_PortraitMode_compressed_mp4__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_CES_The_Box_iOS_PortraitMode_compressed_mp4__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/EXPOSURE.gif */ "./src/img/EXPOSURE.gif");
/* harmony import */ var _img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/PortraitMode2.gif */ "./src/img/PortraitMode2.gif");
/* harmony import */ var _img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_play_icon_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/play-icon.svg */ "./src/img/play-icon.svg");
/* harmony import */ var _img_play_icon_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_play_icon_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/pause-icon.svg */ "./src/img/pause-icon.svg");
/* harmony import */ var _img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/placeholder-1.png */ "./src/img/placeholder-1.png");
/* harmony import */ var _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_lightbulb_off_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/lightbulb--off.svg */ "./src/img/lightbulb--off.svg");
/* harmony import */ var _img_lightbulb_off_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_lightbulb_off_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../img/lightbulb--on.svg */ "./src/img/lightbulb--on.svg");
/* harmony import */ var _img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../scenes */ "./src/scenes.js");
/* harmony import */ var _videoPlayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./videoPlayer.js */ "./src/components/Lesson/videoPlayer.js");





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Lesson/Lesson4-ios.js";



 // import bg_circle from '../../img/lesson--circle.png';








 // import HueControl from '../HueControl/HueControl';
//import Core from './core.js';


 // class PlayButton extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "Play",
//       icon: playIcon
//     }
//   }
//   handleClick = () => {
//     // var playButton = document.getElementById("play-pause");
//     var video = document.getElementById("video");
//     video.onended = function() {
//       document.querySelector('.video--content').classList.add('shrink');
//       document.querySelector('.lesson--nav').classList.add('visible');
//       document.querySelector('.video--instructions').classList.add('visible');
//     }
//     if (video.paused === true) {
//         // Play the video
//         video.play();
//         this.setState({ title: "pause", icon: pauseIcon });
//         this.props.recallScene(scenes.colorloop);
//         // Update the button text to 'Pause'
//         //playButton.innerHTML = "Pause";
//       } else {
//         // Pause the video
//         video.pause();
//         this.setState({ title: "play", icon: playIcon });
//         this.props.recallScene(scenes.one);
//         // Update the button text to 'Play'
//         //playButton.innerHTML = "Play";
//       }
//   }
//   render() {
//     return (
//       // eslint-disable-next-line
//       <a class={'video--control ' + this.state.title} onClick={this.handleClick}>
//         <span>{this.state.title}</span>
//         <img height="60" src={this.state.icon} alt="" />
//       </a>
//     );
//   }
// }

var Lesson4ios =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Lesson4ios, _Component);

  function Lesson4ios() {
    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lesson4ios);

    return Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Lesson4ios).apply(this, arguments));
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lesson4ios, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "site_header",
        role: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "main--lesson",
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "os--selection--container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), " //this is just here to accomodate the generalized video player functions, it should remain empty", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_videoPlayer_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
        recallScene: this.props.recallScene,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
        id: "video",
        poster: _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
        src: _img_CES_The_Box_iOS_PortraitMode_compressed_mp4__WEBPACK_IMPORTED_MODULE_9___default.a,
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "lesson--nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "lesson--nav-link",
        to: "/lesson/ios/5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Next")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        role: "contentinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "footer_copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\xA9 Classes App")));
    }
  }]);

  return Lesson4ios;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Lesson4ios);

/***/ }),

/***/ "./src/components/Lesson/Lesson5-ios.js":
/*!**********************************************!*\
  !*** ./src/components/Lesson/Lesson5-ios.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/lesson--arrow.svg */ "./src/img/lesson--arrow.svg");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/lesson--close.svg */ "./src/img/lesson--close.svg");
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vid_5_Scene_webm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../vid/5-Scene.webm */ "./src/vid/5-Scene.webm");
/* harmony import */ var _vid_5_Scene_webm__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vid_5_Scene_webm__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/EXPOSURE.gif */ "./src/img/EXPOSURE.gif");
/* harmony import */ var _img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/PortraitMode2.gif */ "./src/img/PortraitMode2.gif");
/* harmony import */ var _img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_play_icon_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/play-icon.svg */ "./src/img/play-icon.svg");
/* harmony import */ var _img_play_icon_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_play_icon_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/pause-icon.svg */ "./src/img/pause-icon.svg");
/* harmony import */ var _img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/placeholder-1.png */ "./src/img/placeholder-1.png");
/* harmony import */ var _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_lightbulb_off_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/lightbulb--off.svg */ "./src/img/lightbulb--off.svg");
/* harmony import */ var _img_lightbulb_off_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_lightbulb_off_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../img/lightbulb--on.svg */ "./src/img/lightbulb--on.svg");
/* harmony import */ var _img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../scenes */ "./src/scenes.js");
/* harmony import */ var _videoPlayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./videoPlayer.js */ "./src/components/Lesson/videoPlayer.js");





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Lesson/Lesson5-ios.js";



 // import bg_circle from '../../img/lesson--circle.png';








 // import HueControl from '../HueControl/HueControl';
//import Core from './core.js';




var Lesson5ios =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Lesson5ios, _Component);

  function Lesson5ios() {
    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lesson5ios);

    return Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Lesson5ios).apply(this, arguments));
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lesson5ios, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "site_header",
        role: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "main--lesson",
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "os--selection--container",
        id: "scene--selection--container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "scene--selection",
        id: "Morning",
        onClick: function onClick() {
          return _this.props.recallScene(_scenes__WEBPACK_IMPORTED_MODULE_17__["five"]);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Morning"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "scene--selection",
        id: "Night",
        onClick: function onClick() {
          return _this.props.recallScene(_scenes__WEBPACK_IMPORTED_MODULE_17__["nine"]);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Night"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "scene--selection",
        id: "Colored",
        onClick: function onClick() {
          return _this.props.recallScene(_scenes__WEBPACK_IMPORTED_MODULE_17__["six"]);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Colored")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_videoPlayer_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
        recallScene: this.props.recallScene,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
        id: "video",
        poster: _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
        src: _vid_5_Scene_webm__WEBPACK_IMPORTED_MODULE_9___default.a,
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "lesson--nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "lesson--nav-link",
        to: "/lesson/ios/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Next")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        role: "contentinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "footer_copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\xA9 Classes App")));
    }
  }]);

  return Lesson5ios;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Lesson5ios);

/***/ }),

/***/ "./src/components/Lesson/Lesson6-ios.js":
/*!**********************************************!*\
  !*** ./src/components/Lesson/Lesson6-ios.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/lesson--arrow.svg */ "./src/img/lesson--arrow.svg");
/* harmony import */ var _img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/lesson--close.svg */ "./src/img/lesson--close.svg");
/* harmony import */ var _img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_lesson_close_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vid_6_Scene_webm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../vid/6-Scene.webm */ "./src/vid/6-Scene.webm");
/* harmony import */ var _vid_6_Scene_webm__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vid_6_Scene_webm__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/EXPOSURE.gif */ "./src/img/EXPOSURE.gif");
/* harmony import */ var _img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_EXPOSURE_gif__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/PortraitMode2.gif */ "./src/img/PortraitMode2.gif");
/* harmony import */ var _img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_PortraitMode2_gif__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_play_icon_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/play-icon.svg */ "./src/img/play-icon.svg");
/* harmony import */ var _img_play_icon_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_play_icon_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/pause-icon.svg */ "./src/img/pause-icon.svg");
/* harmony import */ var _img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_pause_icon_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/placeholder-1.png */ "./src/img/placeholder-1.png");
/* harmony import */ var _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_lightbulb_off_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/lightbulb--off.svg */ "./src/img/lightbulb--off.svg");
/* harmony import */ var _img_lightbulb_off_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_lightbulb_off_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../img/lightbulb--on.svg */ "./src/img/lightbulb--on.svg");
/* harmony import */ var _img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_lightbulb_on_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../scenes */ "./src/scenes.js");
/* harmony import */ var _videoPlayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./videoPlayer.js */ "./src/components/Lesson/videoPlayer.js");





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Lesson/Lesson6-ios.js";



 // import bg_circle from '../../img/lesson--circle.png';








 // import HueControl from '../HueControl/HueControl';
//import Core from './core.js';




var Lesson6ios =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Lesson6ios, _Component);

  function Lesson6ios() {
    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lesson6ios);

    return Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Lesson6ios).apply(this, arguments));
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lesson6ios, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "site_header",
        role: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "main--lesson",
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "os--selection--container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), " //this is just here to accomodate the generalized video player functions, it should remain empty", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video--player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_videoPlayer_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
        recallScene: this.props.recallScene,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
        id: "video",
        poster: _img_placeholder_1_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
        src: _vid_6_Scene_webm__WEBPACK_IMPORTED_MODULE_9___default.a,
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "lesson--nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "lesson--nav-link",
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Home")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        role: "contentinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "footer_copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "\xA9 Classes App")));
    }
  }]);

  return Lesson6ios;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Lesson6ios);

/***/ }),

/***/ "./src/components/Lesson/videoPlayer.js":
/*!**********************************************!*\
  !*** ./src/components/Lesson/videoPlayer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayButton; });
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../scenes */ "./src/scenes.js");





var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Lesson/videoPlayer.js";



var PlayButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PlayButton, _React$Component);

  function PlayButton() {
    var _this;

    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PlayButton);

    _this = Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PlayButton).call(this));

    _this.handleClick = function () {
      // var playButton = document.getElementById("play-pause");
      var video = document.getElementById("video");

      video.onended = function () {
        document.querySelector('.lesson--nav').classList.add('visible');
        document.querySelector('.os--selection--container').classList.add('visible');
      };

      if (video.paused === true) {
        // Play the video
        video.play();

        _this.setState({
          title: "pause",
          class: "fa fa-pause"
        });

        _this.props.recallScene(_scenes__WEBPACK_IMPORTED_MODULE_6__["colorloop"]); // Update the button text to 'Pause'
        //playButton.innerHTML = "Pause";

      } else {
        // Pause the video
        video.pause();

        _this.setState({
          title: "play",
          class: "fa fa-play"
        });

        _this.props.recallScene(_scenes__WEBPACK_IMPORTED_MODULE_6__["blackout"]); // Update the button text to 'Play'
        //playButton.innerHTML = "Play";

      }
    };

    _this.state = {
      title: "Play",
      class: "fa fa-play"
    };
    return _this;
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PlayButton, [{
    key: "render",
    value: function render() {
      return (// eslint-disable-next-line
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          className: 'video--control ' + this.state.title,
          onClick: this.handleClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, this.state.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: this.state.class,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }))
      );
    }
  }]);

  return PlayButton;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/components/Router/Router.js":
/*!*****************************************!*\
  !*** ./src/components/Router/Router.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _App_App_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../App/App.js */ "./src/components/App/App.js");
/* harmony import */ var _Lesson_Lesson_ios_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Lesson/Lesson-ios.js */ "./src/components/Lesson/Lesson-ios.js");
/* harmony import */ var _Lesson_Lesson2_ios_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Lesson/Lesson2-ios.js */ "./src/components/Lesson/Lesson2-ios.js");
/* harmony import */ var _Lesson_Lesson3_ios_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Lesson/Lesson3-ios.js */ "./src/components/Lesson/Lesson3-ios.js");
/* harmony import */ var _Lesson_Lesson4_ios_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Lesson/Lesson4-ios.js */ "./src/components/Lesson/Lesson4-ios.js");
/* harmony import */ var _Lesson_Lesson5_ios_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Lesson/Lesson5-ios.js */ "./src/components/Lesson/Lesson5-ios.js");
/* harmony import */ var _Lesson_Lesson6_ios_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Lesson/Lesson6-ios.js */ "./src/components/Lesson/Lesson6-ios.js");
/* harmony import */ var _Lesson_Lesson2_android_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Lesson/Lesson2-android.js */ "./src/components/Lesson/Lesson2-android.js");
/* harmony import */ var _Lesson_Lesson3_android_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Lesson/Lesson3-android.js */ "./src/components/Lesson/Lesson3-android.js");
/* harmony import */ var _Lesson_Lesson4_android_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Lesson/Lesson4-android.js */ "./src/components/Lesson/Lesson4-android.js");
/* harmony import */ var _Lesson_Lesson_home_ios_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Lesson/Lesson-home-ios.js */ "./src/components/Lesson/Lesson-home-ios.js");
/* harmony import */ var _Lesson_Lesson_home_android_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Lesson/Lesson-home-android.js */ "./src/components/Lesson/Lesson-home-android.js");
/* harmony import */ var _HueControl_HueControl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../HueControl/HueControl */ "./src/components/HueControl/HueControl.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../routes */ "./src/routes.js");






var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/components/Router/Router.js";















 // enter the local IP for the bridge

var BridgeIP = '192.168.1.4'; // enter the username for the bridge,
// follow the instructions here for details: https://developers.meethue.com/develop/get-started-2/

var usernameColin = '-T7euhXvToEKanG6-5ep0oRpjdqNPqZwIuL-Luya'; //const usernameMike = 'GTNeTmjwICnAnQ3Z5CoJu5sii-hPibfPvZBTfv9A';
// const ipad = 'fj31ESFuAGXBU51j7I9WC1hFoo3xbXCCH1m1GP8N';
// const ipad = 'u1u2rMaTUKiiNU2TL0UKK1opG1C7PQX-6drXjNJ2';
// const ipad = 'gbhW7G5gm9dE9o6s63u-KGp6DE3V9Z14UEBwyS1D';

var BridgeUsername = usernameColin;
var BridgeURL = "https://" + BridgeIP + "/api/" + BridgeUsername + "/lights/";
var BridgeGroupsURL = "https://" + BridgeIP + "/api/" + BridgeUsername + "/groups/";
var BridgeScenesURL = "https://" + BridgeIP + "/api/" + BridgeUsername + "/scenes/";

var Router =
/*#__PURE__*/
function (_Component) {
  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Router, _Component);

  function Router() {
    var _this;

    Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Router);

    _this = Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Router).call(this));
    _this.state = {
      lightsArray: [],
      lights: {},
      newLights: [],
      scenesObject: {}
    };
    _this.getLights = _this.getLights.bind(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.toggleLight = _this.toggleLight.bind(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.getScenes = _this.getScenes.bind(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.recallScene = _this.recallScene.bind(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.modifyScene = _this.modifyScene.bind(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.modifySceneLightState = _this.modifySceneLightState.bind(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.modifySceneLightsOnState = _this.modifySceneLightsOnState.bind(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_michael_carmody_Documents_ces_photobooth_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Router, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('componentDidMount()');
      this.getLights();
      this.getScenes();
    }
  }, {
    key: "getLights",
    value: function getLights() {
      var _this2 = this;

      console.log('getLights()');
      fetch(BridgeURL, {
        method: "POST",
        // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        // no-cors, cors, *same-origin
        cache: "no-cache",
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        },
        redirect: "follow",
        // manual, *follow, error
        referrer: "no-referrer" // no-referrer, *client

      }).then(fetch(BridgeURL + "new", {
        method: "GET",
        // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        // no-cors, cors, *same-origin
        cache: "no-cache",
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        },
        redirect: "follow",
        // manual, *follow, error
        referrer: "no-referrer" // no-referrer, *client

      })).then(function (results) {
        return _this2.setState({
          newLights: results
        });
      }).then(fetch(BridgeURL).then(function (results) {
        return results.json();
      }) // pull in the initial list of lights
      .then(function (results) {
        // console.log(results)
        var lightsArray = [];

        for (var key in results) {
          lightsArray.push(results[key]);
        }

        return lightsArray;
      }).then(function (lightsArray) {
        _this2.setState({
          lightsArray: lightsArray
        });

        console.log(lightsArray);
      }));

      if (this.state.newLights.length > 0) {
        console.log("New Lights:" + this.state.newLights);
      }
    }
  }, {
    key: "toggleLight",
    value: function toggleLight(lightIndex, onState, hue, saturation, brightness) {
      console.log('toggleLight(' + lightIndex + ', ' + onState + ', ' + hue + ', ' + saturation + ', ' + brightness + ')'); // eslint-disable-next-line

      this.state.lightsArray[lightIndex].state.on = onState;

      if (hue) {
        // eslint-disable-next-line
        this.state.lightsArray[lightIndex].state.hue = hue;
      }

      if (saturation) {
        // eslint-disable-next-line
        this.state.lightsArray[lightIndex].state.saturation = saturation;
      }

      if (brightness) {
        // eslint-disable-next-line
        this.state.lightsArray[lightIndex].state.brightness = brightness;
      }

      fetch(BridgeURL + (lightIndex + 1) + "/state/", {
        method: "PUT",
        // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        // no-cors, cors, *same-origin
        cache: "no-cache",
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        },
        redirect: "follow",
        // manual, *follow, error
        referrer: "no-referrer",
        // no-referrer, *client
        body: JSON.stringify({
          "on": onState,
          "hue": hue,
          "sat": saturation,
          "bri": brightness,
          "colormode": "hs"
        }) // body data type must match "Content-Type" header

      });
    }
  }, {
    key: "getScenes",
    value: function getScenes() {
      var _this3 = this;

      console.log('getScenes()');
      fetch(BridgeScenesURL).then(function (results) {
        return results.json();
      }) // pull in the initial list of lights
      .then(function (results) {
        return results;
      }).then(function (scenesObject) {
        _this3.setState({
          scenesObject: scenesObject
        }); // console.log(scenesObject)

      });
    } // transitiontime is a multiple of 100
    // Ex: A value of 10 creates a transition time of 1s (1000ms)

  }, {
    key: "modifyScene",
    value: function modifyScene(sceneId, theTransitionTime) {
      console.log('updateScene(' + sceneId + ')');
      var transTime = parseInt(theTransitionTime, 10);
      console.log(transTime);
      fetch(BridgeScenesURL + sceneId, {
        method: "PUT",
        // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        // no-cors, cors, *same-origin
        cache: "no-cache",
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        },
        redirect: "follow",
        // manual, *follow, error
        referrer: "no-referrer",
        // no-referrer, *client
        body: JSON.stringify({
          "lights": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
          "storelightstate": true,
          "transitiontime": transTime
        }) // body data type must match "Content-Type" header

      }).then(function (results) {
        console.log(results);
      });
    }
  }, {
    key: "modifySceneLightState",
    value: function modifySceneLightState(lightUrl, hue, sat, bri, arrayIndex) {
      console.log(this.state.lightsArray[arrayIndex].state.on); // let i = arrayIndex

      fetch(lightUrl, {
        method: "PUT",
        // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        // no-cors, cors, *same-origin
        cache: "no-cache",
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        },
        redirect: "follow",
        // manual, *follow, error
        referrer: "no-referrer",
        // no-referrer, *client
        body: JSON.stringify({
          "on": this.state.lightsArray[arrayIndex].state.on,
          "hue": hue,
          "sat": sat,
          "bri": bri
        }) // body data type must match "Content-Type" header

      }).then(function (results) {
        console.log(results);
      });
    }
  }, {
    key: "modifySceneLightsOnState",
    value: function modifySceneLightsOnState(sceneId, hue, sat, bri) {
      var _this4 = this;

      var _loop = function _loop(i) {
        console.log(_this4.state.lightsArray[i].state.on);
        var lightUrl = BridgeScenesURL + sceneId + '/lightstates/' + (i + 1);
        var timeout = i * 500;
        setTimeout(function () {
          return _this4.modifySceneLightState(lightUrl, hue, sat, bri, i);
        }, timeout);
      };

      for (var i = 0; i < this.state.lightsArray.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "recallScene",
    value: function recallScene(sceneId) {
      console.log('recallScene(' + sceneId + ')');
      fetch(BridgeGroupsURL + '0/action', {
        method: "PUT",
        // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        // no-cors, cors, *same-origin
        cache: "no-cache",
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        },
        redirect: "follow",
        // manual, *follow, error
        referrer: "no-referrer",
        // no-referrer, *client
        body: JSON.stringify({
          "scene": sceneId
        }) // body data type must match "Content-Type" header

      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
            to: _routes__WEBPACK_IMPORTED_MODULE_21__["HOME"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 262
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["HOME"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_App_App_js__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 269
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["LESSONHOMEIOS"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Lesson_Lesson_home_ios_js__WEBPACK_IMPORTED_MODULE_18__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["LESSONHOMEANDROID"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Lesson_Lesson_home_android_js__WEBPACK_IMPORTED_MODULE_19__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 291
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["LESSON"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Lesson_Lesson_ios_js__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 302
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["LESSON2IOS"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Lesson_Lesson2_ios_js__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 313
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["LESSON3IOS"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Lesson_Lesson3_ios_js__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 324
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["LESSON4IOS"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Lesson_Lesson4_ios_js__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 335
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["LESSON5IOS"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Lesson_Lesson5_ios_js__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 346
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["LESSON6IOS"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Lesson_Lesson6_ios_js__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 357
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["LESSON2ANDROID"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Lesson_Lesson2_android_js__WEBPACK_IMPORTED_MODULE_15__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 368
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["LESSON3ANDROID"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Lesson_Lesson3_android_js__WEBPACK_IMPORTED_MODULE_16__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 379
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["LESSON4ANDROID"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Lesson_Lesson4_android_js__WEBPACK_IMPORTED_MODULE_17__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 390
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: _routes__WEBPACK_IMPORTED_MODULE_21__["DEBUG"],
        render: function render(routeProps) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_HueControl_HueControl__WEBPACK_IMPORTED_MODULE_20__["default"], Object.assign({}, routeProps, {
            state: _this5.state,
            toggleLight: _this5.toggleLight,
            modifyScene: _this5.modifyScene,
            modifySceneLightsOnState: _this5.modifySceneLightsOnState,
            recallScene: _this5.recallScene,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 401
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      })));
    }
  }]);

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./src/img/CESPhotobooth_part2_v1.mp4":
/*!********************************************!*\
  !*** ./src/img/CESPhotobooth_part2_v1.mp4 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CESPhotobooth_part2_v1.7a81a6bd.mp4";

/***/ }),

/***/ "./src/img/CESPhotobooth_part3_v1.mp4":
/*!********************************************!*\
  !*** ./src/img/CESPhotobooth_part3_v1.mp4 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CESPhotobooth_part3_v1.7e6d152d.mp4";

/***/ }),

/***/ "./src/img/CESPhotobooth_part4_v1.mp4":
/*!********************************************!*\
  !*** ./src/img/CESPhotobooth_part4_v1.mp4 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CESPhotobooth_part4_v1.5ad12fd7.mp4";

/***/ }),

/***/ "./src/img/CES_The Box_iOS_PortraitMode--compressed.mp4":
/*!**************************************************************!*\
  !*** ./src/img/CES_The Box_iOS_PortraitMode--compressed.mp4 ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CES_The Box_iOS_PortraitMode--compressed.b7ea17c7.mp4";

/***/ }),

/***/ "./src/img/CES_bg_img.jpg":
/*!********************************!*\
  !*** ./src/img/CES_bg_img.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CES_bg_img.d108a480.jpg";

/***/ }),

/***/ "./src/img/EXPOSURE.gif":
/*!******************************!*\
  !*** ./src/img/EXPOSURE.gif ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/EXPOSURE.ea0573a6.gif";

/***/ }),

/***/ "./src/img/FOCUS.gif":
/*!***************************!*\
  !*** ./src/img/FOCUS.gif ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/FOCUS.5bdbc113.gif";

/***/ }),

/***/ "./src/img/PortraitMode2.gif":
/*!***********************************!*\
  !*** ./src/img/PortraitMode2.gif ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/PortraitMode2.1d150bc4.gif";

/***/ }),

/***/ "./src/img/asurion.svg":
/*!*****************************!*\
  !*** ./src/img/asurion.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/asurion.1d19e5c4.svg";

/***/ }),

/***/ "./src/img/icon-play.svg":
/*!*******************************!*\
  !*** ./src/img/icon-play.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/icon-play.8ea8cc36.svg";

/***/ }),

/***/ "./src/img/landing-bg.webm":
/*!*********************************!*\
  !*** ./src/img/landing-bg.webm ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/landing-bg.e6c9a259.webm";

/***/ }),

/***/ "./src/img/lesson--arrow.svg":
/*!***********************************!*\
  !*** ./src/img/lesson--arrow.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lesson--arrow.aba77a59.svg";

/***/ }),

/***/ "./src/img/lesson--circle.png":
/*!************************************!*\
  !*** ./src/img/lesson--circle.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lesson--circle.e9666373.png";

/***/ }),

/***/ "./src/img/lesson--close.svg":
/*!***********************************!*\
  !*** ./src/img/lesson--close.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lesson--close.91e6834d.svg";

/***/ }),

/***/ "./src/img/lightbulb--off.svg":
/*!************************************!*\
  !*** ./src/img/lightbulb--off.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lightbulb--off.120f7994.svg";

/***/ }),

/***/ "./src/img/lightbulb--on.svg":
/*!***********************************!*\
  !*** ./src/img/lightbulb--on.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lightbulb--on.d37ac3ed.svg";

/***/ }),

/***/ "./src/img/pause-icon.svg":
/*!********************************!*\
  !*** ./src/img/pause-icon.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pause-icon.2984fe25.svg";

/***/ }),

/***/ "./src/img/placeholder-1.png":
/*!***********************************!*\
  !*** ./src/img/placeholder-1.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/placeholder-1.2a68aa48.png";

/***/ }),

/***/ "./src/img/play-icon.svg":
/*!*******************************!*\
  !*** ./src/img/play-icon.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/play-icon.d26172cf.svg";

/***/ }),

/***/ "./src/img/sidebar-img.jpg":
/*!*********************************!*\
  !*** ./src/img/sidebar-img.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sidebar-img.a1f0bcb4.jpg";

/***/ }),

/***/ "./src/img/vid-placeholder.png":
/*!*************************************!*\
  !*** ./src/img/vid-placeholder.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/vid-placeholder.70ec3c4d.png";

/***/ }),

/***/ "./src/img/vid-placeholder2.png":
/*!**************************************!*\
  !*** ./src/img/vid-placeholder2.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/vid-placeholder2.ae8712a6.png";

/***/ }),

/***/ "./src/img/vid-placeholder3.png":
/*!**************************************!*\
  !*** ./src/img/vid-placeholder3.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/vid-placeholder3.e631f667.png";

/***/ }),

/***/ "./src/img/vid-placeholder4.png":
/*!**************************************!*\
  !*** ./src/img/vid-placeholder4.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/vid-placeholder4.b58909a5.png";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Router_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Router/Router */ "./src/components/Router/Router.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/michael.carmody/Documents/ces-photobooth/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Router_Router__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: HOME, LESSON, LESSON2IOS, LESSON3IOS, LESSON4IOS, LESSON5IOS, LESSON6IOS, LESSON2ANDROID, LESSON3ANDROID, LESSON4ANDROID, LESSON5ANDROID, LESSON6ANDROID, LESSONHOMEIOS, LESSONHOMEANDROID, DEBUG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON", function() { return LESSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON2IOS", function() { return LESSON2IOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON3IOS", function() { return LESSON3IOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON4IOS", function() { return LESSON4IOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON5IOS", function() { return LESSON5IOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON6IOS", function() { return LESSON6IOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON2ANDROID", function() { return LESSON2ANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON3ANDROID", function() { return LESSON3ANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON4ANDROID", function() { return LESSON4ANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON5ANDROID", function() { return LESSON5ANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON6ANDROID", function() { return LESSON6ANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSONHOMEIOS", function() { return LESSONHOMEIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSONHOMEANDROID", function() { return LESSONHOMEANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG", function() { return DEBUG; });
var HOME = '/';
var LESSON = '/lesson/1';
var LESSON2IOS = '/lesson/ios/2';
var LESSON3IOS = '/lesson/ios/3';
var LESSON4IOS = '/lesson/ios/4';
var LESSON5IOS = '/lesson/ios/5';
var LESSON6IOS = '/lesson/ios/6';
var LESSON2ANDROID = '/lesson/android/2';
var LESSON3ANDROID = '/lesson/android/3';
var LESSON4ANDROID = '/lesson/android/4';
var LESSON5ANDROID = '/lesson/android/5';
var LESSON6ANDROID = '/lesson/android/6';
var LESSONHOMEIOS = '/lesson/home';
var LESSONHOMEANDROID = '/lesson/android';
var DEBUG = '/debug';

/***/ }),

/***/ "./src/scenes.js":
/*!***********************!*\
  !*** ./src/scenes.js ***!
  \***********************/
/*! exports provided: one, two, three, four, five, six, seven, eight, nine, colorloop, blackout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "one", function() { return one; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "two", function() { return two; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "three", function() { return three; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "four", function() { return four; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "five", function() { return five; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "six", function() { return six; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seven", function() { return seven; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eight", function() { return eight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nine", function() { return nine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorloop", function() { return colorloop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackout", function() { return blackout; });
// map to scene id
var one = 'aNChsQ2NqTGJYkb';
var two = 'v17u9qbONiJiu9m';
var three = 'a-xKZzfOIkdhswY';
var four = 'WQRewxetrEdBgdp';
var five = 'VSX-d3VW6ylON9N'; // A2

var six = 'xN3kx1ssZv0I0Kg'; // A3

var seven = 'HSWuayYWSAvQUh6';
var eight = 'NPoe7wAMKsz7EFR';
var nine = 'rv0WKWI06sQo4Qd'; // export const colorloop = 'Ye1eQIrSl18ruSi'

var colorloop = 'HSWuayYWSAvQUh6';
var blackout = '2Pm8nDsrW5rpcYF'; // A1
// 6 = front strip
// 8 = back top strip
// 9 = back bottom strip
// 13 = vegas spot
// 12, 14 = pyramid spots

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/vid/2-Scene.webm":
/*!******************************!*\
  !*** ./src/vid/2-Scene.webm ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/2-Scene.8e5ec81b.webm";

/***/ }),

/***/ "./src/vid/3-Scene-iOS.webm":
/*!**********************************!*\
  !*** ./src/vid/3-Scene-iOS.webm ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/3-Scene-iOS.20e758bf.webm";

/***/ }),

/***/ "./src/vid/4-Scene-iOS.webm":
/*!**********************************!*\
  !*** ./src/vid/4-Scene-iOS.webm ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/4-Scene-iOS.576b78f8.webm";

/***/ }),

/***/ "./src/vid/5-Scene.webm":
/*!******************************!*\
  !*** ./src/vid/5-Scene.webm ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/5-Scene.d0668261.webm";

/***/ }),

/***/ "./src/vid/6-Scene.webm":
/*!******************************!*\
  !*** ./src/vid/6-Scene.webm ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/6-Scene.ddc9e632.webm";

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/michael.carmody/Documents/ces-photobooth/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/michael.carmody/Documents/ces-photobooth/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map