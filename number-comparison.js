let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 101));
}

let smallest = numbers[0];
let largest = numbers[0];

for (let number of numbers) {

    if (number < smallest) {
        smallest = number;
    }

    if (number > largest) {
        largest = number;

    }

}

console.log("BIG: " + largest);
console.log("SMALL: " + smallest);
