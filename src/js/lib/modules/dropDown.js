import $ from "../core";

$.prototype.dropDown = function (){
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute("id");
        $(this[i]).click(()=>{
            $(`[data-target="${id}"]`).fadeToggle(300);
        });
    }
    $(".dropdown-item > a").click(function (){
       setTimeout(()=>{
           $(this).closest(".dropdown-menu").fadeToggle();
       },100);
    });
}

$("[data-toggle='dropdown']").dropDown();