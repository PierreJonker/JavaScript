// Define an array containing duplicate elements
const arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

// Use the filter method to create a new array with unique elements
const arr2 = arr.filter((value, index, array) => {
    // Log the current value, index, and the index of the first occurrence of the value in the array
    console.log(value, index, array.indexOf(value));
    // Return true if the index of the current value is equal to its first occurrence in the array
    return array.indexOf(value) === index;
});

// Output the resulting array containing unique elements
console.log(arr2);
