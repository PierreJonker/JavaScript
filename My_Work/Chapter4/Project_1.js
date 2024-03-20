// Prompt the user for input and store it in the variable 'val'
let val = prompt("What number?");

// Convert the input to a number and store it back in 'val'
val = Number(val);

// Define a variable 'num' and set its value to 100
let num = 100;

// Define a variable 'message' and set its initial value to "nothing"
let message = "nothing";

// Check if the value stored in 'val' is greater than 'num'
if (val > num) {
    // If true, update 'message' to indicate that 'val' was greater than 'num'
    message = val + "  was greater than " + num;
} 
// If the first condition is false, check if 'val' is equal to 'num'
else if (val === num) {
    // If true, update 'message' to indicate that 'val' was equal to 'num'
    message = val + "  was equal to " + num;
} 
// If both previous conditions are false
else {
    // Update 'message' to indicate that 'val' is less than 'num'
    message = val + " is less than " + num;
}

// Output the value of 'message' to the console
console.log(message);

// Output the value of 'message' to the console again
console.log(message);
