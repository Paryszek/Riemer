$(document).ready(function() {
	var NavY = $('#header-menu').offset().top;
  var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
	  if (ScrollY > NavY) {
  		$('#header-menu').addClass('sticky');
  	   } else {
  		$('#header-menu').removeClass('sticky');
  	   }
	};
    stickyNav();
    $(window).scroll(function() {
		stickyNav();
	});
});
