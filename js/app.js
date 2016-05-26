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

    //Detalles evento
    $('.taller_detail-box').click(function(ev) {
      $(this).toggleClass("open");
    });

    //scroll especial index
    $('#to-donaciones').click(function(ev) {
      ev.preventDefault();
      $(window).scrollTo('#donaciones',700);
    });

    //scroll especial proyecto
    $('#to-colaborar').click(function(ev) {
      ev.preventDefault();
      $(window).scrollTo('#colaborar',700);
    });
    
   });