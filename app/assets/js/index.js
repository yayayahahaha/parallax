document.addEventListener("DOMContentLoaded", function() {
    var btns = document.querySelectorAll(".btn");
    for (var i = 0; i < btns.length; i++) {
        clickMaker(btns[i], i);
    }

    /* seperate sentence */
    var sentences = document.querySelectorAll(".content");
    var spans = [];

    /* make a shuffle number array */
    var numbers = [];
    for (var i = 0; i < sentences[0].innerHTML.length; i++) {
        numbers.push(i);
    }
    numbers = messArray(numbers);

    /* make four array has many span with word innerHTML */
    for (var i = 0; i < sentences.length; i++) {

        spans[i] = [];
        for (var j = 0; j < sentences[i].innerHTML.length; j++) {
            var span = document.createElement("span");
            span.innerHTML = sentences[i].innerHTML[j];
            spans[i].push(span);
        }

        /* clean up each sentence and append span */
        sentences[i].innerHTML = "";
        for (var j = 0; j < spans[i].length; j++) {
            sentences[i].appendChild(spans[i][j]);
        }

        /* use shuffle number array decide which span should change color */
        words = sentences[i].childNodes;
        for (var j = i * Math.floor(words.length / 4); j < (i + 1) * Math.floor(words.length / 4); j++) {
            words[numbers[j]].style.color = "rgba(0,0,0,0.5)";
        }
    }
});

function clickMaker(obj, number, callback) {
    obj.onclick = function() {
        $(".perspectiveView").animate({
                scrollTop: document.all.forHeight.offsetHeight * number,
            },
            1500);
    }
}

function messArray(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}