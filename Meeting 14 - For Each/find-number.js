var numbers = [111, 11, 1, 111, 1111, 11, 11, 111, 1, 111];

numbers.forEach((number, index) => {

    if (number === 1111) {
        console.log(`${number} located at index ${index}`);
        return; // This won't exit the forEach loop, but it will skip next iteration
    }

    console.log(`Loop ${index}`);

});
