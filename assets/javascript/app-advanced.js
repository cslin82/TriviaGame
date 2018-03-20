// Global variable definitions

var mainGameArea;
var newDiv;
var newUL;
var newLI;
var qaDiv;

var timerh;
var timerMax = 15;
var timer = timerMax;
var timerfrac;

var currentQuestion;
var correct = 0;
var incorrect = 0;

// Game questions for Smithsonian Institution theme
const gameQuestions = [
    {
        q: "In what year was the Smithsonian Institution established?",
        a: ["1846", "1861", "1934", "1776"],
        correct: 0 // array index of a
    },
    {
        q: "Who was the founding donor the Smithsonian is named after?",
        a: ["James Smithson", "Robert Smithson", "John Smith", "Samuel Smithsonian"],
        correct: 0 // array index of a
    },
    {
        q: "Which of these is National things is NOT a Smithsonian museum?",
        a: ["National Gallery of Art", "National Zoo", "National Museum of African American History and Culture", "National Museum of the American Indian"],
        correct: 0 // array index of a
    },

    {
        q: "Which of these National things is a Smithsonian museum?",
        a: ["National Postal Museum", "National Archives", "National Museum of Women in the Arts", "Washington Nationals"],
        correct: 0 // array index of a
    },

    {
        q: "At which Washington-area airport is the Steven F. Udvar-Hazy Center located?",
        a: ["Washington Dulles International Airport", "Ronald Reagan Washington National Airport", "Baltimore–Washington International Airport", "Andrews Air Force Base"],
        correct: 0 // array index of a
    },

    {
        q: "At which museum would you find the Greensboro Lunch Counter?",
        a: ["National Museum of American History", "National Museum of African American History and Culture", "Smithsonian American Art Museum", "Arthur M. Sackler Gallery"],
        correct: 0 // array index of a
    },
    {
        q: "Which of these Smithsonian museums is located on the National Mall?",
        a: ["Freer Gallery of Art", "Renwick Gallery", "National Postal Museum", "Anacostia Community Museum"],
        correct: 0 // array index of a
    },
    {
        q: "Which of these Smithsonian museums is the newest?",
        a: ["National Museum of African American History and Culture", "National Air and Space Museum", "Hirshhorn Museum and Sculpture Garden", "National Museum of Natural History"],
        correct: 0 // array index of a
    },
    {
        q: "Which Space Shuttle orbiter would you find at the Steven F. Udvar-Hazy Center?",
        a: ["Discovery", "Atlantis", "Endeavour", "Enterprise"],
        correct: 0 // array index of a
    },
    {
        q: "What government agency formerly occupied the current site of the Smithsonian American Art Museum and the National Portrait Gallery?",
        a: ["Patent Office", "Department of War", "National Endowment for the Arts", "Department of Education"],
        correct: 0 // array index of a
    },
]



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



$(document).ready(function() {

    console.log( "ready!" );
    // debugger;
    
    // Create selectors
    mainGameArea = $('#main-game-area');
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
        
        newLI.data("value", indexA);
        console.log('data-value set to ' + indexA );
        newLI.append($('<h4>'));
        newUL.append(newLI);
        console.log('li ' + indexA + ' appended to ul');
        
    }
    $('#questionanswer').append(newUL);
    console.log('ul appended to #questionanswer');

    // Pick a question and show it 
    currentQuestion = Object.assign({}, gameQuestions[randomInt(0, gameQuestions.length)]);
    $('#questionH2').text(currentQuestion.q);

    for (var indexA = 0; indexA < 4; indexA++) {
        $('#answer-' + (indexA+1) + '>h4').text(currentQuestion.a[indexA]);
    }
    // wrap this in a for loop later



     // Click listeners
    $('.answers').click(function() {
        console.log('clicked ' + $(this).attr('id'));
        console.log('and data.value is ' + $(this).data('value'));
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
    


// end jQuery
});