// Output the smallest integer greater than or equal to a given number (5.7)
console.log(Math.ceil(5.7));

// Output the largest integer less than or equal to a given number (5.7)
console.log(Math.floor(5.7));

// Output the value of a number rounded to the nearest integer (5.7)
console.log(Math.round(5.7));

// Output a random floating-point number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// Output a random integer between 0 (inclusive) and 10 (exclusive)
console.log(Math.floor(Math.random() * 11)); // 0-10

// Output a random integer between 1 (inclusive) and 10 (inclusive)
console.log(Math.floor(Math.random() * 10) + 1); // 1-10

// Output a random integer between 1 (inclusive) and 100 (inclusive)
console.log(Math.floor(Math.random() * 100) + 1); // 1-100

// Define a function to generate a random integer within a specified range
function ranNum(min, max) {
    // Return a random integer between min and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate and output 100 random integers between 1 and 100 (inclusive)
for (let x = 0; x < 100; x++) {
    console.log(ranNum(1, 100));
}
