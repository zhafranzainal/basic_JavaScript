let life = 5; // Initial life count
let time = 0; // Initial time

// Function to check losing condition
function isGameOver() {

    if (life <= 0 || time >= 60) {
        return true;
    } else {
        return false;
    }

}

// Simulate game loop
function gameLoop() {

    // Update game state
    life--; // Decrease life (simulate life loss)
    time++; // Increase time (simulate time passing)

    if (isGameOver()) {
        console.log("Game over!");
    } else {
        console.log(`Life: ${life}, Time: ${time}`);
        setTimeout(gameLoop, 1000);
    }

}

gameLoop();