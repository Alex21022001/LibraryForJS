import $ from "../core";

$.prototype.dropDown = function () {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute("data-target");
        $(this[i]).click((event) => {
            event.stopPropagation();
            $("#"+id).fadeToggle(300);

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
                                           actionLink = null
                                       }) {

    const dropDown = document.createElement("div"),
        btn = document.createElement("button");

    dropDown.classList.add("dropdown");

    btn.classList.add(...buttonsClasses);
    btn.setAttribute("data-toggle","generate-dropdown");
    btn.setAttribute("data-target",id);
    btn.textContent = name;

    dropDown.innerHTML = `
        <ul class="dropdown-menu" id="${id}"></ul>
    `;

    for (let i = 0; i < this.length; i++) {
        this[i].insertAdjacentElement("afterend",dropDown);
        dropDown.insertAdjacentElement("afterbegin",btn);
    }

    for (const actionName in actionLink) {
        $(dropDown).find(".dropdown-menu").html(`
        <li class="dropdown-item">
                <a href="${actionLink[actionName]}">${actionName}</a>
            </li>
        `,true);
    }

    $("[data-toggle='generate-dropdown']").dropDown();
}

$("[data-toggle='dropdown']").dropDown();