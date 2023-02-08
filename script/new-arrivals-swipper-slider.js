const swiperNewArrivals = new Swiper('.new-arrivals__swiper', {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    grabCursor: true,

    slideToClickedSlide: true,
});