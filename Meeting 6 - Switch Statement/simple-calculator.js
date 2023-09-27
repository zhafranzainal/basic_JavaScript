var num1 = 10;
var num2 = 4;
var operators = ['x', '+', '-', ':'];
var random = Math.floor(Math.random() * 4);
var choosenOperator = operators[random];

switch (choosenOperator) {

    case 'x':
        total = num1 * num2
        console.log(total)
        break;

    case '+':
        total = num1 + num2
        console.log(total)
        break;

    case '-':
        total = num1 - num2
        console.log(total)
        break;

    case ':':
        total = num1 / num2
        console.log(total)
        break;

}
