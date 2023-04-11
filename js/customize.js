// 自行加入的JS請寫在這裡
$(function () {
    $('.btn_menu')
        .off()
        .click(function (e) {
            $(this).toggleClass('opened');
            $('.mobile_nav .language').toggleClass('opened');
            $('.mobile_nav').toggleClass('opened');
            $(this).blur();
        });
    /*-----------------------------------*/
    ///////////////置頂go to top////////////
    /*-----------------------------------*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 80) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
    /*-----------------------------------*/
    /////click event to scroll to top//////
    /*-----------------------------------*/
    $('.scrollToTop')
        .off()
        .click(function (e) {
            $('html, body').stop().animate({ scrollTop: 0 }, 400, 'linear');
            // $('a.goCenter').focus(); //加入這行
            e.preventDefault();
        });
    $('.scrollToTop').keydown(function (e) {
        $('html, body').stop().animate({ scrollTop: 0 }, 400, 'linear');
        _body.find('a.goCenter').focus();
        e.preventDefault();
    });
    //
    //
    //
    //
    $('.btn-controller')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.controller').offset().top }, 400, 'linear');
            blur();
        });
    $('.btn-app')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.app').offset().top }, 400, 'linear');
            blur();
        });

    //certification_slider slider
    $('.certification_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
    // rotate slider
    var sliders = [];
    var delay = 3000;
    var timerId;
    var remaining;
    var start;
    var current_playing;
    // restore user slider img and title or descriptions
    $('#rotate-slider')
        .find('img')
        .each(function () {
            this.className += ' slider-hide';
            sliders.push({ html: this });
        });
    // initialize the siliders
    function slider_init() {
        $('#rotate-slider').css('display', 'block');
        $('#rotate-slider').append(
            "<div id='slider-btn'><a class='prev-btn'><i class='arr-left'></i></a><a class='next-btn'><i class='arr-right'></i></a></div>"
        );
        slider_display(sliders, 0);
        slider_loop(sliders, -1, delay);
    }
    // display 5 img at a time
    function slider_display(A, i) {
        if (i < 0) {
            i = A.length - 1;
        }
        current_playing = i;
        // mute the one img before
        A[(i + A.length + 3) % A.length].html.className += ' slider-hide';
        // display 5 img after the muted one
        A[(i + A.length) % A.length].html.className = 'slider-middle';
        A[(i + A.length - 1) % A.length].html.className = 'slider-left-1';

        A[(i + A.length + 1) % A.length].html.className = 'slider-right-1';
    }
    // slider
    function slider_loop(A, i, remaining) {
        start = new Date();
        if (i < 0) {
            i = A.length - 1;
        }
        timerId = setTimeout(function () {
            slider_display(A, i);
            slider_loop(A, i - 1, delay);
        }, remaining);
    }

    // $('#rotate-slider').hover(
    //     function () {
    //         window.clearTimeout(timerId);
    //         remaining = delay - (new Date() - start);
    //         $('#slider-btn').show();
    //         $('#slider-btn .prev-btn').click(function () {
    //             current_playing++;
    //             slider_display(sliders, current_playing);
    //         });
    //         $('#slider-btn .next-btn').click(function () {
    //             current_playing--;
    //             slider_display(sliders, current_playing);
    //         });
    //     },
    //     function () {
    //         slider_loop(sliders, current_playing, remaining);
    //         $('#slider-btn').hide();
    //         $('#slider-btn .prev-btn').unbind('click');
    //         $('#slider-btn .next-btn').unbind('click');
    //     }
    // );

    // launch slider
    slider_init();
});
