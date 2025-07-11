$(function () {

  //header
  $(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().slideToggle();
  });

  //mgnb
  $(".mgnb > li").click(function () {
    $(this).find(".mdepth2 > li").stop().slideToggle();
  });

  $(".mgnb > li").click(function () {
    $(this).find(".mdepth2 > li").slideDown();
    $(this).siblings().find(".mdepth2 > li").slideUp();
  });

  $(".ham").click(function () {
    $(".mgnb_wrap").fadeIn();
  });

  $(".close").click(function () {
    $(".mgnb_wrap").fadeOut();
  });

})