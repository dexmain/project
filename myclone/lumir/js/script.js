$(document).ready(function () {
    let $header = $('.header');
    let $gnb_field = $('.gnb-field');
    let $gnb_li = $('.gnb>li');
    let $submenu = $('.submenu');
    let $kor = $('.kor');
    let $eng = $('.eng');
    let $eng_area = $('.eng-area');
    let $language = $('.language');
    let $visual_txt = $('.visual-txt');

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
        
        $header.toggleClass('down',bool);
    });
    function visual_txt(){
        $visual_txt.addClass('txt-up');
    }
    visual_txt();
})