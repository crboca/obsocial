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
    $('.taller_detail-box_btn').click(function(ev) {
      $('.taller_detail-box').toggleClass("open");
      if ($('.taller_detail-box').hasClass("open")) {
        $('.taller_detail-box_btn').html("Ocultar detalles");
      } else{
        $('.taller_detail-box_btn').html("Ver detalles");
      };
    });

    //scroll general subir pagina
    $(".btn_subir").hide();

    $('#to-header').click(function(ev) {
      ev.preventDefault();
      $(window).scrollTo('#top',700);
    });

    $(window).scroll(function() {
      if ($(window).scrollTop() < $(window).height()) {
          $(".btn_subir").fadeOut(400);
          $(".btn_blog--back").fadeOut(400);
      } else {
          $(".btn_subir").fadeIn(400);
          $(".btn_blog--back").fadeIn(400);
      };
    })


    function menubig() {
      $(".header").removeClass("header--minimized");
      $(".header .container").removeClass("container--minimized");
      $(".logo").removeClass("logo--minimized");
      $(".menu-item-style").removeClass("menu-item-style--minimized");
    }
    function menumin() {
      $(".header").addClass("header--minimized");
      $(".header .container").addClass("container--minimized");
      $(".logo").addClass("logo--minimized");
      $(".menu-item-style").addClass("menu-item-style--minimized");
    }
    $(window).scroll(function() {
      if ($(window).scrollTop() < $(window).height()) {
        menubig();
      } else {
        menumin();
      };
    })

    $(".header").mouseenter(function() {
      if ($(window).scrollTop() > $(window).height()) {
        menubig();
      }
    })
    $(".header").mouseleave(function() {
      if ($(window).scrollTop() > $(window).height()) {
        menumin();
      }
    })

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
    
    //  $('#colorblind').click(function(ev) {
    //   if ($('#colorblind:checked')) {
    //     $('.header').css("background-color","#006553");
    //     $('.bg-color_one').css("background-color","#006553");
    //     $('.bg-color_two').css("background-color","#2B3E50");
    //     $('.btn').css("background-color","#A81B07");
    //     $('.btn-alt').css("background-color","#006553");
    //     $('footer').css("background-color","#2B3E50");
    //   } if ($('#colorblind.not(:checked)')) {
    //     $('.header').css("background-color","#2EB197");
    //     $('.bg-color_one').css("background-color","#2EB197");
    //     $('.bg-color_two').css("background-color","#2B3E50");
    //     $('.btn').css("background-color","#F85C45");
    //     $('.btn-alt').css("background-color","#2EB197");
    //     $('footer').css("background-color","#2B3E50");
    //   };
    // });

   });