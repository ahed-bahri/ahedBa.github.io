$(document).ready(function(){
    //Resposive tabs
    let $btn= $('.project-area .button-group button');
    $btn.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector=$(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter:selector
        });
        return false;
    });

    $('project-area .button-group #btn1').trigger('click');

    $('.test-popup-link').magnificPopup({
        type:'image',
        gallery: {enabled: true}
    });
    
    //owl carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        dots:true,
        responsive:{
            0:{ //from 0px
                items:1
            },
            544:{ // to 544px
                items:2
            }
        }
    })

    /* =============================
            >Animate on Scroll
    ================================*/
                                    
    $(function () {
        //Activate Wow Plugin
        new WOW().init(); 
    });


    /*Chaneg active state */
    $(document).on('click', '.nav-item a', function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    //Sticky navigation menu
    let nav_offset_top= $('.header_area').height()+50;
    function navbarFixed(){
        if ($('.header_area').length){
            $(window).scroll(function(){
                let scroll= $(window).scrollTop();
                if (scroll>= nav_offset_top){
                    $('.header_area .main-menu').addClass('navbar_fixed');
                }else{
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }
    navbarFixed();
});
