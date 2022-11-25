/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = function (selector) {
    return new $.prototype.init(selector); // Возвращаем прототим функции, тоесть обьект с которым мы можем работать
    //так как функция не может хранить переменные и другие функции, вот мы и работаем с прототипом - обьектом.
}

$.prototype.init = function (selector) {

    if (selector.tagName) { // Проверяем селектор, так как вместо него можно передать уже обькт, например события.
        this[0] = selector;
        this.length = 1;
        return this;
    }

    if (!selector) {
        return this; // {} - пустой объект который только что был создан
    }
    Object.assign(this, document.querySelectorAll(selector)); // Получаем обьект с копироваными другими обьектами 0:a, 1:b...
    this.length = document.querySelectorAll(selector).length;
    return this;
}
//Так как мы получили дополненый обьект то что б к нему обратится нужно $.prototype.init.prototype, поэтому мы просто скорщаем до $.prototype;
$.prototype.init.prototype = $.prototype;

window.$ = $;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);
1



/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _modules_dropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropDown */ "./src/js/lib/modules/dropDown.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modal */ "./src/js/lib/modules/modal.js");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toArray = function () {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        arr[i] = this[i];
    }
    return arr;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content, safe = false) {
    for (let i = 0; i < this.length; i++) {
        if (content && safe === false)
            this[i].innerHTML = content;
        else if (content && safe === true)
            this[i].innerHTML += content;
        else
            return this[i].innerHTML;
    }
    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (index) {
    if (index)
        return (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[index]);
    else
        return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
    if (this.length !== 1)
        return this;
    else {
        const content = this[0].parentNode.children;
        for (let i = 0; i < content.length; i++) {
            if (content[i] === this[0])
                return i;
        }
    }
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
    let success = false;
    if (!selector) {
        throw new Error("You didn't pass a selector");
    }

    let numberOfItems = 0,
        counter = 0;

    const copy = Object.assign({}, this);

    for (let i = 0; i < copy.length; i++) {
        const arr = copy[i].querySelectorAll(selector);
        if (arr.length === 0)
            continue;

        for (let j = 0; j < arr.length; j++) {
            this[counter++] = arr[j];
            success = true;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;
    for (; numberOfItems < Object.keys(this).length; numberOfItems++) {
        delete this[numberOfItems];
    }

    if (success === false) {
        console.log("Method find. There is no appropriate element for your selector");
    }

    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
    let counter = 0;
    let success = false;

    for (let i = 0; i < this.length; i++) {
        if (this[i].closest(selector)) {
            this[i] = this[i].closest(selector);
            counter++;
            success = true;
        }
    }
    if (success === false)
        console.log("Method closest. There is no appropriate element for your selector");

    this.length = counter;
    for (; counter < Object.keys(this).length; counter++)
        delete this[counter];

    let countLength = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] === null) {
            delete this[i];
        } else
            countLength++;
    }
    this.length = countLength;

    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
    let numberOfItems = 0,
        counter = 0;

    const copy = Object.assign({}, this);

    for (let i = 0; i < copy.length; i++) {
        const arr = copy[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === copy[i])
                continue;
            this[counter++] = arr[j];
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;
    for (; numberOfItems < Object.keys(this).length; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
}

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classes) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList)
            continue;

        this[i].classList.add(...classes)
    }
    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classes) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList)
            continue;

        this[i].classList.remove(...classes)
    }
    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList)
            continue;

        if (this[i].classList.contains(className)) {
            this[i].classList.remove(className);
        } else {
            this[i].classList.add(className);
        }
    }
    return this;
}

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function (){
    for (let i = 0; i <this.length; i++) {
        if (!this[i].style){
            continue;
        }
        this[i].style.display = "block";
    }

    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function (){
    for (let i = 0; i <this.length; i++) {
        if (!this[i].style){
            continue;
        }
        this[i].style.display = "none";
    }
    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleDisplay = function (){
    for (let i = 0; i <this.length; i++) {
        if (!this[i].style){
            continue;
        }
        if (this[i].style.display === "none"){
            this.show();
        }else {
            this.hide();
        }
    }

    return this;
}

/***/ }),

/***/ "./src/js/lib/modules/dropDown.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/dropDown.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropDown = function () {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute("id");
        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-target="${id}"]`).fadeToggle(300);
        });
    }
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".dropdown-item > a").click(function () {
        setTimeout(() => {
            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this).closest(".dropdown-menu").fadeToggle();
        }, 100);
    });
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createDropDown = function ({
                                           id = null,
                                           name = null,
                                           buttonsClasses,
                                           actions = null
                                       }) {

    const dropDown = document.createElement("div"),
        btn = document.createElement("button");

    dropDown.classList.add("dropdown");

    btn.classList.add(...buttonsClasses);
    btn.setAttribute("data-toggle","dropdown");
    btn.setAttribute("id",id)
    btn.textContent = name;

    dropDown.innerHTML = `
        <ul class="dropdown-menu" data-target="${id}"></ul>
    `;

    for (let i = 0; i < this.length; i++) {
        this[i].insertAdjacentElement("afterend",dropDown);
        dropDown.insertAdjacentElement("afterbegin",btn);
    }

    for (const actionsKey in actions) {

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(dropDown).find(".dropdown-menu").html(`
        <li class="dropdown-item">
                <a href="${actions[actionsKey]}">${actionsKey}</a>
            </li>
        `,true);
    }

    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-toggle='dropdown']").dropDown();
}

;(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-toggle='dropdown']").dropDown();

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callback, finish) {
    let timeStart; //Время начала функции, нужно, что бы соответствовать duration.

    function _animateOverTime(time) {
        if (!timeStart) //Проверяем, если это первый запуск тогда мы фиксируем время.
            timeStart = time;
        let timeElapsed = time - timeStart; // Каждый раз будет сравнивать время, нужно ли останавливать или нет.
        let completion = Math.min((timeElapsed / duration), 1); // Получаем разницу в процентах, начиная от 0,001 ... и когда мы перешагнем 1, то всегда будет возвращать 1, что бы не сломать ccs.
        // И эту переменную мы будем использовать как показатель opacity. С кажды разом будет увеличиватся.
        callback(completion);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof finish === "function") {
                finish();
            }
        }
    }

    return _animateOverTime;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration = 300, display, finish) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || "block";

        const _fadeIn = (completion) => {
            this[i].style.opacity = completion;
        }

        const animation = this.animateOverTime(duration, _fadeIn, finish);
        requestAnimationFrame(animation);
    }
    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration = 300, finish) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (completion) => {
            this[i].style.opacity = 1 - completion;

            if (completion === 1) {
                this[i].style.display = "none";
            }
        }

        const animation = this.animateOverTime(duration, _fadeOut, finish);
        requestAnimationFrame(animation);
    }
    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeInDown = function (duration = 700, height = "-50px", display, finish) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.transform = `translateY(-${height}px)`;
        this[i].style.display = display || "block";

        const _fadeIn = (completion) => {
            this[i].style.opacity = completion;
            let h = height - height * completion;
            this[i].style.transform = `translateY(-${h}px)`;
        }

        const animation = this.animateOverTime(duration, _fadeIn, finish);
        requestAnimationFrame(animation);
    }
    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeInUp = function (duration = 600, height = "50px", display = "block", finish) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.transform = `translateY(${height}px)`;
        this[i].style.display = display;

        const _fadeIn = (completion) => {
            this[i].style.opacity = completion;
            let h = height - height * completion;
            this[i].style.transform = `translateY(${h}px)`;
        }

        const animation = this.animateOverTime(duration, _fadeIn, finish);
        requestAnimationFrame(animation);
    }
    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (duration = 600, display, finish) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === "none") {
            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeIn(duration, display, finish);
        } else {
            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeOut(duration, display, finish);
        }
    }

    return this;
}

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
    if (!eventName || !callback)
        return this;

    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }

    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
    if (!eventName || !callback)
        return this;

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }

    return this;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener("click", handler);
        } else {
            this[i].click();
        }
    }

    return this;
}

/***/ }),

/***/ "./src/js/lib/modules/modal.js":
/*!*************************************!*\
  !*** ./src/js/lib/modules/modal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function () {
    for (let i = 0; i < this.length; i++) {//Проходимся по все елементам
        const target = this[i].getAttribute("data-target"); // Получаем id модалки которую нужно открыть

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click((e) => { // Назначаем клик и показываем модалку
            e.preventDefault();
            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn();
            document.body.style.marginRight = `${calculateScroll()}px`; // Добавляем марджин что бы не двигалосся ползунок
            document.body.style.overflow = "hidden";
        });

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).find("[data-close]").click((e) => { // Ищем все дата атрибуты для закрытия и ставим ивент
            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target.closest(".modal")).fadeOut();
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).closest(".modal").click(function (e) { //Для клика на подложку закрываем
            if (e.target.classList.contains("modal")) {
                (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this).fadeOut();
                document.body.style.overflow = "";
            }
        });
    }
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function ({text,title,btns}) {
    for (let i = 0; i <this.length; i++) { //Проходимя по всем елементам которым нужно создать модалку
        let modal = document.createElement("div");
        const id = this[i].getAttribute("data-target").replace("#", "");
        const buttons = [];

        if (!(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${id}`).length >= 1) { //Проверяем, если уже создана модалка под тем же id
            // что бы не было дубликатов и не вызывалось сразу несколько

            //Добавляем класс к основному блоку
            modal.classList.add("modal");
            modal.setAttribute("id", id);

            //btns= {count: num, settings : [[title,classes[],close,callback]]}

            for (let j = 0; j < btns.count(); j++) { // Создаем кнопки из переданых настроек, и сохраняем в массив
                let btn = document.createElement("button");
                btn.classList.add("button", "modal-btn", ...btns.settings[j][1]);
                btn.textContent = btns.settings[j][0];
                if (btns.settings[j][2]) {
                    btn.setAttribute("data-close", "true");
                }
                btn.addEventListener("click", btns.settings[j][3]);

                buttons[j] = btn;
            }

            //Создаем саму модалку без кнопок
            modal.innerHTML = ` 
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="modal-close" data-close>
                        <span>&times;</span>
                    </button>
    
                    <div class="modal-header">
                        <div class="modal-title">${title}</div>
                    </div>
    
                    <div class="modal-body">${text}</div>
                    
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>`;

            modal.querySelector(".modal-footer").append(...buttons);

            //Добавлем модалку в HTML
            document.body.append(modal);

            //Вызываем метод с тригерами, на кнопку которую мы изначально передали. Что бы все правильно работало
            // на кнопке долженбыть атрбут с id модалки которую нужно показать при клике.
            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal();
        }
        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal();
    }

}

function calculateScroll() {
    const div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.append(div);
    const t = div.offsetWidth - div.clientWidth;
    div.remove();

    return t;
}

(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-toggle='modal']").modal();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");



(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".btn").click(function () {
    (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".box").fadeOut(800);
    setTimeout(() => {
        (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".box").fadeInUp(600, 50);
    }, 1500);
});

(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".btn2").click(function () {
    (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".box").fadeToggle();
});

(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(".box").createDropDown({
    id: "test",
    name: "TEST",
    buttonsClasses: ["button", "test"],
    actions: {
        "Test": "#",
        "Test2": "#",
        "Test3": "#"
    }
});

const callback = function () {
    console.log("Callback");
}

;(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-toggle='modal-generate']").createModal({
    text: "It's just a text",
    title: "Title for modal",
    //btns= {count: num, settings : [[title,classes[],close,callback]]}
    btns: {
        settings: [
            ["Click Me", ["modal-btn-test", "modal-btn-test-2"], false, callback],
            ["Second Button", ["modal-btn-test-3"], true]
        ],

        count() {
            return this.settings.length
        }
    }
});



})();

/******/ })()
;
//# sourceMappingURL=script.js.map