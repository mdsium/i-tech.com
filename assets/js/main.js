  jQuery(document).ready(function($){
    $(".homepage-slides").owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      loop: true,
      autoplay: true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,

    });
    $(".projects-titles li").on('click', function() {

      $(".projects-titles li").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr('data-filter');
      $(".projects-list").isotope({
        filter: selector
      });
    });
    jQuery(".projects-list").isotope();


    $(".staff-list").owlCarousel({
      items:4,
      autoplay: false,
      margin: 30,
      loop:true,
      autoplay: true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      nav: true,
      navtaxt: ["<i class='fa fa-long-arrow-left'></i>" ,"<i class='fa fa-long-arrow-right'></i>"]
  });
  
    });


