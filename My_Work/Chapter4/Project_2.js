// Prompt the user to enter a name and store the input in the variable 'person'
let person = prompt("Enter a name");

// Declare a variable to store the message
let message;

// Start a switch statement based on the value of 'person'
switch (person) {
    // If 'person' is "John", "Larry", "Jane", or "Laurence", set 'message' accordingly
    case "John":
    case "Larry":
    case "Jane":
    case "Laurence":
        message = person + " is my friend";
        break;
    // If 'person' is not one of the specified names, set 'message' to indicate that it's unknown
    default:
        message = "I don't know " + person;
}

// Output the message to the console
console.log(message);
