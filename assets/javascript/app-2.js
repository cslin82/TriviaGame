var mainGameArea;
var newDiv;

var testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const gameQuestion1 = {
    q: "Who was the founding donor the Smithsonian is named after?",
    a: [
        "James Smithson", "Robert Smithson", "John Smith", "Samuel Smithsonian"
    ],
    correct: 0 // array index of a
};

// Main jQuery wrapper
$(document).ready(function() {

    console.log( "ready!" );
    // debugger;
    
    
    mainGameArea = $('#main-game-area');
    


    $('#go').click(function() {
        
        newDiv = $('<div>');
        newDiv.text(gameQuestion1.q);
        mainGameArea.append(newDiv);
        console.log("appended q");

        for (var i = 0; i < gameQuestion1.a.length; i++) {
            newDiv = $('<div>');
            newDiv.addClass('class' + gameQuestion1.a[i]);
            newDiv.text("new div of class class" + testArray[i] + " and question is " + gameQuestion1.a[i]);
            mainGameArea.append(newDiv);
            console.log("appended a" + gameQuestion1.a[i]);

        }

        



    });





});