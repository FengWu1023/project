
$(function () {
    $(".top").load("html/header.html");
    $("footer").load("html/footer.html",function(){
        $.getScript("javascript/header.js")
    })

})

    
