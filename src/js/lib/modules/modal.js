import $ from "../core";

$.prototype.modal = function () {
    for (let i = 0; i < this.length; i++) {//Проходимся по все елементам
        const target = this[i].getAttribute("data-target"); // Получаем id модалки которую нужно открыть

        $(this[i]).click((e) => { // Назначаем клик и показываем модалку
            e.preventDefault();
            $(target).fadeIn();
            document.body.style.marginRight = `${calculateScroll()}px`; // Добавляем марджин что бы не двигалосся ползунок
            document.body.style.overflow = "hidden";
        });

        $(target).find("[data-close]").click((e) => { // Ищем все дата атрибуты для закрытия и ставим ивент
            $(e.target.closest(".modal")).fadeOut();
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        $(target).closest(".modal").click(function (e) { //Для клика на подложку закрываем
            if (e.target.classList.contains("modal")) {
                $(this).fadeOut();
                document.body.style.overflow = "";
            }
        });
    }
}

$.prototype.createModal = function ({text,title,btns}) {
    for (let i = 0; i <this.length; i++) { //Проходимя по всем елементам которым нужно создать модалку
        let modal = document.createElement("div");
        const id = this[i].getAttribute("data-target").replace("#", "");
        const buttons = [];

        if (!$(`#${id}`).length >= 1) { //Проверяем, если уже создана модалка под тем же id
            // что бы не было дубликатов и не вызывалось сразу несколько

            //Добавляем класс к основному блоку
            modal.classList.add("modal");
            modal.setAttribute("id", id);

            //btns= {count: num, settings : [[title,classes[],close,callback]]}

            for (let j = 0; j < btns.count(); j++) { // Создаем кнопки из переданых настроек, и сохраняем в массив
                let btn = document.createElement("button");
                btn.classList.add("button", "modal-btn", ...btns.settings[j][1]);
                btn.textContent = btns.settings[j][0];
                if (btns.settings[j][2]) {
                    btn.setAttribute("data-close", "true");
                }
                btn.addEventListener("click", btns.settings[j][3]);

                buttons[j] = btn;
            }

            //Создаем саму модалку без кнопок
            modal.innerHTML = ` 
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
                        
                    </div>
                </div>
            </div>`;

            modal.querySelector(".modal-footer").append(...buttons);

            //Добавлем модалку в HTML
            document.body.append(modal);

            //Вызываем метод с тригерами, на кнопку которую мы изначально передали. Что бы все правильно работало
            // на кнопке долженбыть атрбут с id модалки которую нужно показать при клике.
            $(this[i]).modal();
        }
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