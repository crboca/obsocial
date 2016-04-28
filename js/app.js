$(document).ready(function() {

    //Animation mobile menu
    $( ".btn-anim-three" ).on( "click", function() {
      $(this).toggleClass( "closed" );
      $('.menu-mobile').toggleClass( "closed" );
    });

    //Animation content
    $('.js-animate').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
       });

});
