$(document).ready(function() {
    var ilosc_img = 0;
    var akt = $('.aktualny');
    while(akt.length !== 0){
            akt = akt.next()
            ilosc_img++; 
    }
    var slider = function(){
        $('.under-slider-icons').click(function(){
            $('.iaktualny').removeClass('iaktualny');
            var iaktualny = $(this);
            iaktualny.addClass('iaktualny');
            var ilosc_img_ikon = 0;
            while(iaktualny.length !== 0)
            {
                   iaktualny = iaktualny.next();
                    ilosc_img_ikon++; 
            }
            var przejscie = ilosc_img_ikon;
            
            var aktualny = $('.under-slide').last();
            
            if(przejscie === 1){
                $('.aktualny').fadeOut().removeClass('aktualny');
                $('.under-slide').last().fadeIn().addClass('aktualny');
            }else{
                do{
                        if(przejscie === 1){
                            $('.aktualny').fadeOut().removeClass('aktualny');
                            aktualny.fadeIn().addClass('aktualny');
                        }
                    aktualny = aktualny.prev();
                    przejscie--;
                }while(przejscie > 0);
            }
        });
        $('.next').click(function() {                           
              var aktualny = $('.aktualny');
              var kolejny = aktualny.next();
              var iaktualny = $('.iaktualny');
              var ikolejny = iaktualny.next();
            if(kolejny.length === 0)
            {
               kolejny = $('.under-slide').first();
               
            }
            if(ikolejny.length === 0)
            {
               ikolejny = $('.under-slider-icons').first();
               
            }
            iaktualny.removeClass('iaktualny');
            ikolejny.addClass('iaktualny');
            aktualny.fadeOut(100).removeClass('aktualny');
            kolejny.fadeIn(500).addClass('aktualny');
            
        });
        $('.prev').click(function() {                           
              var aktualny = $('.aktualny');
              var kolejny = aktualny.prev();
              var iaktualny = $('.iaktualny');
              var ikolejny = $('.iaktualny').prev();
            if(ikolejny.length === 0)
            {
                ikolejny = $('.under-slider-icons').last();   
            }
            if(kolejny.length === 0)
            {
               kolejny = $('.under-slide').last();
               
            }
            iaktualny.removeClass('iaktualny');
            ikolejny.addClass('iaktualny');
            aktualny.fadeOut(100).removeClass('aktualny');
            kolejny.fadeIn(500).addClass('aktualny');
            
        });
        
    };
        slider();
	});
	