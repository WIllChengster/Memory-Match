
$(document).ready(initiateApp);

function initiateApp(){
    $('.card').on('click',card_clicked);

}






var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches=2;
var match_counter = 0;



function card_clicked(){
    if(first_card_clicked === null){
        $(this).addClass('clicked');
        $('.clicked > .front').toggle();
        $('.clicked > .back').toggle();
        first_card_clicked=$('.clicked').html();


    } else {
        $(this).addClass('clicked2');
        $('.clicked2 > .front').toggle();
        $('.clicked2 > .back').toggle();
        second_card_clicked=$('.clicked2').html();
        if (first_card_clicked === second_card_clicked){
            console.log('hello');
            match_counter +=1;
            first_card_clicked = null;
            second_card_clicked = null;
            $('div').removeClass("clicked clicked2");
            if(match_counter === total_possible_matches){
                alert("You have won!")
            }
            } else{
            $('.card').off('click',card_clicked);
            setTimeout(function(){
                first_card_clicked = null;
                second_card_clicked = null;
                $('.clicked > .front').toggle();
                $('.clicked > .back').toggle();
                $('.clicked2 > .front').toggle();
                $('.clicked2 > .back').toggle();
                $('.card')
                    .removeClass("clicked clicked2")
                    .on('click',card_clicked);

            }, 2000);

        }


        }
}