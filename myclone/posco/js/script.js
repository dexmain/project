$(document).ready(function () {

    // 위로가기 기능
    let gotop = $('.gotop');
    var height = document.getElementById('v1').style.height;
    console.log(height);
    gotop.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 400);
    });
    let page1 = $('.page-1');
    page1.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 400);
    });
    let page2 = $('.page-2');
    page2.click(function () {
        $('html, body').stop().animate({
            scrollTop : 789
        }, 400);
    });
    let page3 = $('.page-3');
    page3.click(function () {
        $('html, body').stop().animate({
            scrollTop: 789*2
        }, 400);
    });
    let page4 = $('.page-4');
    page4.click(function () {
        $('html, body').stop().animate({
            scrollTop: 789*3
        }, 400);
    });
    let page5 = $('.page-5');
    page5.click(function () {
        $('html, body').stop().animate({
            scrollTop: 789*4
        }, 400);
    });

    // 위로가기 사라짐 효과
    $(window).scroll(function () {
        // 스크롤 바가 이동한 거리 체크
        let sc = $(window).scrollTop();
        if (sc >= 50) {
            gotop.addClass('gotop-active');
        } else {
            gotop.removeClass('gotop-active');
        }
    });
});
$(function () {
    var $header = $('header'); //헤더를 변수에 넣기
    var $gnb = $('gnb');
    var $page = $('.header-point'); //색상이 변할 부분
    var $window = $(window);

    var pageOffsetTop = $page.offset().top; //색상 변할 부분의 top값 구하기
    $window.resize(function () { //반응형을 대비하여 리사이즈시 top값을 다시 계산
        pageOffsetTop = $page.offset().top;
    });


    $window.on('scroll', function () { //스크롤시
        var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
        $header.toggleClass('down', scrolled); //클래스 토글
    });

});

function Buttontoggle() {
    var body = document.getElementById("main");
    var mode = document.getElementById("modechanger");
    var modeval = mode.value;
    if (modeval == 'true') {
        mode.setAttribute('value', 'false');
    } else {
        mode.setAttribute('value', 'true');
    }
    body.classList.toggle("darkmode");
}