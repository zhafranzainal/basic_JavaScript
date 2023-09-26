function determineGrade(score) {

    if (score <= 60) {
        return 'D';
    } else if (score <= 75) {
        return 'C';
    } else if (score <= 90) {
        return 'B';
    } else {
        return 'A';
    }

}

const score1 = 95;
const score2 = 80;
const score3 = 65;
const score4 = 50;

console.log(`Score ${score1}: ${determineGrade(score1)}`);
console.log(`Score ${score2}: ${determineGrade(score2)}`);
console.log(`Score ${score3}: ${determineGrade(score3)}`);
console.log(`Score ${score4}: ${determineGrade(score4)}`);