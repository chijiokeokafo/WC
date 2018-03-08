$(document).ready(function(){

  $("#mobile-nav-button").click(function(e) {
      $(".nav-container").toggleClass("nav-open"); 
  });

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