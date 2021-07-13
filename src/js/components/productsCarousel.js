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
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 374,
            settings: "unslick"
        }
    ]
}
const productsCarousel = $(".products-carousel").slick(slickSetting);
$(window).on('resize', function() {
    if( $(window).width() > 374 &&  !productsCarousel.hasClass('slick-initialized')) {
        productsCarousel.reInit()
    }
});