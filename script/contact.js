$(document).ready(function() {
        var main = function() {
            var przy1 = $('form').children('.przycisk1');
            var przy2 = $('form').children('.przycisk2');
            var przy3 = $('form').children('.przycisk3');
            var przy4 = $('form').children('.przycisk4');
            var flaga1 = 0;
            var flaga2 = 0;
            var flaga3 = 0;
            var flaga4 = 0;
            var on = true;
            $('.map-toggle').click(function(){
                if(on){
                    $(this).addClass('button-click');
                    $('.map').animate({
                        height: "450px",
                    },1000);
                    $('html,body').animate({
                        scrollTop: $('.map').offset().top}, 'slow');
                    on = false;
                }else{
                    $(this).removeClass('button-click');
                    $('.map').animate({
                        height: "0px",
                    },1000);
                    on = true;
                
                }
            });
             $('form').children('.przycisk5').attr("disabled", "disabled");
                $('form').children('.przycisk6').click(function() {
                    przy1.val('');
                    przy2.val('');
                    przy3.val('');
                    przy4.val('');
                    flaga1 = 0;
                    flaga2 = 0;
                    flaga3 = 0;
                    flaga4 = 0;
                    $('form').children('.licznik1').text(40);
                    $('form').children('.licznik2').text(40);
                    $('form').children('.licznik3').text(40);
                    $('form').children('.licznik4').text(200);
                    $('form').children('.przycisk5').attr("disabled", "disabled");
                });
                przy1.keyup(function(){
                    if($(this).val() != ''){
                        flaga1 = 1;
                    }else{
                        flaga1 = 0;
                    }
                    var licznik = 40 - $(this).val().length;
                    $('form').children('.licznik1').text(licznik);
                    
                    if($(this).val().length > 40)
                    {
                        flaga1 = 0;
                        $('form').children('.przycisk5').attr("disabled", "disabled");
                    }
                
                });
                przy2.keyup(function(){
                    if($(this).val() != ''){
                        flaga2 = 1;
                    }else{
                        flaga2 = 0;
                    }
                    var licznik = 40 - $(this).val().length;
                    $('form').children('.licznik2').text(licznik);
                    if($(this).val().length > 40)
                    {
                        flaga2 = 0;
                        $('form').children('.przycisk5').attr("disabled", "disabled");
                    }
                
                });
                przy3.keyup(function(){
                    if($(this).val() != ''){
                        flaga3 = 1;
                    }else{
                        flaga3 = 0;
                    }
                    var licznik = 40 - $(this).val().length;
                    $('form').children('.licznik3').text(licznik);
                    if($(this).val().length > 40)
                    {
                        flaga3 = 0;
                        $('form').children('.przycisk5').attr("disabled", "disabled");
                    }
                
                });
                przy4.keyup(function(){
                    if($(this).val() != ''){
                        flaga4 = 1;
                    }else{
                        flaga4 = 0;
                    }
                    var licznik = 200 - $(this).val().length;
                    $('form').children('.licznik4').text(licznik);
                    if($(this).val().length > 200)
                    {
                        flaga4 = 0;
                        $('form').children('.przycisk5').attr("disabled", "disabled");
                    }
                
                });
                
                $('form').keyup(function(){
                    if(flaga1 == 1 && flaga2 == 1 && flaga3 == 1 && flaga4 == 1){
                        $('form').children('.przycisk5').removeAttr("disabled");
                    }else{
                        $('form').children('.przycisk5').attr("disabled", "disabled");
                    }
                });
            };
        main();
	});
    
