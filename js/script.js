$(function (){
    // $('input[name=phone]').mask('+7 (999) 999-99-99');
    

    $('.recomendation-slide').owlCarousel({
        loop:true,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:0,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:3,
        navText: ['<img src="images/slide-arrow-left.svg">','<img src="images/slide-arrow-right.svg">'],
        responsive:{
            0:{
                items:1.2,
            },
            600:{
                items:1.4,
            },
            768:{
                items:1.8,
            },
            1000:{
                items:2.5,
            },
            1200:{
                items:3,
            }
        }
    });

    $('.guides-slide').owlCarousel({
        loop:true,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:15,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:4,
        navText: ['<img src="images/slide-arrow-left.svg">','<img src="images/slide-arrow-right.svg">'],
        responsive:{
            0:{
                items:1.3,
            },
            600:{
                items:1.8,
            },
            800:{
                items:2.6,
            },
            1000:{
                items:3.2,
            },
            1200:{
                items:4,
            }
        }
    });


    $('.head-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings().toggleClass('active');
    });

    
    

});

