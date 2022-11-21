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

export default $;
1

