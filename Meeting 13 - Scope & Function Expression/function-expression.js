// function expression without function name
var greeting = function () {
    console.log("Hello World");
}

greeting();
sayHello();

function sayHello() {
    console.log("Hello");
}

// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("Hello");
})();
