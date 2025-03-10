window.onload = function () {

    // aos 관련
    AOS.init({
        once: true
    });
    // 모달창
    let $modal = $('.modal');
    let $modal_close = $('.modal-close');
    $modal_close.click(function(){
        $('html').css('overflow-y','auto');
        $modal.fadeOut(300);
    });
    // 패밀리 사이트 기능
    let family_hide = $('.family-hide');
    let family_wrap =  $('.family-wrap');
    let family = $('.family');

    family_hide.click(function(){
        family_wrap.fadeOut(300);
        // 스크롤바 디폴트 처리
        $('html').css('overflow-x', 'hidden');
        $('html').css('overflow-y', 'auto');
    });
    
    family.click(function(){
        family_wrap.fadeIn(300);
        // 스크롤바 없애기
        $('html').css('overflow', 'hidden');
    });

    // 비주얼 슬라이드
    let sw_visual = new Swiper('.sw-visual', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed: 500,
        loop: true,
        navigation: {
            prevEl: '.sw-visual-prev',
            nextEl: '.sw-visual-next',
        },
        autoplay: {
            delay: 2000,
            disableOninteraction: false,
        },        
        touchRatio: 0.05,
        pagination: {
            el: '.sw-visual-pg',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '<span class="' + totalClass + '"></span>';
            }
        }

    });

    let sw_visual_pause = $('.sw-visual-pause');
    sw_visual_pause.click(function(){
        let temp = $(this).hasClass('sw-visual-pause-active');
        if(temp != true) {
            $(this).addClass('sw-visual-pause-active');
            sw_visual.autoplay.stop();
        }else{
            $(this).removeClass('sw-visual-pause-active');
            sw_visual.autoplay.start();
        }
    });

    // 팝업존 슬라이드
    let sw_notice_data = [
        {
            'imgurl': 'popup_slide_01.png',
            'alt' : '팝업존',
            'link' : '#',
            'target': '_self'
        },
        {
            'imgurl': 'popup_slide_02.png',
            'alt' : '팝업존',
            'link' : '#',
            'target': '_self'
        },
        {
            'imgurl': 'popup_slide_03.png',
            'alt' : '팝업존',
            'link' : '#',
            'target': '_self'
        },
        {
            'imgurl': 'popup_slide_04.png',
            'alt' : '팝업존',
            'link' : '#',
            'target': '_self'
        },
        {
            'imgurl': 'popup_slide_05.png',
            'alt' : '팝업존',
            'link' : '#',
            'target': '_self'
        },
        {
            'imgurl': 'popup_slide_06.png',
            'alt' : '팝업존',
            'link' : '#',
            'target': '_self'
        },
        {
            'imgurl': 'popup_slide_07.png',
            'alt' : '팝업존',
            'link' : '#',
            'target': '_self'
        },
        {
            'imgurl': 'popup_slide_08.png',
            'alt' : '팝업존',
            'link' : '#',
            'target': '_self'
        },
        {
            'imgurl': 'popup_slide_09.png',
            'alt' : '팝업존',
            'link' : '#',
            'target': '_self'
        },
        {
            'imgurl': 'popup_slide_10.png',
            'alt' : '팝업존',
            'link' : '#',
            'target': '_self'
        }
    ];
    
    // 팝업존 목록 총 개수
    let sw_notice_total = sw_notice_data.length;

    // html 만들기
    let sw_notice_html = '';
    for(let i = 0; i < sw_notice_total; i++){

        let temp_data = sw_notice_data[i];

        sw_notice_html = sw_notice_html + '<div class=swiper-slide>';

        
        sw_notice_html = sw_notice_html + '<a href=';

        sw_notice_html = sw_notice_html + temp_data.link;

        sw_notice_html = sw_notice_html + '>';

        sw_notice_html = sw_notice_html + '<img src=images/';
        sw_notice_html = sw_notice_html + temp_data.imgurl;
        sw_notice_html = sw_notice_html + ' alt=';
        sw_notice_html = sw_notice_html + temp_data.alt;
        sw_notice_html = sw_notice_html + ' class=sw-notice-link>';
        
        sw_notice_html = sw_notice_html + '</a>';

        sw_notice_html = sw_notice_html + '</div>';
    }


    // 실제로 내용물 넣기
    let sw_notice_wrapper = $('.sw-notice .swiper-wrapper');
    sw_notice_wrapper.html(sw_notice_html);

    let sw_notice = new Swiper('.sw-notice',{
        autoplay: {
            delay: 2000, 
            disableOninteraction: false,
        },
        loop: true,
        slidesPerView: 2,
        spaceBetween: 0,
        navigation: {
            nextEl: '.sw-notice-next',
            prevEl: '.sw-notice-prev',
        },
        pagination: {
            el: '.sw-notice-pg',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '<span class="' + totalClass + '"></span>';
            }
        }
    });

    let sw_notice_pause = $('.sw-notice-pause');
    sw_notice_pause.click(function(){
        let temp = $(this).hasClass('sw-notice-pause-active');
        if(temp != true) {
            $(this).addClass('sw-notice-pause-active');
            sw_notice.autoplay.stop();
        }else{
            $(this).removeClass('sw-notice-pause-active');
            sw_notice.autoplay.start();
        }
    });

    // 자주 찾는 서비스 슬라이드
    let sw_service = new Swiper(".sw-service", {
        navigation: {
            nextEl: ".sw-service-next",
            prevEl: ".sw-service-prev",
        },
        slidesPerView: 9,
        loop: true,
        slidesPerGroup: 9,
    });

    // 투어 슬라이드 1
    let sw_tour_1 = new Swiper('.sw-tour-1', {
        slidesPerView: 3,
        allowTouchMove : false,
        navigation: {
            prevEl: '.sw-tour-1 .sw-tour-prev',
            nextEl: '.sw-tour-1 .sw-tour-next',
        },
        observer: true,
        observeParents: true,
    });
    let sw_tour_2 = new Swiper('.sw-tour-2', {
        slidesPerView: 3,
        allowTouchMove : false,
        navigation: {
            prevEl: '.sw-tour-2 .sw-tour-prev',
            nextEl: '.sw-tour-2 .sw-tour-next',
        },
        observer: true,
        observeParents: true,
    });
    let sw_tour_3 = new Swiper('.sw-tour-3', {
        slidesPerView: 3,
        allowTouchMove : false,
        navigation: {
            prevEl: '.sw-tour-3 .sw-tour-prev',
            nextEl: '.sw-tour-3 .sw-tour-next',
        },
        observer: true,
        observeParents: true,
    });

    // 산청투어 탭메뉴
    let tour_menu = $('.tour-menu-list a');
    let tour_list = $('.tour-slide .swiper-container');
    // 현재 선택된 슬라이드 순서번호
    let tour_show_index;

    $.each(tour_menu, function(index, item) {
        $(this).click(function(event){  
            event.preventDefault();
            tourSelect(index);
        });
    });

    function tourSelect(_index){
        // 동일한 슬라이드를 보려고 하는 경우는 실행 하지 않는다.
        if(_index == tour_show_index) {
            return;
        }
        // 보이는 슬라이드 번호 업데이트
        tour_show_index = _index;

        tour_menu.removeClass('tour-menu-focus');
        tour_menu.eq(_index).addClass('tour-menu-focus');

        tour_list.stop().hide();
        tour_list.eq(_index).fadeIn();

        // 슬라이드 목록은 항상 처음 부터 실행
        sw_tour_1.slideTo(0);
        sw_tour_2.slideTo(0);
        sw_tour_3.slideTo(0);
    }

    // 시작하면 1개는 보여주자.
    tourSelect(0);

    // 배너 슬라이드
    let sw_banner = new Swiper('.sw-banner', {
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        speed: 500,
        navigation: {
            prevEl: '.sw-banner-prev',
            nextEl: '.sw-banner-next',
        }
    });

    // 메뉴기능
    let gnb_a = $('.gnb li a');
    let gnb_li = $('.gnb > li');

    let submenu_tit = $('.submenu-tit');
    let submenu_tit_img = $('.submenu-tit-img');
    let submenu_list_box = $('.submenu-list-box');
    let submenu_part_box = $('.submenu-part-box');
    let submenu_wrap = $('.submenu-wrap');
    let submenu_wrap_height = [565, 510, 720, 430, 700, 235];
    let header_bottom = $('.header-bottom');
    let header = $('.header');
    let header_line = $('.header-line');
    // 선택된 메뉴를 저장한다.
    let header_index = 10000;
    
    $.each(gnb_a, function(index, item){
        
        $(this).mouseenter(function(){

            if(index == header_index) {
                return;
            }
            header_index = index;

            // 포커스 유지
            gnb_a.removeClass('gnb-focus');
            gnb_a.eq(index).addClass('gnb-focus');

            gnb_li.removeClass('gnb-li-focus');
            gnb_li.eq(index).addClass('gnb-li-focus');

            header_line.addClass('header-line-focus');


            submenu_wrap.css('height', submenu_wrap_height[index]);

            submenu_tit.hide();
            submenu_tit.eq(index).stop().fadeIn(200);

            submenu_tit_img.hide();
            submenu_tit_img.eq(index).stop().fadeIn(200);

            submenu_list_box.hide();
            submenu_list_box.eq(index).stop().fadeIn(200);

            submenu_part_box.hide();
            if(index == 5) {
                submenu_part_box.stop().fadeIn(200);
            }

            header.addClass('header-focus');

        });

    });

    header_bottom.mouseleave(function(){
        submenu_wrap.css('height', 0); 
        header.removeClass('header-focus');
        header_index = 10000;
        // 포커스 해제
        gnb_a.removeClass('gnb-focus');
        gnb_li.removeClass('gnb-li-focus');
        header_line.removeClass('header-line-focus');
    });

    // 공지사항 탭 메뉴
    // 1. 탭의 메뉴들을 저장해야 한다.
    let notice_tab_menu = $('.notice-list li a');
    // 2. 탭의 내용들을 저장해야 한다.
    let notice_tab_contents = $('.notice-box');
    // 3. 탭을 클릭해서 해당 내용을 보여주는 코드가 보여져야 한다.
    $.each(notice_tab_menu, function (index, item) {

        $(this).click(function (event) {

            // a 태그의 href 막기
            event.preventDefault();

            // 내용물이 없는 경우 예외처리
            if (index == 4) {
                return;
            }

            // 메뉴의 포커스를 제거한다.
            notice_tab_menu.removeClass('notice-list-focus')
            notice_tab_menu.eq(index).addClass('notice-list-focus');

            // 내용의 포커스를 제거한다.
            notice_tab_contents.removeClass('notice-box-focus');
            notice_tab_contents.eq(index).addClass('notice-box-focus');
        });

    });

    // 퀵메뉴 항목 관련 탭 메뉴
    // 1. 퀵메뉴 항목 탭 메뉴를 저장한다.
    let quick_tab_menu = $('.quick-menu-list li a');
    // 2. 퀵메뉴 항목 탭 내용을 저장한다.
    let quick_tab_contents = $('.quick-list');
    // 2-1. 설명글 내용을 저장한다.
    let quick_tab_txt = $('.quick-desc span');

    // 3. 퀵메뉴 항목 탭 메뉴를 클릭하면 내용을 보여준다.
    $.each(quick_tab_menu, function (index, item) {
        $(this).click(function (event) {
            // a 태그의 href 막기
            event.preventDefault();
            // 탭메뉴
            quick_tab_menu.removeClass('quick-menu-focus');
            quick_tab_menu.eq(index).addClass('quick-menu-focus');

            quick_tab_menu.removeClass('quick-menu-focus-icon-1');
            quick_tab_menu.eq(index).addClass('quick-menu-focus-icon-1');

            // 탭의 설명
            quick_tab_txt.removeClass('quick-desc-focus');
            quick_tab_txt.eq(index).addClass('quick-desc-focus');

            // 탭의 내용
            quick_tab_contents.removeClass('quick-list-focus');
            quick_tab_contents.eq(index).addClass('quick-list-focus');

        });
    });

    // 하단 site-link 기능
    // 1. 하단 버튼들을 저장한다.
    let site_bt = $('.site-bt');

    // 2. 하단 내용들을 저장한다.
    let site_link_wrap = $('.site-link-wrap');

    // 3. site_bt 를 클릭하면 내용을 보여준다.
    $.each(site_bt, function (index, item) {

        // 마우스 아웃 하면 사라지는 상태로 만든다.
        // css에서 padding 으로 조절해주어야 한다.
        $(this).parent().mouseleave(function () {
            // site_link_wrap.removeClass('site-link-wrap-focus');
        });

        $(this).click(function (event) {

            // 이벤트를 밑으로 전달하지 않는다.
            event.stopPropagation();


            // 현재 클릭된것에 site-link-wrap-focus 적용되었나?
            let temp = site_link_wrap.eq(index).hasClass('site-link-wrap-focus');
            if (temp) {

                //만약에 현재 클릭된 index 와 같은 경우는
                site_link_wrap.eq(index).removeClass('site-link-wrap-focus');
                // 아이콘을 변경하자.
                site_bt.eq(index).removeClass('site-bt-focus');

            } else {
                //그렇지 않은 경우는
                site_link_wrap.removeClass('site-link-wrap-focus');
                site_bt.removeClass('site-bt-focus');

                site_link_wrap.eq(index).addClass('site-link-wrap-focus');
                site_bt.eq(index).addClass('site-bt-focus');
            }

        });
    });

    // 클릭시 목록 숨기기
    $('html, body').click(function () {

        site_link_wrap.removeClass('site-link-wrap-focus');
        site_bt.removeClass('site-bt-focus');

    });

};