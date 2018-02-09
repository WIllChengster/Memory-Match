

$(document).ready(initiateApp);

function initiateApp(){
    createCards();
    $('#game-area').on('click', '.flip' , flipOnClick);
    $('#game-area').on('click', '.flip', card_clicked);
    display_stats();
    $('.reset').on('click', function(){
        reset_stats();
        display_stats();
})
}

function flipOnClick(){
    $(this).addClass('flipped')
}

var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var match_counter = 0;
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;

var cardData = {
    dbs:{
        front:'url(../images/dbs.png)',
        video: ''
    },
    heroAcademia:{
        front:'url(../images/hero-academia.jpg)',
        video: ''

    },
    inuyasha:{
        front: 'url(../images/inuyasha.jpg)',
        video: ''
    },
    FMA:{
        front: 'url(../images/FMA.png)',
        video:'https://www.youtube.com/embed/km2OPUctni4?start=178&autoplay=1&controls=0'
    },
    erased:{
        front: 'url(../images/erased.jpeg)',
        video: ''
    },
    tokyoGhoul:{
        front: 'url(../images/tokyo-ghoul.jpg)',
        video: ''
    },
    onePunch:{
        front: 'url(../images/one-punch.jpg)',
        video: ''
    },
    yourLie:{
        front: 'url(../images/your-lie-in-april.jpg)',
        video: ''
    },
    yourName:{
        front: 'url(../images/your-name.jpg)',
        video: ''
    }

};

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
        var gameArea = $('#game-area');
        $(front).css(
            'background-image', newCardsArray[newCardsArray.length-1]
        );
        newCardsArray.splice(newCardsArray.length-1,1);
        $(back).css(
            'background-image', 'url(../images/yugioh-card-back.jpg)'
        );
        $(card).append(front);
        $(card).append(back);
        $(cardflip).append(card);
        var cardflip2 = $(cardflip).clone();
        cards.push(cardflip);
        cards.push(cardflip2);


    }
    console.log(newCardsArray);
    for(i=0; i<18; i++){
        var randomIndex = Math.floor(Math.random()*(cards.length-1));
        console.log(randomIndex);
        $(gameArea).append(cards[randomIndex]);
        cards.splice(randomIndex,1)
    }

}

function card_clicked(){
    if (first_card_clicked === null){
        $(this).addClass('click1');
        first_card_clicked=$('.click1').html()
    } else {
        $(this).addClass('click2');
        attempts +=1;
        second_card_clicked = $('.click2').html();
        if (first_card_clicked === second_card_clicked){
            console.log("matched!");
            match_counter +=1;



            first_card_clicked = null;
            second_card_clicked = null;
            $('div').removeClass('click1 click2');
            if (match_counter === total_possible_matches){
                alert("You have own!")
            }
        } else {
            $('#game-area').off('click', flipOnClick);
            $('#game-area').off('click', card_clicked);
            setTimeout(function(){
                first_card_clicked = null;
                second_card_clicked = null;
                $('.click1, .click2').removeClass('flipped click1 click2');
                $('#game-area').on('click','.flip', flipOnClick);
                $('#game-area').on('click','.flip', card_clicked);

            }, 1100)
        }
    } display_stats();
}

function display_stats(){
    console.log('updating stats');
    $('.games-played > .value ').text(games_played);
    $('.attempts > .value').text(attempts);
    accuracy = (match_counter/attempts)*100;
    if(match_counter===0){
        accuracy=0;
    }
    $('.accuracy > .value').text(accuracy.toFixed(2) +'%')
}

function reset_stats(){
    games_played +=1 ;
    matches = 0;
    attempts = 0;
    display_stats();
    $('.flip').addClass('flipped');
    setTimeout(function(){
        $('div').removeClass('flipped');
    },2000);


    setTimeout(function(){
        setTimeout(function(){
            $('div').removeClass('flipped');
        },2000);
        $('.flip').remove();
        createCards();
    },3000);

}


















