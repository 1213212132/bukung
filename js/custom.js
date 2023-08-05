$(function () {

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 0) {
            $('.Header').addClass('on')
        }
        else {
            $('.Header').removeClass('on')
        }
    });



    $('.ham_btn').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })


    $('.main_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
    });


    $('.sec_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });


    $('.section02 .arrows .left').on('click', function () {
        $('.sec_slide').slick('slickPrev');
    });
    $('.section02 .arrows .right').on('click', function () {
        $('.sec_slide').slick('slickNext');
    });


    $('.ham_btn').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })


    $('.play').click(function () {
        $('.visual').slick('slickPlay');
    });

    $('.arrows .pause').click(function () {
        $('.sec_slide').slick('slickPause');
    });





    $('.tap_box .top').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.tap_on .bottom').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });

    // document.querySelector('.MainItm .arrows .left').addEventListener('click', () => {
    //     ItmSlide.slidePrev();
    // });

    $('.tap_box .top').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.tap_on .bottom').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });


    $('.sec3_slide01').slick({
        loop: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });












    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.Gnb').toggleClass('on');
    });

    $('.Gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.snb').stop().slideUp();
    });

    $(window).on('resize', function () {
        $('.Gnb .snb').removeAttr('style')
    })








})