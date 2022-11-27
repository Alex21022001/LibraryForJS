import $ from "../core"

$.prototype.tab = function () {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click((event) => {
            event.preventDefault();
            clearTab(i);
        });
    }

    const clearTab = (index) => {
        for (let i = 0; i < this.length; i++) {
            this[i].classList.remove("tab-item_active");
            setActiveClass(this[index]);
        }
    }
    const setActiveClass = (item) => {
        item.classList.add("tab-item_active");
    }
};

$("[data-tabpanel] .tab-item").tab();