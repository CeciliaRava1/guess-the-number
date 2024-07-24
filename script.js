// Get two values to define the range of the guess
const min = 1;
const max = 100;

//Get the target number to guess between these two values
function getNumberToGuess(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
result = getNumberToGuess(min,max);
console.log(result);

// Receive the player's input number
const guessed = false;
while(!guessed){
    let playerInputNumber = 10;
    // Define a message for the player
    if (playerInputNumber == result){
        console.log('You win!')
        const guessed = true;
    } else if(playerInputNumber > result){
        console.log('The number is greater')
    } else {
        console.log('The number is less')
    }
}

  