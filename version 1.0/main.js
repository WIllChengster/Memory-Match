

$(document).ready(initiateApp);

function initiateApp(){
    createCards();
    // $('.flip').on('click', flip);
    $('#game-area').on('click', '.flip' , flip );
    $('.game-area').on('click', '.flip', card_clicked);
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

var cards=[];

function createCards(){
    var newCardsArray = cardFrontArray.slice();

    for(var i=0; i<9; i++){
        var cardflip = $('<div>').addClass('flip');
        var card = $('<div>').addClass('card');
        var front = $('<div>').addClass('front');
        var back = $('<div>').addClass('back');
        var frontIndex = Math.floor(Math.random()*(newCardsArray.length));
        var gameArea = $('#game-area');

        $(front).css(
            'background-image', newCardsArray[frontIndex]
        );

        newCardsArray.splice(frontIndex,1);

        $(back).css(
            'background-image', 'url(../images/yugioh-card-back.jpg)'
        );
        $(card).append(front);
        $(card).append(back);
        $(cardflip).append(card);
        // $(gameArea).append(cardflip);
        var cardflip2 = $(cardflip).clone();
        // $(gameArea).append(card2);
        cards.push(cardflip);
        cards.push(cardflip2);


    }
    console.log(newCardsArray);
    for(var i=0; i<18; i++){
        var randomIndex = Math.floor(Math.random()*(cards.length));
        $(gameArea).append(cards[randomIndex]);
        cards.splice(randomIndex,1)
    }

}

