@@include('partials/slick.js')

$(function () {
    const slickSetting = {
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    rows: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    slidesPerRow: 1,
                    rows: 2,
                }
            }
        ]
    }
    const productsCarousel = $(".products-carousel").slick(slickSetting);

    const promoSetting = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    }
    const productsPromo = $(".promo-products-slider").slick(promoSetting);

    const promoGridSetting = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        slidesPerRow: 4,
        rows: 2,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesPerRow: 3,
                    rows: 2,
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesPerRow: 2,
                    rows: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesPerRow: 2,
                    rows: 2,
                }
            }
        ]
    }
    const productsGrid = $(".promo-products-grid").slick(promoGridSetting);


    const swiperTabs = new Swiper('.swiper-category-tabs', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 2,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        slidesOffsetAfter:0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.tabs a').on('click',function(e) {
        e.preventDefault();
        $('.tabs a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');

        $('.tab-block').not(tab).css({
            'display': 'none'
        });

        $(tab).fadeIn(400);
    });
})
