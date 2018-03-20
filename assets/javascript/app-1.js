var mainGameArea;
var newDiv;

var testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Main jQuery wrapper
$(document).ready(function() {

    console.log( "ready!" );
    // debugger;
    
    
    mainGameArea = $('#main-game-area');
    


    $('#go').click(function() {

        for (var i = 0; i < testArray.length; i++) {
            newDiv = $('<div>');
            newDiv.addClass('class' + testArray[i]);
            newDiv.text("new div of class class" + testArray[i]);
            mainGameArea.append(newDiv);
            console.log("appended" + testArray[i]);

        }



    });





});