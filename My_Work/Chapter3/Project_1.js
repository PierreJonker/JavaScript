// Define an array named 'theList' containing various data types and values
let theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

// Remove the last element from the array
theList.pop(); 

// Remove the first element from the array
theList.shift(); 

// Add the string "FIRST" to the beginning of the array
theList.unshift("FIRST"); 

// Replace the element at index 3 with the string "hello World"
theList[3] = "hello World"; 

// Replace the element at index 2 with the string "MIDDLE"
theList[2] = "MIDDLE"; 

// Add the string "LAST" to the end of the array
theList.push("LAST"); 

// Output the modified array to the console
console.log(theList);
