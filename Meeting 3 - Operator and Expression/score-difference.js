/*
Steve is playing a game, and his current score is 1858.
Steve will get 50XP everytime his score is a multiple of 500.
How many more scores does he need to collect in order to earn the next XP?
*/

const currentScore = 1858;
const requiredXp = 500;

// Calculate the remainder
const remainder = currentScore % requiredXp;

// Calculate the difference to get the next XP
const difference = requiredXp - remainder;

console.log(`Need ${difference} more scores to get the next XP!`);