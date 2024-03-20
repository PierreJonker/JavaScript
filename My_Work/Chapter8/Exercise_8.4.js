// Define a string with mixed case words
const val = "thIs will be capiTalized for each word";

// Define a function to capitalize the first letter of each word in a string
function wordsCaps(str) {
    // Convert the string to lowercase to standardize
    str = str.toLowerCase();
    
    // Initialize an empty array to store modified words
    const tempArr = [];
    
    // Split the string into an array of words
    let words = str.split(" ");
    
    // Iterate through each word in the array
    words.forEach(word => {
        // Capitalize the first letter of each word and append the rest of the word
        let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
        // Add the modified word to the temporary array
        tempArr.push(temp);
    });
    
    // Join the modified words back into a string and return
    return tempArr.join(" ");
}

// Call the function with the provided string and output the result
console.log(wordsCaps(val));
