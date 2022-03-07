$(document).ready(function () {
    let $header = $('.header');
    let $gnb_field = $('.gnb-field');
    let $gnb_li = $('.gnb>li');
    let $submenu = $('.submenu');
    let $kor = $('.kor');
    let $eng = $('.eng');
    let $eng_area = $('.eng-area');
    let $language = $('.language');
    let $planet = $('.planet');

    // 섹션
    let $visual = $('.visual');
    let $visual_txt = $('.visual-txt');
    let $product = $('.product');
    let $business = $('.business');

    // Y 좌표
    let $businessTop = $business.offset().top;
    let $productTop = $product.offset().top;
    // 높이
    let $visual_h = $visual.height();
    let $business_h = $business.height();
    // let $submenu_col = $('.submenu-col');
    // let $submenu_row = $('.submenu-row');


    // li on
    $submenu.hide();
    $gnb_field.hide();
    $.each($gnb_li, function (index, item) {
        $gnb_li.eq(index).mouseenter(function () {
            $gnb_li.removeClass('li-on');
            $(this).addClass('li-on');
            $gnb_field.fadeIn(300);
            $submenu.stop().fadeOut(300);
            $submenu.eq(index).stop().fadeIn(300);
            if (index == 0) {
                $gnb_field.css('height', 210);
            } else {
                $gnb_field.css('height', 72);
            }

        });
    });
    // li off
    $header.mouseleave(function () {
        $submenu.hide();
        $gnb_field.fadeOut(300);
        $gnb_field.css('height', 0);

    })

    // 언어 모드 변경 
    $kor.click(function () {
        $language.toggleClass('lang-active');
    })

    // 헤더 스크롤
    $(window).scroll(function () {
        let sc = $(window).scrollTop();
        let bool = sc >= 50;

        $header.toggleClass('down', bool);
    });
    // 윈도우 스크롤 
    $(window).scroll(function () {
        var scrollBottom = $(window).scrollTop() + $(window).height() + 30;
        // 비즈니스 애니메이션 (행성 이미지 & 비즈니스 아이템)
        let sc = $(window).scrollTop();
        let bool = scrollBottom >= $visual_h + $business_h / 1.8;
        let planet_bool = sc >= $visual_h / 4;
        $business.toggleClass('business-active', bool);
        $planet.toggleClass('planet-active', planet_bool);
    });

    function universe() {
        var scrollBottom = $(window).scrollTop() + $(window).height() + 30;


        let bool = scrollBottom >= $productTop;
        let updown = scrollBottom - $productTop;
        if (bool == true) {
            $product.css('background-position-y', -410 + (updown / 2));
        }
    }
    universe();
    $(window).scroll(function () {
        universe();
    })

    function visual_txt() {
        $visual_txt.addClass('txt-up');
    }

    // product 슬라이드
    let $orbit = $('.orbit');
    let $satl_road = $('.satl-road');
    let $satellite = $('.satellite');

    var orbitSwiper = new Swiper('.sw-orbit', {
        effect: "fade",

        pagination: {
            el: '.sw-pg',
            type: 'progressbar',
        },
        fadeEffect: {
            crossFade: true,
        },
        on: {
            activeIndexChange: function () {
                $satl_road.children('a').removeClass('point-active');
                $satl_road.children('a').eq(this.realIndex).addClass('point-active');
            }
        },
    })

    function slideAuto() {
        let sate_margin = $satellite.css('margin-bottom');
        let num = Math.floor(parseFloat(sate_margin));
        if(num == 0){

        }
        else {
            orbitSwiper.slideTo((num-1) % 5, 1000, true);
        }
    }
    $satl_road.find('a').click(function () {
        let i = $(this).index();
        console.log(i);
        $satellite.removeClass('p0 p1 p2 p3 p4');
        $satellite.hide();
        $satellite.addClass('p' + i);
        orbitSwiper.slideTo(i, 1000, true);
    });
    $orbit.mouseleave(function(){
        $satellite.fadeIn(300);
    })
    setInterval(slideAuto, 100);


    visual_txt();
});