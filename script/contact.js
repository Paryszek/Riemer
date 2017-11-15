$(document).ready(function() {
        var main = function() {
            var inputOne = $('form').children('.contactInputOne');
            var inputTwo = $('form').children('.contactInputTwo');
            var inputThree = $('form').children('.contactInputThree');
            var inputFour = $('form').children('.contactInputFour');
            var TEXTBOX_MAX_CHARACTERS = 2000;
            var INPUTBOX_MAX_CHARACTERS = 40;
            var inputValidationOne = false;
            var inputValidationTwo = false;
            var inputValidationThree = false;
            var inputValidationFour = false;
            var isDiscovered = false;
            $('.mapToggle').click(function(){
                if(!isDiscovered) {
                    $(this).addClass('buttonClick');
                    $('.map').animate({
                        height: "450px",
                    },1000);
                    $('html,body').animate({
                        scrollTop: $('.map').offset().top}, 'slow');
                    isDiscovered = true;
                } else {
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
                    inputValidationOne = false;
                    inputValidationTwo = false;
                    inputValidationThree = false;
                    inputValidationFour = false;
                    $('form').children('.contactCounterOne').text(INPUTBOX_MAX_CHARACTERS);
                    $('form').children('.contactCounterTwo').text(INPUTBOX_MAX_CHARACTERS);
                    $('form').children('.contactCounterThree').text(INPUTBOX_MAX_CHARACTERS);
                    $('form').children('.contactCounterFour').text(TEXTBOX_MAX_CHARACTERS);
                    $('form').children('.contactInputFive').attr("disabled", "disabled");
                });
                inputOne.keyup(function () {
                    if($(this).val() != '') {
                        inputValidationOne = true;
                    }else{
                        inputValidationOne = false;
                    }
                    var inputStringCounter = INPUTBOX_MAX_CHARACTERS - $(this).val().length;
                    $('form').children('.contactCounterOne').text(inputStringCounter);

                    if($(this).val().length > INPUTBOX_MAX_CHARACTERS)
                    {
                        inputValidationOne = false;
                        $('form').children('.contactInputFive').attr("disabled", "disabled");
                    }

                });
                inputTwo.keyup(function () {
                    if($(this).val() != '') {
                        inputValidationTwo = true;
                    } else {
                        inputValidationTwo = false;
                    }
                    var inputStringCounter = INPUTBOX_MAX_CHARACTERS - $(this).val().length;
                    $('form').children('.contactCounterTwo').text(inputStringCounter);
                    if($(this).val().length > INPUTBOX_MAX_CHARACTERS)
                    {
                        inputValidationTwo = false;
                        $('form').children('.contactInputFive').attr("disabled", "disabled");
                    }

                });
                inputThree.keyup(function () {
                    if($(this).val() != '') {
                        inputValidationThree = true;
                    }else{
                        inputValidationThree = false;
                    }
                    var inputStringCounter = INPUTBOX_MAX_CHARACTERS - $(this).val().length;
                    $('form').children('.contactCounterThree').text(inputStringCounter);
                    if($(this).val().length > INPUTBOX_MAX_CHARACTERS)
                    {
                        inputValidationThree = false;
                        $('form').children('.contactInputFive').attr("disabled", "disabled");
                    }

                });
                inputFour.keyup(function () {
                    if($(this).val() != '') {
                        inputValidationFour = true;
                    }else{
                        inputValidationFour = false;
                    }
                    var inputStringCounter = TEXTBOX_MAX_CHARACTERS - $(this).val().length;
                    $('form').children('.contactCounterFour').text(inputStringCounter);
                    if($(this).val().length > TEXTBOX_MAX_CHARACTERS)
                    {
                        inputValidationFour = false;
                        $('form').children('.contactInputFive').attr("disabled", "disabled");
                    }

                });

                $('form').keyup(function () {
                    if(inputValidationOne == 1 && inputValidationTwo == 1 && inputValidationThree == 1 && inputValidationFour == 1) {
                        $('form').children('.contactInputFive').removeAttr("disabled");
                    }else{
                        $('form').children('.contactInputFive').attr("disabled", "disabled");
                    }
                });
            };
        main();
	});
