import $ from "./lib/lib";


$(".btn").click(function () {
    $(".box").fadeOut(800);
    setTimeout(()=>{
        $(".box").fadeInUp(600,50);
    },1500);
});

$(".btn2").click(function () {
    $(".box").fadeToggle();
});

$(".box").createDropDown({
    id : "test",
    name : "TEST",
    buttonsClass : "button",
    actions : {
        "Test" : "#",
        "Test2" : "#",
        "Test3" : "#"
    }
})
