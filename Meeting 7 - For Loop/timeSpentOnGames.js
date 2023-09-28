/*
Steve plays games every day and has a daily limit of 2 hours for gaming.
Here's the time he spent playing games each day of the week:

Monday      : 2 hours
Tuesday     : 2 hours
Wednesday   : 3 hours
Thursday    : 3 hours
Friday      : 1 hour
Saturday    : 4 hours
Sunday      : 5 hours

What is the total time Steve spent playing games during the week
and the number of times he exceeded his playing time limit?
*/

// Define an array to store the time spent on each day
const timeSpentPerDay = [2, 2, 3, 3, 1, 4, 5];

// Initialize variables to track the total time and the count of times exceeded the limit
let totalGameTime = 0;
let exceededLimitCount = 0;

// Iterate through the array and calculate the total time and count exceedances
for (let i = 0; i < timeSpentPerDay.length; i++) {

    totalGameTime += timeSpentPerDay[i];

    if (timeSpentPerDay[i] > 2) {
        exceededLimitCount++;
    }

}

// Display the total time and exceeded limit count
console.log("Total time spent on games:", totalGameTime, "hours");
console.log("Number of times exceeded the playing time limit:", exceededLimitCount);
