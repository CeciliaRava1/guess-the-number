// Set two values to define the range of the guess
const min = 1;
const max = 100;

//Get the target number to guess between these two values
function getNumberToGuess(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
result = getNumberToGuess(min, max);

// Receive the player's input number
function guessTheNumber() {
    let playerInputNumber = document.getElementById("number-input").value;
    document.getElementById("user-message").innerHTML = playerInputNumber;

    // Define a message for the player
    if (playerInputNumber >= 1 && playerInputNumber <= 100) {
        if (playerInputNumber == result) {
            document.getElementById("user-message").innerHTML = 'You win!';
        } else if (playerInputNumber < result) {
            document.getElementById("user-message").innerHTML = 'The number is greater';
        } else {
            document.getElementById("user-message").innerHTML = 'The number is less';
        }
    } else {
        document.getElementById("user-message").innerHTML = 'The number must be between 1 and 100';
    }
}




