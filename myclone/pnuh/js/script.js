$(document).ready(function () {
    // PNUH 네트워크   
    let pnuh_bt = $('#pnuh-bt');
    let pnuh_popup = $('.pnuh-popup');
    let pnuh_close = $('.pnuh-close');
    let pnuh_wrap = $('.pnuh-wrap');

    // 모션관련 (1000은 1초)
    let show_speed = 300;
    let hide_speed = 100;

    // 아래쪽은 수정하지 마세요.
    pnuh_bt.click(function(event){
        event.preventDefault(); 
        pnuh_popup.fadeIn(show_speed);       
    });

    pnuh_close.click(function(){
        pnuh_popup.fadeOut(hide_speed);
    });

    pnuh_wrap.click(function(event){
        // 이벤트 전달 막기
        event.stopPropagation();        
    });

    pnuh_popup.click(function(event){        
        pnuh_popup.fadeOut(hide_speed);
    });

    // 건강정보 관련
    let health_data = [
        '#@@ h_sample.png@@ 건강@@ 2022년 생명사랑 겨울호',
        '#@@ image_01.png@@ 건강@@ 블로그-의료정보@@ 혹시 나도 우울증일까? 우울증 극복하기',
        '#@@ image_02.png@@ 건강@@ Youtube@@ 이동형 병원 진료 시스템? 그게 뭐예요?',
        '#@@ image_03.png@@ 건강@@ Youtube@@ 제7회 하모니카 콘서트',
        '#@@ image_04.png@@ 건강@@ Youtube@@ 열명 중 한 명? 건선관절염의 증상과 치료',
        '#@@ image_05.png@@ 건강@@ instagram@@ #로봇수술센터 #부울경최초 #다빈치로봇수술2000례',
        '#@@ image_06.png@@ 건강@@ Youtube@@ 35세 이상 고령임신 어떻게 준비 하나요?',
        '#@@ image_07.png@@ 건강@@ 블로그-의료정보@@ 아무도 알려주지 않은 폐암의 진실',
        '#@@ image_08.png@@ 건강@@ 블로그-의료정보@@ 유행성 이하선염, 아이들을 노리는 봄철 감염병',
        '#@@ image_09.png@@ 건강, Youtube@@ 올바른 코 세척 방법',
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
    for(let i = 0; i < health_total; i++) {

        let temp_data = health_data[i];
        //  temp_data 글자였습니다.(string)
        // string 은 객체에요.
        // string.split(구분자)
        // 구분자로 분리해서 배열을 만듭니다. 
        temp_data = temp_data.split(',');        
        console.log(temp_data); // []
        
        let temp = '<div class="health-box">';
        temp = temp + '<a href="#">';
        temp = temp + i;
        temp = temp + '</a>';
        temp = temp + '</div>';
        
        health_html = health_html + temp;
    }
    health_list.html(health_html);


});
//모든 리소스 로딩 완료
window.onload = function () {

};