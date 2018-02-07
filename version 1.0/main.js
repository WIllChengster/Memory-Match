

$(document).ready(initiateApp);

function initiateApp(){
    createCards();
    $('.outer').on('click', flip);
}

function flip(){
    $(this).addClass('flipped')
}

var cardFrontArray = [
    'url(../images/dbs.png)',
    'url(../images/hero-academia.jpg)',
    'url(../images/inuyasha.jpg)',
    'url(../images/FMA.png)',
    'url(../images/erased.jpeg)',
    'url(../images/tokyo-ghoul.jpg)',
    'url(../images/one-punch.jpg)',
    'url(../images/your-lie-in-april.jpg)',
    'url(../images/your-name.jpg)'
];

function createCards(){

    for(var i=0; i<9; i++){
        for (var x=0; x<2; x++){
            var outerCard = $('<div>').addClass('outer');
            var card = $('<div>').addClass('card');
            var front = $('<div>').addClass('front');
            var back = $('<div>').addClass('back');
            var frontIndex = Math.floor(Math.random()*9);

            $(front).css(
                'background-image', cardFrontArray[frontIndex]
            );

            $(back).css(
                'background-image', 'url(../images/yugioh-card-back.jpg)'
            );
            $(card).append(front);
            $(card).append(back);
            $(outerCard).append(card);
            $('#game-area').append(outerCard);

        }


    }










}