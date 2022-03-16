$(document).ready(function () {
    
    // wrap-slide
    let menu = ['home', 'profile', 'portfolio','skill','MBTI','contact']
    let swiper = new Swiper(".wrap-swiper", {
        effect:'fade',
        slidesPerView: 1,
        mousewheel: true,
        speed: 500,
        pagination: {
            el: ".page-box",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },

    });
})