import $ from "../core"

$.prototype.tab = function () {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click((event) => {
            event.preventDefault();
            $(this[i]).addClass("tab-item_active")
                .siblings().removeClass("tab-item_active");
        });
    }
};

$("[data-tabpanel] .tab-item").tab();