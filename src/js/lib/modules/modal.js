import $ from "../core";

$.prototype.modal = function () {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute("data-target");

        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn();
            document.body.style.marginRight = `${calculateScroll()}px`;
            document.body.style.overflow = "hidden";
        });
    }

    $("[data-close]").click((e) => {
        $(e.target.closest(".modal")).fadeOut();
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
    });

    $(".modal").click(function (e) {
        if (e.target.classList.contains("modal")) {
            $(this).fadeOut();
            document.body.style.overflow = "";
        }
    });
}

$.prototype.createModal = function ({}) {

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

$("[data-toggle='modal']").modal();