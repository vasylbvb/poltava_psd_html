
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
});
