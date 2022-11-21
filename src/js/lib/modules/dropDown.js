import $ from "../core";

$.prototype.dropDown = function (){
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute("id");
        $(this[i]).click(()=>{
            $(`[data-dropdown-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
    $(".dropdown-item > a").click(function (){
       setTimeout(()=>{
           $(this).closest("[data-dropdown-toggle-id]").fadeToggle();
       },100);
    });
}

$(".dropdown-toggle").dropDown();