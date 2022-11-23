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

$.prototype.createModal = function ({text,title,btns}) {
    for (let i = 0; i <this.length; i++) {
        let modal = document.createElement("div");
        const id = this[i].getAttribute("data-target").replace("#","");
        const buttons= [];

        for (let j = 0; j <btns.count; j++) {
            let btn = document.createElement("button");
            btn.classList.add("btn",...btns.settings[j][1])
        }

        modal.innerHTML = `
        <div class="modal" id="${id}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="modal-close" data-close>
                        <span>&times;</span>
                    </button>
    
                    <div class="modal-header">
                        <div class="modal-title">${title}</div>
                    </div>
    
                    <div class="modal-body">${text}</div>
                    
                    <div class="modal-footer">
                        <button class="button modal-btn" data-close>Send</button>
                    </div>
                </div>
            </div>
        </div>`;

        document.body.append(modal);
        $(this[i]).modal();
    }

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