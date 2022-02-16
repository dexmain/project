$(document).ready(function () {


    // 페이징 바
    let page1 = $('.page-1');
    page1.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 400);
    });

    var location2 = document.querySelector(".business").offsetTop;
    var location3 = document.querySelector(".product").offsetTop;
    var location4 = document.querySelector(".esg").offsetTop;
    var location5 = document.querySelector(".news").offsetTop;
    var screenH = screen.height;

    let page2 = $('.page-2');
    page2.click(function () {
        window.scrollTo({
            top: location2,
            behavior: 'smooth'
        });
    });

    let page3 = $('.page-3');
    page3.click(function () {
        window.scrollTo({
            top: location3,
            behavior: 'smooth'
        });
    });

    let page4 = $('.page-4');
    page4.click(function () {
        window.scrollTo({
            top: location4,
            behavior: 'smooth'
        });
    });
    let page5 = $('.page-5');
    page5.click(function () {
        window.scrollTo({
            top: location5,
            behavior: 'smooth'
        });
    });
    // 페이징바 포커싱
    function pageFocus() {
        var winY = window.pageYOffset;
        if (winY < location2-4 && winY >= 0) {
            page1.addClass('page-focus');
            page2.removeClass('page-focus');
            page3.removeClass('page-focus');
            page4.removeClass('page-focus');
            page5.removeClass('page-focus');
        } else if (winY < location3-1 && winY >= location2-1) {
            page1.removeClass('page-focus');
            page2.addClass('page-focus');
            page3.removeClass('page-focus');
            page4.removeClass('page-focus');
            page5.removeClass('page-focus');
        } else if (winY < location4-1 && winY >= location3-1) {
            page1.removeClass('page-focus');
            page2.removeClass('page-focus');
            page3.addClass('page-focus');
            page4.removeClass('page-focus');
            page5.removeClass('page-focus');
        } else if (winY < location5-1 && winY >= location4-1) {
            page1.removeClass('page-focus');
            page2.removeClass('page-focus');
            page3.removeClass('page-focus');
            page4.addClass('page-focus');
            page5.removeClass('page-focus');
        } else if (winY >= location5) {
            page1.removeClass('page-focus');
            page2.removeClass('page-focus');
            page3.removeClass('page-focus');
            page4.removeClass('page-focus');
            page5.addClass('page-focus');
        }
        console.log(winY,location2-5,location3-5,location4);
    }
    window.addEventListener('scroll', function () {
        pageFocus();
    });
    pageFocus();






    // 위로가기 기능
    let gotop = $('.gotop');
    gotop.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
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