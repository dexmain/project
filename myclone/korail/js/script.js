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
    let h_link_menu_list = $('.header-link-menu-list');
    let h_link_lang = $('.header-link-lang');
    let h_link_lang_list = $('.header-link-lang-list');

    // 자주찾는 메뉴 언어전환
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
    let v_popup_play = $('.sw-popup-play');
    v_popup_pause.click(function () {
        $(this).toggleClass('sw-popup-play');
        if ($(this).hasClass('sw-popup-play')) {
            popup_swiper.autoplay.stop();
        } else {
            popup_swiper.autoplay.start();
        }
    })
    // let swiper_bullet = $('.swiper-pagination-bullet');
    // let visual_control_txt = $('.visual-control-txt');
    // $.each(swiper_bullet, function (index, item) {
    //     if ($(this).hasClass('swiper-pagination-bullet-active')) {
    //         console.log(1);
    //         visual_control_txt.eq(index).addClass('visual-control-txt-active');
    //     }
    // })d
})