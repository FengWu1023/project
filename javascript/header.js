
$(".top-l").children("i").mouseenter(function () {
    $(".top-l dl").css("display", "block").parent().children("i").css("borderBottom", "1px solid white");
})
$(".top-l").mouseleave(function () {
    console.log(0)
    $(".top-l dl").css("display", "none").parent().children("i").css("borderBottom", "1px solid #a7a7a7");
})

$(".top-l dl dd").click(function () {
    $(".top-l i span").html($(".top-l dl dd").eq($(this).index() - 1).html());
})

$(".myyoule").mouseenter(function () {
    console.log(7);
    $(".youle").css("display", "block");
})

$(".yl").mouseleave(function () {
    $(".youle").css("display", "none");
})

$(".phone").mouseenter(function () {
    $(".code").css("display", "block");
})

$(".phone").mouseleave(function () {
    $(".code").css("display", "none");
})


