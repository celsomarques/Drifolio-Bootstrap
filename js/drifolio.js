//========================
//Follow button
//========================

$(function() {

	// SOME VARIABLES
	var button = '.dribbble-follow-button',
		label = $(button).text(),
		username = $('a'+button).attr('href').toLowerCase().replace('http://dribbble.com/', ''),
		disableCount = $(button).attr('class');

	// DISPLAYED WHEN THE API IS NOT RESPONDING
	$(button).wrap('<div class="dribbble-follow-button" />').removeClass().addClass('label').html('<i></i> '+label);

});


//========================
//PRELOADER
//========================
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow');
    // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
})
//========================
//CUSTOM SCROLLBAR
//========================
$("html").niceScroll({
    mousescrollstep: 70,
    cursorcolor: "#ea9312",
    cursorwidth: "5px",
    cursorborderradius: "10px",
    cursorborder: "none",
});


//========================
//SMOOTHSCROLL
//========================
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//========================
//icon hover effect
//========================
$('#services img').hover(
  function(){ $(this).addClass('animated pulse') },
  function(){ $(this).removeClass('animated pulse') })
