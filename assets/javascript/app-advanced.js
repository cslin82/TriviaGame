// Global variable definitions
var newUL;
var newLI;
var qaDiv;

var timerMax = 10;
var timer = timerMax;
var timerfrac;
var counterID;
var timerOn = false;
var gameActive = false;

var currentQuestion;
var correct = 0;
var incorrect = 0;
var omit = 0;
var roundNumber = 0;

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
var questionDeck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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




$(document).ready(function () {

    // function declarations

    // Pick a question and show it 
    function newQuestion(qIndex) {
        // currentQuestion = Object.assign({}, gameQuestions[qIndex]);
        currentQuestion = gameQuestions[qIndex];
        $('#questionH2').text(currentQuestion.q);

        shuffleFY(answerDeck);
        for (var indexA = 0; indexA < 4; indexA++) {
            var myIndex = answerDeck[indexA];
            $('#answer-' + (indexA + 1) + '>h4').text(currentQuestion.a[myIndex]);
            $('#answer-' + (indexA + 1)).data("value", myIndex);
            $('#answer-' + (indexA + 1)).removeClass("list-group-item-success list-group-item-danger");
        }

        // and reset, show and start the timer
        gameActive = true;
        timer = timerMax;
        $('#timerbar').css("width", "100%");
        $('#timerrow').show();
        if (!timerOn) {
            $('#timerspan').text(timer);
            timerOn = true;
            counterID = setInterval(function () {
                timer--;

                $('#timerspan').text(timer);
                timerfrac = Math.round((timer / timerMax) * 100);
                $('#timerbar').css("width", timerfrac + "%");

                if (timer <= 0) {

                    $('#answer-' + (answerDeck.indexOf(0) + 1)).addClass("list-group-item-success");
                    // alert('time up');
                    $('#timerrow').hide();
                    omit++;

                    questiondone();

                    clearInterval(counterID);
                    timerOn = false;
                    return;
                }
            }, 1000);
        }
    }

    function questiondone() {
        if (roundNumber >= (gameQuestions.length - 1)) {
            setTimeout(gameEnd, 1000);
            return;
        } else {

            roundNumber++;
            setTimeout(function () {
                newQuestion(questionDeck[roundNumber]);
            }, 3000);
        }
    }
// Scoring function
function gameEnd() {
    // alert( 'correct: ' + correct + ' and incorrect: ' + incorrect + ' for a percentage of ' + Math.round(100*(correct/(correct+incorrect+omit)))+ '%' );
    qaDiv.empty();
    // $('#timerrow').hide();

    qaDiv.append($('<h2>').text('Game over!'));
    qaDiv.append($('<h3>').text('You got ' + correct + ' correct, missed ' + incorrect + ' and did not answer ' + omit + ' questions.'));
    qaDiv.append($('<h3>').text('Your score is ' + Math.round(100 * (correct / (correct + incorrect + omit))) + '%'));
    qaDiv.append('<button class="btn btn-primary btn-lg btn-block" id="starter-btn">Start a new game</button>');
    $('#starter-btn').click(function () {
        newGame();
    });
}
    console.log("ready!");
    qaDiv = $('#questionanswer');

    function newGame() {
        qaDiv.empty();
        // Dynamically generate question and answer elements, timer progress bar
        qaDiv.append($('<h2>').attr("id", "questionH2"));

        newUL = $('<ul>');
        newUL.addClass("list-group");

        for (var indexA = 0; indexA < 4; indexA++) {
            newLI = $('<li>');
            newLI.addClass("list-group-item text-center answers");
            newLI.attr("id", "answer-" + (indexA + 1));
            newLI.append($('<h4>'));
            newUL.append(newLI);
        }
        qaDiv.append(newUL);

        // Click listeners
        $('.answers').click(function () {
            if (gameActive) {
                if (timerOn) {
                    clearInterval(counterID);
                    timerOn = false;
                    $('#timerrow').hide();
                    console.log('timer stopped on answer, timer hidden');
                }
                if ($(this).data('value') === 0) {
                    $(this).addClass("list-group-item-success");
                    correct++;
                    // alert('correct');
                } else {
                    $(this).addClass("list-group-item-danger");
                    $('#answer-' + (answerDeck.indexOf(0) + 1)).addClass("list-group-item-success");
                    incorrect++;
                    // alert('incorrect');
                }
                gameActive = false;

                // *** need to move this out of this click handler so it handles non-answers
                questiondone();
            }
            // $('#timerrow').show();


        });



        shuffleFY(questionDeck);

        newQuestion(questionDeck[roundNumber]);

        // end newGame
    }

    $('#timerrow').hide();

    $('#starter').click(function () {
        newGame();
    });


    // end jQuery
});