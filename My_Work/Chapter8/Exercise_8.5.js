// Define a string with uppercase and lowercase characters
let val = "I love JavaScript";

// Convert the string to lowercase for consistent comparison
val = val.toLowerCase();

// Define an array containing vowels
let vowels = ["a", "e", "i", "o", "u"];

// Iterate through each vowel in the vowels array
vowels.forEach((letter, index) => {
    // Output the current vowel to the console
    console.log(letter);
    // Replace all occurrences of the current vowel in the string with its index
    val = val.replaceAll(letter, index);
});

// Output the modified string with vowels replaced by their respective indices
console.log(val);
