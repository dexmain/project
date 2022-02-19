$(window).ready(function () {
    let gnb = $('.gnb');
    let gnb_li = $('.gnb>li');
    let gnb_a = $('.gnb>li>a');
    let nav = $('.nav');
    let i;
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
})

