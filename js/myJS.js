
/*---------------------------------------------------------------------
                        SMOOTH SCROLLING OF ALL LINKS
---------------------------------------------------------------------*/
$(function () {
  $('.menu-items a, .logoC a').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 100
    }, 1000);
    event.preventDefault();
  });
});


/*---------------------------------------------------------------------
                        THE PARALLAX JS CODE
---------------------------------------------------------------------*/

//The Parallax JS code

/*Let's take a step by step look at exactly what's going on here.

1. We first find all our sections with a class of .parallax.
2. We then set our speed as a fraction between 0 and 1. In this case, I used 0.5.
3. On scroll, we loop through each of our parallax sections, finding the y offset of the window.
4. We then adjust the background-position property of our parallax section accordingly, based on our speed fraction.
5. The position of our background image is now updated each time a scroll occurs, giving the impression that it is scrolling at a slower speed than the foreground elements.*/

(function () {

  var myParallax = document.querySelectorAll(".homeBgImage"), speed = 0.3;

  window.onscroll = function () {
    myParallax.forEach(function (elP) {

      var windowYOffset = - window.pageYOffset,
        elPBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      elP.style.backgroundPosition = elPBackgrounPos;
    });

  };

})();

/*---------------------------------------------------------------------
                        MENU WITH EFECTS
---------------------------------------------------------------------*/
jQuery(document).ready(function ($) {

  $menu_navigation = $('#main-nav'),
    $lateral_cart = $('#cd-cart'),
    $shadow_layer = $('#cd-shadow-layer');
    $shadow_layer = $('#cd-shadow-layer');

  $('#buttonMenu').on('click', function () {
    $('body').toggleClass('open');
  });

  $('#cartMenu').on('click', function (event) {
    event.preventDefault();
    //close lateral menu (if it's open)
    $menu_navigation.removeClass('speed-in');
    toggle_panel_visibility($lateral_cart, $shadow_layer, $('body'));
    $('body').toggleClass('open');
  });


  $('.mountainBikes').on('click', function () {
    window.open('../BikeShop/mountainBikes/index.html', "_self");
  });
  $('.demoBikes').on('click', function () {
    window.open('../BikeShop/demoBikes/index.html', "_self");
  });
  $('.roadBikes').on('click', function(){
    window.open('../BikeShop/roadBikes/index.html', "_self");
  });  
  $('.demoBikes').on('click', function(){
    window.open('../BikeShop/demoBikes/index.html', "_self");
  }); 
  $('.workShop').on('click', function () {
    window.open('../BikeShop/workShop/index.html', "_self");
  });
  $('.C2WSchema').on('click', function () {
    window.open('../BikeShop/C2WSchema/index.html', "_self");
  });
});

