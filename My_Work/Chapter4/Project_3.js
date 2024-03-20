// Define an array containing the options for the game "Rock, Paper, Scissors"
const myArr = ["Rock", "Paper", "Scissors"];

// Generate a random index for the computer's choice
let computer = Math.floor(Math.random() * 3); 

// Generate a random index for the player's choice
let player = Math.floor(Math.random() * 3); 

// Create a message indicating the player's and computer's choices
let message = "player " + myArr[player] + " vs computer " + myArr[computer] + " "; 

// Check for a tie
if (player === computer) { 
    message += "it's a tie"; 
} 
// Check if player wins
else if (player > computer) { 
    // Special case: if player chooses "Scissors" and computer chooses "Rock"
    if (computer == 0 && player == 2) { 
        message += "Computer Wins"; 
    } 
    // Otherwise, player wins
    else { 
        message += "Player Wins"; 
    } 
} 
// Otherwise, computer wins
else { 
    // Special case: if player chooses "Rock" and computer chooses "Scissors"
    if (computer == 2 && player == 0) { 
        message += "Player Wins"; 
    } 
    // Otherwise, computer wins
    else { 
        message += "Computer Wins"; 
    } 
} 

// Output the result of the game to the console
console.log(message);
