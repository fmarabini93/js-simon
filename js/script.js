function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function inArray(element, list) {
    for (i = 0; i < list.length; i ++) {
        if (element == list[i]) {
            return true;
        }
    }
    return false;
}

var numbers = [];
for (i = 0; i < 5; i ++) {
    do {
        var number = getRandomNumber(1, 100);
    } while (inArray(number, numbers) == true)
    numbers.push(number);
}
alert("These are the numbers you must memorize " + numbers);

setTimeout(insertNumbersAndCheck, 3000);
function insertNumbersAndCheck(choices) {
    var choice;
    var wrongChoices = [];
    var correctChoices = [];
    for (i = 0; i < 5; i ++) {
        do {
            choice = parseInt(prompt("Please type a number"))
        } while (isNaN(choice) == true || choice < 1 || choice > 100)
        if (inArray(choice, numbers) == true) {
            correctChoices.push(choice);
        } else {
            wrongChoices.push(choice);
        }
    }
    console.log(correctChoices);
}