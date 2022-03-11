$(document).ready(function () {

});

// 모든 요소가 로딩이 된다면 실행
window.onload = function () {
    // aos 셋팅
    AOS.init();

    let sw_pcc = new Swiper('.sw-pcc', {
        slidesPerView: 3,
        loop: true,
        pagination: {
            el: '.sw-pcc-pg',
            clickable: true,
        },
        spaceBetween: 30,
    });

    let sw_scc = new Swiper('.sw-scc', {
        slidesPerView: 3,
        loop: true,
        pagination: {
            el: '.sw-scc-pg',
            clickable: true,
        },
        spaceBetween: 30,
    });

    // 위로 가기
    let gotop = $('.gotop');
    gotop.click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

    // 메뉴 이동 코드
    // 1. 메뉴 클릭시 id 를 이용해서 이동하기\
    let fix_menu = $('.fix-content a');
    $.each(fix_menu, function (index, item) {
        // a 태그를 클릭
        $(this).click(function (event) {
            // href 기능을 막는다.
            event.preventDefault();
            // attr() 을 이용해서 href의 내용을 추출
            let temp = $(this).attr('href');
            // id 에 해당하는 곳의 위치 숫자가 필요
            let temp_pos = $(temp).offset().top;
            $('html').animate({
                scrollTop: temp_pos
            }, 500);
        });
    });

    // 2. 미리 위치값을 파악을 해두고 이동한다.
    // - 위치값을 파악
    let menu_id = ['#home', '#profile', '#portfolio', "#life", "#contact"];
    let menu_pos = [];

    for (let i = 0; i < menu_id.length; i++) {
        // menu_id 의 각 요소를 순차적으로 접근해서 추출
        let temp = menu_id[i];

        // 추출된 요소를 이용해서 위치값 파악
        menu_pos[i] = $(temp).offset().top;
    }
    let gnb_a = $('.gnb a');
    $.each(gnb_a, function (index, item) {

        $(this).click(function (event) {
            event.preventDefault();

            // 클릭시 이동할 위치 값
            let temp_pos = menu_pos[index];

            $('html').animate({
                scrollTop: temp_pos
            }, 500);
        });
    });

    // skill 관련
    let bar_html = new ProgressBar.Line(html, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    let bar_css = new ProgressBar.Line(css, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });


    let bar_js = new ProgressBar.Line(js, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

    var bar = new ProgressBar.Circle(php, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#333',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(1.0); // Number from 0.0 to 1.0


    $(window).scroll(function () {

        // 현재 스크롤 바의 위치 숫자
        let temp = $(window).scrollTop();
        if (temp > menu_pos[1]) {
            // 애니메이션 시작 타이밍을 조절한다.
            bar_html.animate(0.8);
            bar_css.animate(0.8);
            bar_js.animate(0.8);
        } else {
            // 원래 모양으로 돌아간다.
            bar_html.set(0.0);
            bar_css.set(0.0);
            bar_js.set(0.0);
        }

    });

}