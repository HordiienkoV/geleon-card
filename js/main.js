$(document).on('click', '.filter-show-more', function () {
    if (!$(this).prev("fieldset").hasClass("active")) {
        $(this).prev("fieldset").addClass("active")
        $(this).text("Скрыть")
    } else {
        $(this).prev("fieldset").removeClass('active')
        $(this).removeClass("active")
        $(this).text("Показать еще")
    }
})

$(document).on('click', '.mobile-filter-btn', function () {
    $('.catalog-filter').slideDown()
    $('body').addClass('filters-active')
})
$(document).on('click', ".filter-mobile__close", function () {
    $('.catalog-filter').slideUp()
    $('body').removeClass('filters-active')
})


// Swiper
const swiperSide = new Swiper('.side-swiper.swiper', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
const swiperMain = new Swiper('.main-swiper.swiper', {
    thumbs: {
        swiper: swiperSide,
    },
    watchOverflow: true,
    breakpoints: {
        280: {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                dynamicBullets: true
            },
        },
    },
});


// main-page
const swiperBanner = new Swiper('.banner-swiper.swiper', {
    navigation: {
        nextEl: '.banner-swiper.swiper .swiper-button-next',
        prevEl: '.banner-swiper.swiper .swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },
});

const swiperDiscounts = new Swiper('.discounts-swiper.swiper', {
    navigation: {
        nextEl: '.discounts__swipers-nav .swiper-button-next',
        prevEl: '.discounts__swipers-nav .swiper-button-prev',
    },
    slidesPerView: 5,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    breakpoints: {
        280: {
            slidesPerView: 2,
            spaceBetween: 3,
        },
        321: {
            slidesPerView: 2,
            spaceBetween: 9,
        },
        481: {
            slidesPerView: 3
        },
        767: {
            slidesPerView: 4
        },
        990: {
            slidesPerView: 5
        },
    },
});

const swiperCatalog = new Swiper('.product-cat-swiper.swiper', {
    navigation: {
        nextEl: '.product-cat__swipers-nav .swiper-button-next',
        prevEl: '.product-cat__swipers-nav .swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    breakpoints: {
        280: {
            enabled: false,
        },
        570: {
            enabled: true,
            slidesPerView: 2
        },
        767: {
            slidesPerView: 3
        },
        1025: {
            slidesPerView: 4
        },
    },
})


