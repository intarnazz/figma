var newSwiper = new Swiper ('.review-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        pervtEl: '.swiper-button-prev'
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    // scrollbar:{
    //     el: '.swiper-scrollbar',
    //     draggable: true,
    // },
    slidesPerView: 3,
    spaceBetween: 30,
    // slidersPerGroup: 1,
    centeredSlides: true,
    initialSlide: 1,
    // loop: true
} 
);