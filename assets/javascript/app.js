// Global variables

// timer variables

// game divs and spans

// game reset/initialize

// array or object of questions of form question text, answer choices, correct answer

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

// Main jQuery wrapper
$(document).ready(function() {

    console.log( "ready!" );

});