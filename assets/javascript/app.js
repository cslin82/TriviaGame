// Global variables

// timer variables

// game divs and spans

var timerh;
var mainGameArea;
var currentQuestion;

// game reset/initialize

// array or object of questions of form question text, answer choices, correct answer

const gameQuestions = [
    {
        q: "question 1",
        a: [
            "a",
            "b",
            "c",
            "d"            
        ],
        correct: 0 // array index of a
    },


]


// 

// inclusive
function randomInt(min, max) {
    return Math.floor(min + Math.random() * (1 + max - min));
}

// shuffle functions from https://bost.ocks.org/mike/shuffle/compare.html
function shuffleFY(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
}

function showQ(q, index) {
    console.log('showQ called');
    // console.log('question:' + q[index].question);
    // console.log('answers array: ' + q[index].answers);
}

function showQ2() {
    console.log('showQ2 called');
    console.log('currentQuestion: ' + currentQuestion);
    currentQuestion++;

}

function clearQ() {
    console.log('clearQ called');
}

function timerExpire() {
    console.log('timerExpire called');
}

// Main jQuery wrapper
$(document).ready(function() {

    console.log( "ready!" );
    // debugger;
    currentQuestion = 0;


    timerh = $('#timerh');
    timersp = $('#timersp');
    mainGameArea = $('#main-game-area');

    $('#showQ').click(showQ);
    $('#showQ2').click(showQ2);
    $('#clearQ').click(clearQ);
    $('#timerExpire').click(timerExpire);

    



});