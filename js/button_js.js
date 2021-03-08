$(document).ready(function(){
    var aa = true;

    $("#hamburger").click(function(){
        if(aa == true){
            aa = false;
            $("#hamburger").addClass("rotate");
            $("#hamburger").attr("src","img/X.png");
            $("#hamburger").removeClass("back");
            $(".SearchBox").stop().animate({
                "margin-left":0+"%"
            },1000);
            // $(".SearchBox").fadeIn(1000);
        }else{
            aa = true;
            $("#hamburger").addClass("back");
            $("#hamburger").attr("src","img/menu.png");
            $("#hamburger").removeClass("rotate");
            $(".SearchBox").stop().animate({
                "margin-left":-100+"%"
            },1000);
            // $(".SearchBox").fadeOut(1000);
        }
    });
});
