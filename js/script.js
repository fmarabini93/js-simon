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

    console.log(correctNumbers);

}, 3000)
//