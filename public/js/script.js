$(document).ready(function() {

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box){
    
        },
        scrollContainer: null,
        resetAnimation: true,
    });
    wow.init();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
                margin:30,
            },
            1000:{
                items:3,
            }
        }
    })

    $('div').tooltip();

    $('.fa-shopping-cart').data('tooltip-custom-class', 'tooltip-danger').tooltip();

    $(document).on('inserted.bs.tooltip', function(e) {
        var tooltip = $(e.target).data('bs.tooltip');
        $(tooltip.tip).addClass($(e.target).data('tooltip-custom-class'));
    });
})