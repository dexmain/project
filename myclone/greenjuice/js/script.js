$(document).ready(function () {

    // 펼침기능
    let link_list = $('.link-list');
    let link_bt = $('.link-bt');
    link_bt.click(function () {
        link_list.stop().slideToggle(300);
    });

    // 위로가기 기능
    let gotop = $('.gotop');
    gotop.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500);
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


window.onload = function () {

    // 베스트 제품 관련 코드

    // 1. 객체 리터럴 방식코드
    let good_10 = [{
            rank: 1,
            like: false,
            title: '매일아침 튼튼플러스',
            price: '1,500원',
            ml: '100ml',
            image: 'images/1-1.jpg'
        },
        {
            rank: 2,
            like: false,
            title: '아이러브 루테인',
            price: '2,700원',
            ml: '130ml',
            image: 'images/1-2.jpg'
        },
        {
            rank: 3,
            like: false,
            title: '당근즙',
            price: '2,900원',
            ml: '130ml',
            image: 'images/1-3.jpg'
        },
        {
            rank: 4,
            like: false,
            title: '러브미 케일&셀러리',
            price: '1,900원',
            ml: '130ml',
            image: 'images/1-4.jpg'
        },
        {
            rank: 5,
            like: false,
            title: '핸디밀 프로틴 PRO',
            price: '2,400원',
            ml: '150ml',
            image: 'images/1-5.jpg'
        }
    ];

    let good_20 = [{
            rank: 1,
            like: false,
            title: '식물성유산균쌀요거트',
            price: '2,100원',
            ml: '150ml',
            image: 'images/2-1.jpg'
        },
        {
            rank: 2,
            like: false,
            title: '러브미 케일&셀러리',
            price: '1,900원',
            ml: '130ml',
            image: 'images/2-2.jpg'
        },
        {
            rank: 3,
            like: false,
            title: '식물성유산균 위&캡슐',
            price: '2,100원',
            ml: '130ml',
            image: 'images/2-3.jpg'
        },
        {
            rank: 4,
            like: false,
            title: '노니&깔라만시',
            price: '2,300원',
            ml: '130ml',
            image: 'images/2-4.jpg'
        },
        {
            rank: 5,
            like: false,
            title: '식물성유산균 오메가&치아씨드',
            price: '2,100원',
            ml: '130ml',
            image: 'images/2-5.jpg'
        }
    ];
    let good_30 = [{
            rank: 1,
            like: false,
            title: '위러브플러스',
            price: '2,700원',
            ml: '130ml',
            image: 'images/3-1.jpg'
        },
        {
            rank: 2,
            like: false,
            title: '러브미 케일&셀러리',
            price: '1,900원',
            ml: '130ml',
            image: 'images/3-2.jpg'
        },
        {
            rank: 3,
            like: false,
            title: '노니&깔라만시',
            price: '2,300원',
            ml: '130ml',
            image: 'images/3-3.jpg'
        },
        {
            rank: 4,
            like: false,
            title: '마시는 새싹',
            price: '2,200원',
            ml: '130ml',
            image: 'images/3-4.jpg'
        },
        {
            rank: 5,
            like: false,
            title: '식물성유산균 위&캡슐',
            price: '2,100원',
            ml: '130ml',
            image: 'images/3-5.jpg'
        }
    ];
    let good_40 = [{
            rank: 1,
            like: false,
            title: '위러브플러스',
            price: '2,700원',
            ml: '130ml',
            image: 'images/4-1.jpg'
        },
        {
            rank: 2,
            like: false,
            title: '노니&깔라만시',
            price: '2,300원',
            ml: '130ml',
            image: 'images/4-2.jpg'
        },
        {
            rank: 3,
            like: false,
            title: '유기명일엽녹즙',
            price: '2,600원',
            ml: '130ml',
            image: 'images/4-3.jpg'
        },
        {
            rank: 4,
            like: false,
            title: '',
            price: '원',
            ml: '',
            image: 'images/no_img.png'
        },
        {
            rank: 5,
            like: false,
            title: '마시는 새싹',
            price: '2,200원',
            ml: '130ml',
            image: 'images/4-5.jpg'
        }

    ];
    let good_50 = [{
            rank: 1,
            like: false,
            title: '위러브플러스',
            price: '2,700원',
            ml: '130ml',
            image: 'images/5-1.jpg'
        },
        {
            rank: 2,
            like: false,
            title: '노니&깔라만시',
            price: '2,300원',
            ml: '130ml',
            image: 'images/5-2.jpg'
        },
        {
            rank: 3,
            like: false,
            title: '돌미나리와 민들레',
            price: '2,600원',
            ml: '130ml',
            image: 'images/5-3.jpg'
        },
        {
            rank: 4,
            like: false,
            title: '식물성유산균 오메가&치아씨드',
            price: '2,100원',
            ml: '130ml',
            image: 'images/5-4.jpg'
        },
        {
            rank: 5,
            like: false,
            title: '유기명일엽녹즙',
            price: '2,600원',
            ml: '130ml',
            image: 'images/5-5.jpg'
        }
    ];

    // 2. 객체 생성자 함수 방식코드


    // 3. 코드 구현
    // 3.1. 제품 카테고리 메뉴를 저장
    let best_cate = $('.best-cate li a');
    // console.log(best_cate);
    // 3.2. 각 순위 제품 저장
    let best_good = $('.best .good');
    // console.log(best_good);

    // 4. 카테고리를 클릭해서 내용을 변경
    $.each(best_cate, function (index, item) {
        // console.log(index);
        // console.log(item);
        $(this).click(function (event) {
            // a 태그의 href 를 막는다.
            event.preventDefault();

            // 실제 내용을 배치합니다.
            showBest(index);

        });
    });

    // 실제 내용을 보여주는 함수
    function showBest(_index) {

        let base_data;

        if (_index == 0) {
            base_data = good_10;
        } else if (_index == 1) {
            base_data = good_20;
        } else if (_index == 2) {
            base_data = good_30;
        } else if (_index == 3) {
            base_data = good_40;
        } else if (_index == 4) {
            base_data = good_50;
        }

        $.each(best_good, function (index, item) {

            // let good = best_good.eq(index);
            let good = $(this);
            good.find('.good-img').attr('src', base_data[index].image);
            good.find('.good-name').text(base_data[index].title);
            good.find('.good-price > b').text(base_data[index].price);
            good.find('.good-price > em').text('(' + base_data[index].ml + ')');

            // 해당 객체의 like 가 false 라면
            // good.find('.good-heart').removeClass('good-heart-active');
            // 해당 객체의 like 가 true 라면
            // good.find('.good-heart').addClass('good-heart-active');

            if (base_data[index].like == true) {
                good.find('.good-heart').addClass('good-heart-active');
            } else {
                good.find('.good-heart').removeClass('good-heart-active');
            }

            // 연령대를 클릭할떄 마다 Click 자꾸 등록이 된다.
            // 그래서 한번 클릭에도 여러번 클릭 된 결과가
            // 화면에 적용이 된다.



            good.find('.good-heart').off('click').on('click', function (event) {

                // 클릭을 아래로 전달하는 것을 막는다.
                event.stopPropagation();
                // a href 를 막아준다.
                event.preventDefault();

                if (base_data[index].like == false) {
                    // 데이터를 읽었는데 false
                    $(this).addClass('good-heart-active');
                    base_data[index].like = true;
                } else {
                    // 데이터를 읽었는데 true
                    $(this).removeClass('good-heart-active');
                    base_data[index].like = false;
                }


            });

        });

    }


    // 최초 무조건 기능을 위해서 실행해 준다.
    showBest(1);

}