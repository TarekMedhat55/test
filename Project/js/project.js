/*global $ , alert , consonle*/

$(function(){
    'use strick'
    // Add Header Height
    $('header').height($(window).height())
    $(window).resize(function(){
        $('header').height($(window).height())
    });
      $(window).scroll(function(){
      var navbar = $('nav');
      if (Math.round($(window).scrollTop()) > 200){
          navbar.addClass('scrolled');
      }else{
          navbar.removeClass('scrolled');
      }
      
      });
})