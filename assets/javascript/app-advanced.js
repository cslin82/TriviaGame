// Global variable definitions

// var mainGameArea;
var newUL;
var newLI;
var qaDiv;

var timerMax = 10;
var timer = timerMax;
var timerfrac;
var counterID;
var timerOn = false;

var currentQuestion;
var correct = 0;
var incorrect = 0;



// Game questions for Smithsonian Institution theme
const gameQuestions = [
    {
        q: "In what year was the Smithsonian Institution established?",
        a: ["1846", "1861", "1934", "1776"],
    },
    {
        q: "Who was the founding donor the Smithsonian is named after?",
        a: ["James Smithson", "Robert Smithson", "John Smith", "Samuel Smithsonian"],
    },
    {
        q: "Which of these is National things is NOT a Smithsonian museum?",
        a: ["National Gallery of Art", "National Zoo", "National Museum of African American History and Culture", "National Museum of the American Indian"],
    },
    {
        q: "Which of these National things is a Smithsonian museum?",
        a: ["National Postal Museum", "National Archives", "National Museum of Women in the Arts", "Washington Nationals"],
    },
    {
        q: "At which Washington-area airport is the Steven F. Udvar-Hazy Center located?",
        a: ["Washington Dulles International Airport", "Ronald Reagan Washington National Airport", "Baltimore–Washington International Airport", "Andrews Air Force Base"],
    },
    {
        q: "At which museum would you find the Greensboro Lunch Counter?",
        a: ["National Museum of American History", "National Museum of African American History and Culture", "Smithsonian American Art Museum", "Arthur M. Sackler Gallery"],
    },
    {
        q: "Which of these Smithsonian museums is located on the National Mall?",
        a: ["Freer Gallery of Art", "Renwick Gallery", "National Postal Museum", "Anacostia Community Museum"],
    },
    {
        q: "Which of these Smithsonian museums is the newest?",
        a: ["National Museum of African American History and Culture", "National Air and Space Museum", "Hirshhorn Museum and Sculpture Garden", "National Museum of Natural History"],
    },
    {
        q: "Which Space Shuttle orbiter would you find at the Steven F. Udvar-Hazy Center?",
        a: ["Discovery", "Atlantis", "Endeavour", "Enterprise"],
    },
    {
        q: "What government agency formerly occupied the current site of the Smithsonian American Art Museum and the National Portrait Gallery?",
        a: ["Patent Office", "Department of War", "National Endowment for the Arts", "Department of Education"],
    },
]

// easiest to hard code these, could generalize with for loop or fancy array.apply() methods
// https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n https://stackoverflow.com/a/20066663
var answerDeck = [0, 1, 2, 3];
var questionDeck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

// Scoring function
function gameEnd() {
    alert( 'correct: ' + correct + ' and incorrect: ' + incorrect + ' for a percentage of ' + Math.round(100*(correct/(correct+incorrect)))+ '%' );
}

// Pick a question and show it 
function newQuestion(qIndex) {
    currentQuestion = Object.assign({}, gameQuestions[qIndex]);
    $('#questionH2').text(currentQuestion.q);
    shuffleFY(answerDeck);
    console.log('answerDeck: '+ answerDeck);

    // could do this the other way***
    for (var indexA = 0; indexA < 4; indexA++) {
        var myIndex = answerDeck[indexA];
        $('#answer-' + (indexA+1) + '>h4').text(currentQuestion.a[myIndex]);
        $('#answer-' + (indexA+1)).data("value", myIndex);
        $('#answer-' + (indexA+1)).removeClass("list-group-item-success list-group-item-danger");
    }

    // and reset, show and start the timer
    timer = timerMax;
    $('#timerbar').css("width", "100%");
    $('#timerrow').show();
    console.log('timer started');
    if (!timerOn) {
        $('#timerspan').text(timer);
        timerOn = true;
        counterID = setInterval(function () {
            timer--;
            console.log(timer);

            $('#timerspan').text(timer);
            timerfrac = Math.round((timer / timerMax) * 100);
            $('#timerbar').css("width", timerfrac + "%");

            if (timer <= 0) {
                
                $('#answer-' + (answerDeck.indexOf(0)+1)).addClass("list-group-item-success");
                alert('time up');

                

                clearInterval(counterID);
                timerOn = false;
                return;
            }
        }, 1000);
    }


}

$(document).ready(function() {

    console.log( "ready!" );
    // debugger;
    
    // Create selectors
    // mainGameArea = $('#main-game-area');
    // mainContainer = $('.container'); // would need to also define globally
    qaDiv = $('#questionanswer');


    // Dynamically generate question and answer elements, timer progress bar
    // newDiv = $('<div>');
    // newDiv.addClass("col-md-8 col-md-offset-2").attr("id", "questionanswer").append($('<h2>').attr("id","questionH2"));
    $('#questionanswer').append($('<h2>').attr("id","questionH2"));
    
    newUL = $('<ul>');
    newUL.addClass("list-group");
    
    for (var indexA = 0; indexA < 4; indexA++) {
        newLI = $('<li>');
        newLI.addClass("list-group-item text-center answers");
        newLI.attr("id", "answer-" + (indexA+1));
        console.log('id set to ' + "answer-" + (indexA+1) );
        
        newLI.append($('<h4>'));
        newUL.append(newLI);
        console.log('li ' + indexA + ' appended to ul');
        
    }
    $('#questionanswer').append(newUL);
    console.log('ul appended to #questionanswer');

    // Pick a question and show it source
    
    

    // Click listeners
    $('.answers').click(function() {
        console.log('clicked ' + $(this).attr('id'));
        console.log('and data.value is ' + $(this).data('value'));

        if (timerOn) {
            clearInterval(counterID);
            timerOn = false;
            $('#timerrow').hide();
            console.log('timer stopped on answer, timer hidden');

        }
        if ($(this).data('value') === 0) {
            $(this).addClass("list-group-item-success");
            alert('correct');
        } else {
            $(this).addClass("list-group-item-danger");
            alert('incorrect');
        }


    });
    
    $('#timerbar').click(function(){
        timer--;
        timerfrac = Math.round( (timer/timerMax) * 100 );
        $('#timerspan').text(timer);
        $(this).css("width", timerfrac+"%");
    });
    
    $('#questionH2').click(function(){
        $('#questionanswer').hide();
        $('.progress').hide();
    });
    
    $('#headh1').click(function(){
        $('#questionanswer').show();
        $('.progress').show();
    });
    
    newQuestion(randomInt(0,10));


    // temporary for timer testing
    $('#startbutton').click(function () {
        console.log('start button pressed');
        if (!timerOn) {
            $('#timerspan').text(timer);
            timerOn = true;
            counterID = setInterval(function () {
                timer--;
                console.log(timer);

                $('#timerspan').text(timer);
                timerfrac = Math.round((timer / timerMax) * 100);
                $('#timerbar').css("width", timerfrac + "%");

                if (timer <= 0) {
                    
                    alert('time up');


                    clearInterval(counterID);
                    timerOn = false;
                    return;
                }
            }, 1000);
        }

    });


    $('#stopbutton').click(function () {
        if (timerOn) {
            clearInterval(counterID);
            timerOn = false;

        }

    });







// end jQuery
});