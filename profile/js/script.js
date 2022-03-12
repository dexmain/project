$(document).ready(function () {
    var swiper = new Swiper(".wrap-swiper", {
        slidesPerView: 1,
        mousewheel: true,
        speed:500,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})