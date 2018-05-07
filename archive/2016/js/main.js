$(document).ready(function() {
  // opacity = ($(window).scrollTop() / 240);
  // $(window).scroll(function(){
    
  //   $('header').css({
  //     opacity: opacity
  //   });
  // });

  $(window).scroll(function(){
    $(".underlay").css("opacity", 1 - $(window).scrollTop() / 300);
    console.log($(window).scrollTop() / 300);

  });

});

// $( document ).ready(function() {
//     console.log( "ready!" );
// });
