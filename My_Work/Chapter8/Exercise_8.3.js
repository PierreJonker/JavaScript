// Define an array containing numeric elements
const myArr = [1, 4, 5, 6];

// Use the map method with a traditional function to create a new array where each element is doubled
const myArr1 = myArr.map(function(ele) {
    return ele * 2;
});
console.log(myArr1); // Output the resulting array to the console

// Use the map method with an arrow function to create a new array where each element is doubled
const myArr2 = myArr.map((ele) => ele * 2);
console.log(myArr2); // Output the resulting array to the console
