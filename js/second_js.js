$(document).ready(function(){
    var $design = $("#picture").children('div');
    var $img = $("#picture div img");
    var $designIndex = 0;
    var $swich = true;

    // console.log($design);

    $design.click(function(){
        $designIndex = $(this).index();
        if($swich){
            $design.removeClass("active");
            $design.eq($designIndex).siblings("div").stop().css("display","none");
            $img.css({
                "width":"100%",
                "height":"100%"
            })
            $design.eq($designIndex).stop().animate({
                "width":"100%"
            },500);
            $swich = false;
        }else{
            $img.css({
                "width":"auto",
                "height":"100%"
            });
            $design.css({
                "width":"128px",
                "display":"none"
            });
            setTimeout(function(){
                $design.css("display","block")
            },10)
            $design.addClass("active");
            $swich = true;
        }
    });
});