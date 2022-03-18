$(document).ready(function () {

    // 전체화면 슬라이드
    let menu = ['home', 'profile', 'portfolio', 'skill', 'MBTI', 'contact']
    let wrap_swiper = new Swiper(".wrap-swiper", {
        effect: 'fade',
        slidesPerView: 1,
        mousewheel: true,
        touchRatio: 0,
        speed: 500,
        pagination: {
            el: ".page-box",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
        on: {
            slideChange: function () {
                console.log(this.realIndex);
                if (this.realIndex == 3) {
                    stat();
                }
            }
        }
    });
    // 포트폴리오 슬라이드
    var portfolio_swiper = new Swiper(".portfolio-swiper", {
        slidesPerView: 1,
        loopAdditionalSlides: 1,
        loop: true,
        speed: 300,
        centeredSlides: true,
        spaceBetween: 50,
        navigation: {
            nextEl: ".sw-portfolio-next",
            prevEl: ".sw-portfolio-prev",
        },
    });

    let $port_next = $('.sw-portfolio-next');
    let $port_prev = $('.sw-portfolio-prev');
    let $gear_img = $('.gear img');
    let angle = 0; // 현재의 각도를 변수로 저장
    $port_prev.click(function () {
        angle += +90;
        $gear_img.rotate(angle);
    });

    $port_next.click(function () {
        angle += -90;
        $gear_img.rotate(angle);
    });

    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    function stat() {
        let htmlbar = new ProgressBar.Line(htmlstat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1200,
            color: '#FF651E',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    right: '-40px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            // from: {
            //     color: '#FFEA82'
            // },
            // to: {
            //     color: '#ED6A5A'
            // },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let cssbar = new ProgressBar.Line(cssstat, {
            easing: 'easeInOut',
            duration: 1300,
            delay: 1300,
            color: '#379ad6',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    right: '-40px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let jsbar = new ProgressBar.Line(jsstat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1400,
            color: '#FFE100',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    right: '-40px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let jquerybar = new ProgressBar.Line(jquerystat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1500,
            color: '#ed4646',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    right: '-40px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let vuebar = new ProgressBar.Line(vuestat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1600,
            color: '#00c180',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    right: '-40px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        htmlbar.animate(0.97); // Number from 0.0 to 1.0
        cssbar.animate(0.97); // Number from 0.0 to 1.0
        jsbar.animate(0.9); // Number from 0.0 to 1.0
        jquerybar.animate(0.95); // Number from 0.0 to 1.0
        vuebar.animate(0.70); // Number from 0.0 to 1.0
    };
})