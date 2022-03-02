$(document).ready(function () {

    // 펼침기능
    let link_list = $('.link-list');
    let link_bt = $('.link-bt');
    link_bt.click(function () {
        link_list.stop().slideToggle(300);
    });

    // 위로가기 기능
    let gotop = $('.gotop');
    gotop.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500);
    });

    // 위로가기 사라짐 효과
    $(window).scroll(function () {
        // 스크롤 바가 이동한 거리 체크
        let sc = $(window).scrollTop();
        if (sc >= 50) {
            gotop.addClass('gotop-active');
        } else {
            gotop.removeClass('gotop-active');
        }

    });

});

window.onload = function () {

    // 상단 슬라이드
    let sw_visual = new Swiper('.sw-visual', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.sw-visual-next',
            prevEl: '.sw-visual-prev',
        },
        pagination: {
            el: '.sw-visual-pg',
            type: 'fraction',
        },

    });

    let sw_visual_pause = $('.sw-visual-pause');
    sw_visual_pause.click(function () {

        // sw-visual-pause-active 적용 되었는지 true, false
        let temp = $(this).hasClass('sw-visual-pause-active');

        if (temp != true) {
            // 적용이 안되었다. 그래서 적용
            $(this).addClass('sw-visual-pause-active');
            sw_visual.autoplay.stop();
        } else {
            // 적용이 되었다.그래서 적용해제
            $(this).removeClass('sw-visual-pause-active');
            sw_visual.autoplay.start();
        }

    });

    // 알뜰상품 슬라이드
    new Swiper('.sw-sale', {
        slidesPerView: 3,
        spaceBetween: 10,
        // loop: true,
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.sw-sale-next',
            prevEl: '.sw-sale-prev',
        },
        pagination: {
            el: '.sw-sale-pg',
            type: 'fraction',
        },
    });

    // 추천물품 슬라이드
    new Swiper('.sw-copartner', {
        slidesPerView: 3,
        spaceBetween: 10,
        // loop: true,
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.sw-copartner-next',
            prevEl: '.sw-copartner-prev',
        },
        pagination: {
            el: '.sw-copartner-pg',
            type: 'fraction',
        },
    });

    // 추천물품 슬라이드
    new Swiper('.sw-popular', {
        slidesPerView: 7,
        spaceBetween: 10,
        navigation: {
            nextEl: '.popular-slide-next',
            prevEl: '.popular-slide-prev',
        },
    });
    
    // 브랜드 슬라이드
    new Swiper('.sw-brand', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.sw-brand-next',
            prevEl: '.sw-brand-prev',
        },
        pagination: {
            el: '.sw-brand-pg',
            type: 'fraction',
        },
    });

    // 배너 슬라이드
    new Swiper('.sw-banner', {
        slidesPerView: 2,
        spaceBetween: 0,
        navigation: {
            nextEl: '.banner-next',
            prevEl: '.banner-prev',
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 500,
    });

    // 이용후기 슬라이드
    new Swiper('.sw-review', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.sw-review-next',
            prevEl: '.sw-review-prev',
        },
        pagination: {
            el: '.sw-review-pg',
            type: 'fraction',
        },
    });

};