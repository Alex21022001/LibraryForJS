import $ from "../core";

$.prototype.dropDown = function () {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute("id");
        $(this[i]).click(() => {
            $(`[data-target="${id}"]`).fadeToggle(300);
        });
    }
    $(".dropdown-item > a").click(function () {
        setTimeout(() => {
            $(this).closest(".dropdown-menu").fadeToggle();
        }, 100);
    });
}

$.prototype.createDropDown = function ({
                                           id = null,
                                           name = null,
                                           buttonsClass = null,
                                           actions = null
                                       }) {

    const dropDown = document.createElement("div");

    dropDown.innerHTML = `<div class="dropdown">
        <button class="${buttonsClass}" data-toggle="dropdown" id="${id}">${name}</button>
        <ul class="dropdown-menu" data-target="${id}"></ul>
    </div>`;

    for (let i = 0; i < this.length; i++) {
        this[i].append(dropDown);
    }

    for (const actionsKey in actions) {

        $(dropDown).find(".dropdown-menu").html(`
        <li class="dropdown-item">
                <a href="${actions[actionsKey]}">${actionsKey}</a>
            </li>
        `,true);
    }

    $("[data-toggle='dropdown']").dropDown();
}

$("[data-toggle='dropdown']").dropDown();