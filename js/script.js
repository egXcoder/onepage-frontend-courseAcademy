$(document).ready(function () {

    // Navigation Effect
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('#get-in-touch').addClass('hide');
            $('#navigation-menu').addClass('nav-bg');


        } else {
            $('#get-in-touch').removeClass('hide');
            $('#navigation-menu').removeClass('nav-bg');
        }
    });
    
    // smoother navigation
    $("#navbarSupportedContent a").click(function(e){
        e.preventDefault();
        var hash = this.hash;
        $("html,body").animate({
            scrollTop: $(hash).offset().top
        },300);
    });

    // Succes Story Carousel 
    var story_cards = $(".story-card");
    var current_card = 0;
    function  story_carousel() {
        $(story_cards[current_card]).fadeOut(500, function () {
            if(current_card==story_cards.length-1){
                current_card=0;
            }
            else{
                current_card++;
            }

            $(story_cards[current_card]).fadeIn(500);
        });
    }
    setInterval(story_carousel, 5000);

    // instructor-Carousel using slick instruction 
    $('.instructors-carousel').slick({
        dots: true,
        speed: 500,
        arrows: false,
        autoplay: false,
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

   $(".up-button").find("a").click(function(){
       $("html").animate({
           scrollTop:0
        },500);
   });
    
});