$(function () {

  //depth2
  $(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().fadeToggle();
  });


  //mgnb
  $(".mgnb > li").click(function () {
    $(this).find(".mdepth2").slideToggle();
    $(this).siblings().find(".mdepth2").slideUp();
  });

  $(".ham").click(function () {
    $(".mgnb_wrap").fadeIn();
  });
  $(".close").click(function () {
    $(".mgnb_wrap").fadeOut();
  });

});