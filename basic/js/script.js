$(document).ready(function () {

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
    let gotop =$('.gotop');
    gotop.click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop:0
        },500);
    })
});

window.onload = function(){
    // aos 셋팅
    AOS.init();
}