
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
        first_card_clicked=$('.clicked');
    } else {
        $(this).addClass('clicked2');
        $('.clicked2 > .front').toggle();
        $('.clicked2 > .back').toggle();

    }


}