import $ from "../core";

$.prototype.addClass = function (...classes) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList)
            continue;

        this[i].classList.add(...classes)
    }
    return this;
}

$.prototype.removeClass = function (...classes) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList)
            continue;

        this[i].classList.remove(...classes)
    }
    return this;
}

$.prototype.toggleClass = function (className) {
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