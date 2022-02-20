$(window).ready(function () {
    let gnb = $('.gnb');
    let gnb_li = $('.gnb>li');
    let gnb_a = $('.gnb>li>a');
    let nav = $('.nav');
    let header = $('.header');
    gnb.mouseenter(function(){
        header.addClass('header-on');
    })

    // nav 벗어 나기 전 까지 gnb>li>a 포커스 유지
    gnb_li.eq(0).mouseenter(function(){
        gnb_a.removeClass('gnb-a-focus');
        gnb_li.eq(0).children('a').addClass('gnb-a-focus');
    })
    gnb_li.eq(1).mouseenter(function(){
        gnb_a.removeClass('gnb-a-focus');
        gnb_li.eq(1).children('a').addClass('gnb-a-focus');
    })
    gnb_li.eq(2).mouseenter(function(){
        gnb_a.removeClass('gnb-a-focus');
        gnb_li.eq(2).children('a').addClass('gnb-a-focus');
    })
    gnb_li.eq(3).mouseenter(function(){
        gnb_a.removeClass('gnb-a-focus');
        gnb_li.eq(3).children('a').addClass('gnb-a-focus');
    })
    gnb_li.eq(4).mouseenter(function(){
        gnb_a.removeClass('gnb-a-focus');
        gnb_li.eq(4).children('a').addClass('gnb-a-focus');
    })
    gnb_li.eq(5).mouseenter(function(){
        gnb_a.removeClass('gnb-a-focus');
        gnb_li.eq(5).children('a').addClass('gnb-a-focus');
    })

    nav.mouseleave(function(){
        gnb_a.removeClass('gnb-a-focus');
        header.removeClass('header-on');
    })



    let h_link_menu =$('.header-link-menu');
    let h_link_menu_list =$('.header-link-menu-list');
    let h_link_lang =$('.header-link-lang');
    let h_link_lang_list =$('.header-link-lang-list');

    // 자주찾는 메뉴 언어전환
    h_link_menu.click(function(){
        h_link_menu.toggleClass('header-link-menu-on');
    })
    h_link_lang.click(function(){
        h_link_lang.toggleClass('header-link-lang-on');
    })
})

