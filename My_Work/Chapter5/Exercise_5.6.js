// Initialize an empty array to store the numbers
const myArray = [];

// Populate the array with numbers from 1 to 10
for (let x = 0; x < 10; x++) {
    myArray.push(x + 1);
}

// Output the entire array
console.log(myArray);
 
// Iterate through the array using a traditional for loop
for (let i = 0; i < myArray.length; i++) {
    // Output each element of the array
    console.log(myArray[i]);
}

// Iterate through the array using a for...of loop
for (let val of myArray) {
    // Output each element of the array
    console.log(val);
}
