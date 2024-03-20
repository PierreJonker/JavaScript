// Define a string
let str = "JavaScript";

// Define a function to scramble the characters of a string
function scramble(val) {
    // Get the length of the input string
    let max = val.length;
    // Initialize an empty string to store the scrambled result
    let temp = "";
    // Iterate through each character of the input string
    for(let i = 0; i < max; i++) {
        // Output the current length of the input string
        console.log(val.length);
        // Generate a random index within the current length of the input string
        let index = Math.floor(Math.random() * val.length);
        // Append the character at the random index to the temporary string
        temp += val[index];
        // Output the current state of the temporary string
        console.log(temp);
        // Remove the character at the random index from the input string
        val = val.substr(0, index) + val.substr(index + 1);
        // Output the current state of the input string after removing the character
        console.log(val);
    }
    // Return the scrambled string
    return temp;
}

// Call the scramble function with the input string and output the result
console.log(scramble(str));
