$(document).ready(function () {

    // 전체화면 슬라이드
    let menu = ['home', 'profile', 'portfolio', 'skill', 'MBTI', 'contact']
    let wrap_swiper = new Swiper(".wrap-swiper", {
        effect: 'fade',
        slidesPerView: 1,
        mousewheel: true,
        touchRatio: 0,
        speed: 500,
        pagination: {
            el: ".page-box",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
    });
    // 포트폴리오 슬라이드
    var portfolio_swiper = new Swiper(".portfolio-swiper", {
        slidesPerView: 1,
        loopAdditionalSlides: 1,
        loop: true,
        speed: 300,
        centeredSlides: true,
        spaceBetween: 50,
        navigation: {
            nextEl: ".sw-portfolio-next",
            prevEl: ".sw-portfolio-prev",
        },
    });

    let $port_next = $('.sw-portfolio-next');
    let $port_prev = $('.sw-portfolio-prev');
    let $gear_img = $('.gear img');
    let angle = 0; // 현재의 각도를 변수로 저장
    $port_prev.click(function () {
        angle += +90;
        $gear_img.rotate(angle);
    });
    
    $port_next.click(function () {
        angle += -90;
        $gear_img.rotate(angle);
    });

})