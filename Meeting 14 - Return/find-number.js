var numbers = [111, 11, 1, 111, 1111, 11, 11, 111, 1, 111];

for (i = 0; i < numbers.length; i++) {

    if (numbers[i] == 1111) {
        console.log(`${numbers[i]} located at index ${i}`);
        return;
    }

    console.log(`Loop ${i}`);

}