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

    $('#questionH2').text('Question text inserted');

    for (var indexA = 0; indexA < 4; indexA++) {
        $('#answer-' + (indexA+1) + '>h4').text('answer ' + (indexA+1))
    }

    
    // Add question elements

    // newDiv = $('<div>');
    // newDiv.text(gameQuestion1.q);
    // mainGameArea.append(newDiv);
    // console.log("appended q");

    // for (var i = 0; i < gameQuestion1.a.length; i++) {
    //     newDiv = $('<div>');
    //     newDiv.addClass('class' + gameQuestion1.a[i]);
    //     newDiv.text("new div of class class" + testArray[i] + " and question is " + gameQuestion1.a[i]);
    //     mainGameArea.append(newDiv);
    //     console.log("appended a" + gameQuestion1.a[i]);

    // }

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