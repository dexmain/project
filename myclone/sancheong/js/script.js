window.onload = function() {

    // 공지사항 탭 메뉴
    // 1. 탭의 메뉴들을 저장해야 한다.
    let notice_tab_menu = $('.notice-list li a');
    // 2. 탭의 내용들을 저장해야 한다.
    let notice_tab_contents = $('.notice-box');
    // 3. 탭을 클릭해서 해당 내용을 보여주는 코드가 보여져야 한다.
    $.each(notice_tab_menu, function(index, item) {

        $(this).click(function(event) {

            // a 태그의 href 막기
            event.preventDefault();

            // 내용물이 없는 경우 예외처리
            if(index == 4) {
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
    $.each( quick_tab_menu , function(index, item){
        $(this).click(function(event){
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
    $.each(site_bt, function(index, item){

        // 마우스 아웃 하면 사라지는 상태로 만든다.
        // css에서 padding 으로 조절해주어야 한다.
        $(this).parent().mouseleave(function(){
            // site_link_wrap.removeClass('site-link-wrap-focus');
        });

        $(this).click(function(event) {

            // 이벤트를 밑으로 전달하지 않는다.
            event.stopPropagation();    

            
            // 현재 클릭된것에 site-link-wrap-focus 적용되었나?
            let temp = site_link_wrap.eq(index).hasClass('site-link-wrap-focus');
            if(temp) {
                
                //만약에 현재 클릭된 index 와 같은 경우는
                site_link_wrap.eq(index).removeClass('site-link-wrap-focus');
                // 아이콘을 변경하자.
                site_bt.eq(index).removeClass('site-bt-focus');

            }else{
                //그렇지 않은 경우는
                site_link_wrap.removeClass('site-link-wrap-focus');
                site_bt.removeClass('site-bt-focus');

                site_link_wrap.eq(index).addClass('site-link-wrap-focus');
                site_bt.eq(index).addClass('site-bt-focus');
            }
            
        });
    });

    // 클릭시 목록 숨기기
    $('html, body').click(function(){
        
        site_link_wrap.removeClass('site-link-wrap-focus');
        site_bt.removeClass('site-bt-focus');

    });

};