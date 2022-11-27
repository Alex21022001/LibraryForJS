import $ from "../core";

$.prototype.toArray = function () {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        arr[i] = this[i];
    }
    return arr;
}

$.prototype.html = function (content, safe = false) {
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

$.prototype.eq = function (index) {
    if (index || index >=0)
        return $(this[index]);
    else
        return this;
}

$.prototype.index = function () {
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

$.prototype.find = function (selector) {
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

$.prototype.closest = function (selector) {
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

$.prototype.siblings = function () {
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