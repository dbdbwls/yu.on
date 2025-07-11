$(function () {




  //banner
  const banner_list = new Swiper(".banner_list", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
  });


  //place
  const txt_list = new Swiper(".txt_list", {
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    loop: true,
  });

  const pimg_list = new Swiper(".pimg_list", {
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
  });

  txt_list.controller.control = pimg_list
  pimg_list.controller.control = txt_list


  //dining
  const dining_list = new Swiper(".dining_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    slidesPerView: 2, // 한 슬라이드에 보여줄 갯수
    spaceBetween: 20, // 슬라이드 사이 여백
    breakpoints: {
      768: {
        // 가로해상도가 768px 이상
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        // 가로해상도가 1024px 이상
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });


  //room
  $(".tit1").click(function () {
    $(this).addClass("active");
    $(".tit2,.tit3,.tit4,.tit5").removeClass("active");
    $(".room").addClass("bg1");
    $(".room").removeClass("bg2");
    $(".room").removeClass("bg3");
    $(".room").removeClass("bg4");
    $(".room").removeClass("bg5");
    $(".s_txt").fadeIn();
    $(".d_txt").fadeOut();
    $(".p_txt").fadeOut();
    $(".u_txt").fadeOut();
    $(".r_txt").fadeOut();
  });
  $(".tit2").click(function () {
    $(this).addClass("active");
    $(".tit1,.tit3,.tit4,.tit5").removeClass("active");
    $(".room").addClass("bg2");
    $(".room").removeClass("bg1");
    $(".room").removeClass("bg3");
    $(".room").removeClass("bg4");
    $(".room").removeClass("bg5");
    $(".d_txt").fadeIn();
    $(".s_txt").fadeOut();
    $(".p_txt").fadeOut();
    $(".u_txt").fadeOut();
    $(".r_txt").fadeOut();
  });
  $(".tit3").click(function () {
    $(this).addClass("active");
    $(".tit1,.tit2,.tit4,.tit5").removeClass("active");
    $(".room").addClass("bg3");
    $(".room").removeClass("bg1");
    $(".room").removeClass("bg2")
    $(".room").removeClass("bg4")
    $(".room").removeClass("bg5");
    $(".p_txt").fadeIn();
    $(".s_txt").fadeOut();
    $(".d_txt").fadeOut();
    $(".u_txt").fadeOut();
    $(".r_txt").fadeOut();
  });
  $(".tit4").click(function () {
    $(this).addClass("active");
    $(".tit1,.tit2,.tit3,.tit5").removeClass("active");
    $(".room").addClass("bg4");
    $(".room").removeClass("bg1")
    $(".room").removeClass("bg2")
    $(".room").removeClass("bg3")
    $(".room").removeClass("bg5")
    $(".u_txt").fadeIn();
    $(".s_txt").fadeOut();
    $(".p_txt").fadeOut();
    $(".d_txt").fadeOut();
    $(".r_txt").fadeOut();
  });
  $(".tit5").click(function () {
    $(this).addClass("active");
    $(".tit1,.tit2,.tit3,.tit4").removeClass("active");
    $(".room").addClass("bg5");
    $(".room").removeClass("bg1")
    $(".room").removeClass("bg2")
    $(".room").removeClass("bg3")
    $(".room").removeClass("bg4")
    $(".r_txt").fadeIn();
    $(".s_txt").fadeOut();
    $(".p_txt").fadeOut();
    $(".u_txt").fadeOut();
    $(".d_txt").fadeOut();
  });


  //event
  const event_list = new Swiper(".event_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    breakpoints: {
      1200: {
        // 가로해상도가 768px 이상
        slidesPerView: 2,
        spaceBetween: 160,
      },
      768: {
        // 가로해상도가 1024px 이상
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
    },
  });

});