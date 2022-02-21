$(document).ready(function () {

    // 하루동안 열지 않기 : 쿠키 구현 예정
    // 배너
    let quick_banner = $('.quick-banner');
    let quick_day_close = $('.quick-day-close');
    quick_day_close.click(function () {
        quick_banner.fadeOut(300);
    });

    // 빠른 서비스 기능
    let quick_link = $('.quick-link');
    let side_bar = $('.side-bar');
    let side_bar_close = $('.side-bar-close');

    // quick_link 를 클릭하면
    // side_bar 에 side-bar-active 클래스를 
    // addClass 한다.  
    quick_link.click(function () {
        side_bar.addClass('side-bar-active');

    });
    side_bar_close.click(function () {
        side_bar.removeClass('side-bar-active');
    });

    // language 기능
    let language = $('#language');
    let language_wrap = $('.language-wrap');
    // laguage 클릭하면 language_wrap 에 
    // language-wrap-active 를 addClass 한다.
    language.click(function (event) {
        event.preventDefault();
        // language_wrap.addClass('language-wrap-active');
        language_wrap.toggleClass('language-wrap-active');
    });

    language_wrap.mouseleave(function () {
        language_wrap.removeClass('language-wrap-active');
    });

    // 사이트 검색 기능
    let site_search = $('#site-search');
    let site_search_wrap = $('.site-search-wrap');
    let site_search_txt = $('.site-search-txt');
    let site_search_bt = $('.site-search-bt');


    site_search.click(function (event) {
        event.preventDefault();
        // 버튼을 보이게 한다.
        site_search_bt.show();

        site_search_txt.addClass('site-search-active');
        site_search_txt.focus();
        // 언어 목록 숨기기
        language_wrap.removeClass('language-wrap-active');
    });
    site_search_bt.click(function(e){
        e.preventDefault();
        setTimeout(function(){
            site_search_bt.hide();
            site_search_txt.val('');
        }, 200)
        site_search_txt.removeClass('site-search-active');
    })

    // 주메뉴 고정 기능
    let header = $('.header');
    let main = $('.main');

    // 고정시킬 위치
    let fix_y = $('.quick-menu').height();
    // console.log(fix_y);    

    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos >= fix_y) {
            header.addClass('header-fixed');
            main.addClass('main-acitve');
        } else {
            header.removeClass('header-fixed');
            main.removeClass('main-acitve');
        }
    });

    // 위로가기
    let gotop = $('.gotop');
    gotop.click(function () {
        $('html').animate({
            scrollTop: 0
        }, 500)
    });

    // PNUH 네트워크   
    let pnuh_bt = $('#pnuh-bt');
    let pnuh_popup = $('.pnuh-popup');
    let pnuh_close = $('.pnuh-close');
    let pnuh_wrap = $('.pnuh-wrap');

    // 모션관련 (1000은 1초)
    let show_speed = 300;
    let hide_speed = 100;

    // 아래쪽은 수정하지 마세요.
    pnuh_bt.click(function (event) {
        event.preventDefault();
        pnuh_popup.fadeIn(show_speed);
    });

    pnuh_close.click(function () {
        pnuh_popup.fadeOut(hide_speed);
    });

    pnuh_wrap.click(function (event) {
        // 이벤트 전달 막기
        event.stopPropagation();
    });

    pnuh_popup.click(function (event) {
        pnuh_popup.fadeOut(hide_speed);
    });

    // 건강정보 관련
    let health_data = [
        'good.html@@ h_sample.png@@ 건강@@ 병원보@@ 2022년 생명사랑 겨울호',
        '#@@ image_01.png@@ 건강@@ 블로그-의료정보@@ 혹시 나도 우울증일까? 우울증 극복하기',
        '#@@ image_02.png@@ 건강@@ Youtube@@ 이동형 병원 진료 시스템? 그게 뭐예요?',
        '#@@ image_03.png@@ 건강@@ Youtube@@ 제7회 하모니카 콘서트',
        '#@@ image_04.png@@ 건강@@ Youtube@@ 열명 중 한 명? 건선관절염의 증상과 치료',
        '#@@ image_05.png@@ 건강@@ instagram@@ #로봇수술센터 #부울경최초 #다빈치로봇수술2000례',
        '#@@ image_06.png@@ 건강@@ Youtube@@ 35세 이상 고령임신 어떻게 준비 하나요?',
        '#@@ image_07.png@@ 건강@@ 블로그-의료정보@@ 아무도 알려주지 않은 폐암의 진실',
        '#@@ image_08.png@@ 건강@@ 블로그-의료정보@@ 유행성 이하선염, 아이들을 노리는 봄철 감염병',
        '#@@ image_09.png@@ 건강@@ Youtube@@ 올바른 코 세척 방법',
        '#@@ image_10.png@@ 건강@@ Youtube@@ [항암치료 식생활 2편]어떻게 먹어야 하나요?',
        '#@@ image_11.png@@ 건강@@ 블로그-의료정보@@ 파킨슨병은 무엇인가?! 증상부터 치료까지',
        '#@@ image_12.png@@ 건강@@ Youtube@@ Ocean View 맛집! PNUH 인재개발원',
        '#@@ image_13.png@@ 건강@@ Youtube@@ [포스트코로나 미래 발전 전략_3강] 언택트 테크놀로지',
        '#@@ image_14.png@@ 건강@@ Youtube@@ 키미x보미와 함께하는 코로나 극복 응원',
        '#@@ image_15.png@@ 건강@@ Youtube@@ [항암치료 식생활 1편]어떻게 먹어야 하나요?'
    ];
    // health-list 를 저장한다.
    let health_list = $('.health-list');

    // 목록이 몇개 인지를 저장한다.
    let health_total = health_data.length;

    // for 구문을 돌려서 innerHtml 문장을 완성한다.
    let health_html = '';

    // 한 목록당 8개씩 출력하는 알고리즘.    
    let page_per = 8; // 페이지당 8개;

    // 전체 페이지를 카운팅 하기 위한 기준   
    // 소숫점이 나오면 올림을 해준다. 
    let page_total = Math.ceil(health_total / page_per);

    // 현재 페이지 수 카운팅
    let page_now = 1;

    // 페이지에서 보여줄 범위
    let page_show_start = 0;

    // 실제로 보여줄 내용 
    let page_html = '';

    // 페이지당 보여줄 범위 결정 함수
    function pageScope() {


        let start = page_show_start; // 0
        let end = page_show_start + page_per; // 8

        // 현재 페이지 숫자가 전체 페이지 숫자 보다 증가하면안된다.
        if (end > health_total) {
            return;
        }


        for (let i = start; i < end; i++) {
            page_html = page_html + parseData(health_data[i]);
            page_show_start = page_show_start + 1;
        }

        health_list.html(page_html);
    }

    // html 을 생성하는 함수 기능
    function parseData(_data) {

        // 글자를 @@ 으로 분리하여서 배열을 만든다.    
        let temp_arr = _data.split('@@');

        // 각각의 요소들을 공백을 제거한다.
        let link = temp_arr[0].trim();
        let img = 'images/' + temp_arr[1].trim();
        let alt = temp_arr[2].trim();
        let cate = temp_arr[3].trim();
        let title = temp_arr[4].trim();

        // 실제 html 로 사용할 글자를 만든다.
        let temp_html = '<div class="health-box">';

        // a 태그를 생성한다.
        temp_html = temp_html + '<a href=';
        temp_html = temp_html + link;
        temp_html = temp_html + ' ';
        temp_html = temp_html + 'alt=';
        temp_html = temp_html + alt;
        temp_html = temp_html + '>';

        // 이미지가 들어간다.
        temp_html = temp_html + '<span class="health-img">';
        temp_html = temp_html + '<img src=';
        temp_html = temp_html + img;
        temp_html = temp_html + '>';
        temp_html = temp_html + '</span>';

        // 카테고리 출력
        temp_html = temp_html + '<span class="health-cate">';
        temp_html = temp_html + cate;
        temp_html = temp_html + '</span>'

        // 타이틀 출력
        temp_html = temp_html + '<span class="health-tit">';
        temp_html = temp_html + title;
        temp_html = temp_html + '</span>';

        temp_html = temp_html + '</a>'
        temp_html = temp_html + '</div>';

        return temp_html;
    }

    pageScope();

    // 더보기 버튼 기능
    let health_more = $('#health-more');
    health_more.click(function (event) {
        event.preventDefault();
        pageScope();
    });

    // 목록초기화 기능
    // $('.health h2').click(function(){
    //     pageReset();
    // });

    // function pageReset() {
    //    page_show_start = 0;
    //    page_html = '';
    //    pageScope();
    // }   

});

//모든 리소스 로딩 완료
window.onload = function () {

};