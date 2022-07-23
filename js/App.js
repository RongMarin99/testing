$(document).ready(function(){


    // @open right menu
    $(".mobile-menu span").click(function(){
      $(".right-menu").animate({"right":"0px"});
    });

    // @close right menu
    $(".header-right-menu span").click(function(){
        $(".right-menu").animate({"right":"-100%"});
    })
})