$(window).ready(function () {
    let nav = $('.nav');
    let gnb = $('.gnb');
    let gnb_li = $('.gnb>li');
    let gnb_a = $('.gnb>li>a');
    let sub_menu = $('.sub-menu');
    let header = $('.header');
    let header_main = $('.header-main');
    // 헤더 마우스 호버
    gnb.mouseenter(function () {
        header.addClass('header-on');
        sub_menu.addClass('sub-menu-on');
    })

    // gnb-a-focus
    $.each(gnb_li, function (index, item) {
        $(this).mouseenter(function () {
            let ul_height = $(this).find('ul').height();
            header.addClass('header-on');
            gnb.find('ul').stop().fadeOut(300);
            $(this).find('ul').stop().fadeIn(300);
            header_main.height(ul_height + 100);
            gnb_a.removeClass('gnb-a-focus');
            $(this).children('a').addClass('gnb-a-focus');
        })
    });

    // 헤더 색상 해제
    nav.mouseleave(function () {
        gnb.find('ul').stop().fadeOut(300);
        gnb_a.removeClass('gnb-a-focus');
        header.removeClass('header-on');
        sub_menu.removeClass('sub-menu-on');
        header_main.height(100);
    });

    // 챗봇
    function chatbot_scroll() {
        let sc = $(window).scrollTop();
        let chatbot = $('.chatbot');
        if (sc >= 1) {
            chatbot.addClass('chatbot-scroll');
        } else {
            chatbot.removeClass('chatbot-scroll');
        }
    }
    chatbot_scroll();


    // 자주찾는 메뉴 언어 파트
    let h_link_menu = $('.header-link-menu');
    let h_link_lang = $('.header-link-lang');

    h_link_menu.click(function () {
        h_link_menu.toggleClass('header-link-menu-on');
    });
    h_link_lang.click(function () {
        h_link_lang.toggleClass('header-link-lang-on');
    });

    // 비주얼 슬라이드 오토플레이 on/off 버튼
    let visual_pause = $('.visual-pause');
    let visual_play = $('.visual-play');
    visual_pause.click(function () {
        $(this).toggleClass('visual-play');
        if ($(this).hasClass('visual-play')) {
            visual_swiper.autoplay.stop();
        } else {
            visual_swiper.autoplay.start();
        }
    })
    // 비주얼 팝업 슬라이드 오토플레이 on/off 버튼
    let v_popup_pause = $('.sw-popup-pause');
    v_popup_pause.click(function () {
        $(this).toggleClass('sw-popup-play');
        if ($(this).hasClass('sw-popup-play')) {
            popup_swiper.autoplay.stop();
        } else {
            popup_swiper.autoplay.start();
        }
    })
    // 비주얼 슬라이드 
    var visual_swiper = new Swiper(".sw-visual-slide", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".sw-visual-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
        on: {
            activeIndexChange: function () {
                let visual_control_txt_list = [
                    'KTX 산천 북한강철교 운행',
                    '임진강 철도교량 점검',
                    'KTX 승무원 고객응대',
                    '전동열차 코로나19 방역',
                ];
                let visual_control_txt = $('.visual-control-txt');
                let i = this.realIndex;
                visual_control_txt.html('<span>' + visual_control_txt_list[i] + '</span>');
            }
        }
    });

    // 서치 버튼
    let search_bt = $('.search-bt');
    let search_close_bt = $('.search-close');
    let search_wrap = $('.search-wrap');
    search_bt.click(function () {
        search_wrap.addClass('search-wrap-on');
    });
    search_close_bt.click(function () {
        search_wrap.removeClass('search-wrap-on');
    });

    var quick_swiper = new Swiper(".sw-quick-slide", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".quick-slide-next",
            prevEl: ".quick-slide-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 7,
                spaceBetween: 50,

            },
        },
    });
    // 자주 찾는 메뉴 애니메이션
    function quickOn() {
        let sc = $(window).scrollTop();
        let quick_top = $('.quickmenu').offset().top;
        let quickmenu = $('.quickmenu');
        if (sc >= quick_top / 3) {
            quickmenu.addClass('quickmenu-on');
        } else {
            quickmenu.removeClass('quickmenu-on');
        }
    }
    quickOn();



    $(window).scroll(function () {
        console.log($(window).scrollTop());
        chatbot_scroll();
        quickOn();
    });
    $(window).resize(function () {
        chatbot_scroll();
        quickOn();
    });
})