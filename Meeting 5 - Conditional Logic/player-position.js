function determinePlayerPosition(x, y) {

    if (x > 0 && y > 0) {
        return "top right";
    } else if (x < 0 && y < 0) {
        return "bottom left";
    } else if (x > 0 && y < 0) {
        return "bottom right";
    } else if (x < 0 && y > 0) {
        return "top left";
    } else {
        return "middle";
    }

}

const position1 = determinePlayerPosition(3, 4);
const position2 = determinePlayerPosition(-2, -1);
const position3 = determinePlayerPosition(2, -1);
const position4 = determinePlayerPosition(-3, 4);
const position5 = determinePlayerPosition(0, 0);

console.log(`Position 1: ${position1}`);
console.log(`Position 2: ${position2}`);
console.log(`Position 3: ${position3}`);
console.log(`Position 4: ${position4}`);
console.log(`Position 5: ${position5}`);
