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
    // Centered slider read more button
    readMore();
    var getPrevBtn = document.querySelector(".centered-slider__button-prev"),
        getNextBtn = document.querySelector(".centered-slider__button-next");
    getPrevBtn.addEventListener("click", function(e){
        e.preventDefault();
        readMore ();
    });
    getNextBtn.addEventListener("click", function(e){
        e.preventDefault();
        readMore ();
    });
    function readMore () {
    var getParentDiv = document.querySelector(".slick-center").children;
    var getReadBtn = getParentDiv[3];
    getReadBtn.addEventListener("click", function(e){
        e.preventDefault();
        var getChildDiv = getParentDiv[2];
        getChildDiv.style.display = "block";
        var getCloseBtn = getChildDiv.children[1];
        getCloseBtn.addEventListener("click", function(ev){
            ev.preventDefault();
            getChildDiv.style.display = "none";
        });
    });
    }

    var addPgBtn = document.querySelector(".number-pages__addbtn");
    addPgBtn.addEventListener('click', function (e) {
        e.preventDefault();

        var addPgRes = document.querySelector(".summary__number-pages-quantity"),
            quantPg = document.querySelector(".number-pages__quantity"),
            quantSummPg = document.querySelector(".summary__number-pages-price-input"),
            quantSummRes = document.querySelector(".number-pages__summ-price"),
            quantSummDisp = document.querySelector(".summary__number-pages-price-summ");
        var startPos = parseInt(quantPg.value);
        var startPrice = parseInt(quantSummPg.value);
        var incrNum = startPos + 1;
        var incrPrice = incrNum * startPrice;
        addPgRes.innerText = incrNum;
        quantPg.setAttribute("value", incrNum);
        quantSummDisp.innerText = incrPrice;
        quantSummRes.setAttribute("value", incrPrice);
        calculateTotal();
    });

    var $priceValueInput = $(".chosen-item__price");
    var $priceNameOutEl = $(".summary__selected-package-price-summ");
    var $projNameOutEl = $(".summary__selected-package-line2");
    initializePricesDropdown(".forms-field__nonresponsive-list", $priceValueInput, $priceNameOutEl, $projNameOutEl);
    initializePricesDropdown(".forms-field__responsive-list", $priceValueInput, $priceNameOutEl, $projNameOutEl);


    function initializePricesDropdown(listSelector, $packageIDInput, $priceNameOuputEl) {

        var packageList = document.querySelector(listSelector);
        packageList.addEventListener("click", function (e) {
            var $li = $(e.target).parents(".forms-field__item");
            if (!$li.length) {
                return;
            }

            var id = $li.attr("data-id");
            var price = $li.attr("data-price");
            var name = $("[class*=responsive-item-name]", $li).text();

            $priceNameOuputEl.text(price);
            $packageIDInput.attr("value", id);
            $projNameOutEl.text(name);
            calculateTotal();
        });
    }

    function calculateTotal() {
    var quantPgPrice = document.querySelector(".number-pages__summ-price"),
        getQuantPgPrice = parseInt(quantPgPrice.getAttribute("value")),
        packagePrice = document.querySelector(".summary__selected-package-price-summ"),
        getPackagePrice = parseInt(packagePrice.innerText),
        totalPrice = document.querySelector(".summary__total-price-number"),
        totalPriceOutput = document.querySelector(".summary__total-price-input");
    var totalRes = getPackagePrice + getQuantPgPrice;
    totalPrice.innerText = totalRes;
    totalPriceOutput.setAttribute("value", totalRes);
    }

});