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

        $(dropDown).find(".dropdown-menu").html(`
        <li class="dropdown-item">
                <a href="${actions[actionsKey]}">${actionsKey}</a>
            </li>
        `,true);
    }

    $("[data-toggle='dropdown']").dropDown();
}

$("[data-toggle='dropdown']").dropDown();