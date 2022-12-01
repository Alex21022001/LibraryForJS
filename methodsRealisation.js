//TEST MERGE


import $ from "./src/js/lib/lib";

$(".btn").click(function () {
    $(".box").fadeOut(800);
    setTimeout(() => {
        $(".box").fadeInUp(600, 50);
    }, 1500);
});

$(".btn2").click(function () {
    $(".box").fadeToggle();
});

$(".box").createDropDown({
    id: "test",
    name: "TEST",
    buttonsClasses: ["button", "test"],
    actionLink: {
        "Test": "#",
        "Test2": "#",
        "Test3": "#"
    }
});

const callback = function () {
    console.log("Callback");
}

$("[data-toggle='modal-generate']").createModal({
    text: "It's just a text",
    title: "Title for modal",
    //btns= {count: num, settings : [[title,classes[],close,callback]]}
    btns: {
        settings: [
            ["Click Me", ["modal-btn-test", "modal-btn-test-2"], false, callback],
            ["Second Button", ["modal-btn-test-3"], true]
        ],

        count() {
            return this.settings.length
        }
    }
});
console.log($("[data-toggle='accordion']"));

$("[data-toggle='accordion']").accordion();
