function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Check if an element is in an array
function inArray(element, list) {
    
    for (i = 0; i < list.length; i ++) {
        if (element == list[i]) {
            return true;
        }
    }
    return false;
}
//

// Print 5 random numbers
var numbers = [];
for (i = 0; i < 5; i ++) {    
    
    do {
        var number = getRandomNumber(1, 100);
    } while (inArray(number, numbers) == true) // --> Check if a number is repeated
    
    numbers.push(number);
}
alert("These are the numbers you must memorize " + numbers);
//

var seconds = 30;
var countdown = setInterval(function() {
    document.getElementById("countdown").innerHTML = seconds;
    if (seconds == 0) {
        document.getElementById("countdown").innerHTML = "Time's up!"
        clearInterval(countdown);
    } else {
        seconds--;
    }
}, 1000);

// User types 5 numbers and program checks if present in previous array
setTimeout(function() {   
    
    var choice;
    var choices = [];
    correctNumbers = [];

    for (i = 0; i < 5; i ++) {
        do {
            choice = parseInt(prompt("Please type a number"))
        } while (isNaN(choice) == true || choice < 1 || choice > 100) // --> Check if entry is a number between 1 and 100

        choices.push(choice);
    }

    for (i = 0; i < 5; i ++) {
        if (inArray(choices[i], numbers) == true) {
            correctNumbers.push(choices[i]);
        }
    }

    if (correctNumbers.length == 0) {
        document.getElementById("countdown").innerHTML = "You definitely should improve your memory! <i class='fas fa-frown-open'></i>"
    } else if (correctNumbers.length > 0 && correctNumbers.length < 3) {
        document.getElementById("countdown").innerHTML = "Mmmmh, you can do better <i class='fas fa-meh'></i> .. here are the remembered numbers: " + correctNumbers;
    } else {
        document.getElementById("countdown").innerHTML = "Well done! <i class='fas fa-grin-wink'></i> Here are the correct numbers: " + correctNumbers;
    }

}, 32000)
//