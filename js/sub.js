$(function () {

  //contents

  $(".conten1 > .li1").click(function () {
    $(this).addClass("active")
    $(".li2, .li3, .li4").removeClass("active")
  });

  $(".conten1 > .li2").click(function () {
    $(this).addClass("active")
    $(".li1, .li3, .li4").removeClass("active")
  });

  $(".conten1 > .li3").click(function () {
    $(this).addClass("active")
    $(".li1, .li2, .li4").removeClass("active")
  });

  $(".conten1 > .li4").click(function () {
    $(this).addClass("active")
    $(".li1, .li2, .li3").removeClass("active")
  });


  //room

  $(".top > ul > .li1").click(function () {
    $(this).addClass("active")
    $(".li2, .li3, .li4, .li5").removeClass("active")
  });

  $(".top > ul > .li2").click(function () {
    $(this).addClass("active")
    $(".li1, .li3, .li4, .li5").removeClass("active")
  });

  $(".top > ul > .li3").click(function () {
    $(this).addClass("active")
    $(".li2, .li1, .li4, .li5").removeClass("active")
  });

  $(".top > ul > .li4").click(function () {
    $(this).addClass("active")
    $(".li2, .li1, .li3, .li5").removeClass("active")
  });

  $(".top > ul > .li5").click(function () {
    $(this).addClass("active")
    $(".li2, .li1, .li3, .li4").removeClass("active")
  });

  const room_list = new Swiper(".room_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
  });


  //dining
  const dining_list = new Swiper(".dining_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
    loop: true, // 슬라이드 반복 여부
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
  });
});