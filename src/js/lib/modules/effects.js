import $ from "../core";

$.prototype.animateOverTime = function (duration, callback, finish) {
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

$.prototype.fadeIn = function (duration, display, finish) {
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

$.prototype.fadeOut = function (duration, finish) {
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

$.prototype.fadeInDown = function (duration = 700, height = "-50px", display, finish) {
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

$.prototype.fadeInUp = function (duration = 600, height = "50px", display = "block", finish) {
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

$.prototype.fadeToggle = function (duration = 600, display, finish) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === "none") {
            $(this[i]).fadeIn(duration, display, finish);
        } else {
            $(this[i]).fadeOut(duration, display, finish);
        }
    }

    return this;
}