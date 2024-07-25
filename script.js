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
    let message = document.getElementById("user-message")

    // Define a message for the player
    if (playerInputNumber >= 1 && playerInputNumber <= 100) {
        if (playerInputNumber == result) {
            message.textContent = 'You win!';
            message.style.color = '#87c97c';
            message.style.fontSize = '100px';
            document.getElementById("number-input").setAttribute("disabled", "true");
            return;

        } else if (playerInputNumber < result) {
            message.textContent = 'The number is greater';
        } else {
            message.textContent = 'The number is less';
        }
    } else {
        message.textContent = 'The number must be between 1 and 100';
    }
}




