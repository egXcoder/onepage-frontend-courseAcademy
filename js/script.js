$(document).ready(function () {

    // Navigation Effect
    $(window).scroll(function(){
        if($(window).scrollTop() > 10){
            $('#get-in-touch').addClass('hide');
            $('#navigation-menu').addClass('nav-bg');


        }
        else{
            $('#get-in-touch').removeClass('hide');
            $('#navigation-menu').removeClass('nav-bg');
        }
    });



    // instructor-Carousel using slick instruction 
    $('.instructors-carousel').slick({
        dots: true,
        speed: 500,
        arrows:false,
        autoplay:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 547,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});