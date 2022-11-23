const swiperPromos = new Swiper(".slider-detail", {
    direction: "vertical",
    // loop: false,
    autoplay: false,
    slidesPerView: "auto",
    grabCursor: false,
    freeMode: false,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

window.onresize = () => {};
