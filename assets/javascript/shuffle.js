// shuffle functions from https://bost.ocks.org/mike/shuffle/compare.html
function shuffle(array) {
    var random = array.map(Math.random);
    array.sort(function (a, b) {
        return random[a] - random[b];
    });
}

function shuffleFY(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
}

// Durstenfeld shuffle https://stackoverflow.com/a/12646864/9314937 
function shuffleD(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
