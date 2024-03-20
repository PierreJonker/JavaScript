// Define an object 'obj' with three properties
const obj = {
    a: 1,
    b: 2,
    c: 3
};

// Iterate over the properties of the object using a for...in loop
for (let prop in obj) {
    // Output each property along with its corresponding value
    console.log(prop, obj[prop]);
}

// Define an array 'arr' containing three elements
const arr = ["a", "b", "c"];

// Iterate over the array using a traditional for loop
for (let w = 0; w < arr.length; w++) {
    // Output the index and the element at that index
    console.log(w, arr[w]);
}

// Iterate over the array using a for...in loop
for (el in arr) {
    // Output each index along with the element at that index
    console.log(el, arr[el]);
} 
