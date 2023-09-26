function checkNumber(number) {

    if (number > 0) {
        return "positive";
    } else if (number < 0) {
        return "negative";
    } else {
        return "not negative or positive";
    }

}

console.log("Test number -40 :", checkNumber(-40));
console.log("Test number 50  :", checkNumber(50));
console.log("Test number 0   :", checkNumber(0));