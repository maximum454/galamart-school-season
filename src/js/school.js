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
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        slidesPerRow: 1,
        rows: 2,
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
    const productsPromo = $(".products-promo-slider").slick(promoSetting);



})
