let randomNumber;
const expectedNumber = 5;

do {
    randomNumber = Math.floor(Math.random() * 11);
    console.log(`Random Number: ${randomNumber}`);
} while (randomNumber !== expectedNumber);

console.log(`\nThe number that comes out is ${randomNumber}, hence the program stops.`);
