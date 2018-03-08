$(document).ready(function(){

  $("#mobile-nav-button").click(function(e) {
      $(".nav-container").toggleClass("nav-open"); 
  });

  // $("ul.nav-container").find("a").click(function(e) {
  //     e.preventDefault();
  //     var section = $(this).attr("href");
  //     $("html, body").animate({
  //         scrollTop: $(section).offset().top
  //     });

  //     $(".nav-container").toggleClass("nav-open");
  // });


  $('.tile-flip').each(function(){
    var flipContainer = $(this);
    $('.flip-container', flipContainer).each(function(){
      $(this).click(function(){
        var wasOpen = $('.flipper', this).hasClass('flip');
        $('.flipper', flipContainer).removeClass('flip');
        if(!wasOpen) $('.flipper', this).addClass('flip');
      });
    });
  });
});
