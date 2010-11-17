/* Author: Kai Chang

*/

$(function() {

  // Header pulldown
  var headspace = 0;
  $('header a').toggle(
    function() {
      $(this).addClass('active');
      $('header').animate({
        top : "+=150"
    }, 500, function() {
      headspace++;
      })
    }, 
    function() {
      $(this).removeClass('active');
      $('header').animate({
        top : "-=150"
    }, 500, function() {
      headspace--;
      });
  });

  // Footer pullup
  var footspace = 0;
  $('footer a').toggle(
    function() {
      $(this).addClass('active');
      $('footer').animate({
        bottom : "+=150"
    }, 500, function() {
      footspace++;
      })
    }, 
    function() {
      $(this).removeClass('active');
      $('footer').animate({
        bottom : "-=150"
    }, 500, function() {
      footspace--;
      });
  });

  // Meta pullup
  var metaspace = 0;
  $('.meta a').toggle(
    function() {
      $(this).addClass('active');
      $('.meta').animate({
        bottom : "+=100"
    }, 500, function() {
      metaspace++;
      })
    }, 
    function() {
      $(this).removeClass('active');
      $('.meta').animate({
        bottom : "-=100"
    }, 500, function() {
      metaspace--;
      });
  });

});

