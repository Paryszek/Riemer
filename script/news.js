$(document).ready(function() {
    var resetpress = function(){
        $('.komentarz').children('.reset').click(function(){
            $('.pisz').val('');
            $('.pisz').show();
            $('.autor').val('');
            $('.przycisk').attr("disabled", "disabled");
            $('.komentarz').children('.licznik').text(140);
        });
    };
    var naglowektoggle = function(){
        $('.artykuly').click(function(){
            /*Zamkniecie poprzedniego artykulu*/
            $('.artykuly').removeClass('aktualny');
            $('.opis').hide();
            $('.komentarz').hide();
            $('.komm').hide();
            
            /*Klikniecie nowego artykulu i wysuniecie opisu, komentarzy itd. */
            $(this).addClass('aktualny');
            $(this).children('.opis').show();
            $(this).children('.komentarz').show();
            $(this).children('.komm').show();
            /*Sprawdzenie wszystkiego poprzez klikniecie*/
            var tekstpostu1 = $(this).children('.komentarz').children('.pisz').val().length;
            var tekstautor1 = $(this).children('.komentarz').children('.autor').val().length;
            var pozostalo1 = 140 - tekstpostu1;
            var pozostalo2 = 30 - tekstautor1;
            $(this).children('.komentarz').children('.licznik').text(pozostalo1);
            $(this).children('.komentarz').children('.licznik2').text(pozostalo2);
            if(pozostalo1 < 0 || pozostalo2 < 0)
            {
                $(this).children('.komentarz').children('.przycisk').attr("disabled", "disabled");
            }else if(pozostalo1 == 140)
            {
                $(this).children('.komentarz').children('.przycisk').attr("disabled", "disabled");
            }else {
                $(this).children('.komentarz').children('.przycisk').removeAttr("disabled");
            }
        });   
    };
    var komentarztoggle = function(){
        $('.komm').click(function(){
            $('.komm').removeClass('aktualny_k');
            $('.comm').hide();
            $(this).addClass('aktualny_k');
            $(this).children('.comm').show();
        });
    };
    var napkomentarztoggle = function(){
        $('.komentarz').children('.pisz').click(function(){
            $('.przycisk').attr("disabled", "disabled");
            $('.autor').fadeIn();
            $('.icon-left-open').fadeIn();
            $('.przycisk').fadeIn();
            $('.reset').fadeIn();
            $('.licznik').fadeIn();
            $('.licznik2').fadeIn();
            $('.pisz').animate({
                    width: "300px",
            },200);    
        });
    };
    var autorkomentarztoggle = function(){
            $('.komentarz').children('.autor').click(function(){
            
            $(this).animate({
                width: "155px",
            },200);
        });
    }; 
    var xclose = function(){
        $('.komentarz').children('.icon-left-open').click(function(){
            $('.autor').animate({
                width: "100px",
            },200);
            $('.autor').fadeOut();
            $('.icon-left-open').fadeOut();
            $('.przycisk').fadeOut();
            $('.reset').fadeOut();
            $('.licznik').fadeOut();
            $('.licznik2').fadeOut();
            $('.pisz').animate({
                    width: "200px",
            },200); 
        });
    };
    var check = function(){
        $('.artykuly').children('.komentarz').keyup(function(){
            $('.artykuly').children('.komentarz').removeClass('aktualny_p');
            $(this).addClass('aktualny_p');
            var tekstpostu2 = $(this).children('.pisz').val().length;
            var tekstautor2 = $(this).children('.autor').val().length;
            var pozostalo3 = 140 - tekstpostu2;
            var pozostalo4 = 30 - tekstautor2;
            $(this).children('.licznik').text(pozostalo3);
            $(this).children('.licznik2').text(pozostalo4);
            if(pozostalo3 < 0 || pozostalo4 < 0)
            {
                $(this).children('.przycisk').attr("disabled", "disabled");
            }else if(pozostalo3 == 140)
            {
                $(this).children('.przycisk').attr("disabled", "disabled");
            }else {
                $(this).children('.przycisk').removeAttr("disabled");
            }
        });
    };
    var checkautor = function(){
        $('.artykuly').children('.komentarz').children('.autor').keyup(function(){
            var tekstautor3 = $(this).val().length;
            var tekstpost3 = $('.artykuly').children('.komentarz').children('.pisz').val().length;
            var pozostalo5 = 140 - tekstpost3;
            var pozostalo6 = 30 - tekstautor3;
            $('.komentarz').children('.licznik2').text(pozostalo6);
            if(pozostalo5 < 0 || pozostalo6 < 0)
            {
                $('.artykuly').children('.komentarz').children('.przycisk').attr("disabled", "disabled");
            }else if(pozostalo5 == 140)
            {
                $('.artykuly').children('.komentarz').children('.przycisk').attr("disabled", "disabled");
            }else {
                $('.artykuly').children('.komentarz').children('.przycisk').removeAttr("disabled");
            }
        });
    };
    napkomentarztoggle();
    xclose();
    resetpress(); 
    check(); 
    komentarztoggle();
    naglowektoggle();
    autorkomentarztoggle();
   /* checkautor();*/
	});