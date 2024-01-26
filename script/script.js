$(document).ready(function () {

    // 메인 배너 

    let v_slide_img = $('.banner a')
    let i = 0;
    let c_btn = $('.banner span')

    function fadeInOut() {
        v_slide_img.fadeOut()

        $('.b_c_btn span').removeClass('on');
        if (i == 4) {
            i = 0;
        } else {
            i++;
        }
        $('.b_c_btn span').eq(i).addClass('on');
        v_slide_img.eq(i).stop().fadeIn();
    }

    let Timer = setInterval(fadeInOut, 5000);

    c_btn.click(function () {

        let idx = $(this).index();
        console.log(idx);

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
            $('.gnb').slideUp();
            $('.toggle span:first-child').removeClass('ro1')
            $('.toggle span:nth-child(2)').removeClass('fff')
            $('.toggle span:last-child').removeClass('ro2')
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
        } else {
            $('header').css('position', 'relative')
        }
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

    //////////////////////////////////////////////////////////////////
    // 탭메뉴 공연장소개
    $('.theater ul li a').click(function () {
        $(this).addClass('view_color').parent().siblings().find('a').removeClass('view_color')
        $(this).next().slideDown().parent().siblings().find('div').slideUp().removeClass('view')

        if ($(window).width() < 653) {
            if ($('.theater ul li:last-child>a').hasClass('view_color')) { $('.theater').height(750) } else {
                $('.theater').height(920)
            }

        }

        if($(window).width()>=1025){
            $(this).next().css('display','flex')
        }

    })
    //////////////////////////////////////////////////////////////////
    // 푸터서식

    $('.lnb>ul>li>a').click(function () {
        $(this).next().slideToggle().parent().siblings().find('.sub').slideUp()

    })

    //////////////////////////////////////////////////////////////////
    // 메인페이지 모달 띄우기
    // if ($(window).width() >= 1025) {
    let popup = `
        <div class="modal">
            <div class='center'>
                <a href="#" title="호텔예약하기">
                    <img src="./images/popup.png" alt="호텔팝업">
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


    // }
})