function checkLicenseEligibility(age) {

    if (age >= 18) {
        return "You are eligible for a driver's license.";
    } else {
        return "You are not eligible for a driver's license.";
    }

}

const age1 = 8;
const age2 = 17;
const age3 = 20;

console.log(`Age ${age1}: ${checkLicenseEligibility(age1)}`);
console.log(`Age ${age2}: ${checkLicenseEligibility(age2)}`);
console.log(`Age ${age3}: ${checkLicenseEligibility(age3)}`);
