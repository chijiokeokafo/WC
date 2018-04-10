$(document).ready(function(){
  $("#mobile-nav-button").click(function(e) {
      $(".nav-container").toggleClass("nav-open"); 
  });

  $('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:true,
    margin:0,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    onInitialize : function(element){
        $('.owl-carousel').children().sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).each(function(){
            $(this).appendTo($('.owl-carousel'));
        });
    }
  });



  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.madrid-copy').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},500);
                  
          }
          
      }); 
  
  });
});

// $( document ).ready( function() {
  
//   //Google Maps JS
//   //Set Map
//   function initialize() {
//       var myLatlng = new google.maps.LatLng("37°29'52.9"N 127°01'43.5"E");
//       var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
//       var mapOptions = {
//         zoom: 11,
//         center: myLatlng,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       }

//     var map = new google.maps.Map(document.getElementById('map'), mapOptions);
//     //Callout Content
//     var contentString = 'Some address here..';
//     //Set window width + content
//     var infowindow = new google.maps.InfoWindow({
//       content: contentString,
//       maxWidth: 500
//     });

//     //Add Marker
//     var marker = new google.maps.Marker({
//       position: myLatlng,
//       map: map,
//       icon: imagePath,
//       title: 'image title'
//     });

//     google.maps.event.addListener(marker, 'click', function() {
//       infowindow.open(map,marker);
//     });

//     //Resize Function
//     google.maps.event.addDomListener(window, "resize", function() {
//       var center = map.getCenter();
//       google.maps.event.trigger(map, "resize");
//       map.setCenter(center);
//     });
//   }

//   google.maps.event.addDomListener(window, 'load', initialize);

// });