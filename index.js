jQuery(function ($) {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,

        prevArrow: '<button type="button" class="slick-prev"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L1.75854 7.04944L8 13.0989" stroke="#DA353B" stroke-width="1.5" /><path d="M17 7.25H2.5" stroke="#DA353B" stroke-width="1.5" stroke-linejoin="round" /></svg ></button > ',
        nextArrow: '<button type="button" class="slick-next"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L15.2415 7.04944L9 13.0989" stroke="#DA353B" stroke-width="1.5"/><path d="M0 7.25H14.5" stroke="#DA353B" stroke-width="1.5" stroke-linejoin="round"/></svg></button>',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }
        ]
    });
    const form = $('.feedback')[0]
    $('.button-scroll').on('click',
        function () {
            form.scrollIntoView({ behavior: "smooth" });
        }
    )
});