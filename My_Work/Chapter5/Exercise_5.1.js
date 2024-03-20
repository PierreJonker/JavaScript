// Define the maximum number for the guessing game
const max = 5;
// Generate a random number between 1 and 'max'
const ranNumber = Math.floor(Math.random() * max) + 1;

// Initialize a variable to track if the correct number has been guessed
let correct = false;

// Continue prompting the user for guesses until the correct number is guessed
while (!correct) {
    // Prompt the user to guess a number between 1 and 'max'
    let guess = prompt("Guess a Number 1 - " + max);
    // Convert the user's input to a number
    guess = Number(guess);

    // Check if the guessed number matches the random number
    if (guess === ranNumber) {
        // If the guess is correct, set 'correct' to true and alert the user
        correct = true;
        alert("You got it " + ranNumber);
    } else if (guess > ranNumber) {
        // If the guess is too high, alert the user
        alert("Too high");
    } else {
        // If the guess is too low, alert the user
        alert("Too Low");
    }
}
