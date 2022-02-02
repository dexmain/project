$(document).ready(function(){

    // 위로가기 기능
    let gotop = $('.gotop');
    gotop.click(function(){
        $('html, body').stop().animate({
            scrollTop: 0
        }, 400);
    });

    // 위로가기 사라짐 효과
    $(window).scroll(function(){
        // 스크롤 바가 이동한 거리 체크
        let sc = $(window).scrollTop();
        if(sc >= 50) {
            gotop.addClass('gotop-active');
        } else {
            gotop.removeClass('gotop-active');
        }
    });
});