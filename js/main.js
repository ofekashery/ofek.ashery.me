$(document).ready(function () {    
    $('.smooth-scrolling a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            $('.navbar-collapse').collapse('hide');
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-$("#nav").outerHeight()
                }, 1000);
                return false;
            }
        }
    });
});

$('.modal .modal-body').css('max-height', $(window).height()*0.965);
