var studentScores = [70, 75, 60, 70, 85, 90, 90, 75, 100, 96];
var total = 0;

for (i = 0; i < studentScores.length; i++) {
    total += studentScores[i];
}

var average = total / studentScores.length;

console.log('Total score    : ' + total);
console.log('Score average  : ' + average);
