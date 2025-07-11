$(function () {

    //aos 초기화
    AOS.init({
        duration: 2000,
    });



    //portfolio 슬라이드
    const folio = new Swiper(".folio", {
        breakpoints: {
            1500: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 3000,
        loop: true,
    });



    // graphic
    const graphic_list = new Swiper(".graphic_list", {
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼
            prevEl: '.swiper-button-prev', // 이전 버튼
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true, // 버튼 클릭 여부
        },

        breakpoints: {
            768: {
                // 가로해상도가 640px 이상
                slidesPerView: 2, // 한 슬라이드에 보여줄 갯수
                spaceBetween: 40, // 슬라이드 사이 여백
            },
            1300: {
                // 가로해상도가 640px 이상
                slidesPerView: 3, // 한 슬라이드에 보여줄 갯수
                spaceBetween: 100, // 슬라이드 사이 여백
            },
        },
    });
});