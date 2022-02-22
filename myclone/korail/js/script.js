$(window).ready(function () {
    let gnb = $('.gnb');
    let gnb_li = $('.gnb>li');
    let gnb_a = $('.gnb>li>a');
    let nav = $('.nav');
    let header = $('.header');
    gnb.mouseenter(function () {
        header.addClass('header-on');
    })

    // gnb-a-focus
    $.each(gnb_li, function (index, item) {
        $(this).mouseenter(function () {
            gnb_a.removeClass('gnb-a-focus');
            $(this).children('a').addClass('gnb-a-focus');
        })
    });

    // 헤더 색상 해제
    nav.mouseleave(function () {
        gnb_a.removeClass('gnb-a-focus');
        header.removeClass('header-on');
    });



    let h_link_menu = $('.header-link-menu');
    let h_link_lang = $('.header-link-lang');

    // 자주찾는 메뉴 언어 파트
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
})