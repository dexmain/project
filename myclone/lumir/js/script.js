$(document).ready(function () {
    let $header = $('.header');
    let $gnb_field = $('.gnb-field');
    let $gnb_li = $('.gnb>li');
    let $submenu = $('.submenu');
    // let $submenu_col = $('.submenu-col');
    // let $submenu_row = $('.submenu-row');
    $.each($gnb_li, function (index, item) {
        $gnb_li.eq(index).mouseenter(function () {
            $gnb_li.removeClass('li-on');
            $(this).addClass('li-on');
            $submenu.find('li').stop().fadeOut(300);
            $submenu.eq(index).find('li').stop().fadeIn(300);
            if(index == 0){
                $gnb_field.css('height',210);
            }
            else{
                $gnb_field.css('height',72);
            }

        });
    });
    $header.mouseleave(function(){
        $gnb_li.removeClass('li-on');
        $gnb_field.css('height',0);
    })

})