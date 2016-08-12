$(document).ready(function() {
        var isUsed = false;
        var Sliders = function() {
        $('.dots').children('.dot').click(function(){
            $('.dots').children('.dot').removeClass('dotActive');
            $(this).addClass('dotActive')
            var current = $(this);
            var amount = 0;
            while(current.length !== 0){
                current = current.next();
                amount++;
            }
            var lastOne = $('.companyOffer').children('.offer').last();
            var active = $('.companyOffer').children('.offerActive');
            while(amount-1 > 0){
              lastOne = lastOne.prev();
              amount--;
            }
            active.fadeOut(400).removeClass('offerActive');
            lastOne.fadeIn(400).addClass('offerActive');
        });
        $('.arrowRight').click(function() {
            var current = $('.pictureActive');
            var nextOne = current.next();
            isUsed = true;
            if(nextOne.length === 0){
                nextOne = $('.gearPicture').first();
            }
            current.css('display','');
            current.fadeOut(1000).removeClass('pictureActive');
            nextOne.fadeIn(1000).addClass('pictureActive');
        });
        $('.arrowLeft').click(function() {
            var current = $('.pictureActive');
            var prevOne = current.prev();
            if(prevOne.length === 0){
                prevOne = $('.gearPicture').last();
            }
            isUsed = true;
            current.css('display','');
            current.fadeOut(1000).removeClass('pictureActive');
            prevOne.fadeIn(1000).addClass('pictureActive');
        });
        setInterval(function(){
            if(!isUsed){
                var current = $('.pictureActive');
                var nextOne = current.next();
                if(nextOne.length === 0){
                    nextOne = $('.gearPicture').first();
                }
                current.css('display','');
                current.fadeOut(1000).removeClass('pictureActive');
                nextOne.fadeIn(1000).addClass('pictureActive');
            }
        }, 5000);
    };
    Sliders();
});
