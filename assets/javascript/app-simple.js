// Global variables

// timer variables

// game divs and spans

var timerh;
var mainGameArea;
var currentQuestion;
var correct = 0;
var incorrect = 0;

var timerMax = 120;
var timer = timerMax;
var counterID;
var timerOn = false;


function scoreGame() {
    $('#radio-1d').is(":checked") ? correct++ : incorrect++;
    $('#radio-2a').is(":checked") ? correct++ : incorrect++;
    $('#radio-3c').is(":checked") ? correct++ : incorrect++;
    $('#radio-4a').is(":checked") ? correct++ : incorrect++;
    $('#radio-5a').is(":checked") ? correct++ : incorrect++;
    $('#radio-6c').is(":checked") ? correct++ : incorrect++;
    $('#radio-7d').is(":checked") ? correct++ : incorrect++;
    $('#radio-8b').is(":checked") ? correct++ : incorrect++;
    $('#radio-9d').is(":checked") ? correct++ : incorrect++;
    $('#radio-10a').is(":checked") ? correct++ : incorrect++;

    $('#main-game-area').hide();

    $('#result').text('correct: ' + correct + ' and incorrect: ' + incorrect + ' for a percentage of ' + Math.round(100*(correct/(correct+incorrect)))+ '%');



}

// Main jQuery wrapper
$(document).ready(function() {

    console.log( "ready!" );
    // debugger;

    timerDiv = $('#timer');
    timerh = $('#timerh');
    timersp = $('#timersp');
    mainGameArea = $('#main-game-area');

    timerDiv.hide();
    mainGameArea.hide();
    
    $('#start-game').click(function() {
        $(this).hide();
        timerDiv.show();
        mainGameArea.show();
        timer = timerMax;



        if (!timerOn) {
            timersp.text(timer);
            timerOn = true;
            counterID = setInterval(function () {
                timer--;
    
                timersp.text(timer);
    
                if (timer <= 0) {
                    
                    alert('time up');
                    scoreGame();
                    clearInterval(counterID);
                    timerOn = false;
                    return;
                }
            }, 1000);
        }
    
    });



    $('#score-me').click(scoreGame);


    



});