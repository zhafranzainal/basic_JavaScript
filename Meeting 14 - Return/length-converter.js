function cmToMeter(cm) {
    var m = cm * 0.01;
    return `${cm} cm is ${m} meter`;
}

function cmToKm(cm) {
    var km = cm * 0.00001;
    return `${cm} cm is ${km} km`;
}

function cmToMm(cm) {
    var mm = cm * 10;
    return `${cm} cm is ${mm} mm`;
}

console.log(cmToMeter(100));
console.log(cmToKm(100));
console.log(cmToMm(100));
