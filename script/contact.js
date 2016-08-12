$(document).ready(function() {
        var main = function() {
            var inputOne = $('form').children('.contactInputOne');
            var inputTwo = $('form').children('.contactInputTwo');
            var inputThree = $('form').children('.contactInputThree');
            var inputFour = $('form').children('.contactInputFour');
            var inputValidationOne = 0;
            var inputValidationTwo = 0;
            var inputValidationThree = 0;
            var inputValidationFour = 0;
            var isDiscovered = false;
            $('.mapToggle').click(function(){
                if(!isDiscovered){
                    $(this).addClass('buttonClick');
                    $('.map').animate({
                        height: "450px",
                    },1000);
                    $('html,body').animate({
                        scrollTop: $('.map').offset().top}, 'slow');
                    isDiscovered = true;
                }else{
                    $(this).removeClass('buttonClick');
                    $('.map').animate({
                        height: "0px",
                    },1000);
                    isDiscovered = false;
                }
            });
             $('form').children('.contactInputFive').attr("disabled", "disabled");
                $('form').children('.contactInputSix').click(function() {
                    inputOne.val('');
                    inputTwo.val('');
                    inputThree.val('');
                    inputFour.val('');
                    inputValidationOne = 0;
                    inputValidationTwo = 0;
                    inputValidationThree = 0;
                    inputValidationFour = 0;
                    $('form').children('.contactCounterOne').text(40);
                    $('form').children('.contactCounterTwo').text(40);
                    $('form').children('.contactCounterThree').text(40);
                    $('form').children('.contactCounterFour').text(200);
                    $('form').children('.contactInputFive').attr("disabled", "disabled");
                });
                inputOne.keyup(function(){
                    if($(this).val() != ''){
                        inputValidationOne = 1;
                    }else{
                        inputValidationOne = 0;
                    }
                    var inputStringCounter = 40 - $(this).val().length;
                    $('form').children('.contactCounterOne').text(inputStringCounter);

                    if($(this).val().length > 40)
                    {
                        inputValidationOne = 0;
                        $('form').children('.contactInputFive').attr("disabled", "disabled");
                    }

                });
                inputTwo.keyup(function(){
                    if($(this).val() != ''){
                        inputValidationTwo = 1;
                    }else{
                        inputValidationTwo = 0;
                    }
                    var inputStringCounter = 40 - $(this).val().length;
                    $('form').children('.contactCounterTwo').text(inputStringCounter);
                    if($(this).val().length > 40)
                    {
                        inputValidationTwo = 0;
                        $('form').children('.contactInputFive').attr("disabled", "disabled");
                    }

                });
                inputThree.keyup(function(){
                    if($(this).val() != ''){
                        inputValidationThree = 1;
                    }else{
                        inputValidationThree = 0;
                    }
                    var inputStringCounter = 40 - $(this).val().length;
                    $('form').children('.contactCounterThree').text(inputStringCounter);
                    if($(this).val().length > 40)
                    {
                        inputValidationThree = 0;
                        $('form').children('.contactInputFive').attr("disabled", "disabled");
                    }

                });
                inputFour.keyup(function(){
                    if($(this).val() != ''){
                        inputValidationFour = 1;
                    }else{
                        inputValidationFour = 0;
                    }
                    var inputStringCounter = 200 - $(this).val().length;
                    $('form').children('.contactCounterFour').text(inputStringCounter);
                    if($(this).val().length > 200)
                    {
                        inputValidationFour = 0;
                        $('form').children('.contactInputFive').attr("disabled", "disabled");
                    }

                });

                $('form').keyup(function(){
                    if(inputValidationOne == 1 && inputValidationTwo == 1 && inputValidationThree == 1 && inputValidationFour == 1){
                        $('form').children('.contactInputFive').removeAttr("disabled");
                    }else{
                        $('form').children('.contactInputFive').attr("disabled", "disabled");
                    }
                });
            };
        main();
	});
