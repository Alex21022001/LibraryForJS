import $ from "../core";

$.prototype.modal = function () {
    console.log(this);
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute("data-target");

        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn();
            document.body.style.overflow = "hidden";
        });
    }

    $("[data-close]").click((e) => {
        $(e.target.closest(".modal")).fadeOut();
        document.body.style.overflow = "";
    });
    $(".modal").click(function (e) {
        if (e.target.classList.contains("modal")) {
            $(this).fadeOut();
            document.body.style.overflow = "";
        }
    });
}

$("[data-toggle='modal']").modal();