$(function () {

  //banner
  const banner_list = new Swiper(".banner_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
  });



  //promise
  const left_slide = new Swiper(".left_slide", {
    direction: "vertical",
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      1200: {
        // 가로해상도가 640px 이상
        slidesPerView: 2, // 한 슬라이드에 보여줄 갯수
      },
    },
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

  //recommend
  const re_list = new Swiper(".re_list", {
    slidesPerView: 1.5, // 한 슬라이드에 보여줄 갯수
    spaceBetween: 20,
    breakpoints: {
      768: {
        // 가로해상도가 640px 이상
        slidesPerView: 2.5, // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20, // 슬라이드 사이 여백
      },
      1200: {
        // 가로해상도가 768px 이상
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });


  //us
  const us_list = new Swiper(".us_list", {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
  });


})