import $ from "./lib/lib";

//TEST MERGE


$(".btn").click(function () {
    $(".box").fadeOut(800);
    setTimeout(()=>{
        $(".box").fadeInUp(600,50);
    },1500);
});

$(".btn2").click(function () {
    $(".box").fadeToggle();
});
