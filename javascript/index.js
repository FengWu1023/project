$(".banner").banner({
    imgs: $(".banner").find("img"),     //必传
    // left:$(".banner").find("#left"),   //左按钮，可选
    // right:$(".banner").find("#right"), //右按钮，可选
    list: true,         //是否要小圆圈，可选，默认要
    autoPlay: true,     //是否要自动播放，可选，默认要
    delayTime: 2000,     //可选的，图片播放间隔时间
    moveTime: 200,        //可选的，图片移动的时间
    listBgColor: "red"
})

$("#tab ul.tab-t li").mouseenter(function () {
    // console.log($(this).index());
    console.log(-$(this).index() * 280);
    $(this).addClass("active").siblings().removeClass("active");
    $("#tab .tab-b .slide ").stop().animate({ "top": -$(this).index() * 280 })

})

$("#category").children("li").mouseenter(function () {
    // console.log($("#cateshow").children("div").eq($(this).index()));
    $("#cateshow").children("div").eq($(this).index()).css("display", "block").siblings().css("display", "none");
})
$("nav").mouseleave(function () {

    $("#cateshow").children("div").siblings().css("display", "none");
})

function dataSlide(data) {
    var str = "";
    var length = $("#tab .tab-b").children(".slide").children("ul").length;
    for (var j = 0; j < length; j++) {
        for (var i = 0; i < 5; i++) {
            str += `<li>
                        <a><img src="${data[i + 5 * j].img}"/></a>
                        <a href="#"><p>${data[i + 5 * j].name}</p></a>
                        <span>￥<b>${data[i + 5 * j].price}</b></span>
                    </li>`
        }


        $("#tab .tab-b").children(".slide").children("ul").eq(j).html(str);
        str = "";
    }
}
$.ajax({
    url: "http://localhost/project/data/data.json",
    dataType: "json",
    success: function (data) {
        console.log(data);
        dataSlide(data);
        fruitAdd(data);
    },
    error: function (a, b, c) {
        console.log(b)
        console.log(c)
    }
})


function fruitAdd(data) {
    var str = "";
    var length = $(".fdisplay-r").children("ul").length;

    console.log(length);
    for (var j = 0; j < length; j++) {
        for (var i = 0; i < 4; i++) {
            str += `<li>
                        <a><img src="${data[i + 4 * j].img}"/></a>
                        <a href="#"><p>${data[i + 4 * j].name}</p></a>
                        <span>￥<b>${data[i + 4 * j].price}</b></span>
                    </li>`
            $(".fdisplay-r").children("ul").eq(j).append(str);
            str = "";
        }
    }
}

$(".floor").children("li").click(function(){
    var i = $(this).index();
    var t;
    console.log(i)
    switch(i){ 
        case 0: t = $("#tab").offset().top; break;
        case 1: t = $(".discount").offset().top; break;
        case 2: t = $(".type-fruit").offset().top; break;
        case 3: t = 0; break;
        default: break;

    }
    $(".floor").children("li").children("a").css({"background":"#f3f4f6","color":"#999"}).parent().eq(i).children("a").css({"background":"red","color":"#fff"})

    $("html").animate({
        scrollTop:t
    })
})
