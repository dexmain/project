window.onload = function(){
    // gnb 기능
    // 1.nav 를 저장한다.
    let nav = $('.nav');
    // 2.gnb 를 저장한다.
    let gnb = $('.gnb');
    // 3.head 를 저장한다.
    let header = $('.header');
    // 4. gnb 에 마우스 오버를 하면 .header 가 늘어난다.
    gnb.mouseenter(function(){
        header.addClass('header-active');
    });
    // 5. gnb 에 마우스 아웃을 하면 .header 가 줄어난다.
    gnb.mouseleave(function(){
        header.removeClass('header-active');
    });
}