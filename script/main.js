$(document).ready(function() {
    var flaga = 0;
    var car_slider = function() {
        $('.dots').children('.dot').click(function(){
            $('.dots').children('.dot').removeClass('active_dot');
            $(this).addClass('active_dot')
            var aktualny = $(this);
            var liczba = 0;
            while(aktualny.length !== 0){
                aktualny = aktualny.next();
                liczba++;
            }
            var akt = $('.main-center').children('.main-box').last();
            var kln = $('.main-center').children('.active');
            if(liczba === 0){
                
            }else{
                while(liczba-1 > 0){
                    akt = akt.prev();
                    liczba--;
                }
            }
            kln.fadeOut(400).removeClass('active');
            akt.fadeIn(400).addClass('active');
            
        });
        $('.arrow_right').click(function() {
            var aktualny = $('.active_img');
            var kolejny = aktualny.next();
            flaga = 1;
            if(kolejny.length === 0){
                kolejny = $('.main_img').first();
            }
            aktualny.css('display','');
            aktualny.fadeOut(1000).removeClass('active_img');
            kolejny.fadeIn(1000).addClass('active_img');
        });
        $('.arrow_left').click(function() {
            var aktualny = $('.active_img');
            var kolejny = aktualny.prev();
            if(kolejny.length === 0){
                kolejny = $('.main_img').last();
            }
            flaga = 1;
            aktualny.css('display','');
            aktualny.fadeOut(1000).removeClass('active_img');
            kolejny.fadeIn(1000).addClass('active_img');
        });
            setInterval(function(){ 
                if(flaga === 0){
                    var aktualny = $('.active_img');
                    var kolejny = aktualny.next();
                    if(kolejny.length === 0){
                        kolejny = $('.main_img').first();
                    }
                    aktualny.css('display','');
                    aktualny.fadeOut(1000).removeClass('active_img');
                    kolejny.fadeIn(1000).addClass('active_img');
                }
            }, 5000);
    };
	var NavY = $('#header-menu').offset().top;
    var stickyNav = function(){
	var ScrollY = $(window).scrollTop(); 
	   if (ScrollY > NavY) { 
		$('#header-menu').addClass('sticky');
	   } else {
		$('#header-menu').removeClass('sticky'); 
	   }
	};
    car_slider();
    stickyNav();
    $(window).scroll(function() {
		stickyNav();
	});
    });
