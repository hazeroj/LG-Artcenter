$(document).ready(function () {
    // 메인 배너 

    let v_slide_img = $('.banner ul li');
    let c_btn = $('.banner span');
    let b_i = 0

    function fadeInOut() {
        v_slide_img.fadeOut();
        $('.b_c_btn span').removeClass('on');

        if (b_i == 4) {
            b_i = 0;
        } else {
            b_i++;
        }

        console.log(b_i);
        $('.b_c_btn span').eq(b_i).addClass('on');
        v_slide_img.eq(b_i).stop().fadeIn();

    }

    let Timer = setInterval(fadeInOut, 5000);


    c_btn.click(function () {

        let idx = $(this).index();
        // console.log(idx);

        $('.b_c_btn span').removeClass('on');

        v_slide_img.fadeOut()
        $('.b_c_btn span').eq(idx).addClass('on');
        v_slide_img.eq(idx).stop().fadeIn();

        i = idx

        clearInterval(Timer);

    });

    c_btn.mouseenter(function () {
        Timer = clearInterval(Timer)
    })

    c_btn.mouseleave(function () {
        Timer = setInterval(fadeInOut, 5000);
    })

    //////////////////////////////////////////////////////////////////
    // 검색창
    $('.fa-search').click(function () {
        if ($('.gnb').css('display', 'block')) {

            if ($(window).width() >= 1025) {
                $('.sub').slideUp();
            } else {
                $('.gnb').slideUp();
                $('.toggle span:first-child').removeClass('ro1')
                $('.toggle span:nth-child(2)').removeClass('fff')
                $('.toggle span:last-child').removeClass('ro2')
            }
            $('.search_box').slideToggle();
        }
    })
    //////////////////////////////////////////////////////////////////
    // 내비게이션
    let gnb = $('.gnb')

    $('.toggle').click(function () {
        $('.gnb').slideToggle()

        if (gnb.show()) {
            $('header').css('position', 'fixed')
            $('.toggle span:first-child').toggleClass('ro1')
            $('.toggle span:nth-child(2)').toggleClass('fff')
            $('.toggle span:last-child').toggleClass('ro2')
            $('.search_box').slideUp();
            $('header').css('position', 'relative')
        }
    })

    $('.gnb>ul>li>a').click(function () {
        $('.search_box').slideUp()
    })



    $('.gnb>ul>li>a').click(function () {
        $(this).next().toggle().parent().siblings().find('.sub').hide()
    })
    //////////////////////////////////////////////////////////////////
    // 탑버튼
    $(window).scroll(function () {
        let s_pos = $(this).scrollTop();
        console.log(s_pos);

        if (s_pos >= 800) {
            $('.t_btn').fadeIn();
        } else { $('.t_btn').fadeOut(); }
    })

    $(' .t_btn').click(function () {
        $('html, body').animate({ 'scrollTop': '0px' }, 500)
    })
    //////////////////////////////////////////////////////////////////
    // 준비중인공연

    let p_i;
    let p_r_btn = $('.preparing_screen article .fa-angle-right')
    let p_l_btn = $('.preparing_screen article .fa-angle-left')
    let nn = 0;

    if ($(window).width() >= 1280) {
        i = $('.pre_list li').width() * 2 + 12

        p_r_btn.click(function () {
            if (nn > 0) {
                nn = 0
            } else {
                nn++;
            }
            $('.pre_list').css('left', -i * nn)
        })

        p_l_btn.click(function () {
            if (nn == 0) {
                nn = 1
            } else {
                nn--;
            }
            $('.pre_list').css('left', -i * nn)
        })


    } else {
        i = $('.pre_list li').width();

        p_r_btn.click(function () {
            if (nn > 2) {
                nn = 0
            } else {
                nn++;
            }
            $('.pre_list').css('left', -i * nn)
        })

        p_l_btn.click(function () {
            if (nn == 0) {
                nn = 3
            } else {
                nn--;
            }
            $('.pre_list').css('left', -i * nn)
        })
    }


    //////////////////////////////////////////////////////////////////
    // 탭메뉴 공연장소개
    $('.theater ul li a').click(function () {
        $(this).addClass('view_color').parent().siblings().find('a').removeClass('view_color')

        if ($(window).width() < 533) {

            if ($('.theater ul li:first-child>a').hasClass('view_color')) { $('.theater').height(1020) } else {
                $('.theater').height(900)
            }

        } else if ($(window).width() < 744){
                $('.theater').height(740)
        }

        if ($(window).width() >= 744) {
            $(this).next().show().parent().siblings().find('div').hide().removeClass('view')
            $(this).next().css({ 'display': 'flex' })
            $('.view').css('display', 'flex')

        } else {
            $(this).next().slideDown().parent().siblings().find('div').slideUp().removeClass('view')

        }

    })
    //////////////////////////////////////////////////////////////////
    // 푸터서식

    if ($(window).width() < 744) {
        $('.lnb>ul>li>a').click(function () {
            $(this).next().slideToggle().parent().siblings().find('.sub').slideUp()
        })
    } else {
        $('.f_top .sub').css('display', 'block !important')
    }

    //////////////////////////////////////////////////////////////////
    // 메인페이지 모달 띄우기
    // if ($(window).width() >= 1025) {

    let m_n = Math.ceil(Math.random() * 4)
    let popup = `
        <div class="modal">
            <div class='center'>
                <a href="#" title="호텔예약하기">
                    <img src="./images/popup${m_n}.png" alt="팝업">
                </a>
                <div class="today">
                    <input type="checkbox" id="ch">
                    <label for="ch">오늘 하루 열지 않음</label>
                </div>
                <input type="button" value="닫기" id="c_btn">
            </div>
        </div>`

    $('body').append(popup);

    if ($.cookie('popup') == 'none') {
        $('.modal').hide();
    }

    let $ex = $('.modal #ch');

    function closePopup() {
        if ($ex.is(':checked')) {
            $.cookie('popup', 'none', { expires: 1, path: '/' });
        }
        $('.modal').hide();
    }

    $('.modal #c_btn').click(function () {
        closePopup();
        $('.modal').hide();
    });


    // 바디 클릭하면 슬라이드 업하기
    $('main').click(function () {
        $('.search_box').hide()
        $('header .sub').hide();
    })


})