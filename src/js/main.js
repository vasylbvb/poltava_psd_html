
$(document).ready(function () {
    $('.simple-slider').bxSlider({
        slideWidth: 270,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 30,
        pager: false,
        prevText: '',
        nextText: '',
        prevSelector: '.simple-slider__arrow-prev',
        nextSelector: '.simple-slider__arrow-next'
    });

    $('.centered-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        arrows: true,
        prevArrow: '.centered-slider__button-prev',
        nextArrow: '.centered-slider__button-next',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
