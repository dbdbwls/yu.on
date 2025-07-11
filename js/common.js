$(function () {

  $(".gnb > li > a[href^='#']").click(function (event) {
    event.preventDefault();
    let target = $(this.hash);
    $('html, body').animate({ scrollTop: target.offset().top }, 1500);
  });


    $(".top_btn a[href^='#']").click(function (event) {
    event.preventDefault();
    let target = $(this.hash);
    $('html, body').animate({ scrollTop: target.offset().top }, 1500);
  });



  //팝업 열기
  $("#header .con").click(function () {
    $(".dim").fadeIn();
    $(".popup").animate({
      "right": "0"
    });
  });

  //팝업 닫기
  $(".popup .close").click(function () {
    $(".dim").fadeOut();
    $(".popup").animate({
      "right": "-100%"
    });
  });


  //햄버거 메뉴
  $(".ham").click(function () {
    $("#header .mgnb_wrap").fadeIn();
  });

  //메뉴 닫기 버튼
  $(".m_close").click(function () {
    $("#header .mgnb_wrap").fadeOut();
  });

  //메뉴 클릭시 햄버거 메뉴 닫기
  $(".mgnb li a").click(function () {
    $(".mgnb_wrap").fadeOut();
  });


  //햄버거 버튼과 메뉴 닫기 버튼 바꾸기
  $(".ham").click(function () {
    $(".m_close").fadeIn();
    $(".ham").fadeOut();
  });

  $(".m_close").click(function () {
    $(".ham").fadeIn();
    $(".m_close").fadeOut();
  });


  //메인 메뉴 클릭시 햄버거 아이콘 보이게 하기
  $(".mgnb_wrap .mgnb li a").click(function () {
    $(".ham").fadeIn();
    $(".m_close").fadeOut();
  });



  //마우스



});